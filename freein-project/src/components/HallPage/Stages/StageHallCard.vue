<template>
  <div class="contenitore">
    <div class="stages">
      <div class="cards2" v-for="obj in suggested" :key="obj.suggest.id">
        <div class="cards2i">
          <!-- Div below is used to load the correct top left icon for the stage card (blue-background)  -->
          <div
            v-show="loadCssClasses(obj.suggest.type) == 'blue-background'"
            class="flagicon"
          >
            <img src="../../../assets/flag2.svg" />
          </div>

          <!-- Div below is used to load the correct top left icon for the itinerary card (orange-background)  -->
          <div
            v-show="loadCssClasses(obj.suggest.type) == 'orange-background'"
            class="itineraryIcon"
          >
            <i class="fas fa-map-marked-alt"></i>
          </div>
          <div class="usericon">
            <i class="fas fa-user-circle"></i>
          </div>
        </div>
        <img :src="obj.suggest.img" alt="" />

        <!-- The :class below is used to change his css based on the type of the suggest that is coming from the json;  -->
        <div :class="loadCssClasses(obj.suggest.type)">
          <p>{{ obj.suggest.suggestTitle }}</p>

          <div class="cardsicons">
            <!-- The class below load just for the cards with type stage (blue-background) and friend (purple-background)
                  the button GO;
              -->
            <div
              class="button1"
              v-show="loadCssClasses(obj.suggest.type) == 'blue-background'"
            >
              <button
                v-on:click="
                  stageClick(
                    obj.suggest.id - 1,
                    stages,
                    stagestore,
                    obj.suggest
                  )
                "
                class="button"
              >
                Go
              </button>
            </div>
            <div
              class="button1"
              v-show="loadCssClasses(obj.suggest.type) == 'purple-background'"
            >
              <button style="pointer-events: none; opacity: 40%" class="button">
                Go
              </button>
            </div>
            <!-- Div below is used to load the Aggiungimi button just for the Food card (yellow-background) -->
            <div
              v-show="loadCssClasses(obj.suggest.type) == 'yellow-background'"
            >
              <a style="pointer-events: none; opacity: 40%" class="buttonAdd"
                >Aggiungi</a
              >
            </div>

            <!-- Div below is used to load the Itinerario button just for the Itinerary card (orange-background) -->
            <div
              class="button2"
              v-show="loadCssClasses(obj.suggest.type) == ['orange-background']"
            >
              <a
                v-on:click="
                  itinerariesClick(
                    obj.suggest.id - 1,
                    itineraries,
                    stages,
                    itinerariestore,
                    obj.suggest
                  )
                "
                class="buttonItinerary"
                >Itinerario</a
              >
            </div>

            <!-- Div below is used to load the star and the other icons just for the Stage card (blue-background) -->
            <div v-show="loadCssClasses(obj.suggest.type) == 'blue-background'">
              <a
                style="text-decoration: none"
                v-show="obj.suggest.countStar != 1"
                href="#/businessprofile"
              >
                <a href="#/businessprofile" class="notification">
                  <span class="dot"
                    ><i
                      class="fa-regular fa-star"
                      @click="
                        incrementStar(obj.suggest.id - 1, obj.suggest.countStar)
                      "
                    ></i
                  ></span>
                  <span class="counter">{{ obj.suggest.countStar }}</span>
                </a>
              </a>

              <a
                style="text-decoration: none"
                v-show="obj.suggest.countStar"
                href="#/businessprofile"
              >
                <span class="dot">
                  <i
                    class="fa-solid fa-star"
                    @click="
                      decrementStar(obj.suggest.id - 1, obj.suggest.countStar)
                    "
                  ></i>
                </span>
                <span class="counter">{{ obj.suggest.countStar }}</span>
              </a>

              <a href=""
                ><span class="dots"><i class="far fa-bookmark"></i></span
              ></a>
            </div>

            <!-- Div below is used to load the star and the other icons just for the Itinerary card (orange-background) -->
            <div
              v-show="loadCssClasses(obj.suggest.type) == 'orange-background'"
            >
              <a
                style="text-decoration: none"
                v-show="obj.suggest.countStar != 1"
                href="#/businessprofile"
              >
                <span class="dot"
                  ><i
                    class="fa-regular fa-star"
                    @click="
                      incrementStar(obj.suggest.id - 1, obj.suggest.countStar)
                    "
                  ></i> </span
                ><span class="counter">{{ obj.suggest.countStar }}</span></a
              >
              <a
                style="text-decoration: none"
                v-show="obj.suggest.countStar"
                href="#/businessprofile"
              >
                <span class="dot"
                  ><i
                    class="fas fa-star"
                    @click="
                      decrementStar(obj.suggest.id - 1, obj.suggest.countStar)
                    "
                  ></i
                ></span>
                <span class="counter">{{ obj.suggest.countStar }}</span></a
              >
              <a href=""
                ><span class="dots"><i class="far fa-bookmark"></i></span
              ></a>
            </div>

            <!-- Div below is used to load the star and the other icons just for the Food card (yellow-background) -->
            <div
              class="yellow-card-icons"
              v-show="loadCssClasses(obj.suggest.type) == 'yellow-background'"
            >
              <a
                style="text-decoration: none"
                v-show="obj.suggest.countStar != 1"
                href="#/businessprofile"
              >
                <span class="dot">
                  <i
                    class="fa-regular fa-star"
                    @click="
                      incrementStar(obj.suggest.id - 1, obj.suggest.countStar)
                    "
                  ></i> </span
                ><span class="counter">{{ obj.suggest.countStar }}</span></a
              >
              <a
                style="text-decoration: none"
                v-show="obj.suggest.countStar"
                href="#/businessprofile"
              >
                <span class="dot"
                  ><i
                    class="fas fa-star"
                    @click="
                      decrementStar(obj.suggest.id - 1, obj.suggest.countStar)
                    "
                  ></i> </span
                ><span class="counter">{{ obj.suggest.countStar }}</span></a
              >
              <a href=""><i class="fa-regular fa-heart"></i></a>
            </div>

            <!-- Div below is used to load the icons just for the Friend card (purple-background) -->
            <div
              v-show="loadCssClasses(obj.suggest.type) == ['purple-background']"
            >
              <a href="#"><i class="fa-regular fa-font-awesome"></i></a>
              <a href=""><i class="fa-solid fa-map-location-dot"></i></a>
              <a href=""><i class="fas fa-user-circle"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import stagesJson from "/stages.json";
import suggestedJson from "/suggested.json";
import itinerariesJson from "/itineraries.json";
import friendsJson from "/friends.json";

export default {
  data() {
    return {
      stages: stagesJson.stages,
      suggested: suggestedJson.suggested,
      itineraries: itinerariesJson.itineraries,
      friends: friendsJson.friends,
      stageInItineraries: itinerariesJson.itineraries.stages,
      isDisabled: true,
    };
  },
  methods: {
    stageClick(id, stages, stagestore, obj) {
      /*
      console.log(id, this.stages[id].stage);
      console.log(stagestore, "hello");
      stagestore.push(stages[id].stage);

      
      if (stagestore.length > 0) {
        if (this.stagestore.length == 1) {
          console.log("Don't change");
        } else {
          console.log("Change", this.stagestore[0], this.stagestore[1]);
          this.stagestore.splice(0, 1);
          //capire come usare .splice
        }
        console.log(this.stagestore[0], "i'm the new value");
      }
      */
      console.log(stages, " + obj ", obj);
      var i;
      for (i = 0; i < stages.length; i++) {
        if (stages[i].stage.stageTitle == obj.suggestTitle) {
          stagestore.push(stages[i].stage);
          console.log("Pusho ", i);
        } else {
          console.log("Non pusho, sono diverso");
        }
      }

      if (this.stagestore.length == 1) {
        console.log("Don't change");
      } else {
        console.log("Change", this.stagestore[0], this.stagestore[1]);
        this.stagestore.splice(0, 1);
        //capire come usare .splice
      }
      console.log(this.stagestore[0], "i'm the new value");
      this.$router.push({
        name: "SummaryStage",
      });
    },
    itinerariesClick(id, itineraries, stages, itinerariestore, obj) {
      console.log(
        itineraries,
        " + itineraries ",
        obj,
        " obj ",
        stages,
        "stages"
      );
      var i;
      for (i = 0; i < itineraries.length; i++) {
        if (itineraries[i].itinerary.name == obj.suggestTitle) {
          itinerariestore.push(itineraries[i].itinerary);
          itineraries[i].itinerary.stages = stages;
          console.log("Pusho ", i, ", ", itinerariestore);
          console.log(itineraries[i].itinerary.stages);
        } else {
          console.log("Non pusho, sono diverso");
        }
      }
      if (this.itinerariestore.length == 1) {
        console.log("Don't change");
      } else {
        this.itinerariestore.splice(0, 1);
      }
      this.$router.push({
        name: "SummaryItinerary",
      });
      /*
      console.log(itineraries, "Id", id);
      console.log(itinerariestore, "hello");
      itinerariestore.push(itineraries[id].itinerary);
      console.log(itinerariestore, "here");
       if (itinerariestore.length > 0) {
       if (this.itinerariestore.length == 1) {
       } else {
         this.itinerariestore.splice(0, 1);
      capire come usare .splice
        }
        }
        this.$router.push({
        name: "SummaryItinerary",
        });
      */
    },
    push(id, data) {
      this.stages.push(data[id - 1]);
      if (this.stages.length == 1) {
      } else {
        this.stages[0] = this.stages[1];
      }

      console.log(this.stages[0]);
    },

    isCardType() {
      this.$store.commit("isCardType");
    },

    loadCssClasses(type) {
      if (type == "stage") {
        return "blue-background";
      } else if (type == "itinerary") {
        return "orange-background";
      } else if (type == "friend") {
        return "purple-background";
      } else if (type == "food") {
        return "yellow-background";
      }
    },

    incrementStar(id, countStar) {
      countStar++;
      console.log("countStar dello stage sta aumentando", countStar);
      this.suggested[id].suggest.countStar = countStar;
      console.log(
        this.suggested[id].suggest,
        " prendo correttamente il dato della card: ",
        id
      );
    },

    decrementStar(id, countStar) {
      countStar--;
      console.log("countStar dello stage sta diminuendo", countStar);
      this.suggested[id].suggest.countStar = countStar;
      console.log(
        this.suggested[id].suggest,
        " prendo correttamente il dato della card: ",
        id
      );
    },
  },
  created() {
    this.isCardType();
  },
  mounted: {
    typeStage() {
      return this.$store.state.typeStage;
    },
    typeItinerary() {
      return this.$store.state.typeItinerary;
    },
  },
  computed: {
    stagestore() {
      return this.$store.state.stagestore;
    },
    itinerariestore() {
      return this.$store.state.itinerariestore;
    },
  },
};
</script>

<style scoped>
.wrap img {
  width: 100%;
  height: 15vw;
  object-fit: cover;
  border-radius: 0% 10% 0% 0%;
  position: relative;
}
.stages {
  display: flex;
  flex-wrap: wrap;
  margin-top: -40px;
  margin-bottom: 100px;
}
.cards2 {
  margin-left: 10px;
  margin-top: 50px;
  flex: 0 1 30%;
}
.cards2i {
  display: flex;
  color: white;
  font-size: 30px;
  position: absolute;
  z-index: 1;
}
.dot {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 1px solid white;
  display: inline-block;
  padding: 2px 0px;
  margin-right: 7px;
}
.dots {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 1px solid white;
  display: inline-block;
  padding: 2px 3px;
}
.flagicon {
  background-color: #009fe3;
  width: 50px;
}
.flagicon img {
  width: 50px;
  height: auto;
}
.itineraryIcon {
  background-color: #ea5b0c;
  width: 50px;
  padding-left: 7px;
}
.usericon {
  padding-left: 165px;
  padding-top: 1px;
  color: white;
}
.usericonFriends {
  padding-left: 300px;
  padding-top: 50px;
  font-size: 50px;
}
/* 
  Per il macbook questi padding andrebbero bene per le cards Friends
  padding-left: 160px;
  padding-top: 20px;
  */
.blue-background {
  background-color: #009fe3;
  border-radius: 0% 0% 10% 10%;
  height: 35%;
}
.blue-background p {
  font-size: 16px;
  color: white;
  padding-top: 10px;
  padding-left: 15px;
  /*width: 100%;*/
}
.orange-background {
  background-color: #ea5b0c;
  border-radius: 0% 0% 10% 10%;
  height: 35%;
}
.orange-background p {
  font-size: 16px;
  color: white;
  padding-top: 10px;
  padding-left: 15px;
}
.purple-background {
  background-color: #800080;
  border-radius: 0% 0% 10% 10%;
  height: 35%;
}
.purple-background p {
  font-size: 16px;
  color: white;
  padding-top: 10px;
  padding-left: 15px;
}
.yellow-background {
  background-color: #f6a314;
  border-radius: 0% 0% 10% 10%;
  height: 35%;
}
.yellow-background p {
  font-size: 16px;
  color: white;
  padding-top: 10px;
  padding-left: 15px;
}
.buttonAdd {
  background-color: white;
  border: none;
  border-radius: 10px;
  color: #f6a314;
  padding: 5px 6px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 15px;
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
  padding: 5px 6px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 15px;
}
.cardsicons {
  display: flex;
  justify-content: space-between;
  padding-left: 17px;
  padding-right: 17px;
}
.cardsicons i {
  padding-left: 5px;
  color: white;
}
.counter {
  padding-left: 4px;
  color: white;
}

.notification {
  padding: 5px 20px;
  position: relative;
  display: inline-block;
  border-radius: 2px;
}
.notification .counter {
  position: absolute;
  top: -7px;
  right: 15px;
  padding: 0px 7px;
  border-radius: 50%;
  background-color: #f6a314;
  color: white;
}
@media (max-width: 575.98px) {
  .wrap img {
    width: 100%;
    height: 60vh;
    border-radius: 0% 16% 0% 0%;
  }
  .stages {
    width: 100%;
    flex-wrap: nowrap;
    flex-direction: column;
    margin: 5px;
    margin-bottom: 20px;
  }
  .cards2 {
    margin-left: 0px;
    margin-top: 25px;
    flex: none;
  }
  /*.cardsItinerary {
  margin-left: 10px;
  margin-top: 20px;
  flex: 0 1 32%;
}*/
  /*.cardsFriends {
  margin-left: 10px;
  margin-top: 10px;
  flex: 0 1 32%;
  border-radius: 10%;
  background-color: purple;
}*/
  /*.cardsFriends img {
  border-radius: 50%;
  height: 70%;
  width: 70%;
  left: 18%;
  top: 10%;
}*/

  .usericon {
    padding-left: 215px;
    padding-top: 5px;
    color: white;
  }

  .usericonFriends {
    padding-left: 300px;
    padding-top: 50px;
    font-size: 50px;
  }
  /* 
  Per il macbook questi padding andrebbero bene per le cards Friends
  padding-left: 160px;
  padding-top: 20px;
  */
  .buttonAdd {
    background-color: white;
    border: none;
    border-radius: 10px;
    color: #f6a314;
    padding: 5px 6px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 15px;
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
    padding: 5px 6px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 15px;
  }
  .cardsicons {
    display: flex;
    justify-content: space-between;
    padding-left: 17px;
    padding-right: 17px;
  }
  .cardsicons i {
    padding-left: 5px;
    color: white;
  }
  .counter {
    padding-left: 4px;
    color: white;
  }
  .flagicon {
    background-color: #009fe3;
    width: 50px;
  }
  .flagicon img {
    width: 50px;
    height: auto;
  }
}
</style>
