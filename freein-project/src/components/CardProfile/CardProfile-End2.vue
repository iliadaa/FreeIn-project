<template>
<div class="container">
  <h1>Il Tuo profilo &egrave;</h1>
  
<div class="circles">
  <div class="circle1">
    <img class="img1" src="@/assets/gourmet.png" alt=""> 
  </div>
  <div class="circle2">
    <img class="img2" src="@/assets/donna.png" alt=""> 
  </div>
</div>
<h1>Il Buongustaio</h1>
    <div class="cards">
      <div class="arte">
        <div class="image1">
          <img src="@/assets/art.png" alt="">
        </div>
        <div class="cardcontainer1">
          <p>Arte &AMP; Cultura</p> 
        </div>
        <div class="progress_container1">
          <VueProgressBar 

      type="line"
      :border="true" 
      :line-height="18"
      
      :cut-color="'#40a9ff'"
      :color="['#2d2e83', '#ea5b0c']"
      :percent="40" ></VueProgressBar>
        </div>
      </div>
      <div class="mare">
        <div class="image1">
          <img src="@/assets/Mare.png" alt="">
        </div>
        <div class="cardcontainer2">
          <p>Mare</p> 
        </div>
        <div class="progress_container1">
          <VueProgressBar 

      type="line"
      :border="true" 
      :line-height="18"
      
      :cut-color="'#40a9ff'"
      :color="['#2d2e83', '#ea5b0c']"
      :percent="45" ></VueProgressBar>
        </div>
      </div>
      <div class="gourmet">
        <div class="image2">
          <img src="@/assets/Gourmet-Explorer.png" alt="">
        </div>
        <div class="cardcontainer1">
          <p>Gourmet Explorer</p> 
        </div>
        <div class="progress_container1">
          <VueProgressBar 

      type="line"
      :border="true" 
      :line-height="18"
      
      :cut-color="'#40a9ff'"
      :color="['#2d2e83', '#ea5b0c']"
      :percent="90" ></VueProgressBar>
        </div>
      </div>
      <div class="relax">
        <div class="image3">
          <img src="@/assets/relax.png" alt="">
        </div>
        <div class="cardcontainer2">
          <p>Relax</p> 
        </div>
        <div class="progress_container1">
          <VueProgressBar 

      type="line"
      :border="true" 
      :line-height="18"
      
      :cut-color="'#40a9ff'"
      :color="['#2d2e83', '#ea5b0c']"
      :percent="60" ></VueProgressBar>
        </div>
      </div>
      <div class="party">
        <div class="image4">
          <img src="@/assets/Party.png" alt="">
        </div>
        <div class="cardcontainer2">
          <p>Party</p> 
        </div>
        <div class="progress_container1">
          <VueProgressBar 
      type="line"
      :border="true" 
      :line-height="18"
      :cut-color="'#40a9ff'"
      :color="['#2d2e83', '#ea5b0c']"
      :percent="50" ></VueProgressBar>
        </div>
      </div>
      <div class="natura">
        <div class="image5">
          <img src="@/assets/Natura_Avventura.png" alt="">
        </div>
        <div class="cardcontainer1">
          <p>Natura &AMP; Avventura</p> 
        </div>
        <div class="progress_container1">
          <VueProgressBar 
            type="line"
            :border="true" 
            :line-height="18"
            :cut-color="'#40a9ff'"
            :color="['#2d2e83', '#ea5b0c']"
            :percent="30" ></VueProgressBar>
        </div>
      </div>
    </div>

        <div class="text">
          <p>Viaggiatore interessato agli aspetti eno-gastronomici di un territorio, focalizzato sui piatti tipici, sulle tradizioni e sugli aspetti più rurali dell’identità culturale. Vocazione che può essere tanto indirizzata verso ristoranti stellati tanto quanto verso mercati tipici e street food.</p>
        </div>

        <div class="button1">
          <a href="http://localhost:8080/#/businesspage" class="button">portami alla mia hall</a>
        </div>
        
</div>
</template>
<style>

.k-progress{
  flex-direction: column;
}
.k-progress-text{
  order:-1;
}
.k-progress-outer {
  padding-right: 0;
}
</style>
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
  margin-left: 60px;
  margin-top: 30px;
}
.img2 {
  width: 181px;
  height: 170px;
  margin-left: 25px;
  margin-top: 25px;
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
  padding-bottom: 20px;
  padding-left: 20px;
}
.image3 {
  padding-bottom: 20px;
  padding-left: 7px;
}
.image4 {
  padding-bottom: 20px;
  padding-left: 15px;
}
.image5 {
  padding-bottom: 20px;
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

.button1 {
  display: flex;
  justify-content: center;
  margin-top: 35px;
}
.button {
  background-color: #ea5b0c;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  margin: 4px 2px;
  cursor: pointer;
  margin-bottom: 100px;
}
.progress_container1 {
    width:100%;
    padding-top: 20px;
}


</style>



