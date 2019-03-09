const struggleBus = [];

// const addToExactMiddle = (bus, passenger) => {
//   var middle = bus.length / 2;
//   bus.splice(middle, 0, passenger);
//   return bus;
// };

const addToExactMiddle = (bus, passenger) => {
  const newArray = [];
  let middle = bus.length / 2;
  newArray.push(struggleBus.splice(middle, 0, passenger));
}


const addPassenger = (name, wallet, isStruggling, seat) => {
  // make a passenger object
  // add it on the bus
  const passenger = {
    name: name,
    wallet: wallet,
    isStruggling: isStruggling,
  };

  if (seat === 'back') {
    struggleBus.push(passenger);
  } else if (seat === 'front') {
    struggleBus.unshift(passenger);
  } else if (seat === 'middle') {
    addToExactMiddle(struggleBus, passenger);
  }

};

const unloadPassenger = (bus, seat) => {
  // remove a passenger from the bus
  // return the passenger object
  if (seat === 'front') {
    return bus.shift();
  } else if (seat === 'back') {
    return bus.pop();
  }
};

const allAboard = (bus) => {
  // loop over passengers
  // given bus costs 5 bucks
  // if passenger can afford it, charge them
  // if not, kick them off
  const busFare = 0;
  const validPassengers = [];
  
  bus.forEach((passenger) => {
    if (passenger.wallet >= busFare) {
      passenger.wallet -= busFare;
      validPassengers.push(passenger);
    }
  });

  return(validPassengers);
};

const printToDom = (divId, textToPrint) => {
  selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const busBuilder = (bus) => {
  //build domString from bus parameter
  let domString = '';
  for (var i = 0; i < bus.length; i++) {
    domString += `<div class="bus-seat">`;
    domString +=   `<h4>${bus[i].name}</h4>`;
    domString +=   `<p>${bus[i].wallet}</p>`;
    domString +=   `<p>${bus[i].isStruggling}</p>`;
    domString += `</div>`;
  };
  printToDom('the-bus', domString);
};

const init = () => {
  addPassenger('Michael',3, true, 'front');
  addPassenger('Steve', 25, true, 'front');
  addPassenger('Zoe', 20, false, 'back');
  addPassenger('Greg', 4, false, 'back');
  addPassenger('Saul', 12, true, 'middle');

  // const firstPassenger = unloadPassenger(struggleBus, 'front');
  // console.log(firstPassenger);

  const busPeople = allAboard(struggleBus);

  // console.log(addToExactMiddle(struggleBus));

  busBuilder(struggleBus);
};

init();
