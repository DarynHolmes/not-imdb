<template>

  <v-list one-line>
       <v-layout row>
          <v-flex xs8>
            <v-text-field
              name="search"
              label="Search"
              id="search"
              prepend-icon="search"
              :value="searchTerm" 
              @input="setSearch"
            ></v-text-field>
          </v-flex>
       </v-layout>
      <div v-for="(film, index) in films" :key="film.id" @click="filmClicked(film)">
                <v-list-tile avatar v-bind:key="film.title">
                <v-list-tile-avatar>
                    <img v-bind:src="film.thumbnail"></v-list-tile-avatar>
                </v-list-tile-avatar>
                <v-list-tile-content>
                    <v-list-tile-title v-html="film.title"></v-list-tile-title>
                </v-list-tile-content>
                </v-list-tile>
        </div>
    </v-list>

</template>

<script>
  import debounce from 'debounce';
  export default {
    props: [ 'films' ],
    data() {
      return {
        searchTerm: ""
      }
    },
    methods: {
      filmClicked(film) {
        this.$emit('filmClicked', film)
      },
      setSearch: debounce(function (term) {
        this.searchTerm = term;
        this.$emit('newSearch', this.searchTerm);

      }, 300)
    }
    
  }
</script>


<style>

</style>

