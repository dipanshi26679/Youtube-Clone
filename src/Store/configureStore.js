import { configureStore } from '@reduxjs/toolkit'
import youtubeReducer from '../features/Youtube/YoutubeSlice'



const store = configureStore({
    reducer:{
        youtubeApp: youtubeReducer,
    }
});

export default store;