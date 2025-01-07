import React from 'react'

const reviews = [
  {
    title: 'Exceptional Roofing Service',
    content: 'Exceptional roofing service from start to finish! The crew was punctual, professional, and meticulous in their work. Our new roof looks fantastic and we feel confident in its quality. 52 Roofer truly delivers on their promises.',
    author: 'Emily Carter',
    date: 'Jun 2024',
    service: 'Roof Replacement',
    image: '/images/logo.jpg',
    avatar: 'E'
  },
  {
    title: 'Professional and Reliable',
    content: 'The team was extremely professional and reliable. They kept us informed throughout the process and completed the work to a very high standard. Our new roof has transformed the look of our home!',
    author: 'Sarah Johnson',
    date: 'Apr 2024',
    service: 'Roof Replacement',
    image: '/images/IMG_0697.JPG',
    avatar: 'S'
  },
  {
    title: 'Excellent Communication',
    content: 'From the initial consultation to project completion, the communication was excellent. The team worked efficiently and left the site spotless. We couldn\'t be happier with our new roof!',
    author: 'Michael Brown',
    date: 'Mar 2024',
    service: 'Flat Roof Installation',
    image: '/images/IMG_7759.JPG',
    avatar: 'M'
  },
  {
    title: 'Highly Skilled Team',
    content: 'The roofing team demonstrated exceptional skill and attention to detail. They addressed all our concerns and completed the project on time. The quality of work is outstanding!',
    author: 'Lisa Wilson',
    date: 'Feb 2024',
    service: 'Roof Repair',
    image: '/images/IMG_1665.JPG',
    avatar: 'L'
  }
]

export default function Reviews() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Five Star Reviews From Our Customers
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div key={review.author} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex gap-6">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-4">"{review.title}"</h3>
                  <p className="text-gray-600 mb-4">{review.content}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                      {review.avatar}
                    </div>
                    <div>
                      <div className="font-medium">{review.author}</div>
                      <div className="text-sm text-gray-500">
                        {review.service} ({review.date})
                      </div>
                    </div>
                    <div className="flex ml-auto">
                      {[1,2,3,4,5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                {review.image && (
                  <img 
                    src={review.image} 
                    alt={`${review.author}'s Review`}
                    className="w-48 h-48 object-cover rounded-lg"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 mt-12">
          <button className="bg-pink-600 text-white px-10 py-5 rounded-xl font-bold hover:bg-pink-700 transition-all transform hover:scale-110 shadow-lg hover:shadow-xl border-2 border-pink-700">
            Get Your FREE Roofing Quote 👉
          </button>
          <button 
            onClick={() => window.location.href = 'tel:07990101321'}
            className="bg-pink-600 text-white px-10 py-5 rounded-xl font-bold hover:bg-pink-700 transition-all transform hover:scale-110 flex items-center gap-2 shadow-lg hover:shadow-xl border-2 border-pink-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Us Now
          </button>
        </div>
      </div>
    </div>
  )
}
