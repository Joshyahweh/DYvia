import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
        <main className='max-w-[1240px] mx-auto'>
            <span className='text-center'>
                <h2 className='text-4xl sm:text-5xl font-bold'>Trusted by developers across the world</h2>
                <p className='text-1xl sm:text-xl py-6 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum dolorum exercitationem odit. Iste soluta eum itaque dicta vel officiis mollitia.</p>
            </span>
            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                <span className='border py-8 rounded-xl shadow-xl'>
                    <strong className='text-6xl text-indigo-600'>100%</strong>
                    <p className='text-gray-400 mt-2'>Completion</p>
                </span>
                <span className='border py-8 rounded-xl shadow-xl'>
                    <strong className='text-6xl text-indigo-600'>24/7</strong>
                    <p className='text-gray-400 mt-2'>Delivery</p>
                </span>
                <span className='border py-8 rounded-xl shadow-xl'>
                    <strong className='text-6xl text-indigo-600'>100k</strong>
                    <p className='text-gray-400 mt-2'>Transactions</p>
                </span>
            </div>
        </main>
    </div>
  )
}

export default About