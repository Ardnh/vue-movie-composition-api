<template>
    <div v-if="movieData.length > 0">
        <div>
            <p class="text-center">Search Result</p>
        </div>
        <div v-for="data in movieData" :key="data.imdbId">
            <div class="w-64 h-auto p-3 m-3 bg-white rounded-lg detailCard hover:bg-gray-200" @click="getDetail(data.imdbId)">
                <img :src="data.poster" :alt="data.title">
                <div class="mt-3">
                    <p>{{ data.title }}</p>
                    <div class="flex flex-row">
                        <p class="pr-2">{{ data.year }}</p>
                        <p class="bg-sky-300 px-2 rounded-full">{{ data.type }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <p class="text-center">Movie not found</p>
    </div>
</template>

<script setup>
import {  } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const { movieData } = defineProps(['movieData'])
const router = useRouter()
console.log(movieData.length)

function getDetail(id){
    console.log(id)
    router.push({
        name: 'detail',
        params:{ id }
    })
}


</script>

<style scoped>
.detailCard{
    cursor: pointer;
}

</style>