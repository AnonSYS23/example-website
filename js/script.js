
const btnEnd = document.getElementById('btn-end')
const form = document.getElementById('contact-form')
const contactBtn = document.getElementById('contact')
let toogle = true 

contactBtn.addEventListener('click', () => {
  toogle = !toogle

  if (toogle == true) {
    form.style.display = 'none'
  }

  if (toogle == false) {
    form.style.display = 'grid'
  }
})

btnEnd.addEventListener('click', () => {
  toogle = !toogle

  if (toogle == true) {
    form.style.display = 'none'
  }

  if (toogle == false) {
    form.style.display = 'grid'
  }
})

boton.addEventListener('click', function() { toogle = !toogle 
  if(toogle === true ){
      body.style.background = 'white'
          products.style.background = 'gray'
          p.style.color = 'black'
          h3.style.color = 'black'
          h31.style.color = `black`
          label.style.color = 'black'
  }
  if(toogle === false) {
      body.style.background = '#18100c'
          products.style.background = '#000000'
          p.style.color = 'white'
          h3.style.color = 'white'
          h31.style.color = `white`
          label.style.color = 'white'
  }
} )

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    var name = document.getElementById("name").value;
    var email = "dylanp.arango12@gmail.com";
    var message = document.getElementById("message").value;

    function enviarCorreo(destinatario, asunto, cuerpo) {
        const correo = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
        window.open(correo);
      }

    if (!name || !email || !message) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    alert("Abriendo gmail para enviar tu mensaje...");
    document.getElementById("contact-form").reset();
    
    enviarCorreo(email, name, message);
    
  });

