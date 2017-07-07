<template>
  <div class="state" :id="state.name">
    <h1>{{ state.name }}</h1>
    <div class="tasks">
      <Task v-for="task in state.tasks" :task=task key=task.name></Task>
    </div>
  </div>
</template>

<script>
import Task from '@/components/Task'

export default {
  name: 'State',
  props: ['state'],
  data () {
    return {
    }
  },
  components: {
    'Task': Task
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  font-size: 12pt;
}

.state {
  width: 200px;
  border: #ccc 2px solid;
  display: inline-block;
}

.tasks {
  min-height: 400px;
  max-height: 800px;
  overflow-y: scroll;
  padding-left: 5px;
  padding-right: 5px;
  border-top: 1px #ccc solid;
}

a {
  color: #42b983;
}
</style>
