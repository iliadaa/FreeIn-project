<template>
<div class="conatiner">
  <h1>Scopri il</h1> 
  <h1>viaggiatore che &egrave; in te.</h1>
    <div class="cards">
      <div class="arte">
        <div class="image1">
          <img src="@/assets/art.svg" alt="">
        </div>
        <div class="cardcontainer1">
          <p>Arte &AMP; Cultura</p> 
        </div>
      </div>
      <div class="mare">
        <div class="image1">
          <img src="@/assets/Mare.png" alt="">
        </div>
        <div class="cardcontainer2">
          <p>Mare</p> 
        </div>
      </div>
      <div class="gourmet">
        <div class="image2">
          <img src="@/assets/Gourmet-Explorer.png" alt="">
        </div>
        <div class="cardcontainer1">
          <p>Gourmet Explorer</p> 
        </div>
      </div>
      <div class="relax">
        <div class="image3">
          <img src="@/assets/relax.png" alt="">
        </div>
        <div class="cardcontainer2">
          <p>Relax</p> 
        </div>
      </div>
      <div class="party">
        <div class="image4">
          <img src="@/assets/party.svg" alt="">
        </div>
        <div class="cardcontainer2">
          <p>Party</p> 
        </div>
      </div>
      <div class="natura">
        <div class="image5">
          <img src="@/assets/natura.svg" alt="">
        </div>
        <div class="cardcontainer1">
          <p>Natura &AMP; Avventura</p> 
        </div>
      </div>
    </div>

        <div class="target target_test">
            <!--<a href="http://localhost:8080/#/card0" class="fas fa-bullseye"></a>-->
            <a href="http://localhost:8080/#/card0"><img src="@/assets/target.svg" alt=""></a>
            <div><p >Vai al TEST</p></div> 
        </div>
</div>
</template>

<style scoped>
.container {
  display: flex;
  margin-top: 40px;
  margin-bottom: 100px;
}

h1 {
  color: #2d2e83;
  font-size: 60px;
  text-align: right;
}

.cards {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  margin-top: 70px;
  margin-bottom: 70px;
}

.arte {
  background-color: #EC624C;
  width: 160px;
  height: 220px;
  position: relative;
  box-shadow: 2px 2px 30px rgba(25, 25, 25, 0.668);
}

.mare {
  background-color: #2C307F;
  width: 160px;
  height: 220px;
  position: relative;
  box-shadow: 2px 2px 30px rgba(25, 25, 25, 0.668);
}

.gourmet {
  background-color: #009EE2;
  width: 160px;
  height: 220px;
  position: relative;
  box-shadow: 2px 2px 30px rgba(25, 25, 25, 0.668);
}

.relax {
  background-color: #DC2C6C;
  width: 160px;
  height: 220px;
  position: relative;
  box-shadow: 2px 2px 30px rgba(25, 25, 25, 0.668);
}

.party {
  background-color: purple;
  width: 160px;
  height: 220px;
  position: relative;
  box-shadow: 2px 2px 30px rgba(25, 25, 25, 0.668);
}

.natura {
  background-color: #F6A314;
  width: 160px;
  height: 220px;
  position: relative;
  box-shadow: 2px 2px 30px rgba(25, 25, 25, 0.668);
}

.image1 {
  padding: 10px;
}

.image2 {
  padding-left: 20px;
}

.image3 {
  padding-left: 7px;
}

.image4 {
  padding-left: 20px;
}
.cardcontainer1 {
  font-size: 30px;
  font-weight: bold;
  color: white;
  text-align: center;
  position: absolute;
  line-height: 22px;
  top: 170px;
}

.cardcontainer2 {
  font-size: 30px;
  font-weight: bold;
  color: white;
  position: absolute;
  line-height: 22px;
  top: 193px;
  left: 45px;
}

.target {
  text-align: right;
  margin-right: 30px;
}

.target a {
  justify-content: center;
  align-items: center;
  display: inline-flex;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 40px;
  text-decoration: none;
  color: white;
  background-image: linear-gradient(to bottom right, #ea5b0c, #2d2e83); 
  margin-bottom: 10px;
}
.target_test a {   
  margin-right: 11px;
}

@media (max-width: 575.98px) {
.container {
  margin-top: 20px;
  margin-bottom: 50px;
}

h1 {
  font-size: 25px;
}

.cards {
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
}

.arte {
  width: 180px;
  height: 240px;
  margin-bottom: 10px;
}

.mare {
  width: 180px;
  height: 240px;
  margin-bottom: 10px;
}

.gourmet {
  width: 180px;
  height: 240px;
  margin-bottom: 10px;
}

.relax {
  width: 180px;
  height: 240px;
  margin-bottom: 10px;
}

.party {
  width: 180px;
  height: 240px;
  margin-bottom: 10px;
}

.natura {
  width: 180px;
  height: 240px;
}

.image1 {
  padding: 20px;
}

.image2 {
  padding-left: 40px;
}

.image3 {
  padding-left: 14px;
}

.image4 {
  padding-left: 20px;
}



.cardcontainer1 {
  top: 180px;
}

.cardcontainer2 {
  top: 200px;
  left: 52px;
}

.target {
  margin-right: 10px;
}

.target a {
  width: 40px;
  height: 40px;
  font-size: 33px;
}
.target_test a {   
  margin-right: 17px;
}

.target_test p {
  font-size: 17px;
}
}
</style>
