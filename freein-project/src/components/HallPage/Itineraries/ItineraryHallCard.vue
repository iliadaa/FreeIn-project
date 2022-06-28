<template>
  <div class="hook">
    <div class="cards2" v-for="el in stages" :key="el.stage.id">
      <div class="cards2i">
        <div class="mapicon">
          <i class="fas fa-map-marked-alt"></i>
        </div>
        <div class="usericon">
          <i class="fas fa-user-circle"></i>
        </div>
      </div>
      <img :src="el.stage.img" alt="" />
      <div class="cards2body">
        <!--questi devono essere cambiati, p e tutto il resto sarà sostituito
        dall'itinerary.stage.location exc exc; //era una prova per vedere se lo
        stage viene preso correttamente
        -->
        <p>{{ el.stage.id }}</p>
        <div class="cards2icons">
          <div class="button1">
            <a
              href="?#/stageItineraryCards"
              class="button"
              :id="el.stage.id - 1"
              >Tappa</a
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
</template>

<script>
export default {
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
    stages() {
      console.log(this.$store.state.stages);
      return this.$store.state.stages;
    },
    itineraries() {
      return this.$store.state.itineraries;
    },
  },
};
</script>

<style scoped>
.wrap img {
  width: 100%;
  height: 50%;
  border-radius: 0% 10% 0% 0%;
  position: relative;
}

.hook {
  width: 50%;
  display: flex;
}

.cards2 {
  margin-left: 10px;
}
.cards2i {
  display: flex;
  color: #ea5b0c;
  font-size: 30px;
  position: absolute;
  z-index: 1;
}
.mapicon {
  background-color: #009fe3;
  width: 50px;
}
.usericon {
  padding-left: 150px;
  padding-top: 5px;
  color: white;
}

.cards2body {
  width: 100%;
  background: #ea5b0c;
  border-radius: 0% 0% 10% 10%;
}
.cards2body p {
  font-size: 16px;
  color: white;
  padding-top: 15px;
  padding-left: 15px;
}
.button {
  background-color: white;
  border: none;
  width: 100px;
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