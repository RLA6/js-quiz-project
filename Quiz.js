/* 
 WAT MOET DE QUIZ KUNNEN
 Vragen tonen op het scherm
 Antwoorden laten kiezen via knoppen
 Controleren of een antwoord juist of fout is
 Meerdere vragen achter elkaar afhandelen
 Een eindresultaat tonen

 BEOORDELINGSCRITERIA 
 Werkende quiz met minimaal 5 vragen
 Correct gebruik van JavaScript-concepten
 Codekwaliteit (leesbaarheid, structuur, functies)
 GitHub structuur
 Duidelijke en logische commits
*/
 
const vragen = [
    {
        vraag: 'Welk dier kan zichzelf letterlijk weer jong maken en is dus onsterfelijk?',
        keuzes:['Een octopus', 'Een kwal','Een schildpad'],
        correct: 2
    },

    {
        vraag:'Welke hagedissensoort bestaat alleen uit vrouwtjes en plant zich voort zonder mannetjes?',
        keuzes:['New Mexico Whiptail','Komodovaraan','Kameleon'],
        correct: 1

    },

    {
        vraag: 'Welk dier heeft 24 echte ogen, waaronder lenzen die kleuren en scherpe beelden zien, en deze ogen actief gebruikt om mee te jaagt?',
        keuzes:['Box jellyfish','Inktvis', 'Ubuntu Rups'],
        correct: 1
    },

    {
        vraag: 'Welke vogel vliegt non-stop meer dan 11.000 km zonder te landen, eten of drinken, en krimpt daarbij zijn organen deels?',
        keuzes:['Reuzen albatros','Bar-tailed godwit','Kasuarissen'],
        correct: 2
    },

    {
        vraag: 'Welk dier is gefilmd terwijl het bewust een giftige kogelvis (pufferfish) plaagt om een kleine dosis neurotoxine vrij te maken, zodat ze high raken en ze geven de vis zelfs door aan elkaar alsof het een joint is?',
        keuzes:['Orka','Zeeleeuwen', 'Dolfijn'],
        correct: 3
    }

];

let huidigeVraag = 0;
let score = 0;

const vraagElement = document.getElementById("vraag");
const keuzesElement = document.getElementById("keuzes");
const resultaatElement = document.getElementById("resultaat");


