<!-- need to be created -->
<template>
  <div class="container">
    <div class="card-group">
      <div class="card card-b">
        <p>Card register</p>
      </div>

      <div class="card card-r">

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
  background-color: white;
  justify-content: center;
  align-items: center;
}

.card-r {
  background-color: #eb6349;
}

.card-b p {
  color: #eb6349;
  font-size: 100px;
}

.card-r p {
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

