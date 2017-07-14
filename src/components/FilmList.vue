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
      <!-- <div > -->
                <v-list-tile v-for="film in films" :key="film.id" @click.native="filmClicked(film)" avatar v-bind:key="film.title">
                    <v-list-tile-avatar>
                        <img v-bind:src="film.thumbnail"></v-list-tile-avatar>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title v-html="film.title"></v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                      <div class="text-xs-center">
                          <v-chip>{{film.reviews.length}}</v-chip>
                      </div>
                    </v-list-tile-action>
                </v-list-tile>
        <!-- </div> -->
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
        console.log("Clicked!!!");
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

