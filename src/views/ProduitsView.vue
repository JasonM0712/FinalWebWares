<template>


<section>
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
      </section>
    <div class="produitview">
        <h1 class="titreproduit">Produits</h1>

        <div class="tableproduits" >
            <div class="cardproduit" v-for="(prod,index) in produits" v-bind:key="index">
                <tr class="cardinte">
                    <h2 class="titleprod">{{ prod.titre }}</h2>

                    
                    <img class="imgproduit" v-bind:src="prod.image">
                    <br>
                   
                    <td class="description">{{ prod.description }}</td>
                    <router-link :to="'/ficheproduit/' + prod.id">
                            <button class="voirMore">Voir plus de détails</button>
                        </router-link>
                    <br>
                    <td>MOQ: {{ prod.moq }}</td>       
                    <div v-if="online">
                        <td class="prix">Prix: {{ prod.prix }} € HT</td>
                        <Gbtn  @click="add(prod)" label="Ajouter au panier"/>
                    </div>
                    
                    
                             
                </tr>
            </div>
        </div>   
    </div>
</template>

<script>
import { mapState } from 'vuex'

import Gbtn from '@/components/ButtonGen.vue'

export default {
        //impoter les données de la base de données (store)
        data(){
            return {                
            }           
        },

        components: {
            Gbtn
        },

        methods: {
           
            

            add(prod) {
                const produitExistant = this.produitPanier.find(item => item.id === prod.id);
                if (produitExistant) {  
                this.$store.commit('incrementQuantite', produitExistant.quantites ++);
                
                } else {
        
                prod.quantites = prod.moq;
                    this.$store.commit('addProduit', prod);
                }
                this.saveCartToLocal();               
            },

            saveCartToLocal() {
                    localStorage.setItem('panier', JSON.stringify(this.produitPanier));
            }, 
            saveCommandeToLocal() {
                    localStorage.setItem('commande', JSON.stringify(this.commande));
            },

        },
            
    
        computed: {
            ...mapState(['produits', 'produitPanier']),
            ...mapState(['online']),
            
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


.barSearch input{
    width: 300px;
    height: 40px;
    border-radius: 5px;
    border: none;
    padding: 5px;
    margin-right: 10px;
    background-color: #cca88c81;
    margin-top: 200px;
}


.barSearch {
    
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 0 auto;
   
    
    
}


/* style card produits */

template {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #472e16;
    transition-duration: 0.5s;
}

.tableproduits {
    display: grid;
    grid-template-columns: 400px 400px 400px 400px; 
    margin-bottom: 200px;
    margin-top:50px;
    justify-content: center;
    margin-right: 8%;
    
}

/* media queries */
@media (max-width: 768px) {
    .tableproduits {
        grid-template-columns: 300px 300px;
        justify-content: center;
        margin-left: 5px;
        padding: 25px;
    }
}

@media (max-width: 480px) {
    .tableproduits {
        grid-template-columns: 250px;
        justify-content: center;
        
    }
}


.cardinte{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.cardproduit {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-bottom: 40px;
    padding: 10px;  
    background-color: #cca88c81 ;
    opacity: 0.9;
    z-index: 0;
    border-radius: 10px;
    box-shadow: 0 8px 16px 0 rgba(11, 11, 11, 0.625);
    transition: 0.3s;
    margin-left: 25%;  
    width: 330px;
    height: 480px;
    overflow: hidden;

}

.cardproduit:hover {
    box-shadow: 0 12px 24px 0 rgba(11, 11, 11, 0.625);
    opacity: 1;
    z-index: 0;
    transform: scale(1.1);
}

.imgproduit {
    width: 250px;
    height: 200px;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: #fff;
}


.titleprod {
    font-size: 20px;
    margin-bottom: 10px;
    color: #472e16c6;
}

.titreproduit{
    
    margin-top: 20px;
    margin-bottom: 50px;
    font-size: 40px;
    color: #472e16;
}

button{
    margin-top: 10px;
    font-weight: bold;
    font-size: large;
    border: none;
    background-color: transparent;
    color: #472e16;
    cursor: pointer;
}


</style>