//SNACK 4
//Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) 
//prendendo alternativamente gli elementi da uno e dall’altro
var array_letters = ["a", "b", "c"];
var array_nums = [1, 2, 3];
var mix = [];

function unite (array_letters, array_nums) {
    if (array_letters.length == array_nums.length){
        var mix = [];
        for (var i=0; i<array_letters.length; i++){
            mix.push([array_letters[i], array_nums[i]]);
        }
        return mix; 
    } 
}
console.log(mix);

//ISSUE - can't print in console properly