<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="task in tasks">
        Name: {{ task.name }}
        <br>
        Details: {{task.details}}
      </li>
    </ul>
    <addtask-modal @taskSaved="handleNewTask"></addtask-modal>
  </div>
</template>

<script>
import AddtaskModal from './AddTask'

export default {
  name: 'kanban',
  data () {
    return {
      tasks: []
    }
  },
  components: {
    AddtaskModal
  },
  methods: {
    handleNewTask: function (taskData) {
      this.tasks.push(taskData)
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
