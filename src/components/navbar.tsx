import React, { useState } from 'react'
import styles from "../styles.tsx"

const Navbar = () => {
    const list = ['home', 'Features', 'Community', 'Blog', 'Pricing']
    const [toggle, setToggle] = useState(false)
    return (
        <header>
            <div className={`
                ${styles.marginPage}
                flex
                flex-row
                justify-between
                items-center
                w-auto  
                h-auto
                pl-6
                pr-6
                pl-
                py-2.5
                `}>
                <img src="/nexvent.svg" alt="" className='scale-135' />
                <nav className='relative w-fit '>
                    <div className='hidden sm:flex'>
                        <ul className='flex'>
                            {list.map((value) => (<li>{value}</li>))}
                        </ul>
                        <button className='relative bg-Primary testOne:testOne testTwo:testTwo flex w-fit h-fit items-center gap-2'>
                            <div className='py-[0.5em] px-[2em]'>
                                <label className='text-white'>Register Now</label>
                                <span className=' w-[14.59px] h-[14.59px]'></span>
                                <img className='absolute w-[14.59px] h-[14.59px] top-[37%] right-0 -translate-x-1/2' src="/iconRight.svg" alt="right arrow" />
                            </div>
                        </button>   
                    </div>

                    <div
                        className='
                        sm:hidden 
                        block
                    '
                    >
                        <button
                            className={`
                            relative
                            bg-[#4CAF4F]
                            flex
                            row
                            pr-2
                            pl-1
                            gap-3
                            items-center
                            text-[#212121]
                            w-fit
                            rounded-[4px]
                            transition-shadow
                            duration-500
                            ease-in-out
                            ${toggle ?
                                    `rounded-bl-[0px]
                                 rounded-br-[0px]
                                 
                                 `
                                    : ''
                                }
                            smallMobile:text-[5vw]
                            middleMobile:text-[clamp(1.2rem,4vw,1.5rem)]
                            `}
                            onClick={() => setToggle((toggle) => !toggle)}
                        >
                            <span className='w-[1em] h-[1em]'></span>
                            <svg className={` transition-all duration-500 ease-in-out  absolute  left-2 top-1/2 -translate-y-1/2 w-[1em] h-[1em] ${toggle ? `left-[50%] -translate-x-1/2 ` : ``}}`} viewBox="0 0 80 80" width="30" height="40">
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
            </div>
        </header>
    )
}

export default Navbar
