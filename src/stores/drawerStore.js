// Utilities
import { defineStore } from 'pinia'

export const useDrawerStore = defineStore('drawerStore',()=> {
    const drawer = ref(false)

    return{drawer}
})
