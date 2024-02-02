<script setup>
import { onMounted,ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const isloggedIn=ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) =>{
    if(user){
      isloggedIn.value = true;
    }
    else{
      isloggedIn.value=false;
    }
  });
});

const handleSignOut = () => {

  
}

</script>

<template>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/sign-in">Sign In</RouterLink>
        <RouterLink to="/feed">Feed</RouterLink>
        <button @click="handleSignOut">Sign Out</button>
      </nav>
  <RouterView />
</template>

<style scoped>
.center-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


  nav {
    text-align: center;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
</style>
