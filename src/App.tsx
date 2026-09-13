import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Check } from 'lucide-react';

const FACILITY_LINKS = [
  { label: 'Bar', href: '#bar' },
  { label: 'Spa', href: '#spa' },
  { label: 'Locker Rooms', href: '#locker-rooms' },
  { label: 'Climate', href: '#climate' },
  { label: 'Training Floor', href: '#training-floor' },
  { label: 'Trainers', href: '#trainers' },
];

const MEMBERSHIP_TIERS = [
  {
    name: 'Floor',
    price: '12,000',
    period: 'per month',
    blurb: 'Full access to the training floor and all standard amenities.',
    features: [
      'Full access to the 12,000 sq ft training floor',
      'Free weights, machines, and functional zone',
      'Locker and towel service',
      'Access hours: 6:00 AM – 11:00 PM daily',
    ],
    featured: false,
  },
  {
    name: 'Floor + Spa',
    price: '18,000',
    period: 'per month',
    blurb: 'Everything in Floor, plus the full spa and recovery wing.',
    features: [
      'Everything in Floor',
      'Sauna, steam room, and cold plunge',
      'Two massage therapy sessions per month',
      'Spa access during all opening hours',
    ],
    featured: false,
  },
  {
    name: 'Floor + Spa + Bar',
    price: '24,000',
    period: 'per month',
    blurb: 'The complete FORT experience — floor, spa, and lounge.',
    features: [
      'Everything in Floor + Spa',
      'Unlimited coffee and protein bar access',
      'Reserved lounge seating',
      'Post-workout meal credit: PKR 4,000 monthly',
    ],
    featured: true,
  },
  {
    name: 'Off-Peak',
    price: '9,000',
    period: 'per month',
    blurb: 'Same floor and spa access, restricted to quieter hours.',
    features: [
      'Training floor + spa access',
      'Entry restricted to 6:00–10:00 AM and 2:00–5:00 PM',
      'Ideal for flexible-schedule professionals',
      'All locker and towel services included',
    ],
    featured: false,
  },
  {
    name: 'Couples',
    price: '38,000',
    period: 'per month for two',
    blurb: 'Two memberships under one account, one billing cycle.',
    features: [
      'Two memberships under one account',
      'Full floor, spa, and bar access for both',
      'Shared locker assignment',
      'One combined billing cycle',
    ],
    featured: false,
  },
  {
    name: 'Concierge',
    price: '45,000',
    period: 'per month',
    blurb: 'The highest tier — priority access, unlimited spa, 24-hour entry.',
    features: [
      'Priority locker in the private wing',
      'Four personal training sessions monthly',
      'Unlimited spa and massage therapy',
      'PKR 12,000 monthly bar credit',
      '24-hour facility access with keycard',
    ],
    featured: false,
  },
];

const TRAINERS = [
  {
    name: 'Hamza Tariq',
    specialty: 'Strength and Powerlifting',
    years: 11,
    img: 'https://images.pexels.com/photos/32695885/pexels-photo-32695885.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Ayesha Khan',
    specialty: 'Olympic Weightlifting and Mobility',
    years: 8,
    img: 'https://images.pexels.com/photos/3912944/pexels-photo-3912944.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Daniyal Raza',
    specialty: 'Hypertrophy and Body Composition',
    years: 14,
    img: 'https://images.pexels.com/photos/10960029/pexels-photo-10960029.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Sana Mahmood',
    specialty: 'Functional Training and Conditioning',
    years: 7,
    img: 'https://images.pexels.com/photos/36120641/pexels-photo-36120641.png?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [facilityOpen, setFacilityOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-xl tracking-tightest text-marble">
          FORT
        </a>
        <div className="hidden lg:flex items-center gap-8">
          <a
            href="#membership"
            className="text-sm font-body font-medium text-marble/80 hover:text-marble transition-colors"
          >
            Membership
          </a>
          <div
            className="relative"
            onMouseEnter={() => setFacilityOpen(true)}
            onMouseLeave={() => setFacilityOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-body font-medium text-marble/80 hover:text-marble transition-colors"
            >
              Facility
              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${facilityOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {facilityOpen && (
              <div className="absolute top-full left-0 pt-2 w-48">
                <div className="bg-ink/95 backdrop-blur-sm border border-steel/30 py-2">
                  {FACILITY_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm font-body font-medium text-marble/80 hover:text-marble hover:bg-steel/10 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <a
            href="#location"
            className="text-sm font-body font-medium text-marble/80 hover:text-marble transition-colors"
          >
            Location
          </a>
          <a
            href="#membership"
            className="text-sm font-body font-semibold text-marble bg-sandstone px-5 py-2.5 hover:bg-sandstone/90 transition-colors"
          >
            Book a Walkthrough
          </a>
        </div>
        <button
          className="lg:hidden text-marble"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-ink border-t border-steel/30">
          <div className="flex flex-col px-6 py-4 gap-1">
            <a
              href="#membership"
              onClick={() => setOpen(false)}
              className="text-sm font-body font-medium text-marble/80 hover:text-marble py-2"
            >
              Membership
            </a>
            <p className="text-xs font-body font-semibold uppercase tracking-wide text-brass/70 mt-3 mb-1">
              Facility
            </p>
            {FACILITY_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-body font-medium text-marble/80 hover:text-marble py-2 pl-3"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#location"
              onClick={() => setOpen(false)}
              className="text-sm font-body font-medium text-marble/80 hover:text-marble py-2 mt-3"
            >
              Location
            </a>
            <a
              href="#membership"
              onClick={() => setOpen(false)}
              className="text-sm font-body font-semibold text-marble bg-sandstone px-5 py-2.5 text-center mt-3"
            >
              Book a Walkthrough
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[640px] overflow-hidden">
      <div className="absolute inset-0 hero-zoom">
        <img
          src="https://images.pexels.com/photos/17211446/pexels-photo-17211446.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="FORT training floor in Gulberg, Lahore"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/30 to-ink/70" />
      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-end pb-20 lg:pb-28">
        <h1 className="font-display font-bold text-marble text-5xl sm:text-6xl lg:text-8xl tracking-tightest leading-[0.95] max-w-3xl">
          FORT
        </h1>
        <p className="font-body text-marble/90 text-lg lg:text-xl mt-5 max-w-xl leading-relaxed">
          An 18,000-square-foot training facility in Gulberg, Lahore — built for people who
          already expect a certain standard, and want a gym that meets it.
        </p>
        <a
          href="#membership"
          className="inline-block mt-8 font-body font-semibold text-marble bg-sandstone px-7 py-3.5 hover:bg-sandstone/90 transition-colors w-fit"
        >
          Book a Facility Walkthrough
        </a>
      </div>
    </section>
  );
}

function Membership() {
  return (
    <section id="membership" className="bg-marble py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14 lg:mb-20">
          <h2 className="font-display font-bold text-deepink text-4xl lg:text-6xl tracking-tightest leading-[0.95]">
            Six ways to train here
          </h2>
          <p className="font-body text-steel text-lg mt-5 max-w-2xl leading-relaxed">
            Every tier differs by what you can actually walk into and use — not by a label.
            Pick the one that matches how you want to use the building.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {MEMBERSHIP_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1 ${
                tier.featured
                  ? 'bg-ink text-marble border border-brass/40 shadow-xl'
                  : 'bg-white/40 text-deepink border border-steel/15 hover:border-sandstone/40 hover:shadow-lg'
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-7 bg-sandstone text-marble text-xs font-body font-semibold px-3 py-1 uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              <div className={`h-1 w-12 bg-sandstone mb-5`} />
              <h3 className="font-display font-semibold text-2xl lg:text-3xl tracking-tighter">
                {tier.name}
              </h3>
              <p
                className={`font-body text-sm mt-2 leading-relaxed ${
                  tier.featured ? 'text-marble/60' : 'text-steel'
                }`}
              >
                {tier.blurb}
              </p>
              <div className="flex items-baseline gap-1.5 mt-5">
                <span
                  className={`font-display font-bold text-2xl ${
                    tier.featured ? 'text-brass' : 'text-sandstone'
                  }`}
                >
                  PKR
                </span>
                <span className="font-display font-bold text-4xl lg:text-5xl tracking-tighter">
                  {tier.price}
                </span>
              </div>
              <p
                className={`font-body text-xs mt-1 ${
                  tier.featured ? 'text-marble/50' : 'text-steel/70'
                }`}
              >
                {tier.period}
              </p>
              <div
                className={`my-6 h-px ${
                  tier.featured ? 'bg-marble/15' : 'bg-steel/15'
                }`}
              />
              <ul className="flex flex-col gap-3 flex-1">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-2.5 text-sm font-body leading-relaxed ${
                      tier.featured ? 'text-marble/85' : 'text-deepink'
                    }`}
                  >
                    <Check
                      size={16}
                      className={`shrink-0 mt-0.5 ${
                        tier.featured ? 'text-brass' : 'text-sandstone'
                      }`}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#location"
                className={`mt-7 font-body font-semibold text-sm px-5 py-3 text-center transition-colors ${
                  tier.featured
                    ? 'bg-sandstone text-marble hover:bg-sandstone/90'
                    : 'border border-sandstone text-sandstone hover:bg-sandstone hover:text-marble'
                }`}
              >
                Reserve this tier
              </a>
            </div>
          ))}
        </div>
        <p className="font-body text-steel text-sm mt-10 text-center">
          All prices in Pakistani Rupees. Annual plans receive two months free.
        </p>
      </div>
    </section>
  );
}

function Bar() {
  return (
    <section id="bar" className="bg-ink py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <h2 className="font-serif italic text-marble text-4xl lg:text-5xl leading-[1.05]">
            The Coffee &amp; Protein Bar
          </h2>
          <p className="font-body text-marble/80 text-lg mt-6 leading-relaxed max-w-lg">
            A lounge, not a service counter. Espresso pulled to order, fresh cold-pressed
            juice, and protein shakes blended with your choice of base — all served at the
            curved brass-topped bar or in the leather seating area facing the training floor.
            Post-workout plates (grilled chicken, eggs, oats, seasonal fruit) are available
            from 6:30 AM through closing.
          </p>
          <p className="font-body text-brass text-base mt-6 italic font-serif">
            Open to Floor + Spa + Bar members and above.
          </p>
        </div>
        <div className="relative h-72 lg:h-96 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/6612572/pexels-photo-6612572.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Coffee and protein bar at FORT"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Spa() {
  return (
    <section id="spa" className="bg-marble py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <h2 className="font-serif italic text-deepink text-4xl lg:text-5xl leading-[1.05]">
            Spa &amp; Recovery
          </h2>
          <p className="font-body text-steel text-lg mt-5 max-w-xl leading-relaxed">
            Four distinct recovery rooms, each serving a different purpose after training.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          <div className="flex flex-col gap-3">
            <div className="h-64 lg:h-72 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/23330922/pexels-photo-23330922.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Sauna at FORT"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-display font-semibold text-deepink text-2xl tracking-tighter mt-2">
              Sauna
            </h3>
            <p className="font-body text-steel text-base leading-relaxed">
              A Finnish dry sauna holding up to eight, set at 80–90°C. Wood-lined, with a
              glass door facing the recovery corridor.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="h-64 lg:h-72 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/9165667/pexels-photo-9165667.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Steam room at FORT"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-display font-semibold text-deepink text-2xl tracking-tighter mt-2">
              Steam Room
            </h3>
            <p className="font-body text-steel text-base leading-relaxed">
              A tiled wet steam room at 45°C and 100% humidity. Eucalyptus oil is added to
              the steam generator on request.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="h-64 lg:h-72 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/9144522/pexels-photo-9144522.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Massage therapy at FORT"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-display font-semibold text-deepink text-2xl tracking-tighter mt-2">
              Massage Therapy
            </h3>
            <p className="font-body text-steel text-base leading-relaxed">
              Two private treatment rooms with licensed therapists. Deep tissue, sports
              recovery, and Swedish options, booked in 45- or 60-minute sessions.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="h-64 lg:h-72 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/37816601/pexels-photo-37816601.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Cold plunge at FORT"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-display font-semibold text-deepink text-2xl tracking-tighter mt-2">
              Cold Plunge
            </h3>
            <p className="font-body text-steel text-base leading-relaxed">
              A stainless-steel cold plunge tub maintained at 8–10°C, with a built-in
              filtration system. Adjacent to the sauna for contrast sessions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LockerRooms() {
  return (
    <section id="locker-rooms" className="bg-ink py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative h-72 lg:h-96 overflow-hidden order-2 lg:order-1">
          <img
            src="https://images.pexels.com/photos/6980656/pexels-photo-6980656.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Locker rooms at FORT"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="font-display font-bold text-marble text-4xl lg:text-5xl tracking-tightest leading-[0.95]">
            Bathing &amp; Locker Rooms
          </h2>
          <p className="font-body text-marble/80 text-lg mt-6 leading-relaxed max-w-lg">
            Individual lockers assigned at membership sign-up — not shared, not first-come.
            Rain showers with brass fixtures, grooming stations with mirrors and product,
            and fresh towel service restocked twice daily. A separate private wing is
            reserved for Concierge-tier members.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <div className="flex items-baseline gap-4">
              <span className="font-display font-semibold text-brass text-lg">140</span>
              <span className="font-body text-marble/70 text-sm">individual assigned lockers</span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="font-display font-semibold text-brass text-lg">12</span>
              <span className="font-body text-marble/70 text-sm">rain showers with brass fixtures</span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="font-display font-semibold text-brass text-lg">6</span>
              <span className="font-body text-marble/70 text-sm">grooming stations per locker room</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Climate() {
  return (
    <section id="climate" className="bg-marble py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <h2 className="font-display font-bold text-deepink text-4xl lg:text-5xl tracking-tightest leading-[0.95]">
              Climate &amp; Comfort
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="font-body text-deepink text-lg lg:text-xl leading-relaxed">
              The entire building — all 18,000 square feet — is climate-controlled year-round.
              The training floor holds at 22–24°C with four-zone ducted air conditioning. The
              spa, locker rooms, and lounge each have independent temperature control. Lahore
              summers hit 45°C; this floor never does.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="border-l-2 border-sandstone pl-4">
                <p className="font-display font-bold text-deepink text-3xl">22–24°C</p>
                <p className="font-body text-steel text-sm mt-1">Training floor, year-round</p>
              </div>
              <div className="border-l-2 border-sandstone pl-4">
                <p className="font-display font-bold text-deepink text-3xl">4 zones</p>
                <p className="font-body text-steel text-sm mt-1">Ducted AC across the floor</p>
              </div>
              <div className="border-l-2 border-sandstone pl-4">
                <p className="font-display font-bold text-deepink text-3xl">100%</p>
                <p className="font-body text-steel text-sm mt-1">Of the building air-conditioned</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrainingFloor() {
  return (
    <section id="training-floor" className="bg-ink py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <h2 className="font-display font-bold text-marble text-4xl lg:text-6xl tracking-tightest leading-[0.95]">
            Training Floor &amp; Equipment
          </h2>
          <p className="font-body text-marble/70 text-lg mt-5 max-w-xl leading-relaxed">
            12,000 square feet across four named zones, each laid out for its purpose.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="relative h-64 lg:h-80 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/27810159/pexels-photo-27810159.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Free weights zone at FORT"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
            <h3 className="absolute bottom-4 left-5 font-display font-semibold text-marble text-2xl tracking-tighter">
              Free Weights
            </h3>
          </div>
          <div className="relative h-64 lg:h-80 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/9545909/pexels-photo-9545909.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Machines zone at FORT"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
            <h3 className="absolute bottom-4 left-5 font-display font-semibold text-marble text-2xl tracking-tighter">
              Pin-Loaded Machines
            </h3>
          </div>
          <div className="relative h-64 lg:h-80 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/6046977/pexels-photo-6046977.png?auto=compress&cs=tinysrgb&w=1200"
              alt="Functional training zone at FORT"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
            <h3 className="absolute bottom-4 left-5 font-display font-semibold text-marble text-2xl tracking-tighter">
              Functional Training Zone
            </h3>
          </div>
          <div className="relative h-64 lg:h-80 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/14636326/pexels-photo-14636326.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Group class studio at FORT"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
            <h3 className="absolute bottom-4 left-5 font-display font-semibold text-marble text-2xl tracking-tighter">
              Group Class Studio
            </h3>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <p className="font-display font-bold text-brass text-2xl">8 platforms</p>
            <p className="font-body text-marble/60 text-sm mt-1">Power racks and deadlift platforms</p>
          </div>
          <div>
            <p className="font-display font-bold text-brass text-2xl">24 machines</p>
            <p className="font-body text-marble/60 text-sm mt-1">Pin-loaded, cable, and plate-loaded</p>
          </div>
          <div>
            <p className="font-display font-bold text-brass text-2xl">1,200 sq ft</p>
            <p className="font-body text-marble/60 text-sm mt-1">Functional turf area</p>
          </div>
          <div>
            <p className="font-display font-bold text-brass text-2xl">30 capacity</p>
            <p className="font-body text-marble/60 text-sm mt-1">Group class studio</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trainers() {
  return (
    <section id="trainers" className="bg-marble py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <h2 className="font-display font-bold text-deepink text-4xl lg:text-6xl tracking-tightest leading-[0.95]">
            Trainers &amp; Coaches
          </h2>
          <p className="font-body text-steel text-lg mt-5 max-w-xl leading-relaxed">
            Four resident coaches, each with a defined specialty. Book a session through
            the front desk or your member portal.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRAINERS.map((t) => (
            <div key={t.name} className="flex flex-col">
              <div className="h-80 overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display font-semibold text-deepink text-xl tracking-tighter mt-4">
                {t.name}
              </h3>
              <p className="font-body text-sandstone text-sm mt-1">{t.specialty}</p>
              <p className="font-body text-steel text-sm mt-1">{t.years} years coaching</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="bg-ink py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="font-display font-bold text-marble text-4xl lg:text-5xl tracking-tightest leading-[0.95]">
              Location &amp; Hours
            </h2>
            <div className="mt-8 space-y-6">
              <div>
                <p className="font-body text-brass text-sm font-semibold uppercase tracking-wide mb-1">
                  Address
                </p>
                <p className="font-body text-marble text-lg leading-relaxed">
                  [Building number], Main Boulevard, Gulberg III, Lahore
                </p>
              </div>
              <div>
                <p className="font-body text-brass text-sm font-semibold uppercase tracking-wide mb-1">
                  Hours
                </p>
                <p className="font-body text-marble text-lg">Monday – Sunday: 6:00 AM – 11:00 PM</p>
                <p className="font-body text-marble/60 text-sm mt-1">
                  Concierge members: 24-hour keycard access
                </p>
              </div>
              <div>
                <p className="font-body text-brass text-sm font-semibold uppercase tracking-wide mb-1">
                  Contact
                </p>
                <p className="font-body text-marble text-lg">+92 42 [PHONE]</p>
                <p className="font-body text-marble/60 text-sm mt-1">members@fort.lahore</p>
              </div>
              <a
                href="#membership"
                className="inline-block font-body font-semibold text-marble bg-sandstone px-7 py-3.5 hover:bg-sandstone/90 transition-colors mt-4"
              >
                Book a Facility Walkthrough
              </a>
            </div>
          </div>
          <div className="h-72 lg:h-full min-h-[300px] overflow-hidden">
            <iframe
              title="FORT location map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=74.3460%2C31.5100%2C74.3600%2C31.5200&amp;layer=mapnik&amp;marker=31.5150%2C74.3530"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink border-t border-steel/30 py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="font-display font-bold text-marble text-2xl tracking-tightest">FORT</p>
            <p className="font-body text-marble/50 text-sm mt-3 leading-relaxed max-w-xs">
              An 18,000-square-foot training facility in Gulberg, Lahore.
            </p>
          </div>
          <div>
            <p className="font-body text-brass text-sm font-semibold uppercase tracking-wide mb-3">
              Contact
            </p>
            <p className="font-body text-marble/70 text-sm">[Building number], Main Boulevard</p>
            <p className="font-body text-marble/70 text-sm">Gulberg III, Lahore</p>
            <p className="font-body text-marble/70 text-sm mt-2">+92 42 [PHONE]</p>
            <p className="font-body text-marble/70 text-sm">members@fort.lahore</p>
          </div>
          <div>
            <p className="font-body text-brass text-sm font-semibold uppercase tracking-wide mb-3">
              Social
            </p>
            <p className="font-body text-marble/70 text-sm">Instagram</p>
            <p className="font-body text-marble/70 text-sm">Facebook</p>
            <p className="font-body text-marble/70 text-sm">WhatsApp</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-steel/20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="font-body text-marble/40 text-xs">
              FORT Gulberg, Lahore. All rights reserved.
            </p>
            <a
              href="#membership"
              className="font-body font-semibold text-sandstone text-sm hover:text-marble transition-colors"
            >
              View the Six Tiers
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="bg-marble">
      <Nav />
      <Hero />
      <Membership />
      <Bar />
      <Spa />
      <LockerRooms />
      <Climate />
      <TrainingFloor />
      <Trainers />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
