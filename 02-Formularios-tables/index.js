// vamos a obtener los parametros recividos y los incertamos en el div resultados
const resul = document.getElementById("resultados")
// Buscamos los parametros que nos llegan en la url
new URLSearchParams(window.location.search).forEach((val, name) => {
    resul.append(name+":" +val)
    resul.append(document.createElement('br'))
})