function submitfunction(){
    let firstName=document.getElementById('firstname').value;
    let lastName=document.getElementById('lastname').value;
    let email=document.getElementById('email').value;
    let reason=document.getElementById('reason').value;

    console.log(firstName,lastName,email,reason);

     if(firstName && lastName && email && reason)
     {
        alert("Form Submitted Successfully");
    }else{
        alert("All fields are required");
    }
}