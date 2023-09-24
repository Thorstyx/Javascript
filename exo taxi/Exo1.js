class Personnage {
    constructor(prenom, santeMentale) {
        this.prenom = prenom;
        this.santeMentale = santeMentale;
    }

    perdreSanteMentale(points) {
        this.santeMentale -= points;
    }
}

let musiques = ["musique1", "musique2", "musique3", "musique4", "Anissa - Wejdene"];

class Trajet {
    constructor(){
        this.radio = musiques[Math.floor(Math.random() * musiques.length)];
        this.feuxRougesRestants = 30;
        this.nbChangementTaxi = 0;
    }

    passerFeuRouge() {
        this.feuxRougesRestants--;
    }
}
/////////////////////////////////// MAIN //////////////////////////////////////

let john = new Personnage("John", 10);

let trajet = new Trajet();

while (trajet.feuxRougesRestants > 0 ) {
    console.log('Musique : ' + trajet.radio + ' - Feux restants : ' + trajet.feuxRougesRestants);

    if (trajet.radio === "Anissa - Wejdene") {
        john.perdreSanteMentale(1);
        trajet.nbChangementTaxi++;
    }

    trajet.passerFeuRouge();
    trajet.radio = musiques[Math.floor(Math.random() * musiques.length)];
}

if (john.santeMentale > 0) {
    console.log('John a survécu !' + ' il a changé de taxi : ' + trajet.nbChangementTaxi + ' fois');
} else {
    console.log('John a perdu la raison !');
}






