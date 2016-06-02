# Prerender Angular
This project is just a test for prerendering AngularJS states by server-side.

## How does it work?
The application has the classical client-side routing, with HTML5 history API enabled through the **$location** service.
Generally, the SPA restores the requested state from the client-side, by fetching every resource from the server.

However, in this test, the server restores the application's state by injecting the data into the **Expenses** service before rendering the HTML.

## Install
```bash
$ npm install
```

## Run
```bash
$ npm start
```

## Testing the application
Go to **http://localhost:3000** and then click on the "Expenses" link: the application will forward to the /expenses route, fetching the expenses from the server with an AJAX call.

Now, if you refresh the page, the server will render the application with the expenses already injected into the Expenses service, avoiding a new AJAX call from the client.