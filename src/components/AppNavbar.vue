<template>
      
        <v-app-bar
        style="border-radius: 10px;"
          color="teal-darken-4"
          image="https://picsum.photos/1920/1080?random"
         class="position-sticky  top-0"
        >
          <template v-slot:image>
            
            <v-img
              gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
            ></v-img>
          </template>
  
          <template v-slot:prepend>
            <v-app-bar-nav-icon ></v-app-bar-nav-icon>
          <v-app-bar-title class="text-h5">Prack and Daughters Pharmacy</v-app-bar-title>
          </template>
  
          <!-- <v-spacer></v-spacer> -->
          <v-list class="d-flex bg-transparent">
            <v-list-item title="Home" value="home"/>
            <v-list-item title="About" value="about"/>
            <v-list-item title="Service" value="service"/>
            <v-list-item title="Contact" value="contact"/>
            <v-list-item>
              Currency
            </v-list-item>
          </v-list>
          
          <div class="search ml-15">
            <v-text-field
                append-inner-icon="mdi-magnify"
                density="compact"
                label="Search"
                variant="outlined"
                hide-details
                single-line
                class="pa-2 bg-transparent"
              />
          </div>
          
          <template v-slot:append>
            <v-btn variant="tonal" class="mr-3">
              Login
              <template v-slot:prepend>
                <v-icon icon="mdi-login"/>
              </template>
            </v-btn>
          </template>
          
         
            
        </v-app-bar>
    
    
    
    
  </template>

  <style scoped>
    .search{
      width: 200px
    }
  </style>