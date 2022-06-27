<template>
  <div class="container-business-user">
    <div class="card">
      <div class="card-header">Configura il tuo Business</div>
      <div class="card-sub-title">
        <h2>Ecco cosa ti servira per iniziare</h2>
        <h6>Prima di iniziare a vendere, dovrai completare alcun passaggi</h6>
      </div>

      <div class="business-list">
        <!--Added-->
        <div class="businessimage"><img src="@/assets/business-icon.png" /></div>

        <div>
          <div class="businesstext1">
            <div class="number">1</div>

            <div class="text1">
              <div class="first">
                <p>
                  Scegli un metodo di acquisto <br />
                  Fornisci ai tuoi clienti un modo per pagare.
                </p>
              </div>
            </div>
          </div>
          <div class="businesstext2">
            <div class="number">2</div>

            <div class="text1">
              <div class="first">
                <p>
                  Fornisci i dettagli relativi alla tua azienda <br />
                  Inserisci il nome e l'indirizzo e-mail della tua azienda o collega un
                  account aziendale se ne hai gia' uno.
                </p>
              </div>
            </div>
          </div>
          <div class="businesstext3">
            <div class="number">3</div>

            <div class="text1">
              <div class="first">
                <p>
                  Aggiungi il tuo prodotto <br />
                  Crea un espositore per promuovere e vendere i tuoi prodotti.
                </p>
              </div>
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
.card-sub-title > h2 {
  color: black;
  font-size: 30px;
  text-transform: uppercase;
}

.card-sub-title > h6 {
  font-size: 18px;
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

/*added*/
.business-list {
  display: flex;
  justify-content: space-between;
}

img {
  width: 100%;
  height: auto;
}
.businesstext1 {
  display: flex;
  margin-left: 5%;
  margin-top: 3%;
}

.businesstext2 {
  display: flex;
  margin-left: 5%;
  margin-right: 15%;
  margin-top: 5px;
}

.businesstext3 {
  display: flex;
  margin-left: 5%;
  margin-top: 5px;
}
.number {
  font-size: 45px;
  font-weight: bold;
  color: #ea5b0c;
}
.text1 {
  margin-left: 15px;
  margin-top: 10px;
}

.first p {
  font-size: 18px;
  font-weight: bold;
  color: black;
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
.card-sub-title > h2 {
  font-size: 18px;
}
.card-sub-title > h6 {
  font-size: 16px;
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
.business-list {
  display: block;
}

img {
  display: block;
  width: 20%;
  margin-left: auto;
  margin-right: auto;
}
.businesstext1 {
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 2px;
}

.businesstext2 {
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 2px;
}

.businesstext3 {
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 2px;
}
.number {
  font-size: 35px;
}
.text1 {
  margin-left: 10px;
  margin-top: 3px;
}

.first p {
  font-size: 16px;
}
}
</style>
