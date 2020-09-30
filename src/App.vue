<template>
  <v-app>
    <Navbar />
    <v-main>
      <todoInput />
      <div class="list">
        <todoItem
          v-for="index in todoIndex"
          :key="index"
          :index="index"
        />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import todoInput from './components/todoInput'
import todoItem from './components/todoItem'

export default {
  name: 'App',
  components: {
    Navbar,
    todoInput,
    todoItem
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
