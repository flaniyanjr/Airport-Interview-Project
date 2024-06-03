# Running the App
I completed this project using React. In order to run the app in the development mode, use either **npm start** or **yarn start**

# Design Decisions
In this section I'm going to list all of the files I created and talk about what they do/ my thought process behind them.

## File Paths
### src/components/App.js
- In this component I created fetch requests to retrieve the data for the aircrafts and flights from the API. 
- I also set state for 3 different variables and created 2 functions: 1 to add a flight to the rotation list and 1 to remove a flight from the rotation list.
- In the function to add a flight to the rotation list, I included a validation that creates an alert error if a flight either departs or arrives at midnight. I did this in order to satisfy the requirement that all aircrafts must be on the ground at midnight.

### src/components/Header.js
- Here I formatted the date and the titles for each column of data

### src/components/AircraftList.js
- First I created an array of all of the aircraft types, then created a unique array of types in order to filter out duplicates. (Even though I knew that, as the project README states, there was only 1 type of aircraft, I still included this code to show how to get a list of all aircraft types for a scenario where there are multiple)
- I then wrote code that calculated the total number of seconds for each flight in the rotation list and divided that by the total number of seconds in a day in order to calculate the utilisation percentage of the aircraft.

### src/components/RotationList.js
- Here I created cards for each flight in the rotation list and added them to the rotation box
- I also created a function to delete a flight from the rotation list. 
- I placed the delete button at the end of the rotation list and only allowed it to delete the most recent flight card that was added to the list in order to preserve the order of the flights (Ordered from earliest departure/ arrival time to latest departure/ arrival time)

### src/components/RotationCard.js
- Here I formatted the flight cards that were added to the rotation list

### src/components/FlightList.js
- Here I created cards for each flight in the flight list
- I also created a filtered list of flight cards that is only enabled when a flight has been added to the rotation list.
- The filtered list of flight cards only shows flights that depart from the airport of the previous flight's destination and also only shows flights that have a departure time that is at least 20 min after the previous flight's arrival time. (To satisfy the "turnaround time" and "aircrafts cannot teleport" requirements)
- I conditionally render the flight list based on if there are flights in the rotation list or not

### src/components/FlightCard.js
- This component formats the flight card and creates a function to handle the onClick on the button that adds the flight to the rotation list

### src/components/Timeline.js
- Here I attempted to create the timeline that dynamically updates when a flight is added or removed from the rotation list. 
- **I wasn't able to get the timeline working correctly but included 2 different code blocks (1 commented out and 1 not) that I created while trying to get it to work**
- The 1st code block correctly adds the first flight to the timeline, but doesn't add subsequent flights
- The 2nd code block successfully adds flights to the timeline and puts them in the correct spot, but it also increases the length of the timeline and creates more div elements than there should be

### src/styling/index.css
- Includes all of the styling for the app

# Potential Improvements
- One thing that could be improved is the validation I created to satisfy the requirement that all aircrafts must be on the ground at midnight (found in the 'addToRotation' function in App.js). The problem with the validation is that it doesn't work for a red eye flight (a flight that departs at night and arrives at the destination airport in the morning). Since a red eye flight could start at 11:00PM and end at 1:00AM, the aircraft would still be in the air at midnight. I wasn't sure if red eye flights were supposed to be considered for this validation, so I decided not to consider them.

- Another place for improvement is the timeline. As mentioned in the File Paths section, I wasn't able to successfully implement it.

- I didn't add extra styling in order to stay true to the wireframe, but adding in colors and extra effects could make the app look better