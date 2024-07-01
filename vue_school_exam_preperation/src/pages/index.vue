<template>
  <v-container>
    <h1>Movie App</h1>
    <v-btn @click="openModalAddEditMovies = true" text="Add a movie"/>
    <AddEditMovie
      :movieToEdit="movieToEdit"
      :isOpen="openModalAddEditMovies"
      @add_edit_movie="handleAddEditMovie"
      @close_modal="openModalAddEditMovies = false"/>
    <v-row>
      <v-col
        v-for="item in movies"
        :key="item.id"
        cols="12"
        sm="6" md="4" lg="3" xl="2"
        class="pt-8"
      >
        <MovieCard
          :movie="item"
          @update_rating_movie="handleUpdateRating"
          @delete_movie="handleDeleteMovie"
          @update_movie="handleEditMovie"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { items } from "@/store/movies.json";
import { reactive, ref} from "vue";
import MovieCard from "@/components/MovieCard.vue";
import AddEditMovie from "@/components/AddEditMovie.vue";
import type {Movie} from "@/types/movies";

const movies = reactive(items);
const openModalAddEditMovies = ref(false)
const movieToEdit = ref<Movie>()

function handleUpdateRating(movie: Movie, rating: number) {
  const index = movies.findIndex((m) => m.id === movie.id);
  if (index !== -1) {
    movies[index].rating = rating;
  }
}

function handleDeleteMovie(id: number) {
  const index = movies.findIndex((m) => m.id === id);
  if (index !== -1) {
    movies.splice(index, 1);
  }
}

function handleAddEditMovie(newMovie: Movie, id?: number) {
  console.log(newMovie)
  if (id) {
    console.log(`Edit Movie with ID: ${newMovie.id}`);
    const index = movies.findIndex((m) => m.id === id);
    if (index !== -1) {
      movies[index] = { ...movies[index], ...newMovie };
    }
  } else {
    console.log('Add new movie:', newMovie);
    movies.push(newMovie);
  }
  openModalAddEditMovies.value = false
}

function handleEditMovie(id:number) {
  const movie = movies.find((m) => m.id === id);
  if (movie) {
    movieToEdit.value = { ...movie };
    openModalAddEditMovies.value = true;
  }
}

</script>
