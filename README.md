# wine-analytics

Download and Parse Data:

Download the Wine Data Set from the provided link.
Parse the data into a suitable data structure, such as an array of objects.
Calculate Statistical Measures:

Write utility functions to calculate the class-wise mean, median, and mode of "Flavanoids" and "Gamma" for the entire dataset.
To calculate mode, you can create a frequency distribution of the values.
Calculate these measures for each class of alcohol (denoted by the "Alcohol" property).
Create React Components:

Create a React application using Create React App (CRA).
Create a functional component to display the statistical measures in a tabular format.

Display Data:

In your React component, use the calculated statistical measures to display the results in a tabular format.
You can use HTML tables or a CSS framework like Bootstrap for styling (as you mentioned no third-party libraries, but Bootstrap is allowed).

Calculate Statistical Measures in Your App:

In your main App component, import the WineStatsTable component.
Use your utility functions to calculate the statistics for "Flavanoids" and "Gamma."
Pass the calculated statistics as props to the WineStatsTable component.
Styling:

Apply CSS for styling if needed. You can create a separate CSS file and import it into your component.
Run Your App:

Run your React app using yarn start.
