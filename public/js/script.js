
let details = document.getElementById('details')
let listado = document.getElementById('listado')
let listScreen = document.getElementById('listScreen')
let vaciotexto = document.getElementById('vaciotexto')
let save = document.getElementById('cargaAdd').addEventListener('click', function(){
    var carga = new bootstrap.Modal(document.getElementById('carga'), {})
    let product = document.getElementById('cargaProducto').value
    let icon = document.getElementById('cargaIcono').value
    let desc = document.getElementById('cargaDesc').value
    document.getElementById('cargaProducto').value = null;
    document.getElementById('cargaIcono').value = null;
    document.getElementById('cargaDesc').value = null;
    let model = `<li class="list-group-item" data-producto="${product}" data-icono="${icon}" data-info="${desc}"><img src="${icon}" alt="${product}" class="listadoIcono">${product}</li>`
    console.log("Datos: ", product, icon, desc, listScreen)
    listScreen.innerHTML += model
    carga.hide()
    vaciotexto.style.display = "none"
    listado.style.display = "block"
})

let click = document.getElementById('listScreen').addEventListener('click', function(e){
    document.getElementById('detalleProducto').innerHTML = e.target.getAttribute('data-producto')
    document.getElementById('detalleIcono').innerHTML = e.target.getAttribute('data-icono')
    document.getElementById('detalleInfo').innerHTML = e.target.getAttribute('data-info')
    console.log(e.target.getAttribute('data-product'))
    listado.style.display = "none"
    details.style.display = "block"
}) 

let cerrar = document.getElementById('cerrar').addEventListener('click', function(){
    listado.style.display = "block"
    details.style.display = "none"
    let success = document.getElementById('success')
    success.style.display = 'none'
})