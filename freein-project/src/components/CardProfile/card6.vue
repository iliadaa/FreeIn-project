<template>
  <div class="container">
    <div class="card-group">
      <div class="card card-a">
        <div class="illustrations">
          <img src="@/assets/illustration.png" alt="" />
        </div>
        <p>"Quanto spendi per una bottiglia di vino?"</p>
      </div>
      <div class="card card-b">
        <div class="answer1">
          <p>soglie espresse in euro €</p>
        </div>
        <div class="answer2">
          <a href="#/card7" @click="asks(answer.value1)">
            <p>{{ answer.value1 }}</p>
          </a>
          <a href="#/card7" @click="asks(answer.value2)">
            <p>{{ answer.value2 }}</p>
          </a>
          <a href="#/card7" @click="asks(answer.value3)">
            <p>{{ answer.value3 }}</p>
          </a>
          <a href="#/card7" @click="asks(answer.value3)">
            <p>{{ answer.value4 }}</p>
          </a>
        </div>
        <div class="arrow">
          <a
            href="http://localhost:8080/#/card7"
            class="fas fa-angle-right"
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      answer: {
        value1: "2-6",
        value2: "7-12",
        value3: "13-22",
        value4: "oltre 23",
      },
    };
  },
  methods: {
    asks(value) {
      this.$store.commit("asksStore", value);
      return value;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 40px;
  margin-bottom: 100px;
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
  text-align: center;
  height: 600px;
  border-radius: 20px;
}
.card-a {
  background-color: #ea5b0c;
}

img {
  width: 100%;
  height: auto;
}
.card-a p {
  color: white;
  font-style: italic;
  font-size: 40px;
  text-align: left;
  margin-left: 100px;
  margin-right: 80px;
  margin-bottom: 210px;
}
.answer2 {
  display: flex;
  justify-content: space-between;
  margin-left: 10%;
  margin-right: 10%;
}
.card-b a {
  text-decoration: none;
}
.card-b p {
  font-size: 30px;
  color: #ea5b0c;
  font-style: italic;
}
.arrow {
  position: absolute;
  bottom: 0;
  right: 0;
  padding-right: 30px;
  padding-bottom: 20px;
}
.arrow a {
  justify-content: center;
  align-items: center;
  display: inline-flex;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 25px;
  text-decoration: none;
  color: white;
  background-image: linear-gradient(to bottom right, #ea5b0c, #2d2e83);
}

@media (max-width: 575.98px) {
  .container {
    margin-top: 20px;
    margin-bottom: 50px;
  }
  .card-group {
    box-shadow: none;
  }
  .card {
    box-shadow: 5px 5px 20px;
    min-height: 250px;
    height: auto;
  }
  .card-a p {
    font-size: 25px;
    margin-left: 30px;
    margin-right: 30px;
  }
  .answer2 {
    display: block;
  }
  .card-b p {
    font-size: 17px;
  }
  .arrow {
    padding-right: 15px;
    padding-bottom: 10px;
  }
  .arrow a {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
}
</style>
