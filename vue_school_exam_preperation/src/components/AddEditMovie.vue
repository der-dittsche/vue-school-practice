<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import { items } from "@/store/movies.json";
import type {Movie} from "@/types/movies";

const props = defineProps({
  isOpen: Boolean,
  movieToEdit: {
    type: Object as () => Movie,
    required: false
  }
});

const emits = defineEmits(['add_edit_movie', 'close_modal'])

const movies = reactive(items);

const formData = ref({
  id: 0,
  name: '',
  description: '',
  image: '',
  genres: [] as string[],
  inTheaters: false
});

const genreOptions = [
  'Action',
  'Drama',
  'Komödie',
  'Thriller',
  'Science Fiction',
  'Fantasy',
  'Animation',
  'Dokumentation'
];

function submitForm() {
  const newMovie = {
    id: formData.value.id || (movies.length + 1),
    name: formData.value.name,
    description: formData.value.description,
    image: formData.value.image,
    genres: formData.value.genres,
    inTheaters: formData.value.inTheaters,
    rating: 0
  };
  emits("add_edit_movie", newMovie, newMovie.id)
  resetForm();
}

function resetForm() {
  formData.value = {
    id: 0,
    name: '',
    description: '',
    image: '',
    genres: [],
    inTheaters: false
  };
}

const dialogOpen = ref(false);

watch(() => props.isOpen, (value) => {
  dialogOpen.value = value;
});

watch(() => props.movieToEdit, (newMovie) => {
  if (newMovie) {
    formData.value = {
      id: newMovie.id,
      name: newMovie.name,
      description: newMovie.description,
      image: newMovie.image,
      genres: [...newMovie.genres],
      inTheaters: newMovie.inTheaters
    };
  } else {
    resetForm();
  }
});

function closeDialog() {
  resetForm();
  emits("close_modal")
  dialogOpen.value = false;
  resetForm()
}
</script>

<template>
  <v-dialog v-model="dialogOpen">
    <v-card>
      <v-card-title>Neuen Film hinzufügen</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="submitForm">
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="formData.name" label="Name" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea v-model="formData.description" label="Beschreibung"></v-textarea>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="formData.image" label="Bild URL"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select v-model="formData.genres" :items="genreOptions" label="Genres" multiple chips></v-select>
            </v-col>
            <v-col cols="12">
              <v-checkbox v-model="formData.inTheaters" label="In Theatern"></v-checkbox>
            </v-col>
            <v-col cols="12">
              <v-btn type="submit" color="primary">Film speichern</v-btn>
              <v-btn @click="closeDialog" color="secondary">Zurück</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>
