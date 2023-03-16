# Calorie-Tracker:bookmark:
Track your calories right now!

## Program Overview
- A cross-platform mobile app to track users' daily calorie and deployed with Expo
- Set up the smooth and responsive user interface using React Native and React Hooks
- Utilized Firebase to implement real-time meal entry lists based on user actions
- Implemented environment variables to ensure the security of the app

## Features of the program
1. Emails and passwords are used fro user authenauthentication
2. Two screens are shown in a bottom tab navigator and both show a list of meal entries. An entry will be automatically marked as over-limit if the consumed calories for an entry is more than 500
4. Tapping each entry item in the list (on both all and over-limit entries screens) navigate to Edit Entry screen and marking an entry as reviewed will remove it from over-limit entries screen. There is also a button to delete one entry.
5. From both All Entries and over-limit Entries screens, users can navigate to Add An Entry screen by pressing on a header button. Add An Entry screen shows a form to the user to add an entry item with calories and description values.
6. It will validate user's entry (e.g. no negative number, or letters for amount, no empty submission,...) and show an alert to the user in case of invalid data. 
7. Users can sign out by pressing the exit button

## How to Run this APP
1. Install Node.js
2. Install Expo Go on your personal phone
3. Create your own cloud database on Firebase website
4. Use VSCode to open the project and enter command line ```npx expo start --tunnel```
5. Scan the barcode using the camera of your phone

## How to interact with the program
- Login In and Sign Up.  
<img src="https://user-images.githubusercontent.com/113145079/225534307-16d08b16-f60a-417d-a32a-5fd99966fcfb.PNG" width="300px">  <img src="https://user-images.githubusercontent.com/113145079/225534362-c51cd6e3-fd61-410b-afee-e259d82c9a28.PNG" width="300px">. 
- All Meal Entries List and Over-limit Entries List, when click different tabs of the bottom navigator.  
<img src="https://user-images.githubusercontent.com/113145079/225534579-3332f2bd-aa04-4c78-a052-52deb8e9b062.PNG" width="300px">  <img src="https://user-images.githubusercontent.com/113145079/225534706-7c92c34b-37cf-46a8-9f95-c88ce2af4102.PNG" width="300px">. 
- Add a new entry, when click the "+" button.   
<img src="https://user-images.githubusercontent.com/113145079/225534760-81613d15-0334-4b37-92bf-39702644da48.PNG" width="300px">.   
- Edit one entry to review it or delete it, when tapping each entry on both all and over-limit screens.    
<img src="https://user-images.githubusercontent.com/113145079/225534829-fb01ad15-5f97-4a99-9993-da363ea68c7e.PNG" width="300px">.     
- Sign out, when click the "exit" button on the header.     
<img src="https://user-images.githubusercontent.com/113145079/225535312-7a851c29-bc03-4326-b31b-bbeda4a394d1.PNG" width="300px">.   


