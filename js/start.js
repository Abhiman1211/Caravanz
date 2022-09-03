mobiscroll.settings = {
    theme: 'ios',
    themeVariant: 'light'
};

var register = mobiscroll.popup('#demo', {
        display: 'center',
        buttons: [{
            text: 'Sign Up',
            handler: 'set'
        }]
    }),
    login = mobiscroll.popup('#login', {
        display: 'center',
        buttons: [{
            text: 'Log In',
            handler: 'set'
        }],
        onMarkupReady: function (event, inst) {
            var btns = event.target.querySelectorAll('.md-social-btn');
            for (var i = 0; i < btns.length; ++i) {
                btns[i].addEventListener('click', function () {
                    inst.hide();
                });
            }
        }
    });


document
    .getElementById('showRegister')
    .addEventListener('click', function () {
        register.show();
    }, false);

document
    .getElementById('showLogin')
    .addEventListener('click', function () {
        login.show();
    }, false);
