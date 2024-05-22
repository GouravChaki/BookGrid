# NUA Assignment: BookGrid

The Project is build using React-CRA, styling has been done using MUI, Styled Components.

## External Libraries

React-CSV: It is used for generating a download option for converting data to CSV format.
React-Toastify: It is used for snackbar (toast) purposes.


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## API'S Used 

https://openlibrary.org/developers/api api's are used to extract the require data.
Loads may be slower since, for displaying the required informations multiple api calls had to made. A single api call to https://openlibrary.org/search.json?q=${query} won't be giving author_birth_date and author_top_work. So, two more api calls "https://openlibrary.org/authors/${authorKey}.json" and "https://openlibrary.org/search/authors.json?q=${authorName}&limit=1" required for each book data obtained. Thereby increasing the load and hence the time.

## Features:
1. Columnar view of Index, Ratings Average, Author Name, Title, First Publish Year, Subject, Author Birth Date, Author Top Work.
2. Pagination support provided in every page.
3. Number of Rows per page can be increased by a menu-dropdown, by default 10 books per page, and able to change up to 50, 100 records per page
4. Ascending and Descending sorting can be applied to every column in a page.
5. Search books feature by author name.
6. Current result can be downloaded in csv format
7. Online Hosting of Dashboard
8. Interactive UI for better experience
9. Timely applied Toast/Snackbar/Notifications indicating abrupt situations and hereby increasing user experience.
10. Edge Cases handled and proper user experience is aimed to achieve.
11. Authentication setup using context for smoother transmission of data.


### Deployment

Deployed on https://bookgrid.onrender.com/
