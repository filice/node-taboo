// Game data ///////////////////////////////////////////////////////////////////

// Game deck (italian)
const deck_it = [
    ["Parigi","Moda","Settimana","Città","Francia","Eiffel"],
    ["Stivali","Militare","Scarpa","Caviglia","Nero","Esercito"],
    ["Fusion","Miscela","Combinazione","Occidentale","Nucleare","Indo"],
    ["Lungi","Sarong","Skirt","Dhoti","Garment","Body"],
    ["Avvolgente","Piega","Chiuso","Avvolgimento","Lato","Attraverso"],
    ["Dupatta","Sciarpa","Chudidar","Chunri/Odhni","Salwar","Cover"],
    ["Jhola","Borsa","Stoffa","Giornalista","Donne","Spalla"],
    ["Medaglione","Pendente","Collana","Catena","Amore","Oro"],
    ["Lucidalabbra","Lucentezza","Lucentezza","Scintillante","Viso","Prodotto"],
    ["Portafoglio","Borsa","Denaro","Cartad'identità","Pelle","Nero"],
    ["Photoshot","Model","Camera","Pose","Photographer","Pictures"],
    ["Sneakers","Scarpe","Sport","Casual","Running","Rubber"],
    ["Bindi","Fronte","Punto","Sposato","Rosso","Faccia"],
    ["Sarto","Stitch","MasterJi","Vestiti","Persona","Professionista"],
    ["Spilla","Spilla","Gioielli","Decorativo","Attaccato","Tessuto"],
    ["Cosmetici","Artificiale","Sostanze","Prodotti","Aspetto","Texture"],
    ["Capris","Knees","Shorts","Pantaloni","Pantaloni","Caviglie"],
    ["Simmetria","Identico","Specchio","Stesso","Equilibrato","Forme"],
    ["Bottom-Bottom","Pantaloni","Retro","Piùlargo","Stile","Piùvecchio"],
    ["Influencer","Social","Seguendo","Fans","Popular","Famous"],
    ["Motivo","Decorazione","Design","Ricorrente","Ripetizione","Immagine"],
    ["Manichino","Vestiti","Sospesi","Negozi","Modello","Bambola"],
    ["Fattoamano","Cucito","Manuale","Creato","Macchina","Automatico"],
    ["Venditaaldettaglio","Negozio","Acquista","Negozio","Vendi","Acquista"],
    ["Salwar","Kameez","Abito","Tradizionale","Indiano","Abbigliamento"],
    ["Cintura","Pelle","Legato","Vita","Jeans","Pantaloni"],
    ["Benarasi","Saree","Santo","Varanasi","Città","Seta"],
    ["Etnico","Tradizionale","Abiti","Abiti","Cultura","Categoria"],
    ["Cosplay","Dress","Comicon","Character","Wear","Costumes"],
    ["Ensemble","Group","Together","Performance","Cast","Equal"],
    ["Display","Show","Demonstrate","See","Visible","Public"],
    ["Sciarpa","Copertina","Tessuto","Collo","Calore","Tessuto"],
    ["Guarda","Tempo","Indossa","Mano","Accessorio","Polso"],
    ["Victoria'S","Secret","Lingerie","Underwear","Innerwear","Supermodel"],
    ["Budget","Denaro","Limite","Piano","Importo","Risolto"],
    ["Armadio","Armadio","Conservazione","Vestiti","Almirah","Armadio"],
    ["Maschile","Maschio","Forte","Pesante","Femminile","Difficile"],
    ["Occhialidasole","Occhiali","Tonalità","Riflessi","Occhi","Nero"],
    ["MaangTikka","Gioielli","Fronte","Capelli","Accessorio","Medio"],
    ["Barrette","Hair","Ornament","Clip","Clasp","Head"],
    ["Bracciale","Polso","Braccio","Gioielli","Ornamento","Regalo"],
    ["Milano","Moda","Capitale","Qualità","Destinazione","Tessuti"],
    ["Velo","Burqa","Nero","Copertina","Faccia","Testa"],
    ["Sketch","Paint","Sample","Look","Design","Drawing"],
    ["Unisex","Both","Wear","Female","Male","Gender"],
    ["Toelettatura","Pulizia","Rasatura","Spazzolatura","Manutenzione","Igiene"],
    ["Perizoma","Perizoma","Biancheriaintima","Panty","Piccolo","Indumento"],
    ["Spallescoperte","Camicetta","Top","Abbigliamento","Copertina","Visibile"],
    ["Guarda","Tempo","Polso","Orologio","Mela","Intelligente"],
    ["Minimalismo","Semplice","Meno","Modesto","Declutter","Pochi"],
    ["Agente","Individuo","Responsabile","Persona","Lavoro","Affari"],
    ["Sparkling","Shining","Glittering","Diamond","Pearl","Gold"],
    ["Jersey","Cricket","Sports","Football","Shirt","Atheletes"],
    ["Antico","Passato","Vecchio","Vintage","Storico","Datato"],
    ["Distinto","Diverso","Unico","Speciale","Stesso","Simile"],
    ["Salaprove","Acquista","Negozio","Vestiti","Prima","Acquisto"],
    ["Canotta","Sciolto","Senzamaniche","Intimo","Donna","Donna"],
    ["Casual","Rilassato","Informale","Tuttiigiorni","Quotidiano","Ordinario"],
    ["Maxi","Loose","Full-Length","Women","Ladies","Dress"],
    ["Astratto","Tangibile","Calcestruzzo","Reale","Riepilogo","Simbolo"],
    ["Rinnovo","Trasformazione","Modifica","Aspetto","Aspetto","Modifica"],
    ["Drape","Cover","Saree","Arrange","Around","Casual"],
    ["L'Oreal","Francese","Bellezza","Cura","Cosmetici","Pelle"],
    ["Scambio","Riaccensione","Diverso","Valuta","Negozio","Indietro"],
    ["Bikini","Beach","Swimwear","Two-Piece","Holiday","Women"],
    ["Moustache","Nose","Face","Beard","Hair","Lips"],
    ["Choli","Lehenga","Camicetta","Gonna","Tradizionale","Matrimonio"],
    ["Giacca","Indumento","Caldo","Cappuccio","Pelle","Inverno"],
    ["Ghirlanda","Fiori","Corda","Disposizione","Decorativo","Foglie"],
    ["Market","Place","Buy","Purchase","Stuff","Dresses"],
    ["Chapstick","Lip","Dry","Cosmetic","Balm","Brand"],
    ["Street","Road","Fashion","Thoroughfare","Colaba","Clothes"],
    ["Tonalità","Colori","Occhialidasole","Occhiali","Aviatori","Grigio"],
    ["Robe","Bathing","Gown","Garment","Housecoat","Home"],
    ["Femminile","Dadonna","Curvy","Delicato","Donne","Qualità"],
    ["Lbd","Little","Black","Dress","Party","Cocktail"],
    ["Bracciale","Polso","Gioielli","Banda","Thoran","Amici"],
    ["Smoking","Abito","Duepezzi","Cappotto","Giacca","Uomo"],
    ["Estetica","Natura","Bello","Senso","Bellezza","Gusto"],
    ["Regalo","Speciale","Gratuito","Anniversario","Presente","Compleanno"],
    ["Scialle","Sciolto","Inverno","Corpo","Copertina","Donne"],
    ["Diamante","Gioielli","Spumante","Donne","Costoso","Carbonio"],
    ["Sabyasachi","Designer","Matrimoni","Abiti","Nift","Famoso"],
    ["Parrucca","Artificiale","Capelli","Calvo","Copertura","Testa"],
    ["Fantasia","Speciale","Unico","Fantastico","Decorato","Diverso"],
    ["Heels","Stilletos","High","Pencil","Shoes","Tall"],
    ["Maglione","Lana","Inverno","Caldo","Indossa","Indumento"],
    ["Pedicure","Trattamento","Cosmetico","Piedi","Unghiedeipiedi","Manicure"],
    ["Hairband","Hair","Accessory","Curve","School","Headband"],
    ["Supermodel","Fashion","Rampwalk","Marchi","Term","Rich"],
    ["Estensioni","Lunghezza","Colore","Capelli","Unghie","Lungo"],
    ["Burqa","Musulmano","Donne","Nero","Copertina","Abaya"],
    ["Ombre","Ombreggiato","Colore","Capelli","Miscela","Sfumatura"],
    ["HalterTop","Dress","Tied","Sleveless","Neck","Straps"],
    ["Collezione","Abiti","Moda","Set","Gruppo","Simile"],
    ["Glamour","Allamoda","Moderno","Bellezza","Attraente","Attraente"],
    ["Vintage","Retro","Olden","Past","Quality","Wine"],
    ["Jhumka","Orecchie","Bareily","Gioielli","Sposa","Pendente"],
    ["Grembiule","Cottura","Stoffa","Cucina","Anteriore","Corpo"],
    ["Tunica","Camicia","Maglione","Indumento","Tomaia","Corpo"],
    ["Fotocamera","Obiettivo","Immagine","Clic","Smartphone","Selfie"],
    ["Vellutoacoste","Tessuto","Durevole","Colore","Cavo","Tessuto"],
    ["Myntra","E-Commerce","SitoWeb","Online","Shopping","SitoWeb"],
    ["Versace","Italiano","Lusso","Moda","Abbigliamento","Marchio"],
    ["Juthi","Scarpe","Indiano","Matrimonio","Sposo","Tradizionale"],
    ["Fad","Trend","Temporary","Craze","Permanent","Short-Lived"],
    ["Contorno","Trucco","Pennello","Guance","Evidenzia","Contorno"],
    ["Celebrità","Popolare","Famoso","Attore","Attrice","Stella"],
    ["Stilista","Celebrità","Moda","Abbigliamento","Abiti","Persona"],
    ["Sarta","Sarto","Designer","Personalizzato","Abbigliamento","Professione"],
    ["Dichiarazione","Espressione","Stile","Simbolizza","Cancella","Autentico"],
    ["Classico","Qualità","Capolavoro","Senzatempo","Eccezionale","Ineguagliato"],
    ["Smalto","Chiodo","Colore","Smalto","Dito","Nykaa"],
    ["Cachi","Marrone","Militare","Polizia","Colore","Uniforme"],
    ["Cosmopolita","Culture","Diverse","Città","Viaggiatore","Varietà"],
    ["Bandana","Fasciapercapelli","Fazzolettodatesta","Fasciaperilsudore","Collo","Fantastico"],
    ["Funzionale","Utile","Scopo","Ruolo","Pratico","Specificamente"],    
    ["Parigi","Moda","Settimana","Città","Francia","Eiffel"],
    ["Stivali","Militare","Scarpa","Caviglia","Nero","Esercito"],
    ["Fusion","Miscela","Combinazione","Occidentale","Nucleare","Indo"],
    ["Lungi","Sarong","Skirt","Dhoti","Garment","Body"],
    ["Avvolgente","Piega","Chiuso","Avvolgimento","Lato","Attraverso"],
    ["Dupatta","Sciarpa","Chudidar","Chunri/Odhni","Salwar","Cover"],
    ["Jhola","Borsa","Stoffa","Giornalista","Donne","Spalla"],
    ["Medaglione","Pendente","Collana","Catena","Amore","Oro"],
    ["Lucidalabbra","Lucentezza","Lucentezza","Scintillante","Viso","Prodotto"],
    ["Portafoglio","Borsa","Denaro","Cartad'identità","Pelle","Nero"],
    ["Photoshot","Model","Camera","Pose","Photographer","Pictures"],
    ["Sneakers","Scarpe","Sport","Casual","Running","Rubber"],
    ["Bindi","Fronte","Punto","Sposato","Rosso","Faccia"],
    ["Sarto","Stitch","MasterJi","Vestiti","Persona","Professionista"],
    ["Spilla","Spilla","Gioielli","Decorativo","Attaccato","Tessuto"],
    ["Cosmetici","Artificiale","Sostanze","Prodotti","Aspetto","Texture"],
    ["Capris","Knees","Shorts","Pantaloni","Pantaloni","Caviglie"],
    ["Simmetria","Identico","Specchio","Stesso","Equilibrato","Forme"],
    ["Bottom-Bottom","Pantaloni","Retro","Piùlargo","Stile","Piùvecchio"],
    ["Influencer","Social","Seguendo","Fans","Popular","Famous"],
    ["Motivo","Decorazione","Design","Ricorrente","Ripetizione","Immagine"],
    ["Manichino","Vestiti","Sospesi","Negozi","Modello","Bambola"],
    ["Fattoamano","Cucito","Manuale","Creato","Macchina","Automatico"],
    ["Venditaaldettaglio","Negozio","Acquista","Negozio","Vendi","Acquista"],
    ["Salwar","Kameez","Abito","Tradizionale","Indiano","Abbigliamento"],
    ["Cintura","Pelle","Legato","Vita","Jeans","Pantaloni"],
    ["Benarasi","Saree","Santo","Varanasi","Città","Seta"],
    ["Etnico","Tradizionale","Abiti","Abiti","Cultura","Categoria"],
    ["Cosplay","Dress","Comicon","Character","Wear","Costumes"],
    ["Ensemble","Group","Together","Performance","Cast","Equal"],
    ["Display","Show","Demonstrate","See","Visible","Public"],
    ["Sciarpa","Copertina","Tessuto","Collo","Calore","Tessuto"],
    ["Guarda","Tempo","Indossa","Mano","Accessorio","Polso"],
    ["Victoria'S","Secret","Lingerie","Underwear","Innerwear","Supermodel"],
    ["Budget","Denaro","Limite","Piano","Importo","Risolto"],
    ["Armadio","Armadio","Conservazione","Vestiti","Almirah","Armadio"],
    ["Maschile","Maschio","Forte","Pesante","Femminile","Difficile"],
    ["Occhialidasole","Occhiali","Tonalità","Riflessi","Occhi","Nero"],
    ["MaangTikka","Gioielli","Fronte","Capelli","Accessorio","Medio"],
    ["Barrette","Hair","Ornament","Clip","Clasp","Head"],
    ["Bracciale","Polso","Braccio","Gioielli","Ornamento","Regalo"],
    ["Milano","Moda","Capitale","Qualità","Destinazione","Tessuti"],
    ["Velo","Burqa","Nero","Copertina","Faccia","Testa"],
    ["Sketch","Paint","Sample","Look","Design","Drawing"],
    ["Unisex","Both","Wear","Female","Male","Gender"],
    ["Toelettatura","Pulizia","Rasatura","Spazzolatura","Manutenzione","Igiene"],
    ["Perizoma","Perizoma","Biancheriaintima","Panty","Piccolo","Indumento"],
    ["Spallescoperte","Camicetta","Top","Abbigliamento","Copertina","Visibile"],
    ["Guarda","Tempo","Polso","Orologio","Mela","Intelligente"],
    ["Minimalismo","Semplice","Meno","Modesto","Declutter","Pochi"],
    ["Agente","Individuo","Responsabile","Persona","Lavoro","Affari"],
    ["Sparkling","Shining","Glittering","Diamond","Pearl","Gold"],
    ["Jersey","Cricket","Sports","Football","Shirt","Atheletes"],
    ["Antico","Passato","Vecchio","Vintage","Storico","Datato"],
    ["Distinto","Diverso","Unico","Speciale","Stesso","Simile"],
    ["Salaprove","Acquista","Negozio","Vestiti","Prima","Acquisto"],
    ["Canotta","Sciolto","Senzamaniche","Intimo","Donna","Donna"],
    ["Casual","Rilassato","Informale","Tuttiigiorni","Quotidiano","Ordinario"],
    ["Maxi","Loose","Full-Length","Women","Ladies","Dress"],
    ["Astratto","Tangibile","Calcestruzzo","Reale","Riepilogo","Simbolo"],
    ["Rinnovo","Trasformazione","Modifica","Aspetto","Aspetto","Modifica"],
    ["Drape","Cover","Saree","Arrange","Around","Casual"],
    ["L'Oreal","Francese","Bellezza","Cura","Cosmetici","Pelle"],
    ["Scambio","Riaccensione","Diverso","Valuta","Negozio","Indietro"],
    ["Bikini","Beach","Swimwear","Two-Piece","Holiday","Women"],
    ["Moustache","Nose","Face","Beard","Hair","Lips"],
    ["Choli","Lehenga","Camicetta","Gonna","Tradizionale","Matrimonio"],
    ["Giacca","Indumento","Caldo","Cappuccio","Pelle","Inverno"],
    ["Ghirlanda","Fiori","Corda","Disposizione","Decorativo","Foglie"],
    ["Market","Place","Buy","Purchase","Stuff","Dresses"],
    ["Chapstick","Lip","Dry","Cosmetic","Balm","Brand"],
    ["Street","Road","Fashion","Thoroughfare","Colaba","Clothes"],
    ["Tonalità","Colori","Occhialidasole","Occhiali","Aviatori","Grigio"],
    ["Robe","Bathing","Gown","Garment","Housecoat","Home"],
    ["Femminile","Dadonna","Curvy","Delicato","Donne","Qualità"],
    ["Lbd","Little","Black","Dress","Party","Cocktail"],
    ["Bracciale","Polso","Gioielli","Banda","Thoran","Amici"],
    ["Smoking","Abito","Duepezzi","Cappotto","Giacca","Uomo"],
    ["Estetica","Natura","Bello","Senso","Bellezza","Gusto"],
    ["Regalo","Speciale","Gratuito","Anniversario","Presente","Compleanno"],
    ["Scialle","Sciolto","Inverno","Corpo","Copertina","Donne"],
    ["Diamante","Gioielli","Spumante","Donne","Costoso","Carbonio"],
    ["Sabyasachi","Designer","Matrimoni","Abiti","Nift","Famoso"],
    ["Parrucca","Artificiale","Capelli","Calvo","Copertura","Testa"],
    ["Fantasia","Speciale","Unico","Fantastico","Decorato","Diverso"],
    ["Heels","Stilletos","High","Pencil","Shoes","Tall"],
    ["Maglione","Lana","Inverno","Caldo","Indossa","Indumento"],
    ["Pedicure","Trattamento","Cosmetico","Piedi","Unghiedeipiedi","Manicure"],
    ["Hairband","Hair","Accessory","Curve","School","Headband"],
    ["Supermodel","Fashion","Rampwalk","Marchi","Term","Rich"],
    ["Estensioni","Lunghezza","Colore","Capelli","Unghie","Lungo"],
    ["Burqa","Musulmano","Donne","Nero","Copertina","Abaya"],
    ["Ombre","Ombreggiato","Colore","Capelli","Miscela","Sfumatura"],
    ["HalterTop","Dress","Tied","Sleveless","Neck","Straps"],
    ["Collezione","Abiti","Moda","Set","Gruppo","Simile"],
    ["Glamour","Allamoda","Moderno","Bellezza","Attraente","Attraente"],
    ["Vintage","Retro","Olden","Past","Quality","Wine"],
    ["Jhumka","Orecchie","Bareily","Gioielli","Sposa","Pendente"],
    ["Grembiule","Cottura","Stoffa","Cucina","Anteriore","Corpo"],
    ["Tunica","Camicia","Maglione","Indumento","Tomaia","Corpo"],
    ["Fotocamera","Obiettivo","Immagine","Clic","Smartphone","Selfie"],
    ["Vellutoacoste","Tessuto","Durevole","Colore","Cavo","Tessuto"],
    ["Myntra","E-Commerce","SitoWeb","Online","Shopping","SitoWeb"],
    ["Versace","Italiano","Lusso","Moda","Abbigliamento","Marchio"],
    ["Juthi","Scarpe","Indiano","Matrimonio","Sposo","Tradizionale"],
    ["Fad","Trend","Temporary","Craze","Permanent","Short-Lived"],
    ["Contorno","Trucco","Pennello","Guance","Evidenzia","Contorno"],
    ["Celebrità","Popolare","Famoso","Attore","Attrice","Stella"],
    ["Stilista","Celebrità","Moda","Abbigliamento","Abiti","Persona"],
    ["Sarta","Sarto","Designer","Personalizzato","Abbigliamento","Professione"],
    ["Dichiarazione","Espressione","Stile","Simbolizza","Cancella","Autentico"],
    ["Classico","Qualità","Capolavoro","Senzatempo","Eccezionale","Ineguagliato"],
    ["Smalto","Chiodo","Colore","Smalto","Dito","Nykaa"],
    ["Cachi","Marrone","Militare","Polizia","Colore","Uniforme"],
    ["Cosmopolita","Culture","Diverse","Città","Viaggiatore","Varietà"],
    ["Bandana","Fasciapercapelli","Fazzolettodatesta","Fasciaperilsudore","Collo","Fantastico"],
    ["Bun","Hairstyle","Circular","Round","Head","Back"],
    ["Funzionale","Utile","Scopo","Ruolo","Pratico","Specificamente"],    
    [ "albicocca", "nocciolo", "arancione", "pianta", "susina", "frutto" ],
    [ "antracite", "nero", "colore", "carbone", "fossile", "grigio" ],
    [ "apnea", "palombaro", "bombole", "immersione", "respirare", "sommozzatore" ],
    [ "apice", "cima", "punta", "vertice", "culmine", "massimo" ],
    [ "appello", "scuola", "presente", "assente", "corte", "esame" ],
    [ "appartamento", "casa", "stanza", "affitto", "abitazione", "acquistare" ],
    [ "aquila", "uccello", "rapace", "intelligente", "vista", "condor" ],
    [ "arachide", "nocciolina", "americana", "superpippo", "tostato", "olio" ],
    [ "arcipelago", "Antille", "isole", "gruppo", "mare", "Eolie" ],
    [ "argilla", "roccia", "porosa", "piedi", "creta", "ceramica" ],
    [ "arguto", "avveduto", "fine", "ingegnoso", "sottile", "osservazione" ],
    [ "arnese", "attrezzo", "strumento", "lavoro", "mestiere", "utensile" ],
    [ "arrotino", "affilare", "mestiere", "lama", "coltello", "forbice" ],
    [ "asciugamano", "tela", "spugna", "acqua", "bagno", "accappatoio" ],
    [ "assieme", "con", "stare", "riunire", "gruppo", "tutti" ],
    [ "assai", "tanto", "abbastanza", "te voglio bene", "molto", "quantità" ],
    [ "attimo", "cogliere", "carpe diem", "fuggente", "istante", "aspettare" ],
    [ "attico", "ultimo piano", "edificio", "casa", "sopra", "abitazione" ],
    [ "auge", "essere in", "apice", "culmine", "successo", "fama" ],
    [ "audience", "televisione", "ascolti", "Auditel", "share", "spettatori" ],
    [ "aumentare", "crescere", "tasse", "incrementare", "maggiore", "quantità" ],
    [ "australiano", "continente", "abitante", "Canguro", "isola", "Sidney" ],
    [ "calcio", "partita", "palla", "finale", "mondiali", "squadra" ],
    [ "cristallo", "vetro", "bicchieri", "gemma", "quarzo", "diamante" ],
    [ "divano", "salotto", "poltrona", "letto", "cuscino", "pisolino" ],
    [ "fiore", "petalo", "profumo", "farfalla", "pianta", "colorato" ],
    [ "giornale", "gazzetta", "giorno", "leggere", "prima pagina", "giornalista" ],
    [ "rimmel", "trucco", "ciglia", "cosmetico", "allungare", "De Gregori" ],
    [ "Romeo", "gigli", "innamorato", "Giulietta", "Shakespeare", "Verona" ],
    [ "scoop", "notizia", "giornale", "rivista", "colpo", "sensazionale" ],
    [ "semaforo", "fermarsi", "verde", "rosso", "arancione", "incrocio" ],
    [ "semolino", "brodo", "minestra", "farina", "riso", "neonato" ],
    [ "soggiorno", "viaggio", "permanenza", "salone", "azienda", "obbligato" ],
];

// Game logic //////////////////////////////////////////////////////////////////

// Cards are represented by means of arrays of words
// The first word is the one to be guessed, the following ones are the taboo words

// Game state (mostly for client)
const NOT_CONNECTED = -1;
const WAITING_FOR_PLAYERS = 0;
const INGAME_OTHER_PLAYER_TURN = 1;
const INGAME_MY_TURN = 2;
const INGAME_STARTING_MY_TURN = 3;
const INGAME_STARTING_OTHER_PLAYER_TURN = 4;
const GAME_ALREADY_STARTED = 5;
var state = WAITING_FOR_PLAYERS;

// Teams
const BLUE_TEAM = 0;
const RED_TEAM = 1;

// Game parameters
var game_maxTime = 60000;
var game_maxSkip = 3;

// Match class. Contains all information pertaining to the current game
var Match = function ( ) {
   // Current player
   this.curTeam = BLUE_TEAM;
   this.turnTeamPlayer = [-1, -1];
   this.player = undefined;

   // Timer [msec]
   this.time = 0;
   this.maxTime = game_maxTime;
   this.timerHandle = -1;

   // Scoring
   this.score = [ 0, 0 ];

   // Current card
   this.card = [ "", "", "", "", "", "", "" ];

   // Deck of choice
   this.deck = deck_it;

   // Past cards; we keep track of them to avoid drawing the same card repeatedly
   this.history = [];

   // Skip count
   this.skips = 0;
   this.maxSkips = game_maxSkip;

   // Draw a new card and sends it to correct player
   this.drawCard = function ( ) {
      var idx = Math.floor(Math.random() * this.deck.length);
      while ( this.history.includes(idx) )
         idx = Math.floor(Math.random() * this.deck.length);

      this.card = this.deck[idx];
      this.history.push ( idx );

      if ( this.history.length == this.deck.length ) {
         console.log ( "[GAME] resetting deck" );
         this.history.splice(0, this.history.length);
      }

      this.player.emit ( "card", this.card );

      for ( let i = 0; i < clients.length; ++i )
         if ( clients[i].team != this.player.team )
            clients[i].emit ( "card", this.card );
   }

   // Pre-start: the player whose turn is about to start gets notified; we wait for him to
   // actually start
   this.preStartTurn = function ( ) {
      // Choose the player
      do {
         this.curTeam = 1 - this.curTeam;
      } while ( teams[this.curTeam].length === 0 );

      this.turnTeamPlayer[this.curTeam]++;
      if ( this.turnTeamPlayer[this.curTeam] >= teams[this.curTeam].length )
         this.turnTeamPlayer[this.curTeam] = 0;

      this.player = teams[this.curTeam][this.turnTeamPlayer[this.curTeam]];

      console.log ( "[GAME] client " + this.player.info() + " turn is about to start" );

      // Communicate states to clients
      io.emit ( "teamTurn", this.player.team );
      io.emit ( "nameTurn", this.player.name );
      io.emit ( "score", this.score );
      this.player.emit ( "state", INGAME_STARTING_MY_TURN );

      this.skips = this.maxSkips;
      this.player.emit ( "skips", this.skips );

      for ( let i = 0; i < clients.length; ++i )
         if ( clients[i].id != this.player.id )
            clients[i].emit ( "state", INGAME_STARTING_OTHER_PLAYER_TURN );
   }

   // Starts a new turn
   this.startTurn = function ( ) {
      this.time = this.maxTime;

      console.log ( "[GAME] client " + this.player.info() + " turn starts now" );

      // Communicate states to clients
      this.player.emit ( "state", INGAME_MY_TURN );
      for ( let i = 0; i < clients.length; ++i )
         if ( clients[i].id != this.player.id )
            clients[i].emit ( "state", INGAME_OTHER_PLAYER_TURN );

      this.drawCard();

      this.timerHandler = setInterval ( (function() {
         this.time -= 10;
         io.emit ( "time", this.time );
         if ( this.time <= 0 ) this.endTurn();
      }).bind(this), 10 );
   }

   // End of turn
   this.endTurn = function ( ) {
      clearInterval ( this.timerHandler );
      console.log ( "[GAME] client " + this.player.info() + " turn ends" );

      this.preStartTurn();
   }

   // Correct answer
   this.correct = function ( ) {
      this.score[this.player.team] += 1;
      io.emit ( "score", this.score );
      this.drawCard();
   }

   // Taboo word
   this.taboo = function ( ) {
      this.score[this.player.team] -= 1;
      io.emit ( "score", this.score );
      this.drawCard();
   }

   // Skip
   this.skipCard = function ( ) {
      if ( this.skips <= 0 ) return;

      this.drawCard();
      this.skips--;
      this.player.emit ( "skips", this.skips );
   }

   // Reset the game
   this.reset = function ( ) {
      this.score = [0, 0];
      clearInterval ( this.timerHandle );

      io.emit ( "ready", false );
      io.emit ( "state", WAITING_FOR_PLAYERS );

      state = WAITING_FOR_PLAYERS;
   }

   // Start the match
   this.startMatch = function () {
      // Reset game object
      this.reset();

      state = GAME_ALREADY_STARTED;

      // Resets game object
      this.preStartTurn();
   }
}

var match = new Match();

// Server logic ////////////////////////////////////////////////////////////////

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var clients = [];
var teams = [ [], [] ];
var lastId = 0;
var readyCount = 0;

// Map requests to files
app.get('/',           function(req, res){ res.sendFile(__dirname + '/index.html'); });
app.get('/index.html', function(req, res){ res.sendFile(__dirname + '/index.html'); });
app.get('/script.js',  function(req, res){ res.sendFile(__dirname + '/script.js'); });

// Update teams
var updateTeams = function () {
   teams[0].splice(0, teams[0].length);
   teams[1].splice(0, teams[1].length);

   for ( var i = 0; i < clients.length; ++i )
      teams[clients[i].team].push(clients[i]);
};

// Handle player connections
io.on('connection', function(socket) {
   console.log("[SRVR] client " + lastId + " connected");

   // Register the client
   socket.id = lastId++;
   clients.push ( socket );

   // Set client state to not ready
   socket.ready = false;

   // Sets client team to undefined
   socket.team = undefined;
   socket.name = undefined;

   // Send room state and misc info
   socket.emit ( 'id', socket.id );
   socket.emit ( 'state', state );
   socket.emit ( 'ready', socket.ready );
   io.emit ( 'connectedPlayers', clients.length );
   io.emit ( 'readyCount', readyCount );

   // Info string
   socket.info = function() { return this.name + "#" + this.id; }

   // Disconnection event
   socket.on ( 'disconnect', function() {
      if ( state == GAME_ALREADY_STARTED && this.id == match.player.id )
         match.endTurn();

      // Remove client from list
      for (let i = 0; i < clients.length; ++i) {
         if ( clients[i].id == this.id ) {
            clients.splice ( i, 1 );
            break;
         }
      }

      if ( this.ready )
         readyCount--;

      io.emit ( 'connectedPlayers', clients.length );
      console.log("[SRVR] client " + this.info() + " disconnected");

      if ( clients.length == 0 ) {
         console.log("[SRVR] no players left, resetting");
         state = WAITING_FOR_PLAYERS;
         match.reset();
      }
   } );

   // Ready state toggle event
   socket.on ( 'ready', function() {
      this.ready = !this.ready;

      if ( this.ready ) {
         readyCount++;
         console.log("[SRVR] client " + this.info() + " is ready");
      }
      else {
         readyCount--;
         console.log("[SRVR] client " + this.info() + " is no longer ready");
      }

      io.emit ( "readyCount", readyCount );
      console.log("[SRVR] " + readyCount + "/" + clients.length + " clients are ready" );

      // Check if all clients are ready and if so start the game
      if ( readyCount == clients.length ) {
         console.log("[SRVR] All clients ready, starting game");

         // Setup and start the game
         match.startMatch();
      }
   });

   // Start turn event
   socket.on ( 'startTurn', function() {
      if ( this.id == match.player.id ) {
         match.startTurn();
      }
   } );

   // Correct answer
   socket.on ( 'correct', function() {
      if ( this.id == match.player.id ) {
         match.correct();
      }
   } );

   // Taboo word
   socket.on ( 'taboo', function() {
      if ( this.id == match.player.id ) {
         match.taboo();
      }
   } );

   // Skip
   socket.on ( 'skip', function() {
      if ( this.id == match.player.id ) {
         match.skipCard();
      }
   } );

   // Set name
   socket.on ( 'name', function(msg) {
      this.name = msg;
      console.log ( "[SRVR] client " + this.info() + " name set to " + this.name );
   } );

   // Set team
   socket.on ( 'team', function(msg) {
      this.team = msg;
      updateTeams();
      console.log ( "[SRVR] client " + this.info() + " team set to " + this.team );
   } );
});

// Listen for HTTP requests
http.listen(8080, function(){
   console.log("[SRVR] Listening on 8080");
} );
