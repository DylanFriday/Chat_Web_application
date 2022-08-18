<template>
  <nav v-if="user">
    <div>
        <p>Hi {{user.displayName}}</p>
        <p class="email">Logged in as {{user.email}}</p>
    </div>
        <button @click="logout">Logout</button>

  </nav>
</template>

<script>
import navlogout from '../composables/navbarLogout'
import getUser from '../composables/getUser'
export default {
    setup(){
       let{error,Navlogout}= navlogout();
       let {user} = getUser();
        let logout=async()=>{
            let res = await Navlogout();
          if(res){
        //   context.emit('enterChatroom')
        console.log('hi')
          }
        }
        return {logout,error,user}
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