<template>
  <nav>
    <div>
        <p>Hi display name</p>
        <p class="email">Logged in as email</p>
    </div>
        <button @click="logout">Logout</button>

  </nav>
</template>

<script>
import { auth } from '@/firebase/config'
import { ref } from '@vue/reactivity'
export default {
    setup(){
        let error = ref(null)
        let logout=async()=>{
            try{
                await auth.signOut();
                console.log("user loggout");
            }catch(err){
                error.value = err.message
                console.log(err.value)
            }
        }
        return {logout}
    }
}
</script>

<style>
    nav{
        display: flex;
        padding: 20px;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        justify-content: space-between;
        align-items: center;
    }
    nav p{
        margin: 2px auto;
        font-size: 16px;
        color: #444;
    }
    nav p.email{
        font-size: 14px;
        color: #999;
    }
</style>