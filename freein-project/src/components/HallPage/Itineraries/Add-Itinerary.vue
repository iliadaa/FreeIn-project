<template>
  <div class="container">
    <div class="form-group">
      <div class="ph-layout">
        <h3>Foto itinerario (obbligatorio)</h3>
        <div  
          class="wrapper px-2 stage-ph"
          v-cloak
          @drop.prevent="addFile"
          @dragover.prevent
        >
          <p href="#">Carica immagine</p>
          <br />
          <p style="margin-top: -40px">
            Dimensioni minime di "808 x 632 pixel"
          </p>
          
          <ul class="list-group">
            <li class="list-group-item" v-for="(file, id) in files" :key="id">
              {{ file.name }} ({{ file.size | kb }} kb)
              <button
                class="btn btn-danger btn-sm float-right"
                @click="removeFile(file)"
              >
                Close
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="classify-stage">
        <h2>
          Come classificheresti questo itinierario
          <p style="font-size: 12px">(obbligatorio)</p>
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
      <hr style="width: 390px; margin-left: 80px" />
      <div class="Reccomend-orNot">
        <h2>
          A chi consiglieresti questa tappa?
          <p style="font-size: 10px">(obbligatorio)</p>
        </h2>
        <div class="btns-group1">
          <b-button class="btn" type="submit">Famiglia</b-button>
          <b-button class="btn" type="submit">Single</b-button>
          <b-button class="btn" type="submit">Struttura per animali</b-button>
        </div>
        <div class="btns-group2">
          <b-button class="btn" type="submit">Bambini</b-button>
          <b-button class="btn" type="submit">Comitiva</b-button>
          <b-button class="btn" type="submit">Coppia</b-button>
        </div>
      </div>
      <div class="stage-details">
        <h2>
          Titolo itinerario
          <p>(obbligatorio)</p>
        </h2>
        <div v-text="(maxTitle - textTitle.length)" style="color: red"></div>
        <input
          type="text"
          :maxlength="maxTitle"
          v-model="textTitle"
          style="padding-left: 10px"
          placeholder="Assegna un titolo alla tappa massimo 40 caratteri"
        />
        <h2>
          Location
          <p>(obbligatorio)</p>
        </h2>
        <div v-text="(maxLocation - textLocation.length)" style="color: red"></div>
        <input
          type="text"
          :maxlength="maxLocation"
          v-model="textLocation"
          style="padding-left: 10px"
          placeholder="Inserisci il nome del luogo massimo 40 caratteri"
        />

        <h2>
          Testo
          <p>(obbligatorio)</p>
        </h2>
        <div v-text="(maxText - textText.length)" style="color: red"></div>
        <input
          type="text"
          style="height: 150px; padding-bottom: 50%; padding-left: 10px"
          placeholder="Inserisci descrizione massimo 37 caratteri"
          :maxlength="maxText"
          v-model="textText"
        />
      </div>
      <div class="add-new-stage-btn">
          <h2>Aggiungi nuova tappa</h2>
          <a class="fas fa-plus " href="#/stagelist"></a>
      </div>
      <div class="end-adding-buttons">
        <a class="cancel" href="#">Annulla</a>
        <a class="save-as" href="#">Salva come bozza</a>
        <a class="publishy" href="#">Pubblica</a>
      </div>
      <div style="margin-left: -110px; margin-top: -650px; width: 90%">
        <hr style="transform: rotate(90deg)" />
      </div>
    </div>
  </div>
</template>

<script>
import VueSlideBar from "vue-slide-bar";
export default {
  data() {
    return {
      slider: {
        lineHeight: 2,
        processStyle: {
          backgroundColor: "grey",
        },
      },
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
    };
  },
  components: {
    VueSlideBar,
  },
  filters: {
    kb(val) {
      return Math.floor(val / 1024);
    },
  },

  methods: {
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
   selectFile(){
      let fileInputElement = this.$refs.file;
      fileInputElement.click();
      // ...
    }
  },
};
</script>

<style scoped>

.flex {
  display: flex;
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
  max-width: 1920px;
  background-color: #e6e6e6;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  align-content: center;
  justify-content: center;
  display: flex;
}
.form-group {
  width: 1300px;
  height: 1400px;
  margin-top: 80px;
  background-color: #f2f2f2;
  margin-left: auto;
  margin-right: auto;
  border-radius: 2%;
  color: #939393;
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
  margin-top: 180px;
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

.Reccomend-orNot {
  margin-left: 70px;
}

.Reccomend-orNot h2 {
  font-size: 20px;
}

.sliders {
  margin-top: 5px;
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

.add-new-stage-btn{
 margin-top: 5px;
  margin-left: 850px;
  position: absolute;
  bottom: 0%;
  
}

.add-new-stage-btn a{
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

.fas{
    font-size: 20px;
}

</style>
