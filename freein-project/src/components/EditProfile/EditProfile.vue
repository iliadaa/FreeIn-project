<template>
  <div class="container2">
    <div class="edit-sections">
      <img style="filter: blur(5px)" src="../../assets/editProfileBG.jpg" />
      <div class="card-left">
        <div class="text-color">
          <i class="far fa-user-circle"></i>
          <button>
            <div class="space-between">
            <span class="fas fa-user"></span>
            <span class="section-text">ciao</span>
            </div>
          </button>
          <button>
            <div class="space-between">
            <span class="fas fa-user"></span>
            <span class="section-text">ciao</span>
            </div>
          </button>
          <button>
            <div class="space-between">
            <span class="fas fa-user"></span>
            <span class="section-text">ciao</span>
            </div>
          </button>
          <button>
            <div class="space-between">
            <span class="fas fa-user"></span>
            <span class="section-text">ciao</span>
            </div>
          </button>
          <button>
            <div class="space-between">
            <span class="fas fa-user"></span>
            <span class="section-text">ciao</span>
            </div>
          </button>
        </div>
      </div>

      <!-- 
      <div></div>
      -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container2 {
  width: auto;
  background-color: black;
}

.edit-sections {
  position: relative;
  color: white;
}

.edit-sections img {
  width: 100%;
}

.text-color {
  display: flex;
  color: grey;
  flex-direction: column;
}

button {
  width: auto;
  height: 67px;
  align-items: center;
  /* justify-content: center; */
  border-color: none;
  color: grey;
  display: inline-flex;
  border: transparent;
  /* border-radius: 50%; */
  text-decoration: none;
  border-bottom: 1px solid grey;
}

button:hover {
  background-color: #ea5b0c;
}

.card-left {
  background-color: whitesmoke;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 20%;
  position: absolute;
  left: 20%;
  top: 20%;
  transform: translate(-20%, -20%);
}

.far {
  background-color: #ea5b0c;
  color: white;
  height: 85px;
  display: flex;
  align-items: center;
  font-size: 40px;
  padding-left: 10px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}

.space-between{
  margin-left: 20px;
}

</style>
