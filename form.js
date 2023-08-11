const signinForm = document.querySelector('.signin-form');
const signupForm = document.querySelector('.signup-form');
let switchAccLink = document.querySelector('.switch-acc a');
let loginswitch;
switchAccLink.addEventListener('click', function() {
    signinForm.classList.toggle('hidden-form');
    signupForm.classList.toggle('hidden-form');
    
});

