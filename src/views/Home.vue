<template>
  <form @submit.prevent="login">
    <h2>Login</h2>
    <input type="email" placeholder="Email address" v-model="email" autocomplete="on" />
    <input type="password" placeholder="Password" v-model="password" autocomplete="on"/>
    <button type="submit">Login</button>
  </form>
</template>

<script>
import firebase from 'firebase'
// @ is an alias to /src
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        // Signed in
        alert('Successfully logged in')
        this.$router.push('/dashboard')
      })
      .catch((error) => {
          alert(error.message)
      });
    }
  }

};
</script>
