<template>
    
    <v-app-bar
    style="border-radius: 10px;"
          color="teal-darken-4"
          image="https://picsum.photos/1920/1080?random"
         class="position-sticky  top-0"
         density="compact"
    >
    <template v-slot:image>
            
            <v-img
              gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
            ></v-img>
          </template>
          <template v-slot:prepend>
            <v-app-bar-nav-icon @click="dothis()" v-if="$vuetify.display.smAndDown"> </v-app-bar-nav-icon>
            <p v-else> Fort</p>
          <v-app-bar-title class="text-body-2 w-25">Prack and Daughters Pharmacy</v-app-bar-title>
          </template>

          <template v-slot:append>
            <div class="d-flex flex-row">
                <v-btn icon>
                    <v-icon>mdi-cart</v-icon>

                </v-btn>
                <p class="text-weight-thin text-body-2 text-h6 " v-if="!displayStore.smAndDown">
                    GHS 150
                </p>
               
                <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn >

            </div>
            {{ displayStore.changeView }}
           
          </template>
          
  

    </v-app-bar>
    
 

</template>


<script setup>
import { ref } from 'vue';
import {useDrawerStore} from '@/stores/drawerStore'
import {useDisplayStore} from '@/stores/displayStore'

const displayStore = useDisplayStore()

const drawerStore = useDrawerStore()
// const drawer = ref(false);
console.log('this is the value of the sm', displayStore.changeView)

const dothis = () => {
  
  drawerStore.drawer = !drawerStore.drawer
  console.log('hiiii', drawerStore.drawer)
}
</script>