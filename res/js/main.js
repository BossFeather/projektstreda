/*TODO
Upgrady
Autoclicker
PU
Achi
Skiny
Cheaty
Animace na kliknutí
*/

const cookie = document.getElementById("cookie"); //konstanta=proměnná (vymezené místo v paměti pc, můžeme upravoat nastavovat čísla)
const counter = document.getElementById("counter");
const upgrade = document.getElementById("upgrade");
const upgradeAuto = document.getElementById("upgradeAuto")


let numberOfCookies = 0; //značí proměnnou s let ji můžeme měnit
let clickIncrease = 1;
let autoclickcookies = 0;
let autoclicker;
let autoclickerPrize = 100;

// {} - scope - definice funkce
cookie.onclick = () =>//funkce
{
    console.log("click");
    //numberOfCookies = numberOfCookies + 1;
    //numberOfCookies += 1;
    // ++ inkrement
    numberOfCookies += clickIncrease;//počet o kolik se má zvedat
    console.log(numberOfCookies);//vypíše se do konzole
    counter.innerText = "Cookies: " + numberOfCookies;//counter - odstavec nastaví vnitřní text
}
upgrade.onclick = () => {
    if (numberOfCookies >= 50) {//uprgade stojí 50
        numberOfCookies -= 50;
        //odečte 50
        counter.innerText = "Cookies: " + numberOfCookies;
        clickIncrease++;//zvýši počet

    }
};
upgradeAuto.onclick = () => {
    if (numberOfCookies >= autoclickerPrize) {
        
        //odectu cenu danou let
        numberOfCookies -= autoclickerPrize;
        
        //aktualizace odstavce
        counter.innerText = "Cookies: " + numberOfCookies;

        autoclickerPrize +=100
        
        upgradeAuto.innerText = "buy autoclick upgrade"+autoclickerPrize;
        
        //zvedneme autoclick hodnotu
        autoclickcookies++;
        
        //zastaveni intervalu
         clearInterval(autoclicker);
        
         //opakování po čase pro pridani cookie
        autoclicker = setInterval(() => {
            numberOfCookies += autoclickcookies;
            counter.innerText = "Cookies: " + numberOfCookies;
        }, 1000);

    }
};
const turnOnCheats = ()=>{
    numberOfCookies +=1000000;
    counter.innerText = "Cookies: " + numberOfCookies;
}
turnOnCheats();
function turnOnSuperCheats(){
    numberOfCookies+=100000000000
    counter.innerText = "Cookies: " + numberOfCookies;
}
turnOnSuperCheats();