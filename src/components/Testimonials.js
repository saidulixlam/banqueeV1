import { FaStar } from "react-icons/fa";

const Testmonials = () => {
    return (
        <section className="bg-white mt-10">
            <div className="lg:mx-32 md:mx-16 sm :mx-8 p-6 mt-8">
                <div className='text-left my-4'>
                    <span className='text-sm text-muted'>Testmonials</span>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full">
                        <div className="sm:w-full mb-4 sm:mb-0">
                            <h2 className="text-3xl font-bold">People all over the</h2>
                            <h2 className="text-3xl font-bold">world use Banko.</h2>
                        </div>
                        <p className="text-sm flex items-center whitespace-nowrap">
                            <FaStar className="h-8 w-8 z-10 p-1 mr-2 text-green-600 bg-green-200 rounded-full" />
                            rated
                            <span className="text-sm text-green-500 mx-2">4.85/5</span>
                            from over 10000 users
                        </p>
                    </div>


                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="border p-4 rounded-lg shadow-lg bg-white">
                            <span className="block text-yellow-500 text-lg">★★★★★</span>
                            <h3 className="text-xl font-semibold mt-2 mb-1">Dwain John</h3>
                            <p className="text-sm text-gray-600 text-wrap overflow-hidden">
                                Ji e nhak de bal r kotha ehfb ywg fjw gfw ejfgwej gfwe yjgfweyj fgejgu
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testmonials;