<template v-if="">
        <v-navigation-drawer
          v-model="drawerStore.drawer"
          :temporary="drawerStore.drawer"
          class="bg-deep-purple z-10"
      
        >
        <v-list class="d-flex bg-transparent flex-column">
            <v-list-item title="Home" value="home"/>
            <v-list-item title="About" value="about"/>
            <v-list-item title="Service" value="service"/>
            <v-list-item title="Contact" value="contact"/>
            <v-list-item title="GHS 100.00" />
          </v-list>
          

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
        console.log(displayStore.mobile, 'this is the value of the changeView')

  </script>