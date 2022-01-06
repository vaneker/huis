import { CheckIcon } from '@heroicons/react/outline'

const beganeGrond = [
  {
    name: 'Ruime keuken met televisie.',
  },
  {
    name: 'Bijkeuken met vaatwasser, wasmachine en combi magnetron.',
  },
  {
    name: 'Seperaat toilet.',
  },
  {
    name: 'Grote hal.',
  },
  {
    name: 'Badkamer met douche en toilet.',
  },
  {
    name: '2-persoons slaapkamer.',
  },
  {
    name: 'Ruime woonkamer met piano, gitaar en spelletjeskast.',
  },
]

const eersteEtage = [
  {
    name: 'Drie 2-persoons slaapkamers, waarvan één met ruimte voor luchtbedden om met meer dan 8 personen te kunnen verblijven.',
  },
  {
    name: 'Badkamer met ligbad, aparte douche en toilet.',
  },
]

const tuin = [
  {
    name: 'Grote tuin rondom het huis.',
  },
  {
    name: 'Vuurschaal en vuurkorf.',
  },
  {
    name: 'Barbeque.',
  },
  {
    name: "Voldoende ruimte om auto's bij de deur te kunnen parkeren.",
  },
  {
    name: 'Afsluitbare schuur met ruimte om fietsen veilig te stallen en e-bikes op te laden.',
  },
]

const fotosBeganeGrond = [
  {
    imageUrl: 'images/woonkamer-1.jpg',
  },
  {
    imageUrl: 'images/woonkamer-2.jpg',
  },
  {
    imageUrl: 'images/woonkamer-3.jpg',
  },
  {
    imageUrl: 'images/keuken-1.jpg',
  },
  {
    imageUrl: 'images/badkamer-beneden.jpg',
  },
  {
    imageUrl: 'images/hal.jpg',
  },
  {
    imageUrl: 'images/slaapkamer-beneden.jpg',
  },
]

const fotosEersteEtage = [
  {
    imageUrl: 'images/badkamer-boven-1.jpg',
  },
  {
    imageUrl: 'images/badkamer-boven-2.jpg',
  },
  {
    imageUrl: 'images/trap-overloop.jpg',
  },
  {
    imageUrl: 'images/overloop.jpg',
  },

  {
    imageUrl: 'images/slaapkamer-boven-1.jpg',
  },
  {
    imageUrl: 'images/slaapkamer-boven-2.jpg',
  },
  {
    imageUrl: 'images/slaapkamer-boven-3.jpg',
  },
  {
    imageUrl: 'images/slaapkamer-boven-4.jpg',
  },
]

const fotosTuin = [
  {
    imageUrl: 'images/buiten-1.jpg',
  },
  {
    imageUrl: 'images/vuurkorf.jpg',
  },
  {
    imageUrl: 'images/buiten-2.jpg',
  },
  {
    imageUrl: 'images/buiten-3.jpg',
  },
  {
    imageUrl: 'images/buiten-4.jpg',
  },
  {
    imageUrl: 'images/buiten-5.jpg',
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
              Ruimte, sfeer en voorzien van alle gemakken. Huize kroep is ouderwets genieten met een
              totale oppervlakte van 3000 m2 en ruimte voor 8 personen.
            </p>
          </div>

          <h3 className='text-2xl font-extrabold tracking-tight sm:text-3xl'>Begane grond</h3>
          <dl className='mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8'>
            {beganeGrond.map((feature) => (
              <div key={feature.name} className='relative'>
                <dt>
                  <CheckIcon className='absolute h-6 w-6 text-green-500' aria-hidden='true' />
                  <p className='ml-9 text-lg leading-6 font-medium text-gray-900'>{feature.name}</p>
                </dt>
              </div>
            ))}
          </dl>

          <ul
            role='list'
            className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'
          >
            {fotosBeganeGrond.map((feature) => (
              <li key={feature.imageUrl}>
                <div className='space-y-4'>
                  <div className='aspect-w-3 aspect-h-2'>
                    <img
                      className='object-cover shadow-lg rounded-lg'
                      src={feature.imageUrl}
                      alt=''
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <h3 className='text-2xl font-extrabold tracking-tight sm:text-3xl'>Eerste etage</h3>
          <dl className='mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8'>
            {eersteEtage.map((feature) => (
              <div key={feature.name} className='relative'>
                <dt>
                  <CheckIcon className='absolute h-6 w-6 text-green-500' aria-hidden='true' />
                  <p className='ml-9 text-lg leading-6 font-medium text-gray-900'>{feature.name}</p>
                </dt>
              </div>
            ))}
          </dl>

          <ul
            role='list'
            className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'
          >
            {fotosEersteEtage.map((feature) => (
              <li key={feature.imageUrl}>
                <div className='space-y-4'>
                  <div className='aspect-w-3 aspect-h-2'>
                    <img
                      className='object-cover shadow-lg rounded-lg'
                      src={feature.imageUrl}
                      alt=''
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <h3 className='text-2xl font-extrabold tracking-tight sm:text-3xl'>Tuin</h3>
          <dl className='mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8'>
            {tuin.map((feature) => (
              <div key={feature.name} className='relative'>
                <dt>
                  <CheckIcon className='absolute h-6 w-6 text-green-500' aria-hidden='true' />
                  <p className='ml-9 text-lg leading-6 font-medium text-gray-900'>{feature.name}</p>
                </dt>
              </div>
            ))}
          </dl>

          <ul
            role='list'
            className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'
          >
            {fotosTuin.map((feature) => (
              <li key={feature.imageUrl}>
                <div className='space-y-4'>
                  <div className='aspect-w-3 aspect-h-2'>
                    <img
                      className='object-cover shadow-lg rounded-lg'
                      src={feature.imageUrl}
                      alt=''
                    />
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
