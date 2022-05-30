<template>
<div class="conatiner">
  <h1>Scopri il</h1> 
  <h1>viaggiatore che &egrave; in te.</h1>
    <div class="cards">
      <div class="arte">
        <div class="image1">
          <img src="@/assets/Arte-&-Cultura.png" alt="">
        </div>
        <div class="cardcontainer1">
          <p>Arte & Cultura</p> 
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
          <img src="@/assets/Relax.png" alt="">
        </div>
        <div class="cardcontainer2">
          <p>Relax</p> 
        </div>
      </div>
      <div class="party">
        <div class="image4">
          <img src="@/assets/Party.png" alt="">
        </div>
        <div class="cardcontainer2">
          <p>Party</p> 
        </div>
      </div>
      <div class="natura">
        <div class="image5">
          <img src="@/assets/Natura-&-Avventura.png" alt="">
        </div>
        <div class="cardcontainer1">
          <p>Natura & Avventura</p> 
        </div>
      </div>
    </div>

  <!--<img src="@/assets/photos.png" alt="">-->

        <div class="target target_test">
            <a href="http://localhost:8080/#/card0" class="fas fa-bullseye"></a>
            <div><p >Vai al TEST</p></div> 
        </div>
</div>
</template>

<style scoped>
.container {
  display: flex;
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

.image5 {
  padding-left: 10px;
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

</style>
