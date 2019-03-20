<template>
  <div id="login-page">
    <h2 class="text-center">Login</h2>
    <form @submit.prevent="handleSubmit" class="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4 max-w-xs mx-auto">
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input v-model="username" :class="{ 'border-red': submitted && !username }" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
        <div v-show="submitted && !username" class="text-sm text-red mt-2">Username is required</div>
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input v-model="password" :class="{ 'border-red': submitted && !password }" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
        <div v-show="submitted && !password" class="text-sm text-red mt-2">Password is required</div>
      </div>
      <div class="flex items-center justify-between">
        <button id="login-button" class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Sign In
        </button>
        <router-link to="/register" class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker">
          Sign Up
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    data () {
        return {
            username: '',
            password: '',
            submitted: false
        }
    },
    computed: {
        ...mapState('account', ['status'])
    },
    created () {
        // reset login status
        this.logout();
    },
    methods: {
        ...mapActions('account', ['login', 'logout']),
        handleSubmit (e) {
            this.submitted = true;
            const { username, password } = this;
            if (username && password) {
                this.login({ username, password })
            }
        }
    }
};
</script>
