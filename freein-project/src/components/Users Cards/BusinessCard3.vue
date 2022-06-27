<template>
  <div class="container-business-user">
    <div class="card">
      <div class="card-header">Configura il tuo Business</div>

      <div class="business-list-2">
        <img src="@/assets/business-icon.png" />
        <div class="card-sub-title">
          <h3>Scegli il metodo di acquisto</h3>
          <p>
            Il tuo metodo di acquisto determina dove eseguono la conversione i tuoi
            clienti quando desiderano acquistare un articolo dal tuo shop. La
            configurazione della procedura di acquisto &egrave; gratuita.
          </p>

          <!--Added-->
          <label class="container"
            >Paypal
            <input type="radio" checked="checked" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="container"
            >Bonifico
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
      <div class="button-dots">
        <div class="dots">
          <span class="dot-1"></span>
          <span class="dot-2"></span>
          <span class="dot-3"></span>
          <span class="dot-4"></span>
        </div>
        <b-button class="business-1-button"
          ><a href="http://localhost:8080/#/businesscard2">Avanti >></a></b-button
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BusinessCard3",
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
  padding: 80px 0 0 65px;
}

h3 {
  font-weight: bold;
}

p {
  font-size: 18px;
  margin-right: 30px;
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
  background-color: #bbb;
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

/*Added*/
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-weight: bold;
}
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}
.container:hover input ~ .checkmark {
  background-color: #eee;
}
.container input:checked ~ .checkmark {
  background-color: #eee;
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.container input:checked ~ .checkmark:after {
  display: block;
}
.container .checkmark:after {
  top: 8px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: black;
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

.card-sub-title {
  padding: 2%;
}

h3 {
  font-size: 18px;
  font-weight: bold;
  text-align: center; 
}

p {
  font-size: 16px; 
  margin-left: 30px; 
  text-align: justify;
}

.business-1-button {
  font-size: 18px;
  line-height: 18px;
  margin-top: 9%;
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
  padding-top: 10%;
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

/*Added*/
.container {
  margin-left: 30px;
  font-size: 16px;
  font-weight: bold;
}
}
</style>
