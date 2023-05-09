$(document).on("click", "btnempezar",
		function({
			let usuario = $("#txtusuario").val();
			let password =$("txtpassword").val();
			$("lbldatis").text("usuario: "+ usuario + " - Password: " + password);
			$("#modalempezar").modal("show");
			
			
		}))