<template>

     
    <div class="pagepanier">
    <h1 class="resum">Résumé de votre commande</h1>
    <thead class="panier" v-for="(prod, index) in commande" :key="index">
        
        <th class="cimg">
            <img  class="imgpanier" v-bind:src="prod.image">
        </th>
        <th>
            <h2>{{ prod.titre }}</h2>
        </th>                                
                <h2>{{ prod.quantites }}</h2>                              
        <th>
            <h2>{{ prod.prix }} € HT </h2>        
            <span>{{ sousTotal(prod)  }} TTC</span>
        </th>       
    </thead>
        <div class="recap">
            <div>Total HT: {{ totalB() }} €</div>
            <div>Total TTC: {{ totalBag() }} €</div>
        </div>
        <div class="adress">
            <div v-for="(user,index) in clients" v-bind:key="index" class="adresslivr" >
                <div v-if="clients.length === 1">
                   <h2>Adresse de facturation</h2>
                    <h2>{{ user.nom }} {{ user.prenom }}</h2>
                    <span>Adresse : {{ user.adresse }}</span>
                    <span>{{ user.cp }} {{ user.ville }}</span>
                    <span>Entreprise : {{ user.raisonSociale }}</span>
                    <span>Email : {{ user.email }}</span>
                    <span>Numero de commande : {{ user.tel }}</span>
                </div>
            </div>
            <div v-for="(user,index) in clients" v-bind:key="index" class="adresslivr" >
                <div v-if="clients.length === 1">
                   <h2>Adresse de livraison</h2>
                    <h2>{{ user.nom }} {{ user.prenom }}</h2>
                    <span>Adresse : {{ user.adresse }}</span>
                    <span>{{ user.cp }} {{ user.ville }}</span>
                    <span>Entreprise : {{ user.raisonSociale }}</span>
                    <span>Email : {{ user.email }}</span>
                    <span>Numero de commande : {{ user.tel }}</span>
                </div>
            </div>
        </div>
            <Gbtn label="Confirmer votre commande"  @click="validerCom"/>
        </div>
    
</template> 


<script>
import { mapState } from 'vuex'
import Gbtn from '@/components/ButtonGen.vue'
export default {

    data() {
        return {
            
            clients: [1],
            
        }
    },

    components: {
        Gbtn
        
    },

    computed: {
        ...mapState(['produits', 'commande', 'clients'])
    },
    
    methods: {
        
        //validation de la commande
        validerCom() {
            this.$store.commit('validerCommande');
            this.$router.push('/commande');
            this.saveCommandeToLocal
        
        },
        saveCommandeToLocal() {
        localStorage.setItem('commande', JSON.stringify(this.commande));
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

.body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 200px;
}

.resum{
    margin-bottom: 50px;
    color: #472e16;
}




thead{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    margin-top: 5px;
    margin-top: 200px;
    flex: grid;
    grid-column:250px 250px 250px 250px ;
    background-color: #dec5b1;
    border-radius: 10px;
    
  }

thead:hover{
    cursor: pointer;
    transform: scale(1.1);
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
    width: 500px;
    height: 250px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 10px;
    margin-top: 25px; 
    background-color: #dec5b1;
    border-radius: 10px;
  }

  .adress{
    display: flex;
  }

</style>