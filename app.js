import express from "express";
import path from "path";
import indexRouter from "./routes/indexRouter.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);

app.listen(3000, () => {
    console.log(`Çalışıyor, PORT:${PORT}`);
});