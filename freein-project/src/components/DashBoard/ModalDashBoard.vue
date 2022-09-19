<template>
  <div id="ModalDashboard" class="modal-container">
    <div class="modal-container-child">
      <!--  btn-close is on the top left of the page -->
      <button type="button" class="btn-close" @click="close">
        <i class="fas fa-times"></i>
      </button>
      <div class="container">
        <b-container class="internal">
          <b-row>
            <div class="hrtag">
              <div class="piggybank"><i class="fas fa-piggy-bank"></i></div>
              <hr />
            </div>
          </b-row>
          <b-row>
            <div class="profile">
              <div class="user">
                <i class="fas fa-user-circle"></i>
              </div>

              <div class="info">
                <div class="name">
                  <p>{{ takingValue.name }}</p>
                </div>
                <div class="email">
                  <p>{{ takingValue.email }}</p>
                </div>
                <div class="change">
                  <a href="#/editProfile" class="button">Modifica profilo</a>
                </div>
              </div>
            </div>
          </b-row>
          <b-row>
            <h1 class="heading1">il mio guadagno</h1>
          </b-row>
          <b-row class="inner-row border-inner">
            <b-col class="icons br" cols="3">Pubblicazioni</b-col>
            <b-col class="br" cols="1">Salvati</b-col>
            <b-col class="br" cols="2">Mi piace</b-col>
            <b-col class="br" cols="2">Guadagno</b-col>
            <b-col class="br" cols="2">Valore in €</b-col>
            <b-col cols="2">n.</b-col>
          </b-row>
          <b-row class="inner-row border-inner">
            <b-col class="icons br" cols="3"
              ><i class="fas fa-map-marked-alt"></i>Itinerario</b-col
            >
            <b-col class="br" cols="1">6</b-col>
            <b-col class="br" cols="2">6</b-col>
            <b-col class="br" cols="2">6 Passcoin</b-col>
            <b-col class="br" cols="2">0,60</b-col>
            <b-col class="numbers" cols="2">10</b-col>
          </b-row>
          <b-row class="inner-row border-inner">
            <b-col class="icons br" cols="3"
              ><i class="far fa-flag"></i>Tappa</b-col
            >
            <b-col class="br" cols="1">12</b-col>
            <b-col class="br" cols="2">12</b-col>
            <b-col class="br" cols="2">12 Passcoin</b-col>
            <b-col class="br" cols="2">0,10</b-col>
            <b-col class="numbers" cols="2">21</b-col>
          </b-row>
          <b-row class="inner-row">
            <b-col class="icons br" cols="3"
              ><i class="far fa-comment-alt"></i>Recensioni</b-col
            >
            <b-col class="br" cols="1">1</b-col>
            <b-col class="br" cols="2">1</b-col>
            <b-col class="br" cols="2">1 Passcoin</b-col>
            <b-col class="br" cols="2">0,05</b-col>
            <b-col class="numbers" cols="2">3</b-col>
          </b-row>
          <b-row>
            <h1 class="heading2">La mia spesa</h1>
          </b-row>
          <b-row class="inner-row border-inner">
            <b-col class="br" cols="3">Pubblicazioni</b-col>
            <b-col class="br">Vendita</b-col>
            <b-col class="br" cols="3">Valore in €</b-col>
            <b-col cols="2">n.</b-col>
          </b-row>
          <b-row class="inner-row border-inner">
            <b-col class="br" cols="3">Palio budget</b-col>
            <b-col class="br">6 Passcoin</b-col>
            <b-col class="br" cols="3">0,60</b-col>
            <b-col cols="2" class="numbers">10</b-col>
          </b-row>

          <b-row class="inner-row border-inner">
            <b-col class="br" cols="3">Investimento banner</b-col>
            <b-col class="br">12 Passcoin</b-col>
            <b-col class="br" cols="3">0,10</b-col>
            <b-col cols="2" class="numbers">21</b-col>
          </b-row>

          <b-row class="inner-row">
            <b-col class="br" cols="3">Acquisti</b-col>
            <b-col class="br">1 Passcoin</b-col>
            <b-col class="br" cols="3">0,05</b-col>
            <b-col cols="2" class="numbers">3</b-col>
          </b-row>
          <b-row>
            <div class="hrtag2">
              <div>
                <p class="p1">
                  <i class="fas fa-piggy-bank"></i> il tuo saldo &egrave;
                </p>
              </div>
              <div>
                <p class="p2">100<i class="fas fa-piggy-bank"></i></p>
              </div>
            </div>
          </b-row>
          <b-row>
            <hr class="hr2" />
            <div class="piggybank2">
              <p class="p3"><i class="fas fa-piggy-bank"></i>Ricarica subito</p>
            </div>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ModalDashboard",
  methods: {
    close() {
      this.$emit("close", "ciao");
    },
  },
  computed: {
    inSession() {
      return this.$store.state.inSession;
    },

    takingValue: function () {
      //jquery in this function is working because the function is dinamic it's like a continious method (idea of computed)
      $(document).ready(function () {
        if ((this.isRolee = false)) {
          $("#inners").css("display", "none");
        } else {
          $("#texts").css("height", "52 0px");
        }
      });
      //return because without it i won't be able to get a singular data.
      //this return also give me the possibility to write just takingValue.name exc because i get the data of the userObj
      return this.inSession[0].userObj;
    },
  },
};
</script>
<style scoped>
.internal {
  width: 95%;
}
.inner-row {
  width: 85%;
  margin-left: 85px;
}
.border-inner {
  border-bottom: 1px solid;
}
.br {
  border-right: 1px black solid;
}
.modal-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  z-index: 999;
}
.modal-container-child {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 340px;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: white;
  background: transparent;
}
.btn-close > i {
  color: white;
}
.container {
  background-color: rgb(246 239 239);
}
.hrtag {
  display: flex;
  justify-content: end;
  background: #ea5b0c;
  padding-bottom: 20px;
  padding-right: 10px;
}
.piggybank {
  font-size: 60px;
  color: white;
}

hr {
  width: 90%;
  color: white;
  margin-top: 78px;
}
.profile {
  display: flex;
  margin-left: 10%;
  margin-top: 50px;
}
.user {
  font-size: 45px;
  color: grey;
}
.info {
  margin-left: 30px;
  margin-top: 20px;
}
.profile p {
  line-height: 8px;
}
.name p {
  font-size: 20px;
  font-weight: bold;
  color: gray;
}
.email p {
  font-size: 16px;
  font-style: italic;
  color: gray;
}
.button {
  background-color: #ea5b0c;
  border: none;
  color: white;
  padding: 2px 4px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin-top: 10px;
  margin-left: 40px;
  cursor: pointer;
}
.heading1 {
  margin-bottom: 20px;
}
.heading2 {
  margin-top: 80px;
  margin-bottom: 20px;
}

h1 {
  font-size: 24px;
  color: white;
  background: #ea5b0c;
  width: 90%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 60px;
  margin-top: 30px;
}
.numbers {
  font-size: 30px;
  color: #ea5b0c !important;
}

.col,
.col-1,
.col-2,
.col-3 {
  font-style: italic;
  font-weight: bold;
  color: gray;
  text-align: left;
  padding: 15px;
  padding-left: 10px;
}

.far,
.fas {
  padding-right: 15px;
}

.hrtag2 {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: 50px;
}
.hrtag2 i {
  font-size: 40px;
  color: #ea5b0c;
  display: inline-block;
  padding-left: 25px;
  padding-right: 25px;
}

.p1 {
  font-size: 20px;
  color: gray;
}
.p2 {
  font-size: 30px;
  font-style: italic;
  font-weight: bold;
  color: #ea5b0c;
}
.hr2 {
  width: 90%;
  color: rgb(98, 96, 96);
  margin-top: 0px;
}
.piggybank2 {
  background: #ea5b0c;
  width: 90%;
  margin-bottom: 70px;
}
.piggybank2 i {
  display: inline-block;
  font-size: 38px;
  padding: 9px 27px;
}
.p3 {
  font-size: 20px;
  color: white;
}
</style>