let $app = document.getElementById('app');

let root = null;
let useHash = true;

let hash = '#'

// http://127.0.0.1:5500/bu%E1%BB%95i%2012/router/#/about
let router = new Navigo(root, useHash, hash);

router.on("/sign-in", function () {
    $app.innerHTMl = `<form-login><form-login>`

}).resolve();

window.router = router;
