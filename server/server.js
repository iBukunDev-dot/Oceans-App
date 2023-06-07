const express = require('express');
const dotenv = require('dotenv').config();

const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 8765;

app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));