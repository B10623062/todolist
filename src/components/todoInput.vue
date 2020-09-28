<template>
  <div class="todoInput mt-5">
    <v-container>
      <v-text-field
        v-model.trim="todo"
        outlined
        label="請輸入待辦事項"
        @keyup.enter="submitHandler()"
      />
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todo: ''
    }
  },
  methods: {
    submitHandler () {
      if (!this.todo) {
        return
      }
      this.$store.commit('ADD_TODO', {
        content: this.todo,
        complete: false
      })
      this.todo = ''
    }
  }
}
</script>

<style scoped>
.todoInput{
    max-width: 600px;
    margin: 0 auto;
}
</style>
