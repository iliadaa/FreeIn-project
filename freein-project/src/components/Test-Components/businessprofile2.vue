<template>
  <div class="box">

    <!-- Attitude & Profile -->
    <div class="attitude-profile">

    <!-- Attitude -->
      <div class="personal-attitude">
        <h5>My personal attitude</h5>

        <div class="personal-attitude-icons">
            <div class="art">
              <div class="image1">
                <img src="@/assets/art.svg" alt="" />
              </div>
              <div class="iconscontainer1">
                <label>{{ takingValue.profileTest.arte }}%</label>
              </div>
            </div>

            <div class="relax">
              <div class="image3">
                <img src="@/assets/donna2.svg" alt="" />
              </div>
              <div class="iconscontainer2">
                <label>{{ takingValue.profileTest.relax }}%</label>
              </div>
            </div>

            <div class="sea">
              <div class="image1">
                <img src="@/assets/Mare.png" alt="" />
              </div>
              <div class="iconscontainer2">
                <label>{{ takingValue.profileTest.mare }}%</label>
              </div>
            </div>

            <div class="nature-adventure">
              <div class="image5">
                <img src="@/assets/natura.svg" alt="" />
              </div>
              <div class="iconscontainer1">
                <label>{{ takingValue.profileTest.nature }}%</label>
              </div>
            </div>

            
            <div class="gourmet-explorer">
              <div class="image2">
                <img src="@/assets/yellowgourmet.png" alt="" />
              </div>
              <div class="iconscontainer1">
                <label>{{ takingValue.profileTest.cibo }}%</label>
              </div>
            </div>

            <div class="party">
              <div class="image4">
                <img src="@/assets/party.svg" alt="" />
              </div>
              <div class="iconscontainer2">
                <label>{{ takingValue.profileTest.party }}%</label>
              </div>
            </div>
        </div>
      </div>

      <!-- Profile -->
      <div class="profile">
        <div id="container-pig">
          <button class="button-area" @click="showModalDashBoard">
            <i class="fa-solid fa-piggy-bank"></i>
          </button>
          <Dashboard
            v-show="isModalDashBoardVisible"
            @close="closeModalDashBoard($event)"
          ></Dashboard>
        </div>

        <div id="container-bell">
          <button class="button-area" @click="showModal">
             <i class="fa-solid fa-bell"></i>
          </button>
          <Modal v-show="isModalVisible" @close="closeModal"></Modal>
        </div>

        <div id="container-settings">
          <button class="button-area" @click="showDialogPage">
             <i class="fa-solid fa-gear"></i>
          </button>
          <DialogPage
            v-show="isDialogPageVisible"
            @close="closeDialogPage"
          ></DialogPage>
        </div>

        <div id="container-avatar">
          <button class="button-area" @click="showTopRightVisible">
             <img class="avatar1" src="@/assets/user1.svg" alt=""> 
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
        <div><a class="fas fa-plus" href="/#/stagecreation"></a></div>
          <div class="text1"><p> Crea tappa </p></div>
        <a class="fas fa-plus" href="/#/itinerarycreation"></a>
          <div class="text2"><p> Crea Itinerario </p></div>
      </div>

    <!-- Map -->
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072469.3549467237!2d16.067811961168818!3d41.23357271616032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347e846099e537b%3A0x5f08efb1b04f362f!2sCaff%C3%A8%20Vergnano%201882!5e0!3m2!1ssq!2s!4v1655289552962!5m2!1ssq!2s"
            width="100%"
            height="450"
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
                <img class="arrow" src="@/assets/arrow.svg" />
                <img class="flag" src="@/assets/flag2.svg" />
                <img class="location" src="@/assets/location2.svg" />
                <img class="basket" src="@/assets/basket.svg" />
              </div>
              <div class="business-button">
                <button id="beBusiness">
                  <a href="#/businesscard1">Business </a>
                </button>
              </div>
            </div>

    <!-- Business Card -->
            <div class="business-profile-card">
              <div class="wrap">
                <StageHallCard />
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
        <div>
          <div>
            <img src="@/assets/user1.svg" alt="">
          </div>
          <div class="avatarcontainer1">
            <p>Alex</p>
          </div>
        </div>

        <div>
          <div>
            <img src="@/assets/user1.svg" alt="">
          </div>
          <div class="avatarcontainer1">
            <p>Alex</p>
          </div>
        </div>

        <div>
          <div>
            <img src="@/assets/user1.svg" alt="">
          </div>
          <div class="avatarcontainer1">
            <p>Alex</p>
          </div>
        </div>

        <div>
          <div>
            <img src="@/assets/user1.svg" alt="">
          </div>
          <div class="avatarcontainer1">
            <p>Alex</p>
          </div>
        </div>

        <div>
          <div>
            <img src="@/assets/user1.svg" alt="">
          </div>
          <div class="avatarcontainer1">
            <p>Alex</p>
          </div>
        </div>
        </div>

        <div class="follower-following">
            <span class="dot">27</span>
              <label>Seguiti</label>
            <span class="dot">57</span>
              <label>Follower</label>
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
                  :tooltipStyles="{
                    backgroundColor: 'grey',
                    borderColor: 'grey',
                  }"
                >
                </VueSlideBar>
                <VueSlideBar
                  v-model="valueRelax"
                  :min="0"
                  :max="100"
                  :processStyle="slider.processStyle"
                  :lineHeight="slider.lineHeight"
                  :tooltipStyles="{
                    backgroundColor: 'grey',
                    borderColor: 'grey',
                  }"
                >
                </VueSlideBar>
                <VueSlideBar
                  v-model="valueMare"
                  :min="0"
                  :max="100"
                  :processStyle="slider.processStyle"
                  :lineHeight="slider.lineHeight"
                  :tooltipStyles="{
                    backgroundColor: 'grey',
                    borderColor: 'grey',
                  }"
                >
                </VueSlideBar>
                <VueSlideBar
                  v-model="valueNatura"
                  :min="0"
                  :max="100"
                  :processStyle="slider.processStyle"
                  :lineHeight="slider.lineHeight"
                  :tooltipStyles="{
                    backgroundColor: 'grey',
                    borderColor: 'grey',
                  }"
                >
                </VueSlideBar>
                <VueSlideBar
                  v-model="valueGourmetExplorer"
                  :min="0"
                  :max="100"
                  :processStyle="slider.processStyle"
                  :lineHeight="slider.lineHeight"
                  :tooltipStyles="{
                    backgroundColor: 'grey',
                    borderColor: 'grey',
                  }"
                >
                </VueSlideBar>
                <VueSlideBar
                  v-model="valueParty"
                  :min="0"
                  :max="100"
                  :processStyle="slider.processStyle"
                  :lineHeight="slider.lineHeight"
                  :tooltipStyles="{
                    backgroundColor: 'grey',
                    borderColor: 'grey',
                  }"
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
import StageHallCard from "../HallPage/Stages/StageHallCard.vue";

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
      inSessionUser: [],
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
  computed: {
    inSession() {
      return this.$store.state.inSession;
    },

    takingValue: function () {
      console.log(this.inSession[0].userObj.profileTest);
      $(document).ready(function () {
        if ((this.isRolee = true)) {
          $("#beBusiness").css("display", "none");
        }
      });
      return this.inSession[0].userObj;
    },
  },
  components: {
    DialogPage,
    Modal,
    Dashboard,
    TopRightListHall,
    VueSlideBar,
    StageHallCard,
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
.personal-attitude {
  font-size: 20px;
  padding-left: 6%;
}
h5 {
  color: #ea5b0c;
  font-style: italic;
}
.personal-attitude-icons {
  display: flex;
  justify-content: start;
  margin-bottom: 70px;
}
.personal-attitude-icons img {
  width: 41px;
  height: 50px;
}
.art {
  background-color: #ec624c;
  width: 65px;
  height: 65px;
  position: relative;
  border-radius: 50%;
  margin-right: 20px;
}
.sea{
  background-color: #2c307f;
  width: 65px;
  height: 65px;
  position: relative;
  border-radius: 50%;
  margin-right: 20px;
}
.gourmet-explorer {
  background-color: #009ee2;
  width: 65px;
  height: 65px;
  position: relative;
  border-radius: 50%;
  margin-right: 20px;
}
.relax {
  background-color: #dc2c6c;
  width: 65px;
  height: 65px;
  position: relative;
  border-radius: 50%;
  margin-right: 20px;
}
.party {
  background-color: purple;
  width: 65px;
  height: 65px;
  position: relative;
  border-radius: 50%;
}
.nature-adventure {
  background-color: #f6a314;
  width: 65px;
  height: 65px;
  position: relative;
  border-radius: 50%;
  margin-right: 20px;
}
.image1 {
  padding-left: 12px;
  padding-top: 7px;
}
.image2 {
  padding-left: 14px;
  padding-top: 7px;
}
.image3 {
  padding-left: 11px;
  padding-top: 7px;
}
.image4 {
  padding-left: 14px;
  padding-top: 7px;
}
.image5 {
  padding-left: 12px;
  padding-top: 7px;
}
.iconscontainer1 {
  font-size: 24px;
  color: black;
  position: absolute;
  top: 70px;
  margin-left: 13px;
}
.iconscontainer2 {
  font-size: 24px;
  color: black;
  position: absolute;
  top: 70px;
  left: 14px;
}

/** Profile  */
.profile {
  display: flex;
  padding-right: 6%;
  margin-top: 35px;
}
.button-area {
  background-color: transparent;
  border-color: transparent;
  box-shadow: transparent;
}
.button-area i {
  margin-top: 10px;
  margin-right: 10px;
  font-size: 35px;
  color: #483D8B;
}
img.avatar1 {
  width: 55px;
  margin-left: 40px;
}

/** Map Filter Search  */
.map {
  margin-right: 10%;
  margin-left: 4%;
}
.map-filter-search {
  display: flex;
  padding-top: 2%;
}

/* Map Tappa Itinerario */
.map-tappa-itinerario {
  display: flex;
}
.tappa-itinerario {
  margin-left: 6%;
}
.tappa-itinerario .text1 {
  margin-top: 5px;
  font-size: 14px;
  position: absolute;
  margin-left: -10px;
}
.tappa-itinerario .text2 {
  margin-top: 5px;
  font-size: 14px;
  position: absolute;
  margin-left: -18px;
}
.tappa-itinerario a {
  position: relative;
  width: 45px;
  height: 45px;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: grey;
  display: flex;
  border-radius: 50%;
  text-decoration: none;
  border: 2px solid grey;
  margin-top: 60px;
}

/**Filter*/
.icons {
  display: inline-flex;
}
.icons img {
  height: 40px;
  width: 80px;
  padding: 5px;
  border-radius: 4px;
}
.arrow {
  background-color: #ec624c;
  width: 50px;
  height: 50px;
  margin-right: 15%;
}
.flag {
  background-color: #009ee2;
  width: 50px;
  height: 50px;
  margin-right: 5%;
}
.location {
  background-color: #ea5b0c;
  width: 50px;
  height: 50px;
  margin-right: 5%;
}
.basket {
  background-color: #f6a314;
  width: 50px;
  height: 50px;
}

/*?*/
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

/* Avatar Sponsor Search*/
/* Avatar */
.avatar {
  display: flex;
  justify-content: space-evenly;
  background-color: rgb(245, 238, 238);
}
.avatar img {
  width: 40px;
  margin-top: 20px;
}
.avatarcontainer1 {
  font-size: 12px;
  color: black;
  top: 70px;
  margin-left: 6px;
}
.follower-following {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 40px;
}
.dot {
  height: 30px;
  width: 30px;
  background-color: #ea5b0c;
  color: white;
  border-radius: 50%;
  margin-top: 12px;
  margin-right: 5px;
  padding: 5px 7px;
  font-size: 14px;
  font-weight: bold;
}
.follower-following label {
  margin-top: 15px;
  margin-right: 15px;
  font-size: 14px;
  font-weight: bold;
  font-style: italic;
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
  font-size: 16px;
  line-height: 8px;
}

/**Filter Business-Card */
.filter {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/*Business card 
.wrap {
  display: flex;
  width: 100%;
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
}*/

/**Search filter */
.filter-attitude {
  background-color: gainsboro;
  border-radius: 45px;
  margin-top: 50px;
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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
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




















 
