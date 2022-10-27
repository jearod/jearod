//global variables
let playerAttack
let enemyAttack
let playerLifes
let enemyLifes
let warriorFlag
let fight
let attacks
let playerWarrior
let enemyWarrior


function initiateGame(){

    warriorFlag = 1

    //warrior selection
    document.getElementById('button-select').addEventListener('click', selectWarriorPlayer) 

    //attacks
    document.getElementById('button-fire').addEventListener('click', attackFire) 
    document.getElementById('button-water').addEventListener('click', attackWater) 
    document.getElementById('button-earth').addEventListener('click', attackEarth) 

    //reload
    document.getElementById('button-reset').style.display = 'none'
    document.getElementById('button-reset').addEventListener('click', restartGame)

    document.getElementById("attack-section").style.display = 'none'
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function selectWarriorPlayer(){
    let warriorsIds = ['druid','death knight','mague','priest','warlock','rogue']
    enemyWarrior = warriorsIds[rand(0,5)]
    playerLifes = 5
    enemyLifes = 5
    
    if (enemyWarrior == 'druid'){
        attacks = ['WATER💧','EARTH🌱']
    } else if (enemyWarrior == 'death knight'){
        attacks = ['FIRE🔥','WATER💧']
    } else if (enemyWarrior == 'mague'){
        attacks = ['FIRE🔥','WATER💧']
    } else if (enemyWarrior == 'priest'){
        attacks = ['EARTH🌱','WATER💧']
    } else if (enemyWarrior == 'warlock'){
        attacks = ['FIRE🔥','EARTH🌱']
    } else if (enemyWarrior == 'rogue'){
        attacks = ['FIRE🔥','EARTH🌱']
    }
    
    
    for (let warrior of warriorsIds){
        if ( document.getElementById(warrior).checked == true){
                alert("you have selected "+  warrior.charAt(0).toUpperCase() + warrior.slice(1))
            document.getElementById("warrior-player").innerHTML = warrior.charAt(0).toUpperCase() + warrior.slice(1)
            playerWarrior = warrior
                alert("Enemy has selected "+ enemyWarrior.charAt(0).toUpperCase() + enemyWarrior.slice(1))
            document.getElementById("warrior-section").style.display = 'none'
            document.getElementById("attack-section").style.display = 'flex'
            document.getElementById("warrior-enemy").innerHTML = enemyWarrior.charAt(0).toUpperCase() + enemyWarrior.slice(1)
            document.getElementById('button-select').disabled = true
            document.getElementById("lifes-player").innerHTML = playerLifes
            document.getElementById("lifes-enemy").innerHTML = enemyLifes
            document.getElementById("subtittle2").style.color = "#F90716"
            
            

            warriorFlag = 0
            if (warrior == 'druid'){
                document.getElementById('button-fire').disabled = true
            } else if (warrior == 'death knight'){
                document.getElementById('button-earth').disabled = true
            } else if (warrior == 'mague'){
                document.getElementById('button-earth').disabled = true
            } else if (warrior == 'priest'){
                document.getElementById('button-fire').disabled = true
            } else if (warrior == 'warlock'){
                document.getElementById('button-water').disabled = true
            } else if (warrior == 'rogue'){
                document.getElementById('button-water').disabled = true
            }
            break
        }
    }
    if (warriorFlag == 1) {
        alert("Please select a warrior")
    }
    
}

function attackFire(){
    if (warriorFlag == 1) {
        alert("Please select a warrior")
    } else {
        playerAttack = 'FIRE🔥'
        enemyAttackAction()
    }
}

function attackWater(){
    if (warriorFlag == 1) {
        alert("Please select a warrior")
    } else {
        playerAttack = 'WATER💧'
        enemyAttackAction()
    }
}

function attackEarth(){
    if (warriorFlag == 1) {
        alert("Please select a warrior")
    } else {
        playerAttack = 'EARTH🌱'
        enemyAttackAction()
    }
}

function enemyAttackAction(){
    enemyAttack = attacks[rand(0,1)]
    combat()
    createMessage()


}

function combat(){

    if ( playerLifes == null ){
        alert("Please select a Warrior")
        document.getElementById("attack-player").innerHTML = ''
        document.getElementById("attack-enemy").innerHTML = ''
    } else if (playerWarrior == enemyWarrior && playerAttack == enemyAttack) {
        document.getElementById("lifes-player").innerHTML = playerLifes
        document.getElementById("lifes-enemy").innerHTML = enemyLifes
        fight = 'Draw'
    }  else if (playerAttack == enemyAttack ){
        if ( (playerWarrior == 'druid' || playerWarrior == 'rogue' ) && (enemyWarrior == 'priest' || enemyWarrior == 'warlock') ) {
            enemyLifes = enemyLifes - 1
            fight = 'The enemy loses a life'
            document.getElementById("lifes-enemy").innerHTML = enemyLifes
        } else if ( (enemyWarrior == 'druid' || enemyWarrior == 'rogue' ) && (playerWarrior == 'priest' || playerWarrior == 'warlock') ) {
            playerLifes = playerLifes - 1
            fight = 'You lose a life'
            document.getElementById("lifes-player").innerHTML = playerLifes
        } else if ( (playerWarrior == 'death knight' || playerWarrior == 'warlock' ) && (enemyWarrior == 'mague' || enemyWarrior == 'rogue') ) {
            enemyLifes = enemyLifes - 1
            fight = 'The enemy loses a life'
            document.getElementById("lifes-enemy").innerHTML = enemyLifes
        } else if ( (enemyWarrior == 'death knight' || enemyWarrior == 'warlock' ) && (playerWarrior == 'mague' || playerWarrior == 'rogue') ) {
            playerLifes = playerLifes - 1
            fight = 'You lose a life'
            document.getElementById("lifes-player").innerHTML = playerLifes
        } else if ( (playerWarrior == 'mague' || playerWarrior == 'priest' ) && (enemyWarrior == 'druid' || enemyWarrior == 'death knight') ) {
            enemyLifes = enemyLifes - 1
            fight = 'The enemy loses a life'
            document.getElementById("lifes-enemy").innerHTML = enemyLifes
        } else if ( (enemyWarrior == 'mague' || enemyWarrior == 'priest' ) && (playerWarrior == 'druid' || playerWarrior == 'death knight') ) {
            playerLifes = playerLifes - 1
            fight = 'You lose a life'
            document.getElementById("lifes-player").innerHTML = playerLifes
        } else {
            document.getElementById("lifes-player").innerHTML = playerLifes
            document.getElementById("lifes-enemy").innerHTML = enemyLifes
            fight = 'Draw'
        }
    } else if (playerAttack == 'WATER💧' && enemyAttack == "FIRE🔥"){
        enemyLifes = enemyLifes - 1
        fight = 'The enemy loses a life'
        document.getElementById("lifes-enemy").innerHTML = enemyLifes   
    } else if (playerAttack == 'FIRE🔥' && enemyAttack == "EARTH🌱"){
        enemyLifes = enemyLifes - 1
        fight = 'The enemy loses a life'
        document.getElementById("lifes-enemy").innerHTML = enemyLifes
    } else if (playerAttack == 'EARTH🌱' && enemyAttack == "WATER💧"){
        enemyLifes = enemyLifes - 1
        fight = 'The enemy loses a life'
        document.getElementById("lifes-enemy").innerHTML = enemyLifes
    } else {
        playerLifes = playerLifes - 1
        fight = 'You lose a life'
        document.getElementById("lifes-player").innerHTML = playerLifes
    }
}

function createMessage(){
    let messagesSection = document.getElementById('messages')
    let paragraph = document.createElement("p")
    paragraph.innerHTML = "Your warrior attacked with "+ playerAttack +". The enemy's warrior attacked with "+ enemyAttack +". "+ fight
    messagesSection.appendChild(paragraph)
    
    if (enemyLifes == 0){ 
        alert("🎉🎉¡¡YOU WIN!!🎉🎉") 
        document.getElementById('button-fire').disabled = true
        document.getElementById('button-water').disabled = true
        document.getElementById('button-earth').disabled = true
        document.getElementById('button-reset').style.display = 'block'
    } 
    if (playerLifes == 0){ 
        alert("😞😞 YOU LOSE 😭😭") 
        document.getElementById('button-fire').disabled = true
        document.getElementById('button-water').disabled = true
        document.getElementById('button-earth').disabled = true
        document.getElementById('button-reset').style.display = 'block'
    } 
}

function restartGame(){
    location.reload()
}

window.addEventListener('load', initiateGame)
