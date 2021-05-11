//SNACK 2
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


//dividi in due array le zucchine in base alla lunghezza 
//(< o > di 15)
var array1 = [];
var array2 = [];

for (var i=0; i<lista_zucch.length; i++){
    if (lista_zucch[i].lunghezza < 15){
        array1.push(lista_zucch[i])
    } else if (lista_zucch[i].lunghezza > 15){
        array2.push(lista_zucch[i])
    }
}

console.log(array1);
console.log(array2);


//somma separatamente i pesi
var somma1 = 0;
for (var i=0; i<array1.length; i++){
    somma1 += array1[i].peso;
}
console.log(somma1);

var somma2 = 0;
for (var i=0; i<array2.length; i++){
    somma2 += array2[i].peso;
}
console.log(somma2);