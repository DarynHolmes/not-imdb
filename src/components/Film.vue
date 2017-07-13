<template>
    <div>
        <div v-if="film">
            <div>
                <img :src="film.thumbnail"></img>
            </div>
            {{ film.title }}
        </div>
        <div v-else>
            Please select a film
        </div>
    </div>
</template>

<script>


  export default {
    props: [ 'film' ]   
  }
</script>


<style scoped>

    img {
        width: 100%; 
        height: auto;
        /*max-height: 500px;*/
    }


</style>
