import { create } from "zustand";

const useWishlistStore = create((set) => ({
  wishlist: [1, 2, 3, 4],
  updateWishlist: (product) =>
    set((state) => {
      if (state.wishlist.find((v) => v.id === product.id)) {
        return { wishlist: state.wishlist.filter((v) => v.id !== product.id) };
      } else {
        return { wishlist: [...state.wishlist, product] };
      }
    }),
}));

export default useWishlistStore;
