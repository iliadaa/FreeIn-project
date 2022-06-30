<template>
  <div class="container">
    <div class="form-group">
      <div class="ph-layout">
        <div id="editor"></div>
        <h3>Foto tappa (obbligatorio)</h3>
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
            <p style="margin-top: -40px">Dimensioni minime di "808 x 632 pixel"</p>
          </span>

          <!--<ul class="list-group">
            <li class="list-group-item" v-for="(file, id) in files" :key="id">
              {{ file.name }} ({{ file.size | kb }} kb)
              <button class="btn btn-danger btn-sm float-right" @click="removeFile(file)">
                Close
              </button>
            </li>
          </ul>-->
        </div>
      </div>

      <div class="classify-stage">
        <h2>
          Come classificheresti questa Tappa?
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
          <label class="control" for="family">
            <input type="checkbox" value="Famiglia" id="family" v-model="checkedNames" />
            <span class="control__content"> Famiglia </span>
          </label>
          <label class="control" for="single">
            <input type="checkbox" value="Single" id="single" v-model="checkedNames" />
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
            <input type="checkbox" value="Bambini" id="children" v-model="checkedNames" />
            <span class="control__content"> Bambini </span>
          </label>
          <label class="control" for="friends">
            <input type="checkbox" value="Comitiva" id="friends" v-model="checkedNames" />
            <span class="control__content"> Comitiva </span>
          </label>
          <label class="control" name="couple">
            <input type="checkbox" value="Coppia" id="couple" v-model="checkedNames" />
            <span class="control__content"> Coppia</span>
          </label>
        </div>
      </div>

      <b-form @submit="allerta" style="width: auto">
        <div class="stage-details">
          <h2>
            Titolo tappa
            <p>(obbligatorio)</p>
          </h2>
          <div v-text="maxTitle - textTitle.length" style="color: red"></div>

          <input
            required=""
            type="text"
            :maxlength="maxTitle"
            v-model="textTitle"
            style="padding-left: 10px"
            placeholder="Assegna un titolo alla tappa massimo 40 caratteri"
            @keyup.enter="addInfo"
          />
          <h2>
            Location
            <p>(obbligatorio)</p>
          </h2>
          <div v-text="maxLocation - textLocation.length" style="color: red"></div>
          <input
            type="text"
            :maxlength="maxLocation"
            v-model="textLocation"
            style="padding-left: 10px"
            placeholder="Inserisci il nome del luogo massimo 40 caratteri"
            required=""
          />

          <h2>
            Testo
            <p>(obbligatorio)</p>
          </h2>
          <div v-text="maxText - textText.length" style="color: red"></div>
          <input
            required=""
            type="text"
            style="height: 150px; padding-bottom: 50%; padding-left: 10px"
            placeholder="Inserisci descrizione massimo 37 caratteri"
            :maxlength="maxText"
            v-model="textText"
            @keyup.enter="addInfo"
          />
        </div>

        <div class="end-adding-buttons">
          <a class="cancel" href="#/privatprofile">Annulla</a>
          <a class="save-as" href="#">Salva come bozza</a>
          <a class="publishy" type="submit" @click="SubmitTappa">Pubblica</a>
        </div>
      </b-form>

      <div style="margin-left: -110px; margin-top: -650px; width: 90%">
        <hr style="transform: rotate(90deg)" />
      </div>
    </div>
  </div>
</template>

<script>
import VueSlideBar from "vue-slide-bar";
import axios from "axios";
const baseURL = "http://localhost:3000/jsonarray";
export default {
  data() {
    return {
      rawImg: "",
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
      recommend: [],
      checkedNames: [],
    };
  },

  /*
  async created(){
    try {
      const res = await axios.get(baseURL);
      this.stageInfo = res.data;
      console.log("sono qui")
    } catch(e){
      console.error(e);
    }
  },
*/
  components: {
    VueSlideBar,
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

    //collect all the data in body json file
    SubmitTappa() {
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
          image: this.rawImg,
          stage: this.textTitle,
          location: this.textLocation,
          description: this.textText,
          arte: this.valueArt,
          relax: this.valueRelax,
          mare: this.valueMare,
          natura: this.valueNatura,
          gourmet: this.valueGourmetExplorer,
          party: this.valueParty,
          recommend: this.checkedNames,
        }),
      };

      //fetch all the data into json file and then go to summary stage page
      fetch(baseURL, options)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
        })
        .then(() => this.$router.push("/summarystage"))
        .catch((err) => console.log("Request Failed", err));
    },

    //Jacopo methods
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
    allerta() {
      alert("Funziono");
    },
    async addInfo() {
      const res = await axios.post(baseURL, {
        stage: this.textTitle,
        description: this.textText,
      });
      this.stageInfo = [...this.stageInfo, res.data];
      this.textTitle = "";
    },
  },
};
</script>

<style scoped>
.input[type="text"]::placeholder {
  padding-bottom: 50%;
}

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
  background-size: auto;
  background-position: center center;
  text-align: center;
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
.btn:hover {
  color: white;
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
.clicked {
  background-color: #939393b0;
}
.is-orange {
  background: #ea5b0c;
}
.is-grey {
  background: #939393b0;
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
</style>
