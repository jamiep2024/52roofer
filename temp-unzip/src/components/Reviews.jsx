import React from 'react'

const reviews = [
  {
    title: 'Punctual, Friendly & Efficient',
    content: 'Aventus Roofing did an excellent job replacing our flat roof. Joseph and his team were punctual, friendly, and efficient. Very pleased with their work. The new roof looks great and the cleanup was spotless. Highly recommend them!',
    author: 'Amy Jarvis',
    date: 'Jan 2024',
    service: 'Flat Roof Replacement',
    image: '/reviews/review1.jpg',
    avatar: 'A'
  },
  {
    title: 'Impeccable Work Ethic',
    content: 'Highly recommend! Joseph from Aventus Roofing exceeded expectations with their swift response & impeccable work ethic. They completed the roof replacement on schedule and left the house spotless. Great job!',
    author: 'Becca Turner',
    date: 'May 2024',
    service: 'Roof & Gutter Replacement',
    image: '/reviews/review2.jpg',
    avatar: 'B'
  },
  {
    title: 'Completed Ahead Of Schedule',
    content: 'I had a great experience with Aventus Roofing. Joseph were knowledgeable, courteous, and efficient. They completed the job ahead of schedule and the roof looks fantastic. Highly recommended for anyone needing roofing services!',
    author: 'Terry Anders',
    date: 'May 2024',
    service: 'Roof Repair',
    image: '/reviews/review3.jpg',
    avatar: 'T'
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
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors">
            Get Your FREE Roofing Quote 👉
          </button>
          <div className="text-lg">
            Or Call Us Now <span className="font-bold">01865 692128</span>
          </div>
        </div>
      </div>
    </div>
  )
}
