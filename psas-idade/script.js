function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked) {
            genero = 'Homem';

            if(idade >= 0 && idade < 16){
                // Criança
                img.setAttribute('src','../img/criançaM.jpg')

            } else if (idade < 21){
                // Jovem 
                img.setAttribute('src','../img/jovemM.jpg')

            } else if (idade < 50){
                // adulto
                img.setAttribute('src','../img/homem.jpeg')

            } else {
                // Idoso
                img.setAttribute('src','../img/idosoM.jpeg')

            }

        } else if (fsex[1].checked) {
            genero = 'Mulher';
            
            if(idade >= 0 && idade < 12){
                // Criança
                img.setAttribute('src','../img/criançaF.jpeg')

            } else if (idade < 21){
                // Jovem 
                img.setAttribute('src','../img/jovemF.jpg')

            } else if (idade < 50){
                // adulto
                img.setAttribute('src','../img/mulher.jpg')

            } else {
                // Idoso
                img.setAttribute('src','../img/idosaF.jpeg')

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img)
    }
}
