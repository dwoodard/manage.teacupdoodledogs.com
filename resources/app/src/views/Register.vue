<template>
  <div class="max-w-md mx-auto">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Register your account
      </h2>
    </div>

    {{ errors }}

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="register">
          <BaseInput value.sync="name" label="Name" placeholder="First Name" :error="errors?.name" />

          <div>
            <label class="block text-sm font-medium text-gray-700">Email address</label>
            <div class="mt-1">
              <input
                v-model="email"
                type="email"
                autocomplete="email"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div class="mt-1">
              <input
                v-model="password"
                type="password"
                autocomplete="current-password"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">
              Password Confirm
            </label>
            <div class="mt-1">
              <input
                v-model="password_confirmation"
                type="password"
                autocomplete="current-password"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import BaseInput from '../components/BaseInput';

export default {
  components: { BaseInput },
  data() {
    return {
      errors: null,
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    };
  },
  methods: {
    register() {
      axios.post('register', {
        name: this.name,
        email: this.email,
        password: this.password,
      }).then((result) => {
        if (result?.errors) {
          const { errors } = result.data;
          this.errors = errors;
        }
      });
    },
  },
};
</script>
