import { createSlice } from "@reduxjs/toolkit";

import { getHomePageVideos } from "../../Store/reducers/getHomePageVideos";
import { getSearchPageVideos } from "../../Store/reducers/getSearchPageVideos";
import { getRecommendedVideo } from "../../Store/reducers/getRecommendedVideo";
import { getVideoDetails } from "../../Store/reducers/getVideoDetails";


const initialState = {
    videos: [],
    currentPlaying: null,
    searchTerm:"",
    searchResults:[],
    nextPageToken:null,
    recommendedVideo:[]
};


const YoutubeSlice = createSlice({
    name:"youtubeApp",
    initialState,
    reducers:{
        clearVideos:(state)=>{
            state.videos = [];
            state.nextPageToken = null;
        },
        changeSearchTerm:(state,action)=>{
            state.searchTerm = action.payload;
        },
        clearSearchTerm:(state)=>{
            state.searchTerm = "";
        }
    },
    extraReducers:(builder) => {
        builder.addCase(getHomePageVideos.fulfilled,(state,action)=> {
            if(action.payload && action.payload.parsedData){
                state.videos = action.payload.parsedData;
                state.nextPageToken = action.payload.nextPageToken;
            }
        })
        builder.addCase(getSearchPageVideos.fulfilled,(state,action)=> {
            if(action.payload && action.payload.parsedData){
                state.videos = action.payload.parsedData;
                state.nextPageToken = action.payload.nextPageToken;
            }
        })
        builder.addCase(getRecommendedVideo.fulfilled,(state,action)=> {
            if(action.payload && action.payload.parsedData){
                state.recommendedVideo = action.payload.parsedData;
            }
        })
        builder.addCase(getVideoDetails.fulfilled,(state,action)=> {
                state.currentPlaying = action.payload;
        })
    }
})



export const {clearVideos,changeSearchTerm,clearSearchTerm} = YoutubeSlice.actions;
export default YoutubeSlice.reducer;