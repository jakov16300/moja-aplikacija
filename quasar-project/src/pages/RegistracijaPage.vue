<template>
  <form @submit.prevent="register" class="simple-form-container">
    <h3>Registracija</h3>

    <div class="form-group">
      <label for="reg-ime">Ime:</label>
      <input type="text" id="reg-ime" v-model="formData.ime" required>
    </div>
    
    <div class="form-group">
      <label for="reg-prezime">Prezime:</label>
      <input type="text" id="reg-prezime" v-model="formData.prezime" required>
    </div>

    <div class="form-group">
      <label for="reg-korisnicko">Korisničko ime:</label>
      <input type="text" id="reg-korisnicko" v-model="formData.korisnickoIme" required>
    </div>

    <div class="form-group">
      <label for="reg-lozinka">Lozinka:</label>
      <input type="password" id="reg-lozinka" v-model="formData.lozinka" required>
    </div>

    <button type="submit" class="submit-button">Potvrdi</button>
  </form>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'RegistrationSimple',
  setup() {
    const formData = ref({
      ime: '',
      prezime: '',
      korisnickoIme: '',
      lozinka: '',
      // Ovdje bi mogla ići i ostala polja iz baze (npr. email)
    });

    const register = () => {
      console.log('Podaci za registraciju:', formData.value);
      alert('Registracija je simulirana. Podaci su poslani na console.');
      // Ovdje ide stvarni API poziv
    };

    return {
      formData,
      register,
    };
  }
}
</script>

<style scoped>
.simple-form-container {
    max-width: 350px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ddd;
}
.form-group {
    margin-bottom: 15px;
}
.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}
.form-group input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}
.submit-button {
    width: 100%;
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    cursor: pointer;
}
</style>