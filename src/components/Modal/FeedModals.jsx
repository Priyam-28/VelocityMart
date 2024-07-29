// FeedPosts.js
// import React from "react";
import useGetItems from "../../hooks/useGetItems";

import Modal2 from "./Modal2";

const FeedModals = () => {
  const { isLoading, items } = useGetItems();

  return (
    <div className="flex gap-10">
      {!isLoading &&
        items.length > 0 &&
        items.map((item) => (
          <Modal2 key={item.id} item={item} /> // Pass each item as `item` prop
        ))}

      {!isLoading && items.length === 0 && <>No item listed</>}
    </div>
  );
};

export default FeedModals;
