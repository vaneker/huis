import { SparklesIcon } from '@heroicons/react/outline'

function Omgeving() {
  return (
    <div className='relative bg-white pt-16 pb-32 overflow-hidden'>
      <div className='mt-24'>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
          <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2'>
            <div>
              <div>
                <span className='h-12 w-12 rounded-md flex items-center justify-center bg-green-600'>
                  <SparklesIcon className='h-6 w-6 text-white' aria-hidden='true' />
                </span>
              </div>
              <div className='mt-6'>
                <h2 className='text-3xl font-extrabold tracking-tight text-gray-900'>
                  De omgeving
                </h2>
                <p className='mt-4 text-lg text-gray-500'>
                  Het huis bevindt zich nabij de kern van De Lutte (500 meter). De Lutte is een erg
                  gezellig klein knus dorpje in de mooie natuur van Twente. Zo bevinden zich het
                  lutterzand, de tankenberg, de wilmersberg en het arboretum in de omgeving. Ook het
                  Singraven in Denekamp en het Hulsbeek in Oldenzaal bevinden zich op korte
                  rijafstand van het huis (respectievelijk 9,4 en 10,8 kilometer). Wandel- en
                  fietsroutes zijn in overvloed, om te genieten van de rust, ruimte en mooie natuur.
                  Wilt u liever wat dorpjes/stadjes bezichtigen? Er zijn er verschillende leuke
                  plaatsjes te bezoeken, waaronder het karakteristieke Ootmarsum, de bruisende
                  binnenstad van Oldenzaal, of winkelstad Enschede. De Lutte is nabij de grens van
                  Duitsland, waardoor ook onder andere de Burg van Bad Bentheim en de dierentuin en
                  het buitenzwembad in Nordhorn goed bereikbaar zijn.
                </p>
              </div>
            </div>
          </div>
          <div className='mt-12 sm:mt-16 lg:mt-0 lg:col-start-1'>
            <div className='pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
              <img
                className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none'
                src='images/omgeving.jpg'
                alt='Customer profile user interface'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Omgeving }
