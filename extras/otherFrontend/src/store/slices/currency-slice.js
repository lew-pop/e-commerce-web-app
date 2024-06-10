const { createSlice } = require('@reduxjs/toolkit');

const currencySlice = createSlice({
    name: "currency",
    initialState: {
        currencySymbol: "$",
        currencyName: "USD",
        currencyRate: 1
    },
    reducers: {
        setCurrency(state, action) {
            const currencyName = action.payload;

            if (currencyName === "USD") {
                return state = {
                    currencySymbol: "$",
                    currencyRate: 1,
                    currencyName
                };
            }
            if (currencyName === "EUR") {
                return state = {
                    currencySymbol: "€",
                    currencyRate: 0.92,
                    currencyName
                };
            }
            if (currencyName === "GBP") {
                return state = {
                    currencySymbol: "£",
                    currencyRate: 0.79,
                    currencyName
                };
            }
            if (currencyName === "CAD") {
                return state = {
                    currencySymbol: "CA$",
                    currencyRate: 1.37,
                    currencyName
                };
            }
            if (currencyName === "MXN") {
                return state = {
                    currencySymbol: "MXN$",
                    currencyRate: 16.70,
                    currencyName
                };
            }
        }
    },
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;
