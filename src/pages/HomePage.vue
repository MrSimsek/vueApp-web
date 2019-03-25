<template>
  <div id="home-page" class="text-center">
    <h1>Hi {{account.user.firstName}}!</h1>
    <p class="my-3">You're logged in with Vue + Vuex & JWT!!</p>
    <h3>Users from secure api end point:</h3>
    <em v-if="users.loading">Loading users...</em>
    <span v-if="users.error" class="text-red">ERROR: {{users.error}}</span>
    <ul v-if="users.items" class="list-reset my-12">
        <li v-for="user in users.items" :key="user.id" class="mb-8 text-lg">
            <span>{{user.firstName + ' ' + user.lastName}}</span>
            <span v-if="user.deleting" class="text-red"><em> - Deleting...</em></span>
            <span v-else-if="user.deleteError" class="text-red"> - ERROR: {{user.deleteError}}</span>
            <span v-else> - <a @click="deleteUser(user.id)" class="text-white rounded-full bg-red p-2 cursor-pointer">Delete</a></span>
        </li>
    </ul>
    <p>
        <router-link to="/login">Logout</router-link>
    </p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState({
            account: state => state.account,
            users: state => state.users.all
        })
    },
    created () {
        this.getAllUsers();
    },
    methods: {
        ...mapActions('users', {
            getAllUsers: 'getAll',
            deleteUser: 'delete'
        })
    }
};
</script>
