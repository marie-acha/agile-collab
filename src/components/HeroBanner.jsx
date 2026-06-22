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
            Agile Collaboration Platform
          </span>

          <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Work smarter together, deliver faster
          </h1>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Button href="#services">Explore Our Services</Button>
            <Button href="#contact" variant="secondary">
              Get Started Free
            </Button>
          </div>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100 sm:text-xl">
            Agile Collab helps teams plan sprints, track progress, and ship
            products with clarity — all in one responsive workspace built for
            modern teams.
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
