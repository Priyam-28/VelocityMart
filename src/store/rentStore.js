import { create } from "zustand";

const useRentStore = create((set) => ({
	rentals: [],
	createRent: (post) => set((state) => ({ rentals: [post, ...state.rentals] })),
	deleteRent: (id) => set((state) => ({ rentals: state.rentals.filter((post) => post.id !== id) })),
	setRents: (rentals) => set({ rentals }),
	// addComment: (postId, comment) =>
	// 	set((state) => ({
	// 		rentals: state.rentals.map((post) => {
	// 			if (post.id === postId) {
	// 				return {
	// 					...post,
	// 					comments: [...post.comments, comment],
	// 				};
	// 			}
	// 			return post;
	// 		}),
	// 	})),
}));

export default useRentStore;
