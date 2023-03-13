/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import VideoJS from "./VideoJS";
import videojs from "video.js";
import { RWebShare } from "react-web-share";
import { Link } from "react-router-dom";

// Video Page
const Video = () => {
  const vid = {
    title: "Earth roatating video",
    likes: 55,
    url: "https://google.com/my-first",
    src: "/temp-video.mp4",
    views: 500,
    uploadedOn: "25 Jan 2023",
    desc: "This is Description of the video",
    creator: {
      name: "Kunal Gursal",
      followers: 100,
      avatar: "https://tecdn.b-cdn.net/img/new/avatars/2.webp",
      url: "https://drustii.in/u/dineshrathod",
      id: "dineshrathod",
    },
  };

  const playerRef = React.useRef(null);

  const [count, setCount] = useState(0);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: vid.src,
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  // On Like btn Click
  const onLike = () => {};

  return (
    <div className="flex flex-row justify-center mb-1 w-full p-1 ">
      <div className=" w-full md:w-4/6 lg:w-5/5">
        <VideoJS options={videoJsOptions} />

        {/* Options and Tools */}
        <div>
          <h1 className="py-1 text-lg font-semibold border-b border-gray-500 dark:border-gray-300 mb-1">
            {vid.title}
          </h1>

          {/* Creator,like and sharing option */}
          <div className=" bg-gray-800 rounded-lg p-1 flex items-center justify-around mb-1">
            {/* creator */}
            <Link
              className="flex-1 flex items-center "
              to={"/creator/" + vid.creator.id}
            >
              <div className="rounded-sm px-1 flex-1 flex items-center ">
                {/* avatar */}
                <img
                  src={vid.creator.avatar}
                  class="w-11 rounded-full mr-1"
                  alt="Avatar"
                />

                <span>{vid.creator.name}</span>
              </div>
            </Link>

            <div className="flex p-1 ">
              {/* Like */}
              <button className="mx-1 btn flex justify-center items-center rounded-full  px-1 border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height={32}
                  className=" py-1 dark:fill-white hover:fill-red-500"
                  color="white"
                  width={32}
                  onClick={() => setCount(count + 1)}
                >
                  <g>
                    <path d="m13.11 5.72-.57 2.89c-.12.59.04 1.2.42 1.66.38.46.94.73 1.54.73H20v1.08L17.43 18H9.34c-.18 0-.34-.16-.34-.34V9.82l4.11-4.1M14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.83C7 18.95 8.05 20 9.34 20h8.1c.71 0 1.36-.37 1.72-.97l2.67-6.15c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2zM4 9H2v11h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1z"></path>
                  </g>
                </svg>
                {/* Likes Count */}
                <span>
                  <span className="px-1">{count.likes}</span>
                  <p>Likes{count}</p>
                </span>
              </button>

              {/* Share */}

              <RWebShare
                data={{
                  text: [vid.title],
                  url: [vid.url],
                  title: "Share video",
                }}
                onClick={() => console.log("shared successfully!")}
              >
                <button className="mx-1 btn flex justify-center items-center rounded-full pr-2 border  group-hover: fill-red-500 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className=" py-1 dark:fill-white hover:fill-gray-400 "
                    height={32}
                    width={32}
                  >
                    <g>
                      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path>
                    </g>
                  </svg>
                  <span className="">Share</span>
                </button>
              </RWebShare>
            </div>
          </div>

          {/* date, views and description */}
          <div className="bg-gray-600 rounded-lg p-1">
            {/* Date and Views */}
            <div className="flex font-semibold">
              {/* view */}
              <div className="m-1 border-r-2 pr-2 text-sm">
                {vid.views} <span>Views</span>
              </div>

              {/* uploaded on */}
              <div className="m-1 text-sm ">{vid.uploadedOn}</div>
            </div>

            {/* descripption */}

            <div className="">{vid.desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
