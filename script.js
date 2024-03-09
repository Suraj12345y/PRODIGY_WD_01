var myForm=document.querySelector('#myForm')

function validate(){
    if(myForm.firstname.value==""){
        alert("Firstname is required")
        myForm.firstname.focus()
        return false
    }
    else if(myForm.lastname.value==""){
        alert("Lastname is required")
        myForm.lastname.focus()
        return false
    }
    else if(myForm.emailAdd.value==""){
        alert("email address is required")
        myForm.emailAdd.focus()
        return false
}
else if(myForm.mobile.value==""){
    alert("Lastname is required")
    myForm.mobile.focus()
    return false
}
else if(myForm.address.value==""){
    alert("Lastname is required")
    myForm.address.focus()
    return false
}
else if(myForm.department.value=""){
    alert("department is required")
    myForm.department.focus()
    return false
}
else if(myForm.getBoundingClientRect.value=""){
    alert("gender is required");
    myForm.gender.focus()
    
}
else{
    return true
}
}