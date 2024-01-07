# DBStore, a fictional ecommerce
An ecommerce webapp made using ReactJS and Redux.
A publisheded version of this project is hosten on GitHub Pages at [https://davidbjorklund.github.io/dbstore](https://github.github.io/dbstore).

## To run this project locally
### Prerequisites:
* Node
* npm


### Change the path of the website
To change the path of the website you need to change the prefix "/dbstore/" to "/" on multiple pages as well as changing the homepage path in package.json.

### Test Application

To test the application in developer mode in a local server, type the following in your command prompt in the application folder:

`npm start`

npm will then create a local server where you can view the website in your browser.

The app will be viewable on the local servers path:

`/dbstore`


### Build Application

The current application production build is in the /build folder, to update the build folder, type the following in your command prompt in the application folder:

`npm run build`


## To deploy this project

The /build folder is ready to be deployed on any Apache Server.

If you wish to change something first you need to edit the /src folder to your liking and then follow the instructions above on how to build application.

Publishing to GitHub Pages is possible through the npm package gh-pages, which can be used with the following command:

`npm run deploy`
