<template>
  <div>
    <button id="show-modal" @click="showModal = true;">Добавить новое состояние</button>
    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">Add State</h3>
      <h3 slot="body">
        <input v-model="name"    placeholder="Название состояния"><br>
        <button @click="addState">Add</button>
      </h3>
    </modal>
  </div>
</template>

<script>
import modal from '@/components/Modal'

export default {
  name: 'addstate-modal',
  data () {
    return {
      name: '',
      showModal: false,
      stateError: false
    }
  },
  components: {
    modal
  },
  methods: {
    addState: function () {
      if (!this.name) {
        this.stateError = true
        return
      }
      this.$emit('stateSaved', {name: this.name, tasks: []})
      this.stateError = false
      this.showModal = false
      this.name = ''
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
