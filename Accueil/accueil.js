//  Pour obtenir la date en lettre en Fr
// ********************************************
let today = new Date();
 let datelocale = today.toLocaleDateString('fr-FR');
 let datelocalelongue = today.toLocaleDateString('fr-FR',{
     weekday:'long',
     year : 'numeric',
     month:'long',
     day: 'numeric'
 });
document.getElementById("date").innerHTML=datelocalelongue;
 
function GetFileInfo () {
    let message = "";
    let date = new Date(document.lastModified);
    date = date.toLocaleDateString('fr-FR',{
        weekday:'long',
        year : 'numeric',
        month:'long',
        day: 'numeric',
        hour: 'numeric',
        minute : 'numeric'
    });
    message = "Mis à jour le " + date;
    document.getElementById("last-modified").innerHTML = message+'.';
}
console.log(GetFileInfo ());
console.log(typeof(today));
