<template>
  <div class="container2">
    <div class="edit-sections">
      <div class="container">
        <div class="wrap">
          <div class="left-section">
            <div class="text-color">
              <img class="img1" src="@/assets/user2.svg" alt="" />
              <!--<i class="far fa-user-circle"></i>-->
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
            <div class="right-p">
              <p>Your personal datas</p>
            </div>

            <b-form>
              <b-input-group class="input-gender">
                <!--<i class="fa-regular fa-user"></i>-->
                <i class="fa-solid fa-user"></i>
                <i class="fa-solid fa-user"></i>
                <label>Gender</label>

                <label class="radio-checkBox"
                  >Male
                  <input
                    v-if="takingValue.gender == 'Uomo'"
                    type="radio"
                    checked="checked"
                    name="radio"
                    @click="switchGender(inSession, genderX)"
                  />
                  <input
                    v-else
                    type="radio"
                    name="radio"
                    @click="switchGender(inSession, genderX)"
                  />
                  <span class="checkmark"></span>
                </label>
                <label class="radio-checkBox"
                  >Female
                  <input
                    v-if="takingValue.gender == 'Femmina'"
                    type="radio"
                    checked="checked"
                    name="radio"
                    @click="switchGender(inSession, genderY)"
                  />
                  <input
                    v-else
                    type="radio"
                    name="radio"
                    @click="switchGender(inSession, genderY)"
                  />
                  <span class="checkmark"></span>
                </label>
              </b-input-group>
              <b-input-group>
                <div class="right-labelIcon">
                  <i class="fa-regular fa-user"></i>
                  <input
                    type="text"
                    class="rightSectionInputs"
                    v-model="name"
                    :placeholder="takingValue.name"
                  />
                  <label>First Name</label>
                </div>
              </b-input-group>

              <b-input-group>
                <div class="right-labelIcon">
                  <i class="fa-solid fa-user-group"></i>
                  <input
                    type="text"
                    class="rightSectionInputs"
                    v-model="surname"
                    :placeholder="takingValue.surname"
                  />
                  <label>Last Name</label>
                </div>
              </b-input-group>

              <b-input-group class="input-group-email">
                <div class="right-labelIcon">
                  <i class="fa-regular fa-envelope"></i>
                  <input
                    type="text"
                    class="rightSectionInputs"
                    v-model="email"
                    :placeholder="takingValue.email"
                  />
                  <label>e mail</label>
                </div>
              </b-input-group>
              <hr class="hr1" />
              <div class="company-details">
                <h2>Company Details</h2>
                <b-input-group class="input-group-email" style="">
                  <div class="right-labelIcon">
                    <i class="fa-solid fa-sign-hanging"></i>
                    <input
                      type="text"
                      class="rightSectionInputs"
                      :placeholder="null"
                    />
                    <label>Company name</label>
                  </div>
                </b-input-group>
              </div>

              <hr class="hr1" />

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

                <div class="div1">
                  <input type="checkbox" value="1" id="flexCheckDefault2" />
                  <label class="form-check-label" for="flexCheckDefault2">
                    <p>I agree to the Terms of Service & Privacy Policy</p>
                  </label>
                </div>

                <br />
                <button v-b-modal.modal-1 type="button" class="save">
                  <p>Save</p>
                  <b-modal
                    no-close-on-backdrop
                    id="modal-1"
                    title="FREE-IN"
                    v-model="show"
                    class="b-modal"
                  >
                    <p class="my-4">
                      Salve se vuole salvare correttamente i cambiamenti dovrà
                      eseguire nuovamente il log-in!
                    </p>
                    <template #modal-footer>
                      <div class="alert-buttons">
                        <button
                          class="alert-button"
                          @click="(show = false), saveChanges(inSession)"
                        >
                          Si
                        </button>
                        <button class="alert-button" @click="show = false">
                          No
                        </button>
                      </div>
                    </template>
                  </b-modal>
                </button>
              </div>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import usersJson from "/Users.json";
import axios from "axios";

export default {
  data() {
    return {
      show: false,
      users: usersJson.registrations,
      name: "",
      surname: "",
      email: "",
      genderX: "Uomo",
      genderY: "Femmina",
      timer: false,
    };
  },

  methods: {
    //need a new method that is going to let chanePage if all the forms are compiled
    //correctly :)

    alert(event) {
      event.preventDefault();
      alert("!!");
    },
    switchGender(inSession, gender) {
      inSession[0].userObj.gender = gender;
      console.log(inSession[0].userObj);
    },
    saveChanges(inSession) {
      var i;
      //console.log(this.name, this.surname, this.email);
      console.log(inSession[0].userObj, " Prima");
      console.log(inSession[0].userObj, " Dopo");
      console.log(this.users[0].userObj.profileTest);
      if (this.email.includes("@gmail" || "@outlook" || "@yahoo")) {
        for (i = 0; i < this.users.length; i++) {
          if (this.users[i].userObj.name.includes(inSession[0].userObj.name)) {
            console.log(i);
            console.log(this.users);
            inSession[0].userObj.name = this.name;
            inSession[0].userObj.surname = this.surname;
            inSession[0].userObj.email = this.email;
            this.replaceItem(
              this.users[i].userObj.id,
              this.users[i].userObj,
              inSession
            );
            break;
          } else {
            continue;
          }
        }
      } else {
        alert("L'email deve contenere una @ seguita da: gmail, outlook..");
      }
      console.log("Sto uscendo dal for dopo il return");

      /*
      this.$router.push({
        name: "Privatprofile",
      });
      */
    },
    async replaceItem(userId, userToReplace, inSession) {
      const res = await axios.patch(
        `http://localhost:3000/registrations/` + userId,
        {
          userObj: {
            id: userToReplace.id,
            email: this.email,
            password: userToReplace.password,
            change: userToReplace.change,
            name: this.name,
            surname: this.surname,
            gender: inSession[0].userObj.gender,
            testDone: userToReplace.testDone,
            roles: [userToReplace.roles],
            profileTest: {
              name: userToReplace.profileTest.name,
              description: userToReplace.profileTest.description,
              arte: userToReplace.profileTest.arte,
              mare: userToReplace.profileTest.mare,
              cibo: userToReplace.profileTest.cibo,
              relax: userToReplace.profileTest.relax,
              party: userToReplace.profileTest.party,
              nature: userToReplace.profileTest.nature,
            },
            testAnswers: userToReplace.testAnswers,
            paymentMethod: userToReplace.paymentMethod,
            agency: {
              ragioneSociale: userToReplace.agency.ragioneSociale,
              indirizzoMailAziendale:
                userToReplace.agency.indirizzoMailAziendale,
              espositore: userToReplace.agency.espositore,
            },
          },
        }
      );
    },
  },
  computed: {
    inSession() {
      return this.$store.state.inSession;
    },
    takingValue: function () {
      console.log(this.inSession[0].userObj.name);
      return this.inSession[0].userObj;
    },
  },
};
</script>

<style scoped>
.radio-checkBox {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.radio-checkBox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 4px;
  left: 20px;
  width: 12px;
  height: 12px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.radio-checkBox:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.radio-checkBox input:checked ~ .checkmark {
  background-color: #ea5b0c;
  width: 12px;
  height: 12px;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.radio-checkBox input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.radio-checkBox .checkmark:after {
  top: 4px;
  left: 4px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: white;
}

.container2 {
  width: auto;
}
.wrap {
  padding-top: 12%;
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
/*.far {
  background-color: #ea5b0c;
  color: white;
  height: 85px;
  display: flex;
  align-items: center;
  font-size: 40px;
  padding-left: 10px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}*/

.img1 {
  background-color: #ea5b0c;
  height: 80px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 70%;
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
.input-gender i {
  color: grey;
  margin-left: -15px;
  margin-top: -5px;
}
.input-gender label {
  position: relative;
  left: 25px;
  font-size: 10px;
  color: grey;
}
.input-gender input {
  position: relative;
  left: 10px;
  top: 3px;
}
.rightSectionInputs {
  position: absolute;
  left: 100px;
  height: 40px;
  width: 86.8%;
  color: grey;
}
.rightSectionInputs:focus {
  outline: none;
  background-color: whitesmoke;
  border-left: 1px solid #ea5b0c;
}
.rightSectionInputs:hover {
  background-color: whitesmoke;
  border-left: 1px solid #ea5b0c;
}
.right-labelIcon {
  background-color: white;
  margin-left: -1px;
  margin-bottom: 10px;
  height: 40px;
  width: 102px;
}
.right-labelIcon label {
  margin-left: 35px;
  margin-top: -5px;
  font-size: 10px;
  color: grey;
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
.right-p {
  margin-top: -15px;
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
/*
.flex-checkbox {
  display: flex;
  color: grey;
  align-items: baseline;
  margin-right: -10px;
}
.flex-checkbox p {
  margin-left: 20px;
  margin-top: 0px;
}
.flex-checkbox label {
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 15px;
  width: 15px;
  position: relative;
  top: 5px;
  left: 1px;
}
.flex-checkbox input {
  margin-right: 25px;
}
.flex-checkbox input[type="checkbox"] {
  visibility: hidden;
}
.flex-checkbox input[type="checkbox"]:checked + label {
  background-color: #ea5b0c;
  border-color: grey;
}
.flex-checkbox input[type="checkbox"]:checked + label:after {
  opacity: 1;
}
*/
::placeholder {
  font-size: 10px;
  padding-left: 25px;
}
/*
.check-box {
  background-color: white;
  display: flex;
  margin-bottom: 10px;
}
*/
.input-group-email {
  margin-bottom: -15px;
}
.company-details h2 {
  font-size: 15px;
  margin-top: -10px;
}
.company-details .right-labelIcon {
  width: 122px;
}
.company-details input {
  width: 84%;
  margin-left: 20px;
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
.save {
  background-color: #ea5b0c;
  color: white;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  border-color: transparent;
  margin-top: 30px;
}
.save:hover {
  border-color: black;
  background-color: #ea5b0c;
}
.save p {
  padding-left: 25px;
  padding-top: 15px;
}

.alert-buttons button {
  background-color: #ea5b0c;
  color: white;
  margin-left: 20px;
  width: 30px;
  height: auto;
  border-radius: 5px;
}
.hr1 {
  color: #ea5b0c;
  opacity: 100%;
  height: 2px;
}
@media (max-width: 575.98px) {
  .wrap {
    display: block;
  }
  /*.far {
  height: 67px;
}*/
  .input-gender {
    width: 79%;
  }
  .rightSectionInputs {
    width: 60%;
  }
  ::placeholder {
    padding-left: 10px;
  }
  .company-details .right-labelIcon {
    width: 106px;
  }
  .company-details input {
    width: 59%;
    margin-left: 4px;
  }
  .option input {
    margin-right: 2px;
  }
  .check {
    margin-left: 58px;
    margin-bottom: 30px;
  }
  .disclaimer-bottom-left {
    text-align: left;
  }
  .disclaimer-bottom-left input {
    margin-right: 2px;
    margin-top: -5px;
  }
  .save {
    margin-top: 15px;
    margin-bottom: 30px;
    margin-left: 60%;
  }
  .hr1 {
    width: 79%;
  }
  .div1 {
    display: flex;
  }
  .div1 p {
    font-size: 12px;
  }
}
</style>
