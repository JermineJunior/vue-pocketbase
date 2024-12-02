<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
    <header>
        <NavBar />
    </header>
    <main class="bg-base-100 my-6">
        <div class="py-6">
            <RouterView />
        </div>
    </main>
</template>
