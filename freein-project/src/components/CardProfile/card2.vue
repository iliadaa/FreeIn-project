
<template>
  <div class="container">
    <div class="card-group">
      <div class="card card-a">
        <p>"Lorem ipsum <br> dolor sit amet, <br> consectetur adi- <br> pisicing elit?"</p>
      </div>
      <div class="card card-b">
          <div class="cards">
              <div>
                  <div class="cardimage">
                    <img src="@/assets/travel.jpg" alt="" class="responsive" style="width: 100%; height: auto; padding-right: 5px;">
                  </div>
                  <div class="cardcontainer">
                      <p>Lorem ipsum</p> 
                  </div>
              </div>
                            
              <div>
                  <div class="cardimage">
                    <img src="@/assets/travel.jpg" alt="" class="responsive" style="width: 100%; height: auto; padding-right: 5px;">
                  </div>
                  <div class="cardcontainer">
                      <p>Lorem ipsum</p> 
                  </div>
              </div>

              <div>
                  <div class="cardimage">
                    <img src="@/assets/travel.jpg" alt="" class="responsive" style="width: 100%; height: auto; padding-right: 5px;">
                  </div>
                  <div class="cardcontainer">
                      <p>Lorem ipsum</p> 
                  </div>
              </div>       
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
  font-size: 40px;
  text-align: left;
  padding-top: 100px;
}
.cards {
  display: flex;
  margin-right: 30px;
  margin-left: 30px;
}

img {
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
}
.card-b p {
  font-size: 20px;
  color: #ea5b0c;
}
.arrow {
  position: absolute;
  bottom: 0;
  right: 0;
  padding-right: 30px;
  padding-bottom: 20px;
}
.card-b a {
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