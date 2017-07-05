<template>
  <div class="task">
    <h2>{{ task.name }}</h2>
    <p>{{ task.details }}</p>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: ['task'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.task {
  margin-bottom: 1em;
  background-color: #ccc;
}

a {
  color: #42b983;
}
</style>
