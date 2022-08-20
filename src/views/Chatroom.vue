<template>
  <div class="container">
  <Navbar></Navbar>
  <Chatwindow></Chatwindow>
  <Newchatform></Newchatform>
  </div>
</template>

<script>
import Chatwindow from '../components/chatwindow'
import Newchatform from '../components/Newchatform'
import getUser from '../composables/getUser'
import Navbar from '../components/Navbar'
import { watch } from '@vue/runtime-core';
import {useRouter} from 'vue-router'

export default {
  components: {
    Chatwindow,
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