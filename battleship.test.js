const { Ship, Gameboard, Player } = require("./battleship");

const myShip = new Ship(3, [0,0], "vertical");
const gb = new Gameboard(10);

test("Show health of ship", () => {
    expect(myShip.showHealth()).toBe(3);
});

// test("Access board in Gameboard class", () => {
//     expect(gb.logBoard()).toBe(gb.board);
// })

test("Create new ship and return coordinates", () => {
    expect(myShip.setCoordinates()).toEqual([[0,0], [0,1], [0,2]]);
})