function validation() 
{
    let fname = document.getElementById('fname');
    let nameRegx = /[0-9~!@#$%^&*()_+=\[\]{};':"\\|,.<>\/?]/.test(fname.value);
    if (nameRegx) {
        alert("Invalid name format.");
        return false;
    }
  
    let email = document.getElementById('femail').value;
    let emailRegx = /^[^\s@]+@(gmail|yahoo|outlook|hotmail|icloud|protonmail)\.(com|net|org|co\.uk|in|edu)$/i;
    if (!email) {
        alert("Please enter your email.");
        return false;
    }
    if (!emailRegx.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
 
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm_password').value;
    let passwordRegx = /^[A-Za-z0-9]{8,}$/;
    if (!passwordRegx.test(password)) {
        alert("Password must:\n• Be at least 8 characters\n• Contain only letters and numbers.");
        return false;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    let dobInput = document.getElementById('dob').value;
    if (!dobInput) {
        alert("Please select your date of birth.");
        return false;
    }

    let dob = new Date(dobInput);
    let today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    let monthDiff = today.getMonth() - dob.getMonth();
    //if birthday occurred this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    if (age < 18) {
        alert("User must be at least 18 years old.");
        return false;
    }

    let country = document.getElementById('country').value;
    if (!country) {
        alert("Please select a country.");
        return false;
    }
    
    let genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected) {
        alert("Please select your gender.");
        return false;
    }

    let termsSelected = document.getElementById('terms').value;
    if (termsSelected != yes) {
        alert("Please select the terms and conditions.");
        return false;
    }
    
    let colorInput = document.getElementById('userColor');
    let userPreferredColor = colorInput.value;
    return true; 
}
function login()
{
    let email = document.getElementById('login-email').value;
    let emailRegx = /^[^\s@]+@(gmail|yahoo|outlook|hotmail|icloud|protonmail)\.(com|net|org|co\.uk|in|edu)$/i;
    if (!email) {
        alert("Please enter your email.");
        return false;
    }
    if (!emailRegx.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
 
    let password = document.getElementById('login-password').value;
    let passwordRegx = /^[A-Za-z0-9]{8,}$/;
    if (!passwordRegx.test(password)) {
        alert("Password must:\n• Be at least 8 characters\n• Contain only letters and numbers.");
        return false;
    }
}