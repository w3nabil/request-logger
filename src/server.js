const express = require('express');
const app = express();

app.use(express.json());

app.all('*', (req, res) => {
    console.log(`Request received: ${JSON.stringify(req.headers, null, 2)}`);
    res.send('Request logged!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
