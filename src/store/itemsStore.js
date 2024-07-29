import { create } from "zustand";

const useitemStore = create((set) => ({
	items: [],
	createItem: (post) => set((state) => ({ items: [post, ...state.items] })),
	deleteItem: (id) => set((state) => ({ items: state.items.filter((post) => post.id !== id) })),
	setItems: (items) => set({ items }),

}));

export default useitemStore;
