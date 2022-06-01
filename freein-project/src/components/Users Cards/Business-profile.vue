<template>
  <div class="box">
    <h4>My personal attitude</h4>
    <div class="personal-icons">
      <img class="art-culture" src="@/assets/art.png" />
      <img class="relax" src="@/assets/relax.png" />
      <img class="sea" src="@/assets/Mare.png" />
      <img class="nature-adventure" src="@/assets/Natura_Avventura.png" />
      <img class="gourmet-explorer" src="@/assets/Gourmet-Explorer.png" />
      <img class="party" src="@/assets/Party.png" />
    </div>

    <div class="profile">
      <img class="pig" src="@/assets/pig.png" />
      <img class="ringbell" src="@/assets/ringbell.png" />
      <img class="settings" src="@/assets/settings.png" />
      <img class="avatar" src="@/assets/avatar.png" />
    </div>

    <div class="map-profile">
      <div class="plus-icon">
        <a class="fas fa-plus" href="#"> </a>
        <span class="text">Crea tappa</span>
        <a class="fas fa-plus" href="#"></a>
        <span class="text">Crea Itinerario</span>
      </div>
      <img src="@/assets/map.jpg" />
      <div class="avatar-5">
        <div class="flex">
          <img src="@/assets/avatar-plus.png" />
          <img src="@/assets/avatar-plus.png" />
          <img src="@/assets/avatar-with-logo.png" />
          <img src="@/assets/avatar-plus.png" />
          <img src="@/assets/avatar-with-logo.png" />
        </div>
        <div class="flex text2">
          <label>Alex</label>
          <label>Jhon</label>
          <label>Alisha</label>
          <label>Alex</label>
          <label>Alex</label>
        </div>
        <div class="follower-following">
          <span class="dot">27</span> <label>Seguiti</label>
          <span class="dot">157</span>
          <label>Follower</label>
        </div>
      </div>
    </div>
    <div class="icons">
      <img src="@/assets/img-5.png" />
      <img src="@/assets/img-6.png" style="margin: 30px" />
      <img src="@/assets/img-7.png" />
      <img src="@/assets/img-8.png" style="margin: 30px" />
      <div class="button">
        <button><a href="">Business >></a></button>
      </div>
    </div>
    <div class="cards">
      <b-card class="card-1">
        <img src="@/assets/image-card-1.jpg" />
        <label>Peschici</label>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Business-profile",
};
</script>

<style scoped>
.box {
  padding: 0 5% 0 5%;
}
.personal-group h4 {
  margin-bottom: 15px;
}
.profile {
  float: right;

  align-items: center;
}
.personal-icons img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  float: left;
}
img.art-culture {
  background-color: #ff6343;
}
img.relax {
  background-color: #dc2d6c;
  margin: 0 20px 0 20px;
}
img.sea {
  background-color: #2d2e83;
}
img.nature-adventure {
  background-color: #ffa600;
  margin: 0 20px 0 20px;
}
img.gourmet-explorer {
  background-color: #009fe3;
}
img.party {
  background-color: #952685;
  margin: 0 20px 0 20px;
}
img.ringbell {
  margin: 0 30px 0 30px;
}
img.settings {
  margin-right: 70px;
}
h4 {
  color: #ea5b0c;
}
img.avatar {
  width: 80px;
  height: auto;
}
.fas {
  font-size: 20px;
}
.plus-icon a {
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: grey;
  display: flex;
  border-radius: 50%;
  text-decoration: none;
  border: 2px solid grey;
  margin-top: 20px;
}
.plus-icon {
  margin-right: 25px;
  float: left;
}
.map-profile {
  margin-top: 150px;
}
.avatar-5 {
  font-size: 20px;
  float: right;
  margin-right: 100px;
  color: white;
}

.avatar-5 span {
  display: flex;
  justify-content: center;
  align-items: center;
}
.avatar-5 label {
  color: black;
}
.avatar-5 img {
  background-color: #d1d3d4;
}
.dot {
  height: 40px;
  width: 40px;
  background-color: #ea5b0c;
  border-radius: 50%;
  display: inline-block;
  margin: 8px 20px 0;
}
.follower-following {
  display: flex;
}
.follower-following label {
  margin-top: 8px;
}

.flex {
  display: flex;
  justify-content: space-around;
  background-color: #d1d3d4;
}

.text2 label {
  margin-right: 10px;
  color: grey;
}
.icons img {
  height: 40px;
  width: 40px;
}
.icons {
  display: flex;
  align-items: center;
}
.button {
  margin-left: 10%;
}
button {
  padding: 10px 30px;
  background: #f26522;
  font-size: 45px;
  color: white;
  position: relative;
  border: none;
  margin: 50px;
  border-radius: 35px;
}
a {
  text-decoration: none;
  color: white;
  border-radius: 10%;
}
a:hover {
  color: white;
}
.card {
  width: 250px;
  margin-top: 100px;
  margin-bottom: 100px;
  height: 330px;
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgbaa(0, 0, 0, 0.25);
  border-color: white;
  font-size: 25px;
}
.card-1 img {
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}
.card-1 {
  background-color: #009fe3;
  color: white;
}
.card-body {
  padding: 0rem 0rem;
}
.card-1 label {
  margin-left: 30px;
}
</style>
