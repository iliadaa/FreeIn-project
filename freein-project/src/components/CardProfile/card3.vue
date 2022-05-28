
<template>
  <div class="container">
    <div class="card-group">
      <div class="card card-a">
        <p>"Il tuo stato sentimentale ...?"</p>
      </div>
      <div class="card card-b">
          <div class="answer1">
              <p>Fidanzato</p> 
          </div>
          <div class="answer2">
              <p>Single</p>
              <p>Famiglia</p>
          </div>
          <div class="answer3">
              <p>Divorziato</p>
          </div>
        <div class="arrow">
          <a href="http://localhost:8080/#/card4" class="fas fa-angle-right"></a>
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
.answer2 {
  display: flex;
  justify-content: space-between;
  margin-left: 20%;
  margin-right: 20%;
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