import { create } from "zustand";


const useWishlistStore= create((set)=> ({
    wishlist: [],
    
    addToWishlist: (product) => set((state) => ({ wishlist: [...state.wishlist, product] })),
}))