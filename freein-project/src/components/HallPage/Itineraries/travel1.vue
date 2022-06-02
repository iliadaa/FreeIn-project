<template>
  <div class="container1">
    <div class="first-travel" v-for="data in datas" :key="data.id">
      <b-card @click="alert(data.id, datas[data.id-1])" class="overflow-hidden">
        <b-row no-gutters>
          <b-col cols="4">
            <div class="cards">
              <div class="text">
                <img :src="data.image1" alt="" class="rounded-0" />
       
              
                <img :src="data.image2" alt="" class="rounded-0" />
       
             
                <img :src="data.image3" alt="" class="rounded-0" />
              </div>
            </div>
          </b-col>
          <b-col cols="8">
            <b-card-body class="text-layout">
              <h2>{{ data.stage1 }}</h2>
              <p>{{ data.inlineDate1}}</p>
              <h2>{{ data.stage2 }}</h2>
              <p>{{ data.inlineDate2}}</p>
              <h2>{{ data.stage3 }}</h2>
               <p>{{ data.inlineDate3}}</p>
               
              <b-card-text style="font-size:15px">
                <p>{{ data.description1 }}</p>
                <p>{{ data.description2 }}</p>
                <p>{{ data.description3 }}</p> 
                <div class="flex" style="margin-top: -20px">
                  <i class="fa-solid fa-location-dot"></i> 
                  <p>{{data.location1}}</p>
                  <p>{{data.location2}}</p>
                  <p>{{data.location3}}</p>
                </div>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script type="text/javascript">

import dataStagesList from "/data-stages-list.json";
export default {
  
  data() {
     
    return {
      datas: dataStagesList,
      filteredDialog: []
    };
  },
  mounted() {
    this.filteredDialog = this.datas;
  },
  methods: {
    alert(id, datas){
      alert("AWEEE" + id)
      console.log(id, datas)
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
