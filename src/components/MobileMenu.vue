<template v-if="displayStore.changeView">
        <v-navigation-drawer
          v-model="drawerStore.drawer"
          :temporary="drawerStore.drawer"
          class="bg-red-accent-4 z-10"
          
        >
         

          <template v-slot:append>
          <div class="pa-2">
            <v-btn block>
              Logout
            </v-btn>
          </div>
        </template>


        </v-navigation-drawer>
   </template>
  <script setup>
    import {useDrawerStore} from '@/stores/drawerStore'
    import {useDisplayStore} from '@/stores/displayStore'
    import {ref} from 'vue'
    const drawerStore = useDrawerStore()
    const displayStore = useDisplayStore()
    console.log(drawerStore.drawer, 'this is the value of the drawer')
  
    const items = ref([
          {
            title: 'Foo',
            value: 'foo',
          },
          {
            title: 'Bar',
            value: 'bar',
          },
          {
            title: 'Fizz',
            value: 'fizz',
          },
          {
            title: 'Buzz',
            value: 'buzz',
          },
        ])
        console.log(displayStore.changeView)

  </script>