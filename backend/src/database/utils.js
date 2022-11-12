import { writeFileSync } from "fs";

const saveToDatabase = (DB) => {
  writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2), {
    encoding: "utf-8",
  });
};

export default { saveToDatabase };
