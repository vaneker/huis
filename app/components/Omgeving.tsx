function Omgeving() {
  return (
    <>
      <div className='mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl'>
        <div>
          <p className='mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl'>
            Omgeving
          </p>
          <p className='mt-5 max-w-prose mx-auto text-xl text-gray-500'>
            Kom genieten van het prachtige en veelzijdige Twentse landschap. Huize Kroep biedt een
            fijne uitvalsbasis om Twente te verkennen.
          </p>
        </div>

        <img
          className='rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 mt-5'
          src='images/omgeving.jpg'
          alt='Lutterzand en de Dinkel bij zonsopkomst'
        />
      </div>

      <div className='relative bg-white pt-16 pb-32 overflow-hidden'>
        <div className='relative'>
          <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
            <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0'>
              <div>
                <div className='mt-6'>
                  <h2 className='text-3xl font-extrabold tracking-tight text-gray-900'>
                    Lekker cultuur snuiven?
                  </h2>
                  <p className='mt-4 text-lg text-gray-500'>
                    Het huis bevindt zich nabij de kern van De Lutte (500 meter). De Lutte is een
                    erg gezellig klein knus dorpje in de mooie natuur van Twente. Zo bevinden zich
                    het lutterzand, de tankenberg, de wilmersberg en het arboretum in de omgeving.
                    Ook het Singraven in Denekamp en het Hulsbeek in Oldenzaal bevinden zich op
                    korte rijafstand van het huis (respectievelijk 9,4 en 10,8 kilometer).
                  </p>
                </div>
              </div>
              <div className='mt-8 border-t border-gray-200 pt-6'>
                <blockquote>
                  <div>
                    <p className='text-base text-gray-500'>
                      &ldquo;Wij zijn hier een weekend geweest met mijn gezin en m'n ouders, alles
                      was super geregeld en het contact verliep heel gemoedelijk.&rdquo;
                    </p>
                  </div>
                  <footer className='mt-3'>
                    <div className='flex items-center space-x-3'>
                      <div className='flex-shrink-0'>
                        <img
                          className='h-8 w-8 rounded-full'
                          src='images/sonja.jpg'
                          alt='profiel foto van Sonja'
                        />
                      </div>
                      <div className='text-base font-medium text-gray-700'>Sonja de Korte</div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className='mt-12 sm:mt-16 lg:mt-0'>
              <div className='pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
                <img
                  className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                  src='images/watermolen.jpg'
                  alt='Het Singraven in Denekamp'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='mt-24'>
          <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
            <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2'>
              <div>
                <div className='mt-6'>
                  <h2 className='text-3xl font-extrabold tracking-tight text-gray-900'>
                    Of toch de natuur in?
                  </h2>
                  <p className='mt-4 text-lg text-gray-500'>
                    Wandel- en fietsroutes zijn in overvloed, om te genieten van de rust, ruimte en
                    mooie natuur. Wilt u liever wat dorpjes/stadjes bezichtigen? Er zijn er
                    verschillende leuke plaatsjes te bezoeken, waaronder het karakteristieke
                    Ootmarsum, de bruisende binnenstad van Oldenzaal, of winkelstad Enschede. De
                    Lutte is nabij de grens van Duitsland, waardoor ook onder andere de Burg van Bad
                    Bentheim en de dierentuin en het buitenzwembad in Nordhorn goed bereikbaar zijn.
                  </p>
                </div>
              </div>
            </div>
            <div className='mt-12 sm:mt-16 lg:mt-0 lg:col-start-1'>
              <div className='pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
                <img
                  className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none'
                  src='images/schotse-hooglanders.jpg'
                  alt='Schotse hooglanders'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { Omgeving }
