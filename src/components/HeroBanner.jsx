import Button from './Button'
import vcnLogo from '../assets/vcn-logo.png'

function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-700 to-brand-600 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium tracking-wide backdrop-blur-sm">
            Vancouver Community Network
          </span>

          <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            The Internet should be accessible to all
          </h1>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Button href="#services">Discover Our Services</Button>
            <Button href="#contact" variant="secondary">
              Get Connected
            </Button>
          </div>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100 sm:text-xl">
            Vancouver Community Network (VCN) is a non-profit Internet service
            provider that provides free services to assist individuals, community
            groups and non-profit organizations in accessing and utilizing the
            Internet to its fullest ability. We believe the information, resources
            and opportunities on the Internet should be accessible to all! 
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100 sm:text-xl">
            We work to expand public access to computers and the Internet, provide
            educational services for their effective use and promote local content
            on the web.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={vcnLogo}
            alt="Vancouver Community Network"
            className="w-full max-w-xs rounded-2xl bg-white p-6 shadow-2xl sm:max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
