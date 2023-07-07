import React from 'react'

const HomePage = () => {
  return (
    <div className='homepage bg-[#efecff] h-[36rem] rounded-lg mx-8'>
        <div className='flex flex-col ml-10 p-20'>
            <h1 >Ahead app</h1>
            <p className='font-bold	text-5xl pt-2 w-[50%]'>Master Your Life by mastering Emotions</p>
            <div className='flex'>
            <img className='h-[10%] w-[10%] pt-10' src="https://icon-library.com/images/download-on-app-store-icon/download-on-app-store-icon-4.jpg"/>
            <div className=' flex flex-col ml-4'>
                <img  className='h-[30%] w-[10%] mt-10' src="https://cdn.vectorstock.com/i/preview-1x/88/44/five-5-star-rank-sign-glossy-golden-star-sticker-vector-37188844.jpg"/>
                <p>100+AppStore reviews</p>
             </div>
           </div>
        </div>
        <img className="w-[40%] h-[50%] absolute top-48 right-28" src="https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/750x500/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/19206339/akrales_190913_3628_0277.jpg"/>
        <div className="bg-red-300 h-20 w-20 rounded-full absolute bottom-0 z-20 left-[500px]"></div>
        <div className="bg-white h-20 w-20 absolute -bottom-[53px] z-20 left-[500px]"></div>
    </div>
  )
}

export default HomePage