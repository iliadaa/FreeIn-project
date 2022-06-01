<template>
  <div class="container">
    <div class="heading">
      <p class="p1"><i class="fas fa-map-marked-alt"></i>Itinerario</p>
    </div>

    <div class="cards">
      <div class="arte">
        <div class="image1">
          <img src="@/assets/art.png" alt="" />
        </div>
        <div class="cardcontainer1">
          <p>50%</p>
        </div>
      </div>

      <div class="mare">
        <div class="image1">
          <img src="@/assets/Mare.png" alt="" />
        </div>
        <div class="cardcontainer2">
          <p>20%</p>
        </div>
      </div>

      <div class="gourmet">
        <div class="image2">
          <img src="@/assets/Gourmet-Explorer.png" alt="" />
        </div>
        <div class="cardcontainer1">
          <p>50%</p>
        </div>
      </div>

      <div class="relax">
        <div class="image3">
          <img src="@/assets/relax.png" alt="" />
        </div>
        <div class="cardcontainer2">
          <p>70%</p>
        </div>
      </div>

      <div class="party">
        <div class="image4">
          <img src="@/assets/Party.png" alt="" />
        </div>
        <div class="cardcontainer2">
          <p>30%</p>
        </div>
      </div>

      <div class="natura">
        <div class="image5">
          <img src="@/assets/Natura_Avventura.png" alt="" />
        </div>
        <div class="cardcontainer1">
          <p>30%</p>
        </div>
      </div>
    </div>

    <div class="text">
      <h1>Un week and d’avventura</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolores molestiae
        soluta eos maiores, minus sapiente pariatur fugit recusandae quibusdam quisquam
        nihil alias consectetur cum quae voluptas reiciendis voluptatem in, quas nesciunt?
        Saepe quam voluptatum laboriosam odit ipsam, ratione nam optio. Doloribus
        molestias ex explicabo natus! Explicabo rerum repellendus suscipit maxime debitis
        ipsam recusandae dignissimos officiis facere enim? Molestias, earum.
      </p>
    </div>
  </div>
</template>

<style scoped>
.heading {
  background: #ea5b0c;
  width: 100%;
  margin-bottom: 60px;
}
.heading i {
  display: inline-block;
  font-size: 38px;
  padding: 25px 27px;
}
.p1 {
  font-size: 24px;
  color: white;
}
.cards {
  display: flex;
  justify-content: start;
  width: 100%;
  height: auto;
  margin-bottom: 60px;
}

img {
  width: 41px;
  height: 50px;
}
.arte {
  background-color: #ec624c;
  width: 65px;
  height: 65px;
  position: relative;
  border-radius: 50%;
  margin-right: 20px;
}
.mare {
  background-color: #2c307f;
  width: 65px;
  height: 65px;
  position: relative;
  border-radius: 50%;
  margin-right: 20px;
}
.gourmet {
  background-color: #009ee2;
  width: 65px;
  height: 65px;
  position: relative;
  border-radius: 50%;
  margin-right: 20px;
}
.relax {
  background-color: #dc2c6c;
  width: 65px;
  height: 65px;
  position: relative;
  border-radius: 50%;
  margin-right: 20px;
}
.party {
  background-color: purple;
  width: 65px;
  height: 65px;
  position: relative;
  border-radius: 50%;
  margin-right: 20px;
}
.natura {
  background-color: #f6a314;
  width: 65px;
  height: 65px;
  position: relative;
  border-radius: 50%;
}
.image1 {
  padding-left: 12px;
  padding-top: 7px;
}
.image2 {
  padding-left: 12px;
  padding-top: 8px;
}
.image3 {
  padding-left: 11px;
  padding-top: 7px;
}
.image4 {
  padding-left: 14px;
  padding-top: 7px;
}
.image5 {
  padding-left: 12px;
  padding-top: 7px;
}
.cardcontainer1 {
  font-size: 24px;
  color: black;
  position: absolute;
  /*line-height: 11px;*/
  top: 70px;
  margin-left: 13px;
}
.cardcontainer2 {
  font-size: 24px;
  color: black;
  position: absolute;
  top: 70px;
  left: 14px;
}
.text {
  width: 50%;
}
</style>
