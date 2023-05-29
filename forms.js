console.log('Welcome to project 4');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validName=false;
let validEmail=false;
let validPhone=false;
// $('#success').hide();
// $('#failure').hide();
console.log(name, email, phone);
//adding blur event to all the required tags
name.addEventListener('blur', () => {
    console.log('name is blurred')
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('your name is valid');
        name.classList.remove('is-invalid');
        validName=true;
    }
    else {
        console.log('your name is not valid');
        name.classList.add('is-invalid');
        validName=false;
    }
})
email.addEventListener('blur', () => {
    console.log('email is blurred')
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('your email is valid');
        email.classList.remove('is-invalid');
        validEmail=true;
    }
    else {
        console.log('your email is not valid');
        email.classList.add('is-invalid');
        validEmail=false;
    }


})
phone.addEventListener('blur', () => {
    console.log('phone is blurred')
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone=true;
    }
    else {
        console.log('your phone is not valid');
        phone.classList.add('is-invalid');
        validPhone=false;
    }

})
let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Submiited')
    if(validPhone&&validName&&validEmail)
    {
        console.log('Your form is valid');
        let success = document.getElementById('success');
        success.classList.add('show');
        //to remove the further gap on screen we are using jquery hide and show methods
        $('#failure').hide();
        $('#success').show();

    }
    else{
        console.log('Your either of the field is invalid');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        $('#success').hide();
        $('#failure').show();//this will not add any class to the failure div so upper classlist command is must.
    }
    
})