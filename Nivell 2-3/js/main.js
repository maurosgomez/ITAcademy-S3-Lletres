let nom = ['M', 'A', 'U', 'R', 'O'];
let cognom = ['G', 'O', 'M', 'E', 'Z'];


// EXERCICI 1

function exercici1() {

    document.getElementById('button1').innerHTML = "";

    for (let i = 0; i < nom.length; i++) {
        document.getElementById('button1').innerHTML += nom[i];
        console.log(nom[i]);
    }
}

// EXERCICI 2

function exercici2() {

    document.getElementById('button2').innerHTML = "";
    console.log("Partim del nom " + nom.join(""));

    for (let i = 0; i < nom.length; i++) {
        
        if (nom[i] == 'A' || nom[i] == 'E' || nom[i] == 'I') {
            document.getElementById('button2').innerHTML += "  Voc: " + nom[i];
            console.log("He trobat la VOCAL: " + nom[i]);
        } else if (nom[i] == 'O' || nom[i] == 'U') {
            document.getElementById('button2').innerHTML += "  Voc: " + nom[i];
            console.log("He trobat la VOCAL: " + nom[i]);
        } else if (nom[i] <= 100) {
            document.getElementById('button2').innerHTML += "  Num: " + nom[i];
            console.log("Els noms de persones no contenen el número: " + nom[i]);
        } else {
            document.getElementById('button2').innerHTML += "  Con: " + nom[i];
            console.log("He trobat la CONSONANT: " + nom[i]);
        }
    }
}


// EXERCICI 3

function exercici3() {

    document.getElementById('button3').innerHTML = "";

    let map = new Object();

        for (let i = 0; i < nom.length; i++) {
            map[nom[i]] = (map[nom[i]] || 0) + 1;
        }

    let letras = "";
        for (let num in map) {
            letras += num + ":" + map[num] + "  ";
            }

    document.getElementById('button3').innerHTML = letras;
    console.log(map);
}


// EXERCICI 4

function exercici4() {

    document.getElementById('button4').innerHTML = "";

    let fullName = nom.concat(" ", cognom);

    document.getElementById('button4').innerHTML = fullName;
    console.log(fullName);
}


// EXERCICI 5

function exercici5() {

    document.getElementById('button5').innerHTML = "";

    var str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email';
    let regex = /[a-zA-Z0-9]+[a-zA-Z0-9.%\-\+]*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,4}/gi;
    let email = str.match(regex);

    email = Array.from(new Set(email));
    document.getElementById("button5").innerHTML = email;
    console.log(email);
}