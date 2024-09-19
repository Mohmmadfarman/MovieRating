import React from 'react'

export default function Box({data}) {
  return (

   <div>
    {
        data? <div className='w-full h-max flex flex-col md:flex-row gap-7 items-center justify-center'>
        <div className='w-[90%] sm:w-[60%] md:w-[40%] lg:w-[40%] h-max'>
          <img className='p-10 ' src={data.Poster} alt="" />
        </div>
        <div className='w-[90%] sm:w-[70%] md:w-[50%] lg:w-[50%] h-max'>
  
          <h1>Title :<span>{data.Title}</span></h1>
          <h1>Genre :<span>{data.Genre}</span></h1>
          <h1>ImdbRating:<span>{data.imdbRating}</span></h1>
          <h1>Plot :<span>{data.Plot}</span></h1>
          <h1>Language :<span>{data.Language}</span></h1>
          <h1>Released Year :<span>{data.Released}</span></h1>
          <h1>Duration :<span>{data.Runtime}</span></h1>
        </div>
      </div> :null
    }
   </div>
  )
}
