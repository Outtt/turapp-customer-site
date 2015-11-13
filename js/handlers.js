
var package;

$("#signUpMini").click(function() {
	$('#signUpModal').modal('show');
	package = "mini";
});

$("#signUpMatterhorn").click(function() {
	$('#signUpModal').modal('show');
	package = "matterhorn";
});

$("#signUpEverest").click(function() {
	$('#signUpModal').modal('show');
	package = "everest";
});

$("#signUpFormNextButton").click(function(){
	
	$('#termsModal').modal('show');
});

$("#registerButton").click(function(){
	$('#termsModal').modal('hide');
	registerUser();
})


function registerUser() {

	var customerName = $("#customerName").val();
	var customerWebsite = $("#customerWebsite").val();
	var customerPhone = $("#customerPhone").val();
	var customerEmail = $("#customerEmail").val();
	var lanNorwegian = $("#lanNorwegian").prop('checked');
	var lanEnglish = $("#lanEnglish").prop('checked');
	var lanGerman = $("#lanGerman").prop('checked');


	var url = "http://backend.turkompisen.no/turapp/registerNewCustomer";
	//url = "http://localhost:4000/registerNewCustomer"
	$.post( url, { 
		customerName: customerName, 
		customerWebsite: customerWebsite,
		customerPhone: customerPhone,
		customerEmail: customerEmail,
		lanNorwegian: lanNorwegian,
		lanEnglish: lanEnglish,
		lanGerman: lanGerman,
		package: package
	} )
	.fail(function() {
	    $("#signUpFailModal").modal('show');
	})
	.done(function( data ) {
		$('#signUpModal').modal('hide');
		$("#signUpSuccessModal").modal('show');
	    
	});

}