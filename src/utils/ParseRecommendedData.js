// import React from 'react'
import axios from 'axios';
import { ConvertRawToString } from './ConvertRawToString';
import { timeSince } from './timeSince';

import {ParseVideoDuration} from './ParseVideoDuration'

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export  const ParseRecommendedData = async(items)=> {

try {
    const videoIds = [];
    const channelIds = [];


    items.forEach((item) =>{
        channelIds.push(item.snippet.channelId);

        videoIds.push(item.id.videoId);
    });

    const {
        data : {items : channelsData},

    } = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelIds.join(
        ","
    )}&key=${API_KEY} `);
    

    const parsedChannelsData = [];
    channelsData.forEach((channel)=> parsedChannelsData.push({
        id:channel.id,
        image: channel.snippet.thumbnails.default.url,
    }));


    const {
        data :{items:videoData},


    } = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds.join(
        ","
    )}&key=${API_KEY}`
    );

    const  ParseData =[];
    items.forEach((item,index) =>{
        const {image : channelImage
        }= parsedChannelsData.find((data)=> data.id === item.snippet.channelId)

        if(channelImage){
            ParseData.push({
                videoId : item.id.videoData,
                videoTitle : item.snippet.title,
                videoDescription: item.snippet.description,
                videoThumbnail: item.snippet.thumbnails.medium.url,
                videoLink : `https://www.youtube.com/watch?v=${item.id.videoId}`,
                videoDuration   : ParseVideoDuration (
                    videoData[index].contentDetails.duration
                ),
                videoViews : ConvertRawToString (
                videoData[index].statistics.viewCount
                ),
                videoAge:timeSince(new Date(item.snippet.publishedAt)
                ),
                channelInfo :{
                    id: item.snippet.channelId,
                    image:channelImage,
                    name:item.snippet.channelTitle
                },
            });
        }
    });

   return ParseData;

}
catch(error){
    console.log( )
 
}


};
