import { useEffect } from "react";
import useFilterByCategory from "../../hooks/useFilterByCategory";
import FilterPost from "../../components/FilterPosts/FilterPost";

export default function FilteredElectricalAndMechanics() {
  const { isLoading, categoryItems, sortByCategory } = useFilterByCategory();
  useEffect(() => {
    sortByCategory("Electrical And Mechanics");
  }, []);

  return (
    <div className="flex gap-10">
      {!isLoading && categoryItems.length > 0 ? (
        categoryItems.map((item) => <FilterPost key={item.id} item={item} />)
      ) : (
        <>Dayuum. Looks like you don&apos;t have any ads now.</>
      )}
    </div>
  );
}
