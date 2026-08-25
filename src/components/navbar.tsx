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
                <div className='hidden sm:flex'>
                    <ul className='flex'>
                        {list.map((value) => (<li>{value}</li>))}
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
                            bg-[#4CAF4F]
                            text-center
                            text-[#212121]
                            p-0.5
                            rounded-2xl
                            ${toggle ? 'rounded-bl-[0px] rounded-br-[0px]': ''}
                            smallMobile:text-[5vw]
                            middleMobile:text-[clamp(1.2rem,4vw,1.5rem)]
                            `}
                        onClick={() => setToggle((toggle) => !toggle)}
                    >Opções</button>
                    <ul
                        className={`
                                ${toggle ? ' border-[#4CAF50] border-2 rounded-l-2xl rounded-br-2xl min-w-[110px] bg-[#212121] absolute top-full right-0 text-black' : 'hidden'}
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
