<template>
  <div class="SecondSliderpage">
    <div class="container"><Header /></div>

    <div class="first-slider">
      <img src="../assets/eiffel.jpg" />
      <div class="first-slider-caption">
        <p>Viaggia</p>
        <p>Ispira &</p>
        <p>Lasciati ispirare.</p>

        <div class="discover">
            <div>
              <a href="#">Scopri come</a>
            </div>
            <div>
              <a href="#"><i class="fas fa-angle-double-right"></i></a>
            </div>
          
        </div>
      </div>
    </div>
    <Secondslider />
    <Thirdslider />
  </div>
</template>
<script>
import Secondslider from "@/components/Secondslider.vue";
import Thirdslider from "@/components/Thirdslider.vue";
import Header from "@/components/Header.vue";
export default {
  name: "SecondSliderpage",
  components: { Secondslider, Thirdslider, Header },
};
</script>

<style>
.SecondSliderpage .navbar {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 10%;
  padding-top: 0;
}

.first-slider {
  position: relative;
  z-index: 100;
}

.first-slider img {
  width: 100%;
}

.first-slider-caption {
  position: absolute;
  text-align: left;
  top: 20%;
  left: 15%;
  bottom: auto;
}

.first-slider-caption p {
  font-size: 60px;
  font-weight: bold;
  color: white;
  line-height: 50px;
}

.discover {
  display: flex;
  margin-left: 305px;
  margin-top: 50px;
}

.first-slider-caption a {
  text-decoration: none;
  color: white;
  font-size: 20px;
}

.first-slider-caption a:hover {
  color: white;
}

.first-slider-caption i {
  color: white;
  font-size: 25px;
  padding-top: 5px;
  padding-left: 10px;
}






</style>
