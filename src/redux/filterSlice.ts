import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
    category: string;
    priceRange: number;
    size: string[];
}

const initialState: FilterState = {
    category: "",
    priceRange: 50,
    size: [],
};

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload;
        },
        setPriceRange: (state, action: PayloadAction<number>) => {
            state.priceRange = action.payload;
        },
        setSize: (state, action: PayloadAction<string>) => {
            if (state.size.includes(action.payload)) {
                state.size = state.size.filter((s) => s !== action.payload);
            } else {
                state.size.push(action.payload);
            }
        },
    },
});

export const { setCategory, setPriceRange, setSize } = filterSlice.actions;
export default filterSlice.reducer;
