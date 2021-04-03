document.getElementById("progress").style.display="none"; 
document.getElementById("comment").style.display="none"; 
document.getElementById("alert").style.display="none"; 
document.getElementById("bar").style.display = "none";
document.getElementById("reg").style.display = "none";
document.getElementById("work").style.display = "none";
	
 
var change_count = 0;
function changed() {


  

    if (change_count === 1 /* NUMBER OF FORM PAGES */) {
	    
		console.log('iframe source has changed: ', change_count);
		
		//setTimeout(function(){alert('File Upload Completed')}, 200);
        setTimeout(function(){document.getElementById('display').innerHTML = 
                    'Data uploaded successfully.';}, 200);
		 setTimeout(function(){document.getElementById('con').innerHTML = 
                    'You will receive an automated confirmation mail within 60s !';}, 200);			
		//document.getElementById('display').innerHTML = 
         //           'File uploaded successfully.';
		document.getElementById("form").reset()
		document.getElementById("form").style.display = "none";
		document.getElementById("progress").style.display = "none";
		document.getElementById("resume").style.display = "none";
		document.getElementById("comment").style.display="none"; 
		document.getElementById("bar").style.display = "none";
		document.getElementById('attach').value= null;
		
		
		
    }
    else {

        window.change_count += 1;

    }
}

      console.log('helloworld');




function UploadFile() {
	var flag=0;
	
	var name = document.forms["RegForm"]["name"].value; 
	var email = document.forms["RegForm"]["email"].value; 
	var phone = document.forms["RegForm"]["contact"].value; 
	var regno = document.forms["RegForm"]["regno"].value; 
	var branch = document.forms["RegForm"]["branch"].value; 
	var classx = document.forms["RegForm"]["classx"].value; 
	var classx = document.forms["RegForm"]["classx"]; 
	var classxii = document.forms["RegForm"]["classxii"].value; 
	var btech = document.forms["RegForm"]["btech"].value; 
	var file=document.getElementById("attach").value;

	
	if(name == "" ){
	document.getElementById("progress").style.display="none"; 
	document.getElementById("btnupload").style.display="block";
	document.getElementById("alert").style.display="block"; 
	document.getElementById("myBarr").style.display = "none";
	document.getElementById("bar").style.display = "none";
	}
	else if(email==""){
     document.getElementById("progress").style.display="none"; 
	document.getElementById("btnupload").style.display="block";
	document.getElementById("alert").style.display="block"; 
	document.getElementById("bar").style.display = "none";
	}
	else if(phone==""){
     document.getElementById("progress").style.display="none"; 
	document.getElementById("btnupload").style.display="block";
	document.getElementById("alert").style.display="block"; 
	document.getElementById("bar").style.display = "none";
	}
	else if(regno==""){
     document.getElementById("progress").style.display="none"; 
	document.getElementById("btnupload").style.display="block";
	document.getElementById("alert").style.display="block"; 
	document.getElementById("bar").style.display = "none";
	}
	else if(classx==""){
     document.getElementById("progress").style.display="none"; 
	document.getElementById("btnupload").style.display="block";
	document.getElementById("alert").style.display="block"; 
	document.getElementById("bar").style.display = "none";
	}
	else if(classxii==""){
     document.getElementById("progress").style.display="none"; 
	document.getElementById("btnupload").style.display="block";
	document.getElementById("alert").style.display="block"; 
	document.getElementById("bar").style.display = "none";
	}
	else if(btech==""){
     document.getElementById("progress").style.display="none"; 
	document.getElementById("btnupload").style.display="block";
	document.getElementById("alert").style.display="block"; 
	document.getElementById("bar").style.display = "none";
	}
	else if(file==""){
    document.getElementById("progress").style.display="none"; 
	document.getElementById("btnupload").style.display="block";
	document.getElementById("alert").style.display="block"; 
	document.getElementById("bar").style.display = "none";
	}else{
	
	flag=1;
	
    }

	if(flag==1){
	document.getElementById("progress").style.display="block"; 
	document.getElementById("btnupload").style.display="none"; 
	document.getElementById("comment").style.display="block"; 
	document.getElementById("alert").style.display="none"; 
	document.getElementById("form").style.display = "none";
	document.getElementById("resume").style.display = "none";
	document.getElementById("bar").style.display = "block";
    
	//event.preventDefault


	var reader = new FileReader();
	var file = document.getElementById('attach').files[0];
	reader.onload = function(){
	  document.getElementById('fileContent').value=reader.result;
	  document.getElementById('filename').value=file.name;
	  document.getElementById('form').submit();
	  }
	reader.readAsDataURL(file);
	
	
	
	//file.value = '';
	
	//return false 

	}
  var elem = document.getElementById("myBarr");   
  var width = 20;
  var id = setInterval(frame, 800);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      
      elem.innerHTML = width * 1  + 10 + '%';
    }
  }



}
	
	
	// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

hrs=today.getHours();

mm=parseInt(mm);
dd=parseInt(dd);

today = mm + '/' + dd + '/' + yyyy;
var set_mon=4;
var set_date=2;


if(mm==set_mon && dd>=set_date){
	modal.style.display = "none";
	document.getElementById("reg").style.display = "block";
	
}else if(hrs<9 || hrs>23){
	  modal.style.display = "none";
	  document.getElementById("work").style.display = "block";
 }else{
	
  modal.style.display = "block";
}



}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



