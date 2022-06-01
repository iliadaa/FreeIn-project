<template>
  <div>
    <Header/>
    <EditProfile/>
  </div>
</template>

<script>

import Header from "../components/Header.vue";
import EditProfile from "../components/EditProfile/EditProfile.vue"

export default {
  name: "Homeview",
  components:{
    Header,
    EditProfile
  } 
};
</script>