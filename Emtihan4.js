// Тапсырма1
// let c = +prompt(" 1 ден 12 ге дейын сан енгыз")
// if(c==3, c==4, c==5){
//     alert('Ай ' +c+ " Маусым: Spring ")
// }else if(c==6, c==7, c==8){
//     alert('Ай ' +c+ " Маусым: Summer ")
// }else if(c==9, c==10, c==11){
//     alert('Ай ' +a+ " Маусым: Autumn ") 
// }else if(c==12, c==1, c==2){
//     alert(' Ай' +c+ " Маусым: Winter ")
// }else{
//     alert("Кате тердиныз")
// } 




// Тапсырма2
// let a = +prompt("A cанын енгиз")
// let b = +prompt("B cанын енгиз")
// if(a > b){
//     alert("1 cан 2 санынан улкен")
// }else if(a < b){
//     alert("1 cан 2 санынан кышы" )
// }else if(a == b){
//     alert("Сандар тен")
// }
// alert("Екы санын орташа маны " + (a + b) / 2 ) 




// Тапсырма3
let san1 = +prompt("Бырыншы санды енгиз")
let san2 = +prompt("Екыншы санды енгиз")
let san3 = +prompt("Ушыншы санды енгиз")
let min
let max
if (san1 > san2 && san1 > san3) {
    alert("ен улкен сан " + san1)
    max=san1
}else if(san2 > san1 && san2 > san3) {
    alert("ен улкен сан " + san2)
    max=san2
}else if(san3 > san1 && san3 > san2) {
    alert("ен улкен сан " + san3)
    max=san3
}else{
    alert("Кате")
}
if (san1 < san2 && san1 < san3) {
    alert("ен кышы сан " + san1)
    min=san1
}else if(san2 < san1 && san2 < san3) {
    alert("ен кышы сан " + san2)
    min=san2
}else if(san3 < san1 && san3 < san2) {
    alert("ен кышы сан " + san3)
    min=san3
}else{
    alert("Кате")
}
    alert( 'Айырмасы ' + (max - min))




























































