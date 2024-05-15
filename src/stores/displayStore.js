// Utilities
import { defineStore } from 'pinia'
import {useDisplay} from 'vuetify'
import { watchEffect, ref, watch } from 'vue'



export const useDisplayStore = defineStore('displayStore',()=> {
    const {smAndDown } = useDisplay()
    const changeView = ref()
   watchEffect(()=>{
     changeView.value = smAndDown.value
   })

    
    return {smAndDown ,changeView}


})