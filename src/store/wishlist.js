import { create } from "zustand";
import { persist } from "zustand/middleware";

const useWishlistStore = create(
  persist(
    (set) => ({
      wishlist: [],
      updateWishlist: (product) =>
        set((state) => {
          if (state.wishlist.find((v) => v._id === product._id)) {
            return {
              wishlist: state.wishlist.filter((v) => v._id !== product._id),
            };
          } else {
            return { wishlist: [...state.wishlist, product] };
          }
        }),
    }),
    {
      name: "b2cWishlistStore",
      getStorage: () => localStorage,
    }
  )
);

export default useWishlistStore;
