<template>
  <div>
    <button id="show-modal" @click="showModal = true; newData()">Добавить новую задачу</button>
    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">Add Task</h3>
      <h3 slot="body">
        <input v-model="name" placeholder="Название задачи"><br>
        <input v-model="details" placeholder="Описание задачи"><br>

        <button @click="addTask">Add</button>
      </h3>
      <h3 slot="footer">Cool footer</h3>
    </modal>
  </div>
</template>

<script>
import modal from '@/components/Modal'

export default {
  name: 'addtask-modal',
  data () {
    return {
      name: '',
      details: '',
      showModal: false
    }
  },
  components: {
    modal
  },
  methods: {
    addTask: function () {
      this.$emit('taskSaved', {name: this.name, details: this.details})
      this.showModal = false
      this.name = ''
      this.details = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
