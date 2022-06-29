<template>
  <div>
    <div class="stages">
      <div class="cards2" v-for="stage in stages" :key="stage.stage.id">
        <div class="cards2i">
          <div class="flagicon">
            <i class="fa-regular fa-font-awesome"></i>
          </div>
          <div class="usericon">
            <i class="fas fa-user-circle"></i>
          </div>
        </div>
        <img :src="stage.stage.img" alt="" />
        <div class="cards2body">
          <!--questi devono essere cambiati, p e tutto il resto sarà sostituito
        dall'itinerary.stage.location exc exc; //era una prova per vedere se lo
        stage viene preso correttamente
        -->
          <p>{{ stage.stage.stageTitle }}</p>
          <div class="cards2icons">
            <div class="button1">
              <a href="?#/stageItineraryCards" class="button">Go</a>
            </div>
            <div>
              <a href="#"><i class="fas fa-star"></i></a>
              <a href=""><i class="far fa-bookmark"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- itinerari -->
    <div class="itineraries">
      <div
        class="cardsItinerary"
        v-for="itinerary in itineraries"
        :key="itinerary.itinerary.id"
      >
        <div class="cards2i">
          <div class="flagicon">
            <i class="fa-regular fa-font-awesome"></i>
          </div>
          <div class="usericon">
            <i class="fas fa-user-circle"></i>
          </div>
        </div>
        <img :src="itinerary.itinerary.img" alt="" />
        <div class="cardsItineraryBody">
          <p>{{ itinerary.itinerary.description }}</p>
          <div class="cards2icons">
            <div class="button1">
              <a href="?#/stageItineraryCards" class="buttonItinerary"
                >Itinerario</a
              >
            </div>
            <div>
              <a href="#"><i class="fas fa-star"></i></a>
              <a href=""><i class="far fa-bookmark"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import stagesJson from "/stages.json";
import itinerariesJson from "/itineraries.json";

export default {
  data() {
    return {
      stages: stagesJson.stages,
      itineraries: itinerariesJson.itineraries,
    };
  },
  methods: {
    push(id, data) {
      console.log(id, data[id - 1]);
      this.stages.push(data[id - 1]);
      if (this.stages.length == 1) {
        console.log("Non dovrò sostituire nulla!");
      } else {
        console.log("Devo sostituire il valore in arrivo!", this.stages[1]);
        this.stages[0] = this.stages[1];
      }

      console.log(this.stages[0]);
    },
  },
  computed: {
    read() {
      console.log(stageJson);
    },
  },
};
</script>

<style scoped>
.wrap img {
  width: 100%;
  height: 60%;
  border-radius: 0% 10% 0% 0%;
  position: relative;
}

.stages {
  display: flex;
  flex-wrap: wrap;
}

.itineraries {
  margin-top: 100px;
  display: flex;
}

.cards2 {
  margin-left: 10px;
  margin-top: 100px;
  flex: 0 1 32%;
}
.cardsItinerary {
  margin-left: 10px;
  margin-top: -10px;
  flex: 0 1 32%;
}
.cards2i {
  display: flex;
  color: white;
  font-size: 30px;
  position: absolute;
  z-index: 1;
}
.flagicon {
  background-color: #009fe3;
  width: 50px;
  padding-left: 10px;
}
.usericon {
  padding-left: 150px;
  padding-top: 5px;
  color: white;
}
.cards2body {
  background: #009fe3;
  border-radius: 0% 0% 10% 10%;
  height: 60%;
}

.cards2body p {
  font-size: 16px;
  color: white;
  padding-top: 15px;
  padding-left: 15px;
}
.cardsItineraryBody {
  background: #ea5b0c;
  border-radius: 0% 0% 10% 10%;
  height: 60%;
}
.cardsItineraryBody p {
  font-size: 16px;
  color: white;
  padding-top: 15px;
  padding-left: 15px;
}
.button {
  background-color: white;
  border: none;
  border-radius: 50%;
  color: #009fe3;
  padding: 2px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 15px;
}
.buttonItinerary {
  background-color: white;
  border: none;
  border-radius: 10px;
  color: #ea5b0c;
  padding: 2px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 15px;
}

.cards2icons {
  display: flex;
  justify-content: space-between;
  padding-left: 17px;
  padding-right: 17px;
}
.cards2icons i {
  padding-left: 34px;
  color: white;
}
</style>