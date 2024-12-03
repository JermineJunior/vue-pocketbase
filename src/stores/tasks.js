
import { defineStore } from "pinia";
import pb from "@/services/pocketbase";

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    errors: {}
  }),
  actions: {
    async getAllTasks() { 
      const records = await pb.collection('tasks').getFullList({
        sort: '-created',
      });
      console.log(records)
      return records;
    }
  }
})