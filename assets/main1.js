//SNACK 1
//Crea un array di 10 oggetti che rappresentano una zucchina
//indicando varietà, peso e lunghezza
var lista_zucch = [

    zucch1 = {
        varietà: "milanese",
        peso: 1,
        lunghezza: 2
    },
    
    zucch2 = {
        varietà: "nizza",
        peso: 1,
        lunghezza: 4
    },
    
    zucch3 = {
        varietà: "piacenza",
        peso: 1,
        lunghezza: 6
    },
    
    zucch4 = {
        varietà: "pugliese",
        peso: 1,
        lunghezza: 8
    },
    
    zucch5 = {
        varietà: "triestina",
        peso: 1,
        lunghezza: 10
    },
    
    zucch6 = {
        varietà: "striata",
        peso: 1,
        lunghezza: 12
    },
    
    zucch7 = {
        varietà: "siciliano",
        peso: 1,
        lunghezza: 14
    },
    
    zucch8 = {
        varietà: "fiorentina",
        peso: 1,
        lunghezza: 16
    },
    
    zucch9 = {
        varietà: "faenza",
        peso: 1,
        lunghezza: 18
    },
    
    zucch10 = {
        varietà: "romanesco",
        peso: 1,
        lunghezza: 20
    }

];

//calcola peso di tutte le zucchine
var pesoTot = 0;
for (var i=0; i<lista_zucch.length; i++){
    pesoTot += lista_zucch[i].peso;
}
console.log(pesoTot);






