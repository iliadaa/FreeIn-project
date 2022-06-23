<template>
<!--<div class="third-slider-component">-->
    <div class="container">
    <div class="third-slider-imagetext">

        <div class="third-slider-image">
            <img src="@/assets/boy&girl.png" alt="">
        </div>
        
        <div class="third-slider-text">
                <div class="heading">
                    <p>Freein ti porta alla</p>
                    <p>scoperta di nuovi</p>
                    <p>itinerari di viaggio</p>
                </div>
        
                <div class="text1">
                    <p>Conoscerai nuovi itinerari di viaggio</p>
                    <p>attraverso l'esperienza dei tuoi nuovi amici.</p>
                </div>
        </div>

        <div class="third-slider-text2">
                <div class="heading">
                    <p>Freein ti porta alla scoperta di nuovi itinerari di viaggio</p>
                </div>
        
                <div class="text1">
                    <p>Conoscerai nuovi itinerari di viaggio attraverso l'esperienza dei tuoi nuovi amici.</p>
                </div>
        </div>

    </div>
            
        <div class="circles">
            <div class="circle">
                <div class="circle01">
                    <p>1</p>
                </div>
                <div class="circletext1">
                    <h1>ispira</h1>
                    <p>Ripercorri e racconta il</p>
                    <p>tuo viaggio,</p>
                    <p>i tuoi amici vivranno la</p>
                    <p>tua esperienza</p>
                </div>
            </div>

            <div class="circle">
                <div class="circle02">
                    <p>2</p>
                </div>
                    <div class="circletext2">
                        <h1>lasciati ispirare</h1>
                        <p>Scopri le esperienze di</p>
                        <p>viaggio dei tuoi amici,</p>
                        <p>salva quella che ti ispira</p>
                        <p>di piu'</p>
                    </div>
            </div>

            <div class="circle">
                <div class="circle03">
                    <p>3</p>
                </div>
                    <div class="circletext3">
                        <h1>scopri</h1>
                        <p>Scopri che viaggiatore</p>
                        <p>sei, scoprirai il mood piu'</p>
                        <p>adatto a te.</p>
                    </div>
            </div>

            <div class="circle">
                <div class="circle04">
                    <p>4</p>
                </div>
                    <div class="circletext4">
                        <h1>guadagna</h1>
                        <p>Ricrea il tuo itinerario di</p>
                        <p>viaggio,</p>
                        <p>condividi e guadagna</p>
                    </div>
            </div>
        </div>
</div>
</template>

<style scoped>
.container {
    width: 100%;
    height: auto;
}
.third-slider-imagetext {
    display: flex;
    justify-content: space-evenly;
    margin-top: 150px;
}
.third-slider-text {
    margin-top: 20px;
}

.third-slider-text2 {
    display: none;
}

.third-slider-text p {
    text-align: right;
    color: #2B3081;
}
.third-slider-text .heading {
    font-size: 50px;
    font-weight: bold;
    line-height: 40px;
}

.third-slider-text .text1 {
    font-size: 25px;
    line-height: 15px;
    margin-top: 40px;
}

.circles {
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
}

.circle01 {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #2B3081; 
    line-height: 80px;
    text-align: center;
    font-size: 25px;
    color: white;
    margin-left: 40px;
}
.circle02 {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #2B3081; 
    line-height: 80px;
    text-align: center;
    font-size: 25px;
    color: white;
    margin-left: 75px;
}

.circle03 {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #2B3081; 
    line-height: 80px;
    text-align: center;
    font-size: 25px;
    color: white;
    margin-left: 45px;
}

.circle04 {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #2B3081; 
    line-height: 80px;
    text-align: center;
    font-size: 25px;
    color: white;
    margin-left: 45px;
}
.circletext1 {
    text-align: center;
    line-height: 4px;
    color: #2B3081;
}

.circletext2 {
    text-align: center;
    line-height: 4px;
    color: #2B3081;
}
.circletext3 {
    text-align: center;
    line-height: 4px;
    color: #2B3081;
}

.circletext4 {
    text-align: center;
    line-height: 4px;
    color: #2B3081;
}

.circletext1 h1 {
    font-size: 30px;
    letter-spacing: 2px;
    margin-top: 15px;
}
.circletext2 h1 {
    font-size: 30px;
    letter-spacing: 2px;
    margin-top: 15px;
}

.circletext3 h1 {
    font-size: 30px;
    letter-spacing: 2px;
    margin-top: 15px;
}

.circletext4 h1 {
    font-size: 30px;
    letter-spacing: 2px;
    margin-top: 15px;
}


@media (max-width: 575.98px) {
.third-slider-imagetext {
    display: flex;
    justify-content: space-between;
    margin-top: 76px;
    margin-left: 5px;
    margin-right: 5px;
}

.third-slider-image img {
    width: 70%;
    height: auto;
    margin-top: 70px;
}
.third-slider-text {
    display: none;
}

.third-slider-text2 {
    display: block;
}

.third-slider-text2 p {
    text-align: right;
    color: #2B3081;
}
.third-slider-text2 .heading {
    font-size: 18px;
    font-weight: bold;
    line-height: 18px;
}

.third-slider-text2 .text1 {
    font-size: 16px;
    line-height: 18px;
    margin-top: 17px;
}
.circles {
    display: none;
}
}
</style>


<script>
export default {
  name: "Thirdslider",
 
};</script>