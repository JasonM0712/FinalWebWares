<template>
    <div class="produitview">
     <h1>Produits</h1>
     <div class="tableproduits" >
         <div class="cardproduit" v-for="(prod, index) in produitsFiltres" :key="index">
             <tr class="cardinte">
                 <h2 class="titleprod">{{ prod.titre }}</h2>
                 <img class="imgproduit" v-bind:src="prod.image">
                
                 <td class="description">{{ prod.description }}</td>
                 <router-link :to="'/ficheproduit/' + prod.id">
                            <button class="voirMore">Voir plus de détails</button>
                        </router-link>
                 <div v-if="online">
                 <td class="prix">Prix: {{ prod.prix }} € HT</td>
                </div>
                 <td class="stock">Stock: {{ prod.stock }}</td>
                 <td>MOQ: {{ prod.moq }}</td>
                 <div v-if="online">
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

 data(){
     return{
         categorieId:5,
     }
 },

 components: {
    Gbtn
 },


 methods:{ 


 },

 computed: {
     ...mapState(['produits']),
     ...mapState(['online']),
     produitsFiltres(){
     return this.produits.filter(prod => prod.categorieId === this.categorieId);
     }
 },
 }


</script>

<style scoped>
body{
 background-color: aqua;
}

.tableproduits {
 display: flex; 
 display: grid;
 grid-template-columns: 400px 400px 400px; 
 margin-bottom: 200px;
 margin-top:200px;
 justify-content: center;
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
 background-color: #cca88c;
 opacity: 0.8;
 z-index: 0;
 border-radius: 10px;
 box-shadow: 0 8px 16px 0 rgba(11, 11, 11, 0.625);
 transition: 0.3s;
 margin-left: 25%;  
 width: 300px;
 height: 450px;
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