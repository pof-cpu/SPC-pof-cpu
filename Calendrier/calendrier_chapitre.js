// let today = new Date(2021,6,1);
// let aujourdhui = new Date();



// console.log('meme date '+memedate(today,aujourdhui,11));
 
import {jourferieannee, vacances} from './vacances_joursfériés.mjs';
 



function calendrier(today, mois){
    let aujourdhui = new Date()
 
    // *************************************
    // Fonction comparant les dates : retourne true si identique
    //-------------------------------------
   
    function memedate(today,aujourdhui,jour){
        let myVar = false;  
        let at=today.getFullYear();
        let mt=today.getMonth();
        
        let aa=aujourdhui.getFullYear();
        let ma=aujourdhui.getMonth();
        let da=aujourdhui.getDate();
    
        if (at ==aa ){
            if(mt ==ma){
                if(da==jour){
                    myVar = true;
                    return myVar;
                }else {return myVar;}
            }else {return myVar;}
        }else {return myVar;}
     
    };

   

    //**************************************** */
    // retourne le mois en texte
    //--------------------------------------------
    function texte_mois (mydate){
        return mydate.toLocaleDateString('fe-FR',{
            month:'long'    
        });
    };
    //***************************************** */


    // document.getElementById('datelocalelongue').innerHTML=
    //     'On considère la date : '+datelocalelongue + 
    //     '<br>Calendrier du mois de ' + texte_mois(today);

    
    //******************************************* */
    // fonction retournant le 1er jour
    // -------------------------------------
    function premierjour(mydate){
        return new Date(mydate.getFullYear(), mydate.getMonth(), 1).getDay();
    }
    // fonction retournant le Dernier jour
    // -------------------------------------
    function dernierjour(mydate){
        return new Date(mydate.getFullYear(), mydate.getMonth()+1,0).getDate();
    }
    // fonction retournant le Dernier jour du mois précédant
    // -------------------------------------
    function dernierjourmoisprecedant(mydate){
        return new Date(mydate.getFullYear(), mydate.getMonth(),0).getDate();
    }
    //*********************************************** */

    // Choix du mois
    // -----------------------------------------------
    // let mois = texte_mois(today);
    let mt =today.getMonth()
    let ma =aujourdhui.getMonth()
        // let mois = 'next_month';
  
    // if (ma==mt){
    //     let mois = 'current_month';
    //     console.log(mois);
    // }else{
    //     let mois = 'next_month';
    //     console.log('NO');
    // };

   


    // *****************************************
    // Fonction Etat du jour : vacences, férié, etc
    // -------------
    function etat(today, jour){
        // date : de la fonction calendrier
        
        let année = today.getFullYear();
        let m = today.getMonth();
        let varEtat ="";
        let varMemeJour = memedate(today,aujourdhui,jour);


        if (jourferieannee[année][today.getMonth()].includes(jour)==true && varMemeJour==false){
            varEtat = "F";
            return varEtat //férié
        }
        if (vacances[année][today.getMonth()].includes(jour)==true && varMemeJour==false){
            varEtat = "V";
            return varEtat //vacances
        }
        if (vacances[année][today.getMonth()].includes(jour)==false &&
        jourferieannee[année][today.getMonth()].includes(jour)==false && varMemeJour==false){
            varEtat = "N";
            return varEtat //normal
        }
        if(varMemeJour==true && jourferieannee[année][today.getMonth()].includes(jour)==true){
            varEtat = "Af";
            return varEtat;
        }
        // console.log('etat '+memedate(aujourdhui,today,jour))
        if(varMemeJour==true && vacances[année][today.getMonth()].includes(jour)==true){
        // if(jour==today.getDate()&& memedate(aujourdhui,today)==true &&vacances[année][date.getMonth()].includes(jour)==true){
            varEtat = "Av";    
            return varEtat;
        }
        else{
            //AN aujourd'hui et normal
            varEtat = "An";
            return varEtat;
        }
     }
    //  ************************************************
    // Remplissage du calendrier
    //----------------------------------------

    // document.getElementById('mois').innerHTML=texte_mois(today) +' '+ today.getFullYear();
    document.querySelector('.mois.'+ mois).innerHTML=texte_mois(today) +' '+ today.getFullYear();


    let d = document.querySelectorAll('.jour.'+ mois);
    let jour = 0;
    let pj = premierjour(today);
    let dj = dernierjour(today);
    let djp= dernierjourmoisprecedant(today);
    let contenu =0;
    // let pdj = precdernierjour(today);
    let saut=0;

 

    jour = 2-pj
    // console.log('jour '+jour);
    if (jour==1 || jour ==2){
        saut=-7;
    }else{
        saut=0;
    }
 
    
    let varEtat ='';
    
    for(var i = 0; i< d.length;i++){
        jour=i-pj+2+saut;

        //mois précédent
        //---------------
        if (jour<1){   
            contenu=djp+jour;
            // d[i].innerHTML="<div style=\"color:gray\">" + contenu + "</div>";
            d[i].innerHTML="<div class=\"autremois\">" + contenu + "</div>";
        
        }
        //mois en cours
        //--------------
        if(0<jour && jour<(dj+1)){
            varEtat = etat(today, jour);
            // console.log('jour '+jour+ ' etat '+varEtat);
            switch(varEtat){
                case 'V' : 
                    d[i].innerHTML="<div class=\"vacances\">"+jour+"</div>";
                    break;
                case 'F' : 
                    d[i].innerHTML="<div class=\"férie\">" +jour+"</div>";
                    break;
                case 'N' :
                    d[i].innerHTML=jour;
                    break;
                case 'Av' :
                    d[i].innerHTML="<div class=\"Av\">"+jour+"</div>";
                    break;
                case 'Af' :
                    d[i].innerHTML="<div class=\"Af\">"+jour+"</div>";
                    break;
                case 'An' :
                    d[i].innerHTML="<div class=\"An\">"+jour+"</div>";
                    break;
            }
       
        }
        //mois suivant
        //-------------
        if (jour> dj){
            contenu=jour-dj;
            d[i].innerHTML="<div class=\"autremois\">" + contenu + "</div>";  
        }
    } return true;
}

console.log('fichier chargé ')
let mydate = new Date(2021,6,1);

function calendrierChapitre(mydate){
    let a = mydate.getFullYear()
    let current_month = mydate.getMonth()
    let next_month = current_month+1;
    let after_next_month = current_month+2;
    // console.log(current_month);
    // console.log(next_month);
    // console.log('année ' + a);
    let next_date=new Date(a,next_month,1);
    let after_next_date=new Date(a,after_next_month,1);
    console.log('calendrier statut : '+calendrier(mydate, 'current_month'));
    console.log('calendrier statut : '+calendrier(next_date, 'next_month'));
    console.log('calendrier statut : '+calendrier(after_next_date, 'after_next_month'));
    
return 'calendrierChapitre effectué'
};

console.log(calendrierChapitre(mydate));

// console.log('calendrier statut : '+calendrier(mydate, 'current_month'));
// console.log('calendrier statut : '+calendrier(mydate, 'next_month'));
 




// let janvier = new Date(2021,0,1)
//  console.log('calendrier statut : '+calendrier(janvier));
// let février = new Date(2021,1,1)
//  console.log('calendrier statut : '+calendrier(février));
// let mars = new Date(2021,2,1)
//  console.log('calendrier statut : '+calendrier(mars));

// let avril = new Date(2021,3,1)
//  console.log('calendrier statut : '+calendrier(avril));
// let mai = new Date(2021,4,1)
//  console.log('calendrier statut : '+calendrier(mai));
// let juin = new Date(2021,5,1)
//  console.log('calendrier statut : '+calendrier(juin));
// let juillet = new Date(2021,6,1)
//  console.log('calendrier statut : '+calendrier(juillet));
// let août = new Date(2021,7,1)
//  console.log('calendrier statut : '+calendrier(août));
// let septembre = new Date(2021,8,1)
//  console.log('calendrier statut : '+calendrier(septembre));
// let octobre = new Date(2021,9,1)
//  console.log('calendrier statut : '+calendrier(octobre));
// let novembre = new Date(2021,10,1)
//  console.log('calendrier statut : '+calendrier(novembre));
// let décembre = new Date(2021,11,1)
//  console.log('calendrier statut : '+calendrier(décembre));

