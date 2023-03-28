# TDD Test Doubles Workshop: HVAC Exercise

You are part of the development team at Alice’s HVACs 4U. The hardware team has just designed a cutting edge HVAC system consisting of a heater, cooler, thermostat, and fan that all work in conjunction with each other. Fancy!

Your team is tasked with writing the thermostat code that will control the elements of the HVAC system and maintain a comfortable temperature in the room.

## Installation & Setup
- Requirements: [node](https://nodejs.org/en/)
- Clone this repo & install dependencies:
`npm -g i`
- Run the app:
`hvac`
- Run tests:
`npm test`

## Implementation Rules

The rules for heating and cooling a room are pretty straightforward:
- Keep the room temperature between 65 and 75 degrees at all times.
- If you want to heat the room, you need to turn on both the fan and the heater.
- If you want to cool the room, you need to turn on both the fan and the cooler.
- The room temperature changes by one degree per minute.

## System Quirks

Unfortunately, the realities of complex day-to-day development means there are a few quirks you need to think about as you write your code:
- The thermostat has a lot of lag meaning that you can take an action once per minute. Any faster and it will explode.
- After the heater is turned off, the fan stalls. You can’t turn on the fan for five minutes after the heat is turned off or it will explode.
- After the cooler is turned off, the fan stalls. You can’t turn on the fan for three minutes after the cooler is turned off or it will explode.
- It is dangerous to turn on the heater or cooler without the fan. They will explode...
