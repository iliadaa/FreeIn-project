
<template>
  <div class="container">
    <div class="card-group">
      <div class="card card-a">
        <p>"Quanto conta <br> il relax in <br> viaggio?"</p>
      </div>
      <div class="card card-b">
              <p>Esprimi un voto da 1 a 10</p> 

              <div class="slidecontainer">
                 <input type="range" min="0" max="100" value="50" id="slider">

              </div>
          
         <div class="arrow">
          <a href="http://localhost:8080/#/card13" class="fas fa-angle-right"></a>
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
  width: 90%;
}
#slider {
  -webkit-appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 3px;
  outline: none;
  background: rgb(215, 213, 213);
  /*opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;*/
}



#selector {
height: 104px;
width: 48px;
position: absolute;
bottom: -20px;
left: 50%;
transform: translateX(-50%);
z-index: 2;
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