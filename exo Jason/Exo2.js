// Définition de la classe Personnage avec ses attributs et méthodes
class Personnage {
    constructor(nom, probMourir, probDegats, probMourirEnDegats) {
        this.nom = nom; // Nom du personnage
        this.vie = 100; // Points de vie du personnage
        this.probMourir = probMourir; // Probabilité de mourir lors de l'attaque
        this.probDegats = probDegats; // Probabilité d'infliger des dégâts lors de l'attaque
        this.probMourirEnDegats = probMourirEnDegats; // Probabilité de mourir tout en infligeant des dégâts
    }

    // Méthode pour attaquer un autre personnage
    attaque(cible) {
        let rand = Math.random();
        if (rand < this.probMourir) {
            console.log(`${this.nom} est mort.`);
            this.vie = 0;
        } else if (rand < this.probDegats) {
            cible.vie -= 10;
            console.log(`${this.nom} a esquivé et a infligé 10 dmg.`);
        } else if (rand < this.probMourirEnDegats) {
            cible.vie -= 15;
            this.vie = 0;
            console.log(`${this.nom} a infligé 15 dmg mais est mort.`);
        }
    }
}

// Création d'une instance de Personnage nommée "Jason" avec des probabilités nulles
let jason = new Personnage('Jason', 0, 0, 0);

// Liste des noms et caractéristiques possibles pour les survivants
let noms = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve'];
let caracteristiques = [
    { nom: 'nerd', probMourir: 0.5, probDegats: 0.3, probMourirEnDegats: 0.2 },
    { nom: 'sportif', probMourir: 0.2, probDegats: 0.6, probMourirEnDegats: 0.2 },
    // ... ajoutez d'autres caractéristiques ici
];

// Création d'une liste de survivants aléatoires en utilisant les caractéristiques définies
let survivants = noms.map(nom => {
    let caract = caracteristiques[Math.floor(Math.random() * caracteristiques.length)];
    return new Personnage(nom, caract.probMourir, caract.probDegats, caract.probMourirEnDegats);
});

// Boucle de combat entre Jason et les survivants tant que Jason est en vie et qu'il reste des survivants en vie
while (jason.vie > 0 && survivants.some(s => s.vie > 0)) {
    // Sélection d'un survivant en vie au hasard
    let survivant = survivants.filter(s => s.vie > 0)[Math.floor(Math.random() * survivants.filter(s => s.vie > 0).length)];
    // Jason attaque le survivant et le survivant attaque Jason
    jason.attaque(survivant);
    survivant.attaque(jason);
}

// Affichage du résultat du combat
if (jason.vie <= 0) {
    console.log('Jason est mort.');
    let morts = survivants.filter(s => s.vie <= 0).map(s => s.nom);
    if (morts.length > 0) {
        console.log(`Les survivants ont gagné mais RIP à ${morts.join(', ')}.`);
    } else {
        console.log('Tous les survivants ont survécu.');
    }
} else {
    console.log('Tous les survivants sont morts.');
}
