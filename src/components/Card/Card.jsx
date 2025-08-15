import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import thumbnail from "../../images/thumbnail.jpg";

export default function Card({ title, desc, tags, id, img }) {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);
  const videoSrc = id
    ? `https://www.freetogame.com/g/${id}/videoplayback.webm`
    : null;

  const handleCardClick = () => {
    if (id) {
      navigate(`/game/${id}`);
    }
  };

  return (
    <div
      className="group w-full  mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700/50 hover:border-gray-600/50 cursor-pointer"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={handleCardClick}
    >
      <div className="relative overflow-hidden">
        {/* Image */}
        <img
          src={img || thumbnail}
          alt={title || "Game Thumbnail"}
          className={`w-full aspect-video object-cover transition-all duration-300 ${
            isHovering && videoSrc
              ? "opacity-0 scale-110"
              : "opacity-100 scale-100"
          }`}
        />
        {/* Video on hover */}
        {videoSrc && (
          <video
            src={videoSrc}
            preload="none"
            loop
            muted
            autoPlay
            playsInline
            className={`absolute inset-0 w-full aspect-video object-cover transition-all duration-300 ${
              isHovering ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
          />
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Free badge */}
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold rounded-full shadow-lg">
            FREE
          </span>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {/* Title */}
        <div className="flex items-start justify-between gap-2">
          <h2 className="font-bold text-lg text-white group-hover:text-gray-100 transition-colors duration-200 line-clamp-2">
            {title || "Title"}
          </h2>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
          {desc || "No description available."}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {tags.map((t, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md border border-gray-600/30 hover:bg-gray-600/50 transition-colors duration-200"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-700/50">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <i className="fa-solid fa-gamepad text-indigo-400"></i>
            <span className="text-gray-300">Play Now</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <i className="fa-brands fa-windows text-blue-400"></i>
            <span className="text-xs text-gray-500">Windows</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
