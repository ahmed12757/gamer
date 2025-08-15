import PropTypes from "prop-types";

function HorizontalGameCard({ img, title }) {
  return (
    <div className="flex flex-col bg-gray-800 rounded mb-4 overflow-hidden hover:bg-gray-700 transition">
      <img src={img} alt={title} className="w-full h-24 object-cover" />
      <div className="flex items-center justify-between px-2 py-2">
        <span className="font-semibold text-sm truncate">{title}</span>
        <span className="px-2 py-0.5 bg-blue-600 text-xs rounded">FREE</span>
      </div>
    </div>
  );
}

HorizontalGameCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HorizontalGameCard;
