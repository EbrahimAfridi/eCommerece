import { VIDEO_GRID_URLS } from "../../../constants";

const VideoGrid = () => {
  return (
    <section className="videoSlider w-full overflow-x-scroll bg-transparent">
      <div className="flex gap-2 overflow-scroll">
        {VIDEO_GRID_URLS.map((video) => (
          <video
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
            key={video.id}
            autoPlay
            loop
            muted
            src={video.videoURL}
            type="video/mp4"
          />
        ))}
      </div>
    </section>
  );
};

export default VideoGrid;
