<template>
    <div>
        <h1>Détails produit</h1>

    <div v-if="prodSelect" class="detailsProd">
        <h2>{{ prodSelect.titre }}</h2>
        <img :src="prodSelect.image" alt="Produit sélectionné">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere dolorum laborum molestiae maiores iste non veniam error qui. Laudantium eligendi iusto, illo accusamus assumenda molestiae veritatis adipisci quibusdam sed voluptatem.</p>
        <p>MOQ : {{ prodSelect.moq }}</p>
    
        <div v-if="online">
        <p>{{ prodSelect.prix }}</p>
        <button @click="add(prodSelect)">Ajouter au panier</button>
        </div>
  
   
    </div>

    </div>
  </template>
  
  <script>
import { mapState } from 'vuex';
  export default {

    data() {
        return {
            prodSelect: null,
        };
    },

    computed: {
        ...mapState(['produits', 'online'],)
    },

    created() {
        if(this.$route.params.productId) {
            this.prodSelect = this.$store.getters.getProduitById(parseInt(this.$route.params.productId));
            console.log('Produit sélectionné :', this.prodSelect);
        }
    },

    methods: {

    }

  }
  </script>
  
  <style scoped>
h1{
    margin-top: 200px;
}

.detailProd{
    border: 2px solid black;
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
