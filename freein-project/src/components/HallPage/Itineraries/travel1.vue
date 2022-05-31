<template>
  <div class="container1">
    <div class="first-travel" v-for="data in datas" :key="data.id">
        <b-card  class="overflow-hidden">
    <b-row no-gutters>
      <b-col cols="4">
          <img src="">
        <b-card-img  alt="Image" class="rounded-0">
            
        </b-card-img>
      </b-col>
      <b-col cols="8">
        <b-card-body> 
            <h2>{{data.stage1}}</h2>
            <h2>{{data.stage2}}</h2>
            <h2>{{data.stage3}}</h2>
          <b-card-text>
            {{data.description1}}
            {{data.description2}}
            {{data.description3}}
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
  data() {
    return {
      datas: dataStagesList,
    };
  },
};
</script>

<style scoped>

.container1{
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

}

.overflow-hidden{
    max-width: 700px;
    height: 200px;
    margin-bottom: 40px;
}
</style>
