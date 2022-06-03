<template>
  <div>
    <Header style="z-index: 1"/>
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
  },
  methods:{
    changeData(data){
      console.log(data)
    }
  }
};
</script>