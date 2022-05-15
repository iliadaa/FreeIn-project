<template>
  <div
    class="bg-image"
    style="
      background-image: url('https://images.hdqwalls.com/wallpapers/simple-minimal-mountains-landscape-4k-rc.jpg ');
      height: 100vh;
    "
  >
    <div class="text" style="margin-left: 200px; margin-top: 100px">
      <div
        class="bg-image"
        style="
          background-image: url('https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg');
          height: 10vh;
          margin-bottom: 200px;
          height: 150px;
          width: 13%;
          margin-top: -102px;
        "
      >
        <img
          class="logo"
          src="logo.png"
          style="margin-top: 55px; margin-left: 20px"
        />
      </div>

      <h1 style="font-size: 70px; margin-top: -30px">Viaggia</h1>
      <h1 style="font-size: 70px; margin-top: -30px">Ispira &</h1>
      <br />
      <h1 style="font-size: 70px; margin-top: -50px">Lasciati ispirare.</h1>
    </div>

    <div style="margin-top: 5px; font-weight: 100; margin-left: 350px">
      <div style="margin-top: -5px; font-weight: 100; margin-left: 150px">
        <button @click="seeMore(this.toggle)">Scopri come >></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: {
    toggle: false
  },
  methods: {

  seeMore(toggle){
    if(this.toggle==true){
        router.push('/about')
        console.log(this.toggle)
    }
    console.log("Errore" + this.toggle)
  }

}

};


</script>
