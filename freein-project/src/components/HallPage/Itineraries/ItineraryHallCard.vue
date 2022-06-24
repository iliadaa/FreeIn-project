<template>
  <div class="cards2">
    <div class="cards2i">
      <div class="mapicon">
        <i class="fas fa-map-marked-alt"></i>
      </div>
      <div class="usericon">
        <i class="fas fa-user-circle"></i>
      </div>
    </div>
    <img src="@/assets/business-photo/business-image-1.jpg" alt="" />
    <div class="cards2body">
      <p>Peschici</p>
      <div class="cards2icons">
        <div class="button1">
          <a href="#" class="button">Go</a>
        </div>
        <div>
          <a href="#"><i class="fas fa-star"></i></a>
          <a href=""><i class="far fa-bookmark"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrap img {
  width: 100%;
  height: auto;
  border-radius: 10% 10% 0% 0%;
  position: relative;
}

.cards2 {
  margin-left: 10px;
}
.cards2i {
  display: flex;
  color: #ea5b0c;
  font-size: 30px;
  position: absolute;
  z-index: 1;
}
.mapicon {
  background-color: #009fe3;
  width: 50px;
}
.usericon {
  padding-left: 150px;
  padding-top: 5px;
  color: white;
}

.cards2body {
  width: 100%;
  background: #ea5b0c;
  border-radius: 0% 0% 10% 10%;
}
.cards2body p {
  font-size: 16px;
  color: white;
  padding-top: 15px;
  padding-left: 15px;
}
.button {
  background-color: white;
  border: none;
  border-radius: 50%;
  color: #ea5b0c;
  padding: 2px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 15px;
}
.cards2icons {
  display: flex;
  justify-content: space-between;
  padding-left: 17px;
  padding-right: 17px;
}
.cards2icons i {
  padding-left: 34px;
  color: white;
}
</style>