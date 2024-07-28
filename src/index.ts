import express from "express";
import routes from "./routes";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import path from "path";

export const PUBLIC_DIR = path.join(__dirname, "../public");
// Inicializar variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
