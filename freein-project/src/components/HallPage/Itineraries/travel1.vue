<template>
  <div class="container1">
    <div class="first-travel" v-for="data in datas" :key="data.id">
      <b-card @click="alert(data.id, datas[data.id-1])" class="overflow-hidden">
        <b-row no-gutters>
          <b-col cols="4">
            <div class="cards">
              <div class="text">
                <img :src="data.image" alt="" class="rounded-0" />

              </div>
            </div>
          </b-col>
          <b-col cols="8">
            <b-card-body class="text-layout">
              <h2>{{ data.stage }}</h2>
              <p>{{ data.inlineDate}}</p>
              <b-card-text style="font-size:15px">
                <p>{{ data.description }}</p>
                <div class="flex" style="margin-top: -20px">
                  <i class="fa-solid fa-location-dot"></i> 
                  <p>{{data.location}}</p>
                </div>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>

   
  </div>
  
</template>

<script>

import dataStagesList from "/data-stages-list.json";
export default {

 props: {

 },
  
  data() {
     
    return {
      datas: dataStagesList,
      filteredDialog: []
    };
  },


  methods: {
    alert(id, datas,){
      alert("Sto copiando " + id)
      this.filteredDialog = datas
      console.log(this.filteredDialog)

      /* 
      this.filteredDialog = datas
      //console log works fine, he is getting full of the data that are coming from datas
      console.log(this.filteredDialog)
      */
    },
   
  },
};


</script>


<style scoped>
.container1 {
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.overflow-hidden {
  max-width: 700px;
  height: 200px;
  margin-bottom: 40px;
}

.flex{
  display: flex;
  align-items: baseline;
}

.flex i{
  margin-top: 5px;
  margin-right: 3px;
}


.text{
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-layout p{
  margin-top: -10px;
  margin-bottom: 20px;
}

.text img{
  width: 250px;
  height: 200px;
  margin-top: -16px;
  
}

</style>
