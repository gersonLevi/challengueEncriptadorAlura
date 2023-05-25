// PRIMERO TRAEMOS TODOS ELEMENTOS DEL DOM
const textoEncriptar = document.querySelector('.textarea-entrada');
const textoEncriptado = document.querySelector('.textarea-salida');
const btnEncriptar = document.querySelector('.btn-encriptar');
const btnDesencriptar = document.querySelector('.btn-desencriptar');
const btnCopiar = document.querySelector('.btn-copiar');
const btnLimpiar = document.querySelector('.btnLimpiar');

// FUNCION PARA LIMPIAR LA PAGINA WEB
function limpiarPagina() {
    textoEncriptar.value = '';
    textoEncriptar.focus();
    textoEncriptado.value = '';
    textoEncriptado.style.background = '';
    textoEncriptado.style.height = '50%';
    document.querySelector('.contenedor-parrafos').style.display = 'block';
    btnCopiar.style.display = 'none';
}

// FUNCION PARA VERIFICAR QUE EL TEXTO NO TENGA CARACTERES ESPECIALES
function validarTexto(texto) {
    const verificarString= /^[a-zA-Z0-9\s]+$/;
    return verificarString.test(texto);
}

// DEFINIMOS UN FOCO AL TEXTAREA DE ENTRADA
textoEncriptar.focus();

// LOGICA PARA ENCRIPTAR
btnEncriptar.addEventListener('click', () => {
    let frase;

    if (textoEncriptar.value === '') {
        document.querySelector('#div-alerta').classList.add('show');

        setTimeout(()=>{
            document.querySelector('#div-alerta').classList.remove('show');
        }, 1300);

        textoEncriptar.focus();
    } else if (validarTexto(textoEncriptar.value)) {
        
        frase = textoEncriptar.value.toLowerCase().replace(/[eé]/img, 'enter');
        frase = frase.replace(/[ií]/img, 'imes');
        frase = frase.replace(/[aá]/img, 'ai');
        frase = frase.replace(/[oó]/img, 'ober');
        frase = frase.replace(/[uú]/img, 'ufat');
        
        textoEncriptado.value = frase;

        textoEncriptado.style.background = 'none';
        textoEncriptado.style.height = '66%';
        document.querySelector('.contenedor-parrafos').style.display = 'none';
        btnCopiar.style.display = 'block';  
        textoEncriptar.value = '';
    } else {
        alert('No se aceptan carateres especiales')
        textoEncriptar.value = '';
        textoEncriptar.focus();
        textoEncriptado.value = '';
        textoEncriptado.style.background = '';
        textoEncriptado.style.height = '50%';
        document.querySelector('.contenedor-parrafos').style.display = 'block';
        btnCopiar.style.display = 'none';
    }

});

// LOGICA PARA ENCRIPTAR
btnDesencriptar.addEventListener('click', () => {
    let frase;

    if (textoEncriptar.value === '') {
        document.querySelector('#div-alerta').classList.add('show');

        setTimeout(()=>{
            document.querySelector('#div-alerta').classList.remove('show');
        }, 1300);

        textoEncriptar.focus();
    } else {
        
        frase = textoEncriptar.value.toLowerCase().replace(/enter/img, 'e');
        frase = frase.replace(/imes/img, 'i');
        frase = frase.replace(/ai/img, 'a');
        frase = frase.replace(/ober/img, 'o');
        frase = frase.replace(/ufat/img, 'u');
        
        textoEncriptado.value = frase;

        textoEncriptado.style.background = 'none';
        textoEncriptado.style.height = '66%';
        document.querySelector('.contenedor-parrafos').style.display = 'none';
        btnCopiar.style.display = 'block';
        textoEncriptar.value = '';
    }
})

btnCopiar.addEventListener('click', async () => {
    await navigator.clipboard.writeText(textoEncriptado.value);

    textoEncriptado.value = '';
    textoEncriptar.value = '';
    textoEncriptar.focus();
    textoEncriptado.style.background = '';
    textoEncriptado.style.height = '50%';
    document.querySelector('.contenedor-parrafos').style.display = 'block';
    btnCopiar.style.display = 'none';
})

// LOGICA PARA LIMPIAR 
btnLimpiar.addEventListener('click', limpiarPagina);

// LOGICA PARA LIMPIAR EL INPUT CUANDO SE BORRE SU STRING DE ESTE
textoEncriptar.addEventListener('input', () => {
    if (textoEncriptar.value === '') {
        limpiarPagina();
    }
});