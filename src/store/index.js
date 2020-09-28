import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const LS = {
  load () {
    return JSON.parse(localStorage.getItem('vue-todos') || '[]')
  },
  save (data) {
    localStorage.setItem('vue-todos', JSON.stringify(data))
  }
}

const filter = {
  All (todos) {
    return todos
  },
  Active (todos) {
    return todos.filter(todo => {
      return !todo.complete
    })
  },
  Complete (todos) {
    return todos.filter(todo => {
      return todo.complete
    })
  }
}

export default new Vuex.Store({
  strict: true,
  state: {
    todos: [
      { content: 'todo-content', complete: false },
      { content: 'todo-content', complete: true },
      { content: 'todo-content', complete: false }
    ]
  },
  getters: {
    todoIndex (state) {
      return filter[state.route.name](state.todos).map(todo => {
        return state.todos.indexOf(todo)
      })
    }
  },
  mutations: {
    SET_TODOS (state, data) {
      state.todos = data
      // save LS
      LS.save(state.todos)
    },
    ADD_TODO (state, data) {
      state.todos.push(data)
      LS.save(state.todos)
    },
    UPDATE_TODO (state, { index, data }) {
      state.todos[index] = data
      LS.save(state.todos)
    },
    REMOVE_TODO (state, index) {
      state.todos.splice(index, 1)
      LS.save(state.todos)
    }
  },
  actions: {
    INIT_TODOS ({ commit }) {
      // load LS(local storage)
      commit('SET_TODOS', LS.load())
    }
  },
  modules: {
  }
})
