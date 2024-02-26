// Use import statements in your JavaScript file
import express from 'express';
import handlebars from 'express-handlebars';
import path from 'path';
import { route } from './src/routes/index.js';
import { connectDB } from './database.js';
import { fileURLToPath } from 'url';
import cors from "cors"

// Create an express app
const app = express();
 
// Set the port
const port = 8080;

app.use(cors()) // this is to avoid cors error when dev

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Set the view engine to handlebars
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'src/views'));

// Render the home page with the data
route(app);

// Start the server
app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
});