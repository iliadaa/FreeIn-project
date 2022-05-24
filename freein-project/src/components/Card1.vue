<template>
<div class="container">
  <div class="card card-b">
    <div class="card card-shadow1">
      <p>ispira</p>
      </div>
    
    
  </div>

  <div class="card card-r">
    <div class="card card-shadow2">
    <p>lasciati</p>
    
    <p style="margin-left:14px; margin-bottom:15px">ispirare</p>
  </div>
  </div>
</div>
</template>

<script>

</script>

<style scoped>
.container{
margin-top: 100px;
align-content: center;
justify-content: center;
display: flex;
}

.card{
height: 600px;
width: 40%;
background-color: #442a63;
justify-content: center;
align-items: center;
}

.card-r{
  background-color: #eb6349;
}

.card-b p{
  color: #eb6349;
  font-size: 100px; 
}

.card-r p{
  color: #442a63;
  font-size: 100px;
  margin-bottom: -70px;
}

.card-shadow1{
  box-shadow: 2px 2px 30px  rgba(25, 25, 25, 0.668);
  width: 100%;
  height: 100%;
}

.card-shadow2{
  box-shadow: 2px 2px 30px  rgba(25, 25, 25, 0.668);
  width: 100%;
  height: 100%;
  background-color: transparent;
}


</style>



