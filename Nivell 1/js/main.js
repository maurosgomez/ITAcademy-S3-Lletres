// EXERCICI 1

let nom = ['M', 'A', 'U', 'R', 'O'];

for (let i = 0; i < nom.length; i++) {
    console.log(nom[i]);
}


// EXERCICI 2

console.log("Partim del nom " + nom.join(""));

for (let i = 0; i < nom.length; i++) {
    
    if (nom[i] == 'A' || nom[i] == 'E' || nom[i] == 'I') {
        console.log("He trobat la VOCAL: " + nom[i]);
    } else if (nom[i] == 'O' || nom[i] == 'U') {
        console.log("He trobat la VOCAL: " + nom[i]);
    } else if (nom[i] <= 100) {
        console.log("Els noms de persones no contenen el número: " + nom[i]);
    } else {
        console.log("He trobat la CONSONANT: " + nom[i]);
    }
}


// EXERCICI 3

let map = new Object();

    for (let i = 0; i < nom.length; i++) {
        map[nom[i]] = (map[nom[i]] || 0) + 1;
    }

console.log(map);


// EXERCICI 4

let cognom = ['G', 'O', 'M', 'E', 'Z'];
let fullName = nom.concat(" ", cognom);

console.log(fullName);
