import express from "express";
import { categoriesRoutes, especificationRoutes } from "./routes";

const app = express();

app.use(express.json());
app.use("/categories", categoriesRoutes);
app.use("/especifications", especificationRoutes);

app.listen(3333, () => console.log("Server is running in port 3333"));
