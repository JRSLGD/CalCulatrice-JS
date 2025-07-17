const infos = document.querySelector('infos')


const allbtns = document.querySelectorAll('input[type="buttons"]')


function val(resulat){
    form.fenetre.value = form.fenetre.value + resulat
}

function calcule(){
    if(form.fenetre.value == ""){
        infos.innerText= 'Veilleur saisir un chiffre';
        allbtns.forEach(btn =>{
            btn.addEVentListener('click', function(){
                infos.innerText =""
            })
        })
    }else {
        form.fenetre.value = eval(form.fenetre.value)
    }
}

function suppr(){
    form.fenetre.value = "";
}