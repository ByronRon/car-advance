import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = parseInt(process.env.PORT, 10);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
