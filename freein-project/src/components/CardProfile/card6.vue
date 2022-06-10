
<template>
  <div class="container">
    <div class="card-group">
      <div class="card card-a">
        <div class="illustrations">
          <img src="@/assets/illustration.png" alt="">
        </div>
        <p>"Quanto spendi per una bottiglia di vino?"</p>
      </div>
      <div class="card card-b">
          <div class="answer1">
              <p>soglie espresse in euro € </p> 
          </div>
          <div class="answer2">
              <p>2-6</p>
              <p>7-12</p>
              <p>13-22</p>
              <p>oltre 23</p>
          </div>
        <div class="arrow">
          <a href="http://localhost:8080/#/card7" class="fas fa-angle-right"></a>
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
  margin-left: 100px;
  margin-right: 80px;
  margin-bottom: 210px;
}
.answer2 {
  display: flex;
  justify-content: space-between;
  margin-left: 10%;
  margin-right: 10%;
}
.card-b p {
  font-size: 30px;
  color: #ea5b0c;
  font-style: italic;
}
.arrow {
  position: absolute;
  bottom: 0;
  right: 0;
  padding-right: 30px;
  padding-bottom: 20px;
}
.arrow a  {
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