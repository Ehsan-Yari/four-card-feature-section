import './App.css'

function App() {
  return (
    <div className='container mx-auto my-20 grid min-h-screen  max-w-7xl justify-center'>
      <div className='mx-8'>
        <header className='mx-auto mb-20 max-w-xl text-center tracking-wide md:mb-16'>
          <h1 className='mb-2 text-2xl font-extralight  text-neutral-darkBlue md:text-4xl'>
            Reliable, efficient delivery
          </h1>
          <h2 className='mb-4  text-2xl font-semibold text-neutral-darkBlue md:text-4xl'>
            Powered by Technology
          </h2>
          <p className='leading-6 opacity-50'>
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </header>
        <main>
          <section
            id='card_section'
            className='grid items-center gap-6 md:grid-flow-col md:grid-cols-3 md:gap-8 '
          >
            <div className='md:row-span-2'>
              {/* card-1 */}
              <div className='flex flex-col rounded-lg rounded-t-md border-t-4 border-primary-cyan p-7 shadow-2xl'>
                {/* card heading */}
                <div className='mb-8'>
                  <h3 className='mb-1.5 text-xl font-semibold text-neutral-darkBlue'>
                    Supervisor
                  </h3>
                  <p className='text-sm leading-6 tracking-wide text-neutral-darkBlue opacity-50'>
                    Monitors activity to identify project roadblocks
                  </p>
                </div>
                {/* card image */}
                <div className='self-end'>
                  <img src='icon-supervisor.svg' alt='' />
                </div>
              </div>
            </div>
            {/* card-2 */}
            <div className='flex flex-col rounded-lg rounded-t-md border-t-4 border-primary-red  p-7 shadow-xl'>
              {/* card heading */}
              <div className='mb-8'>
                <h3 className='mb-1.5 text-xl font-semibold text-neutral-darkBlue'>
                  Team Builder
                </h3>
                <p className='text-sm leading-6 tracking-wide text-neutral-darkBlue opacity-50'>
                  Scans our talent network to create the optimal team for your
                  project
                </p>
              </div>
              {/* card image */}
              <div className='self-end'>
                <img src='icon-team-builder.svg' alt='' />
              </div>
            </div>
            {/* card-3 */}
            <div className='flex flex-col rounded-lg rounded-t-md border-t-4 border-primary-orange  p-7 shadow-xl'>
              {/* card heading */}
              <div className='mb-8'>
                <h3 className='mb-1.5 text-xl font-semibold text-neutral-darkBlue'>
                  Karma
                </h3>
                <p className='text-sm leading-6 tracking-wide text-neutral-darkBlue opacity-50'>
                  Regularly evaluates our talent to ensure quality
                </p>
              </div>
              {/* card image */}
              <div className='self-end'>
                <img src='icon-karma.svg' alt='' />
              </div>
            </div>
            <div className='md:row-span-2'>
              {/* card-4 */}
              <div className='flex flex-col rounded-lg rounded-t-md border-t-4 border-primary-blue p-7 shadow-xl'>
                {/* card heading */}
                <div className='mb-8'>
                  <h3 className='mb-1.5 text-xl font-semibold text-neutral-darkBlue'>
                    Calculator
                  </h3>
                  <p className='text-sm leading-6 tracking-wide text-neutral-darkBlue opacity-50'>
                    Uses data from past projects to provide better delivery
                    estimates
                  </p>
                </div>
                {/* card image */}
                <div className='self-end'>
                  <img src='icon-calculator.svg' alt='' />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
