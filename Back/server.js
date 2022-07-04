import express from "express";
import mongoose from "mongoose";
import Videos from "./dbModel.js";
import Cors from "cors";

const port = process.env.PORT || 8000;

const connectionURL =
	"mongodb+srv://aymanelmadidi:CapgPiKhMDqq@cluster0.l7ch4.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connectionURL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const app = express();

app.use(express.json());
app.use(Cors());

app.get("/", (req, res) => {
	res.status(200).send("Hello the Web Devs");
});

app.post("/v2/posts", (req, res) => {
	const dbVideos = req.body;
	Videos.create(dbVideos, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(201).send(data);
		}
	});
});

app.get("/v2/posts", (req, res) => {
	Videos.find((err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(201).send(data);
		}
	});
});

app.listen(port, () => {
	console.log(`Server listening on port: ${port}`);
});
