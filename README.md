# TODO List with React + TypeScript + Vite

## Get started

### Install all dependencies
```
yarn
 ```

### Run the application

```
yarn dev

 ```
### Run tests

```
yarn test
 ```

## Description

This is an example project and it was created by using Vite, React, Typescript and Vitest.

The directories are organized as atomic design structure:
  - atoms (Button, Card, Check, Input)
  - molecules (TaskItem)
  - organisms (TaskList and InsertBar)
  - pages (App)

Those simplest components that are nearest the html as is, were added in `atoms` (like it says). A hybrid component containing two or more atoms and others functions were added in `molecules` (taskItem) and more complex components containing two or more `molecules` were added in organisms

Some hooks were added to handle few cases like manipulating local storage and window size event. They are located into `hooks` folder inside `src` folder.

The current state of this application is:
- Possible to add new tasks
- Delete tasks
- Check and uncheck tasks

All state is saving in real time on local storage, so the application state won't be lost if the page is closed ou reloaded.

Though unit tests were not implemented for all components, there is an example created for `Button` component located at: `src/atoms/Button.test.tsx`

## Here are some screenshots and videos of this project

### Desktop

https://github.com/VictorLopes/to-do-list-example/assets/3814530/340c7c36-de8e-4823-9f01-ba2ee841bef8

### Mobile

https://github.com/VictorLopes/to-do-list-example/assets/3814530/f56a2225-82fb-4d02-a846-431e319dcf08

### Unit test example

![test](https://github.com/VictorLopes/to-do-list-example/assets/3814530/e80060ba-b03b-40ac-9b41-c462952286ca)
