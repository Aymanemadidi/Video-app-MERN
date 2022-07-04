import axios from "axios";

const instance = axios.create({
	baseURL: "https://short-video-backend2022.herokuapp.com/",
});

export default instance;
