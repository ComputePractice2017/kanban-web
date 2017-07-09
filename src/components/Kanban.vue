<template>
  <div class="hello">
    <div ref="statesWrapper">
      <State v-for="state in states" :state=state key=state.name ref="kbstate" ></State>
    </div>
    <addtask-modal @taskSaved="handleNewTask" :states=states></addtask-modal>
    <addstate-modal @stateSaved="handleNewState"></addstate-modal>
  </div>
</template>

<script>
import AddtaskModal from '@/components/AddTask'
import AddstateModal from '@/components/AddState'
import State from '@/components/State'
import { bus } from '@/main'

import dragula from 'dragula'

export default {
  name: 'kanban',

  data () {
    return {
      states: [],
      tasks: [],
      drake: undefined
    }
  },

  components: {
    'addtask-modal': AddtaskModal,
    'addstate-modal': AddstateModal,
    'State': State
  },

  methods: {
    log: function (e) {
      console.log(e)
    },

    updateBlock: function (block, list) {
      // send changes to the server
      this.log([block.attributes.name, list.attributes.state])
    },

    handleNewTask: function (taskData) {
      let state = this.states.findIndex(s => s.name === taskData.state)
      if (state >= 0) {
        // update for server
        this.states[state].tasks.push(taskData)
      } else {
        this.states.push({name: taskData.state, tasks: [taskData]})
      }
      console.log(this.states)
    },

    handleNewState: function (stateData) {
      this.states.push(stateData)
    },

    makeDragula: function (elems, options, callback) {
      return dragula(elems, options)
        .on('drag', (el) => {
          el.classList.add('is-moving')
        })
        .on('drop', (block, list) => {
          callback(block, list)
        })
        .on('dragend', (el) => {
          el.classList.remove('is-moving')
          window.setTimeout(() => {
            el.classList.add('is-moved')
            window.setTimeout(() => {
              el.classList.remove('is-moved')
            }, 60)
          }, 10)
        })
    },

    updateDrag: function () {
      let els = this.$refs.kbstate ? this.$refs.kbstate.map(e => e.$refs.tasksContainer) : []

      if (!this.drake && !this.drakeWrapper) {
        this.drakeWrapper = this.makeDragula([this.$refs.statesWrapper],
          {'direction': 'horizontal',
            moves: function (el, source, handle, sibling) {
              return handle.tagName === 'H1'
            }
          },
          this.log)
        this.drake = this.makeDragula(els, {}, this.updateBlock)
      } else {
        this.drake.containers = els
        this.drakeWrapper.containers = [this.$refs.statesWrapper]
      }
    },

    deleteTask: function (e) {
      console.log('some', e)
      let st = this.states.find(s => s.name === e.state)
      if (st) {
        let taskIdx = st.tasks.findIndex(t => t.name === e.name)
        if (taskIdx >= 0) {
          st.tasks.splice(taskIdx, 1)
        }
      }
    }
  },

  mounted () {
    this.updateDrag()
    let that = this
    bus.$on('some', that.deleteTask)
  },

  updated () {
    this.updateDrag()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  /*display: inline-block;*/
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
