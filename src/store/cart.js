import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      b2cCart: [],
      addToB2cCart: (product) =>
        set((state) => {
          if (Array.isArray(product)) {
            return { b2cCart: [...state.b2cCart, ...product] };
          } else {
            console.log(product);
            const index = state.b2cCart.findIndex(
              (item) => item._id === product._id
            );
            if (index === -1) {
              return { b2cCart: [...state.b2cCart, product] };
            }

            const newCart = [...state.b2cCart];
            newCart[index] = product;
            return { b2cCart: newCart };
          }
        }),
      removeFromB2cCart: (product) =>
        set((state) => ({
          b2cCart: state.b2cCart.filter((item) => item._id !== product._id),
        })),
      clearCart: () => set(() => ({ b2cCart: [] })),
      // updateCart: (product) =>
      //   set((state) => {
      //     // console.log(state);
      //     const index = state.b2cCart.findIndex(
      //       (item) => item.id === product.id
      //     );
      //     const newCart = [...state.b2cCart];
      //     newCart[index] = product;
      //     return { b2cCart: newCart };
      //   }),
    }),
    {
      name: "b2cCartStore", // name of the item in the storage (must be unique)
      getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
    }
  )
);

export default useCartStore;
