function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 12 && hora <12) {
        //Bom Dia
        img.src = '../img/FotodaManhã.jpeg'
        document.body.style.background = '#ffd889'
    } else if(hora >= 12 && hora <18) {
        //Boa Tarde
        img.src = '../img/FotodaTarde.jpeg'
        document.body.style.background = '#fe775a'
    } else {
        //Boa Noite
        img.src = '../img/FotodaNoite.jpeg'
        document.body.style.background = '#080b10'
    }
}