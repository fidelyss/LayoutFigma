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
            <nav className='relative w-fit'>
                <div className='hidden sm:flex'>
                    <ul className='flex'>
                        {list.map((value) => (<li>{value}</li>))}
                    </ul>
                </div>

                <div
                    className='
                        sm:hidden
                        block
                        right-0
                        pt-1
                    '
                >
                    <button
                        className='
                            bg-[#4CAF4F]
                            text-center
                            text-[#212121]
                            p-0.5
                            smallMobile:text-[5vw]
                            middleMobile:text-[clamp(1.2rem,4vw,1.5rem)]
                            '
                        onClick={() => setToggle((toggle) => !toggle)}
                    >Opções</button>
                    <ul
                        className={`
                                ${toggle ? 'absolute right-0 text-black p-0.5' : 'hidden'}
                                `}
                    >
                        {
                            list.map(value => (
                                <li className='

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
