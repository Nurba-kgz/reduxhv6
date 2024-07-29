import { configureStore, createSlice } from '@reduxjs/toolkit';


const tabSlice = createSlice({
    name: 'tabs',
    initialState: {
        currentTab: 0,
    },
    reducers: {
        setTab(state, action) {
            state.currentTab = action.payload;
        },
    },
});


export const { setTab } = tabSlice.actions;
const store = configureStore({
    reducer: {
        tabs: tabSlice.reducer,
    },
});

export default store;