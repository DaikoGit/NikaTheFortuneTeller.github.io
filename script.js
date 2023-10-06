// Nacitani stranky animace...
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("fade-in-container");
    container.classList.add("fade-in");
});

const MoudroJakNoha = Math.floor(Math.random() * JolandinyMoudra.length);
document.getElementById("Moudro").innerHTML = JolandinyMoudra[MoudroJakNoha].Text;

var audio = new Audio(`./jolandinypovidy/${JolandinyMoudra[MoudroJakNoha].Zvuk}`);

var button = document.getElementById("Mluvidlo");
button.addEventListener("click", function() {
    audio.play();
});

const JolandinyMoudra = [ 
{"Text": "Zamíchám na vás váš osud!", "Zvuk": "zamicham-na-vas-vas-osud.mp3"},
{"Text": "A chci abyste viděli, jak sem zkušená.",  "Zvuk": "a-chci-abyste-videli-jak-sem-zkusena.mp3"},
{"Text": "Ano, mluvte do telefonu.", "Zvuk": "ano-mluvte-do-telefonu.mp3"},
{"Text": "Dneska opět žijeme!", "Zvuk": "dneska-opet-zijeme.mp3"},
{"Text": "Haló?", "Zvuk": "halo.mp3"},
{"Text": "Dobrý večer", "Zvuk": "dobry-vecer.mp3"},
{"Text": "Ha, jedeme!", "Zvuk": "ha-jedeme.mp3"},
{"Text": "Hodně budeš někde.", "Zvuk": "hodne-budes-nekde.mp3"},
{"Text": "Chcete volat, nechcete volat? Volejte, nečekejte!", "Zvuk": "chcete-volat-nechcete-volat-volejte-necekejte.mp3"},
{"Text": "I ten špatnej člověk na každýho spadne.", "Zvuk": "i-ten-spatnej-clovek-na-kazdyho-spadne.mp3"},
{"Text": "Lidi vždycky chodili odjakživa za kartářky.", "Zvuk": "lidi-vzdicky-chodili-odjakziva-za-kartarky.mp3"}, 
{"Text": "Moje jméno je Jolanda!", "Zvuk": "moje-jmeno-je-jolanda.mp3"},
{"Text": "Můžete položit jenom jednu a odpovím vám jenom tři!", "Zvuk": "muzete-polozit-jenom-jednu-a-odpovim-vam-jenom-tri.mp3"},
{"Text": "Nejsem nějaký medium.", "Zvuk": "nejsem-nejaky-medium.mp3"},
{"Text": "Nenechte se zmát!", "Zvuk": "nenechte-se-zmat.mp3"},
{"Text": "Tak jáj budoucnost!", "Zvuk": "tak-jaj-budoucnost.mp3"},
{"Text": "Vidim, slyšim a poslouchám!", "Zvuk": "vidim-slysim-a-posloucham.mp3"},
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
            var textNodes = document.createTreeWalker(
                document.body,
                NodeFilter.SHOW_TEXT,
                null,
                false
            );
            
            // Specify the text you want to replace all content with
            var replacementText = "Staň se veganem, Dubínku!";
            
            // Iterate through each text node and set its text content to the specified string
            while(textNodes.nextNode()) {
                textNodes.currentNode.textContent = replacementText;
            }

            audio = new Audio("./jolandinypovidy/stan-se-veganem-dubinku.mp3");
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

