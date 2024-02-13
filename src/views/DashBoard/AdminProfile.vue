<template>
  <div>
    <h2>Tableau de bord</h2>

   <!-- Cards -->
    <div class="insights">
      <div class="cards">
        <div class="card-container">
          <div class="card-header">
            <img src="/images/stats.png" alt="">
          </div>
          <div class="card-body">
            <div card-info>
              <h3>Ventes globales</h3>
              <h1>5,000€</h1>
            </div>
            <div class="card-progress">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div class="pourcentage">
                <p>13%</p>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <small>Sur les dernières 48h</small>
          </div>
        </div>
      </div>
      <div class="cards">
        <div class="card-container">
          <div class="card-header">
            <img src="/images/colis.png" alt="">
          </div>
          <div class="card-body">
            <div card-info>
              <h3>Commandes</h3>
              <h1>12</h1>
            </div>
            <div class="card-progress">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div class="pourcentage">
                <p>23%</p>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <small>Sur les dernières 48h</small>
          </div>
        </div>
      </div>
      <div class="cards">
        <div class="card-container">
          <div class="card-header">
            <img src="/images/utilisateurs.png" alt="">
          </div>
          <div class="card-body">
            <div card-info>
              <h3>Utilisateurs inscrits</h3>
              <h1>12</h1>
            </div>
            <div class="card-progress">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div class="pourcentage">
                <p>11%</p>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <small>Sur les dernières 48h</small>
          </div>
        </div>
      </div>
    </div>

    <!-- Commandes recentes -->
    <div class="recent-orders">

    <!-- titre -->
      <div class="ro-title">
        <h2 class="recent-orders-title">Commandes récentes</h2>
        <a href="#" class="show-all"><button>Voir plus</button></a>
      </div>

    <!-- tableau -->
      <table>
        <thead>
         <tr>
          <th>Id</th>
          <th>Date</th>
          <th>Client</th>
          <th>Produit</th>
          <th>Moq</th>
          <th>Prix</th>
          <th>Quantité</th>
          <th>Total</th>
          <th>Status</th>
         </tr>
        </thead>
        <tbody>
          <tr>
            <td>128</td>
            <td>12/12/2022</td>
            <td>Jean Peuplu</td>
            <td>Tapis en laine</td>
            <td>20</td>
            <td>89.99€</td>
            <td>2</td>
            <td>179.98€</td>
            <td>Validée</td>
          </tr>
          <tr>
            <td>129</td>
            <td>12/12/2022</td>
            <td>Fée Nian</td>
            <td>Chaise en Bois</td>
            <td>5</td>
            <td>99.99€</td>
            <td>1</td>
            <td>99.99€</td>
            <td>En cours</td>
          </tr>
        </tbody>
      </table>
    </div>


  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

h2 {
  margin-top: 20px;
}

/* Cards */
svg {
  width: 96px;
  height: 96px;
}
.insights {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px;
  margin: 70px;
  cursor: pointer;

}
.insights .cards {
  background-color:  #b98d68;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s ease-in-out;
}
.insights .cards:hover {
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.619);
}
.cards .card-header span{
  padding: 12px;
  font-size: 20px;
  margin-bottom: 18px;
  
}
.card-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.card-body .card-progress {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 96px;
  height: 96px;
  border-radius: 50%;
}
.card-body svg circle {
  fill: none;
  stroke-width: 16px;
  stroke-dasharray: 226.2;
  stroke-dashoffset: 226.2;
  transform: translate(10px,10px);
  stroke-linecap: round;
  transition: stroke-dashoffset 0.1s ease-in-in;
}
.card-body .pourcentage {
  position: absolute;
  font-weight: 700;
}
.card-footer {
  font-size: 20px;
  font-weight: 600;
}

/* Commandes recentes  */
.recent-orders {
  margin-top: 70px;
  margin-left: 70px;
}
.recent-orders h2 {
  color: #5e3c1a;
}
.recent-orders .ro-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-right: 150px;
}
button {
        background-color: #b98d68;
        color: #5e3c1a;
        border: none;
        border-radius: 5px;
        margin-top: 10px;
        margin-bottom: 15px;
        padding: 5px;
        margin-top: 30px;
        width: 150px;
        height: 40px;
        border-radius: 20px;
        border: 1px solid #5e3c1a;
        cursor: pointer;
        font-weight: bold;
    }

    button:hover {
        background-color: #5e3c1a;
        color: #cca88c;
    }
    th {
  padding: 20px;
  background-color:#b98d68;
  color: #5e3c1a;
  text-align: center;
  
}

    td {
  padding: 20px;
  background-color: #dec5b1;
  border: 2px solid #b98d68;
  color: #5e3c1a;
  
}

table {
  border-collapse: collapse;
  margin-bottom: 30px;
}

.recent-orders p {
  text-align: left;
  margin: 20px;
  padding-left: 150px;
  color: #472e16;
  font-size: 15px;
  font-weight: bold;
  }
  
</style>