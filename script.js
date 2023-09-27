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

const MoudroJakNoha = Math.floor(Math.random() * JolandinyMoudra.length);
document.getElementById("Moudro").innerHTML = JolandinyMoudra[MoudroJakNoha];;