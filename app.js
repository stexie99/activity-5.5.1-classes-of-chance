class Casino {
    constructor(name){
        this.name = name;
        this.timesPlayed = 0;
    }
    playGame(betAmount){
        if(Math.random()<=0.5){
            console.log(`${this.name} wins!`)
        } else {
            console.log(`Player wins ${betAmount*(this.timesPlayed + 1)} dollars!`)
        }
        this.timesPlayed += 1 
        // console.log(this.timesPlayed)
    }
    // Write code here
};

// TESTS
const myCasino = new Casino("HackerU Casino");
console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);


