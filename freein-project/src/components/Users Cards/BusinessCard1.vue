<template>
  <div class="container-business-user">
    <div class="card">
      <div class="card-header">Configura il tuo Business</div>
      <div class="card-sub-title">
        <h2>Ecco cosa ti servira per iniziare</h2>
        <h6>Prima di iniziare a vendere, dovrai completare alcun passaggi</h6>
      </div>
      <div class="business-list">
        <img src="@/assets/business-icon.png" />
        <img src="@/assets/list2.jpg" />
      </div>

      <div class="button-dots">
        <div class="dots">
          <span class="dot-1"></span>
          <span class="dot-2"></span>
          <span class="dot-3"></span>
          <span class="dot-4"></span>
        </div>
        <b-button class="business-1-button"
          ><a href="http://localhost:8080/#/businesscard3">Avanti >></a></b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BusinessCard1",
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
.card-sub-title {
  padding-top: 2%;
  text-align: center;
}
.card-sub-title > h2 {
  color: black;
  text-transform: uppercase;
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
  background-color: #bbb;
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
</style>
