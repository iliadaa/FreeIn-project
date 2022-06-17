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
          <button class="button-area" @click="showDialogPage">
            <img class="settings" src="@/assets/settings.png" />
          </button>
          <DialogPage v-show="isDialogPageVisible" @close="closeDialogPage"></DialogPage>
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
    <!-- Map  Search Filter -->
    <div class="map-filter-search">
      <!-- Map Tappa Intinerario -->
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
          <!--<img src="@/assets/map.jpg" />-->

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072469.3549467237!2d16.067811961168818!3d41.23357271616032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347e846099e537b%3A0x5f08efb1b04f362f!2sCaff%C3%A8%20Vergnano%201882!5e0!3m2!1ssq!2s!4v1655289552962!5m2!1ssq!2s"
            width="100%"
            height="600"
            style="border-radius: 20px"
            allowfullscreen=""
            loading="fast"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <!--Filter Card-->
          <div class="filter-card">
            <!--Filter -->
            <div class="filter">
              <div class="icons">
                <img src="@/assets/img-5.png" />
                <img src="@/assets/img-6.png" />
                <img src="@/assets/img-7.png" />
                <img src="@/assets/img-8.png" />
              </div>
              <div class="business-button">
                <button>
                  <a href="http://localhost:8080/#/businesscard1">Business </a>
                </button>
              </div>
            </div>
            <!-- Business Card -->
            <div class="business-profile-card">
              <div class="wrap">
                <div class="cards2">
                  <div class="cards2i">
                    <div class="mapicon"><i class="fas fa-map-marked-alt"></i></div>
                    <div class="usericon"><i class="fas fa-user-circle"></i></div>
                  </div>
                  <div class="image-card1">
                    <img src="@/assets/business-photo/business-image-1.jpg" alt="" />
                  </div>
                  <div class="cards2body">
                    <p>Peschici</p>
                    <div class="cards2icons">
                      <div class="button1">
                        <a href="#" class="button">Go</a>
                      </div>
                      <div>
                        <a href="#"><i class="fas fa-star"></i></a>
                        <a href="#"><i class="far fa-bookmark"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cards2">
                  <div class="cards2i">
                    <div class="mapicon"><i class="fas fa-map-marked-alt"></i></div>
                    <div class="usericon"><i class="fas fa-user-circle"></i></div>
                  </div>
                  <img src="@/assets/business-photo/business-image-1.jpg" alt="" />
                  <div class="cards2body">
                    <p>Peschici</p>
                    <div class="cards2icons">
                      <div class="button1">
                        <a href="#" class="button">Go</a>
                      </div>
                      <div>
                        <a href=""><i class="fas fa-star"></i></a>
                        <a href=""><i class="far fa-bookmark"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cards2">
                  <div class="cards2i">
                    <div class="mapicon"><i class="fas fa-map-marked-alt"></i></div>
                    <div class="usericon"><i class="fas fa-user-circle"></i></div>
                  </div>
                  <img src="@/assets/business-photo/business-image-1.jpg" alt="" />
                  <div class="cards2body">
                    <p>Peschici</p>
                    <div class="cards2icons">
                      <div class="button1">
                        <a href="#" class="button">Go</a>
                      </div>
                      <div>
                        <a href="#"><i class="fas fa-star"></i></a>
                        <a href=""><i class="far fa-bookmark"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="wrap">
                <div class="cards2">
                  <div class="cards2i">
                    <div class="mapicon"><i class="fas fa-map-marked-alt"></i></div>
                    <div class="usericon"><i class="fas fa-user-circle"></i></div>
                  </div>
                  <img src="@/assets/business-photo/business-image-1.jpg" alt="" />
                  <div class="cards2body">
                    <p>Peschici</p>
                    <div class="cards2icons">
                      <div class="button1">
                        <a href="#" class="button">Go</a>
                      </div>
                      <div>
                        <a href="#"><i class="fas fa-star"></i></a>
                        <a href="#"><i class="far fa-bookmark"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cards2">
                  <div class="cards2i">
                    <div class="mapicon"><i class="fas fa-map-marked-alt"></i></div>
                    <div class="usericon"><i class="fas fa-user-circle"></i></div>
                  </div>
                  <img src="@/assets/business-photo/business-image-1.jpg" alt="" />
                  <div class="cards2body">
                    <p>Peschici</p>
                    <div class="cards2icons">
                      <div class="button1">
                        <a href="#" class="button">Go</a>
                      </div>
                      <div>
                        <a href=""><i class="fas fa-star"></i></a>
                        <a href=""><i class="far fa-bookmark"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cards2">
                  <div class="cards2i">
                    <div class="mapicon"><i class="fas fa-map-marked-alt"></i></div>
                    <div class="usericon"><i class="fas fa-user-circle"></i></div>
                  </div>
                  <img src="@/assets/business-photo/business-image-1.jpg" alt="" />
                  <div class="cards2body">
                    <p>Peschici</p>
                    <div class="cards2icons">
                      <div class="button1">
                        <a href="#" class="button">Go</a>
                      </div>
                      <div>
                        <a href="#"><i class="fas fa-star"></i></a>
                        <a href=""><i class="far fa-bookmark"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="wrap">
                <div class="cards2">
                  <div class="cards2i">
                    <div class="mapicon"><i class="fas fa-map-marked-alt"></i></div>
                    <div class="usericon"><i class="fas fa-user-circle"></i></div>
                  </div>
                  <img src="@/assets/business-photo/business-image-1.jpg" alt="" />
                  <div class="cards2body">
                    <p>Peschici</p>
                    <div class="cards2icons">
                      <div class="button1">
                        <a href="#" class="button">Go</a>
                      </div>
                      <div>
                        <a href="#"><i class="fas fa-star"></i></a>
                        <a href="#"><i class="far fa-bookmark"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cards2">
                  <div class="cards2i">
                    <div class="mapicon"><i class="fas fa-map-marked-alt"></i></div>
                    <div class="usericon"><i class="fas fa-user-circle"></i></div>
                  </div>
                  <img src="@/assets/business-photo/business-image-1.jpg" alt="" />
                  <div class="cards2body">
                    <p>Peschici</p>
                    <div class="cards2icons">
                      <div class="button1">
                        <a href="#" class="button">Go</a>
                      </div>
                      <div>
                        <a href=""><i class="fas fa-star"></i></a>
                        <a href=""><i class="far fa-bookmark"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cards2">
                  <div class="cards2i">
                    <div class="mapicon"><i class="fas fa-map-marked-alt"></i></div>
                    <div class="usericon"><i class="fas fa-user-circle"></i></div>
                  </div>
                  <img src="@/assets/business-photo/business-image-1.jpg" alt="" />
                  <div class="cards2body">
                    <p>Peschici</p>
                    <div class="cards2icons">
                      <div class="button1">
                        <a href="#" class="button">Go</a>
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
  </div>
</template>

<script>
import Modal from "../Modal.vue";
import Dashboard from "../DashBoard/ModalDashBoard.vue";
import TopRightListHall from "../Users Cards/TopRightListHall.vue";
import VueSlideBar from "vue-slide-bar";
import DialogPage from "../Users Cards/DialogPage-Card.vue";

export default {
  data() {
    return {
      slider: {
        lineHeight: 2,
        processStyle: {
          backgroundColor: "grey",
        },
      },
      isDialogPageVisible: false,
      isTopRightVisible: false,
      isModalVisible: false,
      isModalDashBoardVisible: false,
      valueArt: "0",
      valueRelax: "0",
      valueMare: "0",
      valueNatura: "0",
      valueGourmetExplorer: "0",
      valueParty: "0",
      input: "",
    };
  },
  methods: {
    showDialogPage() {
      this.isDialogPageVisible = true;
    },
    closeDialogPage() {
      this.isDialogPageVisible = false;
    },
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
    DialogPage,
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
.map {
  margin-right: 5%;
}
.map-filter-search {
  display: flex;

  padding-top: 3%;
}
/* Map Tappa Itinerario */
.map-tappa-itinerario {
  display: flex;
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

/**Filter Business-Card */
.filter {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/**Filter*/
.icons img {
  height: 40px;
  width: 40px;
}
.icons {
  display: inline-flex;
  align-items: center;
}
.icons img:nth-child(1) {
  width: fit-content;
  height: auto;
  margin-right: 5%;
}
.icons img:nth-child(3) {
  margin-right: 5%;
  margin-left: 5%;
}
.business-button > button {
  background: #f26522;
  font-size: 18px;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 40px;
}
.business-button {
  padding: 10px 30px;
  margin: 50px;
  border-radius: 35px;
}
a {
  text-decoration: none;
  color: white;
  border-radius: 10%;
}
a:hover {
  color: white;
}
/**Business card */
.wrap {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 30px;
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

.usericon {
  padding-top: 5px;
  color: white;
}

.mapicon {
  background-color: #009fe3;
  width: 50px;
}
.wrap img {
  width: 100%;
  height: auto;
  border-radius: 10% 10% 0% 0%;
  position: relative;
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
  border-radius: 50%;
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
/**sponsor */

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
/**Search filter */
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
