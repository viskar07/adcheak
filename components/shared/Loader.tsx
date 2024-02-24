import React from 'react'

const Loader = () => {
    return (
            <div className='flex flex-col items-center justify-center gap-5 mt-6' >
                <div className="relative">
                    <div className="h-16 w-16  rounded-full border-t-8 border-b-8 border-gray-200"></div>
                    <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
                    </div>
                </div>
            </div>
    )
}

export default Loader