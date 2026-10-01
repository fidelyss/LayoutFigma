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
            <nav className='relative w-fit '>
                <div className='hidden sm:flex font-laEle'>
                    <ul className='flex'>
                        {list.map((value) => (<li>{value}</li> ))}
                    </ul>
                </div>

                <div
                    className='
                        sm:hidden
                        block
                        pt-1
                    '
                >
                    <button
                        className={`
                            relative
                            bg-[#4CAF4F]
                            flex
                            row
                            pr-1
                            pl-1
                            gap-0.5
                            items-center
                            text-[#212121]
                            p-0.5
                            w-fit
                            rounded-xl
                            transition-shadow
                            duration-500
                            ease-in-out
                            ${toggle ?
                                `rounded-bl-[0px]
                                 rounded-br-[0px]
                                 shadow-[0_0_20px_0px_#4CAF4F]
                                 `
                                : ''
                            }
                            smallMobile:text-[5vw]
                            middleMobile:text-[clamp(1.2rem,4vw,1.5rem)]
                            `}
                        onClick={() => setToggle((toggle) => !toggle)}
                    >
                        <span className='w-[1em] h-[1em]'></span>
                        <svg className={` transition-all duration-500 ease-in-out  absolute  left-0 top-1/2 -translate-y-1/2 w-[1em] h-[1em] ${toggle ? `left-1/2 -translate-x-1/2 ` : ``}}`} viewBox="0 0 80 80" width="30" height="40">
                            <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                            <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                            <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                        </svg>
                        <span className={`transition-all duration-400 ${toggle ? `opacity-0` : ``}`}>MENU</span>
                    </button>
                    <ul
                        className={`
                                ${toggle ? ' border-[#4CAF50] border-2 rounded-l-2xl rounded-br-2xl min-w-[135px] bg-[#212121] absolute top-full right-0 text-black' : 'hidden'}
                                `}
                    >
                        {
                            list.map(value => (
                                <li className='p-1.5 first:rounded-tl-[14px] last:rounded-bl-[14px] last:rounded-br-[14px] text-[#4CAF50] pt-1 hover:text-black hover:bg-[#4CAF50]

                                    '>{value}</li>
                            ))
                        }
                    </ul>
                </div>
            </nav>

        </header>
    )
}

export default Navbar
