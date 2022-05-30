<template>
  <div class="container-business-user">
    <div class="card">
      <div class="card-header">Configura il tuo Business</div>

      <div class="business-list-2">
        <img src="@/assets/business-icon.png" />
        <div class="card-sub-title">
          <h3>Riepilogo</h3>
          <div class="payment-method">
            <h4>Metodo di acquisto</h4>
            <div class="modification">
              <a href="http://localhost:8080/#/businesscard3">Modifica</a>
            </div>
          </div>
          <div class="business-name">
            <h4>Ragione Sociale</h4>
            <div class="modification">
              <a href="http://localhost:8080/#/businesscard2">Modifica</a>
            </div>
          </div>
          <div class="e-mail">
            <h4>Indirizzo e-mail aziendale</h4>
            <div class="modification">
              <a href="http://localhost:8080/#/businesscard2">Modifica</a>
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
        <b-button class="business-1-button">Fine</b-button>
      </div>
      <div class="privacy">
        <input type="checkbox" />
        <label>
          Inviando il tuo business per controllo, Accetti il nostro
          <span style="color: #37beeb">Accordo con il venditore</span></label
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BusinessCard4",
};
</script>
<style scoped>
.container-business-user {
  display: flex;
  justify-content: center;
  font-family: "Roboto";
}
.card {
  width: 841px;
  margin-top: 100px;
  margin-bottom: 100px;
  height: 660px;
  border-radius: 40px;
  box-shadow: 0px 4px 4px rgbaa(0, 0, 0, 0.25);
}

.card-header {
  padding: 3%;
  background-color: #ea5b0c;
  color: white;
  font-size: x-large;
  text-align: center;
}
.card-header:first-child {
  border-radius: calc(2.25rem) calc(2.25rem) 0 0;
}

.business-1-button {
  background-color: #ea5b0c;
  border-color: transparent;
  font-style: normal;
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
.business-list-2 {
  display: flex;
}
.card-sub-title {
  padding: 80px 0 0 65px;
}
ul {
  font-weight: bold;
  font-size: large;
}
.privacy {
  text-align: center;
  padding-top: 5%;
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
</style>
