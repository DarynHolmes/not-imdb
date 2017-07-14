<template>
    <div>
        <div v-if="film">
                <v-card>
                    <!-- <v-card-media :src="film.poster" width="" height="300px"></v-card-media> -->
                    <v-card-title primary-title>
                    <img :src="film.poster"></img>
                    </v-card-title>
                    
                </v-card>
            
            
            
            
<!--             
            <div>
                <img :src="film.poster"></img>
            </div>
             {{ film.title }}  -->
            <app-reviews :reviews="reviews"></app-reviews>
        </div>
        <div v-else>
            Please select a film
        </div>
    </div>
</template>

<script>
  import axios from 'axios';  
  import Reviews from './Reviews.vue';  
  
  export default {
    components: {
        appReviews: Reviews
    },
    props: [ 'film' ],
    computed: {
        reviews() {
            return this.film.reviews;
        }
    }
  }
</script>


<style scoped>

    img {
        width: 100%; 
        height: auto;
        /*max-height: 500px;*/
    }


</style>
