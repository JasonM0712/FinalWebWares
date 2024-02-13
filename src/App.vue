<template>
  <nav class="secondary">
    <div class="secondaryTopPage">
      <!-- Partie langue & contact -->
      <div class="lang">

          <select class="langChoice" v-model="lang" >
            <option value="fr">FR</option>
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="de">GER</option>
            <option value="ru">RU</option>
          </select>

      </div>
      <div class="buttonContact">  
        <router-link to="/pagecontact" class="textContact">Contact</router-link>
      </div>
    </div>
  </nav >
<!-- Partie Navbar -->
  <nav class="principal">
    <a href="/">
      <img class="logoWW" src="@/assets/5.png" alt="logo" width="200" height="100">
    </a>

    <div class="BarNav">
      <div class="navLink">
        <div class="btnmenu">
          <router-link to="/">Acceuil</router-link> 

          <router-link to="/">
            <select @change="navigate" class="dropCategorie">
              <option>Catégories</option>
              <option value="/vasevue">Vase</option>
              <option value="/tapisview">Tapis</option>
              <option value="/lampeview">Luminaire</option>
              <option value="/tableview">Table</option>
              <option value="/chaiseview">Canapé</option>
            </select>
          </router-link> 
  
          <!-- <router-link to="/about">Catégories</router-link>   -->
          <router-link to="/produitsview">Produits</router-link>
          <router-link to="/aboutview">A Propos</router-link>
          <!-- <router-link to="/panierview">Panier ({{ produitPanier.length }})</router-link> -->
          <!-- <router-link to="/commresume">Commande </router-link> -->
        
        

          <div class="headerR">
      <div v-if="!online" class="ifOnline">
        <router-link to="/Loginpage">Connection</router-link> 
        <router-link to="/SignUp">Inscription </router-link>
      </div>
      <div v-if="online" class="horsLine">
        <div class="headerUser">
          <img src="/images/user.png" id="userIcon" v-on:click="toggleMenu">
          <div class="userMenu" v-if="menuVisible">
            <span @click="closeMenu" class="closeMenuBtn">X</span>
            <ul>
              <h1>Bienvenu</h1>
              <h3>USER</h3>
              <div class="routerLiens">
              <router-link to="/userprofile">Mon profil</router-link>
              <router-link to="/panierview">Panier</router-link>
              <router-link class="parametre" to="/userpage">Paramètres</router-link>

              <!-- si Admin -->
              <router-link v-if="!onlineAdmin" to="/AdminProfile">Paramètres admin</router-link>
              </div>
              <button @click="deconnexion">Deconnexion</button>
            </ul>

          </div>
        </div>
        <div class="headerPanier">
          <router-link to="/panierview">
            <img src="/images/panier.png">
          </router-link>
          <p>({{ produitPanier.lenght }})</p>
        </div>
      </div>
    </div>
    
 </div>       
      </div>

      <!-- barre de recherche -->
      <!-- <section>
        <span class="barSearch">
          <div>
            <input type="text" v-model="querry" @input="listFilter" placeholder="Rechercher un produit">
          </div>
          <div class="listBarSearch">
            <ul>
                <li v-for="(produits, i) in filteredProducts" :key="i">{{ produits.titre }}</li>
            </ul>
          </div>
        </span>
      </section> -->
    </div>



      <!-- <div class="none">
            <div v-if="online" class="connect">
              <router-link to="/Loginpage">Connection</router-link> 
              <router-link to="/SignUp">Inscription </router-link>
            </div>

            <div class="Horsconnect">
              <select @change="navigate" class="dropdown" >
                <option>Menu</option>
                <option value="panierview"> Panier ({{ produitPanier.length }})</option>
                <option value="vos achat"><router-link to="/commresume">vos achats</router-link></option>
                <option value="/AdminPage">Admin</option>
                <option value="logout">Déconnection</option>
              </select>

            </div>
        </div> -->

  </nav>
  <footer>
    <div class="foot">
      <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>

            <div>
              <a href="/"><img class="logo" src="@/assets/LogoWW.webp" alt="Logo Twiter" /></a>             

              <p class="copyright" >Gang Blue © 2024</p>
            </div>           
            <div class="col">
                <ul class="list-inline">
                    <li class="list"><a class="footA" href="/">Accueil</a></li>
                    <li class="list"><a class="footA" href="/aboutview">A propos</a></li>
                    <li class="list"><a class="footA" href="/pagecontact">Contact</a></li>
                </ul>
            </div>                
            <div class="col">
                <ul>
                    <li class="list"><a class="footA" href="#">Catégories</a></li>

                    <li class="list"><a class="footA" href="/produitsview">Produits</a></li>

                    <li class="list"><a class="footA" href="#">Marques</a></li>
                </ul>
            </div>                                 
            <div class="col">
                <ul class="list-inline">
                    <li class="list"><a class="footA" href="/loginpage">Connexion</a></li>
                    <li class="list"><a class="footA" href="/signup">S'inscrire</a></li>
                    <li class="list"><a class="footA" href="/PageCarriere">Carrières</a></li>
                </ul>
            </div> 
            <div class="col">
                <ul>
                    <li class="list CGV "><a class="footA" href="/PageCgv">Conditions générales de ventes</a></li>
                    <li class="list CGV1"><a class="footA" href="/PageCgv">CGV</a></li>
                    <li class="list CGU"><a class="footA" href="/PageCgu">Conditions générales d'utilisations</a></li>
                    <li class="list CGU1"><a class="footA" href="/PageCgu">CGU</a></li>
                    <li class="list PDC"><a class="footA" href="/PolitiqueConf">Politique de confidencialité</a></li>
                    <li class="list PDC1"><a class="footA" href="/PolitiqueConf">PDC</a></li>
                </ul>
            </div>
            <div class="col">
                <ul>
                    <p class="Follow">Suivez nous</p>
                    <a href="https://www.facebook.com/"><img class="logoR" src="@/assets/FB.svg" alt="Logo FaceBook"/></a>                                      
                    <a href="https://www.linkedin.com/"><img class="logoR" src="@/assets/LKD.svg" alt="Logo Linkedin" /></a>               
                    <a href="https://twitter.com/"><img class="logoR" src="@/assets/TWT.svg" alt="Logo Twiter" /></a>  
                </ul>

            </div>   
                    
      </div>
          
  </footer>
    
  <router-view />
</template>

<script>
import { mapState } from 'vuex';

export default{ 

  menuDropdown:'Menu',
  lang: "fr",
  name: 'searchBar',

  data(){
      return{
      querry: "",


      lang: "fr",
      menuDropdown:'Menu',

      menuVisible: false,

    }
  },

  methods:{

    // ajout fichier Jason/David
    iniatLocalStorage(){
      console.log(localStorage.getItem('produits'));
      if(localStorage.getItem('produits') === null || localStorage.getItem('produits') === 'undefined' || localStorage.getItem('produits').length === 0){
        localStorage.setItem('produits', JSON.stringify(this.$store.state.produits));
      }
    },
    // CECILE
    toggleMenu() { 
      this.menuVisible = !this.menuVisible;
    },

    closeMenu() {
      this.menuVisible = false;
    },
    deconnexion() {
      this.$store.commit('online', false);
      this.$router.push('/');
    },

    //

    navigate(event){
      this.$router.push(event.target.value);
    },

    // listFilter(){
    //   for(let i = 0; i < this.filteredProducts.length; i++){
    //     if(this.filteredProducts[i].titre.toLowerCase().includes(this.querry.toLowerCase())){
    //       this.filteredProducts[i].style.display = "block";
    //     }else{
    //       this.filteredProducts[i].style.display = "none";
    //     }
    //   }
    // }
  },

  computed: {

    filteredProducts(){

      return this.$store.state.products    
    },
    
    ...mapState(['produitPanier'], ['produits']),

    // computed: {
    //   online() {
    //     console.log(this.$store.state.online);
    //     return this.$store.state.online;
    //   }
    // },

    ...mapState(['online']),
  


  },

  mounted() {
    this.iniatLocalStorage();
  }
}

</script>

<style>

*, ::before, ::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  /* color: #2c3e50; */
}

/* Header Jason */

.principal { 
  position: absolute;
  margin-top: 50px;
  top: 0;
  left: 0; 
  z-index: 1;
  background-color: #b98d68 ;
  height: 100px;
  width: 100vw;
}

.principal .btnmenu a {
  display: inline-block;
  margin-top: 10px ;
  margin-left: 30px;
  font-size: 20px;
  color: #ffffff;
  text-decoration: none;
}

.principal .btnmenu a.router-link-exact-active {
  color: #5e3c1a;
}

.secondary{
  display: inline-block;
  position: absolute;
  z-index: 1;
  max-height: 50px;
  width: 100vw;
  top : 0;
  left : 0 ; 
  background-color: white;
  color: black;
}

.secondaryTopPage{
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
}

.BarNav{
 display: flex;
  justify-content: center;
  margin-right: 120px ;
  margin-top: 30px ;
}

.logoWW {
  float: left;
}

.navLink {
  float: right;
  margin-right: -300px;
  font-size: 25px;
  
  color: #ffffff;
  
  
}

.barSearch input{
    display: block;
    width: 300px;
    height: 30px;
    border-radius: 5px;
    border: none;
    outline: none;
    padding: 5px;
    font-size: 15px;
}

.listBarSearch{
    display: none;
    position: absolute;
    background-color: #b98d68;
    z-index: 1;
}

.none{

  display: block;
  float: right;
  margin-right: 40px;
  margin-top: -40px;
}

.langChoice{ 
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 30px ;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  background-color: #b98d68;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 5px;
} 

.textContact{
  text-decoration: none;
  color: #ffffff;
  font-size: 15px;
  text-align: center;
}

.buttonContact{ 
  display: block;
  float: left;
  width: 150px;
  margin-right: 10px;
  margin-bottom: 30px ;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  background-color: #b98d68;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 5px;
}

.horsConnect{
  display: block;
  margin: auto;
}

.connect{
/* display:none; */
  
}

.lang{
  display: block;
  float: left; 
  top: 0 ; 
  margin-left: 30px;

}

.dropdown{
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 30px ;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  background-color: #b98d68;
  border-radius: 5px;
  border: solid 2px white;
  outline: none;
  padding: 5px;
}


.dropdown a {
  font-size: 20px;
}

.dropCategorie{
  display: block;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  background-color: #b98d68;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 5px;
}

/* Header Jason responsive */

/* Styles par défaut pour les écrans larges (PC) */
.principal {
  
}

/* Styles pour les tablettes */
@media only screen and (max-width: 768px) {
  .principal {
   
  }

  .navLink {
    float: none;
    margin-right: 0;
    font-size: 18px; 
  }

}

/* Styles pour les téléphones */
@media only screen and (max-width: 480px) {
  .principal {
   
  }

  .navLink {
    float: none;
    margin-right: 0;
    font-size: 16px; 
  }

  
}


/* Header co et non co Cécile */

.headerR{
  float: right;
  margin-left: 250px;
  margin-top: 6px;
  display: flex;
}

.headerR img{
  width: 25px;
  height: 25px;
  margin-right: 5px;

}

.horsLine{
  margin-left: 40px;

}

.headerUser,
.headerPanier{
  display: inline-flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-top: 10px;
  cursor: pointer;

}

.userMenu{
  display: block;
  position: absolute;
  background-color: #cca88c;
  border: 1px solid #5E3C1A;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1;
  width: auto;
  height: 350px;
  margin-top: 50px;
  margin-right: 60px;
}

.userMenu button{
  background-color: #b98d68;
    color: #5e3c1a;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 15px;
    padding: 5px;
    width: 150px;
    height: 40px;
    border-radius: 20px;
    border: 1px solid #5e3c1a;
    cursor: pointer;
    font-weight: bold;
}

.userMenu button:hover {
  background-color: #5e3c1a;
  color: #cca88c;
}

.userMenu .routerLiens {
  display: flex;
  align-items: self-start;
  margin-top: 20px;
  padding-right: 40px;
}

.userMenu ul{
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.userMenu h1 {
  padding: 8px;
  font-size: 20px;
  margin-bottom: 10px;
}

.userMenu h3 {
  font-weight: bold;
  font-size: 16px;
}


.userMenu option{
  /* margin-bottom: 30px; */
  font-size: 16px;
}

.userMenu .parametre{
  margin-bottom: 40px;
}

.closeMenuBtn{
  cursor: pointer;
  font-size: 18px;
  /* position: absolute; */
  margin-top: 10px;
  margin-right: 10px;
  float: right;
}

.routerLiens{
  display: flex;
  flex-direction: column;
  align-items: left;
}



/* Footer David */

footer {
  z-index: 1;
  display: flex;
  justify-content: center;
  background-color: #b98c68dc ;
  color: white;
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 150px;
  padding-bottom: 20px;
  margin-top: 50px;

  
}

@media screen and (min-width: 430px) and (max-width: 820px){
footer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #b98d68 ;
  color: white;
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 110px;
  padding-bottom: 20px;

  
}}


@media screen and (max-width: 430px){
footer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #b98d68 ; 
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 100px;
  padding-bottom: 20px;
  
}}
  

.col{
  display: flex;
  align-items: center;
}


.foot{
  margin-top: auto;
  gap: 50px;
  display: flex;
  justify-content: center;
  gap: 70px;
  margin-left: -104px;

}

@media screen and (max-width: 430px){
.foot{
  margin-top: auto;
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-left: 0px;
}
}

@media screen and (min-width: 431px) and (max-width: 820px){
.foot{
  margin-top: auto;
  display: flex;
  justify-content: center;
  gap: 45px;
  margin-left: -25px;
}
}

.list{
  display: flex;
  justify-content:center ;
  margin-bottom: 20px;
  flex-direction:column;
  margin: 0 10px;
  color: white;
  font-style: italic;
  padding: 2px;
   
}


@media screen and (max-width: 430px ){
.list{
  font-size: 9px;
  display: flex;
  justify-content:center ;
  margin-bottom: 5px; 
  margin: 0 10px;
  font-style: italic;
  padding: 2px;
   
}

}

@media screen and (min-width: 431px) and (max-width: 820px){
.list{
  font-size: 10px;
  display: flex;
  justify-content:center ;
  margin-bottom: 5px;
  margin: 0 5px;
  font-style: italic;
  padding: 2px;
   
}
}


.footA, .copyright{
  font-weight: 450;
  color: #5E3C1A;
  text-decoration: none;
}

@media screen and (max-width: 430px){

  .footA, .copyright{
  font-weight: 300;
  color: #5E3C1A;
  text-decoration: none;
}
}
@media screen and (min-width: 431px) and (max-width: 820px){

  .footA, .copyright{
  font-weight: 450;
  color: #5E3C1A;
  text-decoration: none;
}
}

.copyright{
  color: #5E3C1A;
  font-style: italic;
  font-size: 15px;
  

}


@media screen and (max-width: 430px){
.copyright{
  color: #5E3C1A;
  font-style: italic;
  font-size: 8px;
  
}
}
@media screen and (min-width: 431px) and (max-width: 820px){
.copyright{
  color: #5E3C1A;
  font-style: italic;
  font-size: 8px;
  
}
}

.logoR{
  width: 30px;
  height: 30px;
  margin: 0 10px;
}

@media screen and (max-width: 430px){
.logoR{
  width: 15px;
  height: 15px;
  margin: 0 4px;
}
}

@media screen and (min-width: 431px) and (max-width: 820px){
.logoR{
  width: 25px;
  height: 25px;
  margin: 0 5px;
}
}

.logo{
  width: 100px;
  height: 100px;
  margin: 0 10px;
}


@media screen and (max-width: 430px){
.logo{
  width: 40px;
  height: 40px;
  margin: 0 10px;
}

}


@media screen and (min-width: 430px) and (max-width: 820px){
.logo{
  width: 60px;
  height: 60px;
  margin: 0 10px;
}
}


.Follow{
  color: #5E3C1A;
  padding-bottom: 5px;
}

@media screen and (min-width: 430px) and (max-width: 820px){
.Follow{
  color: #5E3C1A;
  font-size: 10px;
}
}

@media screen and (max-width: 430px){
.Follow{
  display: none;
}
}

@media screen and (max-width: 430px){
.CGV{
  display:none;
}}
@media screen and (min-width: 430px){
.CGV1{
  display:none;
}}


@media screen and (max-width: 430px){
.CGU{
  display:none;
}}
@media screen and (min-width: 430px){
.CGU1{
  display:none;
}}


@media screen and (max-width: 430px){
.PDC{
  display:none;
}}
@media screen and (min-width: 430px){
.PDC1{
  display:none;
}}


/* Footer David */


footer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #b98d68 ;
  color: white;
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 150px;
  padding-bottom: 20px;
  
}

@media screen and (min-width: 430px) and (max-width: 820px){
footer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #b98d68 ;
  color: white;
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 110px;
  padding-bottom: 20px;
  
}}


@media screen and (max-width: 430px){
footer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #b98d68 ; 
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 100px;
  padding-bottom: 20px;
  
}}
  
.col{
  display: flex;
  align-items: center;
}


.foot{
  margin-top: auto;
  gap: 50px;
  display: flex;
  justify-content: center;
  gap: 70px;
  margin-left: -104px;
}

@media screen and (max-width: 430px){
.foot{
  margin-top: auto;
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-left: 0px;
}
}
@media screen and (min-width: 431px) and (max-width: 820px){
.foot{
  margin-top: auto;
  display: flex;
  justify-content: center;
  gap: 45px;
  margin-left: -25px;
}
}

.list{
  display: flex;
  justify-content:center ;
  margin-bottom: 20px;
  flex-direction:column;
  margin: 0 10px;
  color: white;
  font-style: italic;
  padding: 2px;
   
}


@media screen and (max-width: 430px ){
.list{
  font-size: 9px;
  display: flex;
  justify-content:center ;
  margin-bottom: 5px; 
  margin: 0 10px;
  font-style: italic;
  padding: 2px;
   
}
}
@media screen and (min-width: 431px) and (max-width: 820px){
.list{
  font-size: 10px;
  display: flex;
  justify-content:center ;
  margin-bottom: 5px;
  margin: 0 5px;
  font-style: italic;
  padding: 2px;
   
}
}


.footA, .copyright{
  font-weight: 450;
  color: #5E3C1A;
  text-decoration: none;
}

@media screen and (max-width: 430px){

  .footA, .copyright{
  font-weight: 300;
  color: #5E3C1A;
  text-decoration: none;
}
}
@media screen and (min-width: 431px) and (max-width: 820px){

  .footA, .copyright{
  font-weight: 450;
  color: #5E3C1A;
  text-decoration: none;
}
}

.copyright{
  color: #5E3C1A;
  font-style: italic;
  font-size: 15px;
  
}

@media screen and (max-width: 430px){
.copyright{
  color: #5E3C1A;
  font-style: italic;
  font-size: 8px;
  
}
}
@media screen and (min-width: 431px) and (max-width: 820px){
.copyright{
  color: #5E3C1A;
  font-style: italic;
  font-size: 8px;
  
}
}


.logoR{
  width: 30px;
  height: 30px;
  margin: 0 10px;
  cursor: pointer;
}

@media screen and (max-width: 430px){
.logoR{
  width: 15px;
  height: 15px;
  margin: 0 4px;
}
}
@media screen and (min-width: 431px) and (max-width: 820px){
.logoR{
  width: 25px;
  height: 25px;
  margin: 0 5px;
}
}

.logo{
  width: 100px;
  height: 100px;
  margin: 0 10px;
}


@media screen and (max-width: 430px){
.logo{
  width: 40px;
  height: 40px;
  margin: 0 10px;
}
}

@media screen and (min-width: 430px) and (max-width: 820px){
.logo{
  width: 60px;
  height: 60px;
  margin: 0 10px;
}

}


.Follow{
  color: #5E3C1A;
  padding-bottom: 5px;
}

@media screen and (min-width: 430px) and (max-width: 820px){
.Follow{
  color: #5E3C1A;
  font-size: 10px;
}
}

@media screen and (max-width: 430px){
.Follow{
  display: none;
}
}

@media screen and (max-width: 430px){
.CGV{
  display:none;
}}
@media screen and (min-width: 430px){
.CGV1{
  display:none;
}}


@media screen and (max-width: 430px){
.CGU{
  display:none;
}}
@media screen and (min-width: 430px){
.CGU1{
  display:none;
}}


@media screen and (max-width: 430px){
.PDC{
  display:none;
}}
@media screen and (min-width: 430px){
.PDC1{
  display:none;
}}


/* Footer David */


body{

    background-color: white;

}

</style>
