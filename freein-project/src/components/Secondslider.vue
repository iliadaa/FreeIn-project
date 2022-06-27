<template>
<!--<div class="second-slider-component">-->
    <div class="container">
    <div class="second-slider-imagetext">
        <div class="second-slider-image">
            <img src="@/assets/girls.png" alt="">
        </div>
        
        <div class="second-slider-text">
                <div class="heading">
                    <p>Freein il primo vero </p>
                    <p>Social travel</p>
                    <p>che ti premia.</p>
                </div>
        
                <div class="text1">
                    <p>Freein ti premia</p>
                </div>
        
        
                <div class="text2">
                    <p>Crea e condividi il tuo itinerario e</p>
                    <p>guadagnerai ogni volta che i tuoi amici lo</p>
                    <p>salveranno</p>
                </div>
        
                <div class="text3">
                    <p>Potrai spendere i tuoi crediti scegliendo</p>
                    <p>le tappe che ti ispirano di piu'</p>
                </div>
        
                <div class="text4">
                    <p>Se sei un'azienda turistica potrai utilizzare</p>
                    <p>i tuoi crediti sponsorizzando la tua attivita'</p>
                </div>

                <div class="function">
                    <div><a href="#">Scopri come funziona</a></div>
                    <div><a href="#"><i class="fas fa-angle-double-right"></i></a></div>
                </div>
        </div>

        <div class="second-slider-text2">
                <div class="heading">
                    <p>Freein il primo vero Social travel che ti premia.</p>
                </div>
                <!--<div class="function">
                    <div><a href="#">Scopri come funziona</a></div>
                    <div><a href="#"><i class="fas fa-angle-double-right"></i></a></div>
                </div>-->
        </div>
    </div>
                <div class="text5">
                    <p>Freein ti premia</p>
                </div>
        
        
                <div class="text6">
                    <p>Crea e condividi il tuo itinerario e guadagnerai ogni volta che i tuoi amici lo salveranno</p>
                </div>
        
                <div class="text7">
                    <p>Potrai spendere i tuoi crediti scegliendo le tappe che ti ispirano di piu'</p>
                </div>
        
                <div class="text8">
                    <p>Se sei un'azienda turistica potrai utilizzare i tuoi crediti sponsorizzando la tua attivita'</p>
                </div>

                <div class="function2">
                    <div><a href="#">Scopri come funziona</a></div>
                    <div><a href="#"><i class="fas fa-angle-double-right"></i></a></div>
                </div>
</div>
</template>

<style scoped>
.container {
    width: 100%;
    height: auto;
}
.second-slider-imagetext {
    display: flex;
    justify-content: space-evenly;
    margin-top: 150px;
}

.second-slider-image {
    margin-top: 180px;
}

.second-slider-text {
    margin-top: 20px;
}

.second-slider-text2 {
    display: none;
}
.second-slider-text p {
    text-align: right;
    color: #ea5b0c;
}
.second-slider-text .heading {
    font-size: 50px;
    font-weight: bold;
    line-height: 40px;
}

.second-slider-text .text1 {
    font-size: 25px;
    line-height: 15px;
    margin-top: 30px;
}

.second-slider-text .text2, .text3, .text4 {
    font-size: 25px;
    line-height: 15px;
    margin-top: 40px;
}
.function {
    display: flex;
    float: right;
    margin-top: 40px;
}

.function a {
  text-decoration: none;
  color: #ea5b0c;
  font-size: 18px;
}
.function i {
  color: #ea5b0c;
  font-size: 25px;
  padding-top: 3px;
  padding-left: 10px;
}

.text5, .text6, .text7, .text8  {
  display: none;
}
.function2 {
    display: none;
}

@media (max-width: 575.98px) {
.second-slider-imagetext {
    display: flex;
    justify-content: space-evenly;
    margin-top: 80px;
}

.second-slider-image img {
    width: 100%;
    height: auto;
    margin-top: -170px;
}

.second-slider-text {
    display: none;
}
.second-slider-text2 {
    display: block;
}
.second-slider-text2 p {
    text-align: right;
    color: #ea5b0c;
}
.second-slider-text2 .heading {
    font-size: 20px;
    font-weight: bold;
    line-height: 24px;
}

.second-slider-text .text1 {
    display: none;
}

.second-slider-text .text2, .text3, .text4 {
    display: none;
}
.function {
    display: none;
}

.function a {
    display: none;
}
.function i {
    display: none;
}

.text5, .text6, .text7, .text8  {
  display: block;
  text-align: center;
  color: #ea5b0c;
  font-size: 16px;
  line-height: 20px;
}
.function2 {
    display: block;
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

.function2 a {
  text-decoration: none;
  color: #ea5b0c;
  font-size: 14px;
}
.function2 i {
  color: #ea5b0c;
  font-size: 15px;
  padding-top: 1px;
  padding-left: 5px;
}


/*.second-slider-imagetext {
    display: flex;
    justify-content: space-evenly;
    margin-top: 80px;
}

.second-slider-image img {
    width: 100%;
    height: auto;
    margin-top: -170px;
}

.second-slider-text {
    display: none;
}

.second-slider-text2 {
    display: block;
}
.second-slider-text2 p {
    text-align: right;
    color: #ea5b0c;
}
.second-slider-text2 .heading {
    font-size: 22px;
    font-weight: bold;
    line-height: 26px;
}

.text1, .text2, .text3, .text4 {
    display: none;
}
.second-slider-text2 .function {
    margin-top: 10px;
}

.second-slider-text2 .function a {
  text-decoration: none;
  color: #ea5b0c;
  font-size: 14px;
}
.second-slider-text2 .function i {
  color: #ea5b0c;
  font-size: 14px;
  padding-top: 8px;
  padding-left: 2px;
}*/
}
</style>


<script>
export default{
    name:"Secondslider",
}
</script>