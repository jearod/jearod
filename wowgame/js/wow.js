//global variables

//initiateGame
				
			   
let warriorFlag
const buttonWater = document.getElementById('button-water')
const buttonFire = document.getElementById('button-fire')
const buttonEarth = document.getElementById('button-earth')
const buttonReset = document.getElementById('button-reset')
const attackSection = document.getElementById("attack-section")
const buttonSelect = document.getElementById('button-select')

//selectWarriorPlayer
const warriorsIds = ['druid','deathknight','mague','priest','warlock','rogue']
const warriorNames = { druid: "Druid 🌱🌱💧", deathknight: "Death Knight 🔥🔥💧", mague: "Mague 💧💧🔥", priest: "Priest 💧💧🌱", warlock: "Warlock 🔥🔥🌱", rogue: "Rogue 🌱🌱🔥"}
const warriorName = { druid: "Druid", deathknight: "Death Knight", mague: "Mague", priest: "Priest", warlock: "Warlock", rogue: "Rogue"}
let playerWarrior
let enemyWarrior
const healthPlayer = document.getElementById("health-player")
																																																					 
																																	  

						

				   

					   
const healthEnemy = document.getElementById("health-enemy")
let playerHealth
let enemyHealth
let attacks

//combat
let fight
let playerAttack
let enemyAttack

//createMessage
																  
const messagesSection = document.getElementById('messages')
const paragraph = document.createElement("p")

function initiateGame(){
	warriorFlag = 1
	//warrior selection
	buttonSelect.addEventListener('click', selectWarriorPlayer) 
	//attacks
	buttonFire.addEventListener('click', attackFire) 
	buttonWater.addEventListener('click', attackWater) 
	buttonEarth.addEventListener('click', attackEarth)        
	//reload
	buttonReset.style.display = 'none'
	buttonReset.disabled = true
	buttonReset.addEventListener('click', restartGame)
	//attack section
	attackSection.style.display = 'none'
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
			healthPlayer.innerHTML = playerHealth

			alert("Enemy has selected "+ warriorNames[enemyWarrior])
			document.getElementById("image-enemy").src = "assets/"+enemyWarrior+".jpg"
			document.getElementById("warrior-enemy").innerHTML = warriorNames[enemyWarrior]
			healthEnemy.innerHTML = enemyHealth

			document.getElementById("warrior-section").style.display = 'none'
			attackSection.style.display = 'flex'
			buttonSelect.disabled = true        
			document.getElementById("subtittle2").style.color = "#F90716"
			document.getElementById("subtittle2").style.backgroundColor = 'revert'

			warriorFlag = 0
			if (warrior == 'druid'){
				buttonFire.style.display = 'none'
				buttonFire.disabled = true
			} else if (warrior == 'deathknight'){
				buttonEarth.style.display = 'none'
				buttonEarth.disabled = true
			} else if (warrior == 'mague'){
				buttonEarth.style.display = 'none'
				buttonEarth.disabled = true
			} else if (warrior == 'priest'){
				buttonFire.style.display = 'none'
				buttonFire.disabled = true
			} else if (warrior == 'warlock'){
				buttonWater.style.display = 'none'
				buttonWater.disabled = true
			} else if (warrior == 'rogue'){
				buttonWater.style.display = 'none'
				buttonWater.disabled = true
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
		healthPlayer.innerHTML = playerHealth
		healthEnemy.innerHTML = enemyHealth
		fight = 'Draw'
	}  else if (playerAttack == enemyAttack ){
		if ( (playerWarrior == 'druid' || playerWarrior == 'rogue' ) && (enemyWarrior == 'priest' || enemyWarrior == 'warlock') ) {
			enemyHealth = enemyHealth -15
			fight = 'The enemy loses 15% health'
			healthEnemy.innerHTML = enemyHealth
		} else if ( (enemyWarrior == 'druid' || enemyWarrior == 'rogue' ) && (playerWarrior == 'priest' || playerWarrior == 'warlock') ) {
			playerHealth = playerHealth -15
			fight = 'You lose 15% health'
			healthPlayer.innerHTML = playerHealth
		} else if ( (playerWarrior == 'deathknight' || playerWarrior == 'warlock' ) && (enemyWarrior == 'mague' || enemyWarrior == 'rogue') ) {
			enemyHealth = enemyHealth -15
			fight = 'The enemy loses 15% health'
			healthEnemy.innerHTML = enemyHealth
		} else if ( (enemyWarrior == 'deathknight' || enemyWarrior == 'warlock' ) && (playerWarrior == 'mague' || playerWarrior == 'rogue') ) {
			playerHealth = playerHealth -15
			fight = 'You lose 15% health'
			healthPlayer.innerHTML = playerHealth
		} else if ( (playerWarrior == 'mague' || playerWarrior == 'priest' ) && (enemyWarrior == 'druid' || enemyWarrior == 'deathknight') ) {
			enemyHealth = enemyHealth -15
			fight = 'The enemy loses 15% health'
			healthEnemy.innerHTML = enemyHealth
		} else if ( (enemyWarrior == 'mague' || enemyWarrior == 'priest' ) && (playerWarrior == 'druid' || playerWarrior == 'deathknight') ) {
			playerHealth = playerHealth -15
			fight = 'You lose 15% health'
			healthPlayer.innerHTML = playerHealth
		} else {
			healthPlayer.innerHTML = playerHealth
			healthEnemy.innerHTML = enemyHealth
			fight = 'Draw'
		}
	} else if (playerAttack == 'WATER💧' && enemyAttack == "FIRE🔥"){
		enemyHealth = enemyHealth -15
		fight = 'The enemy loses 15% health'
		healthEnemy.innerHTML = enemyHealth   
	} else if (playerAttack == 'FIRE🔥' && enemyAttack == "EARTH🌱"){
		enemyHealth = enemyHealth -15
		fight = 'The enemy loses 15% health'
		healthEnemy.innerHTML = enemyHealth
	} else if (playerAttack == 'EARTH🌱' && enemyAttack == "WATER💧"){
		enemyHealth = enemyHealth -15
		fight = 'The enemy loses 15% health'
		healthEnemy.innerHTML = enemyHealth
	} else {
		playerHealth = playerHealth -15
		fight = 'You lose 15% health'
		healthPlayer.innerHTML = playerHealth
	}
}

function createMessage(){
															 
											   
	paragraph.innerHTML = warriorName[playerWarrior]+" attacked with "+ playerAttack +". "+warriorName[enemyWarrior]+" attacked with "+ enemyAttack +". "+ fight
	messagesSection.appendChild(paragraph)
	
	if (enemyHealth < 0){ 
		alert("🎉🎉¡¡YOU WIN!!🎉🎉") 
		buttonFire.style.display = 'none'
		buttonWater.style.display = 'none'
		buttonEarth.style.display = 'none'
		buttonFire.disabled = true
		buttonWater.disabled = true
		buttonEarth.disabled = true
		buttonReset.style.display = 'block'
		buttonReset.disabled = false
		healthEnemy.innerHTML = "0"
	} 
	if (playerHealth < 0){ 
		alert("😞😞 YOU LOSE 😭😭") 
		buttonFire.style.display = 'none'
		buttonWater.style.display = 'none'
		buttonEarth.style.display = 'none'
		buttonFire.disabled = true
		buttonWater.disabled = true
		buttonEarth.disabled = true
		buttonReset.style.display = 'block'
		buttonReset.disabled = false
		healthPlayer.innerHTML = "0"
	} 
}

function restartGame(){
	location.reload()
}

window.addEventListener('load', initiateGame)
