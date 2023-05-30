function encriptar() {
    let texto = document.getElementById('textArea').value;
    let tituloMensaje = document.getElementById('tituloSms');
    let parrafo = document.getElementById('parrafo');
    let img = document.getElementById('img1');

    let textoEncriptado = texto
        .replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat');
    if (texto.length != 0) {
        document.getElementById('textArea').value = textoEncriptado;
        tituloMensaje.textContent = "Texto Encriptado Exitosamente!";
        parrafo.textContent = "";
        img.src = "./Img/img2.png";
    }else{
        alert("Ingrese un texto primero");
        img.src = "./Img/img3.png";
        tituloMensaje.textContent = "No se ha encontrado ningun mensaje";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"
    }
}
