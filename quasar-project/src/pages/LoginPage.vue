<template>
  <form @submit.prevent="login" class="simple-form-container">
    <h3>Prijava</h3>

    <div class="form-group">
      <label for="login-username">Korisničko ime:</label>
      <input type="text" id="login-username" v-model="credentials.username" required>
    </div>
    
    <div class="form-group">
      <label for="login-password">Lozinka:</label>
      <input type="password" id="login-password" v-model="credentials.password" required>
    </div>

    <button type="submit" class="submit-button">Potvrdi</button>
  </form>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'LoginSimple',
  setup() {
    const credentials = ref({
      username: '',
      password: '',
    });

    const login = () => {
      console.log('Pokušaj prijave:', credentials.value);
      alert('Prijava je simulirana. Podaci su poslani na console.');
      // Ovdje ide stvarni API poziv
    };

    return {
      credentials,
      login,
    };
  }
}
</script>

<style scoped>
.simple-form-container {
    max-width: 300px;
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
    background-color: #ffc107;
    color: black;
    border: none;
    cursor: pointer;
    font-weight: bold;
}
</style>