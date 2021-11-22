// Vi benytter os af Express
const express = require('express');
const app = express();

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server lytter på http://localhost:${PORT}`);
});

// Vores routes
app.use("/bruger", brugerCont);