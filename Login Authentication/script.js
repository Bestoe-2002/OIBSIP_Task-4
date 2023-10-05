let userData = localStorage.getItem('userData');
if (!userData) {
    localStorage.setItem('userData', JSON.stringify({}));
}


function registerUser() {
    const registerUsername = document.getElementById('registerUsername').value;
    const registerPassword = document.getElementById('registerPassword').value;

    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData[registerUsername]) {
        alert('Username already exists. Please choose a different one.');
    } else {
  
        const hashedPassword = btoa(registerPassword);
        userData[registerUsername] = hashedPassword;
        localStorage.setItem('userData', JSON.stringify(userData));
        alert('Registration successful. You can now log in.');
    }
}

function loginUser() {
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData[loginUsername]) {

        const hashedPassword = btoa(loginPassword);

        if (hashedPassword === userData[loginUsername]) {
         
            window.location.href = 'newpage.html'; 
        } else {
            alert('Login failed. Please check your username and password.');
        }
    } else {
        alert('Login failed. Please check your username and password.');
    }
}


