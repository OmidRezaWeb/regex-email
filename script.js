function getEmail(){
    let inputEmail = document.getElementById('email').value;
    const pattern = /^([a-zA-Z0-9\.-]+)@([a-z0-9]+).([a-z]{2,5})(.[a-z]{2,5})?$/;    
    if(pattern.test(inputEmail)){
        alert('valid email')
    }else{
        alert('invalid email')
    }
}