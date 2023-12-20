import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card(props) {
  const { title, description, image, name, video } = props;
  const history = useNavigate();

  const handleImageClick = () => {
    history(`/videopage/${encodeURIComponent(video)}`);
  };

  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white">
        <img
          className="lg:h-64 lg:w-full md:h-46 w-full object-cover object-center"
          src={image}
          alt="blog"
          onClick={handleImageClick}
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {title}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {name}
          </h1>
          <p className="leading-relaxed mb-3">{description}</p>
        </div>
      </div>
    </div>
  );
}
