const enterButton = document.getElementById("enterButton");
const welcomeScreen = document.getElementById("welcomeScreen");
const universe = document.getElementById("universe");


enterButton.addEventListener("click", function () {

    welcomeScreen.style.display = "none";

    universe.style.visibility = "visible";
    universe.style.opacity = "1";

});
const star1 = document.getElementById("star1");
const memoryPopup = document.getElementById("memoryPopup");
const closeMemory = document.getElementById("closeMemory");


star1.addEventListener("click", function () {

    memoryPopup.classList.add("show");

});


closeMemory.addEventListener("click", function () {

    memoryPopup.classList.remove("show");

});
const star2 = document.getElementById("star2");
const rainPopup = document.getElementById("rainPopup");
const closeRain = document.getElementById("closeRain");


star2.addEventListener("click", function () {

    rainPopup.classList.add("show");

});


closeRain.addEventListener("click", function () {

    rainPopup.classList.remove("show");

});
const star3 = document.getElementById("star3");
const vanPopup = document.getElementById("vanPopup");
const closeVan = document.getElementById("closeVan");
const replayVan = document.getElementById("replayVan");


star3.addEventListener("click", function () {

    vanPopup.classList.add("show");

});


closeVan.addEventListener("click", function () {

    vanPopup.classList.remove("show");

});


replayVan.addEventListener("click", function () {

    const van = document.querySelector(".van");
    const person = document.querySelector(".person");

    van.style.animation = "none";
    person.style.animation = "none";

    void van.offsetWidth;

    van.style.animation = "";
    person.style.animation = "";

});
const star4 = document.getElementById("star4");
const panniPopup = document.getElementById("panniPopup");
const closePanni = document.getElementById("closePanni");


star4.addEventListener("click", function () {

    panniPopup.classList.add("show");

});


closePanni.addEventListener("click", function () {

    panniPopup.classList.remove("show");

});
const star5 = document.getElementById("star5");
const lovePopup = document.getElementById("lovePopup");
const closeLove = document.getElementById("closeLove");


star5.addEventListener("click", function () {

    lovePopup.classList.add("show");

});


closeLove.addEventListener("click", function () {

    lovePopup.classList.remove("show");

});
const star6 = document.getElementById("star6");
const musicPopup = document.getElementById("musicPopup");
const closeMusic = document.getElementById("closeMusic");
const playSong = document.getElementById("playSong");
const ourSong = document.getElementById("ourSong");


star6.addEventListener("click", function () {

    musicPopup.classList.add("show");

});


closeMusic.addEventListener("click", function () {

    ourSong.pause();
    ourSong.currentTime = 0;

    musicPopup.classList.remove("show");

    musicPopup.classList.remove("playing");

});


playSong.addEventListener("click", function () {

    if (ourSong.paused) {

        ourSong.play();

        musicPopup.classList.add("playing");

        playSong.textContent = "⏸ Pause our song";

    } else {

        ourSong.pause();

        musicPopup.classList.remove("playing");

        playSong.textContent = "▶ Play our song";

    }

});

const star7 = document.getElementById("star7");
const travelPopup = document.getElementById("travelPopup");

const parisBtn = document.getElementById("parisBtn");
const swissBtn = document.getElementById("swissBtn");

const destinationMessage =
    document.getElementById("destinationMessage");

const destinationTitle =
    document.getElementById("destinationTitle");

const destinationText =
    document.getElementById("destinationText");

const closeTravel =
    document.getElementById("closeTravel");


star7.addEventListener("click", function () {

    travelPopup.classList.add("show");

});


parisBtn.addEventListener("click", function () {

    destinationTitle.textContent = "🇫🇷 Paris";

    destinationText.textContent =
        "One day, I want us to stand somewhere in Paris, look around, and realize we actually made it here together.";

    destinationMessage.classList.add("show");

});


swissBtn.addEventListener("click", function () {

    destinationTitle.textContent = "🇨🇭 Switzerland";

    destinationText.textContent =
        "And somewhere between the mountains and the snow, I want another memory that belongs only to us.";

    destinationMessage.classList.add("show");

});


closeTravel.addEventListener("click", function () {

    travelPopup.classList.remove("show");

    destinationMessage.classList.remove("show");

});

const star8 = document.getElementById("star8");
const finalPopup = document.getElementById("finalPopup");
const closeFinal = document.getElementById("closeFinal");


star8.addEventListener("click", function () {

    finalPopup.classList.add("show");

});


closeFinal.addEventListener("click", function () {

    finalPopup.classList.remove("show");

});