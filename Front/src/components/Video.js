import { useState, useRef } from "react";
import "../components/Video.css";
import VideoFooter from "./VideoFooter";
import VideoSideBar from "./VideoSideBar";

const Video = ({
	url,
	channel,
	description,
	song,
	likes,
	messages,
	shares,
}) => {
	const [playing, setPlaying] = useState(false);
	const videoRef = useRef(null);

	function handleVideoPress() {
		if (playing) {
			videoRef.current.pause();
			setPlaying(false);
		} else {
			videoRef.current.play();
			setPlaying(true);
		}
	}
	return (
		<div className="video">
			<video
				src={url}
				className="video_player"
				ref={videoRef}
				onClick={handleVideoPress}
			></video>
			<VideoFooter channel={channel} description={description} song={song} />
			<VideoSideBar likes={likes} messages={messages} shares={shares} />
		</div>
	);
};

export default Video;
