<template>
    <div class="container">
      <div class="bcg">
      <h1>Nous contacter</h1>

      <!-- Partie 1 -->
      <div class="txtform">
        
          <div class="box1">
              <h2>Devenir partenaire</h2>
              <h3>WebWares: votre partenaire de confiance pour la réalisation de vos projets</h3>
              <p>WebWares croit au pouvoir du design pour transformer les espaces et les expériences des personnes. Nous sommes passionnés par l'aide de nos partenaires et de nos clients à donner vie à leurs visions, en leur offrant un large choix de produits et services de qualité.</p>
              <br>
              <p>Nous nous engageons à fournir un service personnalisé et à répondre à vos besoins spécifiques. Contactez-nous dès aujourd'hui pour discuter de vos projets et découvrir comment nous pouvons vous aider à les réaliser.</p>
              
              <a href="@/views/PartenairePage.vue
              "><button>En Savoir plus</button></a>
          </div>
          <img id="img1" class="img-responsive box2" src="@/assets/imgcontact.jpg" alt="">
      </div>
    </div>

          <!-- Partie 2 -->
      <div class="formulairecontact">
        <div>
          <img id="img2" class="img-responsive" src="@/assets/imgcontact2.jpg" alt="">
        </div>

        <div class="form-responsive" id="formulaire">
          <FormulaireContact/>
        </div>

          
      </div>
    </div>
  </template>
  
  <script>
  import FormulaireContact from '@/components/FormulaireContact.vue'

  export default {
    components:{
      FormulaireContact,
  }
  }
  </script>
  
  <style scoped>

  .container {
    margin-top: 180px;
  }

  h1{
    color: #472e16;
    font-size: 50px;
    margin-bottom: 40px;
  }

  #img1 {
    width: 250px;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2),
              0 10px 10px rgba(0, 0, 0, 0.2);
  }

  #img2 {
    width: auto;
    height: 450px;
    border-radius: 10px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2),
              0 10px 10px rgba(0, 0, 0, 0.2);
  }
  
  .txtform {
    background-color: #dec5b1;
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    justify-content: center;
    flex-grow: 1;

  }

  h2  {
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 30px;
  }
  h3  {
    margin-bottom: 30px;
    font-size: 20px;
  }
  p {
    margin-left: 100px;
    margin-right: 100px;
  }
  .box1 {
    background-color: rgba(255, 255, 255, 0.331);
    margin-left: 100px;
    margin-right: 100px;
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 10px;
    color: #472e16;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2),
              0 10px 10px rgba(0, 0, 0, 0.2);
  }
  .box2{
    margin-right: 100px;
  }

  #formulaire{
    display: flex;
    background-color: #dec5b1;
    padding-left: 100px;
    padding-right: 100px;
    border-radius: 10px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2),
              0 10px 10px rgba(0, 0, 0, 0.2);
    flex-grow: 1;
  }

  .formulairecontact{
    display: flex;
    margin: 80px auto;
    flex-grow: 1;
    width: 50%;
    margin-bottom: 250px;
  }

  .formulairecontact img{
    margin-left: 0px;
    margin-right: 50px;

  }

  button {
        background-color: #b98d68;
        color: #5e3c1a;
        border: none;
        border-radius: 5px;
        padding: 5px;
        margin-top: 30px;
        margin-bottom: 10px;
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

    /* Responsive */

    @media screen and (max-width: 768px) {
  .container img {
    display: none;
  }
  .formulairecontact {
    margin-left: 30px;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {

  .container img {
    display: none;
  }
  .formulairecontact {
    margin-left: 80px;
  }

} 
  
  </style>