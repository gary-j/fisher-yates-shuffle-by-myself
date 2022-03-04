/* F I S H E R _ Y A T E S _ S H U F F L E - by Gary :p */
window.onload = () => {
const array = ["A","B","C","D","E","F","G"]

// 1. Nb de tour = array.length pour i = 1

// 2. Générer un nombre (X) entre 0 et array.length
// Math.floor Math.random

// 3. Prendre X et aller sur l'index du tableau correspondant 

// 4. Prendre la valeur de l'index pour : 
// a. mettre la valeur au début du tableau 'result' => shit() 
//    (ou à la fin du tableau et faire un .reverse à la fin)
// b. dans le array d'origine supprimer cette valeur => splice()

// ----  S H U F F L E _ A R R A Y  ----
// la fonction recoit un array et retourne un array mélangé
function shuffle(array){
    console.log('Array length of ',array, ' is ',array.length);

    if (!array.length){
        console.log('tableau vide, la fonction s\'arrete');
        return;
    }

    let arrayCopy = [...array];
    let result = [];
    let i=1
    while(arrayCopy.length){ // 1.
        console.log('roll n° :', i);
        console.log(arrayCopy, 'after splice');
        // 2.
        let pickShuffle = Math.floor(Math.random()* arrayCopy.length)
        console.log('N° ', pickShuffle, ' is ', arrayCopy[pickShuffle]);
        // 3-4.a
        result.unshift(arrayCopy[pickShuffle]);
        console.log(result, 'New shuffled array');
        // 4.b
        arrayCopy.splice(pickShuffle,1)
        i++;
    }
    console.log('The original array is ', array);
    console.log('The suffled array is ', result);
    return result;
}
// !!!!!    Décommenter pour faire le test
// shuffle(array);

// ----  D I S P L A Y _ S H U F F L E D _ A R R A Y  ----
function displayShuffledArray(){

    const container = document.getElementById('shuffled');

    // let test = shuffle(array);
    // console.log(test, 'test');

    let phrase = shuffle(array).reduce( (acc, cur) => {
        return acc += ' ' + cur;
    })

    console.log(phrase, ' est la phrase extraite d\' un tableau mélangé');

    // J'insère la phrase dans la balise <p>
    container.textContent = phrase;

}

displayShuffledArray()

// ----  D I S P L A Y _ O R I G I N A L _ A R R A Y  ----
function displayOriginalArray(array){

    const container = document.getElementById('original');

    container.textContent = array.reduce( (acc, val) => {
        return acc += ' '+ val;
    })

}

displayOriginalArray(array)

}

// Fier de moi :p