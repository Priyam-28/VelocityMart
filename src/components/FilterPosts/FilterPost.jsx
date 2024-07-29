import PropTypes from "prop-types";

const FilterPost = ({ item }) => {
  return (
    <article className="itemCard min-w-[300px] p-4 rounded-xl flex flex-col hover:scale-10 cursor-pointer bg-gray-700">
      <div className="mb-4 rounded-xl w-full h-40">
        {item.imageURL && (
          <img
            src={item.imageURL}
            alt={"Feed Post image"}
            className="rounded-md object-cover w-full h-full"
          />
        )}
      </div>
      <h2 className="text-xl font-bold text-gray-100">{item.title}</h2>
      <p className="text-black text-sm font-medium overflow-hidden line-clamp-3 mt-2">
        {item.description}
      </p>
      <div className=" mt-5">
        {/* <Modal2 /> */}
        {/* <Modal2 /> */}
      </div>
    </article>
  );
};

FilterPost.propTypes = {
  item: PropTypes.shape({
    imageURL: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string, // Ensure `id` is included in the PropTypes validation
  }),
};

export default FilterPost;
