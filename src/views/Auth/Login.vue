<script setup>
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';

let formData = reactive({
  email: "",
  password: "",
});
</script>

<template>
  <section class="flex items-center justify-center">
    <div>
      <form @submit.prevent="console.log(formData)">
        <h2 class="text-4xl font-bold">Log In to your account</h2>
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
        <div class="flex items-center justify-end mr-5">
          <RouterLink to="/register" class="btn btn-link text-sm">
            dont have an account?
          </RouterLink>
          <button type="submit" class='btn btn-primary'>Login</button>
        </div>
      </form>
    </div>
  </section>
</template>


<style scoped></style>