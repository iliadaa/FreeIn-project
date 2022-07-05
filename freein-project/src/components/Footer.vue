<template>
  <footer>
    <div class="text-center p-3 text-black" style="background-color: #504e4e">
      <h3 style="color: white">NEWSLETTER</h3>
      <b-container fluid class="form">
        <b-row class="my-4" v-for="type in types" :key="type">
          <b-col sm="4">
            <b-input-group>
              <b-form-input
                :id="`type-${type}`"
                placeholder="Enter your email here"
                :type="type"
              ></b-form-input
              ><b-button
                ><svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#fff"
                    d="M0 0l20 10-20 10v-20zM0 8v4l10-2-10-2z"
                  ></path>
                </svg>
              </b-button>
            </b-input-group>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="container1">
      <div class="d-flex">
        <div class="p-2 flex-fill">
          <img class="logo" src="logo-Freein.png" />
        </div>
        <div class="p-2 flex-fill text-black">
          <h5 class="text-start">Information</h5>
          <ul class="information">
            <li><a href="#/privacy-policy">Privacy notice</a></li>
            <li><a href="#/terms-and-conditions">Conditions of Use</a></li>
            <li><a>About us</a></li>
            <li><a href="#/cookie-policy">Cookie Policy</a></li>
          </ul>
        </div>
        <div class="p-2 flex-fill bd-highlight text-black">
          <h5 class="text-start">User Service</h5>
        </div>
        <div class="p-2 flex-fill bd-highlight text-black">
          <h5 class="text-start">My account</h5>
        </div>
        <div class="p-2 flex-fill bd-highlight text-black">
          <h5 class="text-start">Follow Us</h5>
          <dl>
            <dd>
              Free-in e un marchio di Ada Travl srl Via Punzi 101/D, 70024 Gravina
              in Puglia BA
            </dd>
            <dd>Numero REA BA - 608876</dd>
            <dd>Partita iva 08161930725</dd>
            <dd>Mail: contact@freein.it</dd>
          </dl>
          <div class="text-left">
            <i class="fab fa-facebook-square fa-2x"></i>
            <i class="fab fa-twitter-square fa-2x"></i>
            <i class="fas fa-rss-square fa-2x"></i>
          </div>
        </div>
      </div>
    </div>

    <!--Added-->
    <div class="container">

      <div class="d-flex flex-column bd-highlight mb-3 text-center">
        <div class="p-2 bd-highlight">
          <img class="logo1" src="logo-Freein.png"/>
        </div>
        <div class="p-2 bd-highlight mt-3 mb-n3">
          <h5> Information </h5>
        </div>
        <div class="p-2 bd-highlight mb-n3">
          <a href="#/privacy-policy" class="text-decoration-none text-reset">Privacy Notice</a>
        </div>
        <div class="p-2 bd-highlight mb-n3">
          <a href="#/terms-and-conditions" class="text-decoration-none text-reset">Conditions of Use</a>
        </div>
        <div class="p-2 bd-highlight mb-n3">
          <a href="#" class="text-decoration-none text-reset">About Us</a>
        </div>
        <div class="p-2 bd-highlight">
          <a href="#/cookie-policy" class="text-decoration-none text-reset">Cookie Policy</a>
        </div>

        <div class="p-2 bd-highlight mt-3 mb-n3">
          <h5> Follow Us </h5>
        </div>
        <div class="p-2 bd-highlight mb-n4">
          <p>Free-in e un marchio di Ada Travl srl Via Punzi 101/D, 70024 Gravina in Puglia BA</p>
        </div>
        <div class="p-2 bd-highlight mb-n4">
          <p>Numero REA BA - 608876</p>
        </div>
        <div class="p-2 bd-highlight mb-n4">
          <p>Partita iva 08161930725</p>
        </div>
        <div class="p-2 bd-highlight">
          <p>Mail: contact@freein.it</p>
        </div>

        <div class="d-flex flex-row bd-highlight mb-3 justify-content-center">
          <div class="p-2 bd-highlight"><i class="fab fa-facebook-square fa-2x"></i></div>
          <div class="p-2 bd-highlight"><i class="fab fa-twitter-square fa-2x"></i></div>
          <div class="p-2 bd-highlight"><i class="fas fa-rss-square fa-2x"></i></div>
        </div>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      types: ["email"],
    };
  },
};
</script>

<style scoped>
.flex-fill {
  width: 20%;
}
.logo {
  max-width: 60%;
}
.input-group > .form-control {
  height: auto;
}
.row {
  justify-content: space-around;
}
input#type-email {
  background-color: transparent;
}
button.btn.btn-secondary {
  background-color: transparent;
}
.information > li > a {
  text-decoration: none;
  color: inherit;
}
.container {
  display: none;
}

@media (max-width: 575.98px) {
.container1 {
  display: none;
}
.container {
  display: block;
}
.logo1 {
  max-width: 30%;
}
}
</style>
