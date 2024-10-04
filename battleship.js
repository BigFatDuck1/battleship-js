

class Ship {
    constructor(length, start, orientation) { //start in the form of coordinates [x,y]
        this.length = length;
        this.hits = 0;
        this.sunk = false;
        this.start = start; //[x,y]
        this.orientation = orientation; //horizontal or vertical
        this.coordinates = [];
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

    setCoordinates(){
        if (this.orientation == "vertical") {
            for (let i = 0; i < this.length; i++) {
                this.coordinates.push([start[0], start[1] + i]);
            }
        }
        else if (this.orientation == "horizontal") {
            for (let i = 0; i < this.length; i++) {
                this.coordinates.push([start[0] + i, start[1]]);
            }
        }

        return this.coordinates;
    }

    toggleRotation() {
        if (this.orientation == "vertical") {
            this.orientation = "horizontal";
        }
        else if (this.orientation == "horizontal") {
            this.orientation = "vertical";
        }
    }



}

class Gameboard {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.board = [];
        for (let i = 0; i < dimensions; i++) {
            for (let j = 0; j < dimensions; j++) {
                this.board.push([i,j]);
            }
        }
        this.ship_dict = [];
    }

    newShip(x,y,length, orientation) { //Ship(length, start, orientation)
        let start_coordinates = [x,y];
        let new_ship = new Ship(length, start_coordinates, orientation);
        new_ship.setCoordinates();
        this.ship_dict.push(new_ship);

        return new_ship;
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