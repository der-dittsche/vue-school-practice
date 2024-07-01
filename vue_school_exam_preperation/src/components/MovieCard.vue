<script setup lang="ts">
import type {Movie} from '@/types/movies';
import {ref} from 'vue';

defineProps({
  movie: {
    type: Object as () => Movie,
    required: true
  }
});

const emit = defineEmits(["update_rating_movie", "delete_movie", "update_movie"]);

function editMovie(i: number) {
  emit("update_movie", i);
}

const hoverCard = ref(false)

function changeRating(movie: Movie, i: number) {
  movie.rating = i
  emit("update_rating_movie", movie, i)
}

function deleteMovie(i: number) {
  emit('delete_movie', i);
}
</script>

<template>
  <v-card @mouseenter="hoverCard = !hoverCard" @mouseleave="hoverCard = !hoverCard" class="bg-grey-lighten-4 rounded-xl">
    <div class="position-relative">
      <v-icon class="position-absolute top-0 right-0 bg-transparent text-lime-accent-3 mt-4 mr-2" icon="mdi-star"
              style="z-index: 50" size="56"/>
      <p class="position-absolute top-0 right-0 mt-9 mr-8" style="z-index: 100">{{ movie.rating }}</p>
      <v-img
        aspect-ratio="1/1"
        :height="400"
        :src="movie.image"
      ></v-img>

    </div>

    <v-card-title>
      {{ movie.name }}
    </v-card-title>
    <v-card-text class="position-relative">

      <div class="d-flex flex-col ga-2 mb-4 flex-wrap" style="min-height: 64px"
      >
        <v-btn
          v-for="genre in movie.genres"
          color="blue"
          size="small"
          readonly
        >
          {{ genre }}
        </v-btn>
      </div>
      <div style="min-height: 200px">
        <p>
          {{ movie.description }}
        </p>
      </div>
      <div>
        <v-icon v-for="n of 5" :key="n" icon="mdi-star"
                :class="[n <= movie.rating ? 'text-lime-accent-3' : 'text-grey', n === movie.rating ? 'cursor-not-allowed' : '']"
                @click="changeRating(movie, n)"></v-icon>
      </div>
      <div v-show="hoverCard" class="position-absolute bottom-0 right-0 ma-2">
        <v-btn @click="editMovie(movie.id)" icon="mdi-pencil-circle-outline" density="compact"/>
        <v-btn @click="deleteMovie(movie.id)" icon="mdi-delete-circle-outline" density="compact"/>
      </div>

    </v-card-text>
  </v-card>
</template>
