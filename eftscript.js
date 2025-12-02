/* VARIABLES */


// MoverAFKs
var activadoBajarAfKs = true

// Equipos Automaticos
var automatico = true;
var eligiendo = false;
var teamEligiendo = -1;
let pickAfk = {}; // { playerID: ticksEsperando }
const PICK_TIMEOUT = 600;

// Variables de player

var maxPlayer = 22;
var player_auth = new Map();
var Players_team = [[], [], []]
var player_on_game = [[], []]
var admins = []
var oficiales = []
var player_afk = new Set();
const AFK_TIME_WARNING = 10;  // segundos para advertencia
const AFK_TIME_KICK = 15;     // segundos para kick

let afkData = {}; // { playerID: { lastX, lastY, lastMoveTick, warned } }

// Stats

var mvp = new Array(2);
var hayValla = false

// GKs

var gkRed = -1, gkBlue = -1;
var hayGK = false;
var isGameStarted = false
var isGKgot = false
var gk = [0, 0]

// CLANES

let clans = {}; // Almacena los clanes
let clanInvites = {}; // Almacena invitaciones pendientes

// TEMPORALES

var adtList = new Set(); // Admin de la temporada
var adtPlayer = [""];

var bdorList = new Set(); // Balon de oro
var  bdorPlayer = [""];
 
// LISTA VIPS
var vipList = new Set();
var vipPlayers = [];

//BLACKLIST

/* var banList = [
    
    "oNxS0Vkx9w2XgNkGdyVYaZi4X9Y02XYzqEcw9MAFbQQ", // chaca
    "pmyo1mfMsAyEGde9DGHKjUugseGXYX3nzHWbPUjT-ZU", // ¿?
    "tvhbvvPSJvjK231c1BFwXkIjX6ygFZSHrOa2gTi4BwM", // ¿?
    "f_mIu4LgmENtJy_oD0CxE3mlpeD8KXr--iuH36EM6VE", // spammear con multicuentas
    "p8h7f-BQGAf74ZbLTgcEkT87rx8Jqk6Wo4tMj3UYh7Y", // spammear con multicuentas
    "_4F9eEM9NiB9usmXmLZy5LLGst5RK7eYtfEWi-3F3pQ", // bautista
    "w1eCzKbMaYKnfPNQM3KzKrSi8Owf8q1vD2fsKZxH2k8", // troll con nombres
    "nwA3FNn4wPs7UOodB8JmYan3xro_8Q2e70Wnd7S0KWU", // troll con nombres
    "oMpuhSbcH8FKjhylQ9cm59JD5MYJgU50ChZMmPKuYOM", // troll con nombres
    "aFmca-CQw8a3hGY1MxdeStS_0WLnog8T6L0tJlcUN1s", // troll con nombres
    "Gf_XFCUjmnDManCpZefHg8Jtz0G1Ro4vl5-DjicrezQ", // spam
    "iUHQyWwikHRQ0VFCd8EE_cQtEJtlZ1qh1ilUW5pWQ5g", // troll con nombres
    "JfMbFl13pFjC5GfQpdCsMPnO4SGwJDTqEYQJiauKRYo", // troll
    "xt5qzMlGhTwtFZXDIR1aoC4X0DCfugQ7SwDCmGJfHzE", // troll
    "8JZmIksrzM-nXQieVR27Nmpo5SlrRdVP79O5Ary7ZOw", // spam
    "TVHxnsyBkwdH6NKrI4Q4f4FptVU8IAWOJFfkO1e4CHc", // spam

]; */

var banListIP = [

    "3138312E3232392E37362E323231",
    "3139302E3234362E3131322E323134",
    "3138312E3232392E3136302E3539",
    "3139302E3131322E3130322E313537",
    "3230302E3131352E3231382E313934",
    "3231362E3233382E3132312E3339",
    "3230312E3137392E3132302E3537",
    "3138312E3130352E3232342E313438", // Gonzalo
    "3132342E3134342E3133382E3136",
    "3138312E33302E39302E323534", // Uri Gandel
    "3138312E34342E3133302E313837", // Trep
    "3138312E39392E3234322E3238", // fN
    "3138312E3130352E3135322E3338", // fN
    "34352E37312E3135332E313437", // PS
    "3138312E34362E3133382E3731", // Cris mj.
    "3138312E32312E31382E3432", // ROBERT
    "3138312E34342E3133302E313837", // Trep
    "3139302E3233382E3234332E3238", // colo(noprime)
    "3136382E39302E37322E3139", // Cavino
    "35312E31352E3132352E313930", // Cavino
    "3136382E39302E37322E3139", // Cavino
    "35312E3135382E3233372E323131", // Enzo f. (MULTICUENTAS)
    "3137392E33372E37342E3931", // Yesan
    "35312E38312E3230382E313332", // Multicuentas

    ];

const muteTime = new Map();

// Anti Bucles

var linkAnunciado = false;
let pickAnnounce = false;
var anunciadoGO = false;
var anunciadoseg = false;

// Stats partido

var playerKickBall = [0, 0];
var playerKickName = ['', ''];
var teamKickBall = [];
var goalList = [];
var apuestas = [];
var ruletas = [];
var equipo
var topStats

var winStreak = 0
var teamWinStreak = 0

var golesPartido = [];
var rand, rand1;
var tiempoEmpezadoJuego;
var quickmode = false;

var PlayerAuth = {};
var player = {};
var xp;
const rangos = [
            "👻CONO👻", // 0 
            "🦴TIERRA", // 1
            "🟤BRONCE", // 2
            "🔘PLATA", // 3
            "🟡ORO", // 4
            "🔵PLATINO", // 5
            "🟣DIAMANTE", // 6
            "💠LEGEND💠" // 7
        ];


// VARIABLES DISCORD

const webhookUrls = {
    chatLogger: "https://discord.com/api/webhooks/1194068563930124440/qMtTJYPn5cxES0pXHOcUW0JvCBVxnGxFVgNuhJzxWKMpwPILbWMPSozPRH2oNoVSMrwp",
    adminCalls: "https://discord.com/api/webhooks/1190405741991960687/bbWX7UTZCRNFKXIcH7V5OFQl0z86M0mpfr1Yb1pihISXoka6oKX1LXEZ0YUdsVRKmyda",
    passwordLog: "https://discord.com/api/webhooks/1188868387909140550/CF8OazYZIojyeWwRL0n41Pk7L1WU5eMzl-nerZOkUQUthv2xQeSaDzznfi5MKEI3qdCT",
    banLog: "https://discord.com/api/webhooks/1193650779836387478/daa8v24aiwvDQy25bSvlvkMF9YXbQQ1aXmDO4RLdlI_U10YF4GRWQewA8HP-AjRwDvUi",
    playersLog: "https://discord.com/api/webhooks/1201610252211204188/U_iOz9yRSbCFoz_0Ych_TpgixHZ-BMkHNgGSq5hMW0GU6Jxu_iYSR733fGWvJa92labV",
    advLog: "https://discord.com/api/webhooks/1314609350257541192/eWQtOjuLUY60zqRn9xa1-FycmE9D3_8zrgqPNpt4ofJ15nkXBkC8E6VIsEsKkwMvLJ_g",
    linkLog: "https://discord.com/api/webhooks/1344375156113412158/k1htY8Ocm6euffDySCZDjz_z5og8NRiK4nT6u_DBwI9YZ87d8wfyorx7MbMmTV4WG4YC"
}
var sendRecWebhookURL = "https://discord.com/api/webhooks/1188203698996912138/KtxhoWNi5ChdG8u3-fXWWxFspzfXgzGUwQDDXByyarT56XSl1QWXlMmcJhwrE1u4-4XC";

// Variables Admin

var password = "bandido227";
var admins_ofi = new Set();
var adminoficial = [

    "-yr9lqMfLzVu_OXgJBXTiVC2T8vxsmzlgaO91OjGDtA", // Tibu
    "CfW8awnsxGTeFuutHVOKJ_ZyTqdUYPYfr2JofVi0wcU", // Chancalay
    "BcutUKlunbKtutpOimJ7DpFHi2N6aATHZ49sHLXf3aQ", // Akin
    "uydFoT7eVvmq6LwY9paI1a3SgQhysu1j3xHSnmKwhlk", // Juan
    "uC7Yrw1eZjjbiOcmBVMusbh5uVK1hrYzkUVrDXoQ_fg", // Lz
    "Xk3ewst3hmxG20Xs5uEaWKDyi2ayUNf5TiJ3kr4W7LE", // shankar
    "2caENkwSCtkiujRq0UJcFE9dl55E6uF2cYigI4Ohk00", // patitoxeneize
    "3uG1mYsnNc1V0NzvpeFAXDqO_uLgvFqyVpekX2A1YPs", // Salta
    "LfvUGQWlqvB38_w0IuHrZ5DBFk0r452QBjLrwwNXl50", // Nz
    "kQHXHkb1aDsX_rzXQ1P3C1x0S09Q1mhlOdUEudIadQg", // Carita
    "QDR3sOoK0jELcD2mEVpAGMfucS5m_8OLeREAvWimscY", // Alon
    "PIYkNwQLRIS3wxw6bU1V6zLQr6t7NfRY30jIuGbSFmo", // Lol
    "KC-POvwUjU5WSAkYKt0MpfVyJ33xOJJVrPeqCRttiGE", // Muller
    "ohxMJh7_7DlMW2Otf-up1DVdwedA-c9oel0JlYyh9Zw", // Fede
    "nSgj3ci6zAdIgzpqrCistMN-9Zbvqvuoe54mUfEL7I8", // AgustinFerna
    "ilDpPUA9xxM9dPhuArKgqtt3tP1boJodgRyaZL0El5Y", // Smir
    "Z4Hu-OLIlMYtGpSmKo--GVefsHGRS9dN7eaTCYfCypU", // Villa

 
    ];

var totoList = new Set();
var totoPlayer = ["F2EX_YiIOGCzOoVp-f-OCQqr4I8cmAJ_o6gSqE86Udw"];
var TotoAdminPassword = 't0t4stic0227';
var superAdminPassword = 'ch4nk';

var adminPassword = 1000 + getRandomInt(9000); // Generar contraseña

console.log("Contraseña Administrador : " + adminPassword);  // Mandar contraseña al log
sendWebhook( // Mandar contraseña al discord
    'passwordLog',
    'Pass Log',
    'Contraseña Administrador: ' + adminPassword
);

// CONSTANTES

const nam = "⚡ x4 - El Futbol de Toto [BETA] ⚡";
const maxPlayers = maxPlayer;
const public = false;
const noPlayer = true;

const scoreLimit = 4;
const timeLimit = 4;
const quicktoggler = 18;
const pickToggler = 1;

const teamID = {Spectators: 0, Red: 1, Blue: 2};
const idTeam = {0: "spectators", 1: "red", 2: "blue"};

const frasesayuda = [

    'Usa "!puntos" para poder ver cuantos puntos te da cada stat.',
    'Con "!monedas" podes ver cuantas monedas te da cada stat.',
    'Usa "!rankhelp" para ver las distinciones de los rangos en el host.',
    'Si sos GK y no gkeas podés ser sancionado con kick y 1/3 !!',
    'Si te unis al discord vas a poder estar al tanto el estado del host, eventos, torneos express, etc.',
    'Usa "!racha" para ver la racha actual.',
    'Los GKs de cada equipo va a ser el jugador que esté mas cerca de su arco.',
    'Comenzando el mensaje con "t" podes mandar un mensaje al chat del equipo!',
    'Si la sala tiene 18 o más jugadores se activará el Modo Express. Los partidos seran mas rápidos',
    'Ahora podes apostar a un equipo utilizando el comando !apuesta. Siempre y cuando el partido no haya empezado.',
    'Para ver las apuestas del partido usa el comando "!apuestas".',
    'El que quede top 1 de Experiencia será el Ganador del Balón de oro a final de temporada.',
    'Con "!ruleta" podes jugar a la ruleta para apostar plata.',
    'Usa "!rank" para ver tu progreso de Xp y cuanto falta para tu proximo rango.',
    'Con "!clan help" podes ver todos los comandos relacionados a los clanes.'

    ];

const avatarGol = [
        "⚽",
        "⚽",
        "⚽",
        "⚽",
        "⚽",
        "💥",
        "⭐",
        "⚡",
        "🔥",
        "☠",
    ];

const avatarAGol = [
        "🤡",
        "🤡",
        "🤡",
        "🤡",
        "🤡",
        "🐒",
        "💩",
        "🥶",
        "🥵",
        "👻",
    ];

const frasesGol = [

    (player) => `clavala donde quieras nomas...`,
    (player) => `pero qué golazo mandó ${player} a guardar`,
    (player) => `na ${player} sos un enfermo`,
    (player) => `${player} peló la verga`,
    (player) => `Hay que cerrar el estadio...`,
    (player) => `Lo de ${player} es impresionante ya`,
    (player) => `${player} hiciste tipico gol de fracasado`,
    (player) => `${player} no sé si sos bueno o le metiste gol a turrón`,
    (player) => `nono pero que gol de mierda ${player}`,
    (player) => `Y AHÍ VA ${player} A COLOCAAAAAAAAR`,
    (player) => `Tranqui vos ${player} eh`,

    /*    'peló la verga',
    'se las mandó a guardar',
    'mamita que clavas',
    'que golazo te acabaste de mandar',
    'TIENEN QUE CERRAR EL ESTADIO DESPUÉS DE ESE GOLAZO',
    'lo tuyo es impresionante',
    'acabó de demostrarnos como se juega al fútbol',
    'QUE GOLAZO QUE GOLAZO QUE GOLAZO, VIVA EL FUTBOL VIVA EL FUTBOL, ME VUELVO LOCO',
    'hiciste típico gol de fracasado',
    'nono que gol de mierda',
    'no sé si sos bueno o si le metiste gol a turrón',
    'tranqui vos eh',
    'A COLOCAAAAAAAAR',*/

    ];

const frases30s = /* equipo = equipo ganando | equipoC = equipo perdiendo */[
    (equipo, equipoC) => `Nos cuentan los del ${equipoC} que la están pasando muy mal`,
    (equipo, equipoC) => `Tremenda paliza anda dando el ${equipo} a los del ${equipoC}`,
    (equipo, equipoC) => `El ${equipo} está teniendo un sólido partido, hay que ver si lo mantiene`,
    (equipo, equipoC) => `Tiene toda la pinta que turrón está en el ${equipoC}`,
    (equipo, equipoC) => `Tiene toda la pinta que elmati está en el ${equipo}`,
    (equipo, equipoC) => `Está para que el ${equipoC} lo empate eh`,
    (equipo, equipoC) => `Ultimos 30 y el ${equipo} tiene la ventaja`,
    (equipo, equipoC) => `Avisenle al ${equipoC} que empezó el partido`,
    (equipo, equipoC) => `El ${equipoC} piensa que sigue en lag test`,
    (equipo, equipoC) => `TIENE TODA LA PINTA QUE TOTO ESTA EN ${equipoC} att. chancalay`,
    ]; 

const frases30sEmpate = [
    "Partido trabadísimo con ambos equipos metiendo huevo",
    "Falta poco para que termine y esto todavía sigue en empate...",
    "Aunque va en empate se nota un equipo metiendo mas huevo que el otro...",
    "Ojalá terminen rapido así los spec juegan",
    "Esto puede llegar a terminar acá o en 10 horas",
    "Si siguen así se viene nuevo record al partido más largo!",
    "el que lo gana es gay dijeron por ahí",
    "el que lo pierde es gay dijeron por ahí",
    "Hay que avisarle a los equipos que no hay penales después del empate",
    "A ver si aparece el nine que el partido está apagado..."
    ];

const frasesrandom = [

    'Turrón una vez dijo: ... no sé no hablo con conos',
    'Nunca le preguntes a un hincha de Boca que pasó en madrid',
    'Nunca le preguntes a un hincha de riber que pasó en 2011',
    'Nunca le preguntes a un hincha de independiente por qué es el más grande... Pobrecitos ya deben tener demencia seníl',
    'Nunca le preguntes a un hincha de racing... nada porque no tienen nada bueno jajaja',
    'La contraseña para ser admin es totoculote. Probalo con !claim-admin',
    'Núñez se creía el mejor del host. Hasta que lo conoció a ElMati',
    'Si hay solo un admin podes probar usar !setadmin para ayudarlo',
    'https://youtu.be/dQw4w9WgXcQ',
    'Sabías que Malcom Braida se oleó a Turrón y lo retiró? ... este se creía guante de Oro',
    '|chancalay es de racing, háganle bullying',
    'Toto es malísimo o buenísimo, depende si juega o spectea.',
    'Agustínferna ❌ AgustínFemboy ✅',
    'a Coz le dimos Admin Ofi. ¿Qué Pasó? ahora tiene mas denuncias que los rugbiers 🔥🔥',
    'AgustinFemboy, Burrolay, Smirdown, corruptoto, tiburro, ascoz, turrón (se explica por sí solo)',
    'Nunca le preguntes a Toto algo del host porque seguro no sabe',
    'guarda con trolear porque smirnoff te puede qukar 🗣🔥',
    '"1v1 UNGA UNGA 🐕🐕" exclamó Turron',
    'DALLOT... GARNACHOOOoo... solo coz sabe cómo termina...'

    ];

const frasesAutogol = [
    'minimo te mereces una lobotomía',
    'Anda pensando en la jubilacion amigo...',
    'Mamita... Para qué te traje',
    'me parece que no era por ahí...',
    'sos la definición de pelotudo',
    'mejor ni opinemos',
    'JAJAJAJAJAJAJAJAJAJAAJAJAJAJAJAJAJAJAJAJAJAJAJAAJAJAJA',
    'que fracasado eh',
    'tuvo una definición a lo turrón',
    'mamita totito.',
    'Pasó turrón y dijo que no da',
    'borra google porfa',
    'el terror de las 2 áreas',
    ];

const frasesAsist = [
    'lo dejó solo',
    'tuvo un pase comparable a la definición',
    'tremendo pase diste pa',
    'el gol es todo tuyo.',
    'dejó a la defensa inválida',
    'diste un pase de mierda la verdad',
    'diste tremendo pase de fraca',
    'nono que pase de remierda',
    'flasheó Kross por un momento',
    'tranqui vos también eh',
]

const frasesAsistAG = [
    'aunque el gol es todo de ',
    'toda de ',
    'sin vos (capaz) no era gol ',
    'el que se metió gol en contra le hizo un favor a ',
    'le salvaron las papas a ',
    'menos definición que toto para que te lo roben ',
    'USADISIMO POR ',
]

const f8ball = [
    'Quizás...', // si
    'Sabes que si', // si
    'Depende del día', // ??
    'Nada que ver', // no
    'Puede que si como puede que no', // ??
    'No.', // no
    'Si.', // si
    'Sabes que no', // no
    'Soy hincha de agropecuario.', // ??
    'Capaz', // si
    'Es probable que no', // no
    'Puede ser', // si
    'Na ni en pedo', // no
    'Es obvio que no', // no
    'Obviamente', // si
    'Como vas a preguntar eso enfermo??', // ??
    'No me dejan responder...', // ??
    'me da paja responder perdón', // ??
    'Eh???', // ??
    'Preguntale a un admin', // ??
    'Quién soy yo para responderte eso?', // ??
    'Vos ya sabes que si', // si
    'Vos ya sabes que no', // no
    'SEEEEEE', // si
    'NI A PALO FLACO', // no
]

const camis = [
    /* Paises */
    /* 0 */     [0, 0x272C2E, 0xFFFFFF, 0x55BAF4, 0xFFFFFF],
    /* 1 */     [60, 0xFFFFFF, 0x3B00C7, 0x4400E6, 0x5B14FF],
    /* 2 */     [220, 0x038434, 0xF8DD2E],
    /* 3 */     [180, 0xFFDE05, 0x043EDB],
    /* 4 */     [0, 0x081045, 0xFFFFFF, 0xE8E8E8, 0xFFFFFF],
    /* 5 */     [0, 0xFFFFFF, 0x05009C, 0x04006E, 0x05009C],
    /* 6 */     [180, 0xd4ba91, 0x2D4E9D],
    /* 7 */     [180, 0x73BEFF, 0xFFFFFF],
    /* 8 */     [90, 0xFFFFFF, 0xE5231F, 0xC41E1A, 0x911713],
    /* 9 */     [90, 0xE5231F, 0xE5F9FF, 0xCCFFFF, 0xB8FFFF],
    /* 10 */    [90, 0xe52520, 0xFFFFFF, 0xE0E0E0],
    /* 11 */    [90, 0xFFFFFF, 0xE52520],
    /* 12 */    [180, 0x253d91, 0xF8F8F8, 0xFFFFFF, 0xF8F8F8],
    /* 13 */    [180, 0xFFFFFF, 0xE52520],
    /* 14 */    [0, 0xFFCB1F, 0xFFFFE1, 0x000000, 0xFFFFE1],
    /* 15 */    [60, 0xFF6F0F, 0x0F15BF, 0x1118D6, 0x131BF5],
    /* 16 */    [180, 0x000000, 0xFF7F00],
    /* 17 */    [90, 0xFFFFFF, 0xFF002B,],
    /* 18 */    [0, 0xFFFCFC, 0x090980],

    /* Equipos italianos */
    /* 19 */    [0, 0xFFE600, 0x000000, 0XFFFFFF, 0x000000],
    /* 20 */    [0, 0xFFFFFF, 0x0099FF],
    /* 21 */    [0, 0xFFF700, 0x940000],
    /* 22 */    [0, 0xFFFFFF, 0x001E94, 0x000000, 0x001E94],
    /* 23 */    [0, 0xFFD138, 0xA80000, 0x000000, 0xA80000],
    /* 24 */    [0, 0xFFFFFF, 0xB00000, 0x001E94],

    /* Equipos ingleses*/
    /* 25 */    [90, 0xFFFFFF, 0x0027A6],
    /* 26 */    [90, 0xFFFFFF, 0xE80000],
    /* 27 */    [90, 0x000000, 0x00BEE3],
    /* 28 */    [90, 0xFFFFFF, 0xFF0000],
    /* 29 */    [90, 0xFFFFFF, 0x0039BF],

    /* Equipos alemanes */
    /* 30 */    [0, 0xFFFFFF, 0xFF0000, 0x002EAD, 0xFF0000],
    /* 31 */    [0, 0x000000, 0xFFFF00],
    /* 32 */    [90, 0xFFFFFF, 0x000000, 0xFF0000, 0x000000],
    /* 33 */    [90, 0xFFFFFF, 0x0037EB],

    /* Equipos españoles */
    /* 34 */    [90, 0xF7FF00, 0x000073, 0x800000, 0x000073],
    /* 35 */    [0, 0xFFD138, 0xFFFFFF],
    /* 36 */    [0, 0x0A0063, 0xE80000, 0xFFFAFA, 0xE80000],
    /* 37 */    [0, 0x000000, 0xE80000, 0xFFFAFA, 0xE80000],
    /* 38 */    [0, 0x000000, 0x00DE3B, 0xFFFAFA, 0x00DE3B],
    /* 39 */    [0, 0x000000, 0xFFFFFF, 0x0016DB, 0xFFFFFF],
    /* 40 */    [0, 0x000000, 0xFFFFFF, 0x0083DB, 0xFFFFFF],
    /* 41 */    [0, 0x000000, 0xFFFFFF, 0xFF0000, 0xFFFFFF],
    /* 42 */    [0, 0x000000, 0xFFFFFF],

    /* Equipos argentinos */
    /* 43 */    [90, 0xFFFFFF, 0x2722C7, 0xFFB521, 0x2722C7],
    /* 44 */    [60, 0x000000, 0xFFFFFF, 0xDE1F1F, 0xFFFFFF],
    /* 45 */    [0, 0x000000, 0x0088FF, 0xFAFAFA, 0x0088FF],
    /* 46 */    [60, 0xFFFFFF, 0xFF0000, 0xBD0000, 0xFF0000],
    /* 47 */    [0, 0xFFFFFF, 0x001287, 0xD60000, 0x001287],
    /* 48 */    [0, 0xEB0000, 0xFFFFFF],
    /* 49 */    [0, 0x000000, 0xFF0000, 0xFFFFFF, 0xFF0000],
    /* 50 */    [90, 0xFFFFFF, 0xFFFFFF, 0x00159C, 0xFFFFFF],
    /* 51 */    [0, 0xFFFFFF, 0x001CA6, 0xFFF700, 0x001CA6],
    /* 52 */    [0, 0xFFFFFF, 0xFF0000, 0x000000],
    /* 53 */    [120, 0x000000, 0xFF0000, 0xFFFFFF, 0xFF0000],
    /* 54 */    [90, 0xFFFFFF, 0xFFFFFF, 0x000C59, 0xFFFFFF],
    /* 55 */    [0, 0x000000, 0xFFFFFF, 0x00B035, 0xFFFFFF],
    /* 56 */    [60, 0xFFFFFF, 0x590801],
    /* 57 */    [60, 0xFFFFFF, 0x00E5FF],
    /* 58 */    [60, 0x02003D, 0xFFFFFF],
    /* 59 */    [90, 0xFFFFFF, 0x0010EB, 0xFF0000, 0x0010EB],
    /* 60 */    [0, 0xFFFFFF, 0xFF0000, 0x000000],
    /* 61 */    [0, 0x000000, 0xFF0000, 0xFFFFFF, 0xFF0000],
    /* 62 */    [0, 0x000000, 0xF7FF00, 0x006E0B, 0xF7FF00],
    /* 63 */    [0, 0x000000, 0xF7FF00],
    /* 64 */    [0, 0x000000, 0xF7FF00],
    /* 65 */    [0, 0xFFFFFF, 0x002CD9],
    /* 66 */    [0, 0xFFFF00, 0x00E636],
    /* 67 */    [60, 0xFFFFFF, 0x00E5FF],
    /* 68 */    [0, 0xFFFFFF, 0x00800D, 0x000000, 0x00800D],
    /* 69 */    [0, 0xFFFFFF, 0xD10000, 0x007BD9, 0xD10000],
    /* 70 */    [0, 0x000000, 0x00D6DE, 0xFFFFFF, 0x00D6DE],
    /* 71*/     [0, 0xFFFFFF, 0x00800D, 0x000000, 0x00800D],
    /* 72 */    [0, 0x000000, 0xEEFF00, 0xFFA200],
    /* 73 */    [0, 0xFFFFFF, 0xFFFFFF, 0x010019, 0xFFFFFF],
    /* 74 */    [0, 0xFAD869, 0x871A2C],
    /* 75 */    [90, 0xFFFFFF, 0xFFFFFF, 0x000000, 0xFFFFFF],
    /* 76 */    [0, 0xFFFFFF, 0x003694, 0x000000, 0x003694],
    /* 77 */    [0, 0xFFFFFF, 0xF0E000, 0x003694, 0xF0E000],
    /* 78 */    [0, 0xFFFFFF, 0xF00000, 0x000000, 0xF00000],
    /* 79 */    [0, 0x000000, 0x00D6DE, 0xFFFFFF, 0x00D6DE],
    /* 80 */    [0, 0x000000, 0xFF0000, 0xFFFFFF, 0xFF0000],
    /* 81 */    [0, 0xFFFFFF, 0xF0F000, 0xFF0000, 0xF0F000],
    /* 82 */    [0, 0xFFFFFF, 0xF00000, 0x000000, 0xF00000],
    /* 83 */    [0, 0xFFFFFF, 0x00BA2C, 0x009623],
    /* 84 */    [0, 0x000000, 0xFF0000, 0xFFFFFF, 0xFF0000],
    /* 85 */    [0, 0x000000, 0xFF0000, 0xFFFFFF, 0xFF0000],
    /* 86 */    [0, 0xFFFFFF, 0xF0F000, 0x000000, 0xF0F000],
    /* 87 */    [90, 0xFFFFFF, 0xFFFFFF, 0x210C00, 0xFFFFFF],
    /* 88 */    [0, 0xFFFFFF, 0xFFFFFF, 0x000000, 0xFFFFFF],
    /* 89 */    [60, 0x000000, 0x120082, 0xFFFFFF, 0x120082],

    // AÑADIDOS

    /* 90 */    [60, 0x001933, 0xFFFFFF,], // TOTTENHAM
    /* 91 */    [0, 0x000000, 0x56BCE8, 0x852815, 0x56BCE8], // ASTON VILLA
    /* 92 */    [60, 0xFFFFFF, 0xC91610], // LIVERPOOL
    /* 93 */    [0, 0xFFFFFF, 0x00008B, 0x00008B, 0x860000], // PSG
    /* 94 */    [60, 0x053778, 0xFFFFFF, 0xEBEBEB, 0xFFFFFF], // MARSELLA
    /* 95 */    [0, 0xFFFFFF, 0x00EEFF, 0x00CBD9, 0x00EEFF], // SAN MARINO
    /* 96 */    [245, 0xFFCB1F, 0xE60000], // ESPAÑA
    /* 97 */    [60, 0x000000, 0xFFFFFF, 0xFF0000, 0xFFFFFF], // PERU
    /* 98 */    [0, 0xB5150D, 0xF2EB16], // COLOMBIA
    /* 99 */    [0, 0xFFFFFF, 0x000000, 0xF2CA00, 0xFF0000], // BELGICA
    /* 100 */   [60, 0x000000, 0x5B8BEB], // URUGUAY
    /* 101 */   [60, 0xE31009, 0x0019BA, 0xFFFFFF, 0x0019BA], // NACIONAL
    /* 102 */   [0, 0xFFFFFF, 0xFFF000, 0x000000, 0xFFF000,], // PEÑAROL
    /* 103 */   [90, 0xFFFFFF, 0xFFFFFF, 0x000000, 0xFFFFFF], // OLIMPIA
    /* 104 */   [90, 0xFFFFFF, 0xB00000, 0x000000, 0xB00000], // FLAMENGO
    /* 105 */   [0, 0xFFFFFF, 0xB01C1C, 0x208A23], // FLUMINENSE
    /* 106 */   [0, 0xB39967, 0x09611D], // PALMEIRAS
    /* 107 */   [60, 0xFFFFFF, 0xC70C0C, 0x002AB3, 0xC70C0C], // CERRO PORTEÑO 
    /* 108 */   [90, 0x8F1532, 0xD9D9D9, 0x000000, 0xD9D9D9], // SAO PAULO  
    /* 109 */   [0, 0xFFFFFF, 0x3B8BE6, 0x000000, 0x3B8BE6], // GREMIO
    /* 110 */   [0, 0xB80000, 0x000000, 0xFFFFFF, 0x000000], // Mineiro
    /* 111 */   [0, 0xFFFFFF, 0x1929FF, 0x173EFF, 0x1929FF], // Cruzeiro
    /* 112 */   [0, 0xFFFFFF, 0xB00000, 0xBF0000, 0xB00000], // Internacional (BR)
];

const indexCamis = new Map([
    ["argentina", 0],
    ["argentina-s", 1],
    ["brasil", 2],
    ["brasil-s", 3],
    ["estados unidos", 4],
    ["estados unidos-s", 5],
    ["italia", 6],
    ["italia-s", 7],
    ["turquia", 8],
    ["turquia-s", 9],
    ["polonia", 10],
    ["polonia-s", 11],
    ["inglaterra", 12],
    ["inglaterra-s", 13],
    ["alemania", 14],
    ["holanda-s", 15],
    ["holanda", 16],
    ["canada", 17],
    ["japon", 18],
    ["juventus", 19],
    ["napoli", 20],
    ["roma", 21],
    ["inter", 22],
    ["milan", 23],
    ["genoa", 24],
    ["leicester", 25],
    ["manchester united", 26],
    ["manchester city", 27],
    ["arsenal", 28],
    ["chelsea", 29],
    ["bayern munich", 30],
    ["borussia dortmund", 31],
    ["bayer leverkusen", 32],
    ["schalke 04", 33],
    ["barcelona", 34],
    ["real madrid", 35],
    ["atletico madrid", 36],
    ["athletic club", 37],
    ["real betis", 38],
    ["espanyol", 39],
    ["malaga", 40],
    ["sevilla", 41],
    ["valencia", 42],
    ["boca juniors", 43],
    ["river plate", 44],
    ["racing club", 45],
    ["independiente", 46],
    ["san lorenzo", 47],
    ["huracan", 48],
    ["estudiantes", 49],
    ["gimnasia", 50],
    ["rosario central", 51],
    ["newell's", 52],
    ["argentinos juniors", 53],
    ["velez", 54],
    ["banfield", 55],
    ["lanus", 56],
    ["belgrano", 57],
    ["quilmes", 58],
    ["tigre", 59],
    ["colon", 60],
    ["union", 61],
    ["aldosivi", 62],
    ["olimpo", 63],
    ["defensa y justicia", 64],
    ["godoy cruz", 65],
    ["sarmiento", 66],
    ["temperley", 67],
    ["nueva chicago", 68],
    ["arsenal", 69],
    ["atletico de rafaela", 70],
    ["san martin de san juan", 71],
    ["crucero del norte", 72],
    ["talleres de cordoba", 73],
    ["venezuela", 74],
    ["all boys", 75],
    ["almagro", 76],
    ["atlanta", 77],
    ["patronato", 78],
    ["atletico tucuman", 79],
    ["atletico parana", 80],
    ["boca unidos", 81],
    ["chacarita", 82],
    ["ferro", 83],
    ["instituto", 84],
    ["los andes", 85],
    ["santamarina", 86],
    ["platense", 87],
    ["estudiantes de caseros", 88],
    ["alvarado", 89],
    ["tottenham", 90],
    ["aston villa", 91],
    ["liverpool", 92],
    ["psg", 93],
    ["marsella", 94],
    ["san marino", 95],
    ["españa", 96],
    ["peru", 97],
    ["colombia", 98],
    ["belgica", 99],
    ["uruguay", 100],
    ["nacional", 101],
    ["peñarol", 102],
    ["olimpia", 103],
    ["flamengo", 104],
    ["fluminense", 105],
    ["palmeiras", 106],
    ["cerro porteño", 107],
    ["sao paulo", 108],
    ["gremio", 109],
    ["atletico mineiro", 110],
    ["cruzeiro", 111],
    ["internacional", 112],
]);

const camisIndex = new Map([
    [0, "ARGENTINA"],
    [1, "ARGENTINA-S"],
    [2, "BRASIL"],
    [3, "BRASIL-S"],
    [4, "ESTADOS UNIDOS"],
    [5, "ESTADOS UNIDOS-S"],
    [6, "ITALIA"],
    [7, "ITALIA-S"],
    [8, "TURQUIA"],
    [9, "TURQUIA-S"],
    [10, "POLONIA"],
    [11, "POLONIA-S"],
    [12, "INGLATERRA"],
    [13, "INGLATERRA-S"],
    [14, "ALEMANIA"],
    [15, "HOLANDA-S"],
    [16, "HOLANDA"],
    [17, "CANADA"],
    [18, "JAPON"],
    [19, "JUVENTUS"],
    [20, "NAPOLI"],
    [21, "ROMA"],
    [22, "INTER"],
    [23, "MILAN"],
    [24, "GENOA"],
    [25, "LEICESTER"],
    [26, "MANCHESTER UNITED"],
    [27, "MANCHESTER CITY"],
    [28, "ARSENAL"],
    [29, "CHELSEA"],
    [30, "BAYERN MUNICH"],
    [31, "BORUSSIA DORTMUND"],
    [32, "BAYER LEVERKUSEN"],
    [33, "SCHALKE 04"],
    [34, "BARCELONA"],
    [35, "REAL MADRID"],
    [36, "ATLETICO MADRID"],
    [37, "ATHLETIC CLUB"],
    [38, "REAL BETIS"],
    [39, "ESPANYOL"],
    [40, "MALAGA"],
    [41, "SEVILLA"],
    [42, "VALENCIA"],
    [43, "BOCA JUNIORS"],
    [44, "RIVER PLATE"],
    [45, "RACING CLUB"],
    [46, "INDEPENDIENTE"],
    [47, "SAN LORENZO"],
    [48, "HURACAN"],
    [49, "ESTUDIANTES"],
    [50, "GIMNASIA"],
    [51, "ROSARIO CENTRAL"],
    [52, "NEWELL'S"],
    [53, "ARGENTINOS JUNIORS"],
    [54, "VELEZ"],
    [55, "BANFIELD"],
    [56, "LANUS"],
    [57, "BELGRANO"],
    [58, "QUILMES"],
    [59, "TIGRE"],
    [60, "COLON"],
    [61, "UNION"],
    [62, "ALDOSIVI"],
    [63, "OLIMPO"],
    [64, "DEFENSA Y JUSTICIA"],
    [65, "GODOY CRUZ"],
    [66, "SARMIENTO"],
    [67, "TEMPERLEY"],
    [68, "NUEVA CHICAGO"],
    [69, "ARSENAL"],
    [70, "ATLETICO DE RAFAELA"],
    [71, "SAN MARTIN DE SAN JUAN"],
    [72, "CRUCERO DEL NORTE"],
    [73, "TALLERES DE CORDOBA"],
    [74, "VENEZUELA"],
    [75, "ALL BOYS"],
    [76, "ALMAGRO"],
    [77, "ATLANTA"],
    [78, "PATRONATO"],
    [79, "ATLETICO TUCUMAN"],
    [80, "ATLETICO PARANA"],
    [81, "BOCA UNIDOS"],
    [82, "CHACARITA"],
    [83, "FERRO"],
    [84, "INSTITUTO"],
    [85, "LOS ANDES"],
    [86, "SANTAMARINA"],
    [87, "PLATENSE"],
    [88, "ESTUDIANTES DE CASEROS"],
    [89, "ALVARADO"],
    [90, "TOTTENHAM"],
    [91, "ASTON VILLA"],
    [92, "LIVERPOOL"],
    [93, "PSG"],
    [94, "MARSELLA"],
    [95, "SAN MARINO"],
    [96, "ESPAÑA"],
    [97, "PERU"],
    [98, "COLOMBIA"],
    [99, "BELGICA"],
    [100, "URUGUAY"],
    [101, "NACIONAL"],
    [102, "PEÑAROL"],
    [103, "OLIMPIA"],
    [104, "FLAMENGO"],
    [105, "FLUMINENSE"],
    [106, "PALMEIRAS"],
    [107, "CERRO PORTEÑO"],
    [108, "SAO PAULO"],
    [109, "GREMIO"],
    [110, "ATLETICO MINEIRO"],
    [111, "CRUZEIRO"],
    [112, "INTERNACIONAL"],
]);

// Colores de texto

const cor = [
    /* 0  */ 0xFA5646,
    /* 1  */ 0xFFC12F,
    /* 2  */ 0x7DFA89,
    /* 3  */ 0x05C5FF,
    /* 4  */ 0xFFFF17,
    /* 5  */ 0xA8A8A8,
    /* 6  */ 0xFFFFFF,
    /* 7  */ 0x6ECAFF,
    /* 8  */ 0xB0E0E6,
    /* 9  */ 0xFF00FF,
    /* 10 */ 0xffd700,
    /* 11 */ 0xd5d5d5,
    /* 12 */ 0xF0E68C,
    /* 13 */ 0xFAFAD2,
    /* 14 */ 0xEEE8AA,
    /* 15 */ 0x426AD6,
    /* 16 */ 0xff9966,
    /* 17 */ 0xf26666,
    /* 18 */ 0x919fff,
    /* 19 */ 0xD142FC,
    /* 20 */ 0xD69B33,
    /* 21 */ 0xFFAADD,
    /* 22 */ 0xFFFFFF,
    /* 23 */ 0x46C0F1,
]

const indexCor = new Map([
    ["rojo", 0],
    ["naranja", 1],
    ["verde", 2],
    ["azul", 3],
    ["amarillo", 4],
    ["gris", 5],
    ["blanco", 6],
    ["celeste", 7],
    ["Powderblue", 8],
    ["purpura", 9],
    ["gold", 10],
    ["plata", 11],
    ["caquii", 12],
    ["lightGoldenrodYellow", 13],
    ["paleGoldenrod", 14],
    ["azulescuro", 15],
    ["warn", 16],
    ["rojizo", 17],
    ["azulado", 18],
    ["toto", 19],
    ["nofiadmin", 20],
    ["rosa", 21],
    ["legend", 22],
    ["admin", 23]
]);

const styles = [
                "normal",
                "bold",
                "italic",
                "small",
                "small-bold",
                "small-italic"
                ];

var sonido = [0,1,2];

/* MAPA */

const stadium = `{  "name" : "EFT Map",
    "width" : 800,
    "height" : 350,
    "bg" : { "type" : "grass", "color" : "404447", "cornerRadius" : 0, "kickOffRadius" : 0 },
"vertexes" : [
        /* 0 */ { "x" : -700, "y" : 321, "cMask" : ["ball" ] },
        /* 1 */ { "x" : -700, "y" : -319, "cMask" : ["ball" ] },
        /* 2 */ { "x" : 699, "y" : 319, "cMask" : ["ball" ] },
        /* 3 */ { "x" : 601, "y" : -320, "cMask" : ["ball" ] },
        /* 4 */ { "x" : 0, "y" : 350, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 5 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 6 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 7 */ { "x" : 0, "y" : -350, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 8 */ { "x" : -700, "y" : -99, "bCoef" : 0.1, "cMasak" : ["ball" ] },
        /* 9 */ { "x" : -750, "y" : -99, "bCoef" : 0.1, "cMask" : ["ball" ] },
        /* 10 */ { "x" : -750, "y" : 90, "bCoef" : 0.1, "cMask" : ["ball" ] },
        /* 11 */ { "x" : -700, "y" : 90, "bCoef" : 0.1, "cMask" : ["ball" ] },
        /* 12 */ { "x" : 700, "y" : -90, "bCoef" : 0.1, "cMask" : ["ball" ] },
        /* 13 */ { "x" : 749, "y" : -90, "bCoef" : 0.1, "cMask" : ["ball" ] },
        /* 14 */ { "x" : 749, "y" : 90, "bCoef" : 0.1, "cMask" : ["ball" ] },
        /* 15 */ { "x" : 699, "y" : 90, "bCoef" : 0.1, "cMask" : ["ball" ] },
        /* 16 */ { "x" : -700, "y" : 90, "bCoef" : 1.25, "cMask" : ["ball" ] },
        /* 17 */ { "x" : -700, "y" : 321, "bCoef" : 1.25, "cMask" : ["ball" ] },
        /* 18 */ { "x" : -700, "y" : -99, "bCoef" : 1.25, "cMask" : ["ball" ] },
        /* 19 */ { "x" : -700, "y" : -319, "bCoef" : 1.25, "cMask" : ["ball" ] },
        /* 20 */ { "x" : -700, "y" : 321, "bCoef" : 2, "cMask" : ["ball" ] },
        /* 21 */ { "x" : 699, "y" : 319, "bCoef" : 2, "cMask" : ["ball" ] },
        /* 22 */ { "x" : 700, "y" : 90, "bCoef" : 1.25, "cMask" : ["ball" ] },
        /* 23 */ { "x" : 700, "y" : 319, "bCoef" : 1.25, "cMask" : ["ball" ] },
        /* 24 */ { "x" : 700, "y" : -321, "bCoef" : 1.25, "cMask" : ["ball" ] },
        /* 25 */ { "x" : 700, "y" : -90, "bCoef" : 1.25, "cMask" : ["ball" ] },
        /* 26 */ { "x" : 601, "y" : -320, "bCoef" : 0, "cMask" : ["ball" ] },
        /* 27 */ { "x" : 601, "y" : -320, "bCoef" : 0, "cMask" : ["ball" ] },
        /* 28 */ { "x" : -699, "y" : -320, "bCoef" : 2, "cMask" : ["ball" ] },
        /* 29 */ { "x" : 699, "y" : -321, "bCoef" : 2, "cMask" : ["ball" ] },
        /* 30 */ { "x" : 0, "y" : -320, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 31 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 32 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 33 */ { "x" : 0, "y" : 320, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 34 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 35 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 36 */ { "x" : 0, "y" : -150, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 37 */ { "x" : 0, "y" : 90, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 38 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 39 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 40 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 41 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 42 */ { "x" : -710, "y" : 90, "cMask" : ["ball" ] },
        /* 43 */ { "x" : -710, "y" : 321, "cMask" : ["ball" ] },
        /* 44 */ { "x" : -710, "y" : 90, "cMask" : ["ball" ] },
        /* 45 */ { "x" : -710, "y" : 321, "cMask" : ["ball" ] },
        /* 46 */ { "x" : -710, "y" : -315, "cMask" : ["ball" ] },
        /* 47 */ { "x" : -710, "y" : -99, "cMask" : ["ball" ] },
        /* 48 */ { "x" : 710, "y" : -90, "cMask" : ["ball" ] },
        /* 49 */ { "x" : 709, "y" : -317, "cMask" : ["ball" ] },
        /* 50 */ { "x" : 709, "y" : -90, "cMask" : ["ball" ] },
        /* 51 */ { "x" : 709, "y" : 94, "cMask" : ["ball" ] },
        /* 52 */ { "x" : 709, "y" : 319, "cMask" : ["ball" ] },
        /* 53 */ { "x" : -699, "y" : 274, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 54 */ { "x" : -506, "y" : 141, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 55 */ { "x" : -506, "y" : 141, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 56 */ { "x" : -506, "y" : -141, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 57 */ { "x" : -506, "y" : -141, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 58 */ { "x" : -699, "y" : -274, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 59 */ { "x" : 698, "y" : 273, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO","blueKO" ] },
        /* 60 */ { "x" : 505, "y" : 140, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO","blueKO" ] },
        /* 61 */ { "x" : 505, "y" : 140, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO","blueKO" ] },
        /* 62 */ { "x" : 505, "y" : -142, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO","blueKO" ] },
        /* 63 */ { "x" : 505, "y" : -142, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO","blueKO" ] },
        /* 64 */ { "x" : 698, "y" : -275, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO","blueKO" ] },
        /* 65 */ { "x" : -700, "y" : 90, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 66 */ { "x" : -700, "y" : -100, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO","blueKO" ] },
        /* 67 */ { "x" : 700, "y" : 90, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO","blueKO" ] },
        /* 68 */ { "x" : 700, "y" : -90, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO","blueKO" ] },
        /* 69 */ { "x" : -713, "y" : 90, "cMask" : ["ball" ] },
        /* 70 */ { "x" : -713, "y" : 321, "cMask" : ["ball" ] },
        /* 71 */ { "x" : -713, "y" : -315, "cMask" : ["ball" ] },
        /* 72 */ { "x" : -713, "y" : -99, "cMask" : ["ball" ] },
        /* 73 */ { "x" : 712, "y" : -317, "cMask" : ["ball" ] },
        /* 74 */ { "x" : 712, "y" : -90, "cMask" : ["ball" ] },
        /* 75 */ { "x" : 712, "y" : 94, "cMask" : ["ball" ] },
        /* 76 */ { "x" : 712, "y" : 319, "cMask" : ["ball" ] },
        /* 77 */ { "x" : 704, "y" : -317, "cMask" : ["ball" ] },
        /* 78 */ { "x" : 704, "y" : -90, "cMask" : ["ball" ] },
        /* 79 */ { "x" : 704, "y" : -317, "cMask" : ["ball" ] },
        /* 80 */ { "x" : 704, "y" : -90, "cMask" : ["ball" ] },
        /* 81 */ { "x" : 704, "y" : 94, "cMask" : ["ball" ] },
        /* 82 */ { "x" : 704, "y" : 319, "cMask" : ["ball" ] },
        /* 83 */ { "x" : 704, "y" : 94, "cMask" : ["ball" ] },
        /* 84 */ { "x" : 704, "y" : 319, "cMask" : ["ball" ] },
        /* 85 */ { "x" : -705, "y" : 90, "cMask" : ["ball" ] },
        /* 86 */ { "x" : -705, "y" : 321, "cMask" : ["ball" ] },
        /* 87 */ { "x" : -705, "y" : 90, "cMask" : ["ball" ] },
        /* 88 */ { "x" : -705, "y" : 321, "cMask" : ["ball" ] },
        /* 89 */ { "x" : -705, "y" : -315, "cMask" : ["ball" ] },
        /* 90 */ { "x" : -705, "y" : -99, "cMask" : ["ball" ] },
        /* 91 */ { "x" : -705, "y" : -315, "cMask" : ["ball" ] },
        /* 92 */ { "x" : -705, "y" : -99, "cMask" : ["ball" ] },
        /* 93 */ { "x" : -699, "y" : 319.88890075683594, "bCoef" : 2, "cMask" : ["ball" ] },
        /* 94 */ { "x" : 699, "y" : 318.88890075683594, "bCoef" : 2, "cMask" : ["ball" ] },
        /* 95 */ { "x" : -65.65535153283014, "y" : -27.554306573337975, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ], "color" : "AAAAAA" },
        /* 96 */ { "x" : -65.65535153283014, "y" : 28.713054537773132, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ], "color" : "AAAAAA" },
        /* 97 */ { "x" : -29.48347653283014, "y" : -27.554306573337975, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 98 */ { "x" : -29.48347653283014, "y" : 28.713054537773132, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 99 */ { "x" : -29.48347653283014, "y" : 16.655762871106468, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 100 */ { "x" : -29.48347653283014, "y" : -15.49701490667131, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 101 */ { "x" : -53.59805986616345, "y" : -15.49701490667131, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 102 */ { "x" : -53.59805986616345, "y" : 16.655762871106468, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 103 */ { "x" : -53.59805986616345, "y" : -5.851181573337978, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 104 */ { "x" : -53.59805986616345, "y" : 7.009929537773132, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 105 */ { "x" : -41.540768199496796, "y" : -5.851181573337978, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 106 */ { "x" : -41.540768199496796, "y" : 7.009929537773132, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 107 */ { "x" : -17.426184866163453, "y" : -26.750487128893532, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ], "color" : "AAAAAA" },
        /* 108 */ { "x" : -17.426184866163453, "y" : 29.516873982217575, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ], "color" : "AAAAAA" },
        /* 109 */ { "x" : 18.745690133836547, "y" : -26.750487128893532, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 110 */ { "x" : 18.745690133836547, "y" : -14.693195462226868, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 111 */ { "x" : -5.368893199496796, "y" : -14.693195462226868, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 112 */ { "x" : -5.368893199496796, "y" : 29.516873982217575, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 113 */ { "x" : -5.368893199496796, "y" : -5.047362128893532, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 114 */ { "x" : -5.368893199496796, "y" : 7.813748982217577, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 115 */ { "x" : 6.688398467169861, "y" : -5.047362128893532, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 116 */ { "x" : 6.688398467169861, "y" : 7.813748982217577, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 117 */ { "x" : 29.19534291161432, "y" : -26.750487128893532, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ], "color" : "AAAAAA" },
        /* 118 */ { "x" : 29.19534291161432, "y" : -6.655001017782421, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ], "color" : "AAAAAA" },
        /* 119 */ { "x" : 65.36721791161432, "y" : -26.750487128893532, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 120 */ { "x" : 65.36721791161432, "y" : -6.655001017782421, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 121 */ { "x" : 53.30992624494763, "y" : -14.693195462226868, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 122 */ { "x" : 41.252634578281004, "y" : -14.693195462226868, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 123 */ { "x" : 41.252634578281004, "y" : 31.92833231555091, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        /* 124 */ { "x" : 53.30992624494763, "y" : 31.92833231555091, "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] }],
"segments" : [
        { "v0" : 8, "v1" : 9, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["ball" ] },
        { "v0" : 9, "v1" : 10, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["ball" ] },
        { "v0" : 10, "v1" : 11, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["ball" ] },
        { "v0" : 12, "v1" : 13, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["ball" ] },
        { "v0" : 13, "v1" : 14, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["ball" ] },
        { "v0" : 14, "v1" : 15, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["ball" ] },
        { "v0" : 4, "v1" : 5, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        { "v0" : 5, "v1" : 6, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "curveF" : 6.123233995736766e-17 },
        { "v0" : 6, "v1" : 5, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "curveF" : 6.123233995736766e-17 },
        { "v0" : 6, "v1" : 7, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        { "v0" : 16, "v1" : 17, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ] },
        { "v0" : 18, "v1" : 19, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ] },
        { "v0" : 22, "v1" : 23, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "x" : 700 },
        { "v0" : 24, "v1" : 25, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "x" : 700 },
        { "v0" : 26, "v1" : 27, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ] },
        { "v0" : 28, "v1" : 29, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ] },
        { "v0" : 30, "v1" : 31, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        { "v0" : 32, "v1" : 33, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
        { "v0" : 42, "v1" : 43, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 44, "v1" : 45, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 46, "v1" : 47, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 49, "v1" : 50, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 51, "v1" : 52, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 54, "v1" : 53, "curve" : 89.99999999999997, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO" ], "curveF" : 1.0000000000000004 },
        { "v0" : 56, "v1" : 55, "curve" : 10, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO" ], "curveF" : 11.430052302761343 },
        { "v0" : 58, "v1" : 57, "curve" : 89.99999999999997, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO" ], "curveF" : 1.0000000000000004 },
        { "v0" : 59, "v1" : 60, "curve" : 89.99999999999997, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curveF" : 1.0000000000000004 },
        { "v0" : 61, "v1" : 62, "curve" : 10, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curveF" : 11.430052302761343 },
        { "v0" : 63, "v1" : 64, "curve" : 89.99999999999997, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curveF" : 1.0000000000000004 },
        { "v0" : 65, "v1" : 66, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO" ], "x" : -700 },
        { "v0" : 67, "v1" : 68, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "x" : 700 },
        { "v0" : 69, "v1" : 70, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 71, "v1" : 72, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 73, "v1" : 74, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 75, "v1" : 76, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 77, "v1" : 78, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 79, "v1" : 80, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 81, "v1" : 82, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 83, "v1" : 84, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 85, "v1" : 86, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 87, "v1" : 88, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 89, "v1" : 90, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 91, "v1" : 92, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
        { "v0" : 93, "v1" : 94, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ] },
        { "v0" : 95, "v1" : 96, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 95, "v1" : 97, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 96, "v1" : 98, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 98, "v1" : 99, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 100, "v1" : 97, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 100, "v1" : 101, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 99, "v1" : 102, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 101, "v1" : 103, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 104, "v1" : 102, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 103, "v1" : 105, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 104, "v1" : 106, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 105, "v1" : 106, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 107, "v1" : 108, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 107, "v1" : 109, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 110, "v1" : 109, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 110, "v1" : 111, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 111, "v1" : 113, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 114, "v1" : 112, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 113, "v1" : 115, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 114, "v1" : 116, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 115, "v1" : 116, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 108, "v1" : 112, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 117, "v1" : 118, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 117, "v1" : 119, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 120, "v1" : 119, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 120, "v1" : 121, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 122, "v1" : 118, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 122, "v1" : 123, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 121, "v1" : 124, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] },
        { "v0" : 123, "v1" : 124, "color" : "AAAAAA", "bCoef" : 0.1, "cMask" : ["c0" ], "cGroup" : ["c0" ] }],
    "planes" : [
        { "normal" : [0,1 ], "dist" : -320, "cMask" : ["ball" ] },
        { "normal" : [0,-1 ], "dist" : -317.5, "cMask" : ["ball" ] },
        { "normal" : [0,1 ], "dist" : -350, "bCoef" : 0.1 },
        { "normal" : [0,-1 ], "dist" : -350, "bCoef" : 0.1 },
        { "normal" : [1,0 ], "dist" : -800, "bCoef" : 0.1 },
        { "normal" : [-1,0 ], "dist" : -800, "bCoef" : 0.1 }],
    "goals" : [
        { "p0" : [-707,-99 ], "p1" : [-707,89 ], "team" : "red" },
        { "p0" : [707,90 ], "p1" : [707,-90 ], "team" : "blue" }],

    "discs" : [
        { "radius" : 6.25, "invMass" : 1.5, "pos" : [0,0 ], "color" : "FFFFFF", "bCoef" : 0.4, "cGroup" : ["ball","kick","score" ] },
        { "radius" : 6, "invMass" : 0, "pos" : [-700,89 ], "color" : "FF0000" },
        { "radius" : 6, "invMass" : 0, "pos" : [-700,-99 ], "color" : "FF0000" },
        { "radius" : 6, "invMass" : 0, "pos" : [700,90 ], "color" : "33FF" },
        { "radius" : 6, "invMass" : 0, "pos" : [700,-89 ], "color" : "33FF" } ],
    "playerPhysics" : {
        "bCoef" : 0,
        "acceleration" : 0.11,
        "kickingAcceleration" : 0.083},
    "ballPhysics" : "disc0",
    "spawnDistance" : 350,
    "canBeStored" : false,
    "traits" : {}}`;

/* INICIO DEL SERVER */

var room = HBInit({
    roomName: nam,
    maxPlayers: maxPlayers,
    public: public,
    noPlayer: noPlayer,
    geo: {code: "ar", lat: -36, lon:-59.9964}
});

room.setScoreLimit(scoreLimit);
room.setTimeLimit(timeLimit);
room.setCustomStadium(stadium)
room.setTeamsLock(true)

/* FUNCIONES */

room.onRoomLink = (link) => { // Inicio del host

    if (public && !linkAnunciado){

        linkAnunciado = true;
        sendWebhook(
            'linkLog',
            'EFT HOST',
            '### <:_:1199143173759451186> SE ABRIÓ EL HOST DE TOTO <:_:1199143173759451186>: ' + link + "  \n\n## ||@everyone|| :fire:"
        );

        console.log("link: " + link)

    }

};

room.onGameTick = function() { // cada tick

    var scores = room.getScores()

    if (!anunciadoGO && scores.time > scores.timeLimit + 1) {
        room.sendAnnouncement("[⚡] EL PARTIDO SE VA AL GOL DE ORO [⚡]", null, cor[indexCor.get("gold")], "bold", sonido[2])
        anunciadoGO = true
    }

    // Mandar frase
    if (!anunciadoseg && scores.time > scores.timeLimit - 30) {

        let frase

        if (scores.red > scores.blue){
            equipo = "Red"
            equipoC = "Blue"
        } else if (scores.red < scores.blue) {
            equipo = "Blue"
            equipoC = "Red"
        } else if (scores.red == scores.blue) {
            frase = frases30sEmpate[randomIntFromInterval(0, frases30sEmpate.length - 1)];
            room.sendAnnouncement("[⚡] " + frase, null, cor[indexCor.get("nofiadmin")], "bold", sonido[2]);
            anunciadoseg = true
            return;
        } 
        
        frase = frases30s[randomIntFromInterval(0, frases30s.length - 1)](equipo, equipoC);
        room.sendAnnouncement("[⚡] " + frase, null, cor[indexCor.get("nofiadmin")], "bold", sonido[2]);
        anunciadoseg = true;
    }

    if (eligiendo && teamEligiendo != -1) {

        let picker = Players_team[teamEligiendo][0]; // el jugador que está eligiendo

        if (picker) {

            // sumar ticks afk
            pickAfk[picker] = (pickAfk[picker] || 0) + 1;
            console.log(pickAfk[picker])
            // si llega al límite

            if (pickAfk[picker] >= PICK_TIMEOUT/2 && !pickAnnounce){
                    room.sendAnnouncement("[⚠] Si no elegís a un jugador vas a ser kickeado por afk", picker, cor[indexCor.get("rojo")], "bold", sonido[2]);
                    pickAnnounce = true;
            }

            if (pickAfk[picker] >= PICK_TIMEOUT) {

                room.kickPlayer(picker, "AFK pickeando 😴", false);

                // limpiar estado
                delete pickAfk[picker];
                pickAnnounce = false;
                eligiendo = false;
                teamEligiendo = -1;
            }
        }
    }


    let players = room.getPlayerList();
    if (players.length === 0) return;

    players.forEach(p => {

        // Datos AFK creados
        if (!afkData[p.id]) return;

        let pos = p.position;
        if (!pos) return; // espectador

        // Si es la 1° vez, guardo coordenadas
        if (afkData[p.id].lastX === null) {
            afkData[p.id].lastX = pos.x;
            afkData[p.id].lastY = pos.y;
            afkData[p.id].lastMoveTick = 0;
            return;
        }

        // Si se movió (tolerancia de 3 px)
        if (Math.abs(pos.x - afkData[p.id].lastX) > 3 ||
            Math.abs(pos.y - afkData[p.id].lastY) > 3) {

            // Resetear AFK
            afkData[p.id].lastX = pos.x;
            afkData[p.id].lastY = pos.y;
            afkData[p.id].lastMoveTick = 0;
            afkData[p.id].warned = false;
            return;
        }

        // sumar un tick
        afkData[p.id].lastMoveTick++;
        let secondsAfk = afkData[p.id].lastMoveTick / 60;

        // ADVERTENCIA
        if (!afkData[p.id].warned && secondsAfk >= AFK_TIME_WARNING) {
            room.sendAnnouncement("[⚠] si estás afk por mucho tiempo vas a ser kickeado, movete si estás jugando.", p.id, cor[indexCor.get("rojo")], "bold", sonido[2]);
            afkData[p.id].warned = true;
        }

        // KICK
        if (secondsAfk >= AFK_TIME_KICK) {
            room.kickPlayer(p.id, "AFK 😴", false);
        }
    });
}

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
    if (changedPlayer.admin) {
        if (!admins.includes(changedPlayer.id)) {
            admins.push(changedPlayer.id);
        }
    } else {
        // Remover de las listas cuando pierde admin
        admins = admins.filter(id => id !== changedPlayer.id);
        admins_ofi.delete(changedPlayer.id);
        resetPlayerPermissions(changedPlayer.id);
    }
};

function resetPlayerPermissions(playerId) {
    let player = room.getPlayer(playerId);
    if (player) {
        player.customData = {}; // Restablece cualquier dato personalizado
    }
}

async function cooldowninicio(){
    room.pauseGame(true)
    await delay(4000)
    room.pauseGame(false)
}

async function cambioavatares(player, message){
    const tiempo = 500

    if (message.toLowerCase() == "q"){
        room.setPlayerAvatar(player.id, "🤔");
        await delay(tiempo)
        room.setPlayerAvatar(player.id, null);
        }

    if (message == "1"){
        room.setPlayerAvatar(player.id, "🧤");
        await delay(tiempo)
        room.setPlayerAvatar(player.id, null);
    }

    if (message == "2"){
        room.setPlayerAvatar(player.id, "🛑");
        await delay(tiempo)
        room.setPlayerAvatar(player.id, null);
    }

    if (message == "9"){
        room.setPlayerAvatar(player.id, "⚽");
        await delay(tiempo)
        room.setPlayerAvatar(player.id, null);
    }

    if (message.toLowerCase() == "u"){
        room.setPlayerAvatar(player.id, "😮");
        await delay(tiempo)
        room.setPlayerAvatar(player.id, null);
    }

    if (message.toLowerCase() == "z"){
        room.setPlayerAvatar(player.id, "😴");
        await delay(tiempo)
        room.setPlayerAvatar(player.id, null);
    }

    if (message.toLowerCase() == "ego"){
        room.setPlayerAvatar(player.id, "🙄");
        await delay(tiempo)
        room.setPlayerAvatar(player.id, null);
    }

    if (message.toLowerCase() == "pero" || message.toLowerCase() == "mama" ||  message.toLowerCase() == "mam"){
        room.setPlayerAvatar(player.id, "😡");
        await delay(tiempo)
        room.setPlayerAvatar(player.id, null);
    }

    if (message.toLowerCase() == "x"){
        room.setPlayerAvatar(player.id, "❌");
        await delay(tiempo)
        room.setPlayerAvatar(player.id, null);
    }

    if (message.toLowerCase() == "ole" || message.toLowerCase() == "oso"){
        room.setPlayerAvatar(player.id, "😎");
        await delay(tiempo)
        room.setPlayerAvatar(player.id, null);
    }

    if (message.toLowerCase() == "nt"){
        room.setPlayerAvatar(player.id, "👍");
        await delay(tiempo)
        room.setPlayerAvatar(player.id, null);
    }

}

// Funciones clanes

function getPlayerByName(name) {
    if (!name) return null;
    return room.getPlayerList().find(p => p.name.toLowerCase() === name.toLowerCase());
}

function saveClans() {
    localStorage.setItem("clans", JSON.stringify(clans));
}

function loadClans() {
    let storedClans = localStorage.getItem("clans");
    if (storedClans) {
        clans = JSON.parse(storedClans);
    }
}

function updateClanStats(playerAuth, stat, value) {
    for (let clanName in clans) {
        if (clans[clanName].members[playerAuth]) {
            clans[clanName].stats[stat] += value;
            saveClans();
            break;
        }
    }
}

loadClans();

function sendWebhook(type, username, content, avatarUrl = '') {
    const url = webhookUrls[type];
    if (!url) {
        console.error("URL del webhook no encontrada para el tipo:", type);
        return;
    }

    const request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader('Content-type', 'application/json');

    request.onerror = function() {
        console.error("Error de red al enviar mensaje.");
    };

    const payload = {
        avatar_url: avatarUrl,
        username: username,
        content: content
    };

    request.send(JSON.stringify(payload));
}

function XPtoRank(xp){

    rankTag = "";
    rankLevel = 0;
    min = 0;
    max = 0;
    total = 0;

    if (xp < -25){
        rankTag = rangos[0];
    } else if(xp >= -25 && xp < -5) {
        rankTag = rangos[1];
    }else if(xp >= -5 && xp < 100){
        rankTag = rangos[2];

        min = -5;
        max = 100;

    }else if(xp >= 100 && xp < 300){
        rankTag = rangos[3];

        min = 100;
        max = 300;

    }else if(xp >= 300 && xp < 500){
        rankTag = rangos[4];
    
        min = 300;
        max = 500;

    }else if(xp >= 500 && xp < 900){
        rankTag = rangos[5];

        min = 500;
        max = 900;

    }else if(xp >= 900 && xp < 1500){
        rankTag = rangos[6];

        min = 900;
        max = 1500;

    }else if(xp >= 1500){
        rankTag = rangos[7];
    }

    total = max - min

    if(min != 0 && max != 0){
        for(let i=1;i<=5;i++){

            if(xp >= i*total/5 + min - total/5){
                rankLevel++;
            }

        }
    }

    if(rankLevel != 0){
        rankTag = rankTag + ' ' + levelToRank(rankLevel)
    }

    return rankTag;

}

function levelToRank(level){
    switch(level){
    case 1:
        return "I";
        break;

    case 2:
        return "II";
        break;

    case 3:
        return "III";
        break;

    case 4:
        return "IV";
        break;

    case 5:
        return "V";
        break;

    default: return " ";
    }
}   

function llamarXP(player){

    let stats = getStats(getAuth(player))

    let puntosgol = stats["goles"] * 3
    let puntospg = stats["partidos_ganados"]
    let puntosasis = stats["asistencias"] * 2
    let puntospp = stats["partidos_perdidos"] * -1
    let puntosgec = stats["goles_en_contra"] * -2
    let puntosvalla = stats["vallas_invictas"] * 5
    let puntosmvp = stats["mvp"] * 3

    xp = puntosasis + puntosgol + puntospg + puntospp + puntosgec + puntosmvp + puntosvalla;
}

function togglePicks(toggle){

    if(toggle){
        automatico = false;
        room.sendAnnouncement("[⚡] MODO PICKS ACTIVADO", null, cor[indexCor.get("caquii")], "bold", sonido[2]);
    } else {
        automatico = true;
        delete pickAfk[player];
        pickAnnounce = false;
        room.sendAnnouncement("[⚡] MODO PICKS DESACTIVADO", null, cor[indexCor.get("caquii")], "bold", sonido[2]);
    }

}

function quickmodeON(){
    room.setTimeLimit(3);
    room.setScoreLimit(3);
    room.sendAnnouncement("[⚡] MODO EXPRESS ACTIVADO, HAY MAS DE " + quicktoggler + " JUGADORES EN LA SALA", null, cor[indexCor.get("caquii")], "bold", sonido[2]);
    quickmode = true;
}

function quickmodeOFF() {
    room.setTimeLimit(timeLimit);
    room.setScoreLimit(scoreLimit);
    room.sendAnnouncement("[⚡] MODO EXPRESS DESACTIVADO", null, cor[indexCor.get("caquii")], "bold", sonido[2]);
    quickmode = false;
}

function bajarAFKs() {
    if (activadoBajarAfKs == false) { return }
    let playerlist = new Array(player_afk.size);
    player_afk.forEach(function(value) {
        //Se agrega al array
        playerlist.push(value)

        //Se mueve a lo último del players_teams[0]
        Players_team[0] = deleteIndex(Players_team[0], value)
        Players_team[0].push(value)
    })
    room.reorderPlayers(playerlist, false)
}


function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function calcVallaInvicta(teamGanador) {
    let valla = false;
    switch(teamGanador) {
        case 1:
            if (room.getScores().blue == 0) {
                valla = true
            }
            break;
        case 2:
            if (room.getScores().red == 0) {
                valla = true
            }
            break;
        default:
            return false;
    }
    return valla;
}

function getGK(team) {
    if (team >= 3 || team <= 0) { return -1; }
     if (Players_team[team].length <= 0) { return -1; }
     else if (Players_team[team].length == 1) { return Players_team[team][0]}
    hayGK = true;
    let mayorDistancia = Math.abs(room.getPlayer(Players_team[team][0]).position.x);
    let id = Players_team[team][0];
    for(let i = 0; i < Players_team[team].length; i++) {
        if (mayorDistancia < Math.abs(room.getPlayer(Players_team[team][i]).position.x)) { 
            mayorDistancia = Math.abs(room.getPlayer(Players_team[team][i]).position.x);
            id = Players_team[team][i];
        }
    }
            
    return id;
}



function getMVP(gameInformation) {
    puntosPlayer = new Map();
    idNombre = new Map()
    for(let i = 0; i < gameInformation.length; i++) {
        if (!puntosPlayer.has(gameInformation[i][4])) {
            puntosPlayer.set(gameInformation[i][4], 0);
            idNombre.set(gameInformation[i][4], gameInformation[i][0]);
        }
        if (!puntosPlayer.has(gameInformation[i][5]) && gameInformation[i][5] != null) {
            puntosPlayer.set(gameInformation[i][5], 0);
            idNombre.set(gameInformation[i][5], gameInformation[i][1]);
        }
         //Goles
        if (gameInformation[i][6] == '⚽') {
             puntos = puntosPlayer.get(gameInformation[i][4]);
             puntos += 2;
             puntosPlayer.set(gameInformation[i][4], puntos);
        } else {
            puntos = puntosPlayer.get(gameInformation[i][4]);
            puntos -= 2;
            puntosPlayer.set(gameInformation[i][4], puntos);
        }
        
        //Asistencia
        if (gameInformation[i][5] != null) {
            puntos = puntosPlayer.get(gameInformation[i][5]);
            puntos += 1;
            puntosPlayer.set(gameInformation[i][5], puntos);
        }
    }


    //Valla invicta
    if (!puntosPlayer.has(gkRed) && gkRed != -1) {
        puntosPlayer.set(gkRed, 0);
        idNombre.set(gkRed, room.getPlayer(gkRed).name);

    }
    if (!puntosPlayer.has(gkBlue) && gkBlue != -1) {
        puntosPlayer.set(gkBlue, 0);
        idNombre.set(gkBlue, room.getPlayer(gkBlue).name);
    }
    room.getScores()
    scores = room.getScores()
    if (scores.red > scores.blue) {
    if (calcVallaInvicta(1)) {
    puntos = puntosPlayer.get(gkRed)
    puntos += 3;
    puntosPlayer.set(gkRed, puntos);
    }
    } else {
    if (calcVallaInvicta(2)) {
    puntos = puntosPlayer.get(gkBlue)
    puntos += 3;
    puntosPlayer.set(gkBlue, puntos);
    }
}

    let mvp = null;
    let puntosMVP = -100; //Nadie puede tener menos de 100
    puntosPlayer.forEach (function(value, key) {
            if (mvp === null) {
                mvp = key;
                puntosMVP = value;
            }
            
            if (puntosMVP < value) {
                mvp = key;
                puntosMVP = value;
            }
    });

    let devolver = new Array(2);
    devolver[0] = mvp;
    devolver[1] = idNombre.get(mvp);
    room.sendAnnouncement("🌟 EL MVP DEL PARTIDO FUÉ " + devolver[1] + " !!", null, cor[indexCor.get("legend")], "bold", sonido[2]);
    return devolver;
}

function toggleautomatico(){
    if(automatico == true){
        room.sendAnnouncement("[❌] Se ha desactivado el modo automatico [❌]", null, cor[indexCor.get("caquii")], "bold", sonido[2])
        automatico = false
    } else if (automatico == false){
        room.sendAnnouncement("[✅] Se ha activado el modo automatico [✅]", null, cor[indexCor.get("caquii")], "bold", sonido[2])
        automatico = true
    }
}

function updateAdmins() {
    // Get all players except the host (id = 0 is always the host)
    var players = room.getPlayerList().filter((player) => player.id != 0);
    if (players.length == 0) return; // No players left, do nothing.
    if (players.find((player) => player.admin) != null) return; // There's an admin left so do nothing.
    room.setPlayerAdmin(players[0].id, true); // Give admin to the first non admin player in the list
}

function getRandomInt(max) {
    // returns a random number from 0 to max-1
    return Math.floor(Math.random() * Math.floor(max));
}

function addMinutes(date, minutes) {
    date.setMinutes(date.getMinutes() + minutes);
    return date;
}

function substrctMinutes(dateFromSubstract, dateToSubstract) {
    return diff = Math.abs(dateFromSubstract - dateToSubstract);
}

function convertMilisecondsToMinutes(miliseconds) {
    if (miliseconds < 1000) {
        return -1
    }
    miliseconds = miliseconds / 1000
    let time = [0, 0]
    time[0] = Math.floor(miliseconds / 60)
    time[1] = Math.floor(miliseconds - time[0] * 60)

    return time
}

function convertSecondsToMinutes(seconds) {
    if (seconds < 0) {
        return -1
    }
    let time = [0, 0]
    time[0] = Math.floor(seconds / 60)
    time[1] = Math.floor(seconds - time[0] * 60)

    return time
}


function getTime(scores) {
    // returns the current time of the game
    return (
        '[' +
        Math.floor(Math.floor(scores.time / 60) / 10).toString() +
        Math.floor(Math.floor(scores.time / 60) % 10).toString() +
        ':' +
        Math.floor(
            Math.floor(scores.time - Math.floor(scores.time / 60) * 60) / 10
        ).toString() +
        Math.floor(
            Math.floor(scores.time - Math.floor(scores.time / 60) * 60) % 10
        ).toString() +
        ']'
    );
}

function getAuth(playerId) {
    if (player_auth.has(playerId) == true) {
        return player_auth.get(playerId)
    }
    return -1
}

function getStats(playerAuth, playerID) {
    if (authExists(playerAuth) == true) {
        return JSON.parse(localStorage.getItem(playerAuth))
    } else {
        return -1
    }
}

PlayerAuth[player.auth] = player;

function setStats(playerAuth, ocurrencias) {
    if (authExists(playerAuth) == true) {
        console.log("Nueva persona en la base de datos")
        claves = Object.keys(ocurrencias)
        player_information = getStats(playerAuth)
        if (player_information == -1) {
            return
        }
        for (let i = 0; i < claves.length; i++) {
            player_information[claves[i]] = player_information[claves[i]] + ocurrencias[claves[i]]
        }
        localStorage.setItem(playerAuth, JSON.stringify(player_information))
    } else {
        room.sendAnnouncement("Todavía no estás registrado en las stats", player.id, cor[indexCor.get("rojo")], "bold");
    }
}

function addMVP(mvpAuth) {
    if (authExists(mvpAuth) == true) {
        player_information = getStats(mvpAuth)
        if (player_information == -1) {
            return
        }
        player_information["mvp"] += 1;
        player_information["monedas"] += 150;
        localStorage.setItem(mvpAuth, JSON.stringify(player_information));
    }
}

function addVallaInvicta(vallaInvictaAuth) {
    if (authExists(vallaInvictaAuth) == true) {
        player_information = getStats(vallaInvictaAuth)
        if (player_information == -1) {
            return
        }
        player_information["vallas_invictas"] += 1;
        player_information["monedas"] += 300;
        localStorage.setItem(vallaInvictaAuth, JSON.stringify(player_information));
    }
}


function getGameInformation(teamGanador) {
    player_online = room.getPlayerList().length - player_afk.size
    player_playing = Players_team[1].length + Players_team[2].length

    if (player_online >= 8 && player_playing == 8) {
        let personas_ganadoras = Players_team[teamGanador]
        let personas_perdieron
        if (teamGanador == 1) {
            personas_perdieron = Players_team[2]
        } else {
            personas_perdieron = Players_team[1]
        }

        for (let i = 0; i < 4; i++) {
            let player_playing_information = new Object()

            let goles = countArray2DNoEnContra(golesPartido, personas_ganadoras[i], 4)
            let asistencias = countArray2D(golesPartido, personas_ganadoras[i], 5)

            player_playing_information.goles = goles
            player_playing_information.asistencias = asistencias
            player_playing_information.partidos = 1
            player_playing_information.partidos_ganados = 1
            player_playing_information.partidos_perdidos = 0
            player_playing_information.goles_en_contra = countArray2DEnContra(golesPartido, personas_perdieron[i], 4)
            player_playing_information.monedas = (goles * 100) + (asistencias * 50) + 50;
            setStats(getAuth(personas_ganadoras[i]), player_playing_information)

        }

        for (let i = 0; i < 4; i++) {
            let player_playing_information = new Object()

            let goles = countArray2DNoEnContra(golesPartido, personas_perdieron[i], 4)
            let asistencias = countArray2D(golesPartido, personas_perdieron[i], 5)

            player_playing_information.goles = goles
            player_playing_information.asistencias = asistencias
            player_playing_information.partidos = 1
            player_playing_information.partidos_ganados = 0
            player_playing_information.partidos_perdidos = 1
            player_playing_information.goles_en_contra = countArray2DEnContra(golesPartido, personas_perdieron[i], 4)
            player_playing_information.monedas = (goles * 100) + (asistencias * 50);
            setStats(getAuth(personas_perdieron[i]), player_playing_information)
        }

        //Se agrega al mvp del partido
        let auth = getAuth(mvp[0]);
        if (auth != -1) {
            addMVP(auth)
        }


        //Se suman las vallas invictas
        let authGK;

        hayValla = calcVallaInvicta(teamGanador);
    

        if (hayValla) {
            if (calcVallaInvicta(1)) {
                auth = getAuth(gkRed);
                if (auth != -1) {
                    addVallaInvicta(auth)
                }
            }
            else if (calcVallaInvicta(2)) {
            auth = getAuth(gkBlue);
            if (auth != -1) {
                addVallaInvicta(auth)
            }
        }
        } 
    }
}


function countArray(array, strToLook) {
    n = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == strToLook) {
            n += 1
        }
    }
    return n
}

function countArray2D(array, toLook, column) {
    n = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i][column] == toLook) {
            n += 1
        }
    }
    return n
}

function countArray2DEnContra(array, toLook, column) {
    n = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i][column] == toLook && array[i][6] == '🤡') {
            n += 1
        }
    }
    return n
}

function countArray2DNoEnContra(array, toLook, column) {
    n = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i][column] == toLook && array[i][6] != '🤡') {
            n += 1
        }
    }
    return n
}

function authExists(playerAuth) {
    if (localStorage.getItem(playerAuth) !== null) {
        return true
    }
    return false
}

function createPlayerStats(playerAuth, playerName) {
    if (authExists(playerAuth) == true) {
        return
    }

    let player_information = {
        nombre: playerName,
        goles: 0,
        goles_en_contra: 0,
        asistencias: 0,
        partidos: 0,
        partidos_ganados: 0,
        partidos_perdidos: 0,
        mvp: 0,
        vallas_invictas: 0,
        monedas: 0
    }

    localStorage.setItem(playerAuth, JSON.stringify(player_information))
}

/* Return -1 if there's no matching id with this name*/
function getPlayerIDbyName(name) {
    let playersList = room.getPlayerList()
    for (let i = 0; i < playersList.length; i++) {
        nombreJugador = playersList[i].name.replace(/ /g, '_')
        if (nombreJugador == name) {
            return playersList[i].id
        }
    }
    return -1

}

function getPlayerByAuth(auth) {
    let players = room.getPlayerList(); // Obtener lista de jugadores
    return players.find(player => player.auth === auth) || null; // Buscar jugador por auth
}

function getPlayerByID(id){
    let players = room.getPlayerList(); // Obtener lista de jugadores
    return players.find(player => player.id === id) || null; // Buscar jugador por auth
}

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function isNumeric(value) {
    return /^-?\d+$/.test(value);
}

function is_letters_and_spaces(str) {
    var regex = /^[a-zA-Z ]+$/;
    if (regex.test(str)) {
        return true
    } else {
        return false
    }
}

function deleteIndex(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    if (arr.indexOf(value) != -1) {
        arr = []
    }
    return arr;
}

function updateTeamsEntrar(team, player) {
    Players_team[team].push(player)
}

function updateTeamsSalir(team, player) {
        switch (team) {
            case teamID["Spectators"]:
                Players_team[0] = deleteIndex(Players_team[0], player)
                break;
            case teamID["Red"]:
                Players_team[1] = deleteIndex(Players_team[1], player)
                break;
            case teamID["Blue"]:
                Players_team[2] = deleteIndex(Players_team[2], player)
                break;
        }
}

function updateTeamsChange(team, player) {
        if (Players_team[0].indexOf(player) != -1) {
        Players_team[0] = deleteIndex(Players_team[0], player)
        }
        if (Players_team[1].indexOf(player) != -1) {
            Players_team[1] = deleteIndex(Players_team[1], player)
        }
        if (Players_team[2].indexOf(player) != -1) {
           Players_team[2] = deleteIndex(Players_team[2], player)
        }

        Players_team[team].push(player)
}


function moveJug(team) {
    if (automatico){

        for (let i = Players_team[team].length, j = 0; i < 4 && j < Players_team[0].length; i++, j++) {

            //Se evita hasta encontrar uno que no este afk
            while (player_afk.has(Players_team[0][j]) == true) {
                if (j == Players_team[0].length - 1) {
                    break;
                }
                j += 1
            }

            //Si no es afk, se lo mueve
            if (player_afk.has(Players_team[0][j]) == true) {
                break;
            }
        
            room.setPlayerTeam(Players_team[0][j], team)
        }

    } else {

        // SOLO MOVER UN JUGADOR
        for (let j = 0; j < Players_team[0].length; j++) {

            // Saltar AFK
            if (player_afk.has(Players_team[0][j])) continue;

            // Mover el PRIMERO no afk y cortar
            room.setPlayerTeam(Players_team[0][j], team);
            break;
        }
    }
}

function moveWinJug(team){

    for (let i = Players_team[team].length, j = 0; i < 4 && j < Players_team[2].length; i++, j++) {

            //Se evita hasta encontrar uno que no este afk
            while (player_afk.has(Players_team[2][j]) == true) {
                if (j == Players_team[2].length - 1) {
                    break;
                }
                j += 1
            }
        
            room.setPlayerTeam(Players_team[2][j], team)
        }

}

/* Moves all the players that started the game to spectator */
function moveSpec(team_loser) {
    //Se ejecuta solo en el equipo que perdio
    if(automatico){

        for (let i = 0; i < player_on_game[team_loser - 1].length; i++) {
            room.setPlayerTeam(player_afk[i], 0)

            //Si fue una persona que estuvo en el equipo desde el comienzo moverlo, sino solo dejarlo
            if (Players_team[team_loser].indexOf(player_on_game[team_loser - 1][i]) != -1) {
                room.setPlayerTeam(player_on_game[team_loser - 1][i], 0)
            }
        }

    } else {
        // Mover a spectator a TODOS los del equipo perdedor
        for (let id of Players_team[team_loser]) {
            if (!player_afk.has(id)) {
                room.setPlayerTeam(id, 0);
            }
        }

        // Vaciar la lista
        Players_team[team_loser] = [];
    }

    

}

/*
    Esta función debe de hacer esto
        Si los equipos están llenos, no hace nada
        Si los equipos falta jugadores, mover los jugadores al menor equipo
            Al mover los jugadores, verificar que no sean los afks, sino gente qeu dice que esta

        Verificar que haya jugadores parejos en ambos sitios
            Sino, mover 1 jugador hacia el otro equipo
*/

function enough_players() {

    player_online = room.getPlayerList().length - player_afk.size
    player_playing = Players_team[1].length + Players_team[2].length

    if (automatico==true){
    if (player_playing == 8) {
        return
    } //Juegan la cant maxima de jugadores
    else if (player_online == player_playing) {
        return
    } //Estàn jugando todos los jugadores
    else { //La única opción que queda es que haya gente esperando por jugar en equipos con falta de jugadores
        if (Players_team[1].length >= 4 && Players_team[2].length >= 4) {
            return
        } else if (player_online <= 8) {
            if (player_online - player_playing != 0) {
                for (let i = 0; i < Players_team[0].length; i++) {
                    if (Players_team[1].length > Players_team[2].length) {
                        room.setPlayerTeam(Players_team[0][i], 2)
                    } else if (Players_team[2].length > Players_team[1].length) {
                        room.setPlayerTeam(Players_team[0][i], 1)
                    } else {
                        room.setPlayerTeam(Players_team[0][i], 1)
                    }
                }
                //Estan jugando todos los jugadores
            } else {
                return
            }
        }
        //Hay más de 7 jugadores
        else {
            //Están llenos los equipos
            if (Players_team[1].length == 4 && Players_team[2].length == 4) {
                return
            }
            //Faltan jugadores en el equipo 1
            else if (Players_team[1].length != 4 && Players_team[2].length == 4) {
                for (let i = Players_team[1].length, j = 0; i < 4; i++, j++) {
                    while (player_afk.has(Players_team[0][j]) == true) {
                        j += 1
                        if (j == Players_team[0].length - 1) {
                            break;
                        }
                    }
                    if (j == Players_team[0].length - 1) {
                        break;
                    }
                    room.setPlayerTeam(Players_team[0][j], 1)
                }
            }
            //Faltan jugadores en el equipo 2
            else if (Players_team[1].length == 4 && Players_team[2].length != 4) {
                for (let i = Players_team[2].length, j = 0; i < 4; i++, j++) {
                    while (player_afk.has(Players_team[0][j]) == true) {
                        j += 1
                        if (j == Players_team[0].length - 1) {
                            break;
                        }
                    }
                    if (j == Players_team[0].length - 1) {
                        break;
                    }
                    room.setPlayerTeam(Players_team[0][j], 2)
                }
            }
            //Faltan jugadores en ambos equipos
            else if (Players_team[1].length != 4 && Players_team[2].length != 4) {
                for (let i = player_playing, j = 0; i < 8; i++, j++) {
                    while (player_afk.has(Players_team[0][j]) == true) {
                        j += 1
                        if (j == Players_team[0].length - 1) {
                            break;
                        }
                    }
                    if (j == Players_team[0].length - 1) {
                        break;
                    }
                    if (Players_team[1].length > Players_team[2].length) {
                        room.setPlayerTeam(Players_team[0][j], 2)
                    } else if (Players_team[2].length > Players_team[1].length) {
                        room.setPlayerTeam(Players_team[0][j], 1)
                    } else {
                        room.setPlayerTeam(Players_team[0][j], 1)
                        }
                    }
                }
            }
        }
    } else {

        if (player_playing == 8) {
            room.pauseGame(false);
            return;
        } else {

            room.pauseGame(true);

            // Solo pickear si no estamos ya en proceso de elección
            if (!eligiendo) {

                if (Players_team[1].length < Players_team[2].length) {
                    eligiendo = true;
                    teamEligiendo = 1;
                    mostrarPicks();
                    return;
                }

                if (Players_team[2].length < Players_team[1].length) {
                    eligiendo = true;
                    teamEligiendo = 2;
                    mostrarPicks();
                    return;
                }

            }

        }

    }

}

function updateAFK(player) {
    
    if (Players_team[0].indexOf(player.id) != -1) { // Si no está jugando

            if (player_afk.has(player.id) == true) { // Salir del afk

                player_afk.delete(player.id)
                room.sendAnnouncement("[😴] " + player.name + " YA NO ESTÁ AFK", null, cor[indexCor.get("verde")]);

            } else if (player_afk.has(player.id) == false && vipList.has(player.id) || admins_ofi.has(player.id)){ // Ponerse afk

                player_afk.add(player.id)
                room.sendAnnouncement("[😴] " + player.name + " ESTÁ AFK", null, cor[indexCor.get("verde")]);

            } else if (player_afk.has(player.id) == false && !vipList.has(player.id) || !admins_ofi.has(player.id)) { // Si el jugador no tiene permisos

                room.sendAnnouncement("No tenés permisos para ponerte afk.", player.id, cor[indexCor.get("rojo")], "bold", sonido[2]);

            }
            

    } else { // Si esta jugando no puede estar afk
        room.sendAnnouncement("Al estar jugando, no podes estar afk", player.id, cor[indexCor.get("rojo")], "bold");
    }
}

function updateAFKsalir(player) {
    if (player_afk.has(player.id)) {
        player_afk.delete(player.id)
    }
}

function sentPeriodicAyudas() {
    clearInterval(interval2);

    room.sendAnnouncement("[📢 AYUDA ] " + frasesayuda[randomIntFromInterval(0, frasesayuda.length - 1)], null, cor[indexCor.get("paleGoldenrod")], "bold", sonido[2]);

    interval2 = setInterval(sentPeriodicAyudas, randomIntFromInterval(60000, 180000))
}

var interval2 = setInterval(sentPeriodicAyudas, 3000)

function sentPeriodicMessages() {
    clearInterval(interval1);

    room.sendAnnouncement("⚡ " + frasesrandom[randomIntFromInterval(0, frasesrandom.length - 1)] + " ⚡", null, cor[indexCor.get("paleGoldenrod")], "normal", sonido[0]);

    interval1 = setInterval(sentPeriodicMessages, randomIntFromInterval(60000, 150000))
}


var interval1 = setInterval(sentPeriodicMessages, 3000)

function sentPeriodicDiscord() {
    clearInterval(interval);

        room.sendAnnouncement("             ▒█▀▀▄ ▀█▀ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▄ ", null, 0x9250FD, 'bold')
        room.sendAnnouncement("             ▒█░▒█ ▒█░ ░▀▀▀▄▄ ▒█░░░ ▒█░░▒█ ▒█▄▄▀ ▒█░▒█ ", null, 0x8466FD, 'bold')
        room.sendAnnouncement("             ▒█▄▄▀ ▄█▄ ▒█▄▄▄█ ▒█▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█▄▄▀ ", null, 0x7B73FD, 'bold');
        room.sendAnnouncement("             💬 Discord Link: ➡ https://discord.gg/wEdqnVzht2 ⬅", null, 0xF6FF43, 'bold');

    interval = setInterval(sentPeriodicDiscord, randomIntFromInterval(180000, 240000))
}


var interval = setInterval(sentPeriodicDiscord, 3000)
    

/* OnPlayerChat FUNCTIONS */

function mostrarPicks(){

    pickAfk[Players_team[0].length] = 0;

    room.sendAnnouncement("[🚨] Escribí el numero del jugador que quieras en tu equipo.", Players_team[teamEligiendo][0], cor[indexCor.get("rojo")], "bold", sonido[2]);
    for(let i=0; i < Players_team[0].length; i++){
        room.sendAnnouncement((i+1) + " - " + getPlayerByID(Players_team[0][i]).name, Players_team[teamEligiendo][0], cor[indexCor.get("rojo")], "normal", sonido[1]);
    }
}

function pick(message, player){
     if (!eligiendo) return;  // seguridad extra

    if(Players_team[0][message-1] != null){ // El jugador existe

        room.setPlayerTeam(Players_team[0][message-1], player.team);

        if(Players_team[teamEligiendo].length + 1 >= 4){ // Máximo de 4 jugadores
                eligiendo = false;
                teamEligiendo = -1;
                delete pickAfk[player];
                pickAnnounce = false;
                room.sendAnnouncement("[🚨] El equipo ya alcanzó el maximo de jugadores", player.id, cor[indexCor.get("rojo")], "bold", sonido[2]);
                return;
            }

        room.sendAnnouncement("[🚨] Escribí el numero del jugador que quieras en tu equipo.", player.id, cor[indexCor.get("rojo")], "bold", sonido[2]);
        for(let i=1; i < Players_team[0].length; i++){
            room.sendAnnouncement((i) + " - " + getPlayerByID(Players_team[0][i]).name, player.id, cor[indexCor.get("rojo")], "normal", sonido[1]);
        }

        

    } else { // El jugador no existe

        room.sendAnnouncement("El jugador ingresado no existe!", player.id, cor[indexCor.get("rojo")], "bold", sonido[1]);
        for(let i=0; i < Players_team[0].length; i++){
            room.sendAnnouncement((i+1) + " - " + getPlayerByID(Players_team[0][i]).name, player.id, cor[indexCor.get("rojo")], "normal", sonido[1]);
        }

    }
}

function showStats(message, player) {
    words = message.split(" ")
    let wremoji = "";

    if (words.length == 1) {

        let stats = getStats(getAuth(player.id))

        if (3 >= stats["partidos"]) {
         room.sendAnnouncement("Jugá 3 partidos para poder ver tus stats!", player.id, cor[indexCor.get("rojo")], "bold", sonido[2])
        } else {
        room.sendAnnouncement("----- " + player.name + " HA CONSULTADO SUS STATS" + " -----", null, cor[indexCor.get("naranja")], "normal", sonido[0]);     
        
        if (getWinrate(stats) >= 50){
            wremoji = "✅"
        } else {
            wremoji = "❌"
        }

        room.sendAnnouncement("STATS:  ⚽: " + stats["goles"] + " | 👟: " + stats["asistencias"] + " | 🤡: " + stats["goles_en_contra"] + " | 🥅: " + stats["vallas_invictas"] + " | 💲" + stats["monedas"], null, cor[indexCor.get("amarillo")], "normal", sonido[1])
        room.sendAnnouncement("PARTIDOS:   PJ: " + stats["partidos"] + " | PG: " + stats["partidos_ganados"] + " ("+wremoji+" %"+getWinrate(stats)+")" + " | PP: " + stats["partidos_perdidos"] + " | 🏆: " + stats["mvp"] , null, cor[indexCor.get("amarillo")], "normal", sonido[1])
    }
}    else if (words.length > 2) {

        playerID = getPlayerIDbyName(words[1].substring(1))
        let stats = getStats(getAuth(playerID))
        playerName = words[1].substring(1)

        if (getWinrate(stats) >= 50){
            wremoji = "✅"
        } else {
            wremoji = "❌"
        }

        if (3 >= stats["partidos"] || stats["partidos"] == undefined) {
         room.sendAnnouncement("EL JUGADOR QUE ESTÁS CONSULTANDO NO TIENE STATS!", player.id, cor[indexCor.get("rojo")], "bold", sonido[2])
        } else {
        room.sendAnnouncement("----- " + player.name + " HA CONSULTADO LAS STATS DE " + playerName + " -----", null, cor[indexCor.get("verde")], "normal", sonido[0]);
        
        room.sendAnnouncement("STATS:  ⚽: " + stats["goles"] + " | 👟: " + stats["asistencias"] + " | 🤡: " + stats["goles_en_contra"]+ " | 🥅: " + stats["vallas_invictas"] + " | 💲" + stats["monedas"], null, cor[indexCor.get("amarillo")], "normal", sonido[1])
        room.sendAnnouncement("PARTIDOS:   PJ: " + stats["partidos"] + " | PG: " + stats["partidos_ganados"] + " ("+wremoji+" %"+getWinrate(stats)+")" + " | PP: " + stats["partidos_perdidos"] + " | 🏆: " + stats["mvp"] , null, cor[indexCor.get("amarillo")], "normal", sonido[1])
    
    }
}
}

function showRank(message, player){

    let stats = getStats(getAuth(player.id))
    llamarXP(player.id)

    // Variables

    let xpActual = xp
    let xpNecesaria = proximoRango(xp).resultado

    let antXP = proximoRango(xp).antXP
    let proxXP = proximoRango(xp).proxXP

    let Rango = proximoRango(xp).RangoActual
    let ProxRango = proximoRango(xp).ProximoRango

    let barraXP = generarBarraXP(xpActual, proxXP, antXP);

    let porcentaje = Math.floor(((xpActual - antXP) / (proxXP - antXP)) * 100);
    
    if(xpActual >= 1500){
        porcentaje = 100;
    }

    // Chat

    room.sendAnnouncement("----- " + player.name + " HA CONSULTADO SU RANGO" + " -----", null, cor[indexCor.get("naranja")], "normal", sonido[1]);     
    
    room.sendAnnouncement('🎖️ RANGO ACTUAL:' + ' ' + Rango, null, cor[indexCor.get("amarillo")], "normal", sonido[0]);
    room.sendAnnouncement('[ ' + barraXP + ' ] ' + porcentaje + "%", null, cor[indexCor.get("amarillo")], "normal", sonido[0]);
    room.sendAnnouncement('Progreso:' + ' ' + xpActual + '/' + proxXP + ' ' + 'XP' + ' ' + '|' + ' ' +  'Próximo rango:' + ' ' + ProxRango, null, cor[indexCor.get("amarillo")], "normal", sonido[0]);

}

function proximoRango(xp){

    let rankTag = "";
    let RangoActual = ""
    let ProximoRango = ""
    let resultado = 0;
    let rankLevel = 0;
    let rank = 0;
    let min = 0;
    let max = 0;
    let total = 0;

    if (xp < -25){
        rankTag = rangos[0];
        rank = 0
    } else if(xp >= -25 && xp < -5) {
        rankTag = rangos[1];
        rank = 1
    }else if(xp >= -5 && xp < 100){
        rankTag = rangos[2];
        rank = 2

        min = -5;
        max = 100;

    }else if(xp >= 100 && xp < 300){
        rankTag = rangos[3];
        rank = 3

        min = 100;
        max = 300;

    }else if(xp >= 300 && xp < 500){
        rankTag = rangos[4];
        rank = 4

        min = 300;
        max = 500;

    }else if(xp >= 500 && xp < 900){
        rankTag = rangos[5];
        rank = 5

        min = 500;
        max = 900;

    }else if(xp >= 900 && xp < 1500){
        rankTag = rangos[6];
        rank = 6

        min = 900;
        max = 1500;

    }else if(xp >= 1500){
        rankTag = rangos[7];
        rank = 7
    }

    total = max - min

    if(min != 0 && max != 0){
        for(let i=1;i<=5;i++){
        
            if(xp >= i*total/5 + min - total/5){
                rankLevel++;

                antXP = i*total/5 + min - total/5;
                proxXP = i*total/5 + min;

                resultado = antXP - xp;
            }

        }
    }
    

    if(rankLevel != 0){
        RangoActual = rankTag + ' ' + levelToRank(rankLevel)
    } else {
        RangoActual = rankTag;
    }
    

    if(rankTag == rangos[7]){ // Es legend
        ProximoRango = "MAX";
        antXP = xp;
        proxXP = xp;
    } else if(rankLevel < 5 && rankLevel >= 1){
        ProximoRango = rankTag + ' ' + levelToRank(rankLevel + 1);
    } else if(rankLevel == 5) {
        ProximoRango = rangos[rank + 1];
    }

    return {
        resultado,
        RangoActual,
        ProximoRango,
        proxXP,
        antXP
    }
}

function generarBarraXP(xpActual, max, min) {
    let totalBloques = 15; // Longitud total de la barra
    let progreso = Math.floor(((xpActual - min) / (max - min)) * totalBloques);
    

    if(xpActual >= 1500){
        progreso = totalBloques;
    }

    let barra = "█".repeat(progreso) + " ·".repeat(totalBloques - progreso);
    
    return barra;
}

function getWinrate(stats){
    let winrate = (stats["partidos_ganados"] * 100 / stats["partidos"]).toFixed(1) 

    return winrate 
}

function getTopStats() {
    let topScorers = Array(3).fill({ nombre: "", goles: -1 });
    let topAssistants = Array(3).fill({ nombre: "", asistencias: -1 });
    let topConceders = Array(3).fill({ nombre: "", goles_en_contra: -1 });
    let topCleanSheets = Array(3).fill({ nombre: "", vallas_invictas: -1 });
    let topMVPs = Array(3).fill({ nombre: "", mvp: -1 });
    let topPJs = Array(3).fill({ nombre: "", partidos: -1 });
    let topPGs = Array(3).fill({ nombre: "", partidos_ganados: -1 });
    let topPPs = Array(3).fill({ nombre: "", partidos_perdidos: -1 });
    let topXPs = Array(3).fill({ nombre: "", xp: -Infinity });
    let topmonedas = Array(3).fill({ nombre: "", monedas: -Infinity });

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let playerData = localStorage.getItem(key);

        // Verificación de que playerData es un JSON válido
        if (playerData && (playerData.startsWith("{") || playerData.startsWith("["))) {
            try {
                let stats = JSON.parse(playerData);

                if (stats && stats.nombre && stats.goles !== undefined) {
                    // Función auxiliar para actualizar el top 3 de una estadística específica
                    const updateTop3 = (topArray, value, key) => {
                        topArray.push({ nombre: stats.nombre, [key]: value });
                        topArray.sort((a, b) => b[key] - a[key]);
                        topArray.splice(3);
                    };

                    // Actualización de los tops de estadísticas individuales
                    updateTop3(topScorers, stats.goles, 'goles');
                    updateTop3(topAssistants, stats.asistencias, 'asistencias');
                    updateTop3(topConceders, stats.goles_en_contra, 'goles_en_contra');
                    updateTop3(topCleanSheets, stats.vallas_invictas, 'vallas_invictas');
                    updateTop3(topMVPs, stats.mvp, 'mvp');
                    updateTop3(topPJs, stats.partidos, 'partidos');
                    updateTop3(topPGs, stats.partidos_ganados, 'partidos_ganados');
                    updateTop3(topPPs, stats.partidos_perdidos, 'partidos_perdidos');
                    updateTop3(topmonedas, stats.monedas, 'monedas');

                    // Cálculo de XP para el jugador actual
                    let puntosgol = stats.goles * 3;
                    let puntospg = stats.partidos_ganados;
                    let puntosasis = stats.asistencias * 2;
                    let puntospp = stats.partidos_perdidos * -1;
                    let puntosgec = stats.goles_en_contra * -2;
                    let puntosvalla = stats.vallas_invictas * 5;
                    let puntosmvp = stats.mvp * 3;

                    let xp = puntosgol + puntospg + puntosasis + puntospp + puntosgec + puntosvalla + puntosmvp;

                    // Actualización del top 3 de XP
                    updateTop3(topXPs, xp, 'xp');
                }
            } catch (e) {
                console.error("Error parsing JSON for key:", key, e);
            }
        } else {
            console.warn("Skipping non-JSON entry:", key);
        }
    }

    return {
        topScorers,
        topAssistants,
        topConceders,
        topCleanSheets,
        topMVPs,
        topPJs,
        topPGs,
        topPPs,
        topXPs,
        topmonedas
    };
}

function tirarRuleta(message, player){
    words = message.split(" ")
        if(words.length <= 1){
            room.sendAnnouncement("[🎲] !ruleta (monto) (posicion)", player.id, cor[indexCor.get("rojo")], "bold", sonido[1]);
            room.sendAnnouncement("[🎲] Ingresa 'Rojo' o 'Negro' para apostar por color. O Ingresa un numero en rango de 0-36 y el monto que queres apostar", player.id, cor[indexCor.get("rojo")], "bold", sonido[1]);
        } else {

            // Info Jugador
            let auth = getAuth(player.id); // Obtener auth del jugador
            let name = player.name; // Nombre del jugador

            // Info apuesta
            let monto = parseInt(words[1])
            let stats = getStats(auth)

            // Validar que monto es un número válido
            if (isNaN(monto) || monto <= 0) {
                room.sendAnnouncement("Monto inválido. Usa !ruleta (monto) (posición)", player.id, cor[indexCor.get("rojo")], "bold", sonido[2]);
                return;
            }

            if (monto > stats.monedas){
                room.sendAnnouncement("No tenes suficientes monedas para apostar.", player.id, cor[indexCor.get("rojo")], "bold", sonido[2]);
            } else {

                let posicion = words[2].toLowerCase()

                if (!isNaN(posicion) && posicion >= 0 && posicion <= 36 || posicion == "rojo" || posicion == "negro"){
                
                    // Guardar la apuesta
                    ruletas.push({
                        auth: auth,
                        monedas: monto,
                        apuesta: posicion,
                        name: name
                    });

                    // Te descuenta las monedas 
                    stats.monedas -= monto
                    localStorage.setItem(auth, JSON.stringify(stats));

                    if (ruletas.length === 1){
                        
                        tirarRuletaResultado();
                        room.sendAnnouncement("[🎲] SE HA INICIADO UNA RULETA. EN 30s DARÁ EL RESULTADO [🎲]", null, cor[indexCor.get("caquii")], "bold", sonido[2])
                    }

                    room.sendAnnouncement("[🎲] " + player.name + " ha apostado 💲" + monto + " en la Ruleta, apostó al " + posicion + " [🎲]", null, cor[indexCor.get("caquii")], "bold")

                } else {
                    room.sendAnnouncement("Esa no es una apuesta válida", player.id, cor[indexCor.get("rojo")], "bold", sonido[2])
                }

            }

        }
}

async function tirarRuletaResultado(){
    if (ruletas.length === 0) return;
    await delay(20000)
    room.sendAnnouncement("[🎲] EN 10s TERMINA LA RULETA [🎲]", null, cor[indexCor.get("caquii")], "bold", sonido[2]);
    await delay(10000)

    let numeroGanador = Math.floor(Math.random() * 37);
    let esRojo = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36].includes(numeroGanador);
    let colorGanador = esRojo ? "rojo" : "negro";

    room.sendAnnouncement(`[🎲] ¡La Ruleta terminó y el número ganador es ${numeroGanador} (${colorGanador})! [🎲]`, null, cor[indexCor.get("caquii")], "bold");

    for (let apuesta of ruletas) {
        let stats = getStats(apuesta.auth);
        if (apuesta.apuesta == numeroGanador) {
            stats.monedas += apuesta.monedas * 36; // Pago x36 si acertó el número exacto
            room.sendAnnouncement(`[🎉] ¡${apuesta.name} ganó 💲${apuesta.monedas * 36} apostando al ${numeroGanador}!`, null, cor[indexCor.get("verde")], "bold");
        } else if (apuesta.apuesta == colorGanador && numeroGanador != 0) {
            stats.monedas += apuesta.monedas * 2; // Pago x2 si acertó el color
            room.sendAnnouncement(`[🎉] ¡${apuesta.name} ganó 💲${apuesta.monedas * 2} apostando al ${colorGanador}!`, null, cor[indexCor.get("verde")], "bold");
        } else {
            room.sendAnnouncement(`[❌] ${apuesta.name} perdió su apuesta de 💲${apuesta.monedas}.`, null, cor[indexCor.get("rojo")], "bold");
        }
        localStorage.setItem(apuesta.auth, JSON.stringify(stats));
    }

    ruletas = []; // Limpiar las apuestas
}

function sendMSG(message, player) {
    words = message.split(" ")
     playerID = getPlayerIDbyName(words[0].substring(2))
    if (playerID != -1) {
        room.sendAnnouncement("[💬] " + player.name + ": " + words.slice(1).join(' ') + " [🔒]", player.id, cor[indexCor.get("gold")], "bold", sonido[2]);
        room.sendAnnouncement("[💬] " + player.name + ": " + words.slice(1).join(' ') + " [🔒]", playerID, cor[indexCor.get("gold")], "bold", sonido[2]);
    } else {
        room.sendAnnouncement("Jugador no encontrado. Verifique haberlo escrito de la siguiente forma: @@nombre del jugador", player.id, cor[indexCor.get("rojo")], "bold")
    }
}

function setRoomPassword(message, player) {
    words = message.split(" ")
    if (admins_ofi.has(player.id) == true) {
        words = message.split(" ")
        if (words.length == 1) {
            room.setPassword("")
        } else {
            room.setPassword(words[1])
        }
        room.sendAnnouncement("Se aplicó correctamente la contraseña", player.id, cor[indexCor.get("verde")], "bold");
    } else {
        room.sendAnnouncement("No tenés los requisitos necesarios", player.id, cor[indexCor.get("rojo")], "bold");
    }
}

function setCamisetas(message, player) {
    words = message.split(" ")
    if (admins_ofi.has(player.id) == true) {
        if (words.length == 1 || words.length == 2) {
            room.sendAnnouncement("Para ejecutar este comando usar:", player.id, cor[indexCor.get("lightGoldenrodYellow")], "bold")
            room.sendAnnouncement("!camisetas 1 (red) / 2 (blue) nombre de equipo", player.id, cor[indexCor.get("lightGoldenrodYellow")], "bold")
            room.sendAnnouncement("SELECCIONES: ", player.id, cor[indexCor.get("lightGoldenrodYellow")], "bold");
            room.sendAnnouncement("argentina, argentina-s, brasil, brasil-s, estados unidos, estados unidos-s, italia, italia-s, turquia, turquia-s, polonia, polonia-s, inglaterra, inglaterra-s, alemania, holanda-s, holanda, canada, japon, españa, san marino, peru, uruguay, colombia, belgica, venezuela ", player.id, cor[indexCor.get("lightGoldenrodYellow")], "normal");
            room.sendAnnouncement("EQUIPOS ITALIANOS:", player.id, cor[indexCor.get("lightGoldenrodYellow")], "bold");
            room.sendAnnouncement("juventus, napoli, roma, inter, milan, genoa", player.id, cor[indexCor.get("lightGoldenrodYellow")], "normal");
            room.sendAnnouncement("EQUIPOS BRASILEROS:", player.id, cor[indexCor.get("lightGoldenrodYellow")], "bold");
            room.sendAnnouncement("Flamengo, Fluminense, Palmeiras, Sao Paulo, Gremio, Internacional, Cruzeiro, Atletico Mineiro", player.id, cor[indexCor.get("lightGoldenrodYellow")], "normal");
            room.sendAnnouncement("EQUIPOS URUGUAYOS:", player.id, cor[indexCor.get("lightGoldenrodYellow")], "bold");
            room.sendAnnouncement("peñarol, nacional", player.id, cor[indexCor.get("lightGoldenrodYellow")], "normal");
            room.sendAnnouncement("EQUIPOS PARAGUAYOS:", player.id, cor[indexCor.get("lightGoldenrodYellow")], "bold");
            room.sendAnnouncement("olimpia, cerro porteño", player.id, cor[indexCor.get("lightGoldenrodYellow")], "normal");
            room.sendAnnouncement("EQUIPOS INGLESES:", player.id, cor[indexCor.get("lightGoldenrodYellow")], "bold");
            room.sendAnnouncement("leicester, manchester united, manchester city, arsenal, chelsea, tottenham, aston villa, liverpool", player.id, cor[indexCor.get("lightGoldenrodYellow")], "normal");
            room.sendAnnouncement("EQUIPOS ALEMANES:", player.id, cor[indexCor.get("lightGoldenrodYellow")], "bold");
            room.sendAnnouncement("Bayern Munich, Borussia Dortmund, schalke 04", player.id, cor[indexCor.get("lightGoldenrodYellow")], "normal");
            room.sendAnnouncement("EQUIPOS FRANCESES:", player.id, cor[indexCor.get("lightGoldenrodYellow")], "bold");
            room.sendAnnouncement("PSG, Marsella", player.id, cor[indexCor.get("lightGoldenrodYellow")], "normal");
            room.sendAnnouncement("EQUIPOS ESPAÑOLES::", player.id, cor[indexCor.get("lightGoldenrodYellow")], "bold");
            room.sendAnnouncement("barcelona, real madrid, atletico madrid, athletic club, real betis, espanyol, malaga, sevilla, valencia", player.id, cor[indexCor.get("lightGoldenrodYellow")], "normal");
            room.sendAnnouncement("EQUIPOS ARGENTINOS:", player.id, cor[indexCor.get("lightGoldenrodYellow")], "bold");
            room.sendAnnouncement("boca juniors, river plate, racing club, independiente, san lorenzo, huracan, estudiantes, gimnasia, rosario central, newell's, argentinos juniors, velez, banfield, lanus, belgrano, quilmes, tigre, colon, union, aldosivi, olimpo, defensa y justicia, godoy cruz, sarmiento, temperley, nueva chicago, arsenal, atletico de rafaela, san martin de san juan, crucero del norte, talleres de cordoba, all boys, almagro, atlanta, patronato, atletico tucuman, atletico parana, boca unidos, chacarita, ferro, instituto, los andes, santamarina, platense, estudiantes de caseros, alvarado", player.id, cor[indexCor.get("lightGoldenrodYellow")], "normal");
        } else if (words.length >= 3) {
            if (isNumeric(words[1]) == true && isNumeric(words[2]) == true) {
                teamColorSeleccionado = parseInt(words[1])
                team_sel = parseInt(words[2])
                colors = camis[team_sel].slice(2)
                room.setTeamColors(teamColorSeleccionado, camis[team_sel][0], camis[team_sel][1], colors)
                
                //Se actualiza el rand
                actualizarRand(teamColorSeleccionado, team_sel)
                room.sendAnnouncement(player.name + " ACTUALIZA EL PARTIDO: " + camisIndex.get(rand) + " vs " + camisIndex.get(rand1), null, cor[indexCor.get("verde")], "bold", sonido[2])


            } else if (isNumeric(words[1]) == true && is_letters_and_spaces(words.slice(2).join(' ')) == true) {
                teamColorSeleccionado = parseInt(words[1])
                if (indexCamis.has(words.slice(2).join(' ')) == true) {
                    team_sel = indexCamis.get(words.slice(2).join(' '))
                    colors = camis[team_sel].slice(2)
                    room.setTeamColors(teamColorSeleccionado, camis[team_sel][0], camis[team_sel][1], colors)
                    
                    //Se actualiza el rand
                    actualizarRand(teamColorSeleccionado, team_sel)
                    room.sendAnnouncement(player.name + " ACTUALIZA EL PARTIDO: " + camisIndex.get(rand) + " vs " + camisIndex.get(rand1), null, cor[indexCor.get("verde")], "bold", sonido[2])
                } else {
                    room.sendAnnouncement("There's no team with this particular name", player.id, cor[indexCor.get("rojo")], "bold");
                }
            } else {
                room.sendAnnouncement("The arguments must be numbers", player.id, cor[indexCor.get("rojo")], "bold");
            }
        } else if (words.length >= 5) {
            room.sendAnnouncement("Se aplica la camiseta seleccionada", player.id);
        }
    } else {
        room.sendAnnouncement("No tenés los requisitos necesarios", player.id, cor[indexCor.get("rojo")], "bold");
    }
}

function actualizarRand(teamColor, team) {
    if (teamColor == teamID["Red"]) {
        rand = team
    } else {
        rand1 = team
    }
}

function showDiscord(player) {
    if (admins_ofi.has(player.id) == true) {
        room.sendAnnouncement("             ▒█▀▀▄ ▀█▀ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▄ ", null, 0x9250FD, 'bold')
        room.sendAnnouncement("             ▒█░▒█ ▒█░ ░▀▀▀▄▄ ▒█░░░ ▒█░░▒█ ▒█▄▄▀ ▒█░▒█ ", null, 0x8466FD, 'bold')
        room.sendAnnouncement("             ▒█▄▄▀ ▄█▄ ▒█▄▄▄█ ▒█▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█▄▄▀ ", null, 0x7B73FD, 'bold');
        room.sendAnnouncement("             💬 Discord Link: ➡ https://discord.gg/wEdqnVzht2 ⬅", null, 0xF6FF43, 'bold');
    } else {
        room.sendAnnouncement("💬 Discord Link: ➡ https://discord.gg/wEdqnVzht2 ⬅", player.id, 0xF6FF43, "bold");
    }
}

function sendTeamMessage(message, player) {
    words = message.split(" ");
    if (words.length == 1 && player.team != 0) {
        room.sendAnnouncement("t mensaje", player.id, cor[indexCor.get("plata")], "bold");  
    } else {        
        if (player.team != 0){
            for (let i = 0; i < Players_team[player.team].length; i++) {
                if (player.team == 1) {
                room.sendAnnouncement("[🔴] " + player.name + ": " + words.slice(1).join(' '), Players_team[player.team][i], cor[indexCor.get("rojizo")], "bold");
                } else if (player.team == 2) {
                    room.sendAnnouncement("[🔵] " + player.name + ": " + words.slice(1).join(' '), Players_team[player.team][i], cor[indexCor.get("azulado")], "bold");
                }
            }
        } 
    }
}


/* ROOM FUNCTIONS */
room.onPlayerJoin = function (player) {
    player_auth.set(player.id, player.auth.toString())
    createPlayerStats(player.auth, player.name)
    console.log(player.auth + ' ' + player.conn + ' ' + player.id + ' ' + player.name)

    // Inicializar el afk default
    afkData[player.id] = {
        lastX: null,
        lastY: null,
        lastMoveTick: 0,
        warned: false
    };

    let stats = getStats(getAuth(player.id))
    llamarXP(player.id)

    sendWebhook(
    'playersLog',
    'Log Jugadores',
    '```\n' + 'Ha ingresado un Jugador: \nNOMBRE: ' + player.name + '\nIP: ' + player.conn + '\nID: ' + player.id + '\nAUTH: ' + player.auth + '\n```'
    );


    // Test de colores
    /* for(let i = 0; i < 24 ; i++){
        room.sendAnnouncement("[] COLOR TEST [] ID: " + i , null, cor[i], "bold", sonido[0]);
    }*/ 


    var players = room.getPlayerList();

    if(players){
        if(automatico == true && players.length >= pickToggler){
        togglePicks(true);
            } else if (automatico == false && players.length < pickToggler){
        togglePicks(false);
            }

            if(quickmode == false && players.length >= quicktoggler){
                quickmodeON()
            } else if (quickmode == true && players.length < quicktoggler) {
                quickmodeOFF()
            }
    }
    
    
    if (totoPlayer.includes(player.auth)) {
        totoList.add(player.id)
        room.setPlayerAdmin(player.id, true);
        admins_ofi.add(player.id)
    } if (adminoficial.includes(player.auth)) {
        admins_ofi.add(player.id)
        room.setPlayerAdmin(player.id, true);
    } if (vipPlayers.includes(player.auth)) {
        vipList.add(player.id)
    } if (adtPlayer.includes(player.auth)) {
        admins_ofi.add(player.id)
        adtList.add(player.id)
        room.setPlayerAdmin(player.id, true);
    } if (bdorPlayer.includes(player.auth)){
        bdorList.add(player.id);
        room.sendAnnouncement("[🟡] Se ha unido el vigente Balón de ORO " + player.name + " [🟡]",null, cor[indexCor.get("caquii")], "bold", sonido[2]);
    }


    if (adtList.has(player.id) == true) {
        room.sendAnnouncement("[✅] Se ha unido el administrador de la temporada " + player.name, null, cor[indexCor.get("caquii")], "noraml", sonido[1]);
    } else if (admins_ofi.has(player.id) == true) {
        room.sendAnnouncement("[✅] Se ha unido el Administrador " + player.name, null, cor[indexCor.get("admin")], "normal", sonido[1]);
    }


    if (players.length >= maxPlayer - 1 && admins_ofi.size <= 0) {
        if (!admins_ofi.has(player.id) && !vipList.has(player.id)){
            room.kickPlayer(player.id, "El servidor está lleno, slot guardado para admins.", false)
        }
    }

    

    updateAdmins();
    updateTeamsEntrar(player.team, player.id);
    enough_players()
    room.sendAnnouncement("[🎉] Bienvenido " + player.name + ". No te olvides unirte a nuestro discord: https://discord.gg/qnSRYhtBzj", player.id, cor[indexCor.get("amarillo")], "bold", sonido[2]);
    room.sendAnnouncement("[💬] Escribe !help para ver los comandos del host.", player.id, cor[indexCor.get("amarillo")], "bold", sonido[1]);
    if (vipList.has(player.id) == true){
        room.sendAnnouncement("[✨] Se ha unido el VIP " + player.name, null, cor[indexCor("purpura")])
        room.sendAnnouncement("[💬] Escribe !helpvip para ver los comandos de los vips.", player.id, cor[indexCor.get("amarillo")], "bold", sonido[1]);
    }

    if (/* banList.includes(player.auth) || */ banListIP.includes(player.conn)) {
        room.kickPlayer(player.id, "✖️Estás Blacklisteado de este Servidor✖️", true)
    }

    if(xp >= 2000 && xp < 3200){
        room.sendAnnouncement("[🟣] Se ha unido el Diamante " + player.name, null, cor[indexCor.get("rosa")], "normal", sonido[1])
    }
    if(xp >= 3200){
        room.sendAnnouncement("[💠] SE HA UNIDO EL LEGEND " + player.name, null, cor[indexCor.get("legend")], "bold", sonido[2])
    }


}

room.onPlayerLeave = function (player) {

    if(players){
        if(automatico == true && players.length >= pickToggler){
            togglePicks(true);
        } else if (automatico == false && players.length < pickToggler){
            togglePicks(false);
        }

        if(quickmode == false && players.length >= quicktoggler){
            quickmodeON()
        } else if (quickmode == true && players.length < quicktoggler) {
            quickmodeOFF()
        }
    }
    

    updateTeamsSalir(player.team, player.id);
    updateAdmins();
    updateAFKsalir(player)
    enough_players();
    delete afkData[player.id];

    sendWebhook(
    'playersLog',
    'Log Jugadores',
    '```\n' + 'Se fué: \nID:' + player.id + '\nNOMBRE: ' + player.name + '\n```'
    );


    


    if (player.id == gkRed) {
        gkRed = getGK(1);
    } else if (player.id == gkBlue) {
        gkBlue = getGK(2);
    }

    var players = room.getPlayerList();

    if (admins_ofi.has(player.id)){
        admins_ofi.delete(player.id)
    }

}

room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
    updateAdmins();
    updateAFKsalir(kickedPlayer)
    updateTeamsSalir(kickedPlayer.team, kickedPlayer.id);
    enough_players();

    if (ban == true && byPlayer != null && admins_ofi.has(byPlayer.id) != true) {
            room.clearBan(kickedPlayer.id);
            room.kickPlayer(byPlayer.id, "No puedes banear a alguien si no eres admin oficial!", true)
        }

    if (byPlayer != null) {
        if (ban == true) {
            sendWebhook(
                'banLog',
                'KickLog',
                "se ha Baneado a " + kickedPlayer.name + " por " + byPlayer.name + "\nrazón: " + reason
            );
        } else {
            sendWebhook(
                'banLog',
                'KickLog',
                "se ha kickeado a " + kickedPlayer.name + " por " + byPlayer.name + "\nrazón: " + reason
            );
        }
    }

}

room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
    if (player_afk.has(changedPlayer.id) == true) {
        room.setPlayerTeam(changedPlayer.id, 0)
        if (byPlayer != null)
        room.sendAnnouncement("EL JUGADOR ESTA AFK", byPlayer.id, cor[indexCor.get("rojo")], "bold");
    }

    updateTeamsChange(changedPlayer.team, changedPlayer.id);
    enough_players();

    let player = changedPlayer

    if (player.team !== 0) { // Si el jugador no está en el equipo espectador
        let auth = getAuth(player.id); // Obtener la autenticación del jugador
        let apuestasJugador = apuestas.filter(apuesta => apuesta.auth === auth); // Obtener todas las apuestas del jugador

        if (apuestasJugador.length > 0) {
            let stats = getStats(auth); // Obtener las estadísticas del jugador

            if (stats !== -1) {
                // Devolver todas las apuestas
                apuestasJugador.forEach(apuesta => {
                    stats.monedas += apuesta.monedas;
                    room.sendAnnouncement(
                        `[💲] Tu apuesta de ${apuesta.monedas} monedas ha sido devuelta porque ahora estás jugando.`,
                        player.id,
                        cor[indexCor.get("caquii")],
                        "bold",
                        sonido[2]
                    );
                });

                // Guardar las estadísticas actualizadas
                localStorage.setItem(auth, JSON.stringify(stats));

                // Eliminar las apuestas del jugador de la lista principal
                apuestas = apuestas.filter(apuesta => apuesta.auth !== auth);
            }
        }
    }

}

room.onStadiumChange = function(newStadiumName, byPlayer) {
    if (newStadiumName === "EFT Map") return;

    
    if (!admins_ofi.has(byPlayer.id)) {
        room.sendAnnouncement("No podes cambiar de mapa", byPlayer.id, cor[indexCor.get("rojo")], "bold", sonido[2])
        room.setCustomStadium(stadium); // Restaurar el estadio del host
    }
};

room.onPlayerChat = function (player, message, playerName) {

    sendWebhook(
    'chatLogger',
    'chat logger',
    player.name +': '+ message
    );

    /* COMANDOS */

    if (message.charAt(0) == '!') {
        words = message.split(" ")
        switch (words[0].substring(1)) {


            // ADMINISTRACIÓN ----------------------

            case "kick":
                if(admins_ofi.has(player.id)){
                    playerID = getPlayerIDbyName(words[1].substring(1))

                    if(playerID != -1){
                        room.kickPlayer(playerID, words.slice(2).join(' '), false)
                        room.sendAnnouncement("Jugador kickeado con éxito", player.id, cor[indexCor.get("rojo")], "bold", sonido[2]);

                        sendWebhook(
                            'banLog',
                            'KickLog',
                            "se ha Kickeado a " + words[1].substring(1) + " por " + player.name + "\nrazón: " + words.slice(2).join(' ')
                        );
                    } else {
                        room.sendAnnouncement("No se ha encontrado un jugador con ese nombre", player.id, cor[indexCor.get("rojo")], "bold", sonido[2]);
                    }
                    
                }
                break;

            case "ban":
                if(admins_ofi.has(player.id)){
                    playerID = getPlayerIDbyName(words[1].substring(1))

                    if(playerID != -1){
                        room.kickPlayer(playerID, words.slice(2).join(' '), true)
                        room.sendAnnouncement("Jugador baneado con éxito", player.id, cor[indexCor.get("rojo")], "bold", sonido[2]);

                        sendWebhook(
                            'banLog',
                            'KickLog',
                            "se ha Baneado a " + words[1].substring(1) + " por " + player.name + "\nrazón: " + words.slice(2).join(' ')
                        );
                    } else {
                        room.sendAnnouncement("No se ha encontrado un jugador con ese nombre", player.id, cor[indexCor.get("rojo")], "bold", sonido[2]);
                    }
                    
                }
                break;

            case "mapa":
                if (admins_ofi.has(player.id) == true) {
                    room.setCustomStadium(stadium)
                }
                break;

            case "automatico":
                if (admins_ofi.has(player.id) == true) {
                    toggleautomatico()
                }
                break;

            case "getauth":
                if (admins_ofi.has(player.id) == true) {
                words = message.split(" ")
                if (words.length == 1) {
                    let id = getPlayerIDbyName(player.name)
                    let auth = getAuth(id)
                    room.sendAnnouncement("El auth del jugador es: " + auth, player.id, cor[indexCor.get("rojo")], "bold", sonido[2]);
                } else if (words.length > 2) {
                    playerName = words[1].substring(1)
                    let id = getPlayerIDbyName(playerName)
                    let auth = getAuth(id)
                    room.sendAnnouncement("El auth del jugador es: " + auth, player.id, cor[indexCor.get("rojo")], "bold", sonido[2]);
                }
                }
                break;

            case "clearbans":
                if (admins_ofi.has(player.id) == true) {
                room.sendAnnouncement("⚠️Se ha hecho la limpieza de bans⚠️", player.id ,cor[indexCor.get("naranja")], "bold", sonido[2]);
                room.clearBans();
                sendWebhook(
                    'banLog',
                    'KickLog',
                    "se ha ejectuado el comando '!clearbans' por " + player.name
                );
            }
                break;

            case "claim":
                if (words.length == 1) {
                    room.sendAnnouncement("!claim contraseña", player.id, cor[indexCor.get("rojo")], "bold", sonido[2]);
                } else if (words[1] == adminPassword || words[1] == superAdminPassword) {
                    room.setPlayerAdmin(player.id, true);
                    room.sendAnnouncement("[🔌] "+player.name + " se ha logeado como Admin Ofi.", null, cor[indexCor.get("verde")], "bold", sonido[2]);
                    adminPassword = 1000 + getRandomInt(9000);
                    console.log("Contraseña Administrador: " + adminPassword);
                    sendWebhook(
                    'passwordLog',
                    'Pass Log',
                    'Contraseña Administrador: ' + adminPassword
                    );
                    admins_ofi.add(player.id);
                }
                break;

            case "totoclaim":
                if (words.length == 1) {
                    room.sendAnnouncement("???", player.id, cor[indexCor.get("rojo")], "bold", sonido[2]);
                } else if (words[1] == TotoAdminPassword) {
                    room.setPlayerAdmin(player.id, true);
                    room.sendAnnouncement("Se ha logueado Toto.", null, cor[indexCor.get("toto")], "bold", sonido[2]);
                    admins_ofi.add(player.id);
                    totoList.add(player.id);
                }
                break;

            case "adv":
            case "advertencia":
                if(admins_ofi.has(player.id) == true){
                    sendWebhook(
                    'advLog',
                    'ADVERTENCIAS EFT',
                    'El Administrador **' + player.name + ' (ID: ' + player.id + ")** agregó una Advertencia:\n" + words.slice(1).join(' ')
                    );

                    room.sendAnnouncement("[✅] Advertencia enviada.", player.id, cor[indexCor.get("verde")], "bold", sonido[2]);
                }
                break;

            case "anuncio":
                if (admins_ofi.has(player.id) == true) {

                    room.sendAnnouncement("[👮] " + player.name + ": " + words.slice(1).join(' '), null, cor[indexCor.get("caquii")], "bold", sonido[2]);
                }
                break;

            case "password":
                setRoomPassword(message, player) 
                break;

            case "rr":
                if (admins.indexOf(player.id) != -1) {
                    room.stopGame()
                    room.startGame()
                } else {
                    room.sendAnnouncement("No tenés los requisitos necesarios", player.id, cor[indexCor.get("rojo")], "bold");
                }

                break;

            case "clearstatshistory":
                if (totoList.has(player.id) == true) {
                localStorage.clear();
                console.log("stats reiniciadas")
                console.log(localStorage)
                }
                break;

            case "camis":
            case "camisetas":
                setCamisetas(message, player)
                break;

            case "randcamis":
            case "rc":
                if (admins.indexOf(player.id) != -1) {
                if (words.length == 1) {
                    //Se aplican para los dos
                    rand = randomIntFromInterval(0, camis.length - 1)
                    colors = camis[rand].slice(2)
                    room.setTeamColors(1, camis[rand][0], camis[rand][1], colors)
                    
                    do {
                        rand1 = randomIntFromInterval(0, camis.length - 1)
                    } while (rand1 == rand);

                    colors = camis[rand1].slice(2)
                    room.setTeamColors(2, camis[rand1][0], camis[rand1][1], colors)
                    room.sendAnnouncement(player.name + " RANDOMIZA EL PARTIDO: " + camisIndex.get(rand).toUpperCase() + " vs " + camisIndex.get(rand1).toUpperCase(), null, cor[indexCor.get("verde")], "bold", sonido[2])

                } else if (words.length == 2) {
                    if (isNumeric(words[1])) {
                        if (words[1] == "1") {
                            rand = randomIntFromInterval(0, camis.length - 1)
                            colors = camis[rand].slice(2)
                            room.setTeamColors(1, camis[rand][0], camis[rand][1], colors)
                            room.sendAnnouncement(player.name + " RANDOMIZA EL RED: " + camisIndex.get(rand) + " vs " + camisIndex.get(rand1), null, cor[indexCor.get("verde")], "bold", sonido[2])
                        } else if (words[1] == "2") {
                            rand1 = randomIntFromInterval(0, camis.length - 1)
                            colors = camis[rand1].slice(2)
                            room.setTeamColors(2, camis[rand1][0], camis[rand1][1], colors)
                            room.sendAnnouncement(player.name + " RANDOMIZA EL BLUE: " + camisIndex.get(rand) + " vs " + camisIndex.get(rand1), null, cor[indexCor.get("verde")], "bold", sonido[2])

                        
                        } else {
                            room.sendAnnouncement("El segundo argumento es opcional, en caso de usarlo poner 1 para red, 2 para blue")
                        }
                    } else {
                        room.sendAnnouncement("El segundo argumento es opcional, en caso de usarlo poner 1 para red, 2 para blue")
                    }
                } else {
                    room.sendAnnouncement("Demasiados argumentos")
                } 
            }
                break;

            case "mute":
                if (admins_ofi.has(player.id) == true) {
                    if (words.length == 1) {
                        room.sendAnnouncement("!mute @(jugador) tiempo (opcional)", player.id, cor[indexCor.get("plata")], "bold");
                    } else if (words.length == 2) {
                        if (getPlayerIDbyName(words[1].substring(1)) != -1) {
                            playerIDMuted = getPlayerIDbyName(words[1].substring(1))
                            dateMuted = addMinutes(new Date(), 2)
                            muteTime.set(playerIDMuted, dateMuted)
                            if (parseInt(words[2]) > 0){
                                room.sendAnnouncement("Se ha muteado a " + words[1].substring(1) + " por " + parseInt(words[2]) + " minutos", null, cor[indexCor.get("verde")]);
                            } else {
                                room.sendAnnouncement("Se ha desmuteado a " + words[1].substring(1), null, cor[indexCor.get("verde")]);
                            }
                            
                        }
                    } else if (words.length == 3) {
                        if (getPlayerIDbyName(words[1].substring(1)) != -1 && isNaN(words[2]) == false) {
                            playerIDMuted = getPlayerIDbyName(words[1].substring(1))
                            dateMuted = addMinutes(new Date(), parseInt(words[2]))
                            muteTime.set(playerIDMuted, dateMuted)
                            if (parseInt(words[2]) > 0){
                                room.sendAnnouncement("Se ha muteado a " + words[1].substring(1) + " por " + parseInt(words[2]) + " minutos", null, cor[indexCor.get("verde")]);
                            } else {
                                room.sendAnnouncement("Se ha desmuteado a " + words[1].substring(1), null, cor[indexCor.get("verde")]);
                            }
                        } else {
                            room.sendAnnouncement("Error en los argumentos", player.id, cor[indexCor.get("rojo")], "bold");
                        }
                    } else {
                        room.sendAnnouncement("Demasiados argumentos", player.id, cor[indexCor.get("rojo")], "bold");
                    }
                } else {
                    room.sendAnnouncement("No tenés los requisitos necesarios", player.id, cor[indexCor.get("rojo")], "bold");
                }
                break;

        
            // CLANES --------------------

            case "clan":
                let precio = 10000

                let subCmd = words[1]; // Subcomando
                let pAuth = getAuth(player.id)
                let stats = getStats(pAuth)
                let playerClan = Object.values(clans).find(clan => clan.members[pAuth]);
                
                switch(subCmd) {
                    case "create":
                        if (playerClan) {
                            room.sendAnnouncement("[❌] Ya estás en un clan. Usa !clan leave para salir antes de crear otro.", player.id, cor[indexCor.get("naranja")], "bold");
                            return false;
                        }

                        if (words.length < 4) {
                            room.sendAnnouncement("[❌] Uso correcto: !clan create \"Nombre\" \"Tag\" (ej: !clan create \"El Futbol de Toto\" \"EFT\")", player.id, cor[indexCor.get("naranja")], "bold");
                            return false;
                        }
                        let clanTag = words.pop();
                        let clanName = words.slice(2).join(" ");
    
                        if (!clanName || !clanTag || clanTag.length > 4) {
                            room.sendAnnouncement("[❌] Nombre o tag inválidos. El tag debe tener máximo 4 caracteres.", player.id, cor[indexCor.get("naranja")], "bold");
                            return false;
                        }

                        if (Object.values(clans).some(clan => clan.tag === clanTag)) {
                            room.sendAnnouncement("[❌] Ya existe un clan con ese tag. Elige otro.", player.id, cor[indexCor.get("naranja")], "bold");
                            return false;
                        }
    
                        if (clans[clanName]) {
                            room.sendAnnouncement("[❌] Ese clan ya existe.", player.id, cor[indexCor.get("naranja")], "bold");
                            return false;
                        }
    
                        if (stats.monedas < precio) {
                            room.sendAnnouncement("[❌] No tienes suficiente dinero para crear un clan. (12500$ NECESARIOS)", player.id, cor[indexCor.get("naranja")], "bold");
                            return false;
                        }
                        
                        stats.monedas -= precio
                        localStorage.setItem(pAuth, JSON.stringify(stats));

                        clans[clanName] = {
                            leader: pAuth,
                            tag: clanTag,
                            members: { [pAuth]: player.name },
                            stats: { goles: 0, asistencias: 0, vallas_invictas: 0, mvp: 0, partidos: 0, partidos_ganados: 0, partidos_perdidos: 0, goles_en_contra: 0 }
                        };
                            saveClans();
                        room.sendAnnouncement(`[✅] Clan "${clanName}" [${clanTag}] creado exitosamente.`, player.id, cor[indexCor.get("naranja")], "bold");
                        break;
                    
                    
                        case "invite":
                            if (words.length < 3) {
                                room.sendAnnouncement("[❌] Uso correcto: !clan invite @jugador", player.id, cor[indexCor.get("naranja")], "bold");
                                return false;
                            }
                        
                            const targetNameWithAt = words[2]; 
                            const targetNamei = targetNameWithAt.slice(1).replace(/_/g, " "); // Elimina "@" y reemplaza "_" por espacios
                            let targetPlayer = getPlayerByName(targetNamei);
                        
                            if (!targetPlayer) {
                                room.sendAnnouncement("[❌] Jugador no encontrado o nombre incorrecto.", player.id, cor[indexCor.get("naranja")], "bold");
                                return false;
                            }
                        
                            if (targetPlayer.id === player.id) {
                                room.sendAnnouncement("[❌] No puedes invitarte a ti mismo a un clan.", player.id, cor[indexCor.get("naranja")], "bold");
                                return false;
                            }
                        
                            let playerClani = Object.keys(clans).find(c => clans[c].members[pAuth]);
                            if (!playerClani || clans[playerClani].leader !== pAuth) {
                                room.sendAnnouncement("[❌] No eres líder de un clan.", player.id, cor[indexCor.get("naranja")], "bold");
                                return false;
                            }
                        
                            let targetAuthi = getAuth(targetPlayer.id);
                            let targetClani = Object.keys(clans).find(c => clans[c].members[targetAuthi]);
                            if (targetClani) {
                                room.sendAnnouncement("[❌] El jugador ya pertenece a un clan.", player.id, cor[indexCor.get("naranja")], "bold");
                                return;
                            }
                        
                            if (!clanInvites[targetAuthi]) {
                                clanInvites[targetAuthi] = [];
                            }
                        
                            clanInvites[targetAuthi].push(playerClani);
                            
                            room.sendAnnouncement(`[📩] Invitación enviada a ${targetPlayer.name}.`, player.id, cor[indexCor.get("naranja")], "bold");
                            room.sendAnnouncement(`[📩] ${player.name} te ha invitado a unirte a ${playerClani}. Usa !clan accept TAG para unirte.`, targetPlayer.id, cor[indexCor.get("naranja")], "bold");
                            break;
                    
                    case "accept":
                            if (words.length < 3) {
                                room.sendAnnouncement("[❌] Uso correcto: !clan accept TAG", player.id, cor[indexCor.get("naranja")], "bold");
                                return false;
                            }
                        
                            let tagToJoin = words[2];
                            let playerAuth = getAuth(player.id);
                        
                            if (!clanInvites[playerAuth] || clanInvites[playerAuth].length === 0) {
                                room.sendAnnouncement("[❌] No tienes invitaciones pendientes.", player.id, cor[indexCor.get("naranja")], "bold");
                                return false;
                            }
                        
                            let selectedClan = Object.keys(clans).find(c => clans[c].tag === tagToJoin);
                        
                            if (!selectedClan || !clanInvites[playerAuth].includes(selectedClan)) {
                                room.sendAnnouncement("[❌] No tienes una invitación para ese clan.", player.id, cor[indexCor.get("naranja")], "bold");
                                return false;
                            }
                        
                            if (Object.keys(clans[selectedClan].members).length >= 8) {
                                room.sendAnnouncement("[❌] El clan ya alcanzó el máximo de 8 miembros.", player.id, cor[indexCor.get("naranja")], "bold");
                                return false;
                            }
                        
                            clans[selectedClan].members[playerAuth] = player.name;
                            delete clanInvites[playerAuth];
                        
                            room.sendAnnouncement(`[✅] Te has unido al clan "${selectedClan}" [${tagToJoin}].`, player.id, cor[indexCor.get("naranja")], "bold");
                            saveClans();
                            break;
                    
                        case "leave":
                            let playerClanl = Object.keys(clans).find(c => clans[c].members[pAuth]);
                        
                            if (!playerClanl) {
                                room.sendAnnouncement("[❌] No estás en un clan.", player.id, cor[indexCor.get("naranja")], "bold");
                                return false;
                            }
                        
                            let clan = clans[playerClanl];
                        
                            if (!clan || !clan.members[pAuth]) {
                                room.sendAnnouncement("[❌] No estás en un clan.", player.id, cor[indexCor.get("naranja")], "bold");
                                return false;
                            }
                        
                            delete clan.members[pAuth];
                            room.sendAnnouncement(`[🚪] Has salido del clan "${playerClanl}".`, player.id, cor[indexCor.get("naranja")], "bold");
                        
                            if (Object.keys(clan.members).length === 0) {
                                delete clans[playerClanl];
                                room.sendAnnouncement(`[❌] El clan "${playerClanl}" ha sido disuelto.`, null, cor[indexCor.get("naranja")], "bold");
                            } else if (clan.leader === pAuth) {
                                let newLeader = Object.keys(clan.members)[0];
                                clan.leader = newLeader;
                                room.sendAnnouncement(`[👑] El nuevo líder del clan "${playerClanl}" es ${clan.members[newLeader]}.`, null, cor[indexCor.get("naranja")], "bold");
                            }
                        
                            saveClans();
                            break;
                        case "top":
                            let statType = words[2];
                            let validStats = {
                                goles: "goles",
                                asis: "asistencias",
                                valla: "vallas_invictas", 
                                mvp: "mvp", 
                                pj: "partidos", 
                                pg: "partidos_ganados", 
                                pp: "partidos_perdidos", 
                                gc: "goles_en_contra",
                                monedas: "monedas"
                                }

                            let statNames = {
                                goles: "⚽ Goles",
                                asis: "👟 Asistencias",
                                valla: "🥅 Vallas Invictas",
                                mvp: "🏆 MVPs",
                                pj: "📅 Partidos Jugados",
                                pg: "✅ Partidos Ganados",
                                pp: "❌ Partidos Perdidos",
                                gc: "🤡 Goles en Contra",
                                monedas: "💲 Monedas",
                            };
        
                            if (!validStats[statType]) {
                                room.sendAnnouncement("[❌] Estadística inválida. Usa: goles, asis, valla, mvp, pj, pg, pp, gc, monedas.", player.id, cor[indexCor.get("naranja")], "bold");
                                return false;
                            }
        
                            let clanRankings = Object.entries(clans).map(([clanName, clan]) => {
                                let totalStat = Object.keys(clan.members).reduce((acc, memberAuth) => {
                                    let stats = getStats(memberAuth);
                                    return acc + (stats ? stats[validStats[statType]] || 0 : 0);
                                }, 0);
                                return { clanName, tag: clan.tag, stat: totalStat }
                            }).sort((a, b) => b.stat - a.stat);
                            
                            if (clanRankings.length === 0) {
                                    room.sendAnnouncement("[❌] No hay clanes con estadísticas registradas aún.", player.id, cor[indexCor.get("naranja")], "bold");
                                    return false;
                                }

                            let topMessage = `🏆 TOP 3 CLANES POR ${statNames[statType]}:\n`;
                            clanRankings.slice(0, 3).forEach((clan, index) => {
                                topMessage += `${index + 1} ∙ ${clan.tag} - ${clan.stat} ${statNames[statType].split(" ")[0]}\n`;
                            });
        
                            room.sendAnnouncement(topMessage, player.id, cor[indexCor.get("naranja")], "bold");
                            break;

                            case "stats":
                                let playerClans = Object.keys(clans).find(c => clans[c].members[pAuth]);
                                if (!playerClans) {
                                    room.sendAnnouncement("[❌] No perteneces a ningún clan.", player.id, cor[indexCor.get("naranja")], "bold");
                                    return false;
                                }
                            
                                let clanStats = {
                                    goles: 0,
                                    asistencias: 0,
                                    vallas_invictas: 0,
                                    mvp: 0,
                                    partidos: 0,
                                    partidos_ganados: 0,
                                    partidos_perdidos: 0,
                                    goles_en_contra: 0
                                };
                            
                                // Sumar las estadísticas de cada miembro del clan
                                Object.keys(clans[playerClans].members).forEach(auth => {
                                    let stats = getStats(auth);
                                    if (stats) {
                                        clanStats.goles += stats.goles;
                                        clanStats.asistencias += stats.asistencias;
                                        clanStats.vallas_invictas += stats.vallas_invictas;
                                        clanStats.mvp += stats.mvp;
                                        clanStats.partidos += stats.partidos;
                                        clanStats.partidos_ganados += stats.partidos_ganados;
                                        clanStats.partidos_perdidos += stats.partidos_perdidos;
                                        clanStats.goles_en_contra += stats.goles_en_contra;
                                    }
                                });
                            
                                room.sendAnnouncement(`📊 Estadísticas de ${playerClans} [${clans[playerClans].tag}]:`, player.id, cor[indexCor.get("naranja")], "bold");
                                room.sendAnnouncement(`⚽ Goles: ${clanStats.goles} | 👟 Asistencias: ${clanStats.asistencias} | 🤡 GC: ${clanStats.goles_en_contra} | 🥅 Vallas Invictas: ${clanStats.vallas_invictas} | 🏆 MVPs: ${clanStats.mvp}`, player.id, cor[indexCor.get("naranja")], "bold");
                                room.sendAnnouncement(`📋 Partidos: PJ: ${clanStats.partidos} | PG: ${clanStats.partidos_ganados} | PP: ${clanStats.partidos_perdidos}`, player.id, cor[indexCor.get("naranja")], "bold");
                                break;

                                case "info":
                                let playerClansm = Object.keys(clans).find(c => clans[c].members[pAuth]);
                                if (!playerClansm) {
                                    room.sendAnnouncement("[❌] No perteneces a ningún clan.", player.id, cor[indexCor.get("naranja")], "bold");
                                    return false;
                                }

                                let clanm = clans[playerClansm];
                                let leaderName = clanm.members[clanm.leader] || "Desconocido";
                                let memberNames = Object.values(clanm.members).filter(name => name !== leaderName);
                                let memberCount = Object.keys(clanm.members).length;

                                let message = `📢 Clan ${playerClansm} [${clanm.tag}]:\n👑 Líder: ${leaderName}\n👥 Miembros: ${memberNames.length > 0 ? memberNames.join(" / ") : "Ninguno"}\n[${memberCount}/8]`;

                                room.sendAnnouncement(message, player.id, cor[indexCor.get("naranja")], "bold");
                                break;

                                case "kick":
                                    if (words.length < 3) {
                                        room.sendAnnouncement("[❌] Uso correcto: !clan kick @jugador", player.id, cor[indexCor.get("naranja")], "bold");
                                        return false;
                                    }
                                
                                    let playerClanKick = Object.keys(clans).find(c => clans[c].members[pAuth]);
                                    if (!playerClanKick) {
                                        room.sendAnnouncement("[❌] No perteneces a un clan.", player.id, cor[indexCor.get("naranja")], "bold");
                                        return false;
                                    }
                                
                                    let clanKick = clans[playerClanKick];
                                
                                    if (clanKick.leader !== pAuth) {
                                        room.sendAnnouncement("[❌] Solo el líder del clan puede expulsar miembros.", player.id, cor[indexCor.get("naranja")], "bold");
                                        return false;
                                    }
                                
                                    let targetName = words[2].replace("@", "").toLowerCase();
                                    let targetAuth = Object.keys(clanKick.members).find(auth => clanKick.members[auth].toLowerCase() === targetName);
                                
                                    if (!targetAuth) {
                                        room.sendAnnouncement("[❌] Jugador no encontrado en tu clan.", player.id, cor[indexCor.get("naranja")], "bold");
                                        return false;
                                    }
                                
                                    if (targetAuth === pAuth) {
                                        room.sendAnnouncement("[❌] No puedes expulsarte a ti mismo.", player.id, cor[indexCor.get("naranja")], "bold");
                                        return false;
                                    }
                                
                                    delete clanKick.members[targetAuth];
                                    saveClans();
                                
                                    room.sendAnnouncement(`[🚫] Has expulsado a ${targetName} del clan "${playerClanKick}".`, player.id, cor[indexCor.get("naranja")], "bold");
                                
                                    let targetPlayerk = room.getPlayerList().find(p => getAuth(p.id) === targetAuth);
                                    if (targetPlayerk) {
                                        room.sendAnnouncement(`[❌] Has sido expulsado del clan "${playerClanKick}".`, targetPlayerk.id, cor[indexCor.get("naranja")], "bold");
                                    }
                                    
                                    break;

                                case "help":

                                room.sendAnnouncement(`COMANDOS PARA CLANES: \n`, player.id, cor[indexCor.get("naranja")], "bold");
                                room.sendAnnouncement(`!clan create \n`, player.id, cor[indexCor.get("naranja")], "bold");
                                room.sendAnnouncement(`!clan invite @jugador\n`, player.id, cor[indexCor.get("naranja")], "bold");
                                room.sendAnnouncement(`!clan accept \n`, player.id, cor[indexCor.get("naranja")], "bold");
                                room.sendAnnouncement(`!clan leave \n`, player.id, cor[indexCor.get("naranja")], "bold");
                                room.sendAnnouncement(`!clan stats \n`, player.id, cor[indexCor.get("naranja")], "bold");
                                room.sendAnnouncement(`!clan info \n`, player.id, cor[indexCor.get("naranja")], "bold");
                                room.sendAnnouncement(`!clan top \n`, player.id, cor[indexCor.get("naranja")], "bold");
                                room.sendAnnouncement(`!clan kick @jugador \n`, player.id, cor[indexCor.get("naranja")], "bold");
                                room.sendAnnouncement(`El valor del clan es de 12500 Monedas.`, player.id, cor[indexCor.get("rojo")], "bold", sonido[2]);

                                break;


                    default:
                        room.sendAnnouncement("[❌] Comando inválido. Usa !clan help para mas informacion.", player.id, cor[indexCor.get("naranja")], "bold");
                        break;
                }
                break;
                

            // VIP ----------------------

                case "helpvip":
                if (vipList.has(player.id) == true){
                room.sendAnnouncement("   UTILIDADES:\n!corazon (color): Para cambiar el color del corazon a tu costado.\n!color: para cambiar el color de tus letras a la hora de hablar por el chat.\n!admin: Para poder claimear admin no-ofi.\n    TRIVIA:\n!memide: ok.\n8ball: te responde con si, no, capaz, etc. a tu pregunta.", player.id, cor[indexCor.get("rosa")], "bold", sonido[2])
                }
                break;

                case "admin":
                    if (vipList.has(player.id) == true){
                    room.setPlayerAdmin(player.id, true);
                    room.sendAnnouncement("El VIP " + player.name + "se ha logueado como administrador no oficial!", null, cor[indexCor.get("nofiadmin")], "normal", sonido[0])
                } break;

                /* 
                case "emoji":
                    if (vipList.has(player.id) == true){
                    if (words.length == 1) {
                    let stats = getData(getAuth(player.id))
                    room.sendAnnouncement("Los corazones para VIP elegibles son: rojo, azul, amarillo, verde, violeta, naranja, blanco, negro. ", player.id, cor[indexCor.get("rosa")], "bold", sonido[1]);
                } else if (words.length > 2) {
                    let stats = getData(getAuth(player.id))
                    if (words[1] ==  "rojo"){
                    vip["corazon"] = '❤';
                    }
                    if (words[1] == "azul"){
                    vip["corazon"] = '💙'
                    }
                    if (words[1] == "violeta"){
                    vip["corazon"] = '💜'
                    }
                    if (words[1] == "naranja"){
                    vip["corazon"] = '🧡'
                    }
                    if (words[1] == "amarillo"){
                    vip["corazon"] = '💛'
                    }
                    if (words[1] == "verde"){
                    vip["corazon"] = '💚'
                    }
                    if (words[1] == "negro"){
                    vip["corazon"] = '🖤'
                    }
                    if (words[1] == "blanco"){
                    vip["corazon"] = '🤍'
                    }
                }
                }
                    break;

                case "color":
                    if (vipList.has(player.id) == true){
                        if (words.length == 1) {
                    let stats = getData(getAuth(player.id))
                    room.sendAnnouncement("Tu posición es " + vip[""], player.id)
                } else if (words.length > 2) {
                    let stats = getData(getAuth(player.id))
                    vip[""] = words[1].substring(1)
                    }
                }

                */

                    break;
                

            // JUEGOS ----------------------

            case "apuesta":
                let scores = room.getScores();
                let tiempo = scores && scores.time !== null ? scores.time : 0;

                if (words.length < 3) {
                    room.sendAnnouncement("!apuesta (monedas), (Red / Blue)", player.id, cor[indexCor.get("rojo")], "bold", sonido[2]);
                } else {

                    if (player.team !== 0) { 
                        room.sendAnnouncement(
                        "No puedes apostar si ya estás jugando en un equipo.",
                        player.id,
                        cor[indexCor.get("rojo")],
                        "bold",
                        sonido[2]
                        );
                    break;
                    }

                    if (tiempo == 0 && isNumeric(words[1]) == true) {
                        let apuestaMonedas = parseInt(words[1]); // Cantidad apostada
                        let equipoApostado = words[2].toLowerCase(); // Equipo elegido
                        let auth = getAuth(player.id); // Obtener auth del jugador
                        let name = player.name; // Nombre del jugador

                        if (apuestas.some(apuesta => apuesta.auth === auth)) {
                            room.sendAnnouncement("[❌] Ya tienes una apuesta activa. Espera a que termine el partido antes de realizar otra.", player.id, cor[indexCor.get("rojo")], "bold", sonido[2]);
                            break;
                        }
            
                        // Validar que el equipo apostado es válido
                        if (equipoApostado === 'red' || equipoApostado === 'blue') {
                            let stats = getStats(auth); // Obtener estadísticas del jugador
            
                            if (stats === -1) {
                                room.sendAnnouncement("No estás registrado en las estadísticas.", player.id, cor[indexCor.get("rojo")], "bold", sonido[2]);
                                return;
                            }
            
                            // Validar que el jugador tenga suficientes monedas
                            if (stats.monedas >= apuestaMonedas) {

                                if(apuestaMonedas > 5000) {
                                    room.sendAnnouncement("No podes apostar mas de 5000", player.id, cor[indexCor.get("rojo")], "bold", sonido[2]);
                                    break;
                                }

                                // Registrar la apuesta
                                apuestas.push({
                                    auth: auth,
                                    monedas: apuestaMonedas,
                                    equipo: equipoApostado,
                                    name: name
                                });
            
                                // Descontar las monedas apostadas
                                stats.monedas -= apuestaMonedas;
                                localStorage.setItem(auth, JSON.stringify(stats));
            
                                room.sendAnnouncement(`[💲] ${player.name} Acaba de apostar 💲${apuestaMonedas} al ${equipoApostado === 'red' ? "Red" : "Blue"}.`, null, cor[indexCor.get("caquii")], "bold", sonido[1]);
                            } else {
                                room.sendAnnouncement("No tienes suficientes monedas para apostar.", player.id, cor[indexCor.get("rojo")], "bold", sonido[2]);
                            }
                        } else {
                           room.sendAnnouncement("Ese es un equipo inválido.", player.id, cor[indexCor.get("rojo")], "bold", sonido[2]);
                        }
                    } else {
                        room.sendAnnouncement("Apuesta inválida o ya empezó el partido.", player.id, cor[indexCor.get("rojo")], "bold", sonido[2]);
                    }
                }
                break;



            case "apuestas":
                if (apuestas.length === 0) {
                    room.sendAnnouncement("No hay apuestas registradas actualmente.", player.id, cor[indexCor.get("rojo")], "bold", sonido[2]);
                    break;
                }

                // Separar apuestas por equipo
                let apuestasRed = apuestas.filter(ap => ap.equipo === "red");
                let apuestasBlue = apuestas.filter(ap => ap.equipo === "blue");
            
                // Construir el mensaje para cada equipo
                let mensajeRed = `🔴 Apuestas Equipo Rojo:\n`;
                apuestasRed.forEach((apuesta, index) => {
                    mensajeRed += `${index + 1}. ${apuesta.name} - 💲${apuesta.monedas}\n`;
                });

                let mensajeBlue = `🔵 Apuestas Equipo Azul:\n`;
                apuestasBlue.forEach((apuesta, index) => {
                    mensajeBlue += `${index + 1}. ${apuesta.name} - 💲${apuesta.monedas}\n`;
                });

                // Enviar los mensajes
                if (apuestasRed.length > 0) {
                    room.sendAnnouncement(mensajeRed, player.id, cor[indexCor.get("rojizo")], "bold", sonido[1]);
                } else {
                    room.sendAnnouncement("🔴 No hay apuestas en el equipo Rojo.", player.id, cor[indexCor.get("rojo")], "bold", sonido[2]);
                }
            
                if (apuestasBlue.length > 0) {
                    room.sendAnnouncement(mensajeBlue, player.id, cor[indexCor.get("azul")], "bold", sonido[1]);
                } else {
                    room.sendAnnouncement("🔵 No hay apuestas en el equipo Azul.", player.id, cor[indexCor.get("azul")], "bold", sonido[2]);
                }

                break;

            case "memide":
                if (admins_ofi.has(player.id) == true) {
                if (words.length == 1) {
                    room.sendAnnouncement("A " + player.name + " Le mide " + getRandomInt(30) + "cm!!", null, cor[indexCor.get("caquii")], "bold", sonido[0])
                } else if (words.length > 2) {
                    playerName = words[1].substring(1)
                    room.sendAnnouncement("A " + playerName + " Le mide " + getRandomInt(30) + "cm!! Consultado por " + player.name, null, cor[indexCor.get("caquii")], "bold", sonido[0])
                }
                
                }
                break;

            case "8ball":
                words = message.split(" ")
                if (vipList.has(player.id) == true || admins_ofi.has(player.id) == true){
                    if(words.length <= 1) {
                        room.sendAnnouncement("Ingresa una pregunta para poder responderla !!", player.id, cor[indexCor.get("rojo")], "bold", sonido[2])
                    }
                    else if(words.length >= 2){
                        room.sendAnnouncement("8Ball Responde a " + player.name + ": " + words.slice(1).join(' '), null, cor[indexCor.get("caquii")], "bold", sonido[0])
                        room.sendAnnouncement("8ball: " + f8ball[randomIntFromInterval(0, f8ball.length - 1)], null, cor[indexCor.get("toto")], "bold", sonido[0]);
                    }
                } break;

            case "setadmin":
                room.kickPlayer(player.id, "JAKSDJKJKD", false) //Echar a la persona
                updateAFKsalir(player)
                break;

            case "claim-admin":
                room.kickPlayer(player.id, "Contraseña incorrecta. Intente nuevamente", false) //Echar a la persona
                updateAFKsalir(player)
                break;

            case "ruleta":
                tirarRuleta(message, player)
                break;

            // COTIDIANO ----------------------

            case "gks":
                if (gkRed == -1 || gkBlue == -1 && admins_ofi.has(player.id) == true) {
                    room.sendAnnouncement("TODAVÍA NO HAY GKs", null, cor[indexCor.get("warn")] , "bold", sonido[2])
                } else {
                if (admins_ofi.has(player.id) == true) {
                room.sendAnnouncement("EL GK DEL RED ES: " + room.getPlayer(gkRed).name, null, cor[indexCor.get("rojo")] , "bold", sonido[2])
                room.sendAnnouncement("EL GK DEL BLUE ES: " + room.getPlayer(gkBlue).name, null, cor[indexCor.get("azul")] , "bold", sonido[2])
                } else {
                room.sendAnnouncement("EL GK DEL RED ES: " + room.getPlayer(gkRed).name, player.id, cor[indexCor.get("rojo")] , "normal", sonido[2])
                room.sendAnnouncement("EL GK DEL BLUE ES: " + room.getPlayer(gkBlue).name, player.id, cor[indexCor.get("azul")] , "normal", sonido[2])
                }
                }
                break;

            case "reglas":
                room.sendAnnouncement("Quitear/Salir del Host perdiendo = Kick + 1/3. (Dependiendo del Admin se puede sancionar de diferente manera)\nSpam/Flood = Mute de 15m + 1/3.\nSpam de Discord/Host = BlackList\nReloguear para armarse equipo: Kick + 1/3.\nNo Gkear cuando sos el gk = kick.\nCaso Especial [FP] = Fair Play. - Jugada Justa (Devolver una jugada o no terminar la jugada por falta de jugadores)", player.id, cor[indexCor.get("warn")] , "bold", sonido[2])
                break;

            case "monedas":
                room.sendAnnouncement("Monedas por estadística: \nPartido Ganado: 50\nGoles: 100\nAsistencias: 50\nValla Invicta: 300\nMVP: 150", player.id, cor[indexCor.get("naranja")], "bold", sonido[2]);
                break;

            case "rankhelp":
                room.sendAnnouncement("RANGOS: \nCONO: Menor a -25\nTIERRA: Menor a 0\nBRONCE: Entre 0 y 200\nPLATA: Entre 200 y 500\nORO: Entre 500 y 1000\nPLATINO: Entre 1000 y 2000\nDIAMANTE: Entre 2000 y 3200\nLEGEND: Mayor a 3200.\nPara información sobre XP usar !puntos", player.id, cor[indexCor.get("naranja")], "bold", sonido[2]);
                break;

            case "puntos":
                room.sendAnnouncement("SIS. PUNTAJE:\n Goles +3xp\nAsistencias +2xp\nPG +1xp\nPP -1xp\nGoles en contra -2xp\nVallas Invictas +5\nMVPs: +3.\nPara información sobre rangos usar !rankhelp", player.id, cor[indexCor.get("verde")], "bold", sonido[2]);
                break;
                
            case "stats":
                showStats(message, player)
                break;
                /* Si hay más de una persona con el mismo nombre no funciona correctamente, al no poder distiguir su nombre entre ellos*/

            case "rank":
                showRank(message, player)
                break;

            case "top":
                let statType = words[1];
                let validStats = {
                    goles: "topScorers",
                    asis: "topAssistants",
                    valla: "topCleanSheets", 
                    mvp: "topMVPs", 
                    pj: "topPJs", 
                    pg: "topPGs", 
                    pp: "topPPs", 
                    gc: "topConceders",
                    monedas: "topmonedas",
                    xp: "topXPs"
                };

                let statNames = {
                    goles: "⚽ Goles",
                    asis: "👟 Asistencias",
                    valla: "🥅 Vallas Invictas",
                    mvp: "🏆 MVPs",
                    pj: "📅 Partidos Jugados",
                    pg: "✅ Partidos Ganados",
                    pp: "❌ Partidos Perdidos",
                    gc: "🤡 Goles en Contra",
                    monedas: "💲 Monedas",
                    xp: "✨ XP"
                };

                if (!validStats[statType]) {
                    room.sendAnnouncement("[❌] Estadística inválida. Usa: goles, asis, valla, mvp, pj, pg, pp, gc, monedas, xp.", player.id, cor[indexCor.get("naranja")], "bold");
                    return false;
                }

                let topStats = getTopStats();
                let selectedStat = validStats[statType]; // Obtener el nombre del array correspondiente
                let topList = topStats[selectedStat]; // Obtener el array de los mejores jugadores en esa estadística
                let statKey = Object.keys(topList[0]).find(k => k !== "nombre"); // Obtener la clave de la estadística

                room.sendAnnouncement("TOP " + statNames[statType], player.id, cor[indexCor.get("caquii")], "bold", sonido[2]);

                for (let i = 0; i < topList.length; i++) {
                    let playerName = topList[i].nombre || "N/A"; // Evitar errores si el nombre está vacío
                    let statValue = topList[i][statKey] ?? 0; // Evitar valores undefined

                    room.sendAnnouncement((i + 1) + "- " + playerName + ": " + statNames[statType].split(" ")[0] + " " + statValue, player.id, cor[indexCor.get("caquii")], "normal", sonido[0]);
                }
                break;

            case "partido":
                if (admins.indexOf(player.id) != -1) {
                    room.sendAnnouncement("PARTIDO: " + camisIndex.get(rand) + " vs " + camisIndex.get(rand1), null, cor[indexCor.get("amarillo")], "bold", sonido[2])
                } else {
                    room.sendAnnouncement("PARTIDO ACTUAL: " + camisIndex.get(rand) + " vs " + camisIndex.get(rand1), player.id, cor[indexCor.get("warn")], "bold", sonido[1])
                }
                break;

            case "racha":

            if (admins.indexOf(player.id) != -1) {
            if (teamWinStreak == 1) {
                room.sendAnnouncement("LA RACHA ACTUAL LA TIENE EL RED LLEVANDO " + winStreak + " PARTIDOS INVICTOS", null, cor[indexCor.get("gold")], "bold", sonido[2])
            } else {
                room.sendAnnouncement("LA RACHA ACTUAL LA TIENE EL BLUE LLEVANDO " + winStreak + " PARTIDOS INVICTOS", null, cor[indexCor.get("gold")], "bold", sonido[2])
            } 
        }
            else {
                if (teamWinStreak == 1) {
                room.sendAnnouncement("LA RACHA ACTUAL LA TIENE EL RED LLEVANDO  " + winStreak + " PARTIDOS INVICTOS", player.id, cor[indexCor.get("naranja")], "bold", sonido[2])
            } else {
                room.sendAnnouncement("LA RACHA ACTUAL LA TIENE EL BLUE LLEVANDO " + winStreak + " PARTIDOS INVICTOS", player.id, cor[indexCor.get("naranja")], "bold", sonido[2])
            }
            }
            break;

            case "llamaradmin":
                let id = getPlayerIDbyName(player.name)
                room.sendAnnouncement("Acabas de llamar a un Administrador", player.id, cor[indexCor.get("celeste")], "bold", sonido[2])
                room.sendAnnouncement("El uso innesecario de este comando repercutirá en un Baneo.", player.id, cor[indexCor.get("rojo")], "bold", sonido[2])
                
                sendWebhook(
                'adminCalls',
                'LLAMADAS ADMINISTRADORES',
                player.name + " ha solicitado un Administrador para el Host (ID: " + id +" ) Razón:\n" + words.slice(1).join(' ')
                );

                break;

            case "help":

                room.sendAnnouncement("USUARIOS\n!help: muestra los comandos de usuario y de administrador\n!rankhelp: para tener información sobre los rangos.\n!puntos: te muestra el sistema de puntaje de XP.\n!msg: manda mensaje a una persona\n!nv o !bb: salir del server\n!stats: muestra las estadisticas\n!llamaradmin: llama a un admin.\n!top: Para ver los distintos tops de cada estadistica", player.id, cor[indexCor.get("caquii")], "bold", sonido[2]);
                if (admins.indexOf(player.id) != -1) {
                    room.sendAnnouncement("ADMINISTRADORES\n!discord: muestra el servidor de discord al host.\n!partido: muestra el partido actual al host.\n!rc: para cambiar las camisetas del partido.\n!rr: reiniciar partida\n!mapa: pone el mapa del server", player.id, cor[indexCor.get("azulescuro")], "bold", sonido[0]);
                }

                break;

            case "bb":
            case "nv":
                room.kickPlayer(player.id, "Nos vemos!!", false) //Echar a la persona
                updateAFKsalir(player)
                break;

            case "discord":
                showDiscord(player)
                break;

            case "afk":
                updateAFK(player)
                break;

            case "afks":
                room.sendAnnouncement("Los jugadores afks son:", player.id, cor[indexCor.get("plata")], "bold");
                player_afk.forEach(function (value) {
                    room.sendAnnouncement("    " + room.getPlayer(value).name, player.id, cor[indexCor.get("blanchedAlmond")], "bold");
                })
                break;

            default:
                room.sendAnnouncement("Comando no existe", player.id, cor[indexCor.get("rojo")], "bold");
        }
        return false
    } else {
        if (muteTime.has(player.id) == true) {
            dateMutedPlayer = muteTime.get(player.id)
            dateNow = new Date()
            if (dateMutedPlayer > dateNow) {
                room.sendAnnouncement("🚫 Muteado: No podes mandar mensajes 🚫", player.id, cor[indexCor.get("rojo")], "bold");
                return false
            }
        }

    var rankTag = "";
    let stats = getStats(getAuth(player.id))
    llamarXP(player.id);

        rankTag = XPtoRank(xp);

        let tagteam = "";
        let color = "";

        if (player.team == 1){
            tagteam = "🔴"
            color = "rojizo";
        } else if (player.team == 2){
            tagteam = "🔵"
            color = "azulado";
        } else {
            tagteam = "⚪"
            color = "gris"
        }

        cambioavatares(player, message)

        words = message.split(" ");
        let playerClan = Object.keys(clans).find(c => clans[c].members[getAuth(player.id)]);
        let clanTag = playerClan ? `[${clans[playerClan].tag}] ` : "";
        
        // Pickeando
        if(eligiendo && isNumeric(message) && player.id == Players_team[teamEligiendo][0]){
            pick(message, player);
        } else if(message.charAt(0) == "@" && message.charAt(1) == "@"){
            sendMSG(message, player);
        } else if (words[0] == "t") {
            sendTeamMessage(message, player);
        } else if (totoList.has(player.id)) {
            room.sendAnnouncement("["+rankTag+"] " + clanTag + "[👑"+tagteam+"] " + player.name + ": " + message, null, cor[indexCor.get("toto")], "normal");
        } else if (adtList.has(player.id)) {
            room.sendAnnouncement("["+rankTag+"] " + clanTag + "[✨"+tagteam+"] " + player.name + ": " + message, null, cor[indexCor.get("admin")], "bold");
        } else if (bdorList.has(player.id)) {
            room.sendAnnouncement("["+rankTag+"] " + clanTag + "[🟡"+tagteam+"] " + player.name + ": " + message, null, cor[indexCor.get("gold")]);
        } else if (admins_ofi.has(player.id)) {
            room.sendAnnouncement("["+rankTag+"] " + clanTag + "[👮"+tagteam+"] " + player.name + ": " + message, null, cor[indexCor.get("admin")]);
        } else if (admins.indexOf(player.id) !== -1) {
            room.sendAnnouncement("["+rankTag+"] " + clanTag + "[👤"+tagteam+"] " + player.name + ": " + message, null, cor[indexCor.get("nofiadmin")], "normal");
        } else if (xp >= 3200) {
            room.sendAnnouncement("["+rankTag+"] " + clanTag + "["+tagteam+"] " + player.name + ": " + message, null, cor[indexCor.get("legend")], "bold");
        } else if (xp >= 2000 && xp < 3200) {
            room.sendAnnouncement("["+rankTag+"] " + clanTag + "["+tagteam+"] " + player.name + ": " + message, null, cor[indexCor.get("rosa")], "normal");
        } else {
            room.sendAnnouncement("["+rankTag+"] " + clanTag + "["+tagteam+"] " + player.name + ": " + message, null, cor[indexCor.get(color)], "normal");
        }
    }
    return false;
}

room.onGameStart = function (byPlayer) {

    anunciadoGO = false;
    anunciadoseg = false;

    tiempoEmpezadoJuego = new Date()
    if (sendRecWebhookURL != "") {
        room.startRecording();
    }

    cooldowninicio()

    isGameStarted = true
    //Se hace un bucle esperando a que se mueva al jugador, una vez ocurrido, va a parar

    golesPartido = []

    for (let i = 0; i < Players_team[1].length; i++) {
        player_on_game[0][i] = Players_team[1][i]
    }

    for (let i = 0; i < Players_team[2].length; i++) {
        player_on_game[1][i] = Players_team[2][i]
    }


    rand = randomIntFromInterval(0, camis.length - 1)
    colors = camis[rand].slice(2)
    room.setTeamColors(1, camis[rand][0], camis[rand][1], colors)
    do {
        rand1 = randomIntFromInterval(0, camis.length - 1)
    } while (rand1 == rand);

    colors = camis[rand1].slice(2)
    room.setTeamColors(2, camis[rand1][0], camis[rand1][1], colors)
    
    goalList = [];

    room.sendAnnouncement("PARTIDO: " + camisIndex.get(rand) + " vs " + camisIndex.get(rand1), null, cor[indexCor.get("amarillo")], "bold", sonido[2])

    room.sendAnnouncement("\n [💲] APROVECHEN EL TIEMPO DE PAUSA PARA APOSTAR CON !apuesta !! [💲] \n ", null, cor[indexCor.get("caquii")], "bold", sonido[2])
}


room.onPlayerBallKick = function (player) {
    playerKickBall[1] = playerKickBall[0]
    playerKickBall[0] = player.id

    playerKickName[1] = playerKickName[0]
    playerKickName[0] = player.name

    teamKickBall[1] = teamKickBall[0]
    teamKickBall[0] = player.team

    if (isGameStarted) {
        if (room.getBallPosition().x != 0 || room.getBallPosition().y != 0) {
            if (!isGKgot) { 
                gkRed = getGK(1)
                gkBlue = getGK(2); 
                isGKgot = true;
    if (gkRed != -1){
    room.sendAnnouncement("EL GK DEL RED ES: " + room.getPlayer(gkRed).name, null, cor[indexCor.get("rojo")] , "bold", sonido[2])
    }
    if (gkBlue != -1){
        room.sendAnnouncement("EL GK DEL BLUE ES: " + room.getPlayer(gkBlue).name, null, cor[indexCor.get("azul")] , "bold", sonido[2])
                }      
            }
        } 
    }
    
}

room.onGameStop = function () {
    bajarAFKs()

    if(quickmode == false){
        room.setTimeLimit(timeLimit);
        room.setScoreLimit(scoreLimit);
    } else if(quickmode == true){
        room.setTimeLimit(3);
        room.setScoreLimit(3);
    }

    isGKgot = false
    gkRed = -1
    gkBlue = -1

    apuestas.forEach(apuesta => {
        let stats = getStats(apuesta.auth); // Obtener estadísticas del jugador

        if (stats !== -1) {
            // Devolver las monedas apostadas
            stats.monedas += apuesta.monedas;
            localStorage.setItem(apuesta.auth, JSON.stringify(stats));

            // Notificar al jugador que su apuesta fue devuelta
            let player = getPlayerByAuth(apuesta.auth);
            if (player) {
                room.sendAnnouncement(
                    `\n [💲] El juego se ha detenido. Tu apuesta de ${apuesta.monedas} monedas ha sido devuelta. \n`,
                    player.id,
                    cor[indexCor.get("caquii")],
                    "bold",
                    sonido[2]
                );
            }
        }
    });

    // Limpiar la lista de apuestas después de devolverlas
    apuestas = [];

    // Mensaje general
    room.sendAnnouncement(
        "[💲] Se paró el juego y se devolvieron todas las apuestas",
        null,
        cor[indexCor.get("caquii")],
        "bold",
        sonido[2]
    );

}

room.onTeamGoal = async function (team) {

    tiempoGol = convertSecondsToMinutes(room.getScores().time)
    if (tiempoGol[1] < 10) {
        tiempoGol[1] = '0' + tiempoGol[1].toString()
    }
    str = tiempoGol[0].toString() + ':' + tiempoGol[1].toString()


    let contra
    if (teamKickBall[0] == team) {
        contra = '⚽'
    } else {
        contra = '🤡'
    }
    
    team === 1 ? goalList.push("🟥 " + contra + " " +  playerKickName[0] + " " + str) : goalList.push("🟦 "+ contra + " " +  playerKickName[0] + " " + str)

    
    golesPartido.push(new Array())


    if (teamKickBall[0] == teamKickBall[1] && playerKickBall[0] != playerKickBall[1]) {

        golesPartido[golesPartido.length - 1].push(playerKickName[0])
        golesPartido[golesPartido.length - 1].push(playerKickName[1])
        golesPartido[golesPartido.length - 1].push(str)
        golesPartido[golesPartido.length - 1].push(getAuth(playerKickBall[0]))
        golesPartido[golesPartido.length - 1].push(playerKickBall[0])
        golesPartido[golesPartido.length - 1].push(playerKickBall[1])
        golesPartido[golesPartido.length - 1].push(contra)
        golesPartido[golesPartido.length - 1].push(team)
    } else {
        golesPartido[golesPartido.length - 1].push(playerKickName[0])
        golesPartido[golesPartido.length - 1].push('')
        golesPartido[golesPartido.length - 1].push(str)
        golesPartido[golesPartido.length - 1].push(getAuth(playerKickBall[0]))
        golesPartido[golesPartido.length - 1].push(playerKickBall[0])
        golesPartido[golesPartido.length - 1].push(null)
        golesPartido[golesPartido.length - 1].push(contra)
        golesPartido[golesPartido.length - 1].push(team)
    }

let golcolor;
let asiscolor;
let avatar;

if (team == 1) {
    golcolor = "warn";
    asiscolor = "amarillo";
} else if (team == 2) {
    golcolor = "celeste";
    asiscolor = "verde";
}

llamarXP(playerKickBall[0])
if (xp >= 3200){
    golcolor = "legend"
}

llamarXP(playerKickBall[1])
if (xp >= 3200){
    asiscolor = "legend"
}

if (teamKickBall[0] == team) {
    avatar = avatarGol[randomIntFromInterval(0, avatarGol.length - 1)];
} else {
    avatar = avatarAGol[randomIntFromInterval(0, avatarAGol.length - 1)];
}

// ANUNCIOS GOLES
if (teamKickBall[0] == team) {
    room.sendAnnouncement("["+avatar+"] " + frasesGol[randomIntFromInterval(0, frasesGol.length - 1)](playerKickName[0]), null, cor[indexCor.get(golcolor)], "bold", sonido[2]);
    room.setPlayerAvatar(playerKickBall[0], avatar);

    if (playerKickName[1] != 0 && playerKickName[1] != playerKickName[0] && teamKickBall[1] == team) {
        room.sendAnnouncement("[👟] " + playerKickName[1] + ' ' + frasesAsist[randomIntFromInterval(0, frasesAsist.length - 1)], null, cor[indexCor.get(asiscolor)], "bold", sonido[2]);
        room.setPlayerAvatar(playerKickBall[1], "👟");
    }

} else {
    room.sendAnnouncement("["+avatar+"] " + frasesAutogol[randomIntFromInterval(0, frasesAutogol.length - 1)], null, cor[indexCor.get("rojo")], "bold", sonido[2]);
    room.setPlayerAvatar(playerKickBall[0], avatar);

    if (playerKickName[1] != 0 && playerKickName[1] != playerKickName[0] && teamKickBall[1] == team) {
        room.sendAnnouncement("[👟] " + frasesAsistAG[randomIntFromInterval(0, frasesAsistAG.length - 1)] + playerKickName[1], null, cor[indexCor.get(asiscolor)], "bold", sonido[2]);
        room.setPlayerAvatar(playerKickBall[1], "👟");
    }
}

// AVATAR DINAMICO
let goleador = playerKickBall[0];
let asistidor = playerKickBall[1];

if(teamKickBall[0] != teamKickBall[1] && teamKickBall[0] == team){
    room.setPlayerAvatar(goleador, avatar);
    await delay(125);
    room.setPlayerAvatar(goleador, null);
    await delay(125);
} else {
    for(let i = 0; i<3; i++){
    room.setPlayerAvatar(asistidor, "👟");
    room.setPlayerAvatar(goleador, avatar);
    await delay(125);
    room.setPlayerAvatar(goleador, null);
    room.setPlayerAvatar(asistidor, null);
    await delay(125);
    }

}
    scores = room.getScores()
    if (scores.red == 3 && scores.blue == 3) {
        room.sendAnnouncement("ESTO SE DEFINIRÁ EN GOL DE ORO !!", null, cor[indexCor.get("gold")], "bold", sonido[2])
    }

    playerKickBall[0] = 0
    playerKickBall[1] = 0
    teamKickBall[0] = 0
    teamKickBall[1] = 0

}



let RecSistem = {
    getCustomDate: () => {
        let data = new Date().toLocaleDateString().split("/").join("-"),
            relogio = new Date().toLocaleTimeString().split(":");

        return `${data}-${relogio[0]}h${relogio[1]}m`;
    },
    getScoresTime: time => {
        return ~~(Math.trunc(time) / 60) + ":" + (Math.trunc(time) % 60).toString().padStart(2, '0');
    },
    sendDiscordWebhook: scores => {
        let
            red = room.getPlayerList().filter((player) => player.team == 1).map((player) => player.name),
            blue = room.getPlayerList().filter((player) => player.team == 2).map((player) => player.name);

        let form = new FormData();
        form.append(null, new File([room.stopRecording()], `HBReplay-${RecSistem.getCustomDate()}.hbr2`, {"type": "text/plain"}));
        form.append("payload_json", JSON.stringify(RecSistem.getParams(scores, red, blue)));

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "https://discord.com/api/webhooks/1188203698996912138/KtxhoWNi5ChdG8u3-fXWWxFspzfXgzGUwQDDXByyarT56XSl1QWXlMmcJhwrE1u4-4XC");
        xhr.send(form);
    },
    getParams: (scores, red, blue) => {
        let params = {
            "username": "EFT recs",
            "avatar_url": "",//Avatar Url Of The Bot
            "content": "",
            "embeds": [{
                "title": `${camisIndex.get(rand)} 🔴 ${scores.red}  Vs.  ${scores.blue} 🔵 ${camisIndex.get(rand1)}`,
                "color": 0xBB00BB,
                "description": "",
                "timestamp": null,
                "author": {},
                "image": {},
                "thumbnail": {},
                "footer": {
                    "text": ``,
                    "icon_url": ""
                },
                "fields": [
                    {"name": ``, "value": `${red.join("\n")}`, "inline": true},
                    {"name": ``, "value": ``, "inline": true},
                    {"name": ``, "value": `${blue.join("\n")}`, "inline": true},
                    {"name": `🧮Cronologia`, "value": "```\n" + goalList.join("\n") + "\n```"},
                    {"name": `🌟 MVP: ${mvp[1]}`, "value": ``, "inline": true},
                    {"name": `🏅 Racha: ${winStreak}`, "value": ``, "inline": true},
                ]
            }],
            "components": []
        };
        return params;
    }

};




room.onTeamVictory = function (scores) {

    //Se actualizan las stats
    let teamGanador = 0;

    if (scores.red > scores.blue) {
        teamGanador = 1
    } else {
        teamGanador = 2
    }

    hayValla = calcVallaInvicta(teamGanador);
    

    if (hayValla) {

        let elgk;

        if (gkRed != -1 && gkBlue != -1) {

        if (calcVallaInvicta(1)) {
            elgk = gkRed
        }else if (calcVallaInvicta(2)) {
            elgk = gkBlue
        }

    room.sendAnnouncement("🥅 Hay valla invicta de "+ room.getPlayer(elgk).name + " !!", null, cor[indexCor.get("snow")], "bold", sonido[2])

    }

    } else {
        room.sendAnnouncement("No hubo valla invicta", null, cor[indexCor.get("snow")], "bold", sonido[2])
    }

    mvp = getMVP(golesPartido)

    isGameStarted = false;

    player = getGameInformation(teamGanador)


    //Se muestran los goles del partido
    room.sendAnnouncement("Participación de Gol:", null, cor[indexCor.get("caquii")], "bold", sonido[2])
    for (let i = 0; i < golesPartido.length; i++) {

        let goalteam;
        if (golesPartido[i][golesPartido[i].length - 1] == 1) {
                goalteam = 'rojo'
        } else {
                goalteam = 'azul'
        }

        if (golesPartido[i][1] == '') {
            room.sendAnnouncement(golesPartido[i][2] + ' ' + golesPartido[i][6] + ' ' + golesPartido[i][0], null, cor[indexCor.get(goalteam)], "bold", sonido[2])
        } else {
           room.sendAnnouncement(golesPartido[i][2] + '  ' + golesPartido[i][6] + ' ' + golesPartido[i][0] + '  +  👟 ' + golesPartido[i][1], null, cor[indexCor.get(goalteam)], "bold", sonido[2])
        }
    }

    room.stopGame()

    let camisGanadora
    let equipoP

    if (scores.red > scores.blue) {
        camisGanadora = rand
        equipoP = 2
    } else {
        camisGanadora = rand1
        equipoP = 1
    }

    room.sendAnnouncement("GANA " + camisIndex.get(camisGanadora) + " EN UN DURO PARTIDO!", null, cor[indexCor.get("caquii")], "bold", sonido[2])
        moveSpec(equipoP)
        if(equipoP == 1){
            moveWinJug(1);
        }
        moveJug(2)

    //Se hace la parte de win streak

    let winteam;
    let colorteam

    if(teamGanador == 1){
        winteam = 'rojo'
        colorteam = 'rojo'
    } else if (teamGanador == 2){
        winteam = 'azul'
        colorteam = 'celeste'
    }

    if (teamGanador == teamWinStreak) {
        winStreak++
    } else {
        if (teamGanador == 1) {
            teamWinStreak = 1
            winStreak = 1
        } else {
            teamWinStreak = 2
            winStreak = 1
        }
    }

    room.sendAnnouncement("⚡ El equipo " + winteam + " tiene una racha invicta de " + winStreak, null, cor[indexCor.get(colorteam)], "bold")
    room.sendAnnouncement("🎥 Esta partida fué grabada y se subió al Discord!! 🎥", null, cor[indexCor.get("purpura")], "bold", sonido[0])

    RecSistem.sendDiscordWebhook(scores);
    goalList = [];
    kickOff = false;

    gkRed = -1
    gkBlue = -1

    apuestas.forEach((apuesta) => {
        let stats = getStats(apuesta.auth);

        if (stats === -1) {
            return;
        }

        let jugador = room.getPlayerList().find((p) => getAuth(p.id) === apuesta.auth);

        if (apuesta.equipo == 'red'){
            apuesta.equipo = 1
        } else {
            apuesta.equipo = 2
        }

        if (apuesta.equipo === teamGanador) {
            let ganancia = apuesta.monedas * 2;
            stats.monedas += ganancia;

            room.sendAnnouncement(
                `\n[💲] ¡Felicidades! Ganaste 💲${ganancia}.\n `,
                jugador.id, 
                cor[indexCor.get("caquii")],
                "bold",
                sonido[2]
            );
        } else {
            room.sendAnnouncement(
                `\n[💲] Perdiste tu apuesta de 💲${apuesta.monedas}.\n `,
                jugador.id,
                cor[indexCor.get("rojo")],
                "bold",
                sonido[2]
            );
        }

        localStorage.setItem(apuesta.auth, JSON.stringify(stats));
    });

    apuestas = [];

    // Se activan los picks
    if(!automatico){
        eligiendo = true;
        teamEligiendo = 2;

        mostrarPicks();
    }

}

document.title = '⚡ x4 - EFT ⚡';