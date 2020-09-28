<template>
  <v-app>
    <Navbar />
    <v-main>
      <todoInput />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import todoInput from './components/todoInput'

export default {
  name: 'App',
  components: {
    Navbar,
    todoInput
  },
  computed: {
    todoIndex () {
      return this.$store.getters.todoIndex
    }
  },
  mounted () {
    this.$store.dispatch('INIT_TODOS')
  }
}
</script>
