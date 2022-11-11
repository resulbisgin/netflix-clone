import React from 'react'

const Singup = () => {
  return (
    <>
        <div className='w-full h-screen '>
            <img className='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/0ef67cc5-0aa7-47cf-87bd-7f595afc7cfb/fe30386d-bd9f-4f61-bcb8-4b923614a5ef/TR-tr-20221107-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='/'/>
            <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
            <div className='fixed w-full px-4 py-24 z-50'>
                    <div className='max-w-[450px] h-[600px] max-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-bold'>Sing Up</h1>
                            <form>
                                <input type='email' placeholder='Email' autoComplete='email' />
                                <input type='password' placeholder='Password' autoComplete='current-password'/> 
                            </form>
                        </div>
                    </div>
            </div>
        </div>
    </>

  )
}

export default Singup