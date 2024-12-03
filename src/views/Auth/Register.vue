<script setup>
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';

let formData = reactive({
  name: "",
  email: "",
  password: "",
  passwordConfirm: ""
});

</script>

<template>
  <section class="flex items-center justify-center">
    <div>
      <form @submit.prevent="console.log(formData)">
        <h2 class="text-4xl font-bold">Register a new account</h2>
        <!-- name -->
        <div class="form-control w-full my-4">
          <label class="label">
            <span class="label-text">User Name</span>
          </label>
          <input type="text" v-model="formData.name" placeholder="user name"
            class="input input-bordered w-full max-w-md" required autocomplete="name" />
        </div>
        <!-- email -->
        <div class="form-control w-full my-4">
          <label class="label">
            <span class="label-text">Email Address</span>
          </label>
          <input type="email" v-model="formData.email" placeholder="email address"
            class="input input-bordered w-full max-w-md" required />
        </div>
        <!-- password -->
        <div class="form-control w-full my-4">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" v-model="formData.password" placeholder="password"
            class="input input-bordered w-full max-w-md" required />
        </div>
        <!-- password confirmation -->
        <div class="form-control w-full my-4">
          <label class="label">
            <span class="label-text">Password Confirmation</span>
          </label>
          <input type="password" v-model="formData.passwordConfirm" placeholder="password confirmation"
            class="input input-bordered w-full max-w-md" required />
        </div>
        <div class="flex items-center justify-end mr-5">
          <RouterLink to="/login" class="btn btn-link text-sm">
            already have an account
          </RouterLink>
          <button type="submit" class='btn btn-primary'>Register</button>
        </div>
      </form>
    </div>
  </section>
</template>


<style scoped></style>