<template >
   <v-carousel
   height='450'
   class="w-2"
   hide-delimiters
   :cycle ="true"
   :interval="6000"
   show-arrows = "hover"
   reverse-transition="fade-transition"
    transition="fade-transition"
    v-if="$vuetify.display.mdAndUp"
   >
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" cover>
      <v-sheet
        class="bg-transparent d-flex fill-height justify-center align-center"
      >
      
      <v-card
      :title="item.messageTitle"
      :text="item.message"
      variant="outlined"
      class="w-25"
      
    >
    </v-card>

      </v-sheet>
    </v-carousel-item>
  </v-carousel>
  </template>
  

<script setup>
 import {ref} from 'vue'
 import image1 from "../assets/image1.jpg"
 import image2 from "../assets/image2.jpg"
 import image3 from "../assets/image3.jpg"
 import image4 from "../assets/image4.jpg"

 import {useDisplayStore} from '@/stores/displayStore'
 const displayStore = useDisplayStore()
 const items  = ref( [
          {
            src:image1,
            message: 'that they all may be one',
            messageTitle: 'Choose Prack and Daughters'
          },
          {
            src: image2,
            message: 'that they all may be one',
            messageTitle: 'Choose Prack and Daughters'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            message: 'that they all may be one',
            messageTitle: 'Choose Prack and Daughters'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            message: 'that they all may be one',
            messageTitle: 'Choose Prack and Daughters'
          },
          {
            src: image3,
            message: 'that they all may be one',
            messageTitle: 'Choose Prack and Daughters'
          },
          {
            src: image4,
            message: 'that they all may be one',
            messageTitle: 'Choose Prack and Daughters'
          },
        ])
  
</script>

