<template>
  <div class="container-business-user">
    <div class="card">
      <div class="card-header">Configura il tuo Business</div>
      <div class="card-sub-title">
        <h3>Fornisci i dettagli della tua Azienda</h3>
      </div>
      <div class="business-list-2">
        <img src="@/assets/business-icon.png" />
        <div class="business-information">
          <input
            v-show="takingValue.placeHolderEmpty == true"
            :placeholder="takingValue.agency.ragioneSociale"
            v-model="ragioneSociale"
          />
          <input
            v-show="takingValue.placeHolderEmpty == false"
            placeholder="Ragione sociale"
            v-model="ragioneSociale"
          />

          <div class="email">
            <input
              v-show="takingValue.placeHolderEmpty == true"
              :placeholder="takingValue.agency.indirizzoMailAziendale"
              v-model="emailAzienda"
            />
            <input
              v-show="takingValue.placeHolderEmpty == false"
              placeholder="Indirizzo email aziendale"
              v-model="emailAzienda"
            />
          </div>
          <h3>Fornisci un nome all'espositore</h3>
          <div class="espositore">
            <input
              v-show="takingValue.placeHolderEmpty == true"
              :placeholder="takingValue.agency.espositore"
              v-model="espositore"
            />
            <input
              v-show="takingValue.placeHolderEmpty != true"
              placeholder="Espositore"
              v-model="espositore"
            />
          </div>
        </div>
      </div>
      <div class="button-dots">
        <div class="dots">
          <span class="dot-1"></span>
          <span class="dot-2"></span>
          <span class="dot-3"></span>
          <span class="dot-4"></span>
        </div>
        <b-button
          class="business-1-button"
          @click="agencyDetails(ragioneSociale, emailAzienda, espositore)"
          >Avanti >>
        </b-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ragioneSociale: "",
      emailAzienda: "",
      espositore: "",
    };
  },

  methods: {
    agencyDetails(ragioneSociale, emailAzienda, espositore) {
      console.log(ragioneSociale);
      console.log(emailAzienda);
      console.log(espositore);
      this.inSession[0].userObj.agency.ragioneSociale = ragioneSociale;
      this.inSession[0].userObj.agency.indirizzoMailAziendale = emailAzienda;
      this.inSession[0].userObj.agency.espositore = espositore;
      this.inSession[0].userObj.placeHolderEmpty = true;
      console.log(this.inSession);
      this.$router.push({
        path: "/businesscard4",
      });

      /* 
      state.inSession[0].userObj.agency.ragioneSociale = ragioneSociale;
      state.inSession[0].userObj.agency.indirizzoMailAziendale = emailAzienda;
      state.inSession[0].userObj.agency.espositore = espositore;
      */
    },
  },

  computed: {
    inSession() {
      return this.$store.state.inSession;
    },
    takingValue: function () {
      console.log(this.inSession[0].userObj.agency);
      return this.inSession[0].userObj;
    },
  },
};
</script>
<style scoped>
.container-business-user {
  display: flex;
  justify-content: center;
}
.card {
  width: 841px;
  margin-top: 40px;
  margin-bottom: 100px;
  height: 660px;
  border-radius: 40px;
  box-shadow: 0px 4px 4px rgbaa(0, 0, 0, 0.25);
}

.card-header {
  padding: 3%;
  background-color: #ea5b0c;
  color: white;
  font-size: 30px;
  text-align: center;
}
.card-header:first-child {
  border-radius: calc(2.25rem) calc(2.25rem) 0 0;
}
.card-sub-title {
  padding-top: 2%;
  text-align: center;
}

h3 {
  font-weight: bold;
}
.business-1-button {
  background-color: #ea5b0c !important;
  border-color: transparent;
  font-size: 18px;
  line-height: 28px;
}
.business-1-button:hover {
  background-color: #ea5b0c;
  border-color: transparent;
  outline-color: none;
}
.business-1-button:active {
  background-color: #ea5b0c;
  border-color: transparent;
}
.business-1-button:focus {
  outline-color: transparent;
  background-color: #ea5b0c;
  outline-style: none;
  border-color: none;
}
.business-1-button:focus {
  box-shadow: none;
  outline-style: none;
  border-color: transparent;
}
.button-dots {
  display: flex;
  justify-content: space-evenly;
}

.dot-1 {
  height: 50px;
  width: 50px;
  background-color: #ea5b0c;
  border-radius: 50%;
  display: inline-block;
}
.dot-2 {
  height: 50px;
  width: 50px;
  background-color: #ea5b0c;
  border-radius: 50%;
  display: inline-block;
  margin: 0 30px 0px 30px;
}
.dot-3 {
  height: 50px;
  width: 50px;
  background-color: #ea5b0c;
  border-radius: 50%;
  display: inline-block;
}
.dot-4 {
  height: 50px;
  width: 50px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  margin: 0 30px;
}
.dots {
  padding-left: 25%;
}

a {
  color: white;
  text-decoration: none;
}
a:hover {
  color: white;
}
.business-list-2 {
  display: flex;
}
.email {
  padding-top: 3%;
  padding-bottom: 15px;
}
.Ragione-sociale {
  padding-top: 10%;
}
input {
  width: 400px;
  height: 70px;
  border: 1px solid #ddd;
  padding: 10px;
}
.business-information {
  padding-top: 50px;
}

.espositore {
  padding-top: 15px;
}

@media (max-width: 575.98px) {
  .card {
    margin-top: 20px;
    margin-bottom: 50px;
  }

  .card-header {
    padding: 4%;
    font-size: 20px;
  }
  .card-sub-title {
    padding-top: 5%;
  }

  h3 {
    font-size: 18px;
    text-align: center;
  }
  .business-1-button {
    font-size: 18px;
    line-height: 18px;
    margin-top: 2%;
    margin-right: 2%;
  }

  .dot-1 {
    height: 15px;
    width: 15px;
  }
  .dot-2 {
    height: 15px;
    width: 15px;
    margin: 0 10px 0px 10px;
  }
  .dot-3 {
    height: 15px;
    width: 15px;
  }
  .dot-4 {
    height: 15px;
    width: 15px;
    margin: 0 10px;
  }
  .dots {
    padding-left: 10%;
    padding-top: 3%;
  }

  .business-list-2 {
    display: block;
  }

  img {
    display: block;
    width: 20%;
    margin-left: auto;
    margin-right: auto;
  }
  .business-information {
    padding-top: 20px;
  }

  input {
    width: 300px;
    height: 50px;
    padding: 5px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .Ragione-sociale {
    padding-top: 0%;
  }
  .email {
    padding-top: 4%;
    padding-bottom: 15px;
  }
  .espositore {
    padding-top: 15px;
    padding-bottom: 4%;
  }
}
</style>
