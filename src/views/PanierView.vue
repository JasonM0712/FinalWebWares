<template>
  
  <div v-if="produitPanier.length" class="pagepanier">
    <thead class="panier" v-for="(prod, index) in produitPanier" :key="index">
        <th class="cimg">
            <img  class="imgpanier" v-bind:src="prod.image">
        </th>
<br>
        <th>
            <h2>{{ prod.titre }}</h2>
        </th>
        <th>
            <div class="compteur">
                <button @click="decrementQuantite(prod)" v-bind:disabled="prod.quantites<=1" >-</button>
                <h2>{{ prod.quantites }}</h2>
                <button @click="incrementQuantite(prod)">+</button>
                <Gbtn label="Supprimer" bg="red" @click="remove(prod)"/>
            </div>         
        </th>
        
        <th>
            <h2>{{ prod.prix }} € HT </h2>        
            <span>{{ sousTotal(prod)  }} TTC</span>
        </th>       
    </thead>

          <div class="recap">
            <div>Total HT: {{ totalB() }} €</div>
            <div>Total TTC: {{ totalBag() }} €</div>
            
              <!-- <div class="adresslivr" v-for="(user, index) in clients" v-bind:key="index">
              <h2>{{ user.nom }} {{ user.prenom }}</h2>
              <span>{{ user.adresse }}</span>
              <span>{{ user.cp }} {{ user.ville }}</span>
              <span>{{ user.raisonSociale }}</span>
              <span>{{ user.email }}</span>
                    </div>  -->
          </div>


          <Gbtn label="Confirmer la commande" bg="green" @click="valider"/>
  </div>
          
    <div v-else >Panier Vide</div>
    

</template>

<script>
import { mapState } from 'vuex'
import Gbtn from '@/components/ButtonGen.vue'


export default {

    components: {
        Gbtn
    },


    methods : { 
        
        addProduit(prod){
            this.$store.commit('addProduit', prod) 
            this.saveCartToLocal();          
        },
              
        remove(prod){
          this.$store.commit('removeProduit',prod)
          this.saveCartToLocal();
        },

        totalB(){
          return this.produitPanier.reduce((total, element) =>{
          return total + element.quantites * element.prix
          },0).toFixed(2)
        },
        
        totalBag(){
          const tva = 0.20; 
          const totalTTC = this.produitPanier.reduce((total, prod) => {
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
    
        incrementQuantite(prod) {
          prod.quantites++;
          this.saveCartToLocal();
        },
        decrementQuantite(prod) {
          if (prod.quantites > 1) {
          prod.quantites--;
          }
          this.saveCartToLocal();
        },

        valider(){      
          this.$store.commit('transfertCommande');
          this.saveCartToLocal();
          alert('Votre commande a été validée');
          this.$router.push('/commresume');
        },

        saveCartToLocal() {
        localStorage.setItem('panier', JSON.stringify(this.produitPanier));
        },


    },

    computed: {
            ...mapState(['produitPanier', 'clients'])       
        },

        created() {
          const savedCart = localStorage.getItem('panier');
          if (savedCart) {
          this.$store.commit('setProduitPanier', JSON.parse(savedCart));
          
          }
    },

}
</script>

<style scoped>

template{
    margin-bottom: 200px;
  
}

thead{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    margin-top: 5px;
    
    flex: grid;
    grid-column:250px 250px 250px 250px ;
    background-color: #dec5b1;
    border-radius: 10px;
    
  }

thead:hover{
    cursor: pointer;
    transform: scale(1.02);
    transition-duration: 0.5s;
  }

  .pagepanier{
    display: flex;
    justify-content: center;
    
    margin-top: 200px;
    flex-direction: column;
    align-items: center;
     
    border-radius: 10px;
    width: 100%;
    }

  

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
    margin: 10px;
    width: 80%;
    height: 40%;
    margin-top: 5px;
    flex: grid;
    grid-column: 250px 250px 250px 250px ;
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


  .adresslivr{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    margin-top: 5px;
    flex: grid;
    grid-column: 250px 250px 250px 250px ;
    background-color: #dec5b1;
    border-radius: 10px;
  }

</style>