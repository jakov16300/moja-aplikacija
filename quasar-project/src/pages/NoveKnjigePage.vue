<template>
  <q-page padding>
    
    <div class="q-pa-md row items-start q-gutter-md">
      
      <q-card class="my-card">
        <q-card-section>
          <div class="text-h6">Naslov nove knjige</div>
          <div class="text-subtitle2">Autor</div>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn flat round icon="bookmark" />
          <q-btn flat color="primary">Više detalja</q-btn>
        </q-card-actions>
      </q-card>

      <q-card class="my-card">
        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>
      
      <q-card class="my-card">
        <img src="https://knjiga.hr/wp-content/uploads/product-images/066893/066893.jpg"> 

        <q-card-section>
          <div class="text-h6">{{ knjigaNaslov }}</div> 
          <div class="text-subtitle2">{{ knjigaAutor }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ knjigaOpis }} 
        </q-card-section>
        
      </q-card>
      
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

// Opći placeholder tekst (koristi se za drugu knjigu)
const lorem = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

// NOVE VARIJABLE ZA TREĆU KNJIGU (Patnje mladog Werthera)
const knjigaNaslov = ref('Patnje mladog Werthera');
const knjigaAutor = ref('Johann Wolfgang von Goethe');
const knjigaOpis = ref('Ključno djelo Sturm und Drang pokreta. Epistolarni roman o neuzvraćenoj ljubavi, strasti i beznadnosti.');
</script>



<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>