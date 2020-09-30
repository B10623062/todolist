<template>
  <div class="todoItem">
    <v-text-field
      v-if="edit!=null"
      v-model.trim="edit"
      outlined
      @keyup.enter="submitHandler()"
      @keyup.esc="cancelHandler()"
      @blur="cancelHandler()"
    />
    <div
      v-else
      class="d-flex align-center justify-space-between"
    >
      <v-checkbox v-model="complete" />
      <div @dblclick="editHandler()">
        <span>{{ todo.content }}</span>
      </div>
      <v-btn
        fab
        text
        @click="deleteHandler()"
      >
        <v-icon>close</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      edit: null
    }
  },
  computed: {
    todo () {
      return this.$store.state.todos[this.index]
    },
    complete: {
      get () {
        return this.todo.complete
      },
      set (val) {
        this.$store.commit('UPDATE_TODO', {
          index: this.index,
          data: {
            content: this.todo.content,
            complete: val
          }
        })
      }
    }
  },
  methods: {
    deleteHandler () {
      if (confirm(`是否確定刪除 ${this.todo.content} ?`)) {
        this.$store.commit('REMOVE_TODO', this.index)
      }
    },
    editHandler () {
      this.edit = this.todo.content
    },
    submitHandler () {
      if (!this.edit) {
        this.editHandler()
        return this.cancelHandler()
      }
      this.$store.commit('UPDATE_TODO', {
        index: this.index,
        data: {
          content: this.edit,
          complete: this.todo.complete
        }
      })
      this.cancelHandler()
    },
    cancelHandler () {
      this.edit = null
    }
  }
}

</script>

<style scoped>
.todoItem{
    max-width: 600px;
    margin: 0 auto;
}
</style>
