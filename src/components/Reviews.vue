<template>
    <div>
        <v-card v-for="review in reviews" :key="review.id">
            <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">{{review.author}}</h3>
                <div>{{review.content}}</div>
            </div>
            </v-card-title>
            <!-- <v-card-actions>
                <v-btn flat class="orange--text">Share</v-btn>
            </v-card-actions> -->
      </v-card>

    </div>
  
</template>

<script>
export default {
  props: ['reviews']
}
</script>

