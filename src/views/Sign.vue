<template>
    <div class="container">
      <h1>Open Your Account</h1>
      <p><input type="text" placeholder="email" /></p>
      <p><input type="password" placeholder="Password" v-model="password" /></p>
      <p><button @click="register">Submit</button></p>
      <p><button @click="signInWithGoogle">Sign In With Google</button></p>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
  import { useRouter } from "vue-router";
  import { errorMessages } from "vue/compiler-sfc";
  
  const email = ref("");
  const password = ref("");
  const router = useRouter;
  
  const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
      .then(() => {
        console.log("Successfully registered!");
        router.push({ path: '/feed' });

      })
      .catch((error) => {
        console.log(error.code);
        switch (error.code) {
          case "auth/invalid-email":
            errorMessages.value = "Invalid email";
            break;
          case "auth/user-not-found":
            errorMessages.value = "No account with that email was found";
            break;
          case "auth/wrong-password":
            errorMessages.value = "Incorrect password";
            break;
          default:
            errorMessages.value = "Email or password is incorrect";
            break;
        }
        alert(error.message);
      });
  };
  
  const signInWithGoogle = () => {
    // Implement your Google Sign In logic here
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
    .then((result) => {
        console.log(result.user);
        router.push("/feed");
    } )

    .catch((error)=> {

    });

  };
  </script>
  
  <style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh; /* Adjusted height */
  }
  </style>
  