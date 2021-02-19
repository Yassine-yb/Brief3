/*======================================================================================*/
/*======================================================================================*/
/*==================================== Contact =====================================*/
/*======================================================================================*/
/*======================================================================================*/

function valider(){
    var nom=document.getElementById("nom");
    var caractereValide=/^[a-zA-Z]+?$/;
    var prenom=document.getElementById("prenom");
    var email=document.getElementById("email"); 
    var emailValide = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var sujet=document.getElementById("sujet");
    var message=document.getElementById("message");
    var messagevalide = /^[\w\s\S\r\t]{100,}/; 
    var c=0;



    if(nom.value==""){
        document.getElementById("erreurnom").innerHTML="le nom est obligatoire";
        c++;
    }
    else if(caractereValide.test(nom.value)==false){
        document.getElementById("erreurnom").innerHTML="le nom et incorrecte";
        c++;
    }else{
        var t1=0;
    }



    if(prenom.value==""){
        document.getElementById("erreurprenom").innerHTML="le prenom est obligatoire";
        c++;
    }
    else if(caractereValide.test(prenom.value)==false){
        document.getElementById("erreurprenom").innerHTML="le prenom et incorrecte";
        c++;
    }else{
        var t2=0;
    }



    if(email.value==""){
        document.getElementById("erreuremail").innerHTML="l'email est obligatoire";
        c++;
    }
    else if(emailValide.test(email.value)==false){
        document.getElementById("erreuremail").innerHTML="l'email est incorrecte";
        c++;
    }else{
        var t3=0;
    }


    if(sujet.value==""){
        document.getElementById("erreursujet").innerHTML="le sujet est obligatoire";
        c++;
    }
    else if(caractereValide.test(sujet.value)==false){
        document.getElementById("erreursujet").innerHTML="le sujet et incorrecte";
        c++;
    }else{
        var t4=0;
    }


    if(message.value==""){
        document.getElementById("erreurmessage").innerHTML="s'il vous plait ecrire un message";
        c++;
    }else if(messagevalide.test(message.value)==false){
        document.getElementById("erreurmessage").innerHTML="Votre message doit contenir au moins 100 caractères";
        c++;
    }else{
        var t5=0;
         document.getElementById('erreurmessage').innerText="";
         message.style.border="none";
    }if(t1==0 && t2==0 && t3==0 && t4==0 && t5==0){
         document.getElementById('envoye').style.display="block";
         document.getElementById('erreurnom').style.display="none";
         document.getElementById('erreurprenom').style.display="none";
         document.getElementById('erreuremail').style.display="none";
         document.getElementById('erreursujet').style.display="none";
         document.getElementById('erreurmessage').style.display="none";
         document.getElementById('envoye').innerHTML+="</br>"+"BONJOUR : " +prenom.value+"</br>"+"Email : " +email.value +"</br>"+ "Sujet :"+sujet.value+"</br></br>"+"Message Envoyé";
    }
}

    function fermer(){
        document.getElementById('envoye').style.display="none";
        document.getElementById('nom').value="";
        document.getElementById('prenom').value="";
        document.getElementById('email').value="";
        document.getElementById('sujet').value="";
        document.getElementById('message').value="";
     
    }







    /*======================================================================================*/
    /*==================================== navbar =====================================*/
    /*======================================================================================*/


    function nav(){
        var a = document.getElementById("nav");
        if (a.style.display=="block"){
            a.style.display="none";
        }else{
            a.style.display="block";

        }
        
    }











    
    /*======================================================================================*/
    /*======================================================================================*/
    /*==================================== Réservation =====================================*/
    /*======================================================================================*/
    /*======================================================================================*/

    var nom="";
    function option(elm){
        var boiteVitesse=document.getElementById("boiteVitesse");
        var dieselzone = document.getElementById("dieselzone");
        var hybridezone = document.getElementById("hybridezone");
        var electriquezone = document.getElementById("electriquezone");
        var essencezone = document.getElementById("essencezone");
        var boitmanuelle=document.getElementById("manuelle");
        var boitautomatique=document.getElementById("automatique");
        


        for (let index = 0; index < elm.parentNode.childNodes.length; index++) {
            const element = elm.parentNode.childNodes[index];
            if(element.style) {
                element.style.filter = "drop-shadow(5px 5px 3px grey)";
            }
            

        };
        elm.style.filter = "drop-shadow(2px 2px 5px red)";
        if(elm.id=="moto"){
            nom="moto";
            console.log(nom);
            boiteVitesse.style.display='none';
            dieselzone.style.display='none';
            hybridezone.style.display='none';
            electriquezone.style.display='block';
            essencezone.style.display='block';  
        }
        else if(elm.id=="citadin"){
            nom="citadin";
            console.log(nom);
            boiteVitesse.style.display='block';
            boitautomatique.style.display='none';
            boitmanuelle.style.display='block'
            dieselzone.style.display='block';
            hybridezone.style.display='block';
            electriquezone.style.display='block';
            essencezone.style.display='block';
        }
        else if(elm.id=="compact"){
            nom="compact";
            console.log(nom);
            boiteVitesse.style.display='block';
            boitautomatique.style.display='none';
            boitmanuelle.style.display='block'
            dieselzone.style.display='block';
            hybridezone.style.display='block';
            electriquezone.style.display='none';
            essencezone.style.display='block';
        }
        else if(elm.id=="sedanberlin"){
            nom="sedanberlin";
            console.log(nom);
            boiteVitesse.style.display='block';
            boitautomatique.style.display='block';
            boitmanuelle.style.display='none'
            dieselzone.style.display='block';
            hybridezone.style.display='block';
            electriquezone.style.display='none';
            essencezone.style.display='block';
        }
        else if(elm.id=="utilitaire"){
            nom="utilitaire";
            console.log(nom);
            boiteVitesse.style.display='block';
            boitautomatique.style.display='none';
            boitmanuelle.style.display='block'
            dieselzone.style.display='block'; 
            hybridezone.style.display='none';
            electriquezone.style.display='none';
            essencezone.style.display='none';
        }
        else if(elm.id=="camion"){
            nom="camion";
            console.log(nom);
            boiteVitesse.style.display='block';
            boitautomatique.style.display='block';
            boitmanuelle.style.display='none'
            dieselzone.style.display='block'; 
            hybridezone.style.display='none';
            electriquezone.style.display='none';
            essencezone.style.display='none';
        }
        else if(elm.id=="engin"){
            nom="engin";
            console.log(nom);
            boiteVitesse.style.display='block';
            boitautomatique.style.display='none';
            boitmanuelle.style.display='block';
            dieselzone.style.display='block'; 
            hybridezone.style.display='none';
            electriquezone.style.display='none';
            essencezone.style.display='block';
        }
    }


/*=====================================================================*/
/*=================================== JSON ============================*/
/*=====================================================================*/
function estimation(){
    var vehicule= [{"nom":"moto", "prix":"10"},
                    {"nom":"compact","prix":"14"},
                    {"nom":"citadin","prix":"12"},
                    {"nom":"sedanberlin","prix":"20"},
                    {"nom":"utilitaire","prix":"16"},
                    {"nom":"engin","prix":"900"},
                    {"nom":"camion","prix":"250"}]
   

      var duree = document.getElementById("jour").value;
      document.getElementById("dureReservation").innerHTML+=duree;
      var payement;
    var carburant=document.getElementsByName("radioc"); 
    var boitvitese=document.getElementsByName("radio");




    if(nom=="moto"){
        
        document.getElementById("labelvitesse").style.display='none';
        document.getElementById("typeVehicule").innerHTML+=vehicule[0].nom;
        
        if(carburant[0].checked==true){
            document.getElementById("typeCarburant").innerHTML+="essence";
            payement=((parseFloat(vehicule[0].prix*0.14)+parseFloat(vehicule[0].prix))*duree);
        }
        else if(carburant[2].checked==true){
            document.getElementById("typeCarburant").innerHTML+="electrique";   
             payement=((parseFloat(vehicule[0].prix*0.05)+parseFloat(vehicule[0].prix))*duree);
        }
        
    }









    else if(nom=="compact"){
        document.getElementById("labelvitesse").style.display='block';
        document.getElementById("typeVehicule").innerHTML+=vehicule[1].nom;
        
        if(carburant[0].checked==true){
            document.getElementById("typeCarburant").innerHTML+="essence";
            payement=((parseFloat(vehicule[1].prix*0.14)+parseFloat(vehicule[1].prix))*duree);
        }
        else if(carburant[1].checked==true){
            document.getElementById("typeCarburant").innerHTML+="diessel";   
            payement=((parseFloat(vehicule[1].prix*0.21)+parseFloat(vehicule[1].prix))*duree);
        }
        else if(carburant[3].checked==true){
            document.getElementById("typeCarburant").innerHTML+="Hybride";   
           payement=((parseFloat(vehicule[1].prix*0.09)+parseFloat(vehicule[1].prix))*duree);
        }
        
        if(boitvitese[0].checked==true){
            document.getElementById("labelvitesse").innerHTML+="Manuelle" 
        }
      
    }










    else if(nom=="citadin"){
        document.getElementById("labelvitesse").style.display='block';
        document.getElementById("typeVehicule").innerHTML+=vehicule[2].nom;
        // calcule de carburant
        if(carburant[0].checked==true){
            document.getElementById("typeCarburant").innerHTML+="essence";
            payement=((parseFloat(vehicule[2].prix*0.14)+parseFloat(vehicule[2].prix))*duree);
        }
        else if(carburant[1].checked==true){
            document.getElementById("typeCarburant").innerHTML+="diessel";   
            payement=((parseFloat(vehicule[2].prix*0.21)+parseFloat(vehicule[2].prix))*duree);
        }
        else if(carburant[2].checked==true){
            document.getElementById("typeCarburant").innerHTML+="electrique";   
             payement=((parseFloat(vehicule[2].prix*0.05)+parseFloat(vehicule[2].prix))*duree);
        }
        else if(carburant[3].checked==true){
            document.getElementById("typeCarburant").innerHTML+="Hybride";   
           payement=((parseFloat(vehicule[2].prix*0.09)+parseFloat(vehicule[2].prix))*duree);
        }
        //calcul boit vitesse
        if(boitvitese[0].checked==true){
            document.getElementById("labelvitesse").innerHTML+="Manuelle" 
        }
    }







    else if(nom=="sedanberlin"){
        document.getElementById("labelvitesse").style.display='block';
        document.getElementById("typeVehicule").innerHTML+=vehicule[3].nom;
        // calcule de carburant

        if(carburant[0].checked==true){
            document.getElementById("typeCarburant").innerHTML+="essence";   
             payement=((parseFloat(vehicule[3].prix*0.14)+parseFloat(vehicule[3].prix))*duree);
        }
        else if(carburant[1].checked==true){
            document.getElementById("typeCarburant").innerHTML+="diessel";   
            payement=((parseFloat(vehicule[3].prix*0.21)+parseFloat(vehicule[3].prix))*duree);
        }
         
        else if(carburant[3].checked==true){
            document.getElementById("typeCarburant").innerHTML+="Hybride";   
           payement=((parseFloat(vehicule[3].prix*0.09)+parseFloat(vehicule[3].prix))*duree);
        }

        //calcul boit vitesse
        if(boitvitese[1].checked==true){
            document.getElementById("labelvitesse").innerHTML+="automatique";
            payement+=payement+parseFloat(vehicule[3].prix*0.19);
        }
    }








    else if(nom=="utilitaire"){
        document.getElementById("labelvitesse").style.display='block';
        document.getElementById("typeVehicule").innerHTML+=vehicule[4].nom;
        // calcule de carburant
        if(carburant[1].checked==true){
            document.getElementById("typeCarburant").innerHTML+="diesel";
            payement=((parseFloat(vehicule[4].prix*0.21)+parseFloat(vehicule[4].prix))*duree);
        }
      /************************************* */
        //calcul boit vitesse
        if(boitvitese[0].checked==true){
            document.getElementById("labelvitesse").innerHTML+="Manuelle";
        }
    }





    else if(nom=="engin"){
        document.getElementById("labelvitesse").style.display='block';
        document.getElementById("typeVehicule").innerHTML+=vehicule[5].nom;
        // calcule de carburant
        if(carburant[0].checked==true){
            document.getElementById("typeCarburant").innerHTML+="essence";
            payement=((parseFloat(vehicule[5].prix*0.14)+parseFloat(vehicule[5].prix))*duree);
        }
        else if(carburant[1].checked==true){
            document.getElementById("typeCarburant").innerHTML+="diesel";   
            payement=((parseFloat(vehicule[5].prix*0.21)+parseFloat(vehicule[5].prix))*duree);
        }
        //calcul boit vitesse
        if(boitvitese[0].checked==true){
            document.getElementById("labelvitesse").innerHTML+="Manuelle";
        }
    }










    else if(nom=="camion"){
        document.getElementById("labelvitesse").style.display='block';
        document.getElementById("typeVehicule").innerHTML+=vehicule[6].nom;
        // calcule de carburant
         if(carburant[1].checked==true){
            document.getElementById("typeCarburant").innerHTML+="diesel";   
            payement=((parseFloat(vehicule[6].prix*0.21)+parseFloat(vehicule[6].prix))*duree);
        }
        //calcul boit vitesse
        if(boitvitese[1].checked==true){
            document.getElementById("labelvitesse").innerHTML+="automatique";
            payement+=payement+parseFloat(vehicule[6].prix*0.19);
        }
       
    }
    document.getElementById("totale").innerHTML+=payement+"$";
}

