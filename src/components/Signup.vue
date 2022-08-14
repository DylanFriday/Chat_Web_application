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
import { auth } from '../firebase/config'
export default {
    setup(){
        let displayName = ref("")
        let email = ref("")
        let password = ref("")
        let error = ref(null)
        let signUp=async()=>{
        try{
           let res = await auth.createUserWithEmailAndPassword(email.value,password.value)
            if(!res){
                throw new Error("Can't create new account due to specfic reasons")
            }
        }catch(err){
          error.value = err.message;
          console.log(error.value)
        }            
        }
        return {displayName,email,password,signUp,error}
    }
}
</script>

<style>

</style>