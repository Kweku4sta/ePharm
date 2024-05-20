<template>
    <main >
    <v-sheet class="mx-auto" elevation="8" :max-width="$vuetify.display.mdAndUp ? '': 800 ">
      <v-slide-group
        v-model="model"
        class="pa-4 bg-white mt-10"
        selected-class="bg-primary"
        multiple
      >
        <v-slide-group-item 
          v-for="n in 15"
          :key="n"
          v-slot="{ isSelected, toggle, selectedClass }"
        >
          <v-card
            :class="['ma-2', selectedClass]"
            color="white"
            height="200"
            :width="$vuetify.display.mdAndUp ? 200: 100 "
            @click="toggle"
          >
         <v-img :src="image2"></v-img>
         <p  class="text-h7 text-body-n2 text-caption">Paracetamol syrup</p>
            
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
</main>
  </template>
  
  <script setup>
import image2 from "../assets/image2.jpg";
    
    import {ref} from "vue"
    const model = []

    
  </script>
  