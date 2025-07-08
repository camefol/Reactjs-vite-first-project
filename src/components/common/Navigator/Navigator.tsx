import { useState } from "react"
import { NavLink } from 'react-router-dom'

const Navigator = () => {
  const [activeItem, setActiveItem] = useState('Home')

  const menuItems = [
    {id:'home', label:'Home', path:'/'},
    {id:'postservice', label:'Post a Service', path:'/postService'},
    {id:'profile', label:'Profile', path:'/profile'},
  ]

  return (
    <nav className="flex justify-evenly ">
      <div className="max-w-screen mx-auto px-4">
        <ul className="flex justify-center space-x-4 py-4 max-w-screen">
        {menuItems.map(item => (
            <li key={item.id} className="flex items-center flex-shrink-0">
              <NavLink 
                to={item.path}
                className={({ isActive }) => `
                  px-3 py-2 mx-10 rounded-md text-2xl font-medium transition-all duration-500 animate-pulse
                  ${isActive 
                    ? 'bg-blue-300 text-white scale-150' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                  }
                `}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigator