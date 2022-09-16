<!-- PADRE -->
<template>
  <div class="container1">
    <!--<div class="first-travel" v-for="data in datas" :key="data.id">
      <b-card @click="alert(data.id, datas[data.id - 1])" class="overflow-hidden">
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
              <p>{{ data.inlineDate }}</p>
              <b-card-text style="font-size: 15px">
                <p>{{ data.description }}</p>
                <div class="flex" style="margin-top: -20px">
                  <i class="fa-solid fa-location-dot"></i>
                  <p>{{ data.location }}</p>
                </div>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div> -->
    <!--  <DialogCardList :messagge="filteredDialog"/>-->
    <!-- <DialogCardList :messagge="arrayVuoto" /> -->

    <div class="first-travel" v-for="data in datas" :key="data.id">
      <b-card
        :img-src="data.image"
        no-body
        class="overflow-hidden"
        img-left
        img-width="300px"
      >
        <b-card-body style="width: 500px" align="left">
          <b-card-title :title="data.stage"></b-card-title>
          <b-card-sub-title :sub-title="data.inlineDate"></b-card-sub-title>
          <b-card-text>
            <p>{{ data.description }}</p>
          </b-card-text>
          <template>
            <div class="location">
              <i class="fa-solid fa-location-dot"></i>
              <p>{{ data.location }}</p>
            </div>
          </template>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script>
import DialogCardList from "./DialogCardList.vue";
import dataStagesList from "/data-stages-list.json";
export default {
  data() {
    return {
      datas: dataStagesList.jsonarray,
      filteredDialog: [],
    };
  },

  components: {
    DialogCardList,
  },

  methods: {
    alert(id, datas) {
      alert("Sto copiando " + id);
      this.$emit("choosed", datas);
    },
  },
};
</script>

<style scoped>
.container1 {
  color: grey;
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
.location {
  display: flex;
  align-items: baseline;
}
.location i {
  margin-right: 7px;
}
</style>
