# React Hooks Tutorial

## Task:

The app should consist of the following:

Homepage page

- [ ]the homepage should use the useState hook to keep track of the name and age variables
- [ ] the page should also use the useEffect hook inside of which, if a name has been provided a call to the api should be made to retrieve the predicted age
- [ ] on this page should be an input field that allows a user to enter a name
  - [ ] this field and its submission should be handled by react hook forms
  - [ ] if a user tries to submit an empty field or name that is less than 3 letters an error message should display
- [ ] if a name has not been provided an instructional message should be rendered
- [ ] if a name has been provided the AgeInformationCard component should display

- AgeInformationCard component

  - [ ] this component is a simple component that should display the following text: "Paul's is 50 years old" where the name and age are the provided by the state of the homepage component.

- [ ] The app should use the https://agify.io/ api to predict the age of the user

## Useful Links

[React Hook Forms](https://react-hook-form.com/get-started/)
