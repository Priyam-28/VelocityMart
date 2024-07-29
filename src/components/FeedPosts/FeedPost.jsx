import PropTypes from "prop-types";
import Modal2 from "../Modal/Modal2"; // Ensure the correct path to Modal2 component

const FeedPost = ({ item }) => {
  return (
    <article className="itemCard w-[300px] p-4 rounded-xl flex flex-col hover:scale-10 bg-gray-800 shadow-gray-200">
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
      <p className="text-gray-400 text-md font-medium overflow-hidden line-clamp-2 mt-2">
        {item.description}
      </p>
      <div className=" mt-auto">
        <Modal2 />
      </div>
    </article>
  );
};

FeedPost.propTypes = {
  item: PropTypes.shape({
    imageURL: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default FeedPost;
