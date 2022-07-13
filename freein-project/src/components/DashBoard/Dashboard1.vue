<template>
<div>

<div class="container">
  <div class="hrtag">
    <div class="piggybank"><i class="fas fa-piggy-bank"></i></div>
    <hr>
  </div>
  
  <div class="profile">
    <div class="user">
      <img src="@/assets/user1.svg" alt="">
    </div>
  
    <div class="info">
      <div class="name">
        <p>Paolo Rossi</p>
      </div>
      <div class="email">
        <p>admin@yoursite.com</p>
      </div>
      <div class="change">
        <a href="#/editprofile" class="button">Modifica profilo</a>
      </div>
    </div>
  </div>
  
  
    <div class="table1">
      <h1 class="heading1">il mio guadagno</h1>
        <table>
          <tr>
            <th>Pubblicazioni</th>
            <th>Salvati</th>
            <th>Mi piace</th>
            <th>Guadagno</th>
            <th>Valore in €</th>
            <th>n.</th>
          </tr>
  
          <tr>
            <td class="icons"><img src="@/assets/location.svg" alt="">Itinerario</td>
            <td>6</td>
            <td>6</td>
            <td>6 Passcoin</td>
            <td>0,60</td>
            <td class="numbers">10</td>
          </tr>
  
          <tr>
            <td class="icons"><img src="@/assets/flag1.svg" alt="">Tappa</td>
            <td>12</td>
            <td>12</td>
            <td>12 Passcoin</td>
            <td>0,10</td>
            <td class="numbers">21</td>
          </tr>
  
          <tr>
            <td class="icons"><img src="@/assets/review.svg" alt="">Recensioni</td>
            <td>1</td>
            <td>1</td>
            <td>1 Passcoin</td>
            <td>0,05</td>
            <td class="numbers">3</td>
          </tr>
        </table>
    </div>
  
    <div class="table2">
      <h1 class="heading2">La mia spesa</h1>
        <table>
          <tr>
            <th>Pubblicazioni</th>
            <th>Vendita</th>
            <th>Valore in €</th>
            <th>n.</th>
          </tr>
  
          <tr>
            <td>Palio budget</td>
            <td>6 Passcoin</td>
            <td>0,60</td>
            <td class="numbers">10</td>
          </tr>
  
          <tr>
            <td>Investimento banner</td>
            <td>12 Passcoin</td>
            <td>0,10</td>
            <td class="numbers">21</td>
          </tr>
  
          <tr>
            <td>Acquisti</td>
            <td>1 Passcoin</td>
            <td>0,05</td>
            <td class="numbers">3</td>
          </tr>
        </table>
    </div>
  
    <div class="hrtag2">
      <div>
        <p class="p1"><i class="fas fa-piggy-bank"></i> il tuo saldo &egrave;</p>
      </div>
      <div>
        <p class="p2">100<i class="fas fa-piggy-bank"></i></p>
      </div>
    </div>
    <hr class="hr2">
  
      <div class="piggybank2">
        <p class="p3"><i class="fas fa-piggy-bank"></i>Ricarica subito</p>
      </div>
</div>
</div>
</template>

<style scoped>
.container {
  background-color: rgb(245, 238, 238);
}
.hrtag {
  display: flex;
  justify-content: end;
  background: #ea5b0c;
  padding-bottom: 20px;
  padding-right: 10px;
}
.piggybank {
  font-size: 60px;
  color: white;  
}

hr {
  width: 90%;
  color: white;
  margin-top: 78px;
}
.profile {
  display: flex; 
  margin-left: 10%;
  margin-top: 50px;
}
.user img {
  height: 45px;
  margin-top: 15px;
}
.info {
  margin-left: 30px;
  margin-top: 20px;
}
.profile p {
  line-height: 8px;
}
.name p {
  font-size: 20px;
  font-weight: bold;
  color: gray;
}
.email p {
  font-size: 16px;
  font-style: italic;
  color: gray;
}
.button {
  background-color: #ea5b0c;
  border: none;
  color: white;
  padding: 2px 4px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin-top: 10px;
  margin-left: 40px; 
  cursor: pointer;
}
.heading1 {
  margin-bottom: 20px;
}
.heading2 {
  margin-top: 80px;
  margin-bottom: 20px;
}

h1 {
  font-size: 24px;
  color: white;
  background: #ea5b0c;
  width: 90%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 60px;
  margin-top: 30px;
}
.table1, .table2 {
  margin-left: 10%;
}

.table2 {
  margin-bottom: 120px;
}

table {
  border-collapse: collapse;
  border: hidden;
  width: 90%;
}
.numbers {
  font-size: 30px;
  color: #ea5b0c;
}

th, td {
  font-style: italic;
  font-weight: bold;
  color: gray;
  border: 1px solid rgb(178, 176, 176);
  text-align: left;
  padding: 15px;
  padding-left: 60px;
}
.icons {
  padding-left: 15px;
}

/*td i {
  padding-right: 30px;
}*/

td img {
  height: 45px;
  padding-right: 30px;
}
.hrtag2 {
  display: flex;
  justify-content: space-between;
  width: 81%;
  margin-left: 10%;
}
.hrtag2 i {
  font-size: 40px;
  color: #ea5b0c;
  display: inline-block;
  padding-left: 25px;
  padding-right: 25px;
}

.p1 {
  font-size: 20px;
  color: gray;
}
.p2 {
  font-size: 30px;
  font-style: italic;
  font-weight: bold;
  color: #ea5b0c;
}
.hr2 {
  width: 81%;
  color: rgb(98, 96, 96);
  margin-left: 10%;
  margin-top: 0px;
}
.piggybank2 {
  background: #ea5b0c;
  width: 81%;
  margin-left: 10%;
  margin-bottom: 70px;
}
.piggybank2 i {
  display: inline-block;
  font-size: 38px;
  padding: 9px 27px;
}
.p3 {
  font-size: 20px;
  color: white;
}

@media (max-width: 575.98px) {
.piggybank {
  font-size: 40px;
  padding-top: 30px;
  padding-left: 5px;
}
.profile {
  margin-left: 0%;
  margin-top: 30px;
}
.info {
  margin-left: 25px;
}
.name p {
  font-size: 17px;
}
.email p {
  font-size: 15px;
}
.button {
  font-size: 15px;
  margin-left: 25px; 
}

h1 {
  font-size: 20px;
  padding-left: 10px;
}

.table1, .table2 {
  margin-left: 0%;
}

.table2 {
  margin-bottom: 70px;
}

.numbers {
  font-size: 11px;
}

th, td {
  font-size: 11px;
  padding: 3px;
  padding-left: 3px;
  
}
.icons {
  padding-left: 3px;
}

/*td i {
  padding-right: 3px;
}*/

td img {
  height: 13px;
  padding-right: 2px;
}
.hrtag2 {
  width: 100%;
  margin-left: 0%;
}
.hrtag2 i {
  font-size: 25px;
  padding-left: 5px;
  padding-right: 5px;
}

.p1 {
  font-size: 17px;
}
.p2 {
  font-size: 20px;
}
.hr2 {
  width: 100%;
  margin-left: 0%;
}
.piggybank2 {
  width: 90%;
  margin-left: 5%;
  margin-bottom: 50px;
}
.piggybank2 i {
  font-size: 25px;
  padding: 9px 12px;
}
.p3 {
  font-size: 17px;
}
}

</style>