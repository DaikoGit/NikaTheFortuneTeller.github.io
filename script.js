// Nacitani stranky animace...
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("fade-in-container");
    container.classList.add("fade-in");
});


const JolandinyMoudra = [ 
"Zamíchám na vás váš osud!", 
"A chci abyste viděli, jak sem zkušená.", 
"Ano, mluvte do telefonu.",
"Dneska opět žijeme!",
"Haló?",
"Dobrý večer",
"Ha, jedeme!",
"Hodně budeš někde.",
"Chcete volat, nechcete volat? Volejte, nečekejte!",
"I ten špatný člověk na každýho spadne.",
"Lidi vždycky chodili odjakživa za kartářky.",
"Moje jméno je Jolanda!",
"Můžete položit jenom jednu a odpovím vám jenom tři!",
"Nejsem nějaký medium.",
"Nenechte se zmát!",
"Tak jáj budoucnost!",
"Vidim, slyšim a poslouchám!"
]

const Zivot = [
"Tvůj život je jako záclona, zatažená za slunečných dnů. Musíš se přestat bránit okolnímu světu.",
"Když se cítíš jako zvadlá konvalinka, občas stačí vypnout mysl a na chvíli se uvolnit.",
"Vhlédni do svého života jako do krabice. Zamysli se nad svými činy.",
"Život je jako špagety. Zamotaný a nejasný. Musíš si první urovnat pár věcí v hlavě.",
"Sundej své růžové brýle a postav se tváří tvář realitě.",
"Život dokáže být jako načesané kadeře hřebenem. Je na tobě jaký hřeben zvolíš.",
"Rozzař svůj život jako Vánoční stromeček. Najdi si, co tě baví a naplňuje.",
]

const Laska = [
"Láska je jako čaj. Necháš-li jí čekat, vychladne.",
"Někdy je potřeba trpělivost ke štěstí. Počkáš-li si, brzy přijede tvůj princ na bílém koni.",
"Láska bez trochy legrace není láska, ale tragický příběh. Neboj se ukázat svou vnitřní opici!",
"Život bez lásky je jako sluchátka bez hudby. Najdi svou hudbu.",
"Když čekáš na toho pravého může to být rychlostí želvy. Neotálej a vezmi věci do vlastních rukou.",
]

const Poslani = [
"Člověk neznajíc své silné stránky potřebné k jeho poslání je jako osel.",
"Tvým životním úkolem je pomáhat druhým.",
"Staň se veganem, Dubínku!",
"Tato karta ti bude k ničemu. Naznačuje, že v této situaci jsi ovladačem ty a své poslání si musíš rozhodnout sám.",
"Život bez poslání je jak být bez kalendáře. Musíš najít svůj úkol na tomto světě.",
"Tady vidím velký špatný. Možná by bylo jako tvoje poslání lepší zametat ulice?",
]


// Function to append content once
function appendOnce(karticka, predpoved) {
    const kartickaElement = document.getElementById(karticka);
    const predpovedElement = document.getElementById(predpoved);

    // Remove the click event listener
    kartickaElement.onclick = null;

    // Create a new element
    const newElement = document.createElement("p");


    if (predpoved == "Predpoved1") { // ZIVOT
        const PredpovedJakNoha = Math.floor(Math.random() * Zivot.length);
        newElement.textContent = Zivot[PredpovedJakNoha];
    } else if (predpoved == "Predpoved2") { // LASKA
        const PredpovedJakNoha = Math.floor(Math.random() * Laska.length);
        newElement.textContent = Laska[PredpovedJakNoha];
    } else { // POSLANI
        const PredpovedJakNoha = Math.floor(Math.random() * Poslani.length);
        newElement.textContent = Poslani[PredpovedJakNoha];
        if (Poslani[PredpovedJakNoha] == "Staň se veganem, Dubínku!") {
            document.getElementById("Vesta").src = "./obrazky/Vesticky/polish-cow.webp";
        }
    }



    predpovedElement.appendChild(newElement);

    // Apply animation for a slow append
    newElement.style.opacity = 0;
    let opacity = 0;
    const animate = () => {
        if (opacity < 1) {
            opacity += 0.05;
            newElement.style.opacity = opacity;
            requestAnimationFrame(animate);
        }
    };
    requestAnimationFrame(animate);
}

// Add click event listener to trigger the append once
document.getElementById("zivot").onclick = function() {
    appendOnce("zivot", "Predpoved1");
};

document.getElementById("laska").onclick = function() {
    appendOnce("laska", "Predpoved2");
};

document.getElementById("poslani").onclick = function() {
    appendOnce("poslani", "Predpoved3");
};

const MoudroJakNoha = Math.floor(Math.random() * JolandinyMoudra.length);
document.getElementById("Moudro").innerHTML = JolandinyMoudra[MoudroJakNoha];









// Array of image file names (assuming they are in the ./obrazky/Pozadi/ directory)
const imageFiles = [
    "JolandinaMetropol.webp",
    "JolandinaPlaz.webp",
    "JolandinaZahrada.webp",
    "JolandinDomecek.webp",
    "JolandinoMesto.webp",
    "JolandinZamek.webp",
    "JolandinaVesnice.webp",
    "ZapadSlunicka1.webp",
    "ZapadSlunicka2.webp"
    // Add more image file names here
];

// Function to pick a random image file from the array
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageFiles.length);
    return imageFiles[randomIndex];
}

// Set the src attribute of the "Pozadi" image element
const pozadiImage = document.getElementById("Pozadi"); // Replace "Pozadi" with the actual ID of your image element
pozadiImage.src = `./obrazky/Pozadi/${getRandomImage()}`;









function getRandomNumbers(count, min, max) {
    if (max - min + 1 < count) {
        throw new Error("Cannot generate unique numbers within the specified range.");
    }

    const numbers = [];
    while (numbers.length < count) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }

    return numbers;
}


const uniqueNumbers = getRandomNumbers(3, 1, 7);


// Set the src attribute of the "Pozadi" image element
const Karta1 = document.getElementById("Karta1");
const Karta2 = document.getElementById("Karta2");
const Karta3 = document.getElementById("Karta3");

Karta1.src = `./obrazky/Karticky/Karta${uniqueNumbers[0]}.webp`;
Karta2.src = `./obrazky/Karticky/Karta${uniqueNumbers[1]}.webp`;
Karta3.src = `./obrazky/Karticky/Karta${uniqueNumbers[2]}.webp`;

