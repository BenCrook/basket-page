# --- Basket Page ---

Compiled code is in the `/build` directory.

## How To View (not using Create React App)
1. Start your server of choice (e.g [indexzero/http-server](https://github.com/indexzero/http-server) or [zeit/serve](https://github.com/zeit/serve)) in the `/build` directory
2. Access the URL and you should see the app.

## How To View (using Create React App)
Providing you have Node, NPM, and Yarn installed the below should 'just work'.

1. From the root of this project run `npm install && npm run build && yarn global add serve && serve -s build`
2. Navigate to [http://localhost:5000](http://localhost:5000) (or whatever URL the CLI tool returns)


## Technologies Used
* Create React App
  * React
  * Typescript
  * CSS Modules
* Normalize.css

I chose to use React as it makes building and managing the UI and state much easier, and I used Create React App as it saves a lot of time setting up the related tooling such as Webpack and Babel.

I’m a big fan of CSS modules as the scoped CSS really helps avoid increasing the specificity and makes naming selectors a breeze.


## Exclusions - Things I have ignored from the design
* Quantity input is using the Gotham font and a different colour, and weight I presume it isn’t intentional
* I didn’t use an image for the + and - as I think it’s better to use + and - text to save downloading 2 images
* Header border doesn’t overlap as per the design, not sure if this was intention. 

## Incomplete - I ran out of time before completing these
* The progress step shapes, I would try and create these shapes in CSS and failing that use an SVG.
* Remove link hover effect, would likely use pseudo elements to achieve this
* Price promise and returns boxes, I would likely use pseudo elements to create the borders and animate the border position with transform: translate() as it performs better than animating top/right/bottom/left.
* Phone number message
* Style the message that displays when the user adds 10 products to bag
* Fully browser and device test it. I typically use Browserstack and iOS simulator for this.
* Remove unused classes/selectors

## Improvements 
* Improved responsiveness
* Sticky checkout button on mobile
* React specific
* Basket logic should be in the main app rather than productGrid.tsx
* Should use useReducer when when the next state depends on the previous one (such as basket qty)
* General improvements
* Set quantity field to be editable so the user can also type in the quantity.
* Background doesn’t line up exactly
* Make it accessible, mostly a case of adding tab group and ARIA attributes to specific elements
* Stock message should be it’s own component for reusability and be styled for out of stock
* Product grid column styling needs tidying up
* Product grid column widths don’t match the designs
* Empty basket message needs styling
* Keep VAT and subtotal on mobile else users may get confused why the product price * quantity doesn’t match the total.
* Optimise images

## Notes 
Special price is set to null when there is no special price set as I feel this is more likely to represent what would get pulled in from the DB.

# ---- Create React App Readme ----

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
