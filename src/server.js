const app = require('./app');

const port = 3000;

app.listen(port, () => {
    console.log(`O servidor está [ON] na porta: ${port}`);
});