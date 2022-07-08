<template>
  <div class="container">
    <div class="form-group">
      <ModalStages
        v-show="isModalStagesVisible"
        @close="choosed($event, disabled)"
      >
      </ModalStages>
      <div class="ph-layout">
        <h3>Foto itinerario (obbligatorio)</h3>
        <div
          class="wrapper stage-ph"
          :style="{ 'background-image': `url(${rawImg})` }"
          v-cloak
          @drop.prevent="addFile"
          @dragover.prevent
        >
          <span v-if="!rawImg">
            <button class="add-image-button" @click="onPickFile">
              <i class="fas fa-plus"></i>
            </button>
            <input
              type="file"
              ref="fileInput"
              accept="image/*"
              style="display: none"
              @input="onSelectFile"
            />
            <p href="#">Carica immagine</p>
            <br />
            <p style="margin-top: -40px">
              Dimensioni minime di "808 x 632 pixel"
            </p>
          </span>
        </div>
      </div>
      <div class="classify-stage">
        <h2>
          Come classificheresti questo itinierario
          <p>(obbligatorio)</p>
        </h2>
      </div>
      <div class="flex">
        <div class="percentages">
          <p>arte e cultura</p>
          <p>relax</p>
          <p>mare</p>
          <p>natura e avventura</p>
          <p>gourmet explorer</p>
          <p>party</p>
        </div>
        <div class="sliders">
          <VueSlideBar
            v-model="valueArt"
            :min="0"
            :max="100"
            :processStyle="slider.processStyle"
            :lineHeight="slider.lineHeight"
            :tooltipStyles="{ backgroundColor: 'grey', borderColor: 'grey' }"
          >
          </VueSlideBar>
          <VueSlideBar
            v-model="valueRelax"
            :min="0"
            :max="100"
            :processStyle="slider.processStyle"
            :lineHeight="slider.lineHeight"
            :tooltipStyles="{ backgroundColor: 'grey', borderColor: 'grey' }"
          >
          </VueSlideBar>
          <VueSlideBar
            v-model="valueMare"
            :min="0"
            :max="100"
            :processStyle="slider.processStyle"
            :lineHeight="slider.lineHeight"
            :tooltipStyles="{ backgroundColor: 'grey', borderColor: 'grey' }"
          >
          </VueSlideBar>
          <VueSlideBar
            v-model="valueNatura"
            :min="0"
            :max="100"
            :processStyle="slider.processStyle"
            :lineHeight="slider.lineHeight"
            :tooltipStyles="{ backgroundColor: 'grey', borderColor: 'grey' }"
          >
          </VueSlideBar>
          <VueSlideBar
            v-model="valueGourmetExplorer"
            :min="0"
            :max="100"
            :processStyle="slider.processStyle"
            :lineHeight="slider.lineHeight"
            :tooltipStyles="{ backgroundColor: 'grey', borderColor: 'grey' }"
          >
          </VueSlideBar>
          <VueSlideBar
            v-model="valueParty"
            :min="0"
            :max="100"
            :processStyle="slider.processStyle"
            :lineHeight="slider.lineHeight"
            :tooltipStyles="{ backgroundColor: 'grey', borderColor: 'grey' }"
          >
          </VueSlideBar>
        </div>
      </div>
      <hr class="hr1" />
      <div class="Reccomend-orNot">
        <h2>
          A chi consiglieresti questa tappa?
          <p>(obbligatorio)</p>
        </h2>
        <div class="btns-group1">
          <label class="control" for="family">
            <input
              type="checkbox"
              value="Famiglia"
              id="family"
              v-model="checkedNames"
            />
            <span class="control__content"> Famiglia </span>
          </label>
          <label class="control" for="single">
            <input
              type="checkbox"
              value="Single"
              id="single"
              v-model="checkedNames"
            />
            <span class="control__content"> Single </span>
          </label>
          <label class="control" name="placeForAnimals">
            <input
              type="checkbox"
              value="Struttura per animali"
              id="placeForAnimals"
              v-model="checkedNames"
            />
            <span class="control__content"> Struttura per animali </span>
          </label>
        </div>
        <div class="btns-group2">
          <label class="control" for="children">
            <input
              type="checkbox"
              value="Bambini"
              id="children"
              v-model="checkedNames"
            />
            <span class="control__content"> Bambini </span>
          </label>
          <label class="control" for="friends">
            <input
              type="checkbox"
              value="Comitiva"
              id="friends"
              v-model="checkedNames"
            />
            <span class="control__content"> Comitiva </span>
          </label>
          <label class="control" name="couple">
            <input
              type="checkbox"
              value="Coppia"
              id="couple"
              v-model="checkedNames"
            />
            <span class="control__content"> Coppia</span>
          </label>
        </div>
      </div>
      <div class="stage-details">
        <h2>
          Titolo itinerario
          <p>(obbligatorio)</p>
        </h2>
        <div v-text="maxTitle - textTitle.length" style="color: red"></div>
        <input
          type="text"
          :maxlength="maxTitle"
          v-model="textTitle"
          placeholder="Assegna un titolo alla tappa massimo 40 caratteri"
        />
        <h2>
          Location
          <p>(obbligatorio)</p>
        </h2>
        <div
          v-text="maxLocation - textLocation.length"
          style="color: red"
        ></div>
        <input
          type="text"
          :maxlength="maxLocation"
          v-model="textLocation"
          placeholder="Inserisci il nome del luogo massimo 40 caratteri"
        />

        <h2>
          Testo
          <p>(obbligatorio)</p>
        </h2>
        <div v-text="maxText - textText.length" style="color: red"></div>
        <input
          class="inputclass"
          type="text"
          placeholder="Inserisci descrizione massimo 37 caratteri"
          :maxlength="maxText"
          v-model="textText"
        />
      </div>
      <div class="add-new-stage-btn">
        <a
          class="button-area fas fa-plus"
          href="#/itinerarycreation"
          @click="showModalStages"
        ></a>
        <h2>Aggiungi nuova tappa</h2>
      </div>

      <div class="box">
        <div class="flex-Dialog">
          <div
            class="container1"
            v-for="card in cardList"
            :key="card.id - 1"
            :disabled="card.disabled"
            :id="`id-${card.stage.id}`"
            :ref="`id-${card.stage.id}`"
          >
            <button class="remove-stage-icon">
              <i
                class="fa-regular fa-circle-xmark"
                @click="removeCard(card.id - 1, datas)"
                v-show="card.stage.stageClicked == true"
              ></i>
            </button>
            <div v-show="card.stage.stageClicked == false"></div>
            <b-card
              v-show="card.stage.stageClicked == true"
              :img-src="card.stage.img"
              no-body
              class="overflow-hidden"
              img-left
              img-width="300px"
              id="travel-card"
            >
              <b-card-body style="width: 500px" align="left">
                <b-card-title :title="card.stage.stageTitle"></b-card-title>
                <b-card-sub-title :sub-title="card.inlineDate"
                  >22,March</b-card-sub-title
                >
                <b-card-text>
                  <p>{{ card.stage.description }}</p>
                </b-card-text>
                <template>
                  <div class="location">
                    <i class="fa-solid fa-location-dot"></i>
                    <p>Missing</p>
                  </div>
                </template>
              </b-card-body>
            </b-card>
            <!-- <div class="first-travel" id="travel-card">
              <b-card class="overflow-hidden">
                <b-row no-gutters>
                  <b-col cols="4">
                    <div class="cards">
                      <div class="text">
                        <img :src="card.image" alt="" class="rounded-0" />
                      </div>
                    </div>
                  </b-col>
                  <b-col cols="8">
                    <b-card-body class="text-layout">
                      <h2>{{ card.stage }}</h2>
                      <p>{{ card.inlineDate }}</p>
                      <b-card-text>
                        <p>{{ card.description }}</p>
                        <div class="flexCard">
                          <i class="fa-solid fa-location-dot"></i>
                          <p>{{ card.location }}</p>
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
      <div class="end-adding-buttons">
        <a class="cancel" href="#">Annulla</a>
        <a class="save-as" href="#">Salva come bozza</a>
        <a class="publishy" type="submit" @click="SubmitTappa">Pubblica</a>
      </div>
      <div class="hr2">
        <hr class="hr02" />
      </div>
    </div>
  </div>
</template>

<script>
import VueSlideBar from "vue-slide-bar";
import ModalStages from "./ModalStages.vue";
import dataStagesList from "/stages.json";
const baseURL = "http://localhost:3001/itineraries";

export default {
  data() {
    return {
      rawImg: "",
      stageCliked: false,
      recommend: [],
      checkedNames: [],
      slider: {
        lineHeight: 2,
        processStyle: {
          backgroundColor: "grey",
        },
      },
      disabled: false,
      cardList: [],
      cardList2: [],
      datas: dataStagesList.stages,
      files: [],
      valueArt: "0",
      valueRelax: "0",
      valueMare: "0",
      valueNatura: "0",
      valueGourmetExplorer: "0",
      valueParty: "0",
      maxTitle: 40,
      maxLocation: 40,
      maxText: 37,
      textTitle: "",
      textLocation: "",
      textText: "",
      isModalStagesVisible: false,
      stages: [],
    };
  },
  components: {
    VueSlideBar,
    ModalStages,
  },
  filters: {
    kb(val) {
      return Math.floor(val / 1024);
    },
  },

  methods: {
    //show the image in preview & read
    onSelectFile() {
      const input = this.$refs.fileInput;
      const files = input.files;
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.rawImg = e.target.result;
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      }
    },

    onPickFile() {
      this.$refs.fileInput.click();
    },

    uploadImage() {
      const file = document.querySelector("input[type=file]").files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        this.rawImg = reader.result;
        console.log(this.rawImg);
      };
      reader.readAsDataURL(file);
    },

    removeCard(id, dataList) {
      /*
      dataList[id].stage.stageClicked = false;
      console.log(dataList[id].stage.stageClicked);
      cardList[id].stage.stageClicked = false;
      console.log(cardList);
      */

      console.log(id);
      this.cardList.splice(id, 1);
      dataList[id].stage.stageClicked = false;
      console.log(this.cardList);
    },

    //collect all the data in body json file
    SubmitTappa() {
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
          itinerary: {
            name: this.textTitle,
            location: this.textLocation,
            description: this.textText,
            arte: this.valueArt,
            relax: this.valueRelax,
            mare: this.valueMare,
            natura: this.valueNatura,
            gourmet: this.valueGourmetExplorer,
            party: this.valueParty,
            recommend: this.checkedNames,
            stages: this.cardList,
            img: this.rawImg,
          },
        }),
      };

      //fetch all the data into json file and then go to summary stage page
      fetch(baseURL, options)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
        })
        .then(() => this.$router.push("/"))
        .catch((error) => console.log("Request Failed", error));
    },

    //jacopo code
    addFile(e) {
      let files = e.dataTransfer.files;
      [...files].forEach((file) => {
        this.files.push(file);
        kb(val);
        console.log(this.files);
      });
    },
    removeFile(file) {
      this.files = this.files.filter((f) => {
        return f != file;
      });
    },
    selectFile() {
      let fileInputElement = this.$refs.file;
      fileInputElement.click();
      // ...
    },
    choosed(data, disabled) {
      this.isModalStagesVisible = false;
      this.cardList.push(data);
      console.log(this.cardList);
      this.disabled = true;
    },
    showModalStages() {
      this.isModalStagesVisible = true;
    },

    /*
    stageUnLoaded(id, stageClicked, cardList) {
      console.log(id, stageClicked);
      console.log(cardList[id].stage.stageClicked, " Prima");
      cardList[id].stage.stageClicked = true;
      console.log(cardList[id].stage.stageClicked, " Dopo");
    },
    */
  },
  mounted() {
    this.$refs["id-1"];
  },
};
</script>

<style scoped>
.box {
  height: 489px;
  overflow: auto;
  width: 700px;
  position: absolute;
  left: 45%;
  top: 101%;
}

.flex-Dialog {
  display: flex;
  flex-direction: column;
}

.first-travel {
  left: 44%;
}

.container1 {
  max-width: 700px;
}

.overflow-hidden {
  max-width: 700px;
  height: 200px;
  margin-bottom: 40px;
}

.flex {
  display: flex;
}

.flexCard {
  display: flex;
  align-items: baseline;
}

.flexCard i {
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

.value-range {
  margin-left: 130px;
}

.value {
  margin-left: 150px;
}

#wrap {
  width: 100px;
  margin-left: 20px;
  margin-bottom: 30px;
}

.percentages {
  margin-left: 80px;
  align-items: center;
}
.percentages p {
  margin-bottom: 50px;
  margin-top: 22px;
  text-align: left;
}

.container {
  /*max-width: 1920px;*/
  background-color: #e6e6e6;
  margin-left: auto;
  margin-right: auto;
  /*height: auto;*/
  align-content: center;
  justify-content: center;
  display: flex;
}
.form-group {
  width: 1300px;
  height: 1400px;
  margin-top: 80px;
  background-color: #f2f2f2;
  margin-left: 40px;
  margin-right: 40px;
  border-radius: 2%;
  color: #939393;
  margin-bottom: 80px;
}

.vl {
  border-right: 2px solid #e6e6e6;
  height: 1250px;
  margin-top: -1200px;
  margin-right: 820px;
}

.ph-layout {
  margin-top: 100px;
  margin-left: 80px;
}

.ph-layout h3 {
  font-size: 20px;
  margin-bottom: 20px;
}

.wrapper {
  width: 350px;
  height: 350px;
  border: 2px dotted gray;
  text-align: center;
}

.wrapper p {
  color: #939393;
  margin-top: 50px;
}

.stage-ph {
  height: 350px;
  border-radius: 5%;
  width: 30%;
  background-color: #ffffff;
  border: dashed;
  border-color: lightgray;
  justify-content: center;
  align-items: center;
}

.classify-stage {
  margin-top: 80px;
  margin-left: 70px;
}

.classify-stage h2 {
  font-size: 20px;
  margin-bottom: 20px;
}
.classify-stage p {
  font-size: 16px;
}

.hr1 {
  width: 340px;
  margin-left: 80px;
}
.Reccomend-orNot {
  margin-left: 70px;
}

.Reccomend-orNot h2 {
  font-size: 20px;
}

.Reccomend-orNot p {
  font-size: 16px;
}
.sliders {
  margin-top: 5px;
  z-index: 0;
}

.btn {
  margin-right: 20px;
  height: auto;
  width: auto;
  border-radius: 30px;
  font-size: 70%;
  border-color: white;
  background-color: #ea5b0c;
  color: white;
  align-items: center;
  justify-content: center;
}

.btns-group2 {
  margin-top: 20px;
  margin-left: 100px;
}

.stage-details {
  margin-top: 5px;
  margin-left: 550px;
  position: absolute;
  top: 32%;
}

.stage-details h2 {
  font-size: 20px;
}

.stage-details p {
  font-size: 10px;
  margin-top: -15px;
  display: contents;
}

.stage-details input {
  width: 300%;
  height: 50px;
  margin-bottom: 10px;
  border: 0px, 0px, 0px;
  border-style: ridge;
  border-color: rgba(211, 211, 211, 0.236);
  padding-left: 10px;
}

.inputclass {
  height: 150px;
  padding-bottom: 50%;
  padding-top: 15px;
  padding-left: 10px;
}

.remove-stage-icon {
  border: none;
  position: relative;
  right: -96%;
}

.end-adding-buttons {
  display: flex;
  justify-content: end;
}

.end-adding-buttons a {
  text-align: center;
  width: 180px;
  height: auto;
  text-decoration: none;
  margin-right: 60px;
  font-size: 20px;
  margin-left: 20px;
  border-radius: 10px;
  background-color: #ea5b0c;
  color: white;
  border-color: black;
  text-decoration: none;
}

.end-adding-buttons .cancel {
  color: black;
  background-color: transparent;
}

.end-adding-buttons .publishy {
  background-color: #2d2e83;
}

.add-new-stage-btn {
  margin-top: 5px;
  margin-left: 850px;
  position: absolute;
  bottom: 0%;
}

.add-new-stage-btn a {
  margin-left: 280px;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  color: grey;
  display: inline-flex;
  border-radius: 50%;
  text-decoration: none;
  border: 2px solid grey;
}

.fas {
  font-size: 20px;
}

.card-position {
  width: 700px;
  height: 453px;
  position: absolute;
  z-index: 2;
  left: 42%;
  top: 105%;
}
.wrapper-p {
  margin-top: -220px;
}

.hr2 {
  margin-left: -110px;
  margin-top: -650px;
  width: 90%;
}
.hr02 {
  transform: rotate(90deg);
}
@media (max-width: 575.98px) {
  /**/
  .box {
    height: 0px;
    overflow: auto;
    width: 0px;
    position: static;
    left: 0%;
    top: 0%;
  }
  .flex-Dialog {
    display: flex;
    flex-direction: column;
  }
  .first-travel {
    left: 44%;
  }
  .container1 {
    max-width: 700px;
  }
  .overflow-hidden {
    max-width: 700px;
    height: 200px;
    margin-bottom: 40px;
  }
  .flex {
    display: flex;
  }
  .flexCard {
    display: flex;
    align-items: baseline;
  }
  .flexCard i {
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
  .value-range {
    margin-left: 130px;
  }
  .value {
    margin-left: 150px;
  }

  #wrap {
    margin-left: 35px;
    margin-bottom: 0px;
  }

  .percentages {
    margin-left: 20px;
    margin-right: 15px;
  }
  .percentages p {
    font-size: 16px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .form-group {
    width: 320px;
    height: 1500px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  /**/
  .vl {
    border-right: 2px solid #e6e6e6;
    height: 1250px;
    margin-top: -1200px;
    margin-right: 820px;
  }

  .ph-layout {
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .ph-layout h3 {
    font-size: 18px;
    margin-bottom: 20px;
    text-align: center;
  }
  .wrapper p {
    font-size: 16px;
    margin-top: 50px;
  }
  .stage-ph {
    height: 300px;
    width: 100%;
  }
  .classify-stage {
    margin-top: 20px;
    margin-left: 2px;
    margin-right: 2px;
  }
  .classify-stage h2 {
    font-size: 18px;
    margin-bottom: 0px;
  }
  .Reccomend-orNot {
    margin-left: 5px;
    margin-right: 5px;
  }
  .Reccomend-orNot h2 {
    font-size: 18px;
    margin-top: 20px;
  }
  .sliders {
    margin-top: 0px;
  }
  .btn {
    margin-right: 7px;
    font-size: 65%;
  }
  .btns-group2 {
    margin-top: 15px;
    margin-left: 75px;
  }
  .stage-details {
    top: 0%;
    margin-top: 40px;
    margin-left: 5px;
    margin-right: 5px;
    position: static;
  }
  .stage-details h2 {
    font-size: 18px;
  }
  .stage-details p {
    font-size: 16px;
    margin-top: 0px;
  }
  .stage-details input {
    width: 300px;
    height: 40px;
  }
  .end-adding-buttons {
    justify-content: space-evenly;
  }
  .end-adding-buttons a {
    width: 200px;
    height: auto;
    margin-right: 5px;
    margin-left: 5px;
    margin-bottom: 20px;
    font-size: 13px;
    border-radius: 10px;
    padding-top: 3px;
  }
  .add-new-stage-btn {
    margin-top: 10px;
    margin-left: 0px;
    position: static;
    bottom: 0%;
  }
  .add-new-stage-btn a {
    margin-left: 270px;
    width: 25px;
    height: 25px;
  }
  .fas {
    font-size: 15px;
  }
  .add-new-stage-btn h2 {
    font-size: 18px;
    margin-left: 115px;
    margin-bottom: 40px;
  }

  /**/
  .card-position {
    width: 700px;
    height: 453px;
    position: absolute;
    z-index: 2;
    left: 42%;
    top: 105%;
  }

  .wrapper-p {
    margin-top: -190px;
  }

  .hr1 {
    display: none;
  }
  .hr2 {
    display: none;
  }
  .hr02 {
    display: none;
  }
  hr {
    display: none;
  }
  ::placeholder {
    font-size: 12px;
  }
}

/** */
.add-image-button {
  background: transparent;
  border: none;
  margin-top: 30px;
}
.add-image-button > i {
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: #939393b0;
  display: flex;
  border-radius: 50%;
  text-decoration: none;
  border: 2px solid #939393b0;
  margin-top: 20px;
}
.fas {
  font-weight: 100;
  font-size: 87px;
}
.control__content {
  display: inline-flex;
  padding: 6px 12px;
  font-size: 70%;
  line-height: 25px;
  margin-right: 20px;
  border-radius: 30px;
  border-color: white;
  background-color: #ea5b0c;
  color: white;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
}
.control > input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

.control input:checked ~ .control__content {
  background-color: #939393b0;
}
a.button-area.fas.fa-plus {
  font-size: 35px;
}
.location {
  display: flex;
  align-items: baseline;
}
.location i {
  margin-right: 7px;
}
</style>
