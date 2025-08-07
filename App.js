let ecran = document.getElementById('ecran');
let calculEnCours = '';
let memoire = 0;

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
function supprCaractere(){
    if(calculEnCours.length > 0 ){
        calculEnCours = calculEnCours.slice( 0, -1);
        ecran.value = calculEnCours || '0';
    }   
}
function memoriser(action){
    const valeurEcran = parseFloat(ecran.value);

    switch(action){
        
        case 'add':
            memoire += valeurEcran;
            break;
        case 'substract':
            memoire -= valeurEcran;
            break;
        case 'recall':
            ecran.value = memoire;
            calculEnCours = String(memoire);
            break;
        case 'clear':
            memoire = 0;
            break;
    }
    updateMemoryDisplay();
}
function updateMemoryDisplay(){
    const memoireActive = memoire !== 0 ;
    document.querySelectorAll ('[onclick ^="memoriser"]').forEach(btn=>{
        btn.style.border = memoireActive ? '2px solid gold' : 'none';
    });
}