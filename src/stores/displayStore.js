// Utilities
import { defineStore } from 'pinia'
import {useDisplay} from 'vuetify'
import { watchEffect, ref } from 'vue'



export const useDisplayStore = defineStore('displayStore',()=> {
    const changeView = ref(null)
    const {mobile } = useDisplay()
    watchEffect(()=>{
        console.log('mobile:',mobile)
        changeView.value = !mobile
    })
    return {mobile, changeView}


})