<template>
  <div>
    <h2>
        Gestions des commandes
    </h2>
      <div class="pagepanier">    
        <div   class="adresslivr" >
          <div class="adrLiv" v-if="clients.length > 0" >
            <div class="adresslivr2">              
              <h3>Numero de commande : {{ numeroCommande }}</h3> <br>
              <h2 class="nomPren">{{ clients[0].nom }} {{ clients[0].prenom }}</h2>
              <span>Entreprise : {{ clients[0].raisonSociale }}</span>             
            </div>
          </div> 
          <div>
              <div class="panier" v-for="(prod, index) in commande" :key="index">                
                    <h2 class="titreProd">{{ prod.titre }} : </h2>               
                    <h2 class="titreProd" >{{ prod.quantites }}</h2>                         
              </div>
              <div class="recap">           
                    <h3 class="prixHt">Total HT: {{ totalB() }} €</h3>
                    <span class="prixTtc" >Total TTC: {{ totalBag() }} €</span>
              </div>
          </div>   
        </div>   
        </div>
          <div class="btnPrix">
          <Gbtn label="Confirmer votre commande"  @click="validerCom"/>
        </div>        
                  
        
  </div>
  
  
</template>

<script scoped>


export default {

    data() {
        return {
            editIndex: -1,
            
                       
        }
    },
    components: {      
    },

    computed: {
        produitPanier() {
            return this.$store.getters.getproduitPanier;
        },
        produits() {
            return this.$store.getters.getproduits;
        },
        commande() {
            return this.$store.getters.getcommande;
        },
        clients() {
                return this.$store.getters.getclients;               
        },
        numeroCommande() {
              return this.$store.state.numeroCommande;
        },
  },
    
    methods: {
        
        //validation de la commande
        validerCom() {
            this.$store.commit('validerCommande');
            
            this.saveCommandeToLocal()
           /*  this.$store.commit('viderCommande'); */
            this.modal = false;
            this.index = -1;
        
        },
        saveCommandeToLocal() {
        localStorage.getItem('commande', JSON.stringify(this.commande));
        },

        totalB(){
          return this.commande.reduce((total, element) =>{
          return total + element.quantites * element.prix
          },0).toFixed(2)
        },
        
        totalBag(){
          const tva = 0.20; 
          const totalTTC = this.commande.reduce((total, prod) => {
            const sousTotalHT = prod.prix * prod.quantites;  
            const sousTotalTTC = sousTotalHT * (1 + tva); 
            return total + sousTotalTTC;
            }, 0);
            return totalTTC.toFixed(2);
        },
           
        sousTotal(prod){
          const sousTotalHT = prod.prix * prod.quantites;
          const tva = 0.20; 
          const sousTotalTTC = sousTotalHT * (1 + tva);
          return sousTotalTTC.toFixed(2);
        },
    }
}
</script>

<style scoped>

  .pagepanier{
    display: flex;
    justify-content: center;
 
    margin-top: 200px;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    width: 100%;
    }
.panier{
    display: flex;
    justify-content: center;
    align-self: center;
    text-align: center;
    font-size: small;
    align-items: center;
    margin: 1px;
   
    margin-top: 5px;
    color: #472e16;
    
  }

  .compteur{ 
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 0% auto;
    
  }

  .imgpanier{
    width: 50px;
    height: 60px;
    margin-left: 15px;
    border-radius: 10px;
  }

  .titreProd{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0%;
    font-size: 20px;
    color: #472e16;
  }
  .prixhttc{
    display: block;
    text-align: center;
    justify-content: center;
  }

  .cimg{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .adress{
    display: flex;
  }

  .adresslivr{
    margin-left: 15px;
    width: 60%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 10px;
    margin-top: 25px; 
    background-color: #dec5b1;
    border-radius: 10px;
    font-size: 20px;
  }
  

  .adressFac{
    margin-top: -10px;
    margin-bottom: 51px;
    font-size: 25px;
    color: #472e16;
  }

.adrLiv{
    display: flex;
    flex-direction: column;
    margin-left:15px;
    margin-top: 15px;
    color: #472e16;
  }
  .adress{
    display: flex;
  }
  .adressFac{
    margin-top: -10px;
    margin-bottom: 10px;
    font-size: 25px;
    color: #472e16;
  }
  .recap{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 10px;
  
  }

.recap2{
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  
}
.btnPrix{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;  
}
.nomPren {
    margin-top: -30px;
    padding: 9px;
    margin-bottom: 2px;
    font-size: 20px;
}





</style>