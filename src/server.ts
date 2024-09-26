// Import the 'express' module along with 'Request' and 'Response' types from express
import express, {Application}from 'express';
import dotenv from 'dotenv'
import router from './routs/beepersRouter';
dotenv.config()
// Create an Express application
const app:Application = express();





// Specify the port number for the server
const port : number | string = process.env.PORT || 3009;
app.use(express.json())
app.use(router)
// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${port}`);
});
