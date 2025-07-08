import { ReactNode } from 'react'

interface CardProps {
  title?: string,
  description?: string,
  date?: number,
  imageUrl?: string,
  imageAlt?: string,
  href?: string
}

const Card = ({
  title,
  description,
  date, 
  imageUrl,
  imageAlt,
  href
}: CardProps) => {
  return (
    <div className='mx-auto border border-gray-200 rounded-lg shadow-sm bg-white overflow-visible max-w-md min-h-96 flex flex-col'>
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={imageAlt || title || 'Card image'}
          className="w-full h-48 object-cover flex-shrink-0"
        />
      )}
      
      <div className="p-6 flex-1 flex flex-col">
        {title && (
          <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
            {title}
          </h3>
        )}
        
        {description && (
          <p className="text-gray-600 mb-4 leading-relaxed flex-1 line-clamp-3">
            {description}
          </p>
        )}
        
        <div className="mt-auto">
          {date && (
            <time className="text-sm text-gray-500 block mb-4">
              {new Date(date).toLocaleDateString()}
            </time>
          )}
          
          {href && (
            <a 
              href={href}
              className="inline-block text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Read more →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card