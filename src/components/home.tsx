import styles from "../styles"

const home = () => {
    return (
        <section className="w-full h-fit bg-neutral-Silver">
            <div className={`${styles.marginPage} `}>
                <div className="
                    grid
                    grid-cols-12
                    py-[95.99px]
                    items-center
                ">
                    <div className="
                    col-span-7
                    ">

                        <div className="
                        flex
                        flex-col
                        gap-y-[32.94px]
                        ">
                            <div className="
                            flex
                            flex-col
                            gap-y-[14.97px]
                            ">
                                <h1 className="
                                Headline-1
                                text-neutral-D_Grey
                                ">
                                    Lessons and insights <span className="text-Primary">from 8 years</span>
                                </h1>
                                <p className="
                                body-4
                                text-neutral-Grey
                                ">Where to grow your business as a photographer: site or social media?</p>
                            </div>
                            <button className="h-fit w-fit  bg-Primary px-5 py-2 text-white rounded-xs body-4">Register</button>
                        </div>
                    </div>
                    <div className="flex justify-end col-span-5">
                        <img className=" w-[390.99px] h-[415.97px" src="/Illustration.svg" alt="" />
                    </div>
                </div>
                <div className="w-full h-fit flex items-center justify-center">
                    <img className="icon-1" src="/dot.svg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default home
