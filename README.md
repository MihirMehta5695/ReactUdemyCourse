# ReactUdemyCourse
# Create React App by following below commands

* npm install -g create-react-app
* create-react-app {app-name}
> For Example:
>create-react-app react-complete-guide --scripts-version 1.1.5
* cd {my-app}
* npm start

[Create React App](https://create-react-app.dev/docs/getting-started/)

## First React Assignment:

- [ ]   Create TWO new components: UserInput and UserOutput
- [ ]   UserInput should hold an input element, UserOutput two paragraphs
- [ ] Output multiple UserOutput components in the App component (any paragraph texts of your choice)
- [ ] Pass a username (of your choice) to UserOutput via props and display it there
- [ ] Add state to the App component <i> (=> the username) </i> and pass the username to the UserOutput component
- [ ] Add a method to manipulate the state <i> (=> an event-handler method) </i>
- [ ] Pass the event-handler method reference to the UserInput component and bind it to the input-change event
- [ ] Ensure that the new input entered by the user overwrites the old username passed to UserOutput
- [ ] Add two-way-binding to your input (in UserInput) to also display the starting username
- [ ] Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets