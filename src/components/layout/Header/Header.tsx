import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleFindServices = () => {
    // Navigate to home page
    navigate('/');
    
    // Wait a bit for navigation to complete, then scroll
    setTimeout(() => {
      // Scroll to middle of the page
      const middleOfPage = document.body.scrollHeight / 2;
      window.scrollTo({
        top: middleOfPage,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <header className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-1000"></div>
      
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            onClick={handleFindServices}>
              Find Services
            </button>
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300">
              Offer Services
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header