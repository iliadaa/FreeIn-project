<template>
  <div class="container-business-user">
    <div class="card">
      <div class="card-header">Configura il tuo Business</div>

      <div class="business-list-2">
        <img src="@/assets/business-icon.png" />
        <div class="card-sub-title">
          <h4>Riepilogo</h4>
          <div class="payment-method">
            <h4>Metodo di acquisto</h4>
            <div class="modification">
              <a href="#/businesscard3">Modifica</a>
            </div>
          </div>
          <div class="business-name">
            <h4>Ragione Sociale</h4>
            <div class="modification">
              <a href="#/businesscard2">Modifica</a>
            </div>
          </div>
          <div class="e-mail">
            <h4>Indirizzo e-mail aziendale</h4>
            <div class="modification">
              <a href="#/businesscard2">Modifica</a>
            </div>
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

        <b-button class="business-1-button" @click="replaceItem()">
          <a href="http://localhost:8080/#/privatprofile"> Fine</a></b-button
        >
      </div>
      <div class="privacy">
        <input type="checkbox" />
        <label style="margin-left: 10px">
          Inviando il tuo business per controllo, Accetti il nostro
          <span
            ><a style="color: #37beeb" href="#/terms-and-conditions"
              >Accordo con il venditore</a
            ></span
          ></label
        >
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "BusinessCard4",
  data() {
    return {};
  },
  methods: {
    async replaceItem() {
      const res = await axios.patch(
        `http://localhost:3000/registrations/` + this.inSession[0].userObj.id,
        {
          userObj: {
            id: this.inSession[0].userObj.id,
            email: this.inSession[0].userObj.email,
            password: this.inSession[0].userObj.password,
            change: this.inSession[0].userObj.change,
            name: this.inSession[0].userObj.name,
            surname: this.inSession[0].userObj.surname,
            testDone: this.inSession[0].userObj.testDone,
            roles: ["business"],
            profileTest: {
              name: this.inSession[0].userObj.profileTest.name,
              description: this.inSession[0].userObj.profileTest.description,
              arte: this.inSession[0].userObj.profileTest.arte,
              mare: this.inSession[0].userObj.profileTest.mare,
              cibo: this.inSession[0].userObj.profileTest.cibo,
              relax: this.inSession[0].userObj.profileTest.relax,
              party: this.inSession[0].userObj.profileTest.party,
              nature: this.inSession[0].userObj.profileTest.nature,
            },
            testAnswers: this.inSession[0].userObj.testAnswers,
            paymentMethod: this.inSession[0].userObj.paymentMethod,
            agency: {
              ragioneSociale: this.inSession[0].userObj.agency.ragioneSociale,
              indirizzoMailAziendale:
                this.inSession[0].userObj.agency.indirizzoMailAziendale,
              espositore: this.inSession[0].userObj.agency.espositore,
            },
          },
        }
      );
      this.$router.push({
        name: "BusinessProfile",
      });
    },
  },
  computed: {
    inSession() {
      return this.$store.state.inSession;
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
  padding-top: 8%;
  padding-left: 6%;
}

h4 {
  font-weight: bold;
}

.business-1-button {
  background-color: #ea5b0c !important;
  border-color: transparent;
  font-size: 18px;
  font-style: italic;
  line-height: 28px;
  width: 150px;
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
  padding-bottom: 30px;
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
  background-color: #ea5b0c;
  border-radius: 50%;
  display: inline-block;
  margin: 0 30px;
}
.dots {
  padding-left: 25%;
}
.business-list-2 {
  display: flex;
}
.privacy {
  text-align: center;
  padding-top: 5%;
  border-top: 2px solid #b9b9b94e;
}

.payment-method {
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
}
.business-name {
  display: flex;
  justify-content: space-between;
}
.e-mail {
  display: flex;
  justify-content: space-between;
}
.modification {
  padding-left: 120px;
}
a {
  color: #989a9d;
  text-decoration: none;
}
a:hover {
  color: #989a9d;
}
.business-1-button > a {
  color: #ffffff;
}
.business-1-button > a:hover {
  color: #ffffff;
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
    padding-top: 2%;
    padding-left: 0%;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
  }

  .business-1-button {
    font-size: 18px;
    line-height: 18px;
    margin-top: 2%;
    margin-right: 2%;
    width: 70px;
  }

  .button-dots {
    padding-bottom: 10px;
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
    margin-left: 30px;
    margin-right: 30px;
  }

  .privacy {
    text-align: center;
    padding-top: 20px;
    border-top: 2px solid #b9b9b94e;
  }

  img {
    display: block;
    width: 20%;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 15px;
  }

  .payment-method {
    padding-top: 30px;
  }
  .business-name {
    padding-top: 15px;
  }
  .e-mail {
    padding-top: 15px;
    padding-bottom: 90px;
  }
  .modification {
    padding-left: 50px;
  }

  a {
    font-size: 14px;
  }
}
</style>
