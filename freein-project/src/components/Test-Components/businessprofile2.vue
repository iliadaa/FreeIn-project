<template>
  <div class="box">
    <!-- Attitude & Profile -->
    <div class="attitude-profile">
      <!-- Attitude -->
      <div class="personal-attitude">
        <h5>My personal attitude</h5>
        <div class="personal-attitude-icons">
          <img class="art-culture" src="@/assets/art.png" />
          <img class="relax" src="@/assets/relax.png" />
          <img class="sea" src="@/assets/Mare.png" />
          <img class="nature-adventure" src="@/assets/Natura_Avventura.png" />
          <img class="gourmet-explorer" src="@/assets/Gourmet-Explorer.png" />
          <img class="party" src="@/assets/Party.png" />
        </div>
        <div class="personal-attitude-percentage">
          <label>50%</label>
          <label>70%</label>
          <label>50%</label>
          <label>70%</label>
          <label>30%</label>
          <label>30%</label>
        </div>
      </div>
      <!-- Profile -->
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
          <Modal v-show="isModalVisible" @close="closeModal"></Modal>
        </div>
        <div id="container-settings">
          <button class="button-area" @click="showModal">
            <img class="settings" src="@/assets/settings.png" />
          </button>
          <Modal v-show="isModalVisible" @close="closeModal"></Modal>
        </div>
        <div id="container-avatar">
          <button class="button-area" @click="showTopRightVisible">
            <img class="avatar" src="@/assets/avatar.png" />
          </button>
          <!-- modal here -->
          <TopRightListHall
            v-show="isTopRightVisible"
            @close="closeTopRightVisible"
          ></TopRightListHall>
        </div>
      </div>
    </div>
    <div class="map-filter-search">
      <div class="map-tappa-itinerario">
        <!-- Tappa and Itinerario -->
        <div class="tappa-itinerario">
          <a class="fas fa-plus" href="#"> </a>
          <span class="text-tappa">Crea tappa</span>
          <a class="fas fa-plus" href="#"></a>
          <span class="text-itinerario">Crea Itinerario</span>
        </div>
        <!-- Map -->
        <div class="map">
          <img src="@/assets/map.jpg" />
          <!-- Filter -->
          <div class="filter">
            <div class="icons">
              <img src="@/assets/img-5.png" />
              <img src="@/assets/img-6.png" style="margin: 30px" />
              <img src="@/assets/img-7.png" />
              <img src="@/assets/img-8.png" style="margin: 30px" />
              <div class="button button-console">
                <button>
                  <a href="http://localhost:8080/#/businesscard1">Business >></a>
                </button>
              </div>
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
          </div>
        </div>
      </div>

      <!-- Avatar Sponsor Search -->
      <div class="avatar-sponsor-search">
        <!-- Avatar Sponsor  -->
        <div class="avatar-sponsor">
          <!-- Avatar -->
          <div class="avatar">
            <div class="avatar-image">
              <img src="@/assets/avatar-plus.png" />
              <img src="@/assets/avatar-plus.png" />
              <img src="@/assets/avatar-with-logo.png" />
              <img src="@/assets/avatar-plus.png" />
              <img src="@/assets/avatar-with-logo.png" />
            </div>
            <div class="avatar-name">
              <label>Alex</label>
              <label>Jhon</label>
              <label>Alisha</label>
              <label>Alex</label>
              <label>Alex</label>
            </div>
            <div class="follower-following">
              <span class="dot">27</span>
              <label>Seguiti</label>
              <span class="dot">157</span>
              <label>Follower</label>
            </div>
          </div>
          <!-- Sponsor -->
          <div class="sponsor">
            <h5>Sponsorizzato</h5>

            <div class="card-body">
              <img src="card-img1.jpg" />
              <div class="sponsor-card-text">
                <h6>Ostaria del moro</h6>
                <p>ostariadelmoro.com</p>
              </div>
            </div>
            <div class="card-body">
              <img src="card-img2.jpg" />
              <div class="sponsor-card-text">
                <h6>Oleificio di Puglia</h6>
                <p>oleificiodipuglia.com</p>
              </div>
            </div>
            <div class="card-body">
              <img src="card-img3.jpg" />
              <div class="sponsor-card-text">
                <h6>La Focaccia</h6>
                <p>lafocaccia.com</p>
              </div>
            </div>
          </div>
        </div>
        <!-- search-->
        <div class="filter-attitude">
          <div class="search-filter-attitude">
            <input type="text" v-model="input" placeholder="Search " />
          </div>
          <h5>Filter attitude</h5>
          <div class="text-slider-filter-attitude">
            <div class="text-filter-attitude">
              <p>arte e cultura</p>
              <p>relax</p>
              <p>mare</p>
              <p>natura e avventura</p>
              <p>gourmet explorer</p>
              <p>party</p>
            </div>
            <div class="slider-filter-attitude">
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
import TopRightListHall from "../Users Cards/TopRightListHall.vue";
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
    showTopRightVisible() {
      this.isTopRightVisible = true;
    },
    closeTopRightVisible() {
      this.isTopRightVisible = false;
    },
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
.box {
  margin: 50px;
}
/* Attitude & Profile  */
.attitude-profile {
  display: flex;
  justify-content: space-between;
}
/* Personal Attitude */
.personal-attitude-icons img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
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
h5 {
  color: #ea5b0c;
  font-style: italic;
}
.personal-attitude-percentage {
  display: flex;
  justify-content: space-around;
}
.personal-attitude {
  font-size: 20px;
  display: inline-grid;
  padding-left: 6%;
}

.personal-attitude label {
  color: black;
}

/** Profile  */
.profile {
  display: flex;
  padding-right: 5%;
}
.button-area {
  background-color: transparent;
  border-color: transparent;
  box-shadow: transparent;
}
img.avatar {
  width: 80px;
  height: auto;
}

/** Map Filter Search  */
.map-filter-search {
  display: flex;
  justify-content: space-around;
  padding-top: 3%;
}
/* Map Tappa Itinerario */
.map-tappa-itinerario {
  display: flex;
  margin-top: 15px;
}

/* Tappa and Itinerario */
.tappa-itinerario a {
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

/* Avatar Sponsor Search*/

/* Avatar */
.avatar-image {
  display: flex;
  font-size: 20px;
  background-color: #d1d3d4;
  justify-content: space-between;
  border-radius: 15px;
}
.avatar span {
  display: flex;
  justify-content: center;
  align-items: center;
}
.avatar-image img {
  background-color: #d1d3d4;
}
.avatar-name {
  display: flex;
  justify-content: space-around;
  background-color: #d1d3d4;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}
.avatar-name label {
  margin-right: 10px;
  color: grey;
}
.avatar-image :last-child {
  border-top-right-radius: 15px;
}
.avatar-image :first-child {
  border-top-left-radius: 15px;
}
.dot {
  height: 50px;
  width: 50px;
  background-color: #ea5b0c;
  color: white;
  border-radius: 50%;
  margin-top: 8px;
  font-size: 25px;
}
.follower-following {
  display: flex;
  justify-content: flex-end;
}
.follower-following label {
  margin-top: 8px;
  margin-right: 30px;
  font-size: 20px;
  font-weight: 400;
}

/**sponsor */
.sponsor {
  margin-top: 25%;
}
/**Card*/
.sponsor > .card-body {
  display: flex;
  align-items: center;
}
.sponsor > .card-body > img {
  max-width: 200px;
  height: 160px;
}
.sponsor-card-text {
  margin-left: 5%;
}

/**Search */

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
.search-filter-attitude {
  background-color: white;
  padding-bottom: 5px;
  padding-top: 2px;
  border-radius: 37px;
}
.search-filter-attitude > input {
  display: block;
  width: 200px;
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
.text-filter-attitude {
  margin-left: 30px;
  align-items: center;
}
.text-filter-attitude p {
  margin-top: 19px;
  color: gray;
  font-style: italic;
}
.text-slider-filter-attitude {
  display: flex;
}
</style>
