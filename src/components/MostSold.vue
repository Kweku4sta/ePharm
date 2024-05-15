<script setup>
import { ref } from 'vue'
import image1 from "../assets/image1.jpg"

const items = [
    {
        title: 'Paracetamol syrup 25mg',
        image: 'https://via.placeholder.com/300',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.'
    },
    {
        title: 'Item 2',
        image: 'https://via.placeholder.com/300',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.'
    },
    {
        title: 'Item 3',
        image: 'https://via.placeholder.com/300',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.'
    },
    {
        title: 'Item 4',
        image: 'https://via.placeholder.com/300',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.'
    },
    {
        title: 'Item 5',
        image: 'https://via.placeholder.com/300',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.'
    },
    {
        title: 'Item 6',
        image: 'https://via.placeholder.com/300',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.'
    },
    {
        title: 'Item 7',
        image: 'https://via.placeholder.com/300',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.'
    },


]
</script>


<template>
    <v-container class=" bg-transparent w-100">
        <v-row  class="">
            <v-col cols="12"   class="">
                <v-card class="bg-transparent ">
                    <v-card-title>Most Sold</v-card-title>
                    <v-card-text>
                        <v-row ga-2 >
                            <v-col cols="12" md="3" v-for="item in items" :key="item.title" class="rounded "> 

                                <v-card class="bg-white w-80 h-78 ">
                                    <v-expand-x-transition>
                                    <v-img :src="image1" height="100px" class="rounded-pill mt-2">
                                    </v-img>
                                </v-expand-x-transition>
                                    <div class="">
                                    <v-card-title class=" text-h6">{{ item.title }}</v-card-title>
                                    <div class="d-flex flex-row">
                                        <v-card-subtitle class="font-weight-bold"> GHS 450.00</v-card-subtitle>
                                    <v-card-subtitle class="text-decoration-line-through"> 500.00</v-card-subtitle>
                                    </div>
                                    <v-card-actions class="mx-auto justify-centre">
                                        <!-- <v-btn color="orange" icon="mdi-cart" ></v-btn> -->
                                        <v-btn size="small"  class="m-n2 bg-blue"> Add to Cart</v-btn>
                                        <v-btn size="small"   class="m-n2 bg-blue"> Details {{  }} {{  }}</v-btn>
                        
                                    </v-card-actions>
                                </div>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>





