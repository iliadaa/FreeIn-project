
<template>
  <div class="container">
    <div class="card-group">
      <div class="card card-a">
        <div class="illustrations">
          <img src="@/assets/illustration.png" alt="">
        </div>
        <p>"Zaino in spalla o Valigia con le ruote?"</p>
      </div>
      <div class="card card-b">
          <div class="answer1">
              <a href="">
                <p>Zaino</p> 
              </a>
              <a href="">
                <p>Valigia</p>
              </a>
          </div>
        <div class="arrow">
          <a href="http://localhost:8080/#/testend" class="fas fa-angle-right" @click="testCompleted(registrations)"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: {

    },

    methods: {
      testCompleted(registrations){
        
      }
      
    },

    computed: {
      registrations() {
      return this.$store.state.registrations;
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
  text-align: center;
  height: 600px;
  border-radius: 20px;  
}
.card-a{
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
  margin-left: 80px;
  margin-bottom: 210px;
}
.answer1 {
  display: flex;
  justify-content: space-between;
  margin-left: 20%;
  margin-right: 20%;
}
.card-b a {
  text-decoration: none;
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
  min-height: 250px;
  height: auto;
}
.card-a p {
  font-size: 25px;
  margin-left: 30px;
  margin-right: 30px;
}
.answer1 {
  display: block;
}
.card-b p {
  font-size: 17px;
}
.arrow {
  padding-right: 15px;
  padding-bottom: 10px;
}
.arrow a  {
  width: 40px;
  height: 40px;
  font-size: 20px;
}
}

</style>