<template>
  <div id="ModalStages" class="modal-container">
    
    <div class="modal-container-child">
      
      <div class="container">
        <div class="search-bar">
        <input type="text" v-model="search" placeholder="Search tappa..." />
      </div>
        <div class="first-travel" v-for="data in filteredTappe" :key="data.id">
          <b-card
            id="disable"
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

/* 

  Questa funzione di jquery invece fa si che dopo il click su una delle varie tappe caricate
  dopo il click su aggiungi una nuova tappa venga disabilitata.

  ERROR: La funzione fa il suo lavoro solo in base alla prima...

*/

$(document).ready(function () {
  $(".first-travel").click(function () {
    $("#disable").css("pointer-events", "none");
    $("#disable").css("opacity", "0.5");
  });
});


export default {
  data() {
    return {
      datas: dataStagesList,
      search: "",
    };
  },
  components: {
    DialogCardList,
  },
  name: "ModalStages",
  methods: {
    close(id, datas) {
      this.search = ""
      this.$emit("close", datas);
    },
  },


/* 

  La computed fa in modo che durante la ricerca tramite l'input venga caricata la tappa X.

  return data.location.match, data.stage.match(this.search); fa in modo che la location (nome della tappa e regione)

  che viene cercata nell'input abbia un match con la location salvata in data

*/
  computed: {
    filteredTappe: function () {
      return this.datas.filter((data) => {
        return data.location.match(this.search);
      });
    },
  },
};
</script>
<style scoped>
.modal-container {
  position: fixed;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
}
.modal-container-child {
  top: 0;
  bottom: 0;
  width: 100%;
}

.search-bar{
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  margin-top: 100px;
}

.search-bar input{
  border: 0;
  border-radius: 20px;
  box-shadow: 0px 3px 6px lightgrey;
  width: 48%;
  height: 38px;
  padding-left: 20px;
}

input::placeholder{
  text-align: center;
  }

.container {
  height: 100%;
  max-height: 100vh;
  max-width: 100%;
}

.overflow-hidden {
  margin: 0 auto;
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
