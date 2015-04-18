
var inserirTema = function(tema) {
	var linha = "<div class='temas temaAprender'>".
	concat(tema).
	concat("<input type='image' src='deletar.jpg' id='delete'></input>").
	concat("<input type='image' src='mover.jpg' id='mover'></input>").
	concat("</div><div style='clear: both'></div>");	
$("#aprender").after(linha);
	
}

$(document).ready(function(){
	
	/* Inserir novo tema na lista de temas a aprender apertando ENTER */
	$(document).keypress(function(tecla) {
		if (tecla.which == 13) {
			var tema = $("#input").val();
			inserirTema(tema);
		}
	});
  
	/* Inserir novo tema na lista de temas a aprender clincando no botão Inserir*/
	$("#inserir").click(function(){
		var tema = $("#input").val();
		inserirTema(tema);
	});
	
	/* Deletar um tema da lista de temas a aprender/temas aprendidos */
	$(document).on("click", "#delete", function(){
		$(this).parent().fadeOut("fast", function(){
			$(this).remove();
		});
	});
	
	/* Mover um tema da lista de temas a aprender para a lista de temas aprendidos */
	$(document).on("click", "#mover", function(){
		$("#aprendidos").after($(this).parent());
		$(this).parent().removeClass("temaAprendido");
		$(this).parent().addClass("temaAprendido");
		$(this).remove();
	
	});
	
});



