var d = new Date();
var jours = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
//var date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
var date = jours[d.getDay()]+' '+ d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear();
//console.log(date);