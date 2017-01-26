/**
 * Created by Nico on 25.01.2017.
 */
var firstCard = [];
var secondCard = [];
var thirdCard = [];

function createCards() {
    firstCard.push("Koenig_Herz");
    firstCard.push("Koenig_Karo");
    firstCard.push("Koenig_Kreuz");
    firstCard.push("Koenig_Pik");
    secondCard.push("Dame_Herz");
    secondCard.push("Dame_Karo");
    secondCard.push("Dame_Kreuz");
    secondCard.push("Dame_Pik");
    thirdCard.push("Bube_Herz");
    thirdCard.push("Bube_Karo");
    thirdCard.push("Bube_Kreuz");
    thirdCard.push("Bube_Pik");
}
function showCards() {
    document.getElementById("1C").src = "./images/" + firstCard[3] + ".png";
    document.getElementById("2C").src = "./images/" + secondCard[3] + ".png";
    document.getElementById("3C").src = "./images/" + thirdCard[3] + ".png";
}

function clear() {
    document.getElementById("stake").value  = "";
    document.getElementById("beutel").value = 500;
    document.getElementById("1C").value = "";
    document.getElementById("2C").value = "";
    document.getElementById("3C").value = "";
    document.getElementById("gains").value = "";
    document.getElementById("gewinn").value = "";
}

function main(){
    createCards();
    clear();

}

function restart(){
    clear();
}

function startGame() {
    try{
        var myStake = parseInt(document.getElementById("stake").value);
        var myBeutel = parseInt(document.getElementById("beutel").value);
        console.log(myStake + " " + myBeutel);
        if(myStake <= myBeutel && myStake > 0){
            myBeutel = myBeutel - myStake;
            document.getElementById("beutel").value = myBeutel;

            firstCard = shuffle(firstCard);
            secondCard = shuffle(secondCard);
            thirdCard = shuffle(thirdCard);

            showCards();
            var win = WinOrLoose();
            console.log(win);
            if(win == 0){
                document.getElementById("beutel").value = myBeutel + myStake * 2;
                document.getElementById("gains").value = myStake * 2;
                document.getElementById("gewinn").value="Sie haben " + myStake*2 + " euro gewonnen";
            }else if(win == 1){
                document.getElementById("beutel").value = myBeutel + myStake;
                document.getElementById("gains").value = myStake;
                document.getElementById("gewinn").value= "Sie haben " + myStake + " euro gewonnen";
            }else{
                document.getElementById("gains").value = 0;
                document.getElementById("gewinn").value="";
            }
        }else{
            alert("not enought money");
        }
    }
    catch(e){
        console.log(e);
    }
}
function WinOrLoose(){
    var carte = [];
    var tmp="";

    for(var i = firstCard[3].length - 2; i < firstCard[3].length; i++ ){
        tmp = tmp + firstCard[3][i];
    }
    carte.push(tmp);
    tmp="";

    for(var i = secondCard[3].length - 2; i < secondCard[3].length; i++ ){
        tmp = tmp + secondCard[3][i];
    }
    carte.push(tmp);
    tmp="";

    for(var i = thirdCard[3].length - 2; i < thirdCard[3].length; i++ ){
        tmp = tmp + thirdCard[3][i];
    }
    carte.push(tmp);

    if(carte[0] == carte[1] && carte[1] == carte[2]){
        return 0;
    }else if((carte[0] == "ik" || carte[0] == "uz") && (carte[1] == "ik" || carte[1] == "uz") && (carte[2] == "ik" || carte[2] == "uz")){
        return 1;
    }else if((carte[0] == "rz" || carte[0] == "ro") && (carte[1] == "rz" || carte[1] == "ro") && (carte[2] == "rz" || carte[2] == "ro")){
        return 1;
    }
    return -1;


}

function shuffle(array) {
    var copy = [], n = array.length, i;


    while (n) {


        i = Math.floor(Math.random() * n--);


        copy.push(array.splice(i, 1)[0]);
    }

    return copy;
}