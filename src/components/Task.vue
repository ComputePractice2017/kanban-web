<template>
  <div>
    <div class="task" :name=task.name @click="showModal = true">
      <h2><span @click="deleteTask">X</span> {{ task.name }}</h2>
      <p>{{ task.details }}</p>
    </div>
    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">Change Task</h3>
      <h3 slot="body">
        <input v-model="task.name"    placeholder="Название задачи"><br>
        <input v-model="task.details" placeholder="Описание задачи"><br>
      </h3>
    </modal>
  </div>
</template>

<script>
import { bus } from '@/main'
import modal from '@/components/Modal'

export default {
  name: 'Task',
  props: ['task', 'state'],
  data () {
    return {
      showModal: false
    }
  },
  components: {
    modal
  },
  methods: {
    deleteTask: function () {
      bus.$emit('some', { name: this.task.name, state: this.state })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2, p {
  font-weight: normal;
  margin-top: 5px;
  margin-bottom: 0.1em;
}

.task {
  background-color: #eee;
  border-radius: 0.25em;
}
.task:hover {
  background-color: #ddd;
}

a {
  color: #42b983;
}
</style>
