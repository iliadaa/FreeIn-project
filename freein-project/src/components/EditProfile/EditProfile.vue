<template>
  <div class="container2">
    <div class="edit-sections">
      <div class="container">
        <div class="wrap">
        <div class="left-section">
          <div class="text-color">
            <i class="far fa-user-circle"></i>
            <button @click="alert">
              <div class="space-margin-left">
                <span class="fas fa-user"></span>
                <span class="section-text">Profilo</span>
              </div>
            </button>
            <button @click="alert">
              <div class="space-margin-left">
                <span class="fas fa-user"></span>
                <span class="section-text">Avatar</span>
              </div>
            </button>
            <button @click="alert">
              <div class="space-margin-left">
                <span style="" class="fas fa-user"></span>
                <span class="section-text">Change Password</span>
              </div>
            </button>
            <button @click="alert">
              <div class="space-margin-left">
                <span class="fas fa-user"></span>
                <span class="section-text">GDPR Tools</span>
              </div>
            </button>
            <button @click="alert">
              <div class="space-margin-left">
                <span class="fas fa-user"></span>
                <span class="section-text">Psico test</span>
              </div>
            </button>
          </div>
        </div>

        <div class="right-section">
          <div class="right-section-text">
            <h2>My account -</h2>
            <p>user info</p>
            
          </div>
          <p style="margin-top:-15px">Your personal datas</p>
          <b-form>
            <b-input-group>
              <b-input class="email" placeholder="Email" />
            </b-input-group>
            <b-input-group>
              <b-input class="email" placeholder="Email" />
            </b-input-group>
            <b-input-group>
              <b-input class="email" placeholder="Email" />
            </b-input-group>
            <b-input-group>
              <b-input class="email" placeholder="Email" />
            </b-input-group>
          </b-form>
        </div>
      </div>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {},
  methods: {
    alert(event) {
      event.preventDefault();
      alert("!!");
    },
  },
};
</script>

<style scoped>
.container2 {
  width: auto;
 
}

.wrap{
  padding-top: 15%;
  display: flex;
  justify-content: center;
}

.edit-sections {
  position: relative;
  color: white;
  background-image: url(../../assets/editProfileBG.jpg);
  background-size: cover;
  min-height: 100vh;
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
  background-color: white;
  display: inline-flex;
  border: transparent;
  /* border-radius: 50%; */
  text-decoration: none;
  border-bottom: 1px solid grey;
}

button:hover {
  background-color: whitesmoke;
}

.left-section {
  flex: 0 0 300px;
}

.right-section-text {
  display: flex;
  align-items: baseline;
}

.right-section-text p {
  font-size: 30px;
  margin-left: 10px;
  display: flex;
  align-items: baseline;
}

.right-section{
  flex: 0 0 auto;
    min-width: 40%;
    padding-left: 20px;
}


.right-section input {
  border: transparent;
  border-radius: 0px;
  margin-bottom: 10px;
}

.far {
  background-color: #ea5b0c;
  color: white;
  height: 85px;
  display: flex;
  align-items: center;
  font-size: 40px;
  padding-left: 10px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}

.space-margin-left {
  margin-left: 20px;
  font-size: 20px;
}

.section-text {
  margin-left: 10px;
}
</style>
