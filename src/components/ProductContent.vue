<script setup>
import { ref } from 'vue'
import image1 from "../assets/image1.jpg"
const selection1 =  ref(true)
const selection2 =  ref(false)
const toggle1 = () => {
     selection2.value = false
    selection1.value = !selection1.value
}
const toggle2 = () => {
    selection1.value = false
    selection2.value = !selection2.value

  
}
const  tags =  [
        'Pain killer',
        'Home Improvement',
        'Vacation',
        'Food',
        'Creative Writing',
      ]
 console.log(tags)


 const categories =  [
        'transquilizers',
        'Home Improvement',
        'Creative Writing',
      ]


const isCategory =  ref(true)
const isTags =  ref(false)
const toggleCategory = () => {
    if(isTags.value){
        isTags.value = false
        isCategory.value = true
    
    }
     
}
const toggleTag = () => {
    if(isCategory.value){
        isCategory.value = false
        isTags.value = true
    }
}
  


</script>


<template>
    <main>
     <v-row>

<v-col cols="6" class="mt-16">
    <v-hover v-slot="{isHovering, props}">
    <v-expand-x-transition mode="out-in">
 <v-card class="bg-transparent">
    <v-img class="rounded transition-fast-in-fast-out" height="125" :src="image1" cover :width="300" v-bind="props">
    <v-expand-transition>
        <div v-if="isHovering" class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal text-h2 flex-column" style="height: 100%;">
    <div class="d-flex flex-row">
    <v-card-subtitle class="font-weight-bold"> GHS 450.00</v-card-subtitle>
    <v-card-subtitle class="text-decoration-line-through"> 500.00</v-card-subtitle>
    </div>
    <v-card-title>Paracetamol</v-card-title>
    
        <div>
            <v-chip color="red" text="Out of Stock" size="small" label  class="bg-white text-uppercase">
            </v-chip>
        </div>
    
        </div>
    </v-expand-transition>
    </v-img>
   
    <v-card-actions>
        <v-btn text-color="primary">Add to Cart</v-btn>
        <v-btn text-color="primary">View</v-btn>
    </v-card-actions>
 </v-card>
</v-expand-x-transition>
</v-hover>


  </v-col>
  
  <v-col cols="6">
    <v-sheet
    class="mx-auto"
    elevation="10"
    :max-width="$vuetify.display.mdAndBelow ? 300 : 500"
    rounded="xl"
    :ml="$vuetify.display.mdAndDown ? 0 : n3"
  >
  <v-sheet
      class="pa-3 bg-primary text-right"
      rounded="t-xl"
    >
    <v-chip-group
        selected-class="bg-red-accent-4"
        column
      >
        <v-chip @click="toggleCategory">
         categories
        </v-chip>
        <v-chip @click="toggleTag"  >
         tags
        </v-chip>
      </v-chip-group>
    </v-sheet>

   
    <div class="pa-2 bg-white">
      <v-chip-group
        selected-class="text-primary"
        column
        v-if="isCategory"
      >
        <v-chip
          v-for="tag in tags"
          :key="tag"
        >
          {{ tag }}
        </v-chip>
      </v-chip-group>
      <v-chip-group
        selected-class="text-primary"
        column
        v-if="isTags"
      >
        <v-chip
          v-for="category in categories"
          :key="category"
        >
          {{ category }}
        </v-chip>
      </v-chip-group>
    </div>
    <v-sheet
      class="pa-4 bg-red-accent-4"
      rounded="b-xl"
    >
    <p class="text-caption">PRACK AND DAUGHTERS PHARMACY</p>
  </v-sheet>
  </v-sheet>

  </v-col>

  </v-row>
<v-row>
  <v-col cols="10">
    <v-hover v-slot="{isHovering, props}">
 <v-card class="bg-white">
    <v-card-actions>
        <v-btn text-color="primary" @click="toggle1" :color=" selection1? 'primary': ''"> Description </v-btn>
        <v-btn text-color="primary" @click="toggle2" :color=" selection2? 'primary': ''">Review</v-btn>
    </v-card-actions>

  <v-expand-x-transition>
    <div>
    <v-card-text class="description "  v-if="selection1">
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi incidunt consequatur aperiam illo inventore iusto consequuntur qui nemo sequi magni, reprehenderit tenetur eius amet quisquam laudantium vitae suscipit. Distinctio, molestias.
    </v-card-text>
    </div>
</v-expand-x-transition>


        <!-- thiis has to be one component -->
    <div>
    <v-card-text v-if="selection2">
        No review yet
    </v-card-text>
    </div>
 </v-card>
</v-hover>
  </v-col>
</v-row>
</main>
</template>


<style scoped>
.v-card--reveal{
    align-items: center;
    bottom:0;
    justify-content: center;
    opacity: .9;
    position: absolute;
    width: 100%;
}

</style>


