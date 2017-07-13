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
    data() {
        return {
            reviews: []
        }
    },
    methods: {
        fetchReviews() {
            console.log("Fetching reviews");
            axios.get(`https://api.themoviedb.org/3/movie/${this.film.id}/reviews`, {
            params: {
              api_key: 'd81847c99fcc2c246df68557ee7a651b',
              language: 'en'
            }
          })
          .then(function (response) {
            //console.log(response);
            console.log("Review count:", response.data.results.length);
            this.reviews = response.data.results.map(data => ({
                                                                id: data.id, 
                                                                author: data.author, 
                                                                content: data.content,
                                                                url: data.url
                                                            }));
          }.bind(this))
          .catch(function (error) {
            console.log(error);
          }.bind(this));

        }
    },
    created() {
        console.log('Created');
        // this.fetchReviews();
        this.fetchReviews();
    },
    updated() {
        console.log('Updated');
        // this.fetchReviews();
    },
    watch : {
        film : function (value) {
          console.log('film changed to '+value);
          this.fetchReviews();
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
