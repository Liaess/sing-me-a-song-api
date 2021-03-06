import express from "express";
import cors from "cors";
import { addSong, handleScore, getRandomSong, searchAmount } from "./controllers/recommendationsController";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/recommendations", addSong);

app.post("/recommendations/:id/upvote", handleScore);

app.post("/recommendations/:id/downvote", handleScore);

app.get("/recommendations/random", getRandomSong)

app.get("/recommendations/top/:amount", searchAmount)

export default app;
