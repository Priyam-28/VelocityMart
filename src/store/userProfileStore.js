import { create } from "zustand";

const useUserProfileStore = create((set) => ({
	userProfile: null,
	setUserProfile: (userProfile) => set({ userProfile }),
	// this is used to update the number of posts in the profile page
	addItem: (item) =>
		set((state) => ({
			userProfile: { ...state.userProfile, items: [item.id, ...state.userProfile.items] },
		})),
	deleteItem: (itemId) =>
		set((state) => ({
			userProfile: {
				...state.userProfile,
				items: state.userProfile.items.filter((id) => id !== itemId),
			},
		})),
}));

export default useUserProfileStore;
