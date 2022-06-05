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
            <p style="margin-top: -15px">Your personal datas</p>

            <b-form>
              <b-input-group class="input-gender">
                <span style="color: grey" class="fa-regular fa-user"></span>
                <label style="color: grey">Gender</label>
                <div class="flex-checkbox">
                  <input type="checkbox" checked id="checkbox" />
                  <label for="checkbox">
                    <p>Male</p>
                  </label>
                  <input type="checkbox" checked id="checkbox" />
                  <label for="checkbox">
                    <p>Male</p>
                  </label>
                </div>
              </b-input-group>
              <b-input-group>
                <i class="fa-regular fa-user"></i>
                <b-input class="firstName" placeholder="First Name" />
              </b-input-group>
              <b-input-group>
                <i class="fa-solid fa-user-group"></i>
                <b-input class="lastName" placeholder="Last Name" />
              </b-input-group>
              <b-input-group class="input-group-email">
                <i class="fa-regular fa-envelope"></i>
                <b-input class="email" placeholder="e mail" />
              </b-input-group>
              <hr style="color: orange; opacity: 100%; height: 2px" />
              <div class="company-details">
                <h2>Company Details</h2>
                <b-input-group class="input-group-email">
                  <i class="fa-regular fa-envelope"></i>
                  <b-input class="email" placeholder="Company name" />
                </b-input-group>
              </div>
              <hr style="color: orange; opacity: 100%; height: 2px" />
              <div class="option">
                <h2>Options</h2>
                <div class="check">
                  <input type="checkbox" value="2" id="flexCheckDefault1" />
                  <label class="form-check-label" for="flexCheckDefault1">
                    Newsletter
                  </label>
                </div>
              </div>
              <div class="disclaimer-bottom-left">
                <p>Don't worry, you can change your username later</p>
                <input type="checkbox" value="1" id="flexCheckDefault2" />
                <label class="form-check-label" for="flexCheckDefault2">
                  I agree to the Terms of Service & Privacy Policy
                </label>
              </div>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
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

.wrap {
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

.right-section {
  flex: 0 0 auto;
  min-width: 60%;
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

.right-section i {
  position: absolute;
  z-index: 1;
  color: gray;
  padding-top: 10px;
  padding-left: 10px;
}

.input-gender {
  background-color: white;
  margin-left: -1px;
  margin-bottom: 10px;
  height: 40px;
  display: flex;
  align-items: baseline;
  padding-top: 6px;
  padding-left: 10px;
}

.input-gender label {
  position: relative;
  bottom: 10px;
  left: 10px;
}

.input-gender input {
  position: relative;
  left: 20px;
}

.flex-checkbox {
  display: flex;
  color: grey;
  align-items: baseline;
}

.flex-checkbox p {
  margin-left: 20px;
  margin-top: -5px;
}

.flex-checkbox label {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 15px;
  width: 15px;
  position: relative;
  top: 10px;
}

.flex-checkbox input[type="checkbox"] {
  visibility: hidden;
}

.flex-checkbox input[type="checkbox"]:checked + label {
  background-color: #66bb6a;
  border-color: #66bb6a;
}

.flex-checkbox input[type="checkbox"]:checked + label:after {
  opacity: 1;
}

::placeholder {
  font-size: 10px;
  padding-left: 25px;
}

.check-box {
  background-color: white;
  display: flex;
  margin-bottom: 10px;
}

.input-group-email {
  margin-bottom: -15px;
}

.company-details h2 {
  font-size: 15px;
  margin-top: -10px;
}

.option h2 {
  font-size: 15px;
}

.option input {
  margin-right: 5px;
}

.check {
  margin-left: 58px;
}

.disclaimer-bottom-left {
  position: relative;
  text-align: right;
}

.disclaimer-bottom-left input {
  margin-right: 5px;
}
</style>
