<template>
  <div class="container">
  <Navbar></Navbar>
  <Newchatform></Newchatform>
  </div>
</template>

<script>
import Newchatform from '../components/Newchatform'
import getUser from '../composables/getUser'
import Navbar from '../components/Navbar'
import { watch } from '@vue/runtime-core';
import {useRouter} from 'vue-router'

export default {
  components: {
    Newchatform, Navbar },
  setup(){
    let {user} = getUser();
    let router = useRouter();
    watch(user,()=>{
      if(!user.value){
        router.push({name: 'Welcome'})
      }
    })
  }
}
</script>

<style>

</style>