import  { useEffect } from 'react'
import FilterPost from '../../components/FilterPosts/FilterPost';
import useFilterByCategory from '../../hooks/useFilterByCategory';

export default function FilteredSportsAndGym() {
    const { isLoading, categoryItems,sortByCategory } = useFilterByCategory();
    useEffect(() => {
        sortByCategory("Sports And Gym"
    );
    }, []); 

    return (
        <div className="flex gap-10">
            {!isLoading && categoryItems.length > 0 ? (
                categoryItems.map((item) => (
                    <FilterPost key={item.id} item={item} />
                ))
            ) : (
                <>Dayuum. Looks like you don&apos;t have any ads now.</>
            )}
        </div>
    )
}
