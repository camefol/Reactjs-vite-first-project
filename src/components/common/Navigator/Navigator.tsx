import { useState } from "react"

const Navigator = () => {
  const [activeItem, setActiveItem] = useState('Home')

  const menuItems = [
    {id:'home', label:'Home', path:'/'},
    {id:'postservice', label:'Post a Service', path:'/postService'},
    {id:'profile', label:'Profile', path:'/profile'},
  ]

  const handleItemClick = (label) => {
    setActiveItem(label)
  }

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-screen-xl mx-auto px-2 sm:px-4">
        <ul className="flex justify-center space-x-1 sm:space-x-4 py-2 sm:py-4">
        {menuItems.map(item => (
            <li key={item.id} className="flex-1 sm:flex-none">
              <button
                onClick={() => handleItemClick(item.label)}
                className={`
                  block w-full px-2 sm:px-4 py-2 rounded-md text-sm sm:text-lg md:text-xl font-medium transition-all duration-300 text-center
                  ${activeItem === item.label
                    ? 'bg-blue-500 text-white shadow-md' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                  }
                `}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigator