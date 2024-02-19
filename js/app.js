// let marvel ={
//     name:'Tony Stark',
//     codeNmae:'Iroman',
//     isAlive: false,
//     age: 40,
//     coords :{
//         lat : 35.056,
//         lng : -7.0789
//     },
//     suit : ['Mark I', 'Marl V', 'Hulkbuster']
// }
// console.log(marvel);

let marvel = {
    isAlive : true,
    age : 40,
    coords : {
        lat : 35.056,
        lng : -7.0789
    },
    suit : ['Mark I','Marl V', 'Hulkbuster'],
    address : {
        zip : '680004',
        location : 'Malibu, California'
    }
}

let isAlive = false
let estado =( isAlive === false) ? 'Esta muerto' : 'Esta vivo'
console.log(estado)