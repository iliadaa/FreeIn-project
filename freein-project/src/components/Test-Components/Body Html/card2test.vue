<template>
  <div>
    <div class="business-list-2">
      <img src="@/assets/business-icon.png" />
      <div class="card-sub-title">
        <h3>Scegli il metodo di acquisto</h3>
        <p>
          Il tuo metodo di acquisto determina dove eseguono la conversione i tuoi clienti
          quando desiderano acquistare un articolo dal tuo shop. La configurazione della
          procedura di acquisto &egrave; gratuita.
        </p>
        <li>Paypal</li>
        <li>Bonifico</li>
      </div>
    </div>
  </div>
</template>

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
.business-list-2 {
  display: flex;
}
.card-sub-title {
  padding: 80px 0 0 65px;
}
li {
  font-weight: bold;
  font-size: x-large;
}
a {
  color: white;
  text-decoration: none;
}
a:hover {
  color: white;
}
</style>
