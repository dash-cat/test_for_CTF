import { createStore } from "vuex";

// Create a new store instance.
export const store = createStore({
  state() {
    return {
      weather: [],
    };
  },
  actions: {
    async fetchUsers({ commit }) {
      const weather = await fetch(
        "https://jsonplaceholder.typicode.com/users/"
      ).then((response) => response.json());
      commit("setUsers", weather);
    },
  },
  mutations: {
    setUsers(state, weather) {
      state.weather = weather;
    },
  },
});