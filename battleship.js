

class Ship {
    constructor(length, start, orientation="horizontal") { //start in the form of coordinates [x,y]
        this.length = length;
        this.hits = 0;
        this.sunk = false;
        this.start = start; //[x,y]
        this.orientation = orientation; //horizontal or vertical
        this.coordinates = []; //Graphics coordinates system: 0,0 is at the top-left corner (not cartesian plane)
    }

    accessCoordinates () {
        return this.coordinates;
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
        let start_x = this.start[0];
        let start_y = this.start[1];
        if (this.orientation == "vertical") {
            for (let i = 0; i < this.length; i++) {
                this.coordinates.push([start_x, start_y + i]);
            }
        }
        else if (this.orientation == "horizontal") {
            for (let i = 0; i < this.length; i++) {
                this.coordinates.push([start_x + i, start_y]);
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
    constructor(dimensions=10) {
        this.dimensions = dimensions;
        this.board = {};
        for (let i = 0; i < dimensions; i++) {
            for (let j = 0; j < dimensions; j++) {
                let new_coordinate = `${i},${j}`;
                this.board[new_coordinate] = {
                    coordinates: [i,j],
                    status : "safe"
                };
            }
        }
        this.ship_dict = [];
        this.number_of_ships = 5; //Each side has 5 ships
        this.ships_sunk = 0;
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

        //Access coordinate in this.board and changes status to "hit", if status is already "hit", return
        let coordinate = `${x},${y}`;
        if (this.board[coordinate].status == "hit") {
            return 1;
        }
        else {
            this.callHitOnTargetShip([x,y]);
            this.board[coordinate].status = "hit";
        }

    }

    callHitOnTargetShip(coords) { //coords in an array [x,y]
        this.ship_dict.forEach((ship) => {
            let ship_coordinates_array = ship.accessCoordinates();
            ship_coordinates_array.forEach((coordinate) => {
                if (coordinate[0] == coords[0] && coordinate[1] == coords[1]) {
                    ship.hit();
                    //Check if sunk
                    let ship_isSunk = ship.isSunk();
                    if (ship_isSunk == true) {
                        //Log number of sunken ships
                        this.ships_sunk += 1;
                        if (this.ships_sunk == this.number_of_ships) {
                            this.gameOver();
                        }
                    }
                    return ship;
                }
            });
            
        })
    }
    
    gameOver() {
        //TODO: Game over function
        return "Game over!";
    }

    logBoard() {
        console.log(this.board);
        return this.board;
    }

}

class Player {
    //there should be a computer player and human player
    //each player should have their own gameboard
}

module.exports = { Ship, Gameboard, Player};