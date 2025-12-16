document.getElementById('loginForm')?.addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    if(!email || !password){
        alert('Please fill both email and password.');
        return;
    }
    // placeholder: replace with real authentication
    alert('Signed in as ' + email + ' (demo)');
    this.reset();
});