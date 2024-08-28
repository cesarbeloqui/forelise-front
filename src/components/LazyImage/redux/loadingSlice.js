import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    loadingCount: 0,
    loadingImages: {}, // Usaremos un objeto para almacenar la información de las imágenes en carga
  },
  reducers: {
    startLoading: (state, action) => {
      if (action.payload !== undefined) {
        const { src, alt } = action.payload;
        if (!state.loadingImages[src]) {
          state.loadingCount += 1;
          state.loadingImages[src] = { src, alt }; // Registra la imagen en carga
        }
      }
    },
    stopLoading: (state, action) => {
      const { src } = action.payload;
      if (state.loadingImages[src]) {
        state.loadingCount -= 1;
        delete state.loadingImages[src]; // Elimina la imagen del registro
      }
    },
  },
});

export const { startLoading, stopLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
