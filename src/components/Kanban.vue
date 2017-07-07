<template>
  <div class="hello">
    <State v-for="state in states" :state=state key=state.name></State>
    <addtask-modal @taskSaved="handleNewTask" :states=states></addtask-modal>
    <addstate-modal @stateSaved="handleNewState"></addstate-modal>
  </div>
</template>

<script>
import AddtaskModal from './AddTask'
import AddstateModal from './AddState'
import State from './State'

export default {
  name: 'kanban',
  data () {
    return {
      states: [],
      tasks: []
    }
  },
  components: {
    'addtask-modal': AddtaskModal,
    'addstate-modal': AddstateModal,
    'State': State
  },
  methods: {
    handleNewTask: function (taskData) {
      let state = this.states.findIndex(s => s.name === taskData.state)
      console.log(state)
      if (state >= 0) {
        this.states[state].tasks.push(taskData)
      } else {
        this.states.push({name: taskData.state, tasks: [taskData]})
      }
    },
    handleNewState: function (stateData) {
      this.states.push(stateData)
    }
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
