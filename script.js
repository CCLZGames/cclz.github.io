const homePage = document.getElementById("homePage");
const gamesPage = document.getElementById("gamesPage");
const jimboPage = document.getElementById("jimboPage");

document.getElementById("btnAllGames").onclick = () => {
    homePage.classList.add("hidden");
    gamesPage.classList.remove("hidden");
};

document.getElementById("btnBackHome").onclick = () => {
    gamesPage.classList.add("hidden");
    homePage.classList.remove("hidden");
};

document.getElementById("btnJimbo").onclick = () => {
    gamesPage.classList.add("hidden");
    jimboPage.classList.remove("hidden");
};

document.getElementById("btnBackGames").onclick = () => {
    jimboPage.classList.add("hidden");
    gamesPage.classList.remove("hidden");
};

document.getElementById("year").innerText = new Date().getFullYear();
