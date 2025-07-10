import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const PostService = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // In a real app, you would post to your backend API
      // const response = await axios.post('/api/jobs', data);
      
      // For demo purposes, we'll just log and navigate
      console.log('New job listing:', data);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      reset();
      navigate('/jobs'); // Redirect to jobs page after submission
    } catch (error) {
      console.error('Error submitting job:', error);
      setSubmitError('Failed to submit job listing. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="sd:mx-auto w-auto sd:w-screen p-8 my-4 bg-white rounded-lg shadow-md">
    <h1 className="text-2xl font-bold mb-6">Add New Job Listing</h1>
    
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Title Field */}
      <div>
        <label htmlFor="title" className="block text-gray-700 mb-2 font-medium">
          Job Title*
        </label>
        <input
          id="title"
          {...register('title', { required: 'Job title is required' })}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.title ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
          }`}
          placeholder="e.g. HVAC Technician for Apartment Complex"
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
        )}
      </div>

      {/* Description Field */}
      <div>
        <label htmlFor="description" className="block text-gray-700 mb-2 font-medium">
          Job Description*
        </label>
        <textarea
          id="description"
          {...register('description', { 
            required: 'Description is required',
            minLength: {
              value: 50,
              message: 'Description should be at least 50 characters'
            }
          })}
          rows={6}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.description ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
          }`}
          placeholder="Detailed job description including responsibilities, requirements, etc."
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
        )}
      </div>

      {/* Image URL Field */}
      <div>
        <label htmlFor="imageUrl" className="block text-gray-700 mb-2 font-medium">
          Image URL
        </label>
        <input
          id="imageUrl"
          type="url"
          {...register('imageUrl', {
            pattern: {
              value: /^(https?:\/\/).+\.(jpg|jpeg|png|webp)$/i,
              message: 'Please enter a valid image URL'
            }
          })}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.imageUrl ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
          }`}
          placeholder="https://example.com/image.jpg"
        />
        {errors.imageUrl && (
          <p className="mt-1 text-sm text-red-600">{errors.imageUrl.message}</p>
        )}
      </div>

      {/* Image Alt Text Field */}
      <div>
        <label htmlFor="imageAlt" className="block text-gray-700 mb-2 font-medium">
          Image Description (Alt Text)
        </label>
        <input
          id="imageAlt"
          {...register('imageAlt')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
          placeholder="Description of the image for accessibility"
        />
      </div>

      {/* Wage Field */}
      <div>
        <label htmlFor="wage" className="block text-gray-700 mb-2 font-medium">
          Hourly Wage/Salary*
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
          <input
            id="wage"
            type="number"
            {...register('wage', { 
              required: 'Wage is required',
              min: {
                value: 1,
                message: 'Wage must be positive'
              }
            })}
            className={`w-full pl-8 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.wage ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
            }`}
            placeholder="e.g. 32"
            step="0.01"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">/hour</span>
        </div>
        {errors.wage && (
          <p className="mt-1 text-sm text-red-600">{errors.wage.message}</p>
        )}
      </div>

      {/* Location Field */}
      <div>
        <label htmlFor="address" className="block text-gray-700 mb-2 font-medium">
          Location/Address*
        </label>
        <input
          id="address"
          {...register('address', { required: 'Location is required' })}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.address ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
          }`}
          placeholder="e.g. 753 Parkview Apartments"
        />
        {errors.address && (
          <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
        )}
      </div>

      {/* Date Field */}
      <div>
        <label htmlFor="date" className="block text-gray-700 mb-2 font-medium">
          Posting Date*
        </label>
        <input
          id="date"
          type="date"
          {...register('date', { required: 'Date is required' })}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.date ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
          }`}
        />
        {errors.date && (
          <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className='block mb-2 font-medium text-gray-700'>
          Email*
        </label>
        <input
        id="email"
        type="email"
        {...register('email', { 
          required: 'Your Email is required'
      })}
        className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
          errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`
        }
        placeholder='example@gmail.com'
        />
        {errors.email && (
          <p className='mt-1 text-sm text-red-600'>{errors.email.message}</p>
        )}
      </div>
      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition duration-200 ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Job Listing'}
        </button>
        
        {submitError && (
          <p className="mt-4 text-center text-red-600">{submitError}</p>
        )}
      </div>
    </form>
  </div>
  )
}

export default PostService