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
