<template>
  <q-page padding>
    
    <div class="q-pa-md">

      <div class="text-h5 text-weight-bold text-uppercase q-mb-md text-primary">
        Cjelokupni Popis Knjiga
      </div>

      <q-table
        title="Popis"
        :rows="rows"
        :columns="columns"
        row-key="id"
        :rows-per-page-options="[5, 10, 0]"
        separator="cell"
        bordered
      />
      
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

// 1. DEFINICIJA STRUKTURE STUPACA
const columns = [
  { name: 'id', required: true, label: 'ID', align: 'left', field: 'id', sortable: true },
  { name: 'name', required: true, label: 'Naslov Knjige', align: 'left', field: 'name', sortable: true },
  { name: 'author', label: 'Autor', align: 'left', field: 'author', sortable: true },
  { name: 'pages', label: 'Broj Stranica', field: 'pages', sortable: true },
  { name: 'year', label: 'Godina', field: 'year', sortable: true },
];


const rows = ref([
  {
    id: 1,
    name: 'Patnje mladog Werthera',
    author: 'Johann Wolfgang von Goethe',
    pages: 224,
    year: 1774
  },
  {
    id: 2,
    name: 'Zločin i kazna',
    author: 'Fjodor Dostojevski',
    pages: 671,
    year: 1866
  },
  {
    id: 3,
    name: 'Sto godina samoće',
    author: 'Gabriel García Márquez',
    pages: 417,
    year: 1967
  },
  {
    id: 4,
    name: 'Mali princ',
    author: 'Antoine de Saint-Exupéry',
    pages: 96,
    year: 1943
  },
  {
    id: 5,
    name: 'Starac i more',
    author: 'Ernest Hemingway',
    pages: 127,
    year: 1952
  }
]);


</script>