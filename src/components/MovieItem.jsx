import React from 'react'

const MovieItem = ({img, title,releasedate,rating}) => {
  return (
    
        <div className="bg-white shadow-lg rounded-lg overflow-hidden m-[20px]">
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        
        <div className="flex items-center justify-between my-2">
          <span className="text-lg font-bold">Release Date: {releasedate}</span>
          <div className="flex items-center">
            <span className="text-yellow-500">
              {'★'.repeat(Math.floor(rating))}
              {'☆'.repeat(5 - Math.floor(rating))}
            </span>
            <span className="ml-2 text-gray-600">({rating})</span>
          </div>
        </div>
      </div>
    </div>
  )
}

 export default MovieItem

