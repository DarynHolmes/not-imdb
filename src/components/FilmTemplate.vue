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
        films: [],
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
        this.selectedFilm = film;
      },
      newSearch(searchTerm) {
        console.log("me new search", searchTerm);
        this.isLoading = true;
        this.films = [];
        this.selectedFilm = null;

        api.searchByTitle(searchTerm)
          .then(response => {
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

