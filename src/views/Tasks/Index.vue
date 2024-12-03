<script setup>
import { useTasksStore } from '@/stores/tasks';
import { onMounted, ref } from 'vue';

const { getAllTasks } = useTasksStore();
const tasks = ref([])
onMounted(async () => tasks.value = await getAllTasks());
</script>
<template>
  <div>
    <div class="card card-bordered w-96 p-4">
      <h1 class="card-title">Tasks</h1>
      <div class="card-body m-4 p-4">
        <div v-for="task in tasks" :key="task.id" class="flex items-center space-x-4">
          <div :class="task.is_completed ? 'line-through ' : ''">
            {{ task.task }}
          </div>
          <input type="checkbox" :checked="task.is_completed" class="checkbox checkbox-sm" />
        </div>
      </div>
    </div>
  </div>
</template>
