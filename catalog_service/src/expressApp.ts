import express from "express"
import CatalogRouter from "./api/catelog.routes"

const app = express();
app.use(express.json());

app.use("/", CatalogRouter);

export default app;