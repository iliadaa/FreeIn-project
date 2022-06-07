<template>
  <div class="box">
    <div class="personal-group">
      <h5>My personal attitude</h5>
      <div class="personal-icons">
        <img class="art-culture" src="@/assets/art.png" />
        <img class="relax" src="@/assets/relax.png" />
        <img class="sea" src="@/assets/Mare.png" />
        <img class="nature-adventure" src="@/assets/Natura_Avventura.png" />
        <img class="gourmet-explorer" src="@/assets/Gourmet-Explorer.png" />
        <img class="party" src="@/assets/Party.png" />
      </div>
      <div class="profile">
        <div id="container-pig">
          <button class="button-area" @click="showModalDashBoard">
            <img class="pig" src="@/assets/pig.png" />
          </button>
          <Dashboard
            v-show="isModalDashBoardVisible"
            @close="closeModalDashBoard($event)"
          ></Dashboard>
        </div>
        <div id="container-bell">
          <button class="button-area" @click="showModal">
            <img class="ringbell" src="@/assets/ringbell.png" />
          </button>
         <!-- modal here -->
        </div>
        <div id="container-settings">
          <button class="button-area" @click="showModal">
            <img class="settings" src="@/assets/settings.png" />
          </button>
         <!-- modal here -->
        </div>
        <div id="container-avatar">
          <button class="button-area" @click="showTopRightVisible">
            <img class="avatar" src="@/assets/avatar.png" />
          </button>
         <!-- modal here -->
          <TopRightListHall v-show="isTopRightVisible" @close="closeTopRightVisible"></TopRightListHall>
        </div>
      </div>

      <div class="map-profile">
        <div class="plus-icon">
          <a class="fas fa-plus" href="#/stagecreation"> </a>
          <span class="text">Crea tappa</span>
          <a class="fas fa-plus" href="#/itinerarycreation"></a>
          <span class="text">Crea Itinerario</span>
        </div>
        <img src="@/assets/map.jpg" />
        <div class="avatar-5">
          <div class="flex-1">
            <img src="@/assets/avatar-plus.png" />
            <img src="@/assets/avatar-plus.png" />
            <img src="@/assets/avatar-with-logo.png" />
            <img src="@/assets/avatar-plus.png" />
            <img src="@/assets/avatar-with-logo.png" />
          </div>
          <div class="name text2">
            <label>Alex</label>
            <label>Jhon</label>
            <label>Alisha</label>
            <label>Alex</label>
            <label>Alex</label>
          </div>
          <div class="follower-following">
            <span class="dot">27</span> <label>Seguiti</label>
            <span class="dot">157</span>
            <label>Follower</label>
          </div>
        </div>
      </div>
      <div class="icons">
        <img src="@/assets/img-5.png" />
        <img src="@/assets/img-6.png" style="margin: 30px" />
        <img src="@/assets/img-7.png" />
        <img src="@/assets/img-8.png" style="margin: 30px" />
      </div>
      <div class="image-group">
        <div class="group">
          <img src="@/assets/image1.jpg" />
          <img src="@/assets/image2.jpg" />
          <img src="@/assets/image3.jpg" />
        </div>
        <div class="group">
          <img src="@/assets/image4.jpg" />
          <img src="@/assets/image5.jpg" />
          <img src="@/assets/image6.jpg" />
        </div>
        <div class="group">
          <img src="@/assets/image1.jpg" />
          <img src="@/assets/image2.jpg" />
          <img src="@/assets/image3.jpg" />
        </div>
      </div>
      <div class="cards-group">
        <h5>Sponsorizzato</h5>
        <b-card
          img-src="card-img1.jpg"
          img-left
          class="mb-3"
          title="Ostaria del moro"
          sub-title="ostariadelmoro.com"
        >
        </b-card>
        <b-card
          img-src="card-img2.jpg"
          img-left
          class="mb-3"
          title="Oleificio di Puglia"
          sub-title="oleificitodipuglia.com"
        >
        </b-card>
        <b-card
          img-src="card-img3.jpg"
          img-left
          class="mb-3"
          title="La Focaccia"
          sub-title="lafocaccia.com"
        >
        </b-card>
        <div class="filter-attitude">
          <div class="search">
            <input type="text" v-model="input" placeholder="Search " />
          </div>
          <h5>Filter attitude</h5>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "../Modal.vue";
import Dashboard from "../DashBoard/ModalDashBoard.vue";
import TopRightListHall from "../Users Cards/TopRightListHall.vue"
import VueSlideBar from "vue-slide-bar";
export default {
  name: "Privatprofile",
  data() {
    return {
      slider: {
        lineHeight: 2,
        processStyle: {
          backgroundColor: "grey",
        },
      },
      isTopRightVisible: false,
      isModalVisible: false,
      isModalDashBoardVisible: false,
      valueArt: "0",
      valueRelax: "0",
      valueMare: "0",
      valueNatura: "0",
      valueGourmetExplorer: "0",
      valueParty: "0",
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    showModalDashBoard() {
      this.isModalDashBoardVisible = true;
    },
    closeModalDashBoard(data) {
      console.log(data);
      this.isModalDashBoardVisible = false;
    },
    showTopRightVisible(){
      this.isTopRightVisible=true;
    },
    closeTopRightVisible(){
      this.isTopRightVisible=false; 
    }
  },
  components: {
    Modal,
    Dashboard,
    TopRightListHall,
    VueSlideBar,
  },
};
</script>

<style scoped>
.btn-info:hover {
  background-color: transparent;
  border-color: transparent;
}
.button-area {
  background-color: transparent;
  border-color: transparent;
  box-shadow: transparent;
}
.modal-container {
  position: absolute;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  background-color: rgb(246 239 239);
  z-index: 1;
}
#wrap {
  width: 100px;
}
.box {
  padding: 0 5% 0 5%;
}
.personal-group h4 {
  margin-bottom: 15px;
}
.profile {
  float: right;
  display: flex;
  align-items: center;
}
.personal-icons img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  float: left;
}
img.art-culture {
  background-color: #ff6343;
}
img.relax {
  background-color: #dc2d6c;
  margin: 0 20px 0 20px;
}
img.sea {
  background-color: #2d2e83;
}
img.nature-adventure {
  background-color: #ffa600;
  margin: 0 20px 0 20px;
}
img.gourmet-explorer {
  background-color: #009fe3;
}
img.party {
  background-color: #952685;
  margin: 0 20px 0 20px;
}
img.ringbell {
  margin: 0 30px 0 30px;
}
img.settings {
  margin-right: 70px;
}
h5 {
  color: #ea5b0c;
  font-style: italic;
}
img.avatar {
  width: 80px;
  height: auto;
}
.fas {
  font-size: 20px;
}
.plus-icon a {
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: grey;
  display: flex;
  border-radius: 50%;
  text-decoration: none;
  border: 2px solid grey;
  margin-top: 20px;
}
.plus-icon {
  margin-right: 25px;
  float: left;
}
.map-profile {
  margin-top: 150px;
}
.avatar-5 {
  font-size: 20px;
  float: right;
  margin-right: 100px;
  color: white;
}

.avatar-5 span {
  display: flex;
  justify-content: center;
  align-items: center;
}
.avatar-5 label {
  color: black;
}
.avatar-5 img {
  background-color: #d1d3d4;
}
.flex-1 :last-child {
  border-top-right-radius: 15px;
}
.flex-1 :first-child {
  border-top-left-radius: 15px;
}
.dot {
  height: 40px;
  width: 40px;
  background-color: #ea5b0c;
  border-radius: 50%;
  display: inline-block;
  margin: 8px 20px 0;
}
.follower-following {
  display: flex;
}
.follower-following label {
  margin-top: 8px;
}

.name {
  display: flex;
  justify-content: space-around;
  background-color: #d1d3d4;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}

.text2 label {
  margin-right: 10px;
  color: grey;
}
.icons img {
  height: 40px;
  width: 40px;
}
.icons {
  display: flex;
  align-items: center;
}

a {
  text-decoration: none;
  color: white;
  border-radius: 10%;
}
a:hover {
  color: white;
}
.image-group img {
  border-radius: 50px;
  padding: 0 10px 10px 10px;
}
.image-group {
  float: left;
  padding-right: 60px;
}
h4.card-title {
  color: black;
  font-size: initial;
  margin-top: 45px;
}
.card {
  box-shadow: none;
}

.cards-group {
  margin-top: -125px;
  display: flex;
  flex-direction: column;
}
.cards-group h5 {
  color: gray;
  font-style: italic;
}
.filter-attitude {
  background-color: gainsboro;
  border-radius: 45px;
  margin-top: 70px;
}
.filter-attitude h5 {
  color: gray;
  font-style: italic;
  border-bottom: 1px solid grey;
  margin: 35px;
}
input {
  display: block;
  width: 350px;
  margin: 20px auto;
  padding: 10px 45px;
  background: white url("../../assets/search.png") no-repeat 15px center;
  background-size: 30px 30px;
  font-size: 15px;
  border: solid white 2px;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  background-color: transparent;
}
.search {
  background-color: white;
  padding-bottom: 5px;
  padding-top: 2px;
  border-radius: 37px;
}

.percentages {
  margin-left: 30px;
  align-items: center;
}
.percentages p {
  margin-bottom: 19px;
  margin-top: 19px;
  text-align: left;
  color: gray;
  font-style: italic;
}
.sliders {
  margin-top: 5px;
}
.flex {
  display: flex;
  justify-content: space-around;
  background-color: transparent;
}
</style>
