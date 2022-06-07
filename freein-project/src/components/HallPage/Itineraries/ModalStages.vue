<template>
      <div id='ModalStages' class="modal-container">
        <div class="modal-container-child">
          <div class="container">
            <div class="first-travel" v-for="data in datas" :key="data.id">
              <b-card
                @click="close(data.id, datas[data.id - 1])"
                class="overflow-hidden"
              >
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
            </div>
                    
          </div>
        </div>
      </div>
</template>
<script>
import DialogCardList from "./DialogCardList.vue";
import dataStagesList from "/data-stages-list.json";
export default {
  data() {
    return {
      datas: dataStagesList,
    };
  },
  components: {
    DialogCardList,
  },
  name: 'ModalStages',
  methods: {
    close(id, datas) {
      this.$emit('close',datas);
    },
  },
};
</script>
<style scoped>
  
  .modal-container {
    position: absolute;
    top: 0;
    bottom:0;
    left: 0;
    width:100%;
    background-color: rgba(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y:scroll;
  }
  .modal-container-child{
    position: absolute;
    top: 0;
    bottom:0;
    width:100%;
  }

.container {
    background-color: rgb(246 239 239);
}
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

.flex {
  display: flex;
  align-items: baseline;
}

.flex i {
  margin-top: 5px;
  margin-right: 3px;
}

.text {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-layout p {
  margin-top: -10px;
  margin-bottom: 20px;
}

.text img {
  width: 250px;
  height: 200px;
  margin-top: -16px;
}
</style>