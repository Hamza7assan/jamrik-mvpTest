const form= document.getElementById('Form');
const emailInput= document.getElementById('emailBox');
const passwordInput= document.getElementById('passwordBox') 
const fullNameInput= document.getElementById('fullNameBox');
const confirmPasswordInput= document.getElementById('confirmPasswordBox');
const errorMessages=document.getElementById('errorMessages');

form.addEventListener('submit', e => {
    let errors=[];
    if(fullNameInput){
        errors=getSignUpErrors(fullNameInput.value, emailInput.value, passwordInput.value, confirmPasswordInput.value);
    }
    else{
        errors=getLogInErrors(emailInput.value, passwordInput.value);
    }
    if (errors.length>0){
    e.preventDefault();
    errorMessages.innerText=errors.join('. ');
    errorMessages.style.color = "#d10000d3";
}
else{
    e.preventDefault();
    window.location.href='mvpHsCode.html';
}
});



function getSignUpErrors(fullName, email, password, confirmPassword){
    let errors=[];
    if(fullName === '' || fullName == null){
        errors.push('Full name is required.');
        fullNameInput.parentElement.parentElement.classList.add('incorrect');
    }
    if(fullName.length<3 && fullName!==""){
        errors.push('Full name must be at least 3 characters.');
        fullNameInput.parentElement.parentElement.classList.add('incorrect');
    }


    if(email === '' || email == null){
        errors.push('Email is required.');
        emailInput.parentElement.parentElement.classList.add('incorrect');
    }
    if((!email.includes('.')||!email.includes('@')) && email!==""){
        errors.push('Please enter a valid email address.');
        emailInput.parentElement.parentElement.classList.add('incorrect');
    }
    if(email.includes(' ')){
        errors.push('Email cannot contain spaces.');
        emailInput.parentElement.parentElement.classList.add('incorrect');
    }


    if(password === '' || password == null){
        errors.push('Password is required.');
        passwordInput.parentElement.parentElement.classList.add('incorrect');
    }
    
    if(password.length<8 && password!==""){
        errors.push('Password must be at least 8 characters');
        passwordInput.parentElement.parentElement.classList.add('incorrect');
    }
    
    if(password.includes(' ')){
        errors.push('Password cannot contain spaces.');
        passwordInput.parentElement.parentElement.classList.add('incorrect');
    }
    if(!/[A-Z]/.test(password))
    {
        errors.push('Password must contain at least one uppercase letter.');
        passwordInput.parentElement.parentElement.classList.add('incorrect');
    }


    if(confirmPassword === '' || confirmPassword == null){
        errors.push('Please confirm your password.');
        confirmPasswordInput.parentElement.parentElement.classList.add('incorrect');
    }
    if (password !== confirmPassword && confirmPassword!==""){ 
        errors.push('Passwords do not match');
        confirmPasswordInput.parentElement.parentElement.classList.add('incorrect');
    }
   
    return errors;
};
function getLogInErrors(email, password){
    let errors=[];
    if(email==='' || email==null){
        errors.push('Email is required.');
        emailInput.parentElement.parentElement.classList.add('incorrect');
    }
    if((!email.includes('.')||!email.includes('@')) && email!==""){
        errors.push('Please enter a valid email address.');
        emailInput.parentElement.parentElement.classList.add('incorrect');
    }
    if(email.includes(' ')){
        errors.push('Email cannot contain spaces.');
        emailInput.parentElement.parentElement.classList.add('incorrect');
    }


    if(password==='' || password==null){
        errors.push('Password is required.');
        passwordInput.parentElement.parentElement.classList.add('incorrect');
    }
    if(password.length<8 && password!==""){
        errors.push('Password must be at least 8 characters');
        passwordInput.parentElement.parentElement.classList.add('incorrect');
    }
    
    if(password.includes(' ')){
        errors.push('Password cannot contain spaces.');
        passwordInput.parentElement.parentElement.classList.add('incorrect');
    }
    
    if(!/[A-Z]/.test(password))
    {
        errors.push('Password must contain at least one uppercase letter.');
        passwordInput.parentElement.parentElement.classList.add('incorrect');
    }
    
    return errors;
};
const allInputs=[emailInput, passwordInput, fullNameInput, confirmPasswordInput];
allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if(input.parentElement.parentElement.classList.contains('incorrect')){
            input.parentElement.parentElement.classList.remove('incorrect');
            errorMessages.innerText='';
        }
    })
    });

    let eyeIcon1=document.getElementById('eyeIcon1');
    let eyeIcon2=document.getElementById('eyeIcon2');
    

    let password1=document.getElementById('passwordBox');
    let password2=document.getElementById('confirmPasswordBox');
    
    if(eyeIcon1 && password1){
        eyeIcon1.onclick=function(){
            if(password1.type==='password'){
                password1.type='text';
                eyeIcon1.src='icons/eye.png';
            }else{
                password1.type='password';
                eyeIcon1.src='icons/eyeOff.png';
            }
        }
    }
    
    if(eyeIcon2 && password2){
        eyeIcon2.onclick=function(){
            if(password2.type==='password'){
                password2.type='text';
                eyeIcon2.src='icons/eye.png';
            }else{
                password2.type='password';
                eyeIcon2.src='icons/eyeOff.png';
            }
        }
    }
    

                let eyeIcon3=document.getElementById('eyeIcon');
                let password3=document.getElementById('passwordBox');

                if(eyeIcon3 && password3){
                  eyeIcon3.onclick=function(){
                if(password3.type==='password'){
                password3.type='text';
                eyeIcon3.src='icons/eye.png';
                 }else{
                password3.type='password';
                eyeIcon3.src='icons/eyeOff.png';
            }
        }
    }
          