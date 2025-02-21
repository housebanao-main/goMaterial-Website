import { create } from "zustand";

const useCartStore = create((set) => ({
  b2cCart: [],
  addToB2cCart: (product) =>
    set((state) => ({ b2cCart: [...state.b2cCart, product] })),
  removeFromB2cCart:(product)=> set((state)=> ({
    b2cCart: state.b2cCart.filter((item)=> item.id !== product.id)
  })),
  clearCart:()=> set(()=> ({b2cCart: []})),
  updateCart: (product) => set((state) => {
        const index = state.b2cCart.findIndex((item) => item.id === product.id);
        const newCart = [...state.b2cCart];
        newCart[index] = product;
        return { b2cCart: newCart };
    }),

}));


export default useCartStore;
