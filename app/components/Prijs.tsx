import { CheckIcon } from '@heroicons/react/outline'

const pricing = {
  tiers: [
    {
      title: 'Midweek',
      price: 752,
      nights: 4,
      description: 'Van maandag tot vrijdag genieten.',
      mostPopular: false,
      features: ['4 nachten verblijf'],
    },
    {
      title: 'Hele week',
      price: 936,
      nights: 6,
      description: 'Een volle week genieten voor de volledige ervaring.',
      mostPopular: true,
      features: ['6 nachten verblijf'],
    },
    {
      title: 'Weekend',
      price: 400,
      nights: 2,
      description: 'Er even lekker een weekendje tussenuit.',
      mostPopular: false,
      features: ['2 nachten verblijf'],
    },
  ],
}

function Prijs() {
  return (
    <div className='max-w-7xl mx-auto py-24 px-4 bg-white sm:px-6 lg:px-8'>
      <h2 className='text-2xl font-extrabold text-gray-900 sm:text-4xl sm:leading-none sm:tracking-tight lg:text-5xl'>
        Prijzen
      </h2>
      <p className='mt-6 max-w-2xl text-xl text-gray-500'>
        Kies de duur van het verblijf die het beste bij u past, de check-in is mogelijk{' '}
        <b>vanaf 15.00</b> uur. De check-out is om <b>uiterlijk 10.00</b> uur.
      </p>

      {/* Tiers */}
      <div className='mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8'>
        {pricing.tiers.map((tier) => (
          <div
            key={tier.title}
            className='relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col'
          >
            <div className='flex-1'>
              <h3 className='text-xl font-semibold text-gray-900'>{tier.title}</h3>
              {tier.mostPopular ? (
                <p className='absolute top-0 py-1.5 px-4 bg-green-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2'>
                  Meest populaire keuze
                </p>
              ) : null}
              <p className='mt-4 flex items-baseline text-gray-900'>
                <span className='text-5xl font-extrabold tracking-tight'>€{tier.price}</span>
                <p className='text-2xl font-semibold tracking-tight mt-1'>
                  €{(tier.price / 8 / tier.nights).toFixed(2).replace('.', ',')} p/p nacht
                </p>
                <p className='text-xl font-medium tracking-tight mt-1'>(op basis van 8 personen)</p>
              </p>
              <p className='mt-6 text-gray-500'>{tier.description}</p>

              <ul role='list' className='mt-6 space-y-6'>
                {tier.features.map((feature) => (
                  <li key={feature} className='flex'>
                    <CheckIcon
                      className='flex-shrink-0 w-6 h-6 text-green-500'
                      aria-hidden='true'
                    />
                    <span className='ml-3 text-gray-500'>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { Prijs }
