import { create } from "zustand";



//used zustand for creating store(monaging states accorss the platform)
//create is used for creating such store which takes a callback function as its argument called store creator function and returns an object jiske ander set hai jo state ko update karega in store 
const useAuthStore = create((set) => ({
	user: JSON.parse(localStorage.getItem("user-info")), //initial value if user from browser local storage
	login: (user) => set({ user }), //sets the user after login
	logout: () => set({ user: null }),//after logot removes the user 
	setUser: (user) => set({ user }), //modify the user
}));

export default useAuthStore;