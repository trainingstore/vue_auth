<template lang="html">
  <form @submit.prevent="register">
    <h2>Register</h2>
    <input type="email" placeholder="Email address" v-model="email" autocomplete="on" />
    <input type="password" placeholder="Password" v-model="password" autocomplete="on"/>
    <button type="submit">Register</button>
  </form>
</template>
<script>
import firebase from 'firebase'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then(() => {
        // Signed in
        alert('Successfully registered! Please login.');
        this.$router.push('/');
      })
      .catch((error) => {
        alert(error.message);
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
