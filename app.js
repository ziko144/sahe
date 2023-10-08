function myFunction(){
    let a = prompt("Duzbucaqlinin sahesi ?")
    let b = prompt("duzbucaqlinin sahesi ?")
    let cavab = (a*b)
    let netice = "2" + a + "(a+b)" 
    document.getElementById("buton").innerHTML = netice;
}
function myFunction2(){
    let a = prompt("Ucbucagin sahesi ?")
    let b = prompt("Ucbucagin sahesi ?")
    let cavab = (a*b/2)
    let netice = "S=" + a + "12ah " 
    document.getElementById("buton2").innerHTML = netice
}
function myFunction3(){
    let a = prompt ("Kvadratin sahesi ?")
    cavab = (a**2)
    let netice = "S=" + a + "a4 "
    document.getElementById("buton3").innerHTML = netice 
}