<template>
  <div id="ModalStages" class="modal-container">
    <div class="modal-container-child">
      <div class="container">
        <div class="search-bar">
          <input type="text" v-model="search" placeholder="Search tappa..." />
        </div>

        <!--Added-->
        <div
          class="mycards"
          v-for="data in filteredTappe"
          :key="data.id"
          :ref="`id-${data.stage.id}`"
          :id="`id-${data.stage.id}`"
        >
          <b-card
            @click="
              close(data.stage.id, datas[data.id - 1]),
                stageLoaded(data.stage.id - 1, data.stage.stageClicked, datas)
            "
            v-show="data.stage.stageClicked == false"
            no-body
            class="overflow-hidden mx-auto"
            style="max-width: 700px"
          >
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  :src="data.stage.img"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-text>
                  <h1>{{ data.stage.stageTitle }}</h1>
                  <p>{{ data.stage.description }}</p>
                  <div class="icon">
                    <i class="fa-solid fa-location-dot"></i>
                    <p>{{ data.stage.stageTitle }}</p>
                  </div>
                </b-card-text>
              </b-col>
            </b-row>
          </b-card>
        </div>

        <!--<div class="first-travel" v-for="data in filteredTappe" :key="data.id">
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
                  <b-card-text>
                    <p>{{ data.description }}</p>
                    <div class="flex">
                      <i class="fa-solid fa-location-dot"></i>
                      <p>{{ data.location }}</p>
                    </div>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import DialogCardList from "./DialogCardList.vue";
import dataStagesList from "/data-stages-list.json";
import stagesJson from "/stages.json";

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
      datas: stagesJson.stages,
      search: "",
      cards: [],
      disabled: false,
    };
  },
  components: {
    DialogCardList,
  },
  name: "ModalStages",
  methods: {
    close(id, datas) {
      this.search = "";
      this.$emit("close", datas);
      this.cards = datas.stage;
    },

    stageLoaded(id, stageClicked, dataList) {
      console.log(id, dataList[id]);
      dataList[id].stage.stageClicked = true;
      console.log(
        dataList[id].stage.stageClicked,
        dataList[id].stage.stageClicked
      );
      return (dataList[id].stage.stageClicked = true);
    },
  },

  mounted() {
    this.$refs["id-1"];
  },

  /* 

  La computed fa in modo che durante la ricerca tramite l'input venga caricata la tappa X.

  return data.location.match, data.stage.match(this.search); fa in modo che la location (nome della tappa e regione)

  che viene cercata nell'input abbia un match con la location salvata in data

*/
  computed: {
    filteredTappe: function () {
      return this.datas.filter((data) => {
        return data.stage.stageTitle.match(this.search);
      });
    },
  },
};
</script>
<style scoped>
/*Added*/
.modal-container {
  display: flex;
  justify-content: center;
  background-color: white;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  z-index: 2;
  overflow: scroll;
}
.modal-container-child {
  top: 0;
  bottom: 0;
  width: 100%;
}
.search-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  margin-top: 100px;
}
.search-bar input {
  width: 50%;
  height: 40px;
  border: 0;
  border-radius: 20px;
  box-shadow: 0px 3px 6px lightgrey;
  padding-left: 20px;
}
input::placeholder {
  text-align: center;
}
.mycards {
  margin-bottom: 20px;
}
.icon {
  display: flex;
  align-items: baseline;
}
i {
  margin-right: 5px;
}
h1 {
  font-size: 22px;
  padding-top: 10px;
}
p {
  font-size: 18px;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-right: 5px;
}

@media (max-width: 575.98px) {
  .search-bar {
    margin-top: 40px;
  }
  .search-bar input {
    width: 80%;
  }
  input::placeholder {
    font-size: 14px;
  }
  h1 {
    font-size: 18px;
    padding-top: 10px;
    padding-left: 5px;
  }
  p {
    font-size: 16px;
    padding-right: 5px;
    padding-left: 5px;
  }
  i {
    margin-right: 5px;
    padding-left: 5px;
  }
}
</style>
