import { CheckIcon, ExclamationCircleIcon } from '@heroicons/react/outline'

const commonFeatures = [
  'Opgemaakte bedden',
  'Handdoeken',
  'Eindschoonmaak (zelf bezemschoon opleveren)',
  'Gratis WiFi',
]

const pricing = {
  midweek: {
    title: 'Midweek',
    price: 625,
    features: ['Van maandag tot vrijdag genieten', ...commonFeatures, '4 nachten verblijf'],
    cta: 'Boek een midweek',
    email:
      'Hallo, %0D%0AWij zouden graag vanaf [[Datum in dag-maand-jaar]] een midweek reserveren.%0D%0AWij komen met [[aantal personen]] personen.%0D%0A[[Uw contactgegevens]]%0D%0AOverige vragen:',
  },
  week: {
    title: 'Hele week',
    price: {
      laagseizoen: 905,
      hoogseizoen: 1150,
    },
    features: [
      'Een volle week genieten voor de volledige ervaring',
      ...commonFeatures,
      'Beschikbaar in hoogseizoen en laagseizoen',
      '6 nachten verblijf',
    ],
    cta: 'Boek een week',
    email:
      'Hallo, %0D%0AWij zouden graag vanaf [[Datum in dag-maand-jaar]] een week reserveren.%0D%0AWij komen met [[aantal personen]] personen.%0D%0A[[Uw contactgegevens]]%0D%0AOverige vragen:',
  },
  weekend: {
    title: 'Weekend',
    price: 475,
    features: ['Er even lekker een weekendje tussenuit', ...commonFeatures, '3 nachten verblijf'],
    cta: 'Boek een weekend',
    email:
      'Hallo, %0D%0AWij zouden graag vanaf [[Datum in dag-maand-jaar]] een weekend reserveren.%0D%0AWij komen met [[aantal personen]] personen.%0D%0A[[Uw contactgegevens]]%0D%0AOverige vragen:',
  },
}

function Prijs() {
  return (
    <>
      <div className='max-w-7xl mx-auto py-24 px-4 bg-white sm:px-6 lg:px-8'>
        <h2 className='text-2xl font-extrabold text-gray-900 sm:text-4xl sm:leading-none sm:tracking-tight lg:text-5xl'>
          Prijzen
        </h2>
        <p className='mt-6 max-w-2xl text-xl text-gray-500'>
          Kies de duur van het verblijf die het beste bij u past, de check-in is mogelijk{' '}
          <b>vanaf 15.00</b> uur. De check-out is om <b>uiterlijk 10.00</b> uur.
        </p>

        <h3 className='text-xl font-extrabold text-gray-900 sm:text-2xl sm:leading-none sm:tracking-tight lg:text-3xl mt-5'>
          Beschikbaarheid
        </h3>
        <p className='mt-4 max-w-2xl text-xl text-gray-500 mb-4'>
          De volgende data vallen onder het hoogseizoen:
          <ul role='list' className='space-y-4'>
            <li className='flex items-start'>
              <div className='flex-shrink-0'>-</div>
              <p className='ml-3 text-base font-medium text-gray-500'>Juli tot en met augustus</p>
            </li>
            <li className='flex items-start'>
              <div className='flex-shrink-0'>-</div>
              <p className='ml-3 text-base font-medium text-gray-500'>
                19 februari tot en met 6 maart
              </p>
            </li>
            <li className='flex items-start'>
              <div className='flex-shrink-0'>-</div>
              <p className='ml-3 text-base font-medium text-gray-500'>30 april tot en met 8 mei</p>
            </li>
          </ul>
        </p>
        <p className='mt-6 max-w-2xl text-xl text-gray-500 mb-2'>
          Tijdens het hoogseizoen is het alleen mogelijk om een hele week te boeken.
        </p>
      </div>
      <div className='mt-16 bg-white pb-12 lg:mt-20 lg:pb-20'>
        <div className='relative z-0'>
          <div className='absolute inset-0 h-5/6 bg-gray-50 lg:h-2/3' />
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='relative lg:grid lg:grid-cols-7'>
              <div className='mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3'>
                <div className='h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg'>
                  <div className='flex-1 flex flex-col'>
                    <div className='bg-white px-6 py-10'>
                      <div>
                        <h3 className='text-center text-2xl font-medium text-gray-900' id='midweek'>
                          {pricing.midweek.title}
                        </h3>
                        <div className='mt-4 flex items-center justify-center'>
                          <span className='px-3 flex items-start text-6xl tracking-tight text-gray-900'>
                            <span className='mt-2 mr-2 text-4xl font-medium'>€</span>
                            <span className='font-extrabold'>{pricing.midweek.price}</span>
                          </span>
                        </div>
                        <p
                          className='text-center text-xl font-medium text-gray-900'
                          id='midweek-laagseizoen'
                        >
                          Hoogseizoen niet beschikbaar
                        </p>
                      </div>
                    </div>
                    <div className='flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10'>
                      <ul role='list' className='space-y-4'>
                        {pricing.midweek.features.map((feature) => (
                          <li key={feature} className='flex items-start'>
                            <div className='flex-shrink-0'>
                              <CheckIcon
                                className='flex-shrink-0 h-6 w-6 text-green-500'
                                aria-hidden='true'
                              />
                            </div>
                            <p className='ml-3 text-base font-medium text-gray-500'>{feature}</p>
                          </li>
                        ))}
                      </ul>
                      <div className='mt-8'>
                        <div className='rounded-lg shadow-md'>
                          <a
                            href={`mailto:mail@huize-kroep.nl?subject=Aanvraag reservering&body=${pricing.midweek.email}`}
                            className='block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-green-700 hover:bg-gray-50'
                            aria-describedby='midweek-cta'
                          >
                            {pricing.midweek.cta}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4'>
                <div className='relative z-10 rounded-lg shadow-xl'>
                  <div
                    className='pointer-events-none absolute inset-0 rounded-lg border-2 border-green-700'
                    aria-hidden='true'
                  />
                  <div className='absolute inset-x-0 top-0 transform translate-y-px'>
                    <div className='flex justify-center transform -translate-y-1/2'>
                      <span className='inline-flex rounded-full bg-green-700 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white'>
                        Het hele jaar door beschikbaar
                      </span>
                    </div>
                  </div>
                  <div className='bg-white rounded-t-lg px-6 pt-12 pb-10'>
                    <div>
                      <h3
                        className='text-center text-3xl font-semibold text-gray-900 sm:-mx-6'
                        id='week-laagseizoen'
                      >
                        {pricing.week.title}
                      </h3>
                      <div className='mt-4 flex items-center justify-center'>
                        <span className='px-3 flex items-start text-6xl tracking-tight text-gray-900 sm:text-6xl'>
                          <span className='mt-2 mr-2 text-4xl font-medium'>€</span>
                          <span className='font-extrabold'>{pricing.week.price.laagseizoen}</span>
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4
                        className='text-center text-2xl font-semibold text-gray-900 sm:-mx-6 mt-4'
                        id='week-hoogseizoen'
                      >
                        Tijdens het hoogseizoen
                      </h4>
                      <div className='mt-4 flex items-center justify-center'>
                        <span className='px-3 flex items-start text-5xl tracking-tight text-gray-900 sm:text-5xl'>
                          <span className='mt-2 mr-2 text-3xl font-medium'>€</span>
                          <span className='font-extrabold'>{pricing.week.price.hoogseizoen}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10'>
                    <ul role='list' className='space-y-4'>
                      {pricing.week.features.map((feature) => (
                        <li key={feature} className='flex items-start'>
                          <div className='flex-shrink-0'>
                            <CheckIcon
                              className='flex-shrink-0 h-6 w-6 text-green-500'
                              aria-hidden='true'
                            />
                          </div>
                          <p className='ml-3 text-base font-medium text-gray-500'>{feature}</p>
                        </li>
                      ))}
                    </ul>
                    <div className='mt-10'>
                      <div className='rounded-lg shadow-md'>
                        <a
                          href={`mailto:mail@huize-kroep.nl?subject=Aanvraag reservering&body=${pricing.week.email}`}
                          className='block w-full text-center rounded-lg border border-transparent bg-green-700 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-green-700'
                          aria-describedby='week-cta'
                        >
                          {pricing.week.cta}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3'>
                <div className='h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg'>
                  <div className='flex-1 flex flex-col'>
                    <div className='bg-white px-6 py-10'>
                      <div>
                        <h3 className='text-center text-2xl font-medium text-gray-900' id='weekend'>
                          {pricing.weekend.title}
                        </h3>
                        <div className='mt-4 flex items-center justify-center'>
                          <span className='px-3 flex items-start text-6xl tracking-tight text-gray-900'>
                            <span className='mt-2 mr-2 text-4xl font-medium'>€</span>
                            <span className='font-extrabold'>{pricing.weekend.price}</span>
                          </span>
                        </div>
                        <p
                          className='text-center text-xl font-medium text-gray-900'
                          id='weekend-laagseizoen'
                        >
                          Hoogseizoen niet beschikbaar
                        </p>
                      </div>
                    </div>
                    <div className='flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10'>
                      <ul role='list' className='space-y-4'>
                        {pricing.weekend.features.map((feature) => (
                          <li key={feature} className='flex items-start'>
                            <div className='flex-shrink-0'>
                              <CheckIcon
                                className='flex-shrink-0 h-6 w-6 text-green-500'
                                aria-hidden='true'
                              />
                            </div>
                            <p className='ml-3 text-base font-medium text-gray-500'>{feature}</p>
                          </li>
                        ))}
                      </ul>
                      <div className='mt-8'>
                        <div className='rounded-lg shadow-md'>
                          <a
                            href={`mailto:mail@huize-kroep.nl?subject=Aanvraag reservering&body=${pricing.weekend.email}`}
                            className='block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-green-700 hover:bg-gray-50'
                            aria-describedby='weekend-cta'
                          >
                            {pricing.weekend.cta}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { Prijs }
