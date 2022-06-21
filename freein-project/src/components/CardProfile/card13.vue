<template>
  <div class="container">
    <div class="card-group">
      <div class="card card-a">
        <div class="illustrations">
          <img src="@/assets/illustration.png" alt="">
        </div>
        <p>"Quanto conta il divertimento in un viaggio?"</p>
      </div>
            <div class="card card-b">
        <p>Esprimi un voto da 1 a 10</p>

        <div class="slidecontainer">
          <VueSlideBar
                  v-model="value2"
                  :min="1"
                  :max="10"
                  :processStyle="slider.processStyle"
                  :lineHeight="slider.lineHeight"
                  :range="slider.range"
                  @callbackRange="callbackRange"
                  :tooltipStyles="{ backgroundColor: '#ea5b0c', borderColor: '#ea5b0c' }">
                </VueSlideBar>
        </div>

        <div class="arrow">
          <a href="http://localhost:8080/#/card14" class="fas fa-angle-right"></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      value2: 8,
      slider: {
        lineHeight: 10,
        processStyle: {
          backgroundColor: '#ea5b0c'
        },
        range: [
          {
            label: '1'
          },
          {
            label: '2'
          },
          {
            label: '3'
          },
          {
            label: '4'
          },
          {
            label: '5'
          },
          {
            label: '6'
          },
          {
            label: '7'
          },
          {
            label: '8'
          },
          {
            label: '9'
          },
          {
            label: '10'
          }
        ]
      }
    }
  },
  methods: {
    callbackRange (val) {
      this.rangeValue = val
    }
  }
}
</script> 
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 40px;
  margin-bottom: 100px;
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
.card-a {
  background-color: #ea5b0c;
}

img {
  width: 100%;
  height: auto;
}
.card-a p {
  color: white;
  font-style: italic;
  font-size: 40px;
  text-align: left;
  margin-left: 100px;
  margin-bottom: 210px;
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
.arrow a {
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
@media (max-width: 575.98px) {
.container {
  margin-top: 20px;
  margin-bottom: 50px;
}
.card-group {
  box-shadow: none;
}
.card {
  box-shadow: 5px 5px 20px;
  height: 400px;
}

img {
  margin-top: 100px;
}
.card-a p {
  font-size: 25px;
  margin-left: 30px;
  margin-right: 30px;
}
.card-b p {
  font-size: 18px;
}
.slidecontainer {
  width: 80%;
}
.arrow {
  padding-right: 15px;
  padding-bottom: 10px;
}
.arrow a {
  width: 40px;
  height: 40px;
  font-size: 20px;
}
}
</style>
