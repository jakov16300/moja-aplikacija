<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-h8 text-weight-bold text-uppercase">
          Aplikacija 
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Pocetna stranica',
    caption: 'Ovdje se dolazi do pocetne stranice',
    icon: 'home',
    link: 'http://localhost:9000/#/'
  },
  {
    title: 'Pretrazivanje',
    caption: 'Pretraga knjiga',
    icon: 'search', 
    link: 'http://localhost:9000/#/pretrazivanje' 
  },
  {
    title: 'Nove knjige',
    caption: 'Pogledajte nove knjige',
    icon: 'book',
    link: 'http://localhost:9000/#/popisnovihKnjiga'
  },

  { title: 'Login',
    icon: 'login',
    link: 'http://localhost:9000/#/login'
  },
  {

   title: 'Registracija',
    icon: 'input',
    link: 'http://localhost:9000/#/registracija'

  },

  {
    title: 'Popis knjiga',
    caption: 'Pogledajte sve knjige',
    icon: 'book',
    link: 'http://localhost:9000/#/PopisKnjiga'
  },

  {
    title: 'Lokacija ',
    caption: 'Pogledajte sve knjige',
    icon: 'location_on',
    link: 'http://localhost:9000/#/lokacija'
  }

]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
