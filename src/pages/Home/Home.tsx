import Section from '../../components/common/Section';
import Card from '../../components/common/Card';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

const Home = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await axios.get('servicesData.json');
        setServices(response.data.data || []);
      } catch (err) {
        setError('Failed to load services');
        console.error('Error fetching services:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <div className="flex max-w-screen text-center sm:text-left flex-col items-center">
      {/* Hero Section */}
      <div className="py-8 text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-900 bg-clip-text">
        <h1>Find your desired service!</h1>
      </div>

      {/* Services Section */}
      <Section variant="dark" sectionSize="medium" className="flex flex-col">
        <h2 className="flex justify-center items-center m-6 font-light text-2xl text-center tracking-wide">
          Featured Services
        </h2>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Cards Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 px-12 py-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-600 max-w-screen"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#9ca3af #4b5563'
            }}
          >
            {loading ? (
              // Loading skeleton
              Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex-shrink-0 w-80 snap-start">
                  <div className="bg-gray-700 animate-pulse rounded-lg h-64" />
                </div>
              ))
            ) : error ? (
              <div className="flex-shrink-0 w-full text-center py-8">
                <p className="text-red-400">{error}</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  Retry
                </button>
              </div>
            ) : services.length === 0 ? (
              <div className="flex-shrink-0 w-full text-center py-8">
                <p className="text-gray-400">No services available</p>
              </div>
            ) : (
              services.map((service, index) => (
                <div key={service.id || index} className="flex-shrink-0 w-80 snap-start">
                  <Card
                    title={service.title}
                    description={service.description || service.title}
                    date={service.date}
                    imageAlt={service.imageAlt}
                    imageUrl={service.imageUrl}
                    href={service.href}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </Section>

      {/* Additional Sections */}
      <Section variant="default">
        <div className="text-center py-8">
          <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide exceptional services with a focus on quality and customer satisfaction.
          </p>
        </div>
      </Section>

      <Section variant="blue">
        <div className="text-center py-8">
          <h2 className="text-3xl font-semibold mb-4 text-white">Get Started Today</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-6">
            Ready to find the perfect service for your needs? Browse our categories or contact us directly.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Contact Us
          </button>
        </div>
      </Section>
    </div>
  );
};

export default Home;