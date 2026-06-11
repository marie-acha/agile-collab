import Button from './Button'

function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-700 to-brand-600 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium tracking-wide backdrop-blur-sm">
          Agile Collaboration Platform
        </span>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Work smarter together, deliver faster
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-100 sm:text-xl">
          Agile Collab helps teams plan sprints, track progress, and ship
          products with clarity — all in one responsive workspace built for
          modern teams.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Button href="#services">Explore Our Services</Button>
          <Button href="#contact" variant="secondary">
            Get Started Free
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
