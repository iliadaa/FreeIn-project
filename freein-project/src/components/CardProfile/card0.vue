<template>
  <div class="container">
    <div class="card-group">
      <div class="card card-a">
        <div class="illustrations">
          <img src="@/assets/dots.png" alt="">
        </div>
        <p>Scopri che viaggiatore sei in pochi passi</p>
      </div>
      <div class="card card-b">
        <div class="arrow">
          <a href="http://localhost:8080/#/card1" class="fas fa-angle-right"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 40px;
  margin-bottom: 100px; 
}
.card-group {
  justify-content: center;
  align-content: center;
  box-shadow: 2px 2px 30px rgba(25, 25, 25, 0.668);
  width: 80%;
  height: 100%;
  border-radius: 20px;
}
.card {
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 600px;
  border-radius: 20px;  
}
.card-a{
  background-color: #ea5b0c;
}
.img {
  width: 100%;
  height: auto;
}
.card-a p {
  color: white;
  font-size: 45px;
  font-weight: bold;
  text-align: left;
  margin-left: 100px;
}
.arrow a {
  justify-content: center;
  align-items: center;
  display: inline-flex;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 25px;
  text-decoration: none;
  color: white;
  background-image: linear-gradient(to bottom right, #ea5b0c, #2d2e83); 
}

@media (max-width: 575.98px) {
.container {
  margin-top: 20px;
  margin-bottom: 50px; 
}
.card-group {
  box-shadow: none;
}
.card {
  box-shadow: 5px 5px 20px;
  height: 400px; 
}
.card-a p {
  font-size: 25px;
  margin-left: 120px;
  margin-right: 120px;
}
.arrow a {
  width: 40px;
  height: 40px;
  font-size: 20px;
}
}

</style>