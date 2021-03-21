let raceNumber = Math.floor(Math.random() * 1000 + 1);
let earlyRegistration = true;
let runnerAge = 18 ;

if (earlyRegistration) {
raceNumber += 1000;}

if(runnerAge >= 18 && earlyRegistration == true && raceNumber >= 1000 ) {
console.log(`Your race starts at 9:30am and yout race numaber is ${raceNumber}`);
}else if(runnerAge >= 18 && earlyRegistration == false) {
  console.log(`Your race starts at 11:00am and your race number is ${raceNumber}`);
}else(runnerAge < 18 && earlyRegistration == false); {
  console.log(`Your race starts at 12:30pm and your race number is ${raceNumber}`);
}


