import fetchWrapper from "@/service/fetcher";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ✅ createAsyncThunk bilan async funksiya yaratish
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const res = await fetchWrapper(
            "/api/products",
            { method: "GET" },
            "product"
        );
        return res;
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        status: "idle", // idle | loading | succeeded | failed
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export default productsSlice.reducer;
