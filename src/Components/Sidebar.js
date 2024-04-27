import React from 'react'
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory, MdOutlineWatchLater } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiVideoLine } from "react-icons/ri";
import { LiaDownloadSolid } from "react-icons/lia";
import { BiLike } from "react-icons/bi";


const Sidebar = () => {


    const mainLinks = [{
        icon: <GoHome  className='text-xl'/>,
        name: 'Home'
    },
    {
        icon: <SiYoutubeshorts  className='text-xl'/>,
        name:'Shorts'

    },
    {
        icon: <MdOutlineSubscriptions  className='text-xl'/>,
        name:'Subscriptions'
    }
];

const otherLinks = [{
    icon: <CgProfile className='text-xl'/>,
    name: 'Your Channel'
},
{
    icon :<MdHistory  className='text-xl'/>,
    name:'History'
},
{
    icon: <RiVideoLine  className='text-xl'/>,
    name:'Your Videos'
},
{
    icon:<MdOutlineWatchLater  className='text-xl'/>,
    name:'Watch Later'
},
{
    icon: <LiaDownloadSolid  className='text-xl'/>,
    name:'Downloads'
},
{
    icon:<BiLike  className='text-xl'/>,
    name : 'Liked Videos'
}
];


    return (
        <div className='w-2/12 bg-[#212121]    pr-5 overflow-auto pb-8 h-screen'>
            <ul className='flex flex-col border-b-2 border-gray-700'>
                {mainLinks.map(
                    ({icon,name}) =>{
                        return(
                            <li key={name} className={'pl-6 py-3 rounded-xl hover:bg-zinc-600 ${name === "Home" ? "bg-slate-600" :" " } rounded-xl'}>
                                <a href='#' className='flex items-center gap-5  '>
                                    {icon }
                                    <span className='text-sm tracking-wider'> {name}</span>
                                </a>
                            </li>
                        )
                    }
                )}
            </ul>


            <ul className='flex flex-col border-b-2 border-gray-800'>
                {otherLinks.map(
                    ({icon,name}) =>{
                        return(
                            <li key={name} className={'pl-6 py-3  hover:bg-zinc-600 }'}>
                                <a href='#' className='flex items-center gap-5  '>
                                    {icon }
                                    <span className='text-sm tracking-wider'> {name}</span>
                                </a>
                            </li>
                        )
                    }
                )}
            </ul>
        </div>
    )
}

export default Sidebar