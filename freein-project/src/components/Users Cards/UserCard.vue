<template>
  <div class="container-user">
    <div class="card">
      <h1>Sei un’azienda o un privato?</h1>
      <div class="button-group">
        <b-button class="button business-button"
          ><a href="http://localhost:8080/#/businessprofile"
            >AZIENDA</a
          ></b-button
        >
        <b-button class="button privat-button"
          ><a href="http://localhost:8080/#/businesscard1">PRIVATO</a></b-button
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserCard",
};
</script>
<style scoped>
.container-user {
  display: flex;
  justify-content: center;
}
.card {
  width: 841px;
  margin-top: 40px;
  margin-bottom: 100px;
  height: 660px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  box-shadow: 0px 4px 4px rgbaa(0, 0, 0, 0.25);
}

.button {
  width: 294px;
  height: 67px;
  left: 24px;
  top: 21px;
  background-color: #ea5b0c;
  border-radius: 10px;
  border-color: transparent;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
}
.card > h1 {
  margin-bottom: 100px;
}

.button:hover {
  background-color: #ea5b0c;
  border-color: transparent;
  outline-color: none;
}
.button:active {
  background-color: #ea5b0c;
  border-color: transparent;
}
.button:focus {
  outline-color: transparent;
  background-color: #ea5b0c;
  outline-style: none;
  border-color: none;
}
button.btn.btn-secondary {
  background-color: #ea5b0c;
}

.button-group > .button:not(:last-child) {
  margin-right: 50px;
}
a {
  color: white;
  text-decoration: none;
}
a:hover {
  color: white;
}

@media (max-width: 575.98px) {
.card {
  height: 400px;
  margin-top: 20px;
  margin-bottom: 50px;
}

.button {
  width: 160px;
  height: 60px;
  margin-left: 0;
  top: 0px;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
}
.card > h1 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 50px;  
}

.button-group > .button:not(:last-child) {
  display: block;
  margin-right: 0px;
  margin-bottom: 50px;
}
}
</style>
