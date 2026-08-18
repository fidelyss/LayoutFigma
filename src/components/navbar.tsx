import React, { useState } from 'react'

const Navbar = () => {
    const list = ['home', 'about', 'comment']
    const [toggle, setToggle] = useState(false)
    return (
        <header
            className='
            flex
            flex-row
            justify-between
            items-center
            w-full
            h-auto
            pl-3
            pr-3
        '
        >
            <img src="/nexvent.svg" alt="" />
            <nav className=''>
                <div className='hidden sm:flex'>
                    <ul className='flex'>
                        {list.map((value) => (<li>{value}</li>))}
                    </ul>
                </div>
                <div className='sm:hidden w-fit block relative py-1.5 pl-1 pr-1'>
                    <button className='hover:rounded-[15px_15px_0_0] hover:block bg-[#4CAF50] text-[#212121] py-[10.01px] px-[15.01px] text-[15px] font-bold border-2 border-transparent rounded-[15px] cursor-pointer' onClick={() => { setToggle(!toggle) }}>Opções</button>
                    <div className={`${toggle ? ' text-[13px]  z-[1]  bg-[#212121] border-2 border-[#4CAF50] rounded-[0_15px_15px_15px] shadow-[0_8px_16px_0_rgba(0,0,0,0.2)]  flex absolute top-full left-0 p-1' : 'hidden'}`}>
                        <ul className='[&:nth-child(1)]:rounded-[0_13px_0_0] [&:nth-child(3)]:rounded-[0_0_13px_13px] text-[#4CAF50] px-[10.01px] py-[8.01px] no-underline block transition-[0.1s] hover:bg-[#4CAF50] hover:text-[#212121]'>
                            {list.map((value) => (<li>{value}</li>))}
                        </ul>
                    </div>
                </div>
                <button></button>
            </nav>
            
        </header>
    )
}

export default Navbar
