console.log("cs ne?")

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
"Sundej své růžové brýle a postav se tváří tvář realitě."
]

const Laska = [
"Láska je jako čaj. Necháš-li jí čekat, vychladne.",
"Někdy je potřeba trpělivost ke štěstí. Počkáš-li si, brzy přijede tvůj princ na bílém koni.",
"Láska bez trochy legrace není láska, ale tragický příběh. Neboj se ukázat svou vnitřní opici!"
]

const Poslani = [
"Člověk neznajíc své silné stránky potřebné k jeho poslání je jako osel.",
"Tvým životním úkolem je pomáhat druhým.",
"Staň se veganem, Dubínku!",
"Tato karta ti bude k ničemu. Naznačuje, že v této situaci jsi ovladačem ty a své poslání si musíš rozhodnout sám."
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











