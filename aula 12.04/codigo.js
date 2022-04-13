function inserir() {
    var button = document.createElement("button");
    button.innerHTML = "Enviar";
    button.setAttribute('onClick', 'showMessage()')
    console.log(button);
    
    document.body.appendChild(button);
}

function showMessage() {
    alert('Olá')
    
}