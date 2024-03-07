const express = require('express');
const app = express();

const PORT = 4200;

app.listen('/', (req, res) => {
    return res.json({ message: 'Hello World' });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})