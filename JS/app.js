//! iteracion 1


/*Dado el siguiente javascript usa forof para recorrer el array de películas,
 genera un nuevo array con las categorías de las películas e imprime por consola 
 el array de categorías. Ten en cuenta que las categorías no deberían repetirse.
 Para filtrar las categorías puedes ayudarte de la función .includes()*/ 


 const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

const catergorias = [];



for (const pelis of movies){


    if (!catergorias.includes(pelis.categories)) {  

   catergorias.push(pelis.categories);
    }
}
console.log("🚀 ~ catergorias:", catergorias)

//! iteracion 2--------------------FALTA

/*Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.*/

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

const favoritos = [];

for (let volumen of users){ 
    for (let sonidos in volumen.favoritesSounds) // para recorrer los objetos

    favoritos.push(volumen.favoritesSounds[sonidos].volume)

}   
console.log("🚀 ~ favoritos:", favoritos)

const media = favoritos.reduce((acc, num) => acc + num + 0
) / 2;
console.log("🚀 ~ media:", media)





//! iteracion 3-------------------FALTA




//! iteracion 4-------------------FALTA


/*Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos
 y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto 
 que enviaste como parametro. Haz varios ejemplos y compruebalos.

Sugerencia de función:

const findArrayIndex(array, texto)=>  {

}


['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']*/

const bichos = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

const findArrayIndex = (array, text) => {

    for (let i= 0; i<array.legth; i++){
       
    }

    

}




//! iteracion 5 ------------REALMENTE FUNCIONA COMO FUNCIÓN? NO LE DOY PARAM A LA F Y ME LO HACE IGUAL

/*Crea una función llamada rollDice() que reciba como parametro el numero de caras 
que queramos que tenga el dado que deberá silumar el codigo dentro de la función.
 Como hemos dicho, que la función use el parametro para simular una tirada de dado
  y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes!
   busca información sobre la función de javascript Math.random();*/

   const rollDice = (caras)=>{

    return Math.floor(Math.random(caras) * (6 - 1) + 1)

   }

   
   const tirarDados = rollDice()
   console.log("🚀 ~ tirarDados:", tirarDados)
   
   
