
<template>
  <div class="container">
    <div class="card-group">
      <div class="card card-a">
        <p>"La tua fascia di <br> eta' e'?</p>
      </div>
      <div class="card card-b">
        <div class="answer1">
          <p>16-20</p>
          <p>21-27</p>
          <p>28-37</p>
        </div>
        <div class="answer2">
          <p>38-55</p>
          <p>56-90</p>
        </div>
        <div class="arrow">
            <a href="http://localhost:8080/#/card9" class="fas fa-angle-right"></a>
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
  margin-top: 50px; 
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
  /*align-items: center;*/
  text-align: center;
  height: 600px;
  border-radius: 20px;  
}
.card-a{
  background-color: #ea5b0c;
}
.card-a p {
  color: white;
  font-style: italic;
  font-size: 40px;
  text-align: left;
  
  margin-left: 20%;
}
.answer1 {
  display: flex;
  justify-content: space-between;
  margin-left: 20%;
  margin-right: 20%;
  font-style: italic;
}
.answer2 {
  display: flex;
  justify-content: space-between;
  margin-left: 30%;
  margin-right: 30%;
  font-style: italic;
}
.card-b p {
  font-size: 30px;
  color: #ea5b0c;
}
.arrow {
  position: absolute;
  bottom: 0;
  right: 0;
  padding-right: 30px;
  padding-bottom: 20px;
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

</style>