const testimonials = [
  {
    quote:
      'VCN gave our neighbourhood house free web hosting and email when we had no budget for technology. Their support helped us reach more families than we ever could on our own.',
    name: 'Maria Santos',
    role: 'Program Coordinator, East Vancouver Community House',
  },
  {
    quote:
      'The training workshops VCN offers made a real difference for our seniors group. Many members now feel confident using email and searching for health resources online.',
    name: 'James Okonkwo',
    role: 'Volunteer, Seniors Connect Vancouver',
  },
  {
    quote:
      'As a small non-profit, reliable Internet access through VCN has been essential. They understand community needs and make technology approachable for everyone.',
    name: 'Priya Sharma',
    role: 'Director, Vancouver Food Share Network',
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Community Testimonials
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear from the individuals and organizations VCN has helped connect to
            the Internet and their community.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm"
            >
              <p className="flex-1 leading-relaxed text-gray-700">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-gray-200 pt-6">
                <cite className="not-italic">
                  <span className="block font-semibold text-gray-900">
                    {testimonial.name}
                  </span>
                  <span className="mt-1 block text-sm text-gray-600">
                    {testimonial.role}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
