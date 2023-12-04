async function RegisterUser() {
  var full_name = document.getElementById("full_name").value; // $("#full_name").val();
  var User_Email = document.getElementById("User_Email").value; // $("#User_Email").val();
  var User_Phone = document.getElementById("User_Phone").value; // $("#User_Phone").val();
  if (full_name == "" || User_Email == "" || User_Phone == "") {
    alert("Please Fill The Form");
  } else {
    const formData = new FormData();
    formData.append("full_name", full_name);
    formData.append("User_Email", User_Email);
    formData.append("User_Phone", User_Phone);
    let req = await fetch("https://kalamacademy.org/learn/mail.php", {
      method: "POST",
      body: formData,
    });
    let data = await req.json();
    console.log(data);
    if (data > 0) {
      location.href =
        "https://www.kalamacademy.org/thank-for-signup-for-free-demo-of-grocery-business/";
    } else {
      alert(data);
    }
  }
}

/*
function RegisterUser(){
    var full_name=$('#full_name').val();
    var User_Email=$('#User_Email').val();
    var User_Phone=$('#User_Phone').val();
   if(full_name==''||User_Email==''||User_Phone==''){
       alert("Please Fill The Form");
   }else{
    $.ajax({
				type: 'POST',  // http method
				url: "https://kalamacademy.org/learn/mail.php",
				data: { 'full_name':full_name,'User_Email':User_Email,'User_Phone':User_Phone },  // data to submit
				success: function (data, status, xhr) {
					if(data>0){location.href = "https://www.kalamacademy.org/thank-for-signup-for-free-demo-of-grocery-business/";}else{alert(data);}
				},
				error: function (jqXhr, textStatus, errorMessage) {
				alert(errorMessage);
					}
			});
   }    
}
*/
/*
function RegisterUser() {
var full_name=document.getElementById("full_name").value;
var User_Email=document.getElementById("full_name").value;
var User_Phone=document.getElementById("full_name").value;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     if(data>0){location.href = "https://www.kalamacademy.org/thank-for-signup-for-free-demo-of-grocery-business/";}else{alert(data);}
    }else{alert("Error: Please Try Again or Call on Number");}
  };
  xhttp.open("POST", "https://kalamacademy.org/learn/mail.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 
  xhttp.send("full_name=" + full_name + "&User_Email=" + User_Email + "&User_Phone=" + User_Phone);
}
*/