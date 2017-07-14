<template>
  <div id="example-1">
    <v-layout row wrap>
      <v-flex xs6>
        <v-card>
          <v-card-text>
            <app-film-list :films="films" @filmClicked="selectFilm" @newSearch="newSearch"></app-film-list>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card v-if="showDetails">
          <v-card-text><app-film :film="selectedFilm"></app-film></v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import FilmList from './FilmList.vue';
  import Film from './Film.vue';
  import axios from 'axios';
  import api from '../api';
  
  export default {
    components: {
      appFilmList: FilmList,
      appFilm: Film
    },
    data () {
      return {
        films: [
          // { id: 1, thumbnail: 'http://i.dailymail.co.uk/i/pix/2017/01/16/20/332EE38400000578-4125738-image-a-132_1484600112489.jpg', title: 'Dinner this weekend?', subtitle: "<span class='grey--text text--darken-2'>Ali Connors</span> — I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
          // { id: 2, thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlUiyrmhTXFppqk4aYzqTOU9nimCQsYibukwAV8rstsDkAVQT-mA', title: 'Summer BBQ', subtitle: "<span class='grey--text text--darken-2'>to Alex, Scott, Jennifer</span> — Wish I could come, but I'm out of town this weekend." },
          // { id: 3, thumbnail: 'http://i.dailymail.co.uk/i/pix/2016/09/13/14/384A98B300000578-0-image-a-63_1473774825844.jpg', title: 'Oui oui', subtitle: "<span class='grey--text text--darken-2'>Sandra Adams</span> — Do you have Paris recommendations? Have you ever been?" }
        ],
        selectedFilm: null,
        isLoading: false
      }
    },
    computed: {
        showDetails() {
          return this.selectedFilm !== null;
        }
    },
    methods: {
      selectFilm(film) {
        // console.log(film);
        this.selectedFilm = film;
      },
      newSearch(searchTerm) {
        console.log("me new search", searchTerm);
        this.isLoading = true;
        this.films = [];
        this.selectedFilm = null;

        api.searchByTitle(searchTerm)
          .then(response => {
            // console.log(data);
            this.films = response.data.films
            })
          .catch(console.error);
      }
    }
    
    
  }
</script>


<style scoped>
  #example-1 {
    /*color: #fff;*/
    width: 90%;
  }

  #example-1 .flex {
    margin-bottom: 16px;
    flex-grow: 1;
  }
</style>

