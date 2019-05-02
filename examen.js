let random = () =>{
	let prob = [1, 1, -1, -1, 2, 2, 2, 2, 3, 3]
	let num = Math.floor(Math.random() * prob.length)
	return prob[num]
}

class Player {
	constructor(value){
		this.number = value
		this.name = null
		this.position = 1
	}

	setName(name){this.name = name}
	setPosition(pos){this.position = pos}

	getNumber(){return this.number}
	getName(){return this.name}
	getPosition(){return this.position}

	move(){
		let pos = this.getPosition() + random()
		this.setPosition(pos)
		
	}	

}


let p1 = new Player(1)
let p2 = new Player(2)

p1.setName("corr1")
p2.setName("corr2")


do{
	console.log(`${p1.getName()} está en ${p1.getPosition()}`)
	console.log(`${p2.getName()} está en ${p2.getPosition()}`)
	p1.move()
	p2.move()
	if (p1.getPosition() >= 100) {
			console.log(`ganó ${p1.getName()}`)
		}
	else if (p2.getPosition() >= 100) {
			console.log(`ganó ${p2.getName()}`)
		}
}while(p1.getPosition() < 100 && p2.getPosition() < 100)


