import HeroBanner from '../components/HeroBanner'
import FeaturedServices from '../components/FeaturedServices'
import Testimonials from '../components/Testimonials'
import vcnLogo from '../assets/vcn-logo.png'

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center">
            <img
              src={vcnLogo}
              alt="Vancouver Community Network"
              className="h-8 w-auto sm:h-10"
            />
          </a>
          <nav className="hidden gap-6 text-sm font-medium text-gray-600 sm:flex">
            <a href="#services" className="transition-colors hover:text-brand-600">
              Services
            </a>
            <a
              href="#testimonials"
              className="transition-colors hover:text-brand-600"
            >
              Testimonials
            </a>
            <a href="#contact" className="transition-colors hover:text-brand-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="flex flex-col gap-16 sm:gap-24 lg:gap-32">
        <HeroBanner />
        <FeaturedServices />
        <Testimonials />
      </main>

      <footer
        id="contact"
        className="mt-16 border-t border-gray-200 bg-gray-900 py-12 text-center text-gray-400 sm:mt-24 sm:py-16"
      >
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Vancouver Community Network.
          Connecting our community to the Internet.
        </p>
      </footer>
    </div>
  )
}

export default HomePage
