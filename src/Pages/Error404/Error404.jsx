
import { Link } from 'react-router-dom';

function Error404() {
    return (
        <>
            <div className="flex flex-col items-center justify-center ">
                <div className="text-center">
                    <div className="relative">

                        <div className="relative z-10">
                            {/* <img
                                src={error404img}
                                alt="403 Illustration"
                                className='w-full h-screen object-cover'
                            /> */}
                        </div>
                    </div>
                    <div className=''>
                        <h1 className="text-2xl font-semibold text-gray-800 mt-8">We are Sorry...</h1>
                        <p className="text-gray-600 mt-4">
                            The page you’re trying to access has restricted access. <br />
                            Please refer to your system administrator.
                        </p>
                        <Link to={`/`}
                            className="mt-8 px-6 py-2 bg-blue-500 text-white font-medium rounded-full shadow-md hover:bg-blue-600 focus:outline-none"

                        >
                            Go Back
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Error404