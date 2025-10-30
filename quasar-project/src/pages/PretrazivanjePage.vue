<template>
  <q-page padding>
    <div class="simple-search-container">
      <h3>Pretraživanje Knjiga</h3>
      
      <input 
        type="text" 
        v-model="searchTerm" 
        placeholder="Unesite pojam za pretraživanje (Autor ili Naslov)"
        class="search-input"
      >
      
      <button @click="performSearch" class="search-button">Traži</button>

      <table class="results-table">
        <thead>
          <tr>
            <th>Naslov</th>
            <th>Autor</th>
            <th>Godina</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(book, index) in foundBooks" :key="index">
            <td>{{ book.title }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.year }}</td>
          </tr>
          <tr v-if="foundBooks.length === 0">
            <td colspan="3">Nema pronađenih knjiga.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const searchTerm = ref('');

// Definiranje podataka o knjigama (kao što smo radili prije)
const allBooks = [
    { title: 'Patnje mladog Werthera', author: 'Goethe', year: 1774 },
    { title: 'Zločin i kazna', author: 'Dostojevski', year: 1866 },
    { title: 'Sto godina samoće', author: 'Márquez', year: 1967 },
    { title: 'Mali princ', author: 'Saint-Exupéry', year: 1943 },
    { title: 'Starac i more', author: 'Hemingway', year: 1952 }
];

// Inicijalno prikazujemo sve knjige
const foundBooks = ref(allBooks); 

const performSearch = () => {
  const term = searchTerm.value.toLowerCase();

  // Filterira sve knjige na temelju termina za pretraživanje (traži i u naslovu i u autoru)
  foundBooks.value = allBooks.filter(book => {
    const titleMatch = book.title.toLowerCase().includes(term);
    const authorMatch = book.author.toLowerCase().includes(term);
    
    // Vraća knjigu ako se pojam nalazi u naslovu ILI u autoru
    return titleMatch || authorMatch;
  });
};
</script>

<style scoped>
.simple-search-container {
    padding: 20px;
    max-width: 600px;
    margin: 20px auto;
    border: 1px solid #ddd;
}
.search-input {
    padding: 10px;
    width: 100%;
    margin-bottom: 10px;
    box-sizing: border-box;
    /* Dodana osnovna Quasar kompatibilna stilizacija */
    border: 1px solid #ccc;
    border-radius: 4px;
}
.search-options {
    margin-bottom: 15px;
}
.search-options label {
    margin-right: 15px;
}
.search-button {
    padding: 10px 20px;
    background-color: #1976D2; /* Quasar Primary Blue */
    color: white;
    border: none;
    cursor: pointer;
    margin-bottom: 20px;
    border-radius: 4px;
    transition: background-color 0.3s;
}
.search-button:hover {
    background-color: #1565C0;
}
.results-table {
    width: 100%;
    border-collapse: collapse;
}
.results-table th, .results-table td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
}
.results-table th {
    background-color: #f2f2f2;
}
</style>