<template>
  <q-page padding>
    
    <div class="q-pa-md q-gutter-y-sm">
      
      <q-toolbar class="text-primary">
        <q-btn flat round dense icon="arrow_back" @click="$router.go(-1)" />
        
        <q-toolbar-title class="text-h5 text-weight-bold text-uppercase">
          Cjelokupni Popis Knjiga
        </q-toolbar-title>
        
        <q-btn flat round dense icon="more_vert" />
      </q-toolbar>

      <q-toolbar class="bg-grey-9 text-white">
        <q-btn flat round dense>
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
          Drugi Toolbar
        </q-toolbar-title>
        <q-btn flat round dense>
          <q-icon name="more_vert" />
        </q-btn>
      </q-toolbar>

      <q-toolbar class="bg-purple text-white">
        <q-btn flat round dense icon="assignment_ind" />
        <q-toolbar-title>
          Treći Toolbar
        </q-toolbar-title>
        <q-btn flat round dense icon="more_vert" />
      </q-toolbar>

      <q-toolbar class="bg-black text-white">
        <q-btn flat round dense icon="assignment_ind">
          <q-badge floating color="red">2</q-badge>
        </q-btn>
        <q-toolbar-title>
          Četvrti Toolbar
        </q-toolbar-title>
        <q-btn flat round dense icon="sim_card" class="q-mr-xs" />
        <q-btn flat round dense icon="gamepad" />
      </q-toolbar>
      
    </div>
  </q-page>
</template>



<script setup>
// Nema logike za ovaj jednostavan prikaz
</script>