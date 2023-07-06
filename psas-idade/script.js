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
                img.setAttribute('src','../img/bebeM.jpeg')

            } else if (idade < 21){
                // Jovem 
                img.setAttribute('src','../img/jovemM.jpeg')

            } else if (idade < 50){
                // adulto
                img.setAttribute('src','../img/adultoM.jpeg')

            } else {
                // Idoso
                img.setAttribute('src','../img/velhoM.jpeg')

            }

        } else if (fsex[1].checked) {
            genero = 'Mulher';
            
            if(idade >= 0 && idade < 12){
                // Criança
                img.setAttribute('src','../img/bebeF.jpeg')

            } else if (idade < 21){
                // Jovem 
                img.setAttribute('src','../img/jovemF.jpeg')

            } else if (idade < 50){
                // adulto
                img.setAttribute('src','../img/adultoF.jpeg')

            } else {
                // Idoso
                img.setAttribute('src','../img/velhaF.jpeg')

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img)
    }
}
