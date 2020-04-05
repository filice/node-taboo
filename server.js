// Game data ///////////////////////////////////////////////////////////////////

// Game deck (italian)
const deck_it = [
	["Canada","acero","Ontario","nazioni","territori","province","Toronto","francese","Quebec","Ottawa"],
	["Comunismo","lenin","karlmarx","società","marxista","rivoluzione","sovietico","leninismo","socialismo","partito","marxismo"],
	["Sun","temperatura","superficie","core","energia","ligh","massa","magnetico","terra","solare"],
	["Sugar","carboidrati","sangue","malattia","ilfruttosio","raffinato","cannadazucchero","saccarosio","glucosio"],
	["Elephant","matriarca","maschi","animali","africano","tronco","specie","Asian"],
	["Yogurt","batteri","teso","grasso","fermentato","frutta","formaggio","dalatte","turco","latte"],
	["TheHolocaust","hitler","sterminio","vittime","campo","polonia","auschwitz","tedesco","nazista","ebraico"],
	["RosaParks","bianco","alabama","boicottaggio","nero","detroit","diritticivili","montgomery","bus"],
	["SherlockHolmes","caso","immaginario","detective","arthurconandoyle","storie","avventura","watson"],
	["MuhammadAli","round","ring","joefrazier","win","cassiusclay","boxing","heavyweight","fight"],
	["NicolasCage","spettacolo","tesoronazionale","ruolo","attore","maschio","film"],
	["SystemofaDown","serj","gruppi","tossicità","odadjian","musical","malakian","tankian","rock","metal","album","band"],
	["Plato","antico","opere","forme","Repubblica","oxford","filosofia","greco","dialoghi","Socrate"],
	["Parigi","capitale","torreeiffel","francese","città","francia"],
	["NelsonMandela","processo","ordine","klerk","johannesburg","presidente","sudafrica","anc"],
	["Peste","febbre","spread","dellepulci","infezione","morte","malattia","nero","bubbonica"],
	["JacquelineKennedyOnassis","newyork","white","jackie","house","bouvier","lady","john"],
	["BenedictCumberbatch","televisione","film","sherlock","premio","attore","teatro","bbc","radio"],
	["Hanukkah","candele","religioso","tempio","ebrei","menorah","vacanze","luci","ebraico","ebreo"],
	["LogoGoogle","animazione","ricerca","anniversario","favicon","interattivo","compleanno","doodle"],
	["TheBeatles","artisti","rock","ringostarr","musica","canzoni","georgeharrison","album","band","paulmccartney","johnlennon"],
	["TriangolodelleBermuda","Florida","incidenti","mistero","atlantico","navi","aereo","scomparsa","area","volo"],
	["Luna","missione","ceretta","spazio","lato","calante","orbita","pieno","terra","lunare"],
	["GerarchiadeibisognidiMaslow","psicologia","umano","livelli","teoria","fisiologico","sicurezza","attualizzazione","autostima"],
	["TheWalkingDead","main","survivors","walkers","episodio","darabont","amc","televisione","governatore","rick","zombies"],
	["NataliePortman","cignonero","premio","harvard","film","discesa","attrice","israeliano","ebraico"],
	["Ethiopia","africa","mondo","imperatore","salute","governo","popolazione","paese","continuo","addis"],
	["Ricetta","preparazione","ingredienti","culinario","piatto","librodicucina","cibo","cucina"],
	["Backslash","caratteri","codice","linea","sentiero","punteggiatura","ascii","carattere","marchio"],
	["Haiku","poeti","verso","sillaba","poesia","hokku","giapponese"],
	["CoreadelSud","Giappone","Paese","Repubblica","Relazioni","Nord","Seoul"],
	["TheSimpsons","marge","famiglia","homer","animato","volpe","personaggi","lisa","episodio","serie","bart","televisione","spettacolo"],
	["EdwardSnowden","governo","intelligence","hongkong","russia","sorveglianza","asilo","nsa"],
	["AlbertEinstein","meccanica","luce","moto","energia","genio","quantistico","fisica","relatività","teoria"],
	["Turchia","orientale","Europa","paese","Repubblica","Istanbul","Anatolia","pouf","impero"],
	["50Cent","canzone","rapper","gunit","album","game","curtisjackson"],
	["JamesBond","film","casinoroyale","ragazze","serie","romanzo","azione","romanzi","fleming"],
	["Renna","donder","natale","donner","naso","rosso","slitta","Blitzen","Rudolph"],
	["HeathLedger","joker","morte","critica","australiano","film","premio","attore"],
	["EllenDeGeneres","commedia","talkshow","voice","lgbt","attrici","american","emmy","writer","awards","funny"],
	["MargaretThatcher","regnounito","capo","governo","lavoro","elezione","partito","conservatore","ministro","primo"],
	["Maryland","chesapeakebay","city","virginia","washingtonDC","state","baltimore"],
	["Riso","Paddy","irrigazione","contadini","raccolto","Cina","coltivazione","acqua","alimento","grana"],
	["Norvegia","Europa","unione","laDanimarca","paese","Oslo","Svezia"],
	["LoHobbit","viaggio","nuovazelanda","anelli","signore","guillermodeltoro","bilbo","tolkien","peterjackson"],
	["IanMcKellen","royal","london","male","nominated","theatre","attore","award"],
	["BruceLee","drago","cinese","combattimento","hongkong","artimarziali"],
	["Zeus","mitologia","Bolt","monte","Oracle","Crono","cielo","Dio","Hera","greco","dei"],
	["Ariacondizionata","sistemi","stanza","unità","energia","ingegneria","tecnologia","raffreddamento","calore"],
	["CharlizeTheron","donna","film","sudafricano","film","premio","attrice"],
	["Cleopatra","roma","ottava","alessandria","egiziano","romano","markantony","caesar","ptolemy"],
	["NFL","giocatori","boccia","progetto","conferenza","gioco","squadra","stagione","squadre"],
	["Xbox","video","live","giochi","Kinect","gioco","Microsoft","console"],
	["Inglese","nativo","olandese","latino","vecchio","altoparlanti","francese","germanico","parole"],
	["JessicaAlba","angelooscuro","piùsexy","episodio","rivista","scelta","nominato","premio","attrice"],
	["MichaelJackson","billyjean","grammy","artist","thriller","pop","moonwalk","album","music"],
	["MichaelJordan","punti","finali","giocatore","carriera","squadra","chicagobulls","basket","game","nba"],
	["VladimirLenin","lavoratori","bolscevico","sovietico","socialista","partito","rivoluzione","russo"],
	["LabradorRetriever","nero","razze","cioccolato","cuccia","giallo","razza","cane"],
	["MorteNera","pandemia","scoppi","bubbonici","parassiti","popolazione","malattia","diffusione","europa","peste"],
	["Vietnam","comunista","asia","cinese","hanoi","paese","francese","hochiminh"],
	["Stato","Entropy","teoria","sistema","statistico","energia","temperatura","termodinamica","calore"],
	["Hydrogen","energia","chimico","reazione","protone","forma","composti","acqua","gas"],
	["SecondaGuerraMondiale","francia","unione","asse","alleati","giappone","forze","germania","sovietico"],
	["Dexter","Miami","sala","gioco","assassino","omicidio","televisiva","Showtime"],
	["FranklinD.Roosevelt","polio","newdeal","democratico","guerra","presidente","eleanor","fdr"],
	["FannieMae","appoggiato","governo","prestito","federale","mercato","finanziario","alloggio","freddiemac","mutuo"],
	["PeytonManning","MVP","touchdown","passa","superbowl","nfl","passaggio","yard","colts","season","game"],
	["TomCruise","film","globod'oro","katieholmes","film","attore","scientology"],
	["ThomasEdison","luce","inventore","lampadina","brevetto","elettrico"],
	["Anidridecarbonica(CO2)","ossigeno","doi","concentrazione","acido","acqua","gas"],
	["Basketball","regole","corte","NBA","colpo","gioco","giocatore","squadra"],
	["JustinTimberlake","boyband","pop","song","male","singer","NSYNC","album"],
	["DisastrodiChernobyl","nucleo","esplosione","radioattivo","acqua","impianto","vapore","nucleare","potenza","radiazione","incidente","reattore"],
	["BeyonceKnowles","canzone","jay-z","premi","figliodeldestino","musica","cantante","album"],
	["Pompei","città","archeologica","città","Italia","romano","Vesuvius","eruzione","antico"],
	["TajMahal","cupola","architettura","monumento","edifici","giardino","india","marmo","tomba"],
	["Europa","unione","Francia","inghilterra","germania","Russia","impero","occidentale","romano","continente"],
	["Marketing","strategia","comportamento","informazioni","business","orientamento","cliente","consumatore","impresa","ricerca","prodotto"],
	["Australia","isola","Sydney","repubblica","melbourne","continente","indigeno"],
	["JakeGyllenhaal","film","maggie","donniedarko","maschio","brokebackmountain","attore"],
	["Corn","sciroppo","pannocchia","dolce","zucchero","granturco","kernel"],
	["RussellWilson","seattle","players","touchdowns"],
	["server","Microsoft","prodotti","business","porte","IBM","imprese","software","società","finestre"],
	["Tiger","felino","Sumatra","India","specie","bengala","selvaggio","preda"],
	["JimMorrison","americano","musicista","cantante","rock","thedoors"],
	["HongKong","porto","città","governo","terraferma","britannico","regione","territorio","cina"],
	["diabete","livelli","sintomi","complicazioni","rischio","cellule","malattia","sangue","glucosio","insulina","tipo"],
	["Butter","margarina","cibo","grasso","dalatte","latte","panna","olio"],
	["Zabaione","bevande","brandy","panna","ingredienti","cibo","dalatte","bere","latte"],
	["BillClinton","hilary","monicalewinsky","governatore","democratico","presidente","arkansas"],
	["laDanimarca","Norvegia","Europa","diCopenaghen","mondo","europeo","Svezia"],
	["vegetariano","riso","vegetale","alimenti","prodotti","vegan","piatti","salute","dieta"],
	["Go(gioco)","nero","cinese","regole","mosse","tavola","giocatori","pietre"],
	["EnriqueIglesias","grafico","musica","canzoni","pubblicato","singolo","cartellone","canzone","tour","spagnolo","album","latino"],
	["Settepeccaticapitali","dante","lussuria","latino","bradipo","avidità","orgoglio","ira","invidia","golosità"],
	["Settepeccaticapitali","dante","lussuria","latino","bradipo","avidità","orgoglio","ira","invidia","golosità"],
	["Apostrophe","segno","parole","inglese","uso","forma","plurale","nomi","possessivo"],
	["JohnnyDepp","ruoli","pirata","ruolo","gilbertuva","attore","film","timburton"],
	["OprahWinfrey","scrittori","rivista","esecutivo","donne","televisione","americano","produttore","chicago","talkshow"],
	["Cheese","proteine","gusto","cibo","soft","grasso","cagliata","dalatte","latte"],
	["ChesapeakeBay","maree","potomac","susquehanna","ostrica","baltimore","acqua","virginia","golfo","maryland","fiume","mare"],
	["BradPitt","attore","hollywood","maschio","premio","ruolo","film","angelinajolie"],
	["Trattino","composto","testo","tratto","linea","stile","sillabazione","parola","usato","meno"],
	["Tofu","vegetarianismo","giapponese","cucina","impresa","soft","fritti","proteine","cinese","soia"],
	["EmmaStone","zombieland","film","film","attrice","uomoragno","nominato","commedia","premio"],
	["ChanningTatum","ilvoto","microfonomagico","attore","stepup","maschio","film"],
	["Muhammad","islam","profeta","musulmano","Corano","arabo"],
	["KuKluxKlan","organizzazioni","gruppi","violenza","nero","diritticivili","anti","meridionale","bianco","membri","kkk"],
	["Energianucleare","fissione","radioattivo","incidente","elettricità","impianti","rifiuti","combustibile","uranio","reattore","energia"],
	["CoppadelMondoFIFA","germania","squadra","internazionale","federazione","associazione","brasile","torneo","squadre","calcio"],
	["AnneHathaway","princessdiaries","american","lesmiserables","academy","attrice","award","film","role"],
	["DwayneJohnson","hercules","tripleh","wrestlemania","raw","wrestling","johncena","wwe","wwf","championship","rock"],
	["OrangeIstheNewBlack","jenji","correttivo","kohan","cast","stagione","piper","carcere","televisione","netflix","serie"],
	["TaylorSwift","awards","pop","songs","nashville","music","country","album"],
	["Natale","albero","celebrazione","cristiano","chiesa","religioso","nascita","vacanze","calendario","Gesù","giorno"],
	["HIV","sessuali","sintomi","cellule","malattia","virus","trasmissione","trattamento","infezione","rischio","AIDS"],
	["KobeBryant","giocatore","squadra","basket","carriera","punti","stagione","gioco","lakers","nba"],
	["Austria","Europa","stato","ungheria","Repubblica","germania","impero","Vienna"],
	["Frutta","arancia","mela","fruttidibosco","carnoso","ovaia","pianta","semi","fiore"],
	["Povertà","salute","economico","bisognidibase","cibo","benessere","vita","banca","reddito","povero"],
	["NikolaTesla","brevetto","westinghouse","radio","brevetti","motore","serbo","elettrico"],
	["WilliamShakespeare","bard","sonnets","stratford","avon","henryVIII","plays"],
	["Canapa","sativa","pianta","olio","marijuana","raccolto","produzione","coltivazione","seme","fibra","carta","cannabis"],
	["Amici","Chandler","Monica","televisiva","nbc","Ross","Joey","rachel","serie"],
	["Cane","specie","canislupis","lupo","animaledomestico","lupi","domestico","razze","umano"],
	["StephenFry","attore","lgbt","twitter","serie","londra","inglese","radio","bbc"],
	["TomHanks","naufrago","migliore","premioaccademico","film","ruolo","attore"],
	["AdolfHitler","austriaco","politico","militare","propoganda","dittatore","nazista","guerra","germania"],
	["ClintEastwood","attore","western","dirtyharry","award","milliondollarbaby","best","film","director"],
	["EmmaWatson","attrice","film","marrone","wallflower","vantaggi","film","mortale","doni","harrypotter"],
	["Software","vandalismo","Wiki","pagina","content","Modifica","utenti"],
	["IsaacNewton","teoria","meccanica","forza","gravità","luce","cambridge","movimento"],
	["Disastro","nucleare","pericolo","vulnerabilità","creatodall'uomo","gestione","rischi","rischio","emergenza","naturale"],
	["Mexico","città","meticcio","Spain","paese","spagnolo","indigeni","azteco"],
	["ElisabettaII","inghilterra","britannico","galles","duca","commonwealth","principessa","reale","principe","regina"],
	["IlSignoredegliAnelli","sauron","libri","hobbit","terradimezzo","frodo","fantasia","tolkien"],
	["OneDirection","xfactor","single","awards","boy","charity","tour","pop","album","band"],
	["Pasta","impastato","lapasta","lievitazione","cucina","cottura","lievito","pane"],
	["isole","bizantino","Macedonia","paese","Grecia","secolo","pouf","Empire","Athens","Greek"],
	["Nave","acqua","navale","carico","barca","pesca","guscio","nave"],
	["Cocaina","crack","foglia","dopamina","uso","foglie","effetti","droga"],
	["Islam","jihad","Corano","arabo","Dio","Maometto","musulmano"],
	["Hacker","Modifica","rete","nero","virus","necessitano","Senzafonte","informazioni","isbn","hacking","cappello"],
	["AdamLevine","pop","losangeles","cantanti","music","rock","album","band","maroon5"],
	["Rihanna","artista","cantante","cartellone","barbados","musica","album"],
	["ElvisPresley","music","country","memphis","king","icon","rocknroll"],
	["BobMarley","concerto","rastafari","album","onelove","reggae","jamaica","wailers"],
	["Texas","messico","sanantonio","statiuniti","austin","piùgrande","università","dallas","houston","state"],
	["MattDamon","buonavolontà","seriebourne","massachusetts","premio","stella","attore","benaffleck"],
	["RichardNixon","vice","watergate","california","scandalo","presidente"],
	["CostituzionedegliStatiUniti","convenzione","governo","legge","diritti","federale","supremo","congresso","tribunale","emendamento"],
	["Herb","polvere","basilico","seme","pianta","stregoneria","pepe","medicinale","spezie","culinario"],
	["Grey'sAnatomy","medical","abc","hospital","series","episodio","doctor","drama"],
	["AChristmasCarol","ghost","book","tale","romanzi","scrooge","charlesdickens"],
	["BenjaminFranklin","inventore","coloniale","boston","fondatore","padre","americano","inghilterra","philadelphia","pennsylvania"],
	["MilaKunis","cignonero","spettacolo","premio","film","attrice","meg"],
	["GalileoGalilei","sole","fisica","terra","astronomo","scienza","italiano","telescopio","terra"],
	["MikeDitka","nfc","cowboys","superbowl","team","players","nfl","coach","chicago","football","bears"],
	["Spain","Madrid","penisola","Europa","Mediterraneo","basco","paese","spagnolo"],
	["SouthPark","animato","serie","kenny","televisione","chef","personaggi","cartman","commedia","stagione","spettacolo","episodio"],
	["Primaguerramondiale","russia","ungheria","francese","austria","britannico","ottomano","poteri","impero","battaglia","germania"],
	["Dubai","internazionale","emirato","emiratiarabiuniti","città","emirati","uae"],
	["JamesFranco","ruolo","uomo","maschio","california","attori","film","attore"],
	["CheGuevara","guerrilla","later","him","bolivian","rivoluzionary","revolution","castro","argentine","cuba"],
	["BobDylan","cantante","rollingstone","times","folk","music","songs","album"],
	["Milza","anatomia","tessuto","linfoide","organo","celluledelsangue"],
	["Diecicomandamenti","patto","israele","ebraico","esodo","shalt","tu","dio"],
	["Cat","animali","preda","felino","esseriumani","specie","selvaggio","domestico"],
	["Socialismo","lavoro","capitalismo","produzione","stato","società","proprietà","partito","democratico","economia","socialista"],
	["Schermo","sim","iPhone","generazione","modelli","ios","mela"],
	["DinastiaDuck","korie","jase","kay","stagione","comandante","famiglia","willie","phil","robertson"],
	["AvrilLavigne","complicato","canzone","singolo","francese","sk8terboi","canadese","album"],
	["Greenland","territori","artico","ghiaccio","Inuit","spedizione","isola","laDanimarca","danese"],
	["Citoplasma","amembrana","strutture","proteine","mitocondri","nucleo","organelli","cella"],
	["India","asiatico","subcontinente","regionale","impero","gdp","mondo","piùgrande","popolazione","Mumbai","NewDelhi"],
	["Gravity(film)","movie","kowalski","sandrabullock","alfonsocuaron","astronaut","space"],
	["TheSoundofMusic","musical","broadway","cast","von","captain","mariavontrapp"],
	["PrincessDiana","william","matrimonio","famiglia","londra","signora","charles","spencer","royal"],
	["Kenya","presidente","britannico","olio","continuo","mondo","isole","est","Nairobi","paese","elezioni","africa"],
	["Milk","litri","bottiglie","calcio","cartoni","mucca","dalatte","grasso","assenzadilattosio"],
	["Shakira","roccia","musica","canzone","spagnolo","colombiano","latino","album"],
	["MarilynManson","attore","rock","male","metal","tour","american","band"],
	["Wolverine","animal","origins","avengers","logan","fictional","claw","marvel","xmen"],
	["InternetMovieDatabase","sitiWeb","rating","film","top","amazon",".Com","imdb"],
	["CristianoRonaldo","uefa","stagione","goal","realmadrid","player","portugal","league","goals"],
	["JenniferAniston","televisione","commedia","attrice","amici","hollywood","film"],
	["Grano","pane","seme","pianta","selvaggio","produzione","cibo","specie","ilgrano","raccolto"],
	["Renaissance","artisti","greco","Europa","secolo","Firenze","Italia","arte"],
	["Cina","pechino","paese","popolazione","repubblica","dinastia","presidentemao"],
	["BMW","società","moto","veicoli","modelli","auto","motore","serie"],
	["Cereali","latte","riso","dieta","cibo","portafortuna","capitanocrunch","grano","grano"],
	["Dichiarazionedeidiritti","corte","convenzione","congresso","ratifica","madison","costituzione","emendamento"],
	["Napoleon","impero","Louis","Waterloo","imperatore","esercito","Francia","Bonaparte"],
	["Ucraina","Repubblica","Polonia","unione","Russia","Kiev","sovietico","russo"],
	["MaoZedong","rivoluzionario","presidente","popolo","partito","comunista","rivoluzione","cina"],
	["JohnnyCash","tennessee","halloffame","artisti","musica","canzoni","paese","giugnocarter"],
	["MatthewBroderick","musical","broadway","american","award","jewish","role","tony","attore","male"],
	["TheVampireDiaries","show","ninadobrev","fantasy","television","series","blood"],
	["EllieGoulding","cantante","musica","singolo","album","halcyon","lights"],
	["Indonesia","paese","Asia","popolazione","Java","Kalimantan","Sulawesi","Papua","jakarta"],
	["StatiUniti","paese","nativo","gdp","reddito","maggiore","popolazione","mondo","guerra","americano","federale"],
	["Calottapolare","regioni","antartide","polo","terra","nasa","marte","mare","artico"],
	["Grasso","colesterolo","uovo","marrone","galline","bianco","pollo","tuorlo"],
	["TheXFactor","live","judge","contestants","show","auditions","simoncowell","judges"],
	["Meravigliedelmondo","medio","gerusalemme","piramide","giza","naturale","elenco","antico","sette"],
	["Sudafrica","gauteng","nero","nazionale","repubblica","paese","lingue","cittàdelcapo"],
	["Gesù","trinità","cristianesimo","matthew","gospel","stampa","testamento","dio","verginemaria"],
	["NASA","volo","missione","shuttle","stazione","Apollo","Mars","terra","orbita","lancio","programma","spazio"],
	["Alghe","rosso","acqua","marrone","fuco","commestibile","cibo","alghe"],
	["Umano","persone","corpo","genetico","tra","homosapien","specie"],
	["Vaiolo","eradicazione","lesioni","forma","infezione","eruzioni","pelle","vaccino","casi","vaccinazione","virus","malattia"],
	["Brasile","portogallo","piùgrande","saopaulo","paese","riodejaneiro","portoghese","sudamerica"],
	["Mais","cibo","pianta","ilgrano","orecchio","kernel","raccolto","grano"],
	["GiulioCesare","imperatore","brutale","assassinio","latino","markantony","senato","pompey","roman"],
	["Mordereleunghie","mangiare","abitudini","orale","impulso","pelle","disturbo","abitudine"],
	["MartinLutherKing,Jr.","Discorso","sogno","assassinio","movimento","diritticivili"],
	["Buddismo","pratica","religione","Gautama","sofferenza","meditazione","Buddha"],
	["KimKardashian","mantenendo","losangeles","krishumphries","realityTV","kanyewest","kourtney"],
	["TheGreatGatsby","uovo","newyork","buchanan","nick","romanzi","libro","tom","daisy","romanzo","fscottfitzgerald"],
	["Diamante","taglio","debirre","naturale","carbonio","alto","colore","durezza","sintetico"],
	["L'Iran","rivoluzione","paese","Teheran","impero","islamico","persiano"],
	["Grandemuragliacinese","terra","dinastia","visibile","sezioni","costruito","cinese","ming"],
	["MichaelFassbender","ruolo","maschio","irlandese","supporto","nominato","film","attore","premio"],
	["Tavolaperiodica","elettroni","mendeleev","chimica","proprietà","gruppo","metalli","atomico","elementi"],
	["Belgio","PaesiBassi","cialde","tedesco","Bruxelles","olandese","francese","belga"],
	["DavidBowie","ziggystardust","artista","musicista","rock","album","glamrock"],
	["KeanuReeves","matrice","attore","film","neo","maschio","film","canadese"],
	["KristenBell","attrice","televisione","film","ruolo","serie","bradipo","veronicamars"],
	["WillFerrell","produttore","commedia","premi","film","ronburgundy","sabatoseralive","episodio"],
	["WaltDisney","short","california","immaginazione","cartonianimati","animazione","disneyland","topolino","studio"],
	["JohnLennon","album","inghilterra","pace","banda","mccartney","beatles","yokoono"],
	["AnneFrank","ebraico","scrittori","famiglia","tedesco","vanpels","olandese","otto","diario"],
	["SnoopDogg","rapper","d-o-doubleg","hiphop","california","records","album","lion"],
	["Kwanzaa","patrimonio","swahili","simboli","Karenga","festeggiare","vacanze","africano"],
	["KanyeWest","yeezy","college","chicago","artisti","musica","jay-z","rapper","album","hiphop"],
	["Love","relazione","Venere","cupido","attacco","romantico","valentine"],
	["Dado","culinario","Hazel","noci","pino","commestibile","cibo","seme","olio"],
	["LeBronJames","ladecisione","miamiheat","giocatore","squadra","cleveland","points","nba","basketball"],
	["Ceci","piante","lafarina","mangiato","hummus","Chana","cotto"],
	["NewYork","immigrazione","albany","hudson","piùgrande","longisland","città","stato"],
	["Adele","premio","musica","canzone","cantante","premi","femmina","artista","cartellone","album"],
	["Madonna","canzoni","cartellone","artista","femmina","Vogue","pop","album","tour","musica"],
	["ElijahWood","frodobaggins","ilsignoredeglianelli","giovane","film","cast","maschio","attore","premio"],
	["TheodoreRoosevelt","afferma","orsacchiotto","americano","partito","newyork","presidente","taft","repubblicano"],
	["ParisHilton","erede","ruolo","femmina","hotel","americano","realtà","vitasemplice","socialite"],
	["Spam","Cina","Senzafonte","messaggi","internet","posta","carne"],
	["JimCarrey","maschera","commedia","globod'oro","maschio","ontario","attore","film","canadese"],
	["Queen(band)","johndeacon","greatest","perform","brianmay","rogertaylor","british","album","freddiemercury","rock"],
	["Philadelphia","1776","libertà","IlDelaware","Pennsylvania","città"],
	["BritneySpears","artista","cantante","madonna","justintimberlake","musica","pop","album"],
	["Finestra","tenda","porta","costruire","lastre","calore","luce","vetro"],
	["11settembre","terrorismo","pentagono","torre","alqaeda","dirottatori","volo","centrocommerciale","binladen"],
	["Vegetale","verde","commestibile","dietetico","cibo","culinario","pianta","frutta"],
	["Michelangelo","rinascita","Lorenzo","basilica","Sistina","numeri","Roma","opere","Papa","tetto","cappella","Florence"],
	["LosAngeles","hollywood","downtown","southern","lakers","california","city"],
	["HomeAlone","chicago","film","ladro","marv","famiglia","casa","harry","film","kevinMcCallister","natale"],
	["Food","dieta","tipi","raw","animale","preparazione","salute","gusto","cucina"],
	["Batman","gothamcity","joker","comic","robin","character","brucewayne"],
	["Virginia","governatore","repubblica","Richmond","Washington","stato"],
	["ChristinaAguilera","premio","grammy","cantante","canzone","cartellone","musica","album","pop"],
	["GameofThrones","romanzi","fuoco","fantasy","martin","televisione","serie","stagione","hbo"],
	["Germania","occidentale","est","Reno","Europa","impero","Berlino"],
	["PaulRudd","film","televisione","americano","anchorman","episodio","ebraico","maschio","attori"],
	["Compilatore","macchina","programma","livello","fonte","analisi","lingua","codice"],
	["StephenHawking","medaglia","buconero","fisica","teoria","universo","genio"],
	["Carne","elaborato","produzione","bestiame","cibo","manzo","animale","grasso","consumo","animali","cancro"],
	["Linux","unix","distribuzione","desktop","opensource","libero","sistema","operativo","kernel","gnu","software"],
	["Hawaii","spiaggia","Honolulu","isole","stato","Aloha"],
	["Farinad'avena","crusca","cereali","ilgrano","piante","solubile","insieme","farina","colazione"],
	["AlberodiNatale","vacanze","abeterosso","pino","decorato","abete","artificiale"],
	["TomBrady","quarterback","record","carriera","yard","superbowl","game","nfl","season","patriots"],
	["Wi-Fi","sicurezza","radio","antenna","alleanza","dispositivo","range","rete","accesso","wireless"],
	["Minecraft","video","giocatore","modalità","voci","blocchi","playstation","giochi","Xbox","giocatori","gioco"],
	["Coca-Cola","pubblicità","soft","caffeina","bere","bottiglia","coca","società"],
	["Meningite","antibiotici","malattia","cervello","meningococcica","sangue","batterica"],
	["Virusinformatici","microsoft","sistema","sicurezza","codice","operativo","programmi","file","antivirus","software","windows"],
	["Google","internet","prodotti","servizio","miliardo","pubblicità","azienda","motorediricerca"],
	["ArnoldSchwarzenegger","repubblicano","hollywood","mariashriver","bodybuilding","governatore","california","austriaco"],
	["AdaLovelace","donne","analitico","computer","motore","babbage","byron"],
	["Egitto","nilo","alessandria","deserto","paese","canaledisuez","arabo","mummia","cairo","piramide"],
	["JimiHendrix","musicista","suonare","elettrico","rock","band","experience","guitar"],
	["GiorgioVI","Elisabetta","regina","principessa","grande","alberto","duca","edward","principe","re","reale"],
	["Antartide","ozono","polare","Foglio","polo","terra","mare","continente","ghiaccio"],
	["BDSM","partner","presentazione","posizionedominante","consenso","cuoio","schiavitù","gioco","sesso","sessuale"],
	["GuerradiCorea","soldati","38°parallelo","cina","sud","sovietico","esercito","forze","nord"],
	["Terra","vita","terra","piatto","acqua","solare","atmosfera","pianeta","sole","Luna","superficie"],
	["Copenhagen","Frederiksberg","Europa","museo","chiesa","laDanimarca","città","danese"],
	["Demenza","sindrome","età","sintomi","mentale","cervello","dolore","disordine","alzheimer","cognitivo","malattia"],
	["Cloud","cirri","precipitazioni","alto","basso","aria","tempo","cumulo"],
	["Rivoluzionefrancese","costituzione","libertà","louis","repubblica","re","francia","assemblea"],
	["NickiMinaj","rapper","billboard","album","female","pink","superbass"],
	["KellyClarkson","grammy","tour","pop","billboard","album","americanidol"],
	["Religione","moschea","chiesa","tempio","Cattolicesimo","Dio","spiritualità","islam","mitologia","credo","Cristianesimo"],
	["Twilight(serie)","jacob","forchette","alba","romanzo","vampiro","meyer","libri","edward","bella"],
	["SindromediDown","udito","screening","trisomia","età","diagnosi","bambini"],
	["MadMen","weinerbros","show","television","sterlingcooper","series","episodio","amc","dondraper","advertising"],
	["Agnosticismo","credo","cristiano","religioso","l'ateismo","esistenza","religione","Dio"],
	["ThomasJefferson","schiavi","congresso","statiuniti","presidente","virginia"],
	["BradleyCooper","film","film","sbornia","maschio","attore","premio"],
	["Spice","secco","zenzero","seme","polvere","commercio","olio","cibo","erbe","pepe"],
	["Olanda","Europa","Nord","isole","Amsterdam","Repubblica","paese","Olanda","regno","olandese"],
	["Tubercolosi","test","HIV","rischio","salute","trattamento","l'infezione","malattia"],
	["Apartheid","anc","homelands","racial","coloured","white","government","black","southafrica"],
	["AppleInc.","Products","macintosh","ipod","store","ipad","mac","company","stevejobs","iphone"],
	["JulieAndrews","inglese","globod'oro","attrice","musical","suonodellamusica"],
	["KarlMarx","Federico","classe","socialismo","manifesto","comunista","filosofia","tedesco"],
	["RobertDowney,Jr.","Film","maschio","ruolo","attore","film","ironman"],
	["Fotosintesi","pianta","ciclo","energia","ossigeno","acqua","elettrone","reazioni","piante","anidridecarbonica","luce"],
	["Instagram","Facebook","servizi","filtri","telefono","condivisione","kevinsystrom","termini","foto","app","utenti"],
	["Solstiziod'inverno","metàinverno","astronomico","feste","giorno","emisfero","sole","osservanze","vacanze"],
	["Metallica","kirkhammett","cliffburton","deathmagnet","studio","chitarra","rock","jameshetfield","larsulrich","album","band"],
	["Jupiter","rosso","aidrogeno","spot","massa","orbita","terra","sole","solare","atmosfera","lune","pianeta"],
	["SigmundFreud","psicologia","ego","id","stampa","inconscio","teoria","psicoanalisi"],
	["CharlesDickens","grandiaspettative","autore","inglese","personaggi","romanzi"],
	["Ios","modello""iPad","schermo","cellulare","mini","generazione","mela"],
	["WillSmith","gettin'jiggy","principefresco","jada","americano","star","film","attori","maschio","philadelphia"],
	["KatyPerry","sognoadolescenziale","musica","kissedagirl","californiagirls","album"],
	["Spider-Man","comic","stanlee","gwenstacy","maryjane","peterparker","marvel","character","amazing","comics"],
	["Glee","fox","musical","commedia","televisione","cast","episodio","rachelberry","show","season"],
	["Wikipedia","progetto","enciclopedia","fondazione","edizioni","Wales","articolo","content","redattori"],
	["Francia","Louis","Bonjour","paese","Repubblica","Europa","Parigi","francese"],
	["Sydney","strada","ufficio","parco","teatro","porto","Wales","città","Australia"],
	["Android","codice","kernel","fonte","hardware","applicazioni","Linux","software","google","dispositivo"],
	["Pi","irrazionale","serie","numero","matematica","infinito","cerchio","cifre"],
	["Pea","vegetale","cibo","fresco","split","mangiato","verde","piante"],
	["Meme","reddit","divertente","troll","idee","internet","culturale","evoluzione"],
	["Godzilla","apparenza","ritratto","re","film","nucleare","giapponese","Toho","Gojira","immaginario","mostro","carattere"],
	["NewYorkCity","wallstreet","metropolitan","popolazione","brooklyn","città","distretto","longisland","manhattan"],
	["Acqua","food","ossigeno""chimico","liquido","superficie","temperatura","bere","ghiaccio","calore","idrogeno","terra"],
	["Amazon.com","service","business","products","jeffbezos","company","prime","books","sales","online","companies"],
	["NumerodiFibonacci","dorato","primo","matematica","rapporto","somma","sequenza"],
	["GuerradelVietnam","truppe","sud","vietcong","forze","hochiminh","comunista","militare","nord"],
	["MikeTyson","ring","sports","round","holyfield","win","heavyweight","fight","boxing"],
	["AbrahamLincoln","confederato","partito","guerra","ulyssess.Grant","presidente","repubblicano","unione","illinois","schiavitù"],
	["KurtCobain","star","teenspirit","rock","band","courtneylove","nirvana"],
	["NCIS(serieTV)","dramma","stagioni","polizia","televisione"],
	["Deviazionestandard","media","dati","casuale","valori","distribuzione","varianza","popolazione","campione","media"],
	["Ospitalità","sud","necessitano","industria","host","manca","ospite"],
	["WinstonChurchill","inghilterra","capo","britannico","Secondaguerramondiale","primoministro","guerra"],
	["MarkZuckerberg","CEO","company","college","internet","socialnetwork","harvard","facebook"],
	["R.Kelly","musica","maschio","canzone","ripostiglio","accensione","album"],
	["FreddieMercury","gay","solo","aids","album","band","greatest","rock","queen"],
	["Computer","moderna","lingue","memorizzato","architettura","istruzioni","memoria","programma","macchina"],
	["Sherlock","Doyle","segno","Watson","dottore","televisiva","puntata","Gatiss","Moffat","BBC","Holmes"],
	["IvyLeague","sports","columbia","cornell","brown","college","penn","scuole","harvard","università","yale","princeton"],
	["JasonStatham","british","fastandfurious","crank","english","film","transporter","spendables"],
	["WarrenBuffett","rich","investimento","omaha","company","business","billion","stock","hathaway","berkshire"],
	["Autismo","comportamento","sindrome","diagnosi","cervello","sociale","individui","disturbi","sintomi","bambini"],
	["Superman","lexluther","smallville","loislane","characters","clarkkent","character","dccomics"],
	["AdrianaLima","alessandra","brasiliano","moda","modella","victoria'ssecret"],
	["BenAffleck","maschio","mattdamon","film","americano","premio","film","attore"],
	["TheBigBangTheory","howard","episodio","amy","serie","penny","commedia","leonard","sheldon","stagione"],
	["GarthBrooks","cantautore","cantante","oklahoma","album","musica","country"],
	["Disturbobipolare","diagnosi","sintomi","umore","depressione","maniaco","episodi"],
	["Twerking","bottino","afro","rapper","cultura","hiphop","canzone","dance"],
	["Irlanda","Europa","LaGranBretagna","Dublin","birra","Repubblica","isola","delnord","irlandese"],
	["KendrickLamar","california","hiphop","rapper","song","duckworth","album"],
	["USB","micro","bus","cavo","tappo","bandapassante","connettori","dati","potere","host","dispositivo"],
	["Chicago","rivadellago","centrounito","università","latonord","milleniumpark","illinois","città"],
	["Gasserra","clima","metano","cambiamento","energia","atmosfera","anidridecarbonica","emissioni"],
	["California","ovest","acqua","costa","losangeles","piùgrande","valle","sanfrancisco","stato"],
	["Watt","kilo","mega","energia","unità","potere"],
	["Thailand","Royal","economia","regno","paese","sud-est","Asia","Bangkok"],
	["MurodiBerlino","occidentale","caduta","orientale","alleata","sovietica","confine","germania"],
	["GeorgeClooney","oceansundici","globod'oro","film","accademia","premio","attore"],
	["OsamabinLaden","sudan","statiuniti","attacchi","pakistan","afghanistan","saudita","alqaeda"],
	["MacaulayCulkin","americano","michaeljackson","film","solocasa","amp","attore","maschio"],
	["Polonia","sovietico","slavo","paese","guerra","Europa","Varsavia"],
	["AndyWarhol","artista","dipinti","pop","newyork","factory","art"],
	["Loschiaccianoci","russo","orchestra","sugarplumfairy","music","dance","tchaikovsky","ballet"],
	["MariahCarey","carriera","pop","artista","cartellone","canzone","musica","album"],
	["Washington,DC.","Capitale","stati","federale","congresso","columbia","nazionale","città","distretto"],
	["Snapchat","sparire","immagini","inviati","foto","società","utenti","app","Android"],
	["SpongeBobSquarePants","animazione","spettacolo","mare","animato","patrick","ananas","televisione","serie","nickelodeon"],
	["LeonardodaVinci","inventore","disegni","dipinti","milano","verrocchio","rinascimento","firenze","pittura"],
	["Schizofrenia","psicosi","trattamento","diagnosi","farmaco","psicotica","rischio","disordine","sintomi"],
	["Futurama","animato","philipfry","show","bender","comedycentral","series","television","fox"],
	["BillGates","software","CEO","ibm","melinda","computer","microsoft"],
	["Taiwan","presidente","politico","governo","terraferma","isola","Taipei","prc","Repubblica","china"],
	["AlCapone","torrio","brooklyn","massacro","alcatraz","proibizione","banda","chicago"],
	["Cinquantasfumaturedigrigio","serie","romanzi","bdsm","fan","trilogia","finzione","libro","cristiano","ana"],
	["SandraBullock","botteghino","film","latocieco","gravità","premio","attrice"],
	["Italia","impero","PIL","romano","Europa","Roma","paese","lapasta"],
	["FrankSinatra","album","nancy","legenda","carriera","attore","cantante","premio"],
	["Famigliamoderna","valutazioni","commedia","abc","televisione","spettacolo","serie","stagione"],
	["CharlesDarwin","fringuello","società","uomo","idee","evoluzione","teoria","selezionenaturale","specie"],
	["Induismo","india","Dharma","yoga","karma","Dio","vedica","religione"],
	["JuliaRoberts","film","globod'oro","americano","film","belladonna","attrice"],
	["Narcisismo","sociale","psicologia","disordine","personalità","auto","amore"],
	["Israele","relazioni","telaviv","gaza","ebraico","palestina","arabo","gerusalemme","ebraico"],
	["JackieChan","attore","azione","artimarziali","nominato","cinese","film","hongkong"],
	["AshtonKutcher","attore","americano","maschio","punkd","cheglianni'70mostrano","iowa","esecutivo","produttore"],
	["Bean","semi","asecco","piante","grano","cibo","lima","ampio"],
	["Diciannoveottantaquattro","oceania","distopia","guerra","ministero","fratellomaggiore","romanzi","georgeorwell","winstonsmith","partito"],
	["MileyCyrus","MTVVMAs","pop","billboard","song","single","album","hannahmontana"],
	["Pasta","uovo","ingredienti","Italia","salsa","pasta","grano","fresco","farina","maccheroni","secca"],
	["RyanGosling","ilquaderno","uomo","attore","mickymouseclub","film","canadese","gennaio"],
	["Sistemaoperativo","linux","file","hardware","unix","programma","memoria","windows","computer","kernel"],
	["Jakarta","porta","olandese","internazionale","Asia","museo","capitale","area","città","indonesia"],
	["JohnF.Kennedy","fratello","amministrazione","nucleare","assassinio","diritticivili","vietnam","presidente"],
	["ChristianBale","inglese","maschio","ruolo","film","attore","batman"],
	["JenniferLopez","bronx","jlo","american","latina","music","album","dance","film"],
	["LinkinPark","meteora","millesoli","musical","teoriaibrida","shinoda","rock","album","band"],
	["Dinosauro","osso","moderna","specie","fossile","cretaceous","prova","Jurassic","uccelli"],
	["Guerrad'indipendenzaamericana","patriota","libertà","indipendenza","washington","battaglia","francese","esercito","britannico"],
	["Capitalismo","valore","sociale","stato","politico","lavoro","produzione","economia","economia","mercato","economica"],
	["UnioneSovietica","comunista","guerra","russia","partito","stalin","ussr"],
	["Houston","astros","aeroporto","razzi","NASA","sud","città","texas"],
	["Blogger","post","Buzz","mobile","utenti","blogspot","online","internet","scrivere"],
	["ChristopherColumbus","1492","america","india","isola","governatore","spagnolo","voyage"],
	["RegnoUnito","gallese","granbretagna","nord","inghilterra","galles","scozia"],
	["Islanda","spedizione","isola","paesi","norse","paese","mondo","Reykjavik"],
	["EnricoVIII","Maria","Francia","Irlanda","matrimonio","cromwell","anneboleyn","re","catherine","inghilterra"],
	["EdgarAllanPoe","boston","poesie","opere","corvo","letterario","morte","baltimore","scrittori","virginia"],
	["Mistletoe","semi","succursale","bacio","fruttidibosco","natale","pianta","specie","piante"],
	["RamesseII","tomba","re","tempio","battaglia","faraone","dinastia","egitto"],
	["Bitcoin","pagamento","virtuale","finanziario","transazioni","denaro","valuta"],
	["Crimine","dichiarazioni","stato","giustizia","contro","legale","teoria","reato","legge"],
	["MahatmaGandhi","movimento","indù","indipendenza","britannico","nonviolenza","congresso","india","pace"],
	["Coenbrothers","vinto","accademia","produttori","premio","film","ethan","fratello","registi","joel"],
	["VladimirPutin","medvedev","mosca","sovietico","primoministro","presidente","relazioni","russia"],
	["Internet","software","computer","utenti","protocollo","worldwideweb","services","network"],
	["SanFrancisco","mercato","missione","nord","cancellod'oro","california","baia","città"],
	["Guerracivileamericana","virginia","secessione","emancipazione","stati","battaglia","sud","confederazione","lincoln","schiavitù","unione"],
	["PaulMcCartney","johnlennon","inghilterra","ringostarr","band","georgeharrison","beatles"],
	["Raven","gazza","uccello","cibo","specie","corvo","jay","uccelli"],
	["AngelinaJolie","ruolo","film","globod'oro","film","attrice","premio","bradpitt"],
	["Farina","proteine""rye","ilgrano","senzaglutine","pane","grano"],
	["Calcio","quarterback","gioco","campionato","campo","linea","squadra","giocatori","NFL","gioco","regole"],
	["YouTube","internet","utenti","google","sito","content","video"],
	["Proibizionismo","liquore","consumo","latemperanza","atto","asecco","legge","esecuzione","modifica","alcol"],
	["Quinoa","agricoltura","valore","selvaggio","specie","pianta","Ande","cibo","semi","raccolto","Chenopodium"],
	["Heroin","tossicodipendenti","iniezione","utenti","overdose","l'oppio","uso","droga","lamorfina"],
	["Berkeley","sala","università","studenti","scuola","collegio","studente","campus","california"],
	["Inception","ladro","botteghino","domcobb","film","sogno","christophernolan"],
	["WorldWideWeb","informazioni","ipertesto","browser","http","server","www","internet"],
	["DavidBeckham","realmadrid","manchester","team","player","club","galaxy","cup","match","league","england"],
	["Jamaica","indipendenza","occidentale","Bay","kingston","britannico","nazionale","Caraibi","spagnolo","isola"],
	["BarackObama","joebiden","hilaryclinton","illinois","presidente","senato","chicago"],
	["VinDiesel","premio","produttore","film","attori","furioso","maschio","veloce","riddick"],
	["Inghilterra","royal","wales","granbretagna","londra","regnounito","inglese"],
	["NuovaZelanda","febbraio","cultura","isole","ministero","isola","faunaselvatica"],
	["JimmyCarter","bush","elezione","governatore","democratico","pace","presidente","georgia"],
	["IlPakistan","militare","regione","potere","musulmano","paese","nucleare","kashmir","islamico","Punjab"],
	["KimJong-un","lavoratori","dittatore","KimJong-il","KimIl-sung","supremo","nordcoreana"],
	["Aminoacido","sintesi","catena","cellula","biologia","proteina"],
	["Bait","piccolo","rig","volare","squalo","asta","predatori","foraggio","rete","pesca"],
	["TheRollingStones","blues","rock","billwyman","london","album","tour","keithrichards","band","mickjagger"],
	["TheHungerGames","autore","tributi","peeta","capitol","libro","suzannecollins","romanzo","katniss"],
	["FidelCastro","comunista","batista","rivoluzione","socialista","presidente","havana","governo","cuba"],
	["JohnCena","faida","sconfitto","wrestling","crudo","campionato","wwe","match"],
	["KenanThompson","ospite","sabatoseralive","episodi","kel","atlanta","episodio","cast","attori","maschio"],
	["Honey","apicoltura","glucosio","zucchero","appiccicoso","cibo","acqua","ape"],
	["Victoria'sSecret","show","catalog","brands","store","company","fashion","lingerie"],
	["London","Westminster","Tamigi","Royal","città","inghilterra"],
	["Lorde","cantante","musica","top","canzone","pureheroine","pop","royals","newzealand"],
	["Selfie","foto","arte","specchio","ritratti","colore","fotografia","macchinafotografica"],
	["LilWayne","musicista","rapper","cash","single","young","money","album","thacarter"],
	["VincentvanGogh","gauguin","paris","dutch","museum","art","france","ear","painting"],
	["Java","coloniale","islamico","jakarta","riso","isola","indonesia","giavanese","programmare","caffè"],
	["Bangladesh","Asia","governo","paese","ilPakistan","regione","Dacca","bengala"],
	["Democrazia","elezioni","università","governo","regola","cittadini","rappresentante","diretta","stampa","politica"],
	["Intrattenimento","musica","performance","stampa","giochi","teatro","danza","pubblico"],
	["Peanut","dado","allergia","arrosto","burro","olio"],
	["StivaliUgg","marchio","nuovazelanda","moda","calzature","scarpe","pelledipecora","australia"],
	["Mars","atmosfera","rover","acqua","marziano","superficie","terra","pianeta"],
	["Comehoincontratotuamadre","pettirosso","episodio","baie","barney","final","ted"],
	["Metamfetamina","psicosi","acido","ritiro","effetti","droga","dopamina"],
	["Macklemore","rapper","canzone","negoziodell'usato","rapina","hiphop","musica","ryanlewis"],
	["Singapore","governo","lingua","economia","mondo","inglese","paese","indipendenza","Malesia","malese","cinese"],
	["Riscaldamentoglobale","aumento","media","cambiamenti","temperature","effetti","superficie","cambiamento","modelli","serra","emissioni","clima","temperatura"],
	["ScarlettJohansson","film","recensioni","critica","ruolo","attrice","film"],
	["Gelatina","cibo","materiali","prodotti","animale","grasso","acqua","collagene"],
	["Facebook","milioni","mipiace","profilo","sitoweb","privacy","socialnetwork","amici","zuckerberg","utente"],
	["AlessandroMagno","macedone","morte","re","impero","persiano","greco","philip"],
	["TeenageMutantNinjaTurtles","raphael","action","michelangelo","episodes","comic","leonardo","donatello","series","tmnt"],
	["PabloPicasso","cubismo","artisti","pittura","parigi","museo","spagnolo","arte"],
	["LedZeppelin","robertplant","jimmypage","music","bonham","album","rock","band"],
	["TupacShakur","rap","costaoccidentale","notoriousbig","hiphop","death","album"],
	["GenghisKhan","Cina","padre","dinastia","mongolia","temujin","impero","mongolo"],
	["Scientology","spirituale","organizzazione","auditing","Dianetics","religione","Hubbard","chiesa"],
	["FamilyGuy","personaggi","griffin","animato","stagione","televisione","episodio","serie","volpe","spettacolo","sethmacfarlane"],
	[,"Caratteri","stile""Anime","generi","arte","manga","opere","giapponese","Animazione"],
	["Russia","europa","asia","putin","mondo","paese","mosca","unionesovietica"],
	["BabboNatale","tradizione","regali","olandese","padre","regali","santo","postale","lettere","natale","nicholas","bambini"],
	["Inquinamento",,"controllo""umana","contaminazione","chimico","ambiente","suolo""salute","industriale","acqua","rifiuti","aria"],
	["Oliovegetale","grasso","estrazione","cibo","acido","idrogenato","trans","cottura"],
	["Alfabetogreco","simbolo","unicode","suono","latino","vocale","antico","moderno","lettera"],
	["MonaLisa","museo","ritratto","arte","donna","louvre","leonardodavinci","pittura"],
	["PinkFloyd","thewall","richardwright","nickmason","sydbarrett","album","band","davidgilmour","rogerwaters"],
	["Leone","Africa","leonessa","maschio","specie","cuccioli","orgoglio"],
	["BreakingBad","hank","meth","gus","walt","television","series","jesse","season","walter"],
	["Japan","Cina","militare","Okinawa","nippon","isole","Tokyo","imperatore","Konichiwa","Samurai"],
	["Lenticchia",,"proteine""riso","amido","cibo","nutrizionale","rosso","verde"],
	["Srirachasauce","foods","sauce","cuisine","curry","asian","pepper","hot","thai"],
	["LeonardoDiCaprio","GilbertGrave","Titanic","Inception","LosAngeles","GoldenGlobe","Attore","Film"],
	[,,"Procedura""medico","lobi","psicochirurgia""Lobotomy",,"pazienti","cervello""mentale","frontale"],
	["DaftPunk","grammy","elettronico","awards","bangalter","album","music","duo"],
	["Psicologia","sociale","clinica","mentale","metodi",,"comportamento""umana","studio","cognitivo","ricerca"],
	["SindromediAsperger","comportamento","sintomi","spettro","sociale","bambini","diagnosi","disturbo","autismo"],
	["Sistemasolare","Marte","Saturno","Nettuno","Orbita","Giove","Pianeta","Terra","Pianeti","Sole"],
	["Scozia","nord","edimburgo","glasgow","inghilterra","parlamento","regnounito","scozzese"],
	["Dairy","cibo","yogurt","burro","formaggio","sierodilatte","fermentato","panna","latte"],
	["Orzo","grano","pianta","ilgrano","malto","paglia"],
	["Venerdì13","ciclo","mesi","superstizioni","sfortunato","superstizione","mese"],
	["HarryPotter","RonWeasley","Hermoine","Silente","Hogwarts","Voldemort","Serie","JKRowling","Libro"],
	["GeorgeWashington","schiavi","presidente","congresso","francese","britannico","continentale","vernon","monte","esercito","rivoluzionario"],
	["Prodottointernolordo","paese","nazionale","beni","produzione","economico","conti","valore","capita","reddito","gdp"],
	["Finanza","comportamento","pianificazione","economia","aziendale","mercato","investimenti","management","rischio","capitale","cash"],
	["Bali","popolazione","strada","straniera","indù","isbn","olandese","turista","turisti","jakarta","turismo","indonesia","isola","balinese"],
	["Decapaggio","conservazione","cetrioli","aceto","cavolo","peperoni","sale","carote","cibo","verdure"],
	["Assassin'sCreed","ricordi","giochi","fratellanza","animus","giocatore","altair","gioco","desmond","ezio"],
	["JosephGordon-Levitt","estate","inizio","ebraico","americano","film","attori","maschio"],
	["LindsayLohan","meangirl","attrice","nomination","movie","teen","film","award","parenttrap"],
	["PuertoRico","statiuniti","caraibico","commonwealth","sanjuan","isola","spagnolo"],
	["MorganFreeman","americano","film","tennessee","registi","premio","attore","mississippi"],
	["NBA","campionato","stagione","Lakers","finali","giocatore","giochi","squadra","campionato","nazionale"],
	["PearlHarbor","marina","flotta","danneggiato","guerra","onda","pacifico","uss","giappone","aereo"],
	["Pane","incrosta","acqua","pastamadre","bake","fatto","lievitazione","grano","lievito","pasta","farina"],
	["DNA","questi","struttura","chiamata","basi","genetica","elica","proteine","rna","strand","fili","doppio","sequenza","base"],
	["Columbine","self-service","sparare","biblioteca","studenti","scuola"],
	["Capodannocinese","primavera","tradizionale","cina","petardi","febbraio","rosso","festival","vacanze","giorno"],
	["Polmonite","streptococco","influenza","respirazione","virale","sintomi","petto","batteri","malattia","polmone"],
	["Svizzera","Europa","consiglio","ginevra","francese","tedesco","Swiss"],
	["WolfgangAmadeusMozart","padre","compositore","opera","opere","compositori","salzburg","vienna","solomon"],
	["StarWars","clone","darthvader","impero","lukeskywalker","film","trilogia","serie","jedi","georgelucas"],
	["MalcolmX","shabazz","diritticivili","africano","panterenere","muhammad","nazione","islam"],
	["Gold",,"argento""moneta","leghe","ilmercurio","metalli","d'oro"],
	["Uruguay","brasile","paese","spagnolo","sudamerica","argentina"],
	["Twitter","social","messaggi","jackdorsey","internet","service","user","tweet"],
	["Africa","centrale","sud","Egitto","continente","delnord","sahariana"],
	["Numeriromani","simboli","arabo","latino","numeri","orologio","iiii"],
	["PaulWalker","americano","conner","brian","episodio","california","film","attore","maschio","veloce","furioso"],
	["GeorgeW.Bush","repubblicano","approvazione","11settembre","iraq","texas","presidente"],
	["KimJong-il","straniero","pyongyang","leader","coreano","nordcoreana"],
	["Guerrafredda","rivoluzione","berlino","nucleare","europa","stalin","militare","comunista","unionesovietica"],
	["SantoStefano","rivenditori","canada","saldi","dicembre","natale","festività"],
	["Rivoluzioneindustriale","condizioni","potenza","acqua","produzione","motore","cotone","macchina","carbone","granbretagna","ferro","vapore"],
	["SteveJobs","california","disney","pixar","ceo","stevewozniak","company","computer","apple"],
	["Blog","link","giornalismo","news","politico","personale","popolarità","online","commenti","media"],
	["DoctorWho","spettacolo","viaggioneltempo","cabinatelefonica","daleks","trasmissione","episodio","televisione","bbc","serie"],
	["JenniferLawrence","katniss","performance","premioaccademia","migliorattrice","giochidellafame","ruolo","film"],
	["AudreyHepburn","ruolo","film","accademia","unicef","premio","attrice","britannico"],
	["Kesha","jackdaniels","canzone","cantante","rock","animal","pop","album","party"],
	["RonaldReagan","campagna","nancy","tasse","attore","guerrafredda","repubblicano","california","presidente"],
	["NazioniUnite","organizzazione","segretario","membro","mantenimentodellapace","sicurezza","internazionale","assemblea","generale","consiglio"],
	["MarilynMonroe","losangeles","president","normajeane","film","blonde","kennedy"],
	["MonteEverest","Himalaya","spedizione","nepal","base","montagna","campo","ossigeno","scalatori","cima"],
	["RMSTitanic","affondamento","stella","abordo","scialuppedisalvataggio","equipaggio","ponte","passeggeri","classe","nave"],
	["BrunoMars","cantante","artista","musica","canzone","album","pop","canzoni","granata"],
	["JustinBieber","canzone","nondiremai","credi","credente","album","twitter","canadese"],
	["ZooeyDeschanel","premio","film","americano","commedia","estate","attrice"],
	["Filippine","Asia","filippino","isole","paese","Manila","spagnolo"],
	["ParksandRecreation","nbc","series","show","leslieknope","commedia","amypoehler","season"],
	["RebeccaBlack","single","youtube","factory","katyperry","pop","song","video","music","venerdì"],
	["Cottura","caldo","pasticceria","frittura","merce","cibo","cucina","calore","forno","pane"],
	["Netflix","abbonati","società","video","noleggio","DVD","film","servizio","streaming"],
	["QuentinTarantino","djangounchained","pulpfiction","nomination","award","killbill","director","film"],
	["CoreadelNord","giapponese","paese","cina","nucleare","penisola","sud","pyongyang","kim"],
	["LadyGaga","tour","monster","lgbt","fashion","pop","bornthatway","fame","music"],
	["BobBarker","daytime","host","priceisright","show","game"],
	["DemiMoore","brucewillis","film","film","ashtonkutcher","attrice","premio"],
	["RobertDeNiro","accademia","martinscorsese","film","premio","attore"],
	["AdamSandler","americano","ebraico","film","attori","maschio","happygilmore","billymadison","comico"],
	["CarrieUnderwood","music","top","album","awards","artist","billboard","female","country"],
	["Grandedepressione","denaro","banca","prezzi","recessione","recupero","disoccupazione","riservafederale","nuovoaccordo","economia"],
	["Cambiamenticlimatici","scienza","mare","globale","oceano","temperatura","variazioni","solare","terra","ghiaccio"],
	["Illuminati","organizzazioni","teoria","ordine","segreto","cospirazione","bavarese"],
	["Cuba","stampa","stati","Havana","latino","Caraibi","Castro","spagnolo"],
	["Jay-Z","brooklyn","american","record","shawncarter","roc-a-fella","artist","mogul","blueprint","album"],
	["Fulvo","marrone","Bambi","doe","giovane","Cervo"],
	["Sciaipiedi","difondo","snowboard","neve","spazzaneve","montagna"],
	["allergia","gatti","lacrimazione","polline","tosse","starnuto"],
	["Mese","giornata","calendario","bollette","periodo","tempo"],
	["alieno","straniero","specie","umano","mondo","spazio","paese"],
	["Cannucce","aspirazione","fieno","bere","succhiare","tubo"],
	["Olimpiadi","medaglie","giochi","host","fiamme","atleta","sport"],
	["Pelle","epidermide","tan","carne","colore","corpo"],
	["Latte","assenzadilattosio","dalatte","mucca","panna","bianco"],
	["Appartamento","affitto","vivere","stanza","costruire","casa"],
	["Lyrics","musica","ricerca","parole","canzone","poesia"],
	["Elettrico","elettroni","carica","lampo","uscita","condotte"],
	["Padre","madre","papà","papa","maschio","genitore"],
	["Male","inferno","diavolo","esorcizzato","buono","streghe"],
	["Coda","osso","equilibrio","arti","gatto","cane"],
	["Dimora","casa","casa","nomade","residenza","regno","umile"],
	["Fax","telefono","invio","documento","email","macchina"],
	["Smartphone","mora","Android","computer","iPhone","telefono"],
	["Giardino","alberi","fiori","casa","cantiere","piante"],
	["Dolce","dolce","cena","dopo","cookies","torta"],
	["Oceani","Pacific","Atlantic","continente","acqua","mare"],
	["Rima","linee","poesie","corrispondenza","suono","finali","parole"],
	["ciglia","falso","Bat","occhi","capelli","ciglia"],
	["Grasso","patatine","nonsano","cibo","saturi","trans"],
	["Cucchiaio","liquido","utencil","Spork","coltello","forchetta"],
	["Diario","privato","giorno","record","scrivere","notebook"],
	[,,"Chiave""Jack","punti","uomo""divisa","raise","onore"],
	["Cuoco","fornaio","professione","calore","cibo","chef"],
	["Pelliccia","cani","animali","pelle","cappotto","capelli"],
	["Mesopotamia","mezzalunaferticle","tigris","iraq","babylonia","civilization"],
	["matrici","parentesi","numeri","moltiplicazione","addizione","algebralineare"],
	["Scuola","studente","educazione","Universty","laureato","collegio"],
	["Pappagallo","tropicali","Speek","colori","echo","uccello","gabbia"],
	["Triciclo","tre","ruota","bicicletta","ciclo","monociclo"],
	["Cavaliere","cavalleria","guerriero","vestito""medioevale","armatura"],
	["Gum","menta","pacchetto","menta","rondine","resina","masticare"],
	["Dinosauri","estinto","T-Rex","enorme","animale","cometa"],
	["Sabbia","deserto","Dune","bicchiere","ilgrano","spiaggia"],
	["Sassofono","legni","chiavi","jazz","canna","strumento"],
	["Matematica","equazioni","numeri","scienza","oggetto","scuola"],
	["Marciapiede","spalla","attraversamentopedonale","pedoni","strada","camminare"],
	["Acquereflue","serviziigienico-sanitari","rifiuti","underground","serviziigienici","fogna"],
	["NPR","ascolta","IraGlass","radio","nazionale","pubblico"],
	["LaMecca","pellegrinaggio","pregare","Hijra","moschea","Maometto"],
	["Campanello","suono","campana","arrivo","costruire","casa"],
	["Soffitta","spazio","mansarda","stanza","costruire","top"],
	["Tè","foglie","verde","calmo","tazza","birra"],
	["Pancetta","uova","guarito","maiale","grasso","maiale"],
	["Sabato","religous","culto","Domenica","Sabato","sera"],
	["Chiodo","stud","dito","pagliaio","muro","martello"],
	["Invenzione","scientifico","originale","processo","concetto","brevetto"],
	[,,"Schermo""video","camera""immagine","stream","audio"],
	["Colibrì","fiori","veloce","piccolo","ali","uccello"],
	["Download","musica","film","dati","copia","disco","Carica","computer"],
	["Acida","bruciare","chimica","pH","base","viaggio"],
	["Pigiama","confortevole","usura","sonno","pantaloni","letto"],
	["Porto","costa","carico","porto","pontili","navi"],
	["Gesso","matita","esempio","scrittura","lavagna","board"],
	["LSD","flashback","acido","allucinogeni","goccia","viaggio"],
	["Dama","gioco","re","nero","bianco","Scacchi"],
	["Orologio","ore","secondo","minuti","tempo","zecche"],
	["Sole","calore","luce","orbita","concia","stella"],
	["Orchestra","direttored'orchestra","string","Sinfonia","musica","strumento"],
	["caffeina","quattroloko","tè","chemcial","stimolante","soda","caffè"],
	["veleno","morte","zanne","chimico","pungere","ragno"],
	["Uniforme","scuola","lavoro","stessi","cappelli","abbigliamento"],
	["Amazon","SudAmerica","Colombia","fiume","tropicale","forestapluviale"],
	["Infermiere","medicina","ospedale""salute","cura","dottore"],
	["America","Nord","StatiUniti","continente","Canada","indiani"],
	["Erba","giardino","rosmarino","pianta","basilico","cucina"],
	["Canguro","calcio","hop","Australia","animale","sacchetto"],
	["Suicidio","omicidio","overdose","sestesso","uccidere","morte"],
	["Baseball","sport","palla","mlb","lanciatore","passatempo"],
	["Pancake","colazione","battitore","waffle","torta","piatto"],
	["Terremoto","tettonico","California","vibrazione","terra","shake"],
	["Aceto","basalmic","fermentazione","acetico","decapaggio","aspro"],
	["Vascadabagno","Seduto","pulito","bagno","acqua","doccia"],
	["Figlia","donna","ragazza","femmina","progenie","bambino"],
	["Vegetariano","vegan","carne","animale","onnivoro","dieta"],
	["casino","building","poker","bet","gambling","LasVagas"],
	["Remo","riga","legno","acqua","barca","paddle"],
	["Fumo","sigaretta","fuoco","soffia","fumi","soffio"],
	["Mascella","ossa","mento","faccia","cerniera","bocca"],
	["Arabo","parlare","MedioOriente","traduzioni","lingua","persiano"],
	["Cuscino","coperta","cuscino","testa","letto","sonno"],
	["Ritornoacasa","imbarazzante","danza""università","scuola","regina"],
	["Amore","SanValentino","sposa","bacio","storiad'amore","cuore"],
	["Ghianda","albero","dado","quercia","caduta","frutta"],
	["Famiglia","genitori","fratelliesorelle","persone","sangue","casa","casa"],
	["Soia","edamame","semi","pianta","fagioli","germoglio"],
	["Tuxedo","abito","camicia","vestiti","nero","matrimonio"],
	["Vodka","alcol","spiriti","colpo","liquore","Russia"],
	["Kayak","fiume","lago","acqua","Canoa","solo"],
	["Hindi","Urdu","delnord","parlato","lingua","India"],
	["Touchdown","palla","terra","obiettivo","punteggio","calcio"],
	["Moschea","religione","Islam","imam","preghiere","mihrab"],
	["Paesaggio","paesaggio","pittura","pastorale","ritratto","arte"],
	["Metafora","libro","figurativo","similie","dispositivo","letteraria"],
	["hippie","anti-war","hipster","subculture","freelove","70s"],
	["Coccinelle","ali","insetto","nero","rosso","spot"],
	["Ospedale","chirurgia","infermiere","imedici","salute","medicina"],
	["Canoe","acqua","Kayak","riga","barca","paddle"],
	["Perla","ostrica","vongole","mollusco","Collana","bianco"],
	["Jam","brindisi","purè","frutta","spread","preservare"],
	["Musica","radio","suono","gioco","ballare","canzoni"],
	["Saltomortale","movimento""ginnastica","caduto","testa","trasformato"],
	["Passaporto","straniera","viaggio","visto","foto","cittadinanza"],
	["compitiacasa","studio","casa","lavoro","liceo","lavoroscolastico"],
	["Limousine","tratto","nero","costoso","driver","taxi"],
	["Polmoni","ossigeno""trachea","aria","respiro","tosse"],
	["incumbent","corrente","seduta","elezione","ufficio","BarackObama"],
	["Nautico","acqua""traino","magro","superficie","sci"],
	["Busta","bollo","carta","posta","indirizzo","lettera"],
	["Lavastoviglie","macchina","lavaggio","affondare","piatto","pulito"],
	["Cioccolato","caramelle",,"scatola""marrone","bacio","bar"],
	["Centro","orizzonte","club","vitanotturna","città","grattacielo"],
	["Vetro","materiarl","sabbia","bere","colpo","finestra"],
	["Flag","polo","onda","nazione","paese","americano"],
	["Treno","passeggero","merci","Amtrak","direttored'orchestra","binari"],
	["Salvatore","salva","Gesù","figura","Messia","Dio"],
	["Olive","giardino","Martini","olio","verde","nero"],
	["Raccolto","cibo","fattoria","raccolta","raccolti","caduta"],
	["Branchie","ossigeno","polmoni","subacquea","breahte","pesce"],
	[,"Funzione""logaritmo","crescita","base","numero","esponenziale"],
	["Conto","banca","deposito","equilibrio","credito","aperto","risparmio"],
	["Lana","pecora","spin","mulino","tessuto","maglione"],
	["insalata","ingredienti","raw","vestire","verde","verdure"],
	["Auto","caccia","auto""compatta","velocità","veicolo"],
	["Cerume","giallo","dentro","protezione","orecchio","cera"],
	["Influenza","starnuto","latosse","malattia","influenza","malato"],
	["Fonderia","metalli","scodellato","foundr","fondatori","vasi","gamba"],
	["soup","cream","drink","hot","liquid","chickennoodle"],
	["Orion","cielo","cintura","stelle","costellazione","cacciatori"],
	["Afro","disco","Nefertiti","Ethiopia","capelli","tagliodicapelli"],
	[,,"Tombe""scatola""bara""cimitero""sepolto""morto","chiodi"],
	["Storia","tempo","eventi","oggetto","scuola","passato"],
	["Cuore","arteria","petto","chirurgia","amore","organo"],
	["Squalo","pesce","fareilbagno","spiaggia","morso","animale"],
	["Hamburger","prosciutto","McDonalds","manzo","panino","hamburger"],
	["Pedina","sacrificio","pezzo","promuovere","movimento","primo","scacchi"],
	["Rane","acqua","lillypads","ribbit","hop","Frogger","anfibi"],
	["Calorie","esercizio","salute","nutriente","energia","bruciare"],
	["Tassa","vendita","reddito","esentare","deducibili","prelievo"],
	["Paracadute","caduta","cielo","salto","aereo","goccia"],
	["Stagno","pesce","oceano","mare","acqua","lago"],
	["Vacche","addomesticato","pascolo","femmina","latte","animale"],
	["Bacino","addome","ossa","gambe","esseriumani","hip"],
	["aeroplano","fratelliWright","viaggiare","cielo","aria","volare"],
	["cicatrice","chirurgiaplastica","pelle","segno","lesione","sinistra"],
	["Ciliegina","cottura","decorazione","glassa","dolcetti","torte"],
	["Aldilà","cielo","religioni","morto","vita","passato"],
	["Freezer","frigorifero","congelamento","ghiaccio","freddo","comparti"],
	["Edera","veleno","piante","uva","campionato","arrampicata"],
	[,"Taglio""spada","lama","pistola","arma","coltello"],
	["Spiaggia","fareilbagno","oceano","acqua","sabbia","sole"],
	["sin","Cristo","Cristianesimo","religione","originale","cadutadell'uomo"],
	[,"Chiave""macchinadascrivere","tastiera","carta","tipo","ritorno"],
	["Tridente","arpione","tre","Nettuno","lancia","Poseidon"],
	["Bucato","cesto","bucato","asecco","abbigliamento","lavare"],
	["Orizzonte","terra","orizzontale","sole","tramonto","alba"],
	["Cocktail","frutta","agitatore","alcol","spirito","bere"],
	["Tatuaggio","progetta","nero","salotto","pelle","inchiostro"],
	["Fattoria","animali","crescere","stalla","terra","raccolto"],
	["Scaletta","pittore","tetto","tetto","salita","passi"],
	["Tempesta","pioggia","Thunder","grigio","tempo","fulmine"],
	["fascismo","comunismo","nazionalismo","marxismo","Mussolini","aladestra"],
	["Falsatestimonianza","giuramento","carcere","corte","punizione","menzogna"],
	["Colpodistato","esercito","rivoluzione","forza","controllo","governo"],
	["minatori","polmonenero","sciopero","piccone","sotterraneo","carbone"],
	["Softball","baseball","gioco","donne","palla","sport"],
	["Salsa","Sapori","latino","musica","caldo","danza","chip"],
	["Legge","regola","morale","governo","polizia","corte"],
	["Medusa","campana","meduse","ombrello","pungere","pesce"],
	["Pomodoro","rosso","frutta","saurce","zuppa","marinara"],
	["Luce","vedere","scuro","splendere","sole","lampadina"],
	["Sediaarotelle","ospedale","push","sedia","motorizzato","disabilità"],
	["Dottore","ufficio","medico","guarire","salute","medicina"],
	["Sterminatore","scarafaggi","insetti","veleno","uccidere","topi","parassiti"],
	["Pallavolo","spiaggia","spike","sport","palla","rete"],
	["Drago","grande","volare","respirare","fuoco","medioevale"],
	["carbone","carbone","deposito","fuoco","piledifumo","energia","brucia"],
	["Melassa","spesso","sciroppo","raw","zucchero","rum"],
	["Truck","mac","semi","trasporto","veicolo","trasporto"],
	["ambulanza","resuscitate","paramedici","medicina","Sirena","911"],
	["Lupi","Luna","ululato","predatori","cane","pacchetto"],
	["Uovo","uccello",,"guscio""nascita","nido","gallina","laico"],
	["Ala","cielo",,"spalla""aereo","volare","uccello"],
	["Baffi","labarba","bocca","uomini","viso","capelli"],
	["Mississippi","delta","HuckFinn","missouri","travel","river"],
	["Tubo","marijuana","tabacco","sigaretta","soffio","smoke"],
	["Rabbi","Torah","tempio","leader","ebreo","prete"],
	["Bussola","esploratore","strumento","magnetici","punti","direzione"],
	["Urina","serviziigienici","bagno","campione","pipì","giallo"],
	["Ambasciata","nazione","all'estero","straniera","ambasciatore","paese"],
	["Pasta","lievitati","cookie","provato","crescita","pane"],
	["motocicletta","ruote","HarleyDavidson","auto","corsa","bici"],
	["Azoto","piante","ciclo","terra","aria","gas"],
	[,"Chiave""tastiera","mouse","computer","musica","tipo"],
	["Demone","inferno","feroce","male","diavolo","possesso"],
	["Polizia","ufficiale","carcere","esecuzione","Report","legge"],
	["Pollice","succhiare","punta","mano","opponibile","dito"],
	["Armonica","labbra","strumento","musica","canna","gioco"],
	["Vischio","pianta","vacanze","Natale","sotto","bacio"],
	["Riccioli","diritto","spirale","perm","onda","capelli"],
	["materasso","sonno","schiuma","molle","letto","molle"],
	["fig","antico","albero","frutto","FigNewton","foglia"],
	["Agopuntura","terapeutico","mentale","asiatico","famale","ago"],
	["Achilles","Ulisse","trojan","greco","tacco","guerra"],
	["Vacanze","romano","lavoro","Natale","Ringraziamento","vacanza"],
	["Bambole","casa","vestito","farfinta","ragazze","gioco"],
	["Caffè","Starbucks","break","arrosto","caffeina","birra"],
	["Ebraismo","Dio","Torah","giudaiche","ebrei","riforme"],
	["Turista","luoghi","vacanza","hotel","straniera","visita"],
	["Farina","ilgrano","dolci","pasta","bianco","cottura"],
	["predatore","selezionenaturale","uccidi","animale","caccia","preda"],
	["Accademici","educazione","collegi","borsadistudio","dotta","laureato","studio"],
	["Vomito","bocca","stomaco","Puke","buttare","malato"],
	["Adam","fogliadifico","caduta","padre","mela","Eva"],
	["Bacio","abbraccio","sesso","storiad'amore","amore","labbra"],
	["Mani","artigli","clap","dita","armi","piedi"],
	["Taccheggiatori","merce","cliente","negozio","acquistare","rubare"],
	["D'argento","Ag","fine","prezioso","metalli","oro"],
	["Manica","abbigliamento","polsino""connesso","camicia","cuore"],
	["Ossigeno","carroarmato","soffocamento","aria","polmoni","respiro"],
	["Opera","browser","orchestra","musica","concerto","cantante"],
	["Tricipiti","braccio","bicipiti","indietro","superiore","muscoli"],
	["Vulcano","tettonico","montagna","cratere","lava","scoppiare"],
	["Pizza","pomodoro","formaggio","peperoni","Domino","fette","cibo"],
	["Tartaruga","rettile","tartaruga","vecchio","mare","guscio"],
	["Adobe","case","materiale","argilla","costruire","mattoni"],
	["Telescopio","ingrandimento","lente""Hubble","bicchiere","spazio"],
	["Casa","famiglia","sale","letto","vivere","casa"],
	["Smeraldi","","gemma","Taurus","colore","brillante","verde"],
	["Ragno","insetto","aracnide","morso","web","gambe"],
	["Vishnu","armi","Krishna","Induismo","incarnazioni","Dio"],
	["Giocoleria","tiro","catturare","intrattenimento","aria","palle"],
	["Iside","culto","Grecia","Egitto","Osiride","dea","Horus"],
	["disco","musica","funk","70s","BeeGees","SaturdayNightFever"],
	["Agricoltura","rurale","fattoria","piante","crescere","cibo"],
	["Alba","luce","alba","giorno","sole","mattina"],
	["Arpa","amore","fili","musica","string","intstrument"],
	["Hacker","internet","sicurezza","computer","crack","chiave"],
	["Monocolo","gentleman","vedere","string","uno","vetro"],
	["neanderthal","antenati","homosapiens","nonintelligente","specie","uomo"],
	["Divelluto","seta","tessuto","marrone","soft","underground"],
	["Rossetto","make-up",,"tubo","rosso","rosa","labbra"],
	["Armatura","veicolo","protezione","strato","abito","cavaliere"],
	["Psichico","magia","potere","pensiero","fortuna","medio"],
	["Diesel","bruciare","carburante","ilpetrolio","motore","gas"],
	["Veleno","animali","serpenti","tossina","veleno","zanne"],
	["Collina","Capitol","piatto","piccolo","top","montagna"],
	["Fioccodineve","unico","caduta","simmetria","neve","fiocchi"],
	["internet","bandalarga","http","online","ricerca","worldwideweb"],
	["Verdetto","giuria","galeotto","giudice","corte","colpevole"],
	["Autostrada","strada","auto","traffico","autostrada","Drive"],
	["Metropolitana","transito","treno""pubblico","underground","Metro"],
	["Aquila","artigli","civetta","calva","volare","uccello"],
	[,"Protezione""ombrello","scossa","polo","secco","pioggia"],
	["dizionario","Webster","alfabetico","definizioni","diricerca","parole"],
	["galassie","spazio","ViaLattea","pianeta","universo","stelle"],
	["Undo","modifiche","Ctrl+Z","cancel","computer","redo"],
	["Zucche","caduta","torta","Halloween","zucca","arancia"],
	[,,"Movimento""mimo""parole","idea","performance","parlare"],
	["Cemento","pietra","calcare","cemento","materiale","duro"],
	["Uva","vite","vino","rosso","bianco","aspro"],
	["lollipop","lick","TootsiePop","stick","candy","suck"],
	["Scimmia","alberi","evoluzione","discendente","scimmia","esseriumani"],
	["Eschimesi","delnord","indiani","Inuit","Canada","groenlandia"],
	["intimo","gambe","indumentointimo","cassetti","calzamaglia","mutandine"],
	["Cameriere","tavolo","punta","ristorante","servire","attesa"],
	["Cuffie","suono","orecchie","ascoltare","testa","musica"],
	["Skate","board","ruote","sport","pattinaggio","cavalcare"],
	["Struzzo","Africa","uovo","collo","uccello","lungo"],
	["Frutta","arancia","mela","pappa","semi","pelati"],
	["Pepperoni","rosso","salsiccia","manzo","maiale","pizza"],
	["Ascesso","tessuto","lesione","area","infezione","fuga"],
	["Soda","bottiglie","gassata","bere","bicchiere","pop"],
	["Aborto","cessazione","gruppidipressione","gravidanza","feto","embrione","dibattito"],
	["Castello","fossato","costruire","torri","assedio","ascacchi","re"],
	["Apocalisse","mondo","catastrofico","distruzione","libro","rivelazione"],
	["Elvis","cantante","musica","draftdodger","rockn'roll","presley"],
	["Fazzoletto","abbigliamento","lana","freddo","collo","usura"],
	["Vigiledelfuoco","truck","tubo","lavoro","estinguere","salvare","fuoco","casco"],
	["Cerchio","cerchio","pista","orecchini","cerchio","basket"],
	["Piedi","gambe","passo","mani","dita","camminare"],
	["Fantasia","calcio","sogno","farfinta","immaginario","libri"],
	["Caraibi","vacanza","mare","isole","creole","Americacentrale"],
	["Hollywood","film","industria","attori","film","California"],
	["Verruche","crescita","rotondo","funzione","pelle","rospi"],
	["Mercurio","rosso","temperatura","termometro","veleno","pianeta"],
	["Rasoio","capelli","edge","lama","bruciare","barba"],
	["Playboy","porno","sesso","modelli","nudo","HughHefner"],
	["Temperatura","freddo","Farenheit","gradi","caldo","celsius"],
	["Spinaci","Popeye","lattuga","vegetale","baby","verde"],
	["Divorzio","marito","moglie","sposa","separazione","affare","matrimonio"],
	["Zanne","d'avorio","corna","tricheco","lungo","elefante"],
	["Vernice","acquarelli","rivestimento","Microsoft","muro","pennello"],
	["Guinzaglio","parco","fermo","guida","animaledomestico","cane"],
	["Tempesta","Tornado","tempo","vento","fulmine","Thunder"],
	["Fossato","","fosso","difesa","acqua","circonda","castello"],
	["Banana","telefono","frutta","giallo","scimmia","alberi"],
	["Malditesta","Tylenol","Advil","mal","dolore","testa"],
	["Omicidio","premeditato","sangue","omicidiocolposo","crimine","uccidere"],
	["Stomaco","sconvolto","nervoso","fame","vomito","vuoto"],
	["Hotel","sonno","Stay","notte","stanza","motel"],
	["Dentista","pulito","dottore","denti","cavità","trapano"],
	["Gin","vermouth","Martini","alcol","tonico","spirito"],
	["Fiori","fiore","boquet","fiorista","colori","odore","rose","pianta"],
	["Televisiva","programma","spettacolo","programma","schermo","emittente"],
	["Iraq","GeorgeBush","Tigri","Iran","guerra","Kurdistan","paese"],
	["Iceberg","Artic","Alaska","Titanic","ghiaccio","ghiacciaio"],
	["Ghiacciolo","acqua","ghiaccio","dripping","appeso","stalattiti"],
	["Manette","serratura","mani","arrestato","Police","polsino"],
	["Albero","pino","alto","pianta","frutta","rami"],
	["patatinefritte","fritto","patata","fishandchips","hamburger","cibo"],
	["Ape","miele","volare","pungere","canticchiato","insetti"],
	["Esorcismo","male","posseduto","film","Rimuovi","diavolo","demone"],
	["Mele","sidro","frutta","albero","Bob","peccato","succo"],
	["Cornetto","mezzaluna","traballante","francese","dolce","forma"],
	["Labarba","capre","crescita","viso","vecchio","capelli"],
	["Nocedicocco","capelli","latte","fibra","tropicali","palm"],
	["Moda","stile","vestiti","pista","cappelli","modello"],
	["Angelo","religioso","bianco","Dio","aria","volare","cielo"],
	["Marea","alluvione","riflusso","crescita","oceano","luna"],
	["Pedonale","auto","attraversamentopedonale","marciapiede","passeggiata","Drive"],
	["Antartide","polo","sud","neve","continente","freddo"],
	["Muscoli","esercizio","ossa","legamenti","contratto","tendendo"],
	["Graffiti","illegale","muro","scrittura","disegni","tag"],
	["Affittare","musicale","affitto","pagamento","appartamento","denaro"],
	["Sfinge","Cleopatra","Giza","testa","Egitto","leone"],
	["Menta","balsamo","lavanda","mentapiperita","gomma","erba"],
	["Calendario","programma","giorni","tempo","anni","mese"],
	["Idaho","ovest","StatiUniti","Boise","stato","patate"],
	["Vite","chiodo","scanalature","sessuale","driver","filo"],
	["Occhiolino","vicino","spasmo","occhio","sonno","nudge"],
	["Glispaghetti","marinara","pomodoro","lapasta","spaghetti","piatto"],
	["Cave","uomini","stalagmite","stalattite","speleologia","buco"],
	["Neve","aratro","pioggia","bianco","ghiaccio","sci"],
	["Eterosessuale","gay","diritto","contrario","uguale","attrazione","sesso"],
	["Panini","formaggio","pb&j","lattuga","carne","pane"],
	["Termometro","Fahrenheit","tubo","mercurio","lampadina","temperatura"],
	["tappezzeria","divani","coprono","mobili","imbottito","Trim"],
	["Sapone","mani","fareilbagno","doccia","schiumatura","lavaggio"],
	["Sugo","cucina","Ringraziamento","cucina","topping","Turchia"],
	["Gelo","tempo","freddo","cristalli","congelare","ghiaccio"],
	["Flauto","banda","lungo","musica","suono","strumento"],
	["Lama","addomesticati","lanoso","cammello","lana","sfiorato","famiglia"],
	["Sigaretta","ligher","polmoni","confezione","luce","fumo"],
	["Falene","luce","notte","farfalle","insetto","bianco"],
	["Abramo","archetipo","alleanza","senzafigli","ebraico","patriarca","ebrei"],
	["Grave","cimitero","corpo","morto","scavare","sepoltura"],
	["Stipendio","raise","denaro","impiegato","salario","anno"],
	["Lattice","abbigliamento","condom","sintetico","guanto","gomma"],
	["Professore","istruttore","possesso","università","collegio","insegnante"],
	["Cane","animaledomestico","adottare","corteccia","coda","cat"],
	["Latrina","alcorrente","bagno","costruire","serviziigienici","fuori"],
	["Mammut","estinto","capelli","elefante","Iceage","antico"],
	["Narwhal","zanna","Arctic","balena","mare","corno"],
	["Infielder","lanciatore","palla","gioco","campo","baseball"],
	["Vino","uva","cenare","bottiglia","rosso","bere"],
	["Sale","mare","agitatore","deposito","stagione","pepe"],
	["Tramonto","tramonto","luce","giorno","sole","sera"],
	["Golf","corso","palla","fore!","Club","sport","buco"],
	["Papa","leader","religione","cardinale","cattolica","Vatican"],
	["Fame","stomaco","sete","fame","mangiare","cibo"],
	["Sgabello","Seduto","bar","indietro","superiore","sede"],
	["Tequila","liquore","agave","Margherita","messicano","alcol"],
	["Regina","corona","principessa","England","re","re"],
	["Ricetta","carta","libro","ingredienti","indicazioni","cuoco"],
	["Tranquillante","sonno","sparare","animali","droga","pistola"],
	["Vacante","stanza","spazio","motel","vuoto","hotel"],
	["Radio","stazione","ascoltare","musica","programma","emittente"],
	["Effettoserra","costruire","bicchiere","gas","crescere","luce","piante"],
	["Nipote","zio",,"sorella""famiglia","fratello","figlio"],
	["Pollo","carne","gallina","seno","cotto","cosce"],
	["Valletto","ristorante","guardiano","ospiti","parco","auto"],
	["Brindisi","burro","calore","forno","bere","pane"],
	["Dadi","cubo","leparti","sei","giocod'azzardo","roll","buttare"],
	["Menu","raccogliere","scelte","mangiare","cibo","ristorante"],
	["Tesoro",,"oro""pirati","Buried","prezioso","petto"],
	["Francobolli","centesimi","pagamento","busta","posta","spesedispedizione"],
	["Cupido","baby","nudo","fiocco","Eros","conleali","amore"],
	["Zucchero","artificiale","cane","caramelle","dolce","cottura"],
	["Fossili","terra","dinosauri","archeologi","ossa","morti"],
	["Legno","materiale","bussare","bastone","board","legname"],
	["germi","disinfettanteperlemani","Purell","microrganismo","batteri","malato"],
	["Macchia","colorante","colore","spill","segni","spot"],
	["Riso","Asia","sushi","fritti","risaie","cuoco"],
	["Goalie","difendere","proteggere","obiettivo","socker","hockey"],
	["Rettangolo","quadrilatero","piazza","parallelo","quattro","parti"],
	["Dito","punto","pollice","punta","diget","mano"],
	["Porcospino","spinoso","riccio","roditore","Quills","aghi"],    
	["Funzionale","Utile","Scopo","Ruolo","Pratico","Specificamente"],
	["Parigi","Moda","Settimana","Città","Francia","Eiffel"],
	["Stivali","Militare","Scarpa","Caviglia","Nero","Esercito"],
	["Fusion","Miscela","Combinazione","Occidentale","Nucleare","Indo"],
	["Avvolgente","Piega","Chiuso","Avvolgimento","Lato","Attraverso"],
	["Ciabatta","Sciarpa","Chudidar","Chunri/Odhni","Salwar","Cover"],
	["Zaino","Borsa","Stoffa","Giornalista","Donne","Spalla"],
	["Medaglione","Pendente","Collana","Catena","Amore","Oro"],
	["Lucidalabbra","Lucentezza","Lucentezza","Scintillante","Viso","Prodotto"],
	["Portafoglio","Borsa","Denaro","Cartad'identità","Pelle","Nero"],
	["FotoModello","Modello","Camera","Pose","Fotografo","immagine"],
	["Sneakers","Scarpe","Sport","Casual","Running","Rubber"],
	["Sarto","Stitch","MasterJi","Vestiti","Persona","Professionista"],
	["Spilla","Spilla","Gioielli","Decorativo","Attaccato","Tessuto"],
	["Cosmetici","Artificiale","Sostanze","Prodotti","Aspetto","Texture"],
	["Simmetria","Identico","Specchio","Stesso","Equilibrato","Forme"],
	["Influencer","Social","Seguendo","Fans","Popular","Famous"],
	["Motivo","Decorazione","Design","Ricorrente","Ripetizione","Immagine"],
	["Manichino","Vestiti","Sospesi","Negozi","Modello","Bambola"],
	["Fattoamano","Cucito","Manuale","Creato","Macchina","Automatico"],
	["Venditaaldettaglio","Negozio","Acquista","Negozio","Vendi","Acquista"],
	["Cintura","Pelle","Legato","Vita","Jeans","Pantaloni"],
	["Etnico","Tradizionale","Abiti","Abiti","Cultura","Categoria"],
	["Cosplay","Vestito","Comicon","Carattere","Indossare","Costumes"],
	["Display","Show","Demonstrate","See","Visible","Public"],
	["Sciarpa","Copertina","Tessuto","Collo","Calore","Tessuto"],
	["Guarda","Tempo","Indossa","Mano","Accessorio","Polso"],
	["Budget","Denaro","Limite","Piano","Importo","Risolto"],
	["Armadio","Armadio","Conservazione","Vestiti","Almirah","Armadio"],
	["Maschile","Maschio","Forte","Pesante","Femminile","Difficile"],
	["Occhialidasole","Occhiali","Tonalità","Riflessi","Occhi","Nero"],
	["Barrette","Hair","Ornament","Clip","Clasp","Head"],
	["Bracciale","Polso","Braccio","Gioielli","Ornamento","Regalo"],
	["Milano","Moda","Capitale","Qualità","Destinazione","Tessuti"],
	["Velo","Burqa","Nero","Copertina","Faccia","Testa"],
	["Toelettatura","Pulizia","Rasatura","Spazzolatura","Manutenzione","Igiene"],
	["Perizoma","Perizoma","Biancheriaintima","Panty","Piccolo","Indumento"],
	["Spallescoperte","Camicetta","Top","Abbigliamento","Copertina","Visibile"],
	["Guarda","Tempo","Polso","Orologio","Mela","Intelligente"],
	["Minimalismo","Semplice","Meno","Modesto","Declutter","Pochi"],
	["Agente","Individuo","Responsabile","Persona","Lavoro","Affari"],
	["Antico","Passato","Vecchio","Vintage","Storico","Datato"],
	["Distinto","Diverso","Unico","Speciale","Stesso","Simile"],
	["Salaprove","Acquista","Negozio","Vestiti","Prima","Acquisto"],
	["Canotta","Sciolto","Senzamaniche","Intimo","Donna","Donna"],
	["Casual","Rilassato","Informale","Tuttiigiorni","Quotidiano","Ordinario"],
	["Astratto","Tangibile","Calcestruzzo","Reale","Riepilogo","Simbolo"],
	["Rinnovo","Trasformazione","Modifica","Aspetto","Aspetto","Modifica"],
	["L'Oreal","Francese","Bellezza","Cura","Cosmetici","Pelle"],
	["Scambio","Riaccensione","Diverso","Valuta","Negozio","Indietro"],
	["Bikini","Beach","Swimwear","Two-Piece","Holiday","Women"],
	["Giacca","Indumento","Caldo","Cappuccio","Pelle","Inverno"],
	["Ghirlanda","Fiori","Corda","Disposizione","Decorativo","Foglie"],
	["Mercato","Place","Buy","acquisto","Stuff","Abiti"],
	["Tonalità","Colori","Occhialidasole","Occhiali","Aviatori","Grigio"],
	["Femminile","Dadonna","Curvy","Delicato","Donne","Qualità"],
	["Bracciale","Polso","Gioielli","Banda","Thoran","Amici"],
	["Smoking","Abito","Duepezzi","Cappotto","Giacca","Uomo"],
	["Estetica","Natura","Bello","Senso","Bellezza","Gusto"],
	["Regalo","Speciale","Gratuito","Anniversario","Presente","Compleanno"],
	["Scialle","Sciolto","Inverno","Corpo","Copertina","Donne"],
	["Diamante","Gioielli","Spumante","Donne","Costoso","Carbonio"],
	["Parrucca","Artificiale","Capelli","Calvo","Copertura","Testa"],
	["Fantasia","Speciale","Unico","Fantastico","Decorato","Diverso"],
	["Maglione","Lana","Inverno","Caldo","Indossa","Indumento"],
	["Pedicure","Trattamento","Cosmetico","Piedi","Unghiedeipiedi","Manicure"],
	["Supermodel","Fashion","Rampwalk","Marchi","Term","Rich"],
	["Estensioni","Lunghezza","Colore","Capelli","Unghie","Lungo"],
	["Burqa","Musulmano","Donne","Nero","Copertina","Abaya"],
	["Ombre","Ombreggiato","Colore","Capelli","Miscela","Sfumatura"],
	["Collezione","Abiti","Moda","Set","Gruppo","Simile"],
	["Glamour","Allamoda","Moderno","Bellezza","Attraente","Attraente"],
	["Vintage","Retro","Olden","Past","Quality","Wine"],
	["Grembiule","Cottura","Stoffa","Cucina","Anteriore","Corpo"],
	["Tunica","Camicia","Maglione","Indumento","Tomaia","Corpo"],
	["Fotocamera","Obiettivo","Immagine","Clic","Smartphone","Selfie"],
	["Vellutoacoste","Tessuto","Durevole","Colore","Cavo","Tessuto"],
	["Versace","Italiano","Lusso","Moda","Abbigliamento","Marchio"],
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
	["albicocca","nocciolo","arancione","pianta","susina","frutto"],
	["antracite","nero","colore","carbone","fossile","grigio"],
	["apnea","palombaro","bombole","immersione","respirare","sommozzatore"],
	["apice","cima","punta","vertice","culmine","massimo"],
	["appello","scuola","presente","assente","corte","esame"],
	["appartamento","casa","stanza","affitto","abitazione","acquistare"],
	["aquila","uccello","rapace","intelligente","vista","condor"],
	["arachide","nocciolina","americana","superpippo","tostato","olio"],
	["arcipelago","Antille","isole","gruppo","mare","Eolie"],
	["argilla","roccia","porosa","piedi","creta","ceramica"],
	["arguto","avveduto","fine","ingegnoso","sottile","osservazione"],
	["arnese","attrezzo","strumento","lavoro","mestiere","utensile"],
	["arrotino","affilare","mestiere","lama","coltello","forbice"],
	["asciugamano","tela","spugna","acqua","bagno","accappatoio"],
	["assieme","con","stare","riunire","gruppo","tutti"],
	["assai","tanto","abbastanza","tevogliobene","molto","quantità"],
	["attimo","cogliere","carpediem","fuggente","istante","aspettare"],
	["attico","ultimopiano","edificio","casa","sopra","abitazione"],
	["auge","esserein","apice","culmine","successo","fama"],
	["audience","televisione","ascolti","Auditel","share","spettatori"],
	["aumentare","crescere","tasse","incrementare","maggiore","quantità"],
	["australiano","continente","abitante","Canguro","isola","Sidney"],
	["calcio","partita","palla","finale","mondiali","squadra"],
	["cristallo","vetro","bicchieri","gemma","quarzo","diamante"],
	["divano","salotto","poltrona","letto","cuscino","pisolino"],
	["fiore","petalo","profumo","farfalla","pianta","colorato"],
	["giornale","gazzetta","giorno","leggere","primapagina","giornalista"],
	["rimmel","trucco","ciglia","cosmetico","allungare","DeGregori"],
	["Romeo","gigli","innamorato","Giulietta","Shakespeare","Verona"],
	["scoop","notizia","giornale","rivista","colpo","sensazionale"],
	["semaforo","fermarsi","verde","rosso","arancione","incrocio"],
	["semolino","brodo","minestra","farina","riso","neonato"],
	["soggiorno","viaggio","permanenza","salone","azienda","obbligato"],
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
