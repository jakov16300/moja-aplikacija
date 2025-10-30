<template>
  <div class="location-page">
    <h2>Prikaz Lokacije</h2>
    
    <div id="map" class="map-container"></div>
    
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

import * as L from 'leaflet';

import "leaflet/dist/leaflet.css";

export default {
  name: 'LokacijaPage',
  setup(){
    const initialMap = ref(null);
    
    onMounted(() => {
      initialMap.value = L.map('map').setView([45.3312, 14.4322], 13);

    
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy;<a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(initialMap.value);

    });

    return {
      initialMap
    }
  }
}
</script>

<style scoped>

.map-container {
    height: 500px; 
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 20px;
}
.location-page {
    padding: 20px;
    max-width: 900px;
    margin: 0 auto;
}
</style>