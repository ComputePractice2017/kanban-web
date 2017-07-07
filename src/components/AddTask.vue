<template>
  <div>
    <button id="show-modal" @click="showModal = true;">Добавить новую задачу</button>
    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">Add Task</h3>
      <h3 slot="body">
        <input v-model="name"    placeholder="Название задачи"><br>
        <input v-model="details" placeholder="Описание задачи"><br>
        <select v-model="state" v-bind:class="{ error: stateError }">
          <option disabled value="">Выберите один из вариантов (состояние)</option>
          <option v-for="vstate in states" key="vstate.name" :value="vstate.name">{{ vstate.name }} ({{ vstate.tasks.length }})</option>
        </select>
        <button @click="addTask">Add</button>
      </h3>
    </modal>
  </div>
</template>

<script>
import modal from '@/components/Modal'

export default {
  name: 'addtask-modal',
  props: ['states'],
  data () {
    return {
      name: '',
      details: '',
      state: '',
      showModal: false,
      stateError: false
    }
  },
  components: {
    modal
  },
  methods: {
    addTask: function () {
      if (!this.state) {
        this.stateError = true
        return
      }
      this.$emit('taskSaved', {name: this.name, details: this.details, state: this.state})
      this.stateError = false
      this.showModal = false
      this.name = ''
      this.details = ''
      this.state = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  border: #f00 solid 2px;
}
</style>
