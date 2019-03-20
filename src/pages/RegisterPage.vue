<template>
    <div id="register-page">
        <h2 class="text-center">Register</h2>
        <form @submit.prevent="handleSubmit" class="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4 max-w-xs mx-auto">
            <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="firstName">
                    First Name
                </label>
                <input v-model="user.firstName" v-validate="'required'" name="firstName" :class="{ 'border-red': submitted && errors.has('firstName') }" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First Name">
                <div v-if="submitted && errors.has('firstName')" class="text-sm text-red mt-2">{{ errors.first('firstName') }}</div>
            </div>
            <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="lastName">
                    Last Name
                </label>
                <input v-model="user.lastName" v-validate="'required'" name="lastName" :class="{ 'border-red': submitted && errors.has('lastName') }" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Last Name">
                <div v-if="submitted && errors.has('lastName')" class="text-sm text-red mt-2">{{ errors.first('lastName') }}</div>
            </div>
            <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
                    Username
                </label>
                <input v-model="user.username" v-validate="'required'" name="username" :class="{ 'border-red': submitted && errors.has('username') }" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                <div v-if="submitted && errors.has('username')" class="text-sm text-red mt-2">{{ errors.first('username') }}</div>
            </div>
            <div class="mb-6">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input v-model="user.password" v-validate="{ required: true, min: 6 }" name="password" :class="{ 'border-red': submitted && errors.has('password') }" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
                <div v-if="submitted && errors.has('password')" class="text-sm text-red mt-2">{{ errors.first('password') }}</div>
            </div>
            <div class="flex items-center justify-between">
                <button id="register-button" class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Sign Up
                </button>
                <router-link to="/login" class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker">
                    Sign In
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
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        }
    },
    computed: {
        ...mapState('account', ['status'])
    },
    methods: {
        ...mapActions('account', ['register']),
        handleSubmit(e) {
            this.submitted = true;
            this.$validator.validate().then(valid => {
                if (valid) {
                    this.register(this.user);
                }
            });
        }
    }
};
</script>
