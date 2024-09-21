const { Ship, Gameboard, Player } = require("./battleship");

const myShip = new Ship(3)

test("Show health of ship", () => {
    expect(myShip.showHealth()).toBe(3);
});
