class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    hit() {
        this.hit += 1;
    }

    isSunk() {
        if (this.hits >= this.length) {
            this.sunk = true;
        }
    }

    showHealth() {
        return this.length - this.hits;
    }

}

class Gameboard {
    constructor(dimensions) {
        this.dimensions = dimensions;
    }

    receiveAttack(x,y) {
        //Takes coordinates, determines whether attack hit any ship
        //calls Ship.hit() to appropriate ship
        //records coordinate of the hit
    }

}

class Player {
    //there should be a computer player and human player
    //each player should have their own gameboard
}

module.exports = { Ship, Gameboard, Player};