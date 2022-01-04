import { CheckIcon } from '@heroicons/react/outline'

const features = [
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

function Features() {
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl font-extrabold text-gray-900'>Van alle gemakken voorzien</h2>
          <p className='mt-4 text-lg text-gray-500'>
            Het huis beschikt over een begane grond en een bovenverdieping.
          </p>
        </div>
        <dl className='mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8'>
          {features.map((feature) => (
            <div key={feature.name} className='relative'>
              <dt>
                <CheckIcon className='absolute h-6 w-6 text-green-500' aria-hidden='true' />
                <p className='ml-9 text-lg leading-6 font-medium text-gray-900'>{feature.name}</p>
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export { Features }
