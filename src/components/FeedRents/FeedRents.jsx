// import React from "react";
import useGetRents from "../../hooks/useGetRents";
import FeedPost from "../FeedPosts/FeedPost";
// import FeedRent from "./FeedRent";


const FeedRents = () => {
  const { isLoading, rents } = useGetRents();

  return (
    <div className="flex gap-10">
      {!isLoading &&
        
        rents.map((item) => (
          <FeedPost key={item.id} item={item} /> // Pass each item as `item` prop
        ))}

      {!isLoading && rents.length === 0 && <>No item listed</>}
    </div>
  );
};

export default FeedRents;

