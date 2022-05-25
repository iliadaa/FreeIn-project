<!-- need to be created -->
<template>
  <div class="container">
    <div class="card-group">
      <div class="card card-a">
        <p>Card register</p>
      </div>
      <div class="card card-b">
        <p>Card register</p>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.container {
  margin-top: 100px;
  align-content: center;
  justify-content: center;
  display: flex;
}

.card {
  height: 600px;
  
  justify-content: center;
  align-items: center;
}

.card-b {
  background-color: #eb6349;
}

.card-a{
  background-color: white;
}
.card-a p {
  color: #eb6349;
  font-size: 100px;
}

.card-b p {
  color: #442a63;
  font-size: 100px;
  margin-bottom: -70px;
}

.card-group {
  align-content: center;
  justify-content: center;
  box-shadow: 2px 2px 30px rgba(25, 25, 25, 0.668);
  width: 70%;
  height: 100%;
}
</style>