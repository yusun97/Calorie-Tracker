# Calorie-Tracker:bookmark:
Track your calories right now!

## Program Overview
- A cross-platform mobile app to track users' daily calorie and deployed with Expo
- Set up the smooth and responsive user interface using React Native and React Hooks
- Utilized Firebase to implement real-time meal entry lists based on user actions
- Implemented environment variables to ensure the security of the app

## Features of the program
1. Emails and passwords are used fro user authenauthentication and users will only see their own records
2. Two screens are shown in a bottom tab navigator and both show a list of meal entries. An entry will be automatically marked as over-limit if the consumed calories for an entry is more than 500
3. Tapping each entry item in the list (on both all and over-limit entries screens) navigate to Edit Entry screen and marking an entry as reviewed will remove it from over-limit entries screen. There is also a button to delete one entry.
4. From both All Entries and over-limit Entries screens, users can navigate to Add An Entry screen by pressing on a header button. Add An Entry screen shows a form to the user to add an entry item with calories and description values.
5. It will validate user's entry (e.g. no negative number, or letters for amount, no empty submission,...) and show an alert to the user in case of invalid data.
6. Users can sign out by pressing the exit button

## How to Run this APP
1. Install Node.js
2. Install Expo Go on your personal phone
3. Create your own cloud database on Firebase website
4. Use VSCode to open the project and enter command line `npx expo start --tunnel`
5. Scan the barcode using the camera of your phone

## How to interact with the program
- Login In and Sign Up</br>
  <img src="https://user-images.githubusercontent.com/113145079/225534307-16d08b16-f60a-417d-a32a-5fd99966fcfb.PNG" width="300px"> <img src="https://user-images.githubusercontent.com/113145079/225534362-c51cd6e3-fd61-410b-afee-e259d82c9a28.PNG" width="300px"></br>
- All Meal Entries List and Over-limit Entries List, when click different tabs of the bottom navigator</br>
  <img src="https://user-images.githubusercontent.com/113145079/225534579-3332f2bd-aa04-4c78-a052-52deb8e9b062.PNG" width="300px"> <img src="https://user-images.githubusercontent.com/113145079/225534706-7c92c34b-37cf-46a8-9f95-c88ce2af4102.PNG" width="300px"></br>
- Add a new entry, when click the "+" button</br>
  <img src="https://user-images.githubusercontent.com/113145079/225534760-81613d15-0334-4b37-92bf-39702644da48.PNG" width="300px"></br>
- Edit one entry, when tapping each entry on both all and over-limit screens</br>
  For each non-over-limit entry, users can delete it</br>
  <img src="https://user-images.githubusercontent.com/113145079/225731568-542c4b7f-9b97-4d1e-ad59-5499615dfe05.PNG" width="300px"></br>
  For each new over-limit entry, users can review it or delete it</br>
  <img src="https://user-images.githubusercontent.com/113145079/225534829-fb01ad15-5f97-4a99-9993-da363ea68c7e.PNG" width="300px"></br>
  when press the "✔️" button, a message will be shown</br>
  <img src="https://user-images.githubusercontent.com/113145079/225728116-6fa4d757-cd5f-4ad1-9ce5-c6781c893c86.PNG" width="300px"></br>
  when press "yes", it will be marked as reviewed and then be removed from over-limit entries screen</br>
  <img src="https://user-images.githubusercontent.com/113145079/225728424-6219ae6c-4208-48d6-8066-035a880d53bd.PNG" width="300px"></br>
  when press the delete button, a message will be shown</br>
    <img src="https://user-images.githubusercontent.com/113145079/225728619-fdae629c-e6ac-453e-8f6f-a4bd55cc9d19.PNG" width="300px"></br>
- Sign out, when click the "exit" button on the header</br>
  <img src="https://user-images.githubusercontent.com/113145079/225535312-7a851c29-bc03-4326-b31b-bbeda4a394d1.PNG" width="300px"></br>
- Notice that users will only access to their own records</br>
  <img src="https://user-images.githubusercontent.com/113145079/225728952-2e7b8f5e-bbd4-40e9-9fe4-29fa893d0369.PNG" width="300px"> <img src="https://user-images.githubusercontent.com/113145079/225728961-988005fb-f5ac-45bc-a593-f0efa409d4b4.PNG" width="300px"></br>
  <img src="https://user-images.githubusercontent.com/113145079/225728956-d768391e-a220-40b5-ad5d-326af7597b9a.PNG" width="300px"> <img src="https://user-images.githubusercontent.com/113145079/225728957-ab34e0b3-10fd-4256-9048-e40f0135f8c8.PNG" width="300px"></br>
