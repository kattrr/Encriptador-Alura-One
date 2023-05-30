function desencriptar() {
    let texto = document.getElementById('textArea').value;
    let tituloMensaje = document.getElementById('tituloSms');
    let parrafo = document.getElementById('parrafo');
    let img = document.getElementById('img1');
  
    let textoCifrado = texto
      .replaceAll('enter', 'e')
      .replaceAll('imes', 'i')
      .replace('ai', 'a')
      .replace('ober', 'o')
      .replace('ufat', 'u');
    
      if (texto.length != 0) {
        document.getElementById('textArea').value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        img.src = "../Img/img2.png";
      } else {
        img.src = "../Img/img3.png";
        alert("Ingrese un texto primero");
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        
    }
}
