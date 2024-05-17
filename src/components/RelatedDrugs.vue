<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useRelatedDrugs } from '../composables/useRelatedDrugs'
const relatedDrugs = []

</script>


<template>
    <div>
        <h2>Related Drugs</h2>
        <v-row>
        <v-col cols="4" v-for="drug in relatedDrugs" :key="drug.id">
            <router-link :to="{ name: 'drugs', params: { id: drug.id } }">
            {{ drug.name }}
            <v-sheet>
                <v-img :src="drug.image" height="100px"></v-img>
            </v-sheet>
            </router-link>
        </v-col>
        </v-row>
    </div>
</template>