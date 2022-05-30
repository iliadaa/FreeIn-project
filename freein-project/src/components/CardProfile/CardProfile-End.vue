<template>
<div class="container">
  <h1>Il Tuo profilo &egrave;</h1>

<div class="circles">
  <div class="circle1">
    <img class="img1" src="@/assets/Gourmet-Explorer.png" alt=""> 
  </div>
  <div class="circle2">
    <img class="img2" src="@/assets/Relax.png" alt=""> 
  </div>
</div>

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

        <div class="text">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque rerum architecto officia necessitatibus vel dolorum provident quod ex atque magnam porro vero ratione, dolore accusantium!</p>
        </div>
</div>
</template>

<style scoped>
h1 {
  color: #ea5b0c;
  font-size: 40px;
  text-align: center;
}
.circles {
  display: flex;
  justify-content: center;
  margin-top: 25px;
  margin-left: 8%;
  margin-bottom: 75px; 
}
.circle1, .circle2 {
  height: 225px;
  width: 225px;
  border-radius: 50%;
}
.circle1 {
  background: #009EE2;
}
.circle2 {
  background: #ea5b0c;
  transform: translateX(-100px);
  z-index: 2;
}
.img1 {
  width: 131px;
  height: 170px;
  margin-left: 45px;
  margin-top: 40px;
}
.img2 {
  width: 131px;
  height: 170px;
  margin-left: 45px;
  margin-top: 15px;
}
.cards {
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 70px;
  margin-bottom: 70px;
}
img {
  width: 71px;
  height: 90px;
}
.arte {
  background-color: #EC624C;
  width: 90px;
  height: 120px;
  position: relative;
  box-shadow: 2px 2px 30px rgba(25, 25, 25, 0.668);
  border-radius: 10px;
  margin-right: 20px;
}
.mare {
  background-color: #2C307F;
  width: 90px;
  height: 120px;
  position: relative;
  box-shadow: 2px 2px 30px rgba(25, 25, 25, 0.668);
  border-radius: 10px;
  margin-right: 20px;
}
.gourmet {
  background-color: #009EE2;
  width: 90px;
  height: 120px;
  position: relative;
  box-shadow: 2px 2px 30px rgba(25, 25, 25, 0.668);
  border-radius: 10px;
  margin-right: 20px;
}
.relax {
  background-color: #DC2C6C;
  width: 90px;
  height: 120px;
  position: relative;
  box-shadow: 2px 2px 30px rgba(25, 25, 25, 0.668);
  border-radius: 10px;
  margin-right: 20px;
}
.party {
  background-color: purple;
  width: 90px;
  height: 120px;
  position: relative;
  box-shadow: 2px 2px 30px rgba(25, 25, 25, 0.668);
  border-radius: 10px;
  margin-right: 20px;
}
.natura {
  background-color: #F6A314;
  width: 90px;
  height: 120px;
  position: relative;
  box-shadow: 2px 2px 30px rgba(25, 25, 25, 0.668);
  border-radius: 10px;
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
  padding-left: 15px;
}
.image5 {
  padding-left: 10px;
}
.cardcontainer1 {
  font-size: 15px;
  font-weight: bold;
  color: white;
  text-align: center;
  position: absolute;
  line-height: 11px;
  top: 95px;
}
.cardcontainer2 {
  font-size: 15px;
  font-weight: bold;
  color: white;
  position: absolute;
  line-height: 11px;
  top: 105px;
  left: 28px;
}
.text {
  text-align: justify;
  margin-left: 320px;
  margin-right: 318px;
}
</style>



