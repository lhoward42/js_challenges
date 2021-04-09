
let house = {
    rooms :[{
            name: "bedroom",
            doors: 3,
            windows: 4,
            flooring: "carpet",
            curerent_occupants: []
        },{
            name: "bath",
            doors: 3,
            windows: 4,
            flooring: "tile",
            curerent_occupants: []
            
        },{
            name: "kitchen",
            doors: 3,
            windows: 4,
            flooring: "hardwood",
            curerent_occupants: []
            
        }],
    people: [{
            name: "Justin",
            age: 28
        },{
            name: "Tony",
            age: 8
        }]
}
console.log(house.rooms[1].name);
console.log(house.rooms.map((item) => item.name));
console.log(house.rooms.map(room => room.name));

house.rooms[2].current_occupants = house.people
console.log(house.rooms[2])