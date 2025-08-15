import PropTypes from "prop-types";

function SmallGameCard({ img, title, desc, tags }) {
  return (
    <div className="flex items-center gap-3 bg-gray-800 rounded mb-2 p-2 hover:bg-gray-700 transition">
      <img src={img} alt={title} className="w-16 h-16 object-cover rounded" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-semibold truncate text-sm">{title}</span>
          <span className="ml-auto px-2 py-0.5 bg-blue-600 text-xs rounded">
            FREE
          </span>
        </div>
        <p className="text-xs text-gray-300 truncate">{desc}</p>
        <div className="flex gap-1 mt-1 flex-wrap">
          {tags.map((t, i) => (
            <span
              key={i}
              className="bg-gray-700 text-xs px-2 py-0.5 rounded text-gray-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

SmallGameCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SmallGameCard;
