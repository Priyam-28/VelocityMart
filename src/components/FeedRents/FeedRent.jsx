import PropTypes from "prop-types";

const FeedRent = ({ item }) => {
  return (
    <article className="itemCard min-w-[300px] h-[300px] p-4 rounded-xl flex flex-col hover:scale-10 cursor-pointer bg-gray-700">
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
      <p className="text-black text-sm font-medium overflow-hidden line-clamp-3">
        {item.description}
      </p>
      <h2 className="text-xl font-bold text-gray-100">{item.to}</h2>
      <h2 className="text-xl font-bold text-gray-100">{item.from}</h2>
      <div className=" mt-auto">
        {/* <Modal2 /> */}
      </div>
    </article>
  );
};

FeedRent.propTypes = {
  item: PropTypes.shape({
    imageURL: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
    to: PropTypes.instanceOf(Date), // Ensure `to` is a Date object
    from: PropTypes.instanceOf(Date) 
  }),
};

export default FeedRent;
