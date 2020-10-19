const app = require("./app");

const porta = 3000;

app.listen(porta, () => {
  console.log(`🔥 | O servidor está [ON] na porta: ${porta}`);
});
