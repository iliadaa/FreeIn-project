
<template>
  <div class="container">
    <div class="card-group">
      <div class="card card-a">
        <p>"Quanto conta <br> l'avventura in <br> viaggio?"</p>
      </div>
      <div class="card card-b">
              <p>Esprimi un voto da 1 a 10</p> 

              <div class="slidecontainer">
                <!--<input type="range" min="1" max="100" value="50">-->
                <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
                <p>1 2 3 4 5 6 7 8 9 10</p>
              </div>
          
        <div class="arrow">
          <a href="#" class="fas fa-angle-right"></a>
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
  align-items: center;
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
}
.card-b p {
  font-size: 30px;
  color: #ea5b0c;
  font-style: italic;
}
.slidecontainer {
  width: 85%;
}
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
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