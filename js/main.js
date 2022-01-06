// functions


// call functions
$(document).ready(function(){//automatisme : à mettre à chaque fois
	
	/*console.log("jQuery est prêt !");utiliser dans le code lors de la création pour débugger au fur et à mesure	
	alert("BZH Bretagne Zone de Houle");popup*/

	var numberfive = 5 ;
	var numbertwo = 2 ;
	var paysun = 'Bretagne' ;
	var paysdeux = 'France' ;

	/*console.log(numberfive) ;
	console.log(paysun ) ;
	console.log(numberfive+numbertwo) ;
	console.log(paysun+paysdeux) ;
	console.log(numberfive*3) ;
	console.log(paysun+' '+paysdeux) ;*/
 	
	//$('#calcul').text(numberfive+numbertwo);
	//$('#calcul').html(numberfive+numbertwo);

	/*$('#calcul').click(function() {
 	console.log("Clic sur la div calcul");
	});*/

	/*$('#calcul').click(function() {
 	$('#affichage').text("Clic sur la div calcul").toggle("slow");
	});*/

	/*$('#couleur').hover(function() {
 	$('#calcul').css("background-color", "yellow");
	});*/


	/*$('body').mouseleave(function() {
		$('#aurevoir').alert("Au revoir");
	});*/


	

	$('#valider').click(function() {
		var valeur = $('#select').val();
 		console.log(valeur);
 		if (valeur == 'chien'){
	 		$('#image').html('<img src="img/chien.jpg" alt="">');
	 	}
	 	else if (valeur == 'chat'){
	 		$('#image').html('<img id="chat" src="img/chat.jpg" alt="">');
	 	
	 	}
	 	else if (valeur == 'lama'){
	 		$('#image').html('<img id="lama" src="img/lama.jpg" alt="">');
	 	}
	});


});