'use client'
import {AiOutlineMenu} from 'react-icons/ai'
import Avatar from '../Avatar';

const UserMenu = () => {
    return (  
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div onClick={() => {}}
                     className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer:pointer"
                >
                    Xuanzhe you home
                </div>
                <div onClick={()=>{}}
                    className="p-a md-py-1 md-py-2 border-[1px] border-neural-200 flex felx-row items-center gap-3 rounded-full cursor-pointer:pointer hover:shadow-md transition"
                >
                    <AiOutlineMenu />
                    <div className='hidden md-block'>
                        <Avatar />
                    </div>
                </div>
            </div>

        </div>
    );
}
 
export default UserMenu;