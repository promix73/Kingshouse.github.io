var string = "Welcome to kingshouse learning centre";
var str = string.split("");
var el = document.getElementById('string');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 90);
})();


function emailFunction() {
    (async () => {

        const { value: email } = await Swal.fire({
          title: 'Enter your email address',
          input: 'email',
          inputLabel: 'Enter your email, to get our daily updates',
          inputPlaceholder: 'Enter your email address'
        }).then(function (email) {
            swal({
                icon:'success',
                text: "Thank you for registering"
            })
        })
        
        
        })()
} 
    
