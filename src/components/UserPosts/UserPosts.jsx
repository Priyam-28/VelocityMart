
import UserPost from "./UserPost";
import useGetUserItems from "../../hooks/useGetUserItems"

const UserPosts = () => {
    const { isLoading, items } = useGetUserItems();
    const noPostsFound = !isLoading && items.length === 0;

    return (
        <div className="flex gap-10">
            {!isLoading && !noPostsFound ? (
                items.map((item) => (
                    <UserPost key={item.id} item={item} />
                ))
            ) : (
                <>Not Able to get</>
            )}
        </div>
        
    );
};

export default UserPosts;
