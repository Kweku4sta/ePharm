<script setup>
import { ref, computed} from 'vue';
import { useDisplayStore } from '@/stores/displayStore';
import image1 from '../assets/image1.jpg';
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
const displayStore = useDisplayStore()


 const cardsPerView = computed(()=>{
   if (displayStore.changeView){
     return 1
   }
   
   else {
     return 3
   }
 })


const  scrollIndex = ref(0)
const show = ref(false)

   let  cards = ref([
      { image: image1, title: 'What is family planning', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
      { image: image2, title: 'Card 2', description: "Im a thing. But, like most politicians, he promised more than hecould deliver. You wont have time for sleeping, soldier, not with allthe bed making youll be doing. Then well go with that data file! Hey, you add a one and two zeros to that or we walk! Youre going to do his laundry? Ive got to find a way to escape." },
      { image: image4, title: 'Card 3', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
      { image: image3, title: 'Card 4', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
      { image: image5, title: 'Card 5', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
      { image: image6, title: 'Card 6', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
      
    ]);

    
  
    const visibleCards = computed(()=>{
      return  cards.value.slice(scrollIndex.value , scrollIndex.value + cardsPerView.value);
  
    })

    

    
    const scrollNext =()=>{
        if (scrollIndex.value >= cards.value.length - cardsPerView.value){
            scrollIndex.value=0;
          }
      
         scrollIndex.value++; 
        
         
    }
    const scrollPrev =()=>{
        if (scrollIndex.value !== 0){
          
            scrollIndex.value--;        
        }
        
     
    }
    
</script>


<template>
    <v-row no-gutters class=" d-flex flex-wrap ">
      <div class="d-flex justify-space-between">
        <v-btn class=" position-absolute mb-n7" icon="mdi-arrow-left" @click="scrollPrev"></v-btn>
    <v-btn class="position-absolute  " icon="mdi-arrow-right" @click="scrollNext"></v-btn>

      </div>
    
        <TransitionGroup name="fade" class="container" >
          
            <v-col  class="pa-10" :key="i" v-for="(item, i) in visibleCards" cols="12" md="4" >
              
     <v-card  class="mx-auto" elevation="12" max-width="300" >
    
    <v-img
      height="200px"
      :lazy-src="item.image"
      :src = "item.image"
      cover
      rounded="pill"
    >
    <template v-slot:placeholder>
      <div class="d-flex align-center justify-center fill-height">
        <v-progress-circular
          color="grey-lighten-5"
          indeterminate
        ></v-progress-circular>
      </div>
    </template>
    
    </v-img>

    <v-card-title> {{item.title}}</v-card-title>
    <v-card-actions>
      <v-btn color="orange-lighten-2" text="Read More"></v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ item.description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
        </v-col>
     

        
    </TransitionGroup>
    
    </v-row>
</template>



<style>
.container {
  position: relative;
  padding: 0;
  list-style-type: none;
}



/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>