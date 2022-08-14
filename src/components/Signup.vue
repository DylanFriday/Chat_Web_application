<template>
  <h1>Sign Up</h1>
  <form @submit.prevent="signUp">
    <input type="text" placeholder="name" v-model="displayName">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <button>Sign Up</button>


  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from '../composables/SignUp'
export default {
    setup(){
        let displayName = ref("")
        let email = ref("")
        let password = ref("")
        let {error,createAccount} =useSignup();
        let signUp=async()=>{
          let res = await createAccount(email.value,password.value,displayName.value)
          console.log(res.user)
    }
        return {displayName,email,password,signUp,error}
    }
}
</script>

<style>

</style>