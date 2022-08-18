import { ref } from "vue";
import { auth } from '@/firebase/config'

let error = ref(null);
let Navlogout =async()=>{
    try{
        await auth.signOut();
        console.log("user loggout");
    }catch(err){
        error.value = err.message
        console.log(err.value)
    }
}
let navLogout =()=>{
    return {error,Navlogout}
}

export default navLogout;