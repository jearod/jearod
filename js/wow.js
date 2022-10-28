//global variables
let playerAttack
let enemyAttack
let playerHealth
let enemyHealth
let warriorFlag
let fight
let attacks
let playerWarrior
let enemyWarrior
let warriorsIds = ['druid','deathknight','mague','priest','warlock','rogue']
let warriorNames = { druid: "Druid 🌱🌱💧", deathknight: "Death Knight 🔥🔥💧", mague: "Mague 💧💧🔥", priest: "Priest 💧💧🌱", warlock: "Warlock 🔥🔥🌱", rogue: "Rogue 🌱🌱🔥"}
let warriorName = { druid: "Druid", deathknight: "Death Knight", mague: "Mague", priest: "Priest", warlock: "Warlock", rogue: "Rogue"}

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
    document.getElementById('button-reset').disabled = true
    document.getElementById('button-reset').addEventListener('click', restartGame)

    document.getElementById("attack-section").style.display = 'none'
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function selectWarriorPlayer(){
    
    enemyWarrior = warriorsIds[rand(0,5)]
    playerHealth = 100
    enemyHealth = 100
    
    if (enemyWarrior == 'druid'){
        attacks = ['WATER💧','EARTH🌱']
    } else if (enemyWarrior == 'deathknight'){
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
            playerWarrior = warrior
            
            alert("you have selected "+  warriorNames[playerWarrior])
            document.getElementById("warrior-player").innerHTML = warriorNames[playerWarrior]
            document.getElementById("image-player").src = "assets/"+playerWarrior+".jpg"
            document.getElementById("health-player").innerHTML = playerHealth

            alert("Enemy has selected "+ warriorNames[enemyWarrior])
            document.getElementById("image-enemy").src = "assets/"+enemyWarrior+".jpg"
            document.getElementById("warrior-enemy").innerHTML = warriorNames[enemyWarrior]
            document.getElementById("health-enemy").innerHTML = enemyHealth

            document.getElementById("warrior-section").style.display = 'none'
            document.getElementById("attack-section").style.display = 'flex'
            document.getElementById('button-select').disabled = true        
            document.getElementById("subtittle2").style.color = "#F90716"
            document.getElementById("subtittle2").style.backgroundColor = 'revert'
            

            warriorFlag = 0
            if (warrior == 'druid'){
                document.getElementById('button-fire').style.display = 'none'
                document.getElementById('button-fire').disabled = true
            } else if (warrior == 'deathknight'){
                document.getElementById('button-earth').style.display = 'none'
                document.getElementById('button-earth').disabled = true
            } else if (warrior == 'mague'){
                document.getElementById('button-earth').style.display = 'none'
                document.getElementById('button-earth').disabled = true
            } else if (warrior == 'priest'){
                document.getElementById('button-fire').style.display = 'none'
                document.getElementById('button-fire').disabled = true
            } else if (warrior == 'warlock'){
                document.getElementById('button-water').style.display = 'none'
                document.getElementById('button-water').disabled = true
            } else if (warrior == 'rogue'){
                document.getElementById('button-water').style.display = 'none'
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

    if ( playerHealth == null ){
        alert("Please select a Warrior")
        document.getElementById("attack-player").innerHTML = ''
        document.getElementById("attack-enemy").innerHTML = ''
    } else if (playerWarrior == enemyWarrior && playerAttack == enemyAttack) {
        document.getElementById("health-player").innerHTML = playerHealth
        document.getElementById("health-enemy").innerHTML = enemyHealth
        fight = 'Draw'
    }  else if (playerAttack == enemyAttack ){
        if ( (playerWarrior == 'druid' || playerWarrior == 'rogue' ) && (enemyWarrior == 'priest' || enemyWarrior == 'warlock') ) {
            enemyHealth = enemyHealth -15
            fight = 'The enemy loses 15% health'
            document.getElementById("health-enemy").innerHTML = enemyHealth
        } else if ( (enemyWarrior == 'druid' || enemyWarrior == 'rogue' ) && (playerWarrior == 'priest' || playerWarrior == 'warlock') ) {
            playerHealth = playerHealth -15
            fight = 'You lose 15% health'
            document.getElementById("health-player").innerHTML = playerHealth
        } else if ( (playerWarrior == 'deathknight' || playerWarrior == 'warlock' ) && (enemyWarrior == 'mague' || enemyWarrior == 'rogue') ) {
            enemyHealth = enemyHealth -15
            fight = 'The enemy loses 15% health'
            document.getElementById("health-enemy").innerHTML = enemyHealth
        } else if ( (enemyWarrior == 'deathknight' || enemyWarrior == 'warlock' ) && (playerWarrior == 'mague' || playerWarrior == 'rogue') ) {
            playerHealth = playerHealth -15
            fight = 'You lose 15% health'
            document.getElementById("health-player").innerHTML = playerHealth
        } else if ( (playerWarrior == 'mague' || playerWarrior == 'priest' ) && (enemyWarrior == 'druid' || enemyWarrior == 'deathknight') ) {
            enemyHealth = enemyHealth -15
            fight = 'The enemy loses 15% health'
            document.getElementById("health-enemy").innerHTML = enemyHealth
        } else if ( (enemyWarrior == 'mague' || enemyWarrior == 'priest' ) && (playerWarrior == 'druid' || playerWarrior == 'deathknight') ) {
            playerHealth = playerHealth -15
            fight = 'You lose 15% health'
            document.getElementById("health-player").innerHTML = playerHealth
        } else {
            document.getElementById("health-player").innerHTML = playerHealth
            document.getElementById("health-enemy").innerHTML = enemyHealth
            fight = 'Draw'
        }
    } else if (playerAttack == 'WATER💧' && enemyAttack == "FIRE🔥"){
        enemyHealth = enemyHealth -15
        fight = 'The enemy loses 15% health'
        document.getElementById("health-enemy").innerHTML = enemyHealth   
    } else if (playerAttack == 'FIRE🔥' && enemyAttack == "EARTH🌱"){
        enemyHealth = enemyHealth -15
        fight = 'The enemy loses 15% health'
        document.getElementById("health-enemy").innerHTML = enemyHealth
    } else if (playerAttack == 'EARTH🌱' && enemyAttack == "WATER💧"){
        enemyHealth = enemyHealth -15
        fight = 'The enemy loses 15% health'
        document.getElementById("health-enemy").innerHTML = enemyHealth
    } else {
        playerHealth = playerHealth -15
        fight = 'You lose 15% health'
        document.getElementById("health-player").innerHTML = playerHealth
    }
}

function createMessage(){
    let messagesSection = document.getElementById('messages')
    let paragraph = document.createElement("p")
    paragraph.innerHTML = warriorName[playerWarrior]+" attacked with "+ playerAttack +". "+warriorName[enemyWarrior]+" attacked with "+ enemyAttack +". "+ fight
    messagesSection.appendChild(paragraph)
    
    if (enemyHealth < 0){ 
        alert("🎉🎉¡¡YOU WIN!!🎉🎉") 
        document.getElementById('button-fire').style.display = 'none'
        document.getElementById('button-water').style.display = 'none'
        document.getElementById('button-earth').style.display = 'none'
        document.getElementById('button-fire').disabled = true
        document.getElementById('button-water').disabled = true
        document.getElementById('button-earth').disabled = true
        document.getElementById('button-reset').style.display = 'block'
        document.getElementById('button-reset').disabled = false
        document.getElementById("health-enemy").innerHTML = "0"
    } 
    if (playerHealth < 0){ 
        alert("😞😞 YOU LOSE 😭😭") 
        document.getElementById('button-fire').style.display = 'none'
        document.getElementById('button-water').style.display = 'none'
        document.getElementById('button-earth').style.display = 'none'
        document.getElementById('button-fire').disabled = true
        document.getElementById('button-water').disabled = true
        document.getElementById('button-earth').disabled = true
        document.getElementById('button-reset').style.display = 'block'
        document.getElementById('button-reset').disabled = false
        document.getElementById("health-player").innerHTML = "0"
    } 
}

function restartGame(){
    location.reload()
}

window.addEventListener('load', initiateGame)
