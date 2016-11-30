//Mommy
for (var count = 0; count <= 100; count++){
	console.log("There are" + " "+ count +" "+ "carrots.");
}

//NoahArc
for (var animalCount = 0; animalCount < 6; animalCount++){
	console.log("There are" +" "+ animalCount+" "+ "many animals in Noahs Arc.");
}

//HipHopHorray
var partyAnimals = ["Bunny","Zebra","Lion","Giraffe","Monkey"]
for (a = 0; a < 6; a++){
	console.log("I have a" + " "+ partyAnimals[a]);
}

//Merlin
var weaponChest = ["Mace", "Sorcerer's Stone", "Excalibur"];
var hero = {
	wizard : "Merlin",
	weapon : weaponChest[2],
	power : 2
}
function War(weapon){
	if(hero.wizard=="Merlin" && hero.weapon=="Excalibur"){
		console.log(hero.wizard+" "+ "shall slay the dragon with the"+" "+ hero.weapon);
	}else if(weaponChest[1]){
		console.log(hero.wizard+" "+"is ready for war with the"+" "+ hero.weapon);
	}
}

War(hero.weapon);