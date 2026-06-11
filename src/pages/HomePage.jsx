import HeroBanner from '../components/HeroBanner'
import FeaturedServices from '../components/FeaturedServices'

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <span className="text-xl font-bold text-brand-700">Agile Collab</span>
          <nav className="hidden gap-6 text-sm font-medium text-gray-600 sm:flex">
            <a href="#services" className="transition-colors hover:text-brand-600">
              Services
            </a>
            <a href="#contact" className="transition-colors hover:text-brand-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <HeroBanner />
        <FeaturedServices />
      </main>

      <footer
        id="contact"
        className="border-t border-gray-200 bg-gray-900 py-10 text-center text-gray-400"
      >
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Agile Collab. Built for teams that
          ship together.
        </p>
      </footer>
    </div>
  )
}

export default HomePage
