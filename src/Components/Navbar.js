import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FaMicrophone } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/useApp';
import { changeSearchTerm, clearVideos } from '../features/Youtube/YoutubeSlice';
import {getSearchPageVideos}from '../Store/reducers/getSearchPageVideos'

const Navbar = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

    const handleSearch = () => {
        if (location.pathname !== '/search') navigate("/search");
        else {
            dispatch(clearVideos);
            dispatch(getSearchPageVideos(false));
        }
    }


    return (
        <div className='flex justify-between px-14 h-14 items-center bg-[#212121] opacity-95 sticky '>
            <div className='flex gap-8 items-center text-2xl '>
                <div>
                    <GiHamburgerMenu />
                </div>
                <div className='flex gap-2 items-center justify-center'>
                    <BsYoutube className='text-3xl text-red-600' />
                    <span className='text-2xl '>Youtube</span>
                </div>
            </div>
            <div className='flex items-center justify-center gap-5'>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSearch();
                }}>
                    <div className='flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl'>
                        <div className='flex gap-5 items-center pr-5'>
                            <input type='text' placeholder='Search' className='w-96 bg-zinc-900 focus:outline-none border-none' 
                            value={searchTerm}
                            onChange={e=> dispatch(changeSearchTerm(e.target.value))}
                            />

                        </div>
                        <button className=' h-10 w-16  flex items-center justify-center bg-zinc-800 rounded-r-3xl'>
                            <AiOutlineSearch className=' text-xl ' />
                        </button>
                    </div>
                </form>

                <div className='text-xl p-3 bg-zinc-900 rounded-full'>
                    <FaMicrophone />
                </div>
            </div>
            <div className=' flex gap-8 items-center text-xl'>
                <RiVideoAddLine />
                <div className='relative'>
                    <IoMdNotificationsOutline />
                    <span className='absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1 '> {""}9+{""}</span>
                </div>
                <img
                    alt='profile logo'
                    className='w-9 h-9 rounded-full'
                    src='https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png' />
            </div>



        </div>
    )
}

export default Navbar