/*TODO
Upgrady
Autoclicker
PU
Achi
Skiny
Cheaty
Animace na kliknutí
*/

const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const upgrade = document.getElementById("upgrade");


let numberOfCookies = 0;
let clickIncrease = 1;

// {} - scope
cookie.onclick = () => {
    console.log("click");
    //numberOfCookies = numberOfCookies + 1;
    //numberOfCookies += 1;
    // ++ inkrement
    numberOfCookies += clickIncrease;
    console.log(numberOfCookies);
    counter.innerText = "Cookies: " + numberOfCookies;
}
upgrade.onclick = () => {
    if (numberOfCookies >= 50) {
        numberOfCookies -= 50;
        counter.innerText = "Cookies:" + numberOfCookies;
        clickIncrease++;

    }
};