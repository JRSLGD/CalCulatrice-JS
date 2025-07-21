let ecran = document.getElementById('ecran');
let calculEnCours = '';


function ajouterNombre(value){
    calculEnCours += value;
    ecran.value = calculEnCours;
}

function ajouterOperation (operateur){
    const dernierCaractere = calculEnCours.slice(-1);
    if(['+','-','*','/'].includes(dernierCaractere)) return;

    calculEnCours += operateur;
    ecran.value = calculEnCours;
}
function effacer(){
    calculEnCours = '';
    ecran.value = '0';

}
function calculer(){
    try {
        if(/[a-aZ-Z]/.test(calculEnCours)) throw new Error('Nombre invalide');

        const resultat = eval(calculEnCours);
        ecran.value = resultat;
        calculEnCours = String(resultat);

    }catch(Error){
        ecran.value = 'error'
        calculEnCours = '';
    }
}