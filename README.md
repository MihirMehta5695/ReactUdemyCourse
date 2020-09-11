# ReactUdemyCourse

# Create React App by following below commands

- npm install -g create-react-app
- create-react-app {app-name}
  > For Example:
  > create-react-app react-complete-guide --scripts-version 1.1.5
- cd {my-app}
- npm start

[Create React App](https://create-react-app.dev/docs/getting-started/)

## First React Assignment: The base syntax

- [x] Create TWO new components: UserInput and UserOutput
- [x] UserInput should hold an input element, UserOutput two paragraphs
- [x] Output multiple UserOutput components in the App component (any paragraph texts of your choice)
- [x] Pass a username (of your choice) to UserOutput via props and display it there
- [x] Add state to the App component <i> (=> the username) </i> and pass the username to the UserOutput component
- [x] Add a method to manipulate the state <i> (=> an event-handler method) </i>
- [x] Pass the event-handler method reference to the UserInput component and bind it to the input-change event
- [x] Ensure that the new input entered by the user overwrites the old username passed to UserOutput
- [x] Add two-way-binding to your input (in UserInput) to also display the starting username
- [x] Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets

## Second React Assignment: Lists & Conditionals

- [x] Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).
- [x] Create a new component (=> ValidationComponent) which receives the text length as a prop
- [x] Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)
- [x] Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
- [x] Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.
- [x] When you click a CharComponent, it should be removed from the entered text.

> Hint: Keep in mind that JavaScript strings are basically arrays!

## Third React Assignment: React Routing

- [x] Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)
- [x] Add a simple navigation with two links => One leading to "Users", one leading to "Courses"
- [x] Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)
- [x] Pass the course ID to the "Course" page and output it there
- [x] Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)
- [x] Load the "Course" component as a nested component of "Courses"
- [x] Add a 404 error page and render it for any unknown routes
- [x] Redirect requests to /all-courses to /courses (=> Your "Courses" page)
