const dotenv = require("dotenv");
const app = require("./app");

// Load config
dotenv.config({ path: "../.env" });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
