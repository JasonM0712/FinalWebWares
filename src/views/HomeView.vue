<template>
  <div class="home">


    <!-- Bannière Cécile -->

    <div>
      <div v-if="online" class="hautBanniere">
        <h2 class="textHB">Bonjour USER</h2>
      </div>

      <div v-if="!online" class="hautBanniere">
        <h2 class="textHB">Profitez de 15% de réduction sur votre prochaine commande</h2>
      </div>
    </div>

  <section class="banniere">

    <div v-if="online" class="txtB" >
      <h3>Bonjour USER, vos produits favoris ont été mis à jour.</h3>
      <p>Jetez un coup d'œil pour découvrir les nouveautés !
      </p>
      <button>Voir les produits</button>
    </div>

    <div v-if="!online" class="txtB">
      <h3>Bienvenue sur WebWares,</h3>
      <p>Venez découvrir nos produits de qualité à des prix abordables, livrés rapidement chez vous en quelques clics.
      </p>
      <button>
        <router-link to="/loginpage" class="btnCo">Se connecter</router-link>
      </button>


    </div>

      <video src="@/assets/video.mp4" loop autoplay muted></video>
    
  </section>


  <!-- Promo Cécile -->


  <section class="promo">

    <div class="banPromo">
      <h4>Nos promos du moment</h4>
    </div>
    <!-- En ligne, faut voir btn Ajouter au panier mais sinon section = la même -->


    <div class="box">

      <div class="card cardL">
        <div class="elements imgProd">
          <img src="@/assets/deco-1.jpg" alt="Déco">
        </div>

        <div class="elements nameP">
          <h2>Déco</h2>
        </div>

        <div class="elements descriptionP">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, excepturi. <br><br>
            <strong v-if="online">49.99€</strong>
          </p>
        </div>

        <router-link to="/panierview" v-if="online">
    <button class="btnOnline">Ajouter au panier</button>
    </router-link>
        
      </div>


      <div class="card cardC">
        <div class="elements imgProd">
          <img src="@/assets/luminaire-1.jpg" alt="luminaire1">
        </div>

        <div class="elements nameP">
          <h2>Luminaire</h2>
        </div>

        <div class="elements descriptionP">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, excepturi. <br><br>
            <strong v-if="online">129.99€</strong>
          </p>
        </div>

        <router-link to="/panierview" v-if="online">
    <button class="btnOnline">Ajouter au panier</button>
    </router-link>
        
      </div>


      <div class="card cardR">
        <div class="elements imgProd">
          <img src="@/assets/mobilier-4.jpg" alt="canapé">
        </div>

        <div class="elements nameP">
          <h2>Canapé</h2>
        </div>

        <div class="elements descriptionP">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, excepturi. <br><br>
            <strong v-if="online">299.99€</strong>
          </p>
        </div>

        <router-link to="/panierview" v-if="online">
    <button class="btnOnline">Ajouter au panier</button>
    </router-link>
        
      </div>

    </div>

  </section>







<!-- Nouveaux produits Cécile -->

<div class="mieuxNotesTitle">
      <h2>Nouveautés</h2>
    </div>

  <section class="newProd">

    <div class="newsP">

      <div class="textNewP">
        <h2>Nos nouveautés</h2>
        <p>Des designs exclusifs qui transforment <br> l'ordinaire en extraordinaire.</p>
      </div>


      <div class="cols">
        <div class="col">
          <img src="@/assets/tapis-4.jpg">
          <div class="imgTNewP">
          </div>
        </div>

        <div class="col">
          <img src="@/assets/deco-2.jpg">
          <div class="imgTNewP">
          </div>
        </div>

        <div class="col">
          <img src="@/assets/luminaire-3.jpg">
          <div class="imgTNewP">
          </div>
        </div>
      </div>
    </div>


  </section>









  <!-- Mieux notés Cécile -->

    <div class="mieuxNotesTitle">
      <h2>Les mieux notés</h2>
    </div>

  <section class="mieuxNotes">

    
    <div class="containerMN">
      <div class="prodMN prodMN1">
        <div class="content">
        <!-- <img src=""> -->
        <h3>{Tapis2}</h3>
        <span>Embellisez vos sols !</span>
        </div>
      </div>
    </div>

    <div class="containerMN">
      <div class="prodMN prodMN2">
        <div class="content">
        <!-- <img src=""> -->
        <h3>{Vase deco-3}</h3>
        <span>Donnez vie à vos fleurs.</span>
        </div>
      </div>
    </div>

    <div class="containerMN">
      <div class="prodMN prodMN3">
        <div class="content">
        <!-- <img src=""> -->
        <h3>{Table basse 1}</h3>
        <span>Rangement malin pour un sommeil paisible.</span>
        </div>
      </div>
    </div>

  </section>








  <!-- Devenir partenaire Priscy -->
  <div class="mieuxNotesTitle">
      <h2>Partenariats & Contact</h2>
    </div>
  
  <div class="partenaire">
        <div class="part1">
          <h1>Devenir partenaire</h1>
          <p>WebWares: votre partenaire de confiance pour la création de vos projets</p>
          <button>En savoir plus</button>
        </div>

        <div class="part2">
          <img src="@/assets/imgpartenaire2.webp" alt="">
        </div>
      </div>







<!-- Contact Priscy -->
  <section>
    <div class="contact">
      <div class="container">
        <div class="cont1">
          <h3>Nous contacter</h3>
          <h1>Avez vous des questions ?</h1>
          <button class="btn">Nous contacter</button>
        </div>

        <div class="cont2">
          <img src="@/assets/telephone.png" alt="">
          <p>0800 98 68 21</p>
        </div>

        <div class="cont3">
          <img src="@/assets/courrier.png" alt="">
          <p>support@webwares.com</p>
        </div>
      </div>
    </div>
  </section>


  </div>
</template>


<script>

import VanillaTilt from 'vanilla-tilt';
// import { app } from 'vue';



export default {

  data() {
    return {
      online: this.$store.getters.userCo,
    }
  },

  mounted() {
          VanillaTilt.init(document.querySelector(".card"), {
          max: 25,
          speed: 400
        })
          VanillaTilt.init(document.querySelector(".cardL"), {
          max: 25,
          speed: 400
        }),
          VanillaTilt.init(document.querySelector(".cardC"), {
          max: 25,
          speed: 400
        }),
          VanillaTilt.init(document.querySelector(".cardR"), {
          max: 25,
          speed: 400
        })
    },

}

</script>

<style scoped>


/* Bannière Cécile */
.hautBanniere{
  /* background-color: red; */
  width: 100%;
  height: 80px;
  display: block;
  text-align: center;
margin-top: 150px;
  
}

.textHB{
  margin: 10px auto;
  padding-top: 25px;
  font-size: 20px;
}


.banniere{
  background-color: #cca88c;
  height: 400px;
  margin: 0 auto;
  display: flex;

}

.txtB{
  width: auto;
  height: auto;
  float: left;
  margin: 100px auto;
  margin-left: 200px;
  /* background-color: #dec5b1; */
  
}

.txtB p{
  margin: 30px 0 70px 0;
  
}


.txtB button {
  background-color: #b98d68;
  color: #5e3c1a;
  border: none;
  border-radius: 5px;
  /* margin-top: 20px; */
  /* margin-bottom: 15px; */
  padding: 5px;
  /* margin-top: 30px; */
  width: 150px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #5e3c1a;
  cursor: pointer;
  font-weight: bold;
}

.txtB button:hover {
  background-color: #5e3c1a;
  color: #cca88c;
}



.banniere video{
  position: relative;
  height: 400px;
  float: right;
}

video{
  padding-left: 200px;
  
}

.btnCo{
  text-decoration: none;
  color: #5e3c1a;
}

.btnCo:hover {
  color: #cca88c;
}

/* Bannière = Media queries pour s'adapter aux différentes tailles d'écrans */
@media (max-width: 768px) {
  .hautBanniere {
    /* display: none; */
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .hautBanniere .textHB {
    font-size: 18px;

  }
}

@media (max-width: 768px) {
  .banniere video {
    display: none;
  }

  .banniere::after {
    content: "";
    display: block;
    /* background-image: url("@/assets/deco-1.png"); */
    background-size: cover;
    background-position: center;
    height: 200px;
    
  }
}


/* Promo Cécile */

section.promo{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
}

.banPromo h4{
  margin: 60px;
  padding-top: 20px;
  font-size: 40px;
}
section.promo{
  /* background-color: orange; */
  width: 100%;
  height: 600px;
}

.banPromo{
  background-color: #f1f1f1;
  width: 100%;
  height: 62px;

}

.box{
  position: relative;
  display: flex;
  width: 100%;
  border-radius: 20px;
  transform-style: preserve-3d;
  flex-wrap: wrap;
  justify-content: center;
  margin: 120px auto;

}

.box .card{
  margin: 8px auto;
  position: relative;
  background: rgba(222, 197, 177, 0.6);
  width: 300px;
  min-height: 400px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(222, 197, 177, 0.8);
  border-left: 1px solid rgba(222, 197, 177, 0.9);
  border-radius: 20px;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.3);
  transform-style: preserve-3d;
}
.box:hover {
  background-color: transparent;
}
@media (max-width: 768px) {
  .box .card {
    width: 100%; /* Cartes prennent 100% de la largeur lorsqu'elles sont empilées */
    max-width: 400px; /* Limitez la largeur maximale pour éviter une extension excessive */
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    margin: 0;
    top: 0;
    left: 0;
  }

}


.card.cardL{
  right: -150px;
  display: flex;
}

.card.cardR{
  left: -150px;
  display: flex;
}

.elements{
  position: absolute;
  top: 50px;
  left: -30px;
  width: 100px;
  height: 100px;
  background: rgba(222, 197, 177, 0.2);
  transform: translateZ(80px);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(222, 197, 177, 0.8);
  border-top: 1px solid rgba(222, 197, 177, 0.9);
  border-left: 1px solid rgba(222, 197, 177, 0.9);
  border-radius: 10px;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.3);

}


.elements.imgProd{
  top: -30px;
  width: 200px;
  height: 200px;
  padding: 10px;
  z-index: 1;

}

.elements.imgProd img{
  /* position: absolute; */
  width: 100%;
  height: 90%;
  margin: 10px auto;
  border-radius: 8px;
  border: 1px solid rgba(222, 197, 177, 0.8);
  border-top: 1px solid rgba(222, 197, 177, 0.9);
  border-left: 1px solid rgba(222, 197, 177, 0.9);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.3);
  
  

}

.elements.nameP{
  top: 230px;
  left: initial;
  width: 100%;
  padding: 30px;
  text-align: right;
  transform: translateZ(100px);
  background-color: transparent;
  border: none;
  backdrop-filter: blur(0px);
  color: #472e16;
  box-shadow: none;
  transition: 0.3s;
  transition-delay: 0.1s;

}

.card:hover .elements.nameP{
  left: 30px;
  top: 30px;
  
}

.elements.descriptionP{
  top: initial;
  margin: 0 auto;
  bottom: 80px;
  right: -20px;
  width: 60%;
  padding: 5px;
  justify-content: center;
  text-align: center;
  align-items: center;
  opacity: 0;
  transition: 0.4s;
  transition-delay: 0.2s;
  height: auto;


}

.elements.descriptionP p{
  position: relative;
  color: #472e16;
  font-size: 16px;
  opacity: 0;
  transition: 0.4s;
  transition-delay: 0.2s;


}

.card:hover .elements.descriptionP{
  opacity: 1;
}
.card:hover .elements.descriptionP p{
  opacity: 1;
}

.cardL .elements.descriptionP p{
  font-size: 13px;
}
.cardR .elements.descriptionP p{
  font-size: 13px;
}

.btnOnline{
  margin-top: 400px;
  bottom: 80px;
  right: -20px;
  width: 80%;
  padding: 10px;
  justify-content: center;
  text-align: center;
  align-items: center;
  opacity: 0;
  transition: 0.4s;
  transition-delay: 0.2s;
  z-index: 100;

}

.card:hover .btnOnline{
  opacity: 1;
}


.card.cardL{
  width: 250px;
  height: 300px;
  margin-top: 35px;

}
.card.cardR{
  width: 250px;
  height: 300px;
  margin-top: 35px;

}

.cardR{
  font-size: 12px;
  display: flex;
}
.cardL{
  font-size: 12px;
  display: flex;
}

.cardR .btnOnline{
  margin-top: 340px;
  margin-left: 25px;
}
.cardL .btnOnline{
  margin-top: 340px;
  margin-left: 25px;
}



.cardL .elements.imgProd{
  width: 150px;
  height: 150px;

}
.cardR .elements.imgProd{
  width: 150px;
  height: 150px;

}











/* Nouveaux produits Cécile */

.newProd{
  /* background-color: red; */
  height: 300px;
  padding-top: 40px;
}

.newsP{
  background-color:#b98d68;
  display: grid;
  grid-template-columns: auto 1fr;
  /* align-items: flex-start; */
  width: 900px;
  margin: 20px auto;

}

.textNewP{
  /* background-color: purple; */
  padding-top: 70px;
  padding-left: 20px;
}

.textNewP p{
  margin-top: 20px;
}

.cols{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  height: auto;
  margin: 20px auto;
}

.col{
  background-color:#cca88c;
  width: 150px;

}

.col img{
  width: 100%;
  height: 100%;
  cursor: pointer;
}


/* Mieux notés Cécile*/

.mieuxNotes{
  margin-top: 50px;
  background-color: #cca88c;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px ;
}

.mieuxNotesTitle h2 {
  margin-top: 180px;
  font-size: 40px;
}

.containerMN{
  /* background-color: yellow; */
  /* width: 100%; */
  /* margin: 40px auto; */
  display: flex;
  justify-content: center;
  height: 400px;
  /* gap: 10px; */
}

.containerMN .prodMN{
  /* background-color: red; */
  flex: 0 0 120px;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  box-shadow: 1px 5px 15px #472e16;
  position: relative;
  overflow: hidden;

}
 
.prodMN1 {
  background: url(/public/images/tapis-2.jpg)
  no-repeat 50% / cover;
  
}

.prodMN2 {
  background: url(/public/images/deco-3.jpg)
  no-repeat 50% / cover;
}

.prodMN3 {
  background: url(/public/images/mobilier-1.jpg)
  no-repeat 50% / cover;
}

.containerMN .prodMN .content{
  font-size: 1.rem;
  color: #472e16;
  display: flex;
  align-items: center;
  padding: 15px;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  background: rgb(222, 197, 177);

  transform: translateY(100%);
  transition: opacity 0.5s ease-in-out;
  transform: 0.5s 0.2s;
  visibility: hidden;
  opacity: 0;
}

.prodMN .content span{
  display: block;
  margin-top: 5px;
  font-size: 1.2rem;
}

.prodMN:hover{
  flex: 0 0 250px;
  box-shadow: 1px 3px 15px #472e16;
}

.prodMN .content:hover{
  opacity: 1;
  transform: translateY(0%);
  visibility: visible;
  z-index: 1;
}

.prodMN .content h3:hover{
  opacity: 1;
}




/* Partenaire Priscy */
.partenaire {
      display: flex;
      margin-top: 100px;
      margin-bottom: 50px;
      justify-content: center;
      height: 300px;
      color: #472e16;
    }
    .partenaire h1 {
      margin-top: 60px;
      margin-bottom: 40px;
      font-size: 40px;
    }
    .partenaire p {
      font-size: 15px;
      margin-bottom: 30px;
    }
    .partenaire img {
      width: 400px;
      height: 300px;
    }
    .partenaire .part1 {
      background-color: #cca88c;
      width: 600px;
    }




/* Contact Priscy */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;

}
.container h3 {
  margin-bottom: 10px;
}
.container img {
  width: 40px;
  margin-right: 8px;
 margin-bottom: 10px;
 cursor: pointer;
}
.container p {
  color: #472e16;
  font-size: 30px;
  font-weight: bold;
  margin-top: 5px;
  cursor: pointer;
}
.cont1 {
  margin-left: 150px;
  color: #472e16
}
.cont2 {
  display: flex;
  margin-right: 150px;
  margin-left: 100px;
 
}
.cont3 {
  display: flex;
  margin-right: 150px;

 
}
.contact {
  padding-top: 40px;
  margin-bottom: 200px;
  background-color: #cca88c;
  height: 200px;
}

button {
    background-color: #b98d68;
    color: #5e3c1a;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    margin-bottom: 15px;
    padding: 5px;
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




</style>