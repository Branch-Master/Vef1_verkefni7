/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
    alert("Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.");
    var spila_aftur = true;  
    while(spila_aftur){
        play();
        spila_aftur = confirm("spila_aftur?");
    }
    
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */

 
function play() {
    var score = 0; 
    var question_number = GAMES_TO_PLAY;
    var upphafstimi = Date.now();
    var query;
    while( question_number> 0){
     query = ask();

    var svar = query[1];
    
    var mathQuestion = prompt(query[0]);

    

    switch(mathQuestion){
      case svar : 
        score = score + 1;
        break;  
      case null :
        quit_game();
        break;

    }
    question_number -= 1;
}
    var lokatimi = Date.now();
    var timi = (lokatimi- upphafstimi);
    var floor = timi % 10;
    timi = (timi - floor)/1000; 
    var medalrett = score/timi;
    alert("Þú svaraðir " + score + " af 10 dæmum rétt á " + timi +"sek" + "\n" 
    + "Meðalrétt svör á sekúndu eru "+ medalrett.toFixed(2) );

}

function quit_game(){
    alert("Hætt í leik");
    start();
}



// þetta fall býr til spurninguna
// skilar bæði spurningu og svari
function ask() {

    var mark = [ "+","-","*","/"];
    var mark_rand = Math.floor(Math.random()*4);
    var quest = mark[mark_rand];
    var spurning;
    var svar; 
    if(mark_rand < 2){
        var num1 = randomNumber(1,100);
        var num2 = randomNumber(1,100);
        spurning = num1 + " " + quest + " " + num2;
        
        if(mark_rand === 0){svar = num1 + num2;}
        if(mark_rand ===1 ){svar = num1 - num2;}
        
        
    }
    if(mark_rand ===2 ){
        var num1 = randomNumber(1,10);
        var num2 = randomNumber(1,10);
        spurning = num1 + " " + quest + " " + num2;
        svar = num1*num2;
    }
    if(mark_rand ===3){
        var num1 = randomNumber(2,10);
        var num2 = randomNumber(2,10);
        var num3 = num1*num2;
        spurning = num3 + " " + quest + " " + num1;
        svar = num3/num1;
    }
    svar = svar +"";
    
    return [spurning, svar];
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik


start();