<template>
    <div class="formulaire">
        <div>
            <span>Vous avez une question ou besoin d'aide ?</span>
            <h1>Contactez nous</h1>
        </div> 
        <div> 

        
        <form action="">
            <div class="txtform">
                <div class="box1">
                    <div class="form-responsive form-group">
                        <input type="text" id="nomentreprise" placeholder="Nom de l'entreprise*" class="form-control">
                    </div>

                    <div class="form-group">
                        <input type="text" id="nom" placeholder="Votre nom*" class="form-control">
                    </div>

                    <div class="form-group">
                        <input type="text" id="prenom" placeholder="Votre prénom*" class="form-control">
                    </div>

                    <div class="form-group">
                        <input type="email" id="mail" placeholder="Adresse mail*" class="form-control">
                    </div>

                    <div class="form-group">
                        <input type="password" id="mdp" placeholder="Mot de passe*" class="form-control">
                    </div>
                </div>

                <div class="box2">
                    <div class="form-group">
                    <label for="txt">Entrez votre message</label>
                    <textarea class="form-control" placeholder="Ecrivez votre message*" id="txt"></textarea>
                    </div>
                </div>
            </div>


            <button class="btn">Envoyer</button>
        </form>
        </div>
    </div>
</template>

<script >
export default {

}
</script>

<style scoped>
    .formulaire {
        margin-top: 30px;
        border-radius: 50px;
        color: #472e16;
        
    }

    .formulaire h1 {
        color: white;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .formulaire span {
        color: #472e16;
        font-size: 20px;
    }
    .txtform {
        display: flex;
    }
    button {
        background-color: #b98d68;
        color: #5e3c1a;
        border: none;
        border-radius: 5px;
        margin-top: 20px;
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

    input{
  margin: 10px;
  width: 250px;
  height: 20px;
  border: 1px solid #5e3c1a;
}
    textarea{
        margin: 15px;
  width: 250px;
  height: 150px;
  border: 1px solid #5e3c1a;
    }

    label, span {
        font-weight: bold;
    }

    /* responsive */
    @media (max-width: 576px) {
    .txtform {
      flex-direction: column;
    }
  }

  @media (max-width: 320px) {
    .box1, .box2 {
      width: 100%;
    }
  }

</style>