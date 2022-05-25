<!-- need to be created -->
<template>
  <div class="container">
    <div class="card-group">
      <div class="card card-a">
        <p>Scopri che viaggiatore sei in pochi passi</p>
      </div>
      <div class="card card-b">
        <a href="#"><i class="fas fa-chevron-circle-right"></i></a>
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
  font-size: 45px;
  font-weight: bold;
  text-align: left;
  padding-left: 60px;
  padding-top: 80px;
}
.card-b {
  
}
.card-b i {
  font-size: 45px;
  color: #2d2e83;
}



</style>