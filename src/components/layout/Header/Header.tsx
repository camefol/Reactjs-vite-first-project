import { useState } from "react"

const Header = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleFindServices = () => {
    setActiveButton('find');
    // Simulate navigation and scroll
    setTimeout(() => {
      const middleOfPage = document.body.scrollHeight / 2;
      window.scrollTo({
        top: middleOfPage,
        behavior: 'smooth'
      });
    }, 100);
  };

  const handleOfferServices = () => {
    setActiveButton('offer');
    // Simulate navigation
  };

  return (
    <header className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      
      <div className="relative mx-auto px-4 py-16 flex justify-center items-center min-h-96 flex-col text-center max-w-4xl">
        <div className="space-y-6">
          {/* Main title */}
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-default">
            Welcome To Services App
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Here you can find your desired service you need. 
            <span className="block mt-2 text-blue-600 font-semibold">
              Hire freelancers or offer services you provide!
            </span>
          </h2>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center mt-8">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full mx-4"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
          </div>
          
          {/* Optional CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 mb-12">
            <button 
              className={`px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ${
                activeButton === 'find' ? 'ring-4 ring-blue-200' : ''
              }`}
              onClick={handleFindServices}
            >
              Find Services
            </button>
            <button 
              className={`px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 ${
                activeButton === 'offer' ? 'ring-4 ring-blue-200' : ''
              }`}
              onClick={handleOfferServices}
            >
              Offer Services
            </button>
          </div>
        </div>
      </div>
      
      {/* Curved bottom transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          className="relative block w-full h-16 md:h-24"
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          {/* Main curve */}
          <path 
            d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" 
            fill="white"
            className="drop-shadow-sm"
          />
          {/* Subtle gradient overlay */}
          <defs>
            <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.1)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
            </linearGradient>
          </defs>
          <path 
            d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" 
            fill="url(#curveGradient)"
          />
        </svg>
      </div>
      
      {/* Optional: Add some floating elements for extra visual interest */}
      <div className="absolute bottom-8 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute bottom-12 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
    </header>
  )
}

export default Header