<template>
<div>
  <h1>Scopri il <br> viaggiatore che e' in te.</h1>
  <img src="@/assets/photos.png" alt="" class="responsive" style="width: 100%; height: auto;">
        <div class="target">
            <a href="#" class="fas fa-bullseye"> </a>
            <p>Vai al TEST</p>
        </div>
</div>
</template>

<style scoped>
h1 {
    color: #2d2e83;
    font-size: 60px;
    text-align: right;
    margin-bottom: 10px;
    margin-right: 10%;
}
.target {
text-align: right;
margin-right: 10%;
}
.target a {
  justify-content: center;
  align-items: center;
  display: inline-flex;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 40px;
  text-decoration: none;
  color: white;
  background-image: linear-gradient(to bottom right, #ea5b0c, #2d2e83); 
  margin-right: 10px;
  margin-bottom: 10px;
}

</style>
