//global variables
let playerAttack
let enemyAttack
let playerLifes
let enemyLifes
let petFlag
let fight

function initiateGame(){
    let attackSection = document.getElementById("attack-selection")
    attackSection.style.display = 'none'
    let buttonPetPlayer = document.getElementById('button-pets')
    let buttonFire = document.getElementById('button-fire')
    let buttonWater = document.getElementById('button-water')
    let buttonEarth = document.getElementById('button-earth')
    let buttonRestart = document.getElementById('button-reset')
    petFlag = 1

    //pet selection
    buttonPetPlayer.addEventListener('click', selectPetPlayer) 

    //attacks
    buttonFire.addEventListener('click', attackFire) 
    buttonWater.addEventListener('click', attackWater) 
    buttonEarth.addEventListener('click', attackEarth) 

    //reload
    buttonRestart.style.display = 'none'
    buttonRestart.addEventListener('click', restartGame)

}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function selectPetPlayer(){
    let spanPetPlayer = document.getElementById("pet-player")
    let spanPetEnemy = document.getElementById("pet-enemy")
    let petsIds = ['hipodoge','capipepo','ratigueya','langostelvis','tucapalma','pydos']
    let enemyPet = petsIds[rand(0,5)]
    let attackSection = document.getElementById("attack-selection")
    let petSection = document.getElementById("pet-selection")
    
    playerLifes = 4
    enemyLifes = 4
    
    for (let pet of petsIds){
        if ( document.getElementById(pet).checked == true){
            alert("you have selected "+  pet.charAt(0).toUpperCase() + pet.slice(1))
            spanPetPlayer.innerHTML = pet.charAt(0).toUpperCase() + pet.slice(1)
            alert("Enemy has selected "+ enemyPet.charAt(0).toUpperCase() + enemyPet.slice(1))
            spanPetEnemy.innerHTML = enemyPet.charAt(0).toUpperCase() + enemyPet.slice(1)
            document.getElementById('button-pets').disabled = true
            combat()
            attackSection.style.display = 'block'
            petSection.style.display = 'none'
            petFlag = 0
        }
    }
    if (petFlag == 1) {
        alert("Please select a pet")
    }
    
}

function attackFire(){
    if (petFlag == 1) {
        alert("Please select a pet")
    } else {
        playerAttack = 'FIRE🔥'
        enemyAttackAction()
    }
}

function attackWater(){
    if (petFlag == 1) {
        alert("Please select a pet")
    } else {
        playerAttack = 'WATER💧'
        enemyAttackAction()
    }
}

function attackEarth(){
    if (petFlag == 1) {
        alert("Please select a pet")
    } else {
        playerAttack = 'EARTH🌱'
        enemyAttackAction()
    }
}

function enemyAttackAction(){
    let attacks = ['FIRE🔥','WATER💧','EARTH🌱']
    enemyAttack = attacks[rand(0,2)]
    combat()
    createMessage()


}

function combat(){

    if ( playerLifes == null ){
        alert("Please select a Pet")
        document.getElementById("attack-player").innerHTML = ''
        document.getElementById("attack-enemy").innerHTML = ''
    } else if (playerAttack == enemyAttack ){
        document.getElementById("lifes-player").innerHTML = playerLifes
        document.getElementById("lifes-enemy").innerHTML = enemyLifes
        fight = 'Draw'
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
    if (enemyLifes == 0){ 
        alert("🎉🎉¡¡WINNER!!🎉🎉") 
        document.getElementById('button-fire').disabled = true
        document.getElementById('button-water').disabled = true
        document.getElementById('button-earth').disabled = true
        document.getElementById('button-reset').style.display = 'block'
    } 
    if (playerLifes == 0){ 
        alert("😞😞 LOSER 😭😭") 
        document.getElementById('button-fire').disabled = true
        document.getElementById('button-water').disabled = true
        document.getElementById('button-earth').disabled = true
        document.getElementById('button-reset').style.display = 'block'
    } 
}

function createMessage(){
    let messagesSection = document.getElementById('messages')
    let paragraph = document.createElement("p")
    paragraph.innerHTML = "Your pet attacked with "+ playerAttack +". The enemy's pet attacked with "+ enemyAttack +". "+ fight
    messagesSection.appendChild(paragraph)
}

function restartGame(){
    location.reload()
}

window.addEventListener('load', initiateGame)
