<template>
  <div>
    <div class="heading">
      <p><img src="@/assets/location2.svg" alt="" />Itinerario</p>
    </div>

    <div class="container">
      <div class="cards">
        <div class="arte">
          <div class="image1">
            <img src="@/assets/art.svg" alt="" />
          </div>
          <div class="cardcontainer1">
            <p>{{ $store.state.itinerariestore[0].arte }}%</p>
          </div>
        </div>
        <div class="relax">
          <div class="image3">
            <img src="@/assets/donna2.svg" alt="" />
          </div>
          <div class="cardcontainer2">
            <p>{{ $store.state.itinerariestore[0].relax }}%</p>
          </div>
        </div>
        <div class="mare">
          <div class="image1">
            <img src="@/assets/Mare.png" alt="" />
          </div>
          <div class="cardcontainer2">
            <p>{{ $store.state.itinerariestore[0].mare }}%</p>
          </div>
        </div>
        <div class="natura">
          <div class="image5">
            <img src="@/assets/natura.svg" alt="" />
          </div>
          <div class="cardcontainer1">
            <p>{{ $store.state.itinerariestore[0].natura }}%</p>
          </div>
        </div>
        <div class="party">
          <div class="image4">
            <img src="@/assets/party.svg" alt="" />
          </div>
          <div class="cardcontainer2">
            <p>{{ $store.state.itinerariestore[0].party }}%</p>
          </div>
        </div>
        <div class="gourmet">
          <div class="image2">
            <img src="@/assets/yellowgourmet.png" alt="" />
          </div>
          <div class="cardcontainer1">
            <p>{{ $store.state.itinerariestore[0].gourmet }}%</p>
          </div>
        </div>
      </div>

      <div class="text">
        <div class="h1icon">
          <div class="h1i">
            <h1>{{ $store.state.itinerariestore[0].name }}</h1>
          </div>

          <div class="c-share">
            <input class="c-share__input" type="checkbox" id="checkbox" />
            <label class="c-share__toggler" for="checkbox">
              <span class="c-share__icon"></span>
            </label>
            <ul class="c-share_options" data-title="Share">
              <li><i class="fab fa-facebook"></i> Facebook</li>
              <li><i class="fab fa-twitter"></i> Twitter</li>
              <li><i class="fab fa-instagram"></i> Instagram</li>
              <li><i class="fab fa-whatsapp"></i> Whatsapp</li>
              <li><i class="fab fa-telegram-plane"></i> Telegram</li>
            </ul>
          </div>
        </div>

        <p>
          {{ $store.state.itinerariestore[0].description }}
        </p>
      </div>

      <div class="cards1">
        <slider />
        <!-- <div>
          <div class="cardimage">
            <img src="@/assets/italy.jpg" alt="">
          </div>
          <div class="container1">
            <a href="#/itinerarycreation"><i class="fas fa-plus-circle"></i></a>
            <p>Crea itinerario</p>
          </div>
        </div>
      
        <div>
          <div class="cardimage">
            <img src="@/assets/italy.jpg" alt="">
          </div>
          <div class="container2">
              <a href="#"><i class="fas fa-tag"></i></a>
              <a href="#"><i class="fas fa-star"></i></a>
              <a href="#"><i class="far fa-bookmark"></i></a>
          </div>
        </div>-->
      </div>
      <hr class="hr1" />

      <div class="search-container2">
        <form action="">
          <input type="text" placeholder="Cerca itinerario" />
        </form>
      </div>

      <p class="title">Itinerario</p>
      <div
        class="section"
        v-for="(stagesInItinerary, id) in this.itinerariestore[0].stages"
        :key="id"
      >
        <div class="icontext">
          <p>
            <img class="flag2" src="@/assets/flag2.svg" alt="" />{{
              stagesInItinerary.stage.stageTitle
            }}
          </p>
        </div>
        <div class="cards">
          <div class="arte1">
            <div class="image01">
              <img class="imgsmall" src="@/assets/art.svg" alt="" />
            </div>
            <div class="cardcontainer01">
              <p>{{ stagesInItinerary.stage.profileEval.arte }}%</p>
            </div>
          </div>
          <div class="relax1">
            <div class="image03">
              <img class="imgsmall" src="@/assets/donna2.svg" alt="" />
            </div>
            <div class="cardcontainer02">
              <p>{{ stagesInItinerary.stage.profileEval.cibo }}%</p>
            </div>
          </div>
          <div class="mare1">
            <div class="image01">
              <img class="imgsmall" src="@/assets/Mare.png" alt="" />
            </div>
            <div class="cardcontainer02">
              <p>{{ stagesInItinerary.stage.profileEval.mare }}%</p>
            </div>
          </div>
          <div class="natura1">
            <div class="image05">
              <img class="imgsmall" src="@/assets/natura.svg" alt="" />
            </div>
            <div class="cardcontainer01">
              <p>{{ stagesInItinerary.stage.profileEval.nature }}%</p>
            </div>
          </div>
          <div class="party1">
            <div class="image04">
              <img class="imgsmall" src="@/assets/party.svg" alt="" />
            </div>
            <div class="cardcontainer02">
              <p>{{ stagesInItinerary.stage.profileEval.party }}%</p>
            </div>
          </div>
          <div class="gourmet1">
            <div class="image02">
              <img class="imgsmall" src="@/assets/yellowgourmet.png" alt="" />
            </div>
            <div class="cardcontainer01">
              <p>{{ stagesInItinerary.stage.profileEval.relax }}%</p>
            </div>
          </div>
        </div>
      </div>
      <hr class="hr2" />
      <!--        <div class="section">
        <div class="icontext">
          <p><i class="far fa-flag"></i>Matinata</p>
        </div>
        <div class="cards">
          <div class="arte1">
            <div class="image01">
              <img class="imgsmall" src="@/assets/art.svg" alt="" />
            </div>
            <div class="cardcontainer01">
              <p>50%</p>
            </div>
          </div>
          <div class="relax1">
            <div class="image03">
              <img class="imgsmall" src="@/assets/relax.png" alt="" />
            </div>
            <div class="cardcontainer02">
              <p>70%</p>
            </div>
          </div>
          <div class="mare1">
            <div class="image01">
              <img class="imgsmall" src="@/assets/Mare.png" alt="" />
            </div>
            <div class="cardcontainer02">
              <p>20%</p>
            </div>
          </div>
          <div class="natura1">
            <div class="image05">
              <img class="imgsmall" src="@/assets/natura.svg" alt="" />
            </div>
            <div class="cardcontainer01">
              <p>30%</p>
            </div>
          </div>
          <div class="party1">
            <div class="image04">
              <img class="imgsmall" src="@/assets/party.svg" alt="" />
            </div>
            <div class="cardcontainer02">
              <p>30%</p>
            </div>
          </div>
          <div class="gourmet1">
            <div class="image02">
              <img class="imgsmall" src="@/assets/yellowgourmet.png" alt="" />
            </div>
            <div class="cardcontainer01">
              <p>50%</p>
            </div>
          </div>
        </div>
      </div> 
      <hr class="hr3" />
      <div class="section">
        <div class="icontext">
          <p><i class="far fa-flag"></i>Vieste</p>
        </div>
        <div class="cards">
          <div class="arte1">
            <div class="image01">
              <img class="imgsmall" src="@/assets/art.svg" alt="" />
            </div>
            <div class="cardcontainer01">
              <p>50%</p>
            </div>
          </div>
          <div class="relax1">
            <div class="image03">
              <img class="imgsmall" src="@/assets/relax.png" alt="" />
            </div>
            <div class="cardcontainer02">
              <p>70%</p>
            </div>
          </div>
          <div class="mare1">
            <div class="image01">
              <img class="imgsmall" src="@/assets/Mare.png" alt="" />
            </div>
            <div class="cardcontainer02">
              <p>20%</p>
            </div>
          </div>
          <div class="natura1">
            <div class="image05">
              <img class="imgsmall" src="@/assets/natura.svg" alt="" />
            </div>
            <div class="cardcontainer01">
              <p>30%</p>
            </div>
          </div>
          <div class="party1">
            <div class="image04">
              <img class="imgsmall" src="@/assets/party.svg" alt="" />
            </div>
            <div class="cardcontainer02">
              <p>30%</p>
            </div>
          </div>
          <div class="gourmet1">
            <div class="image02">
              <img class="imgsmall" src="@/assets/yellowgourmet.png" alt="" />
            </div>
            <div class="cardcontainer01">
              <p>50%</p>
            </div>
          </div>
        </div>
      </div>

      <hr class="hr4" /> -->

      <p class="title">Ti potrebbe anche interessare</p>

      <div class="wrap">
        <stageHallCard />

        <!-- <div class="cards2">
          <div class="cards2i">
            <div class="mapicon"><i class="fas fa-map-marked-alt"></i></div>
            <div class="usericon"><i class="fas fa-user-circle"></i></div>
          </div>
          <img src="@/assets/italy.jpg" alt="" />
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
          <img src="@/assets/italy.jpg" alt="" />
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
        </div>-->
      </div>

      <div class="box1">
        <div>
          <div>
            <img src="@/assets/user1.svg" alt="" />
            <!--<i class="fas fa-user-plus"></i>-->
          </div>
          <div class="boxcontainer1">
            <p>Alex</p>
          </div>
        </div>

        <div>
          <div>
            <img src="@/assets/user1.svg" alt="" />
          </div>
          <div class="boxcontainer1">
            <p>Alex</p>
          </div>
        </div>

        <div>
          <div>
            <img src="@/assets/user1.svg" alt="" />
          </div>
          <div class="boxcontainer1">
            <p>Alex</p>
          </div>
        </div>

        <div>
          <div>
            <img src="@/assets/user1.svg" alt="" />
          </div>
          <div class="boxcontainer1">
            <p>Alex</p>
          </div>
        </div>

        <div>
          <div>
            <img src="@/assets/user1.svg" alt="" />
          </div>
          <div class="boxcontainer1">
            <p>Alex</p>
          </div>
        </div>
      </div>

      <div class="box2">
        <p class="title">Sponsorizzato</p>
      </div>

      <div class="box3">
        <img src="@/assets/pasta.jpg" alt="" />
        <div class="boxcontainer3">
          <h1>Ostaria del moro</h1>
          <p>ostariadelmoro.com</p>
        </div>
      </div>

      <div class="box4">
        <img src="@/assets/olive.jpg" alt="" />
        <div class="boxcontainer4">
          <h1>Oleificio di Puglia</h1>
          <p>oleificiodipuglia.com</p>
        </div>
      </div>

      <div class="box5">
        <img src="@/assets/focaccia.jpg" alt="" />
        <div class="boxcontainer5">
          <h1>La Focaccia</h1>
          <p>lafocaccia.com</p>
        </div>
      </div>

      <div class="search-container">
        <form action="">
          <input type="text" placeholder="Cerca itinerario" />
        </form>
      </div>

      <!--<div class="search-container">
        <form action="">
          <button type="submit"><i class="fas fa-search"></i></button>
          <input type="text" placeholder="Cerca itinerario..." name="search" />
        </form>
      </div>-->

      <div class="box6">
        <p class="title1">Sponsorizzato</p>
      </div>

      <div class="box7">
        <img src="@/assets/pasta.jpg" alt="" />
        <div class="boxcontainer7">
          <h1>Ostaria del moro</h1>
          <p>ostariadelmoro.com</p>
        </div>
      </div>

      <div class="box8">
        <img src="@/assets/olive.jpg" alt="" />
        <div class="boxcontainer8">
          <h1>Oleificio di Puglia</h1>
          <p>oleificiodipuglia.com</p>
        </div>
      </div>

      <div class="box9">
        <img src="@/assets/focaccia.jpg" alt="" />
        <div class="boxcontainer9">
          <h1>La Focaccia</h1>
          <p>lafocaccia.com</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import slider from "@/components/Slider.vue";
import stageHallCard from "../Stages/StageHallCard.vue";
export default {
  name: "Summary-Itinerary",
  components: { slider, stageHallCard },
  computed: {
    itinerariestore() {
      return this.$store.state.itinerariestore;
    },
  },
};
</script>

<style scoped>
.container {
  margin-left: 30px;
  margin-right: 30px;
}
.heading {
  background: #ea5b0c;
  width: 100%;
  margin-bottom: 60px;
}
/*.heading i {
  display: inline-block;
  font-size: 38px;
  padding: 25px 27px;
}*/
.heading img {
  margin: 25px 27px;
}
.heading p {
  font-size: 24px;
  color: white;
}
.cards {
  display: flex;
  justify-content: start;
  width: 55%;
  height: auto;
  margin-bottom: 70px;
}

img {
  width: 41px;
  height: 50px;
}
.arte {
  background-color: #ec624c;
  width: 65px;
  height: 65px;
  position: relative;
  border-radius: 50%;
  margin-right: 20px;
}
.mare {
  background-color: #2c307f;
  width: 65px;
  height: 65px;
  position: relative;
  border-radius: 50%;
  margin-right: 20px;
}
.gourmet {
  background-color: #009ee2;
  width: 65px;
  height: 65px;
  position: relative;
  border-radius: 50%;
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
  margin-right: 20px;
}
.natura {
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
.cardcontainer1 {
  font-size: 24px;
  color: black;
  position: absolute;
  top: 70px;
  margin-left: 13px;
}
.cardcontainer2 {
  font-size: 24px;
  color: black;
  position: absolute;
  top: 70px;
  left: 14px;
}
.text {
  width: 55%;
  text-align: justify;
}
.h1icon {
  display: flex;
}
.text h1 {
  font-size: 28px;
  font-weight: bold;
}
.h1i {
  padding-right: 20px;
}
.cards1 {
  width: 60%;
}
/*.cardimage img {
  width: 100%;
  height: auto;
  padding-right: 10px;
  margin-bottom: 35px;
}

.container1 .container2 i {
  font-size: 25px;
}
.container2 i {
  float: right;
  padding-left: 15px;
}
.fa-plus-circle:before {
  color: black;
}
.fa-bookmark:before {
  color: black;
}
.fa-star:before {
  color: black;
}
.fa-tag:before {
  color: black;
}
.container1 p {
  font-size: 14px;
  font-style: italic;
}*/

hr {
  width: 60%;
}
.hr1 {
  margin-top: 40px;
}
.search-container2 {
  display: none;
}
.title {
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
}
.section {
  width: 55%;
  display: flex;
  justify-content: space-between;
  margin-bottom: -3%;
}
.icontext img {
  display: inline-block;
  margin: 0px 22px;
  padding: 5px;
}
.icontext p {
  font-size: 18px;
  font-weight: bold;
  color: black;
}
.arte1 {
  background-color: #ec624c;
  width: 42px;
  height: 42px;
  position: relative;
  border-radius: 50%;
  margin-right: 20px;
  margin-left: 40px;
}
.mare1 {
  background-color: #2c307f;
  width: 42px;
  height: 42px;
  position: relative;
  border-radius: 50%;
  margin-right: 20px;
}
.gourmet1 {
  background-color: #009ee2;
  width: 42px;
  height: 42px;
  position: relative;
  border-radius: 50%;
}
.relax1 {
  background-color: #dc2c6c;
  width: 42px;
  height: 42px;
  position: relative;
  border-radius: 50%;
  margin-right: 20px;
}
.party1 {
  background-color: purple;
  width: 42px;
  height: 42px;
  position: relative;
  border-radius: 50%;
  margin-right: 20px;
}
.natura1 {
  background-color: #f6a314;
  width: 42px;
  height: 42px;
  position: relative;
  border-radius: 50%;
  margin-right: 20px;
}
.imgsmall {
  width: 23px;
  height: 32px;
}
.image01 {
  padding-left: 10px;
  padding-top: 6px;
}
.image02 {
  padding-left: 11px;
  padding-top: 4px;
}
.image03 {
  padding-left: 9px;
  padding-top: 7px;
}
.image04 {
  padding-left: 10px;
  padding-top: 7px;
}
.image05 {
  padding-left: 10px;
  padding-top: 6px;
}
.cardcontainer01 {
  font-size: 15px;
  color: black;
  position: absolute;
  top: 42px;
  margin-left: 8px;
}
.cardcontainer02 {
  font-size: 15px;
  color: black;
  position: absolute;
  top: 42px;
  left: 8px;
}
.hr4 {
  margin-top: 60px;
}
.wrap {
  width: 65%;
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
  /*color: white;
  font-size: 30px;*/
  position: absolute;
  z-index: 1;
}

.mapicon {
  background-color: #ea5b0c;
  width: 40px;
  height: 45px;
}

.usericon {
  padding-left: 145px;
  color: white;
}

.wrap img {
  width: 100%;
  height: auto;
  border-radius: 0% 8% 0% 0%;
  position: relative;
}
.cards2body {
  width: 100%;
  background: #ea5b0c;
  border-radius: 0% 0% 8% 8%;
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
  padding-left: 5px;
  color: white;
}
.box1 {
  display: flex;
  justify-content: space-evenly;
  width: 25%;
  position: absolute;
  left: 64%;
  top: 50%;
  background-color: rgb(245, 238, 238);
}

/*.box1 i {
  font-size: 30px;
  padding-top: 20px;
}*/

.box1 img {
  margin-top: 20px;
}

.boxcontainer1 {
  font-size: 12px;
  color: black;
  top: 70px;
  margin-left: 3px;
}

.box2 {
  width: 25%;
  position: absolute;
  left: 64%;
  top: 70%;
}

.box3 {
  width: 25%;
  position: absolute;
  left: 65%;
  top: 75%;
  line-height: 4px;
}
.box3 img {
  width: 35%;
  height: auto;
  float: left;
  margin-right: 15px;
}

.box3 h1 {
  font-size: 16px;
  font-weight: bold;
  padding-top: 27px;
}

.box3 p {
  font-size: 12px;
}

.box4 {
  width: 25%;
  position: absolute;
  left: 65%;
  top: 90%;
  line-height: 4px;
}
.box4 img {
  width: 35%;
  height: auto;
  float: left;
  margin-right: 15px;
}

.box4 h1 {
  font-size: 16px;
  font-weight: bold;
  padding-top: 27px;
}

.box4 p {
  font-size: 12px;
}

.box5 {
  width: 25%;
  position: absolute;
  left: 65%;
  top: 105%;
  line-height: 4px;
}
.box5 img {
  width: 35%;
  height: auto;
  float: left;
  margin-right: 15px;
}

.box5 h1 {
  font-size: 16px;
  font-weight: bold;
  padding-top: 27px;
}

.box5 p {
  font-size: 12px;
}

.search-container {
  width: 25%;
  position: absolute;
  left: 66%;
  top: 131%;
}

.search-container input[type="text"] {
  padding: 6px 45px;
  font-size: 17px;
  border: 1px solid rgb(238, 238, 238);
  width: 300px;
  background: white url("@/assets/search.png") no-repeat 10px center;
  border-radius: 12px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  cursor: pointer;
}

::placeholder {
  font-size: 14px;
  font-style: italic;
}

/*.search-container {
  width: 25%;
  position: absolute;
  left: 66%;
  top: 131%;
}

.search-container input[type="text"] {
  padding: 6px;
  font-size: 17px;
  border: 1px solid rgb(238, 238, 238);
  width: 250px;
}
.search-container button {
  padding: 7px 10px;
  background: #ea5b0c;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

::placeholder {
  font-size: 14px;
  font-style: italic;
}*/

.box6 {
  width: 25%;
  position: absolute;
  left: 64%;
  top: 150%;
  line-height: 4px;
}

.title1 {
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
}
.box7 {
  width: 25%;
  position: absolute;
  left: 65%;
  top: 154%;
  line-height: 4px;
}
.box7 img {
  width: 35%;
  height: auto;
  float: left;
  margin-right: 15px;
}

.box7 h1 {
  font-size: 16px;
  font-weight: bold;
  padding-top: 27px;
}

.box7 p {
  font-size: 12px;
}

.box8 {
  width: 25%;
  position: absolute;
  left: 65%;
  top: 171%;
  line-height: 4px;
}
.box8 img {
  width: 35%;
  height: auto;
  float: left;
  margin-right: 15px;
}

.box8 h1 {
  font-size: 16px;
  font-weight: bold;
  padding-top: 27px;
}

.box8 p {
  font-size: 12px;
}

.box9 {
  width: 25%;
  position: absolute;
  left: 65%;
  top: 188%;
  line-height: 4px;
}
.box9 img {
  width: 35%;
  height: auto;
  float: left;
  margin-right: 15px;
}

.box9 h1 {
  font-size: 16px;
  font-weight: bold;
  padding-top: 27px;
}

.box9 p {
  font-size: 12px;
}

.c-share {
  position: relative;
  height: 40px;
  width: 40px;
  z-index: 999;
}
.c-share__input {
  display: none;
}
.c-share__input:checked ~ .c-share__toggler .c-share__icon {
  transition: 0s;
  width: 0;
  height: 0;
}

.c-share__input:checked ~ .c-share__toggler .c-share__icon::before {
  transform: rotate(-45deg);
}
.c-share__input:checked ~ .c-share__toggler .c-share__icon::after {
  transform: rotate(45deg);
}
.c-share__input:checked ~ .c-share_options {
  width: 160px;
  height: 240px;
  border-radius: 7px;
}
.c-share__input:checked ~ .c-share_options::before,
.c-share__input:checked ~ .c-share_options li {
  transition: 0.3s 0.15s;
  opacity: 1;
  transform: translateY(0);
}
.c-share__toggler,
.c-share_options {
  position: absolute;
  right: 0;
  width: inherit;
  height: inherit;
  border-radius: 50%;
  background-color: rgb(245, 238, 238);
}
.c-share_options {
  background-color: white;
  border: 2px solid #ea5b0c;
}
.c-share__toggler {
  cursor: pointer;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.c-share__icon {
  position: relative;
  left: -5px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  color: black;
  background-color: currentColor;
  box-shadow: 10px -10px, 10px 10px;
  transition: 0.1s 0.05s;
}
.c-share__icon::before,
.c-share__icon::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 2px;
  background-color: currentColor;
  transition: 0.1s;
}
.c-share__icon::before {
  top: 3px;
  left: 3px;
  transform-origin: bottom left;
  transform: rotate(45deg);
}
.c-share__icon::after {
  top: -2px;
  left: 0.5px;
  transform-origin: center;
  transform: rotate(-45deg);
}

.c-share_options {
  list-style: none;
  margin: 0;
  padding: 14px 17px;
  box-sizing: border-box;
  overflow: hidden;
  transition: 0.2s;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
}
.c-share_options::before {
  content: attr(data-title);
  display: block;
  margin-bottom: 20px;
  font-weight: 700;
}
.c-share_options li {
  font-size: 14px;
  cursor: pointer;
}
.c-share_options li:not(:last-child) {
  margin-bottom: 12px;
}
.c-share_options::before,
.c-share_options li {
  opacity: 0;
  transform: translateY(10px);
  transition: 0s;
}
.flag2 {
  background-color: #ea5b0c;
  width: 75px;
  height: 45px;
  border-radius: 12px;
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

@media (max-width: 575.98px) {
  .container {
    margin-left: 0px;
    margin-right: 0px;
  }
  .heading {
    margin-bottom: 30px;
  }
  .heading i {
    font-size: 25px;
    padding: 20px 16px;
  }
  .heading p {
    font-size: 25px;
  }
  .cards {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-bottom: 70px;
  }
  .arte {
    margin-right: 10px;
    margin-bottom: 50px;
  }
  .mare {
    margin-right: 10px;
    margin-bottom: 50px;
  }
  .gourmet {
    width: 65px;
    height: 65px;
  }
  .relax {
    margin-right: 10px;
    margin-bottom: 50px;
  }
  .party {
    margin-right: 10px;
  }
  .natura {
    margin-right: 10px;
  }
  .cardcontainer1 {
    font-size: 17px;
    top: 65px;
    margin-left: 19px;
  }
  .cardcontainer2 {
    font-size: 17px;
    top: 65px;
    left: 19px;
  }
  .text {
    width: 100%;
    text-align: left;
  }
  .h1icon {
    display: flex;
  }
  .text h1 {
    font-size: 20px;
    font-weight: bold;
  }

  .h1i {
    padding-right: 20px;
  }
  .cards1 {
    width: 100%;
  }

  hr {
    width: 100%;
  }
  .hr1 {
    margin-top: 40px;
  }

  .search-container2 {
    display: block;
    margin-top: 30px;
    margin-bottom: 40px;
  }

  .search-container2 input[type="text"] {
    padding: 6px 45px;
    font-size: 17px;
    border: 1px solid rgb(238, 238, 238);
    width: 270px;
    background: white url("@/assets/search.png") no-repeat 10px center;
    border-radius: 12px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    cursor: pointer;
  }

  ::placeholder {
    font-size: 14px;
    font-style: italic;
  }
  .title {
    font-size: 17px;
  }
  .section {
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    margin-bottom: -11%;
  }
  .icontext img {
    margin: 0px 22px;
  }

  .icontext p {
    font-size: 17px;
  }
  .arte1 {
    /*margin-left: 40px;*/
    margin-left: 0px;
    margin-right: 3px;
    margin-bottom: 5px;
  }
  .mare1 {
    margin-right: 3px;
    margin-bottom: 5px;
  }
  .gourmet1 {
    margin-right: 3px;
    margin-bottom: 5px;
  }
  .relax1 {
    margin-right: 3px;
    margin-bottom: 5px;
  }
  .party1 {
    margin-right: 3px;
    margin-bottom: 5px;
  }
  .natura1 {
    margin-right: 3px;
    margin-bottom: 5px;
  }
  .cardcontainer01 {
    font-size: 13px;
    top: 40px;
    margin-left: 10px;
  }
  .cardcontainer02 {
    font-size: 13px;
    top: 40px;
    left: 11px;
  }
  .hr4 {
    margin-top: 2px;
  }
  .wrap {
    width: 100%;
    flex-direction: column;
  }
  .cards2 {
    margin-left: 0px;
    margin-bottom: 15px;
  }
  .cards2i {
    display: flex;
    font-size: 25px;
  }
  .mapicon {
    width: 35px;
    height: 40px;
  }

  .usericon {
    padding-left: 205px;
    padding-top: 6px;
  }

  .wrap img {
    border-radius: 0% 16% 0% 0%;
  }
  .cards2body {
    border-radius: 0% 0% 20% 20%;
  }
  .cards2body p {
    font-size: 17px;
  }
  .button {
    font-size: 17px;
  }
  .box1 {
    width: 100%;
    position: static;
    /*float: right;*/
    margin-right: 10px;
    margin-bottom: 50px;
    left: 0%;
    top: 0%;
  }

  /*.box1 i {
    font-size: 25px;
    padding-top: 10px;
  }*/
  .box1 img {
    margin-top: 10px;
  }

  .boxcontainer1 {
    font-size: 11px;
    margin-left: 1px;
  }

  .box2 {
    width: 100%;
    position: static;
    left: 0%;
    top: 0%;
    margin-top: 16px;
  }

  .box3 {
    width: 100%;
    position: static;
    left: 0%;
    top: 0%;
    line-height: 4px;
  }
  .box3 img {
    width: 40%;
    margin-right: 8px;
  }

  .box3 h1 {
    font-size: 16px;
    padding-top: 23px;
  }

  .box3 p {
    font-size: 13px;
  }

  .box4 {
    width: 100%;
    position: static;
    left: 0%;
    margin-top: 20%;
    line-height: 4px;
  }
  .box4 img {
    width: 40%;
    margin-right: 8px;
  }

  .box4 h1 {
    font-size: 16px;
    padding-top: 23px;
  }

  .box4 p {
    font-size: 13px;
  }

  .box5 {
    width: 100%;
    position: static;
    left: 0%;
    margin-top: 20%;
    line-height: 4px;
  }
  .box5 img {
    width: 40%;
    margin-right: 8px;
  }

  .box5 h1 {
    font-size: 16px;
    padding-top: 23px;
  }

  .box5 p {
    font-size: 13px;
  }

  .search-container {
    display: none;
  }

  /*.search-container {
  width: 25%;
  position: absolute;
  left: 66%;
  top: 131%;
}

.search-container input[type="text"] {
  padding: 6px;
  font-size: 17px;
  border: 1px solid rgb(238, 238, 238);
  width: 250px;
}
.search-container button {
  padding: 7px 10px;
  background: #ea5b0c;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

::placeholder {
  font-size: 14px;
  font-style: italic;
}*/

  .box6 {
    width: 100%;
    position: static;
    left: 0%;
    top: 0%;
    line-height: 4px;
  }
  .title1 {
    display: none;
  }
  .box7 {
    width: 100%;
    position: static;
    left: 0%;
    margin-top: 20%;
    line-height: 4px;
  }
  .box7 img {
    width: 40%;
    margin-right: 8px;
  }

  .box7 h1 {
    font-size: 16px;
    padding-top: 23px;
  }

  .box7 p {
    font-size: 13px;
  }

  .box8 {
    width: 100%;
    position: static;
    left: 0%;
    margin-top: 20%;
    line-height: 4px;
  }
  .box8 img {
    width: 40%;
    margin-right: 8px;
  }

  .box8 h1 {
    font-size: 16px;
    padding-top: 23px;
  }

  .box8 p {
    font-size: 13px;
  }

  .box9 {
    width: 100%;
    position: static;
    left: 0%;
    margin-top: 20%;
    margin-bottom: 16%;
    line-height: 4px;
  }
  .box9 img {
    width: 40%;
    margin-right: 8px;
  }

  .box9 h1 {
    font-size: 16px;
    padding-top: 23px;
  }

  .box9 p {
    font-size: 13px;
  }

  .c-share {
    position: relative;
    height: 40px;
    width: 40px;
  }
  .c-share__input {
    display: none;
  }
  .c-share__input:checked ~ .c-share__toggler .c-share__icon {
    transition: 0s;
    width: 0;
    height: 0;
  }

  .c-share__input:checked ~ .c-share__toggler .c-share__icon::before {
    transform: rotate(-45deg);
  }
  .c-share__input:checked ~ .c-share__toggler .c-share__icon::after {
    transform: rotate(45deg);
  }
  .c-share__input:checked ~ .c-share_options {
    width: 160px;
    height: 240px;
    border-radius: 7px;
  }
  .c-share__input:checked ~ .c-share_options::before,
  .c-share__input:checked ~ .c-share_options li {
    transition: 0.3s 0.15s;
    opacity: 1;
    transform: translateY(0);
  }
  .c-share__toggler,
  .c-share_options {
    position: absolute;
    right: 0;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    background-color: rgb(245, 238, 238);
  }
  .c-share_options {
    background-color: white;
    border: 2px solid #ea5b0c;
  }
  .c-share__toggler {
    cursor: pointer;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .c-share__icon {
    position: relative;
    left: -5px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    color: black;
    background-color: currentColor;
    box-shadow: 10px -10px, 10px 10px;
    transition: 0.1s 0.05s;
  }
  .c-share__icon::before,
  .c-share__icon::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 2px;
    background-color: currentColor;
    transition: 0.1s;
  }
  .c-share__icon::before {
    top: 3px;
    left: 3px;
    transform-origin: bottom left;
    transform: rotate(45deg);
  }
  .c-share__icon::after {
    top: -2px;
    left: 0.5px;
    transform-origin: center;
    transform: rotate(-45deg);
  }

  .c-share_options {
    list-style: none;
    margin: 0;
    padding: 14px 17px;
    box-sizing: border-box;
    overflow: hidden;
    transition: 0.2s;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  }
  .c-share_options::before {
    content: attr(data-title);
    display: block;
    margin-bottom: 20px;
    font-weight: 700;
  }
  .c-share_options li {
    font-size: 14px;
    cursor: pointer;
  }
  .c-share_options li:not(:last-child) {
    margin-bottom: 12px;
  }
  .c-share_options::before,
  .c-share_options li {
    opacity: 0;
    transform: translateY(10px);
    transition: 0s;
  }
}
</style>
