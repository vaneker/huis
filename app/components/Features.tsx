import { CheckIcon } from '@heroicons/react/outline'

const featuress = [
  {
    name: 'Keuken',
  },
  {
    name: 'Bijkeuken met vaatwasser en wasmachine',
  },
  {
    name: 'Woonkamer',
  },
  {
    name: '4 tweepersoons slaapkamers',
  },
  {
    name: 'Badkamer met douche en toilet beneden',
  },
  {
    name: 'Separaat toilet beneden',
  },
  {
    name: 'Hal met trap',
  },
  {
    name: 'Badkamer met douchte, bad en toilet boven',
  },
]

const features = [
  {
    kamer: 'Woonkamer',
    omschrijving: 'Heerlijk ontspannen na een dagje ontdekken',
    imageUrl: 'images/woonkamer-1.jpg',
  },
  {
    kamer: 'Woonkamer',
    omschrijving: 'Ruimte voor het hele gezelschap',
    imageUrl: 'images/woonkamer-2.jpg',
  },
  {
    kamer: 'Woonkamer',
    omschrijving: 'Voorzien van comfortabele banken en stoelen',
    imageUrl: 'images/woonkamer-3.jpg',
  },
  {
    kamer: 'Keuken',
    omschrijving: 'Heerlijk koken voor het hele gezelschap',
    imageUrl: 'images/keuken-1.jpg',
  },
  {
    kamer: 'Badkamer met douche en toilet op begaande grond',
    omschrijving: '',
    imageUrl: 'images/badkamer-beneden.jpg',
  },
  {
    kamer: 'Hal',
    omschrijving: '',
    imageUrl: 'images/hal.jpg',
  },
  {
    kamer: 'Badkamer boven',
    omschrijving: 'Heerlijk ontspannen na een dagje ontdekken',
    imageUrl: 'images/badkamer-boven-1.jpg',
  },
  {
    kamer: 'Badkamer boven',
    omschrijving: 'Ruimte voor het hele gezelschap',
    imageUrl: 'images/badkamer-boven-2.jpg',
  },
  {
    kamer: 'Trap met overloop',
    omschrijving: 'Voorzien van comfortabele banken en stoelen',
    imageUrl: 'images/trap-overloop.jpg',
  },
  {
    kamer: 'Overloop',
    omschrijving: 'Heerlijk koken voor het hele gezelschap',
    imageUrl: 'images/overloop.jpg',
  },
  {
    kamer: 'Slaapkamer op begane grond',
    omschrijving: '',
    imageUrl: 'images/slaapkamer-beneden.jpg',
  },
  {
    kamer: 'Slaapkamer boven',
    omschrijving: '',
    imageUrl: 'images/slaapkamer-boven-1.jpg',
  },
  {
    kamer: 'Slaapkamer boven',
    omschrijving: '',
    imageUrl: 'images/slaapkamer-boven-2.jpg',
  },
  {
    kamer: 'Slaapkamer boven',
    omschrijving: '',
    imageUrl: 'images/slaapkamer-boven-3.jpg',
  },
  {
    kamer: 'Slaapkamer boven',
    omschrijving: '',
    imageUrl: 'images/slaapkamer-boven-4.jpg',
  },
]

function Features() {
  return (
    <div className='bg-white'>
      <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <div className='space-y-12'>
          <div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
            <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
              Van alle gemakken voorzien
            </h2>
            <p className='text-xl text-gray-500'>
              Ruimte, sfeer en voorzien van alle gemakken, Huize Kroep is ouderwets genieten.
            </p>
          </div>
          <ul
            role='list'
            className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'
          >
            {features.map((feature) => (
              <li key={feature.imageUrl}>
                <div className='space-y-4'>
                  <div className='aspect-w-3 aspect-h-2'>
                    <img
                      className='object-cover shadow-lg rounded-lg'
                      src={feature.imageUrl}
                      alt=''
                    />
                  </div>

                  <div className='space-y-2'>
                    <div className='text-lg leading-6 font-medium space-y-1'>
                      <h3>{feature.kamer}</h3>
                      <p className='text-emerald-600'>{feature.omschrijving}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export { Features }
