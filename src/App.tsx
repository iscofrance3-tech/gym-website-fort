import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Membership', href: '#membership' },
  { label: 'Bar', href: '#bar' },
  { label: 'Spa', href: '#spa' },
  { label: 'Locker Rooms', href: '#locker-rooms' },
  { label: 'Climate', href: '#climate' },
  { label: 'Training Floor', href: '#training-floor' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Location', href: '#location' },
];

const MEMBERSHIP_TIERS = [
  {
    name: 'Floor',
    price: '[PRICE]',
    period: 'per month',
    accentWidth: 'w-12',
    features: [
      'Full access to the 12,000 sq ft training floor',
      'Free weights, machines, and functional zone',
      'Locker and towel service',
      'Access hours: 6:00 AM – 11:00 PM daily',
    ],
  },
  {
    name: 'Floor + Spa',
    price: '[PRICE]',
    period: 'per month',
    accentWidth: 'w-20',
    features: [
      'Everything in Floor',
      'Sauna, steam room, and cold plunge',
      'Two massage therapy sessions per month',
      'Spa access during all opening hours',
    ],
  },
  {
    name: 'Floor + Spa + Bar',
    price: '[PRICE]',
    period: 'per month',
    accentWidth: 'w-28',
    features: [
      'Everything in Floor + Spa',
      'Unlimited coffee and protein bar access',
      'Reserved lounge seating',
      'Post-workout meal credit: PKR 4,000 monthly',
    ],
  },
  {
    name: 'Off-Peak',
    price: '[PRICE]',
    period: 'per month',
    accentWidth: 'w-36',
    features: [
      'Training floor + spa access',
      'Entry restricted to 6:00–10:00 AM and 2:00–5:00 PM',
      'Ideal for flexible-schedule professionals',
      'All locker and towel services included',
    ],
  },
  {
    name: 'Couples',
    price: '[PRICE]',
    period: 'per month for two',
    accentWidth: 'w-44',
    features: [
      'Two memberships under one account',
      'Full floor, spa, and bar access for both',
      'Shared locker assignment',
      'One combined billing cycle',
    ],
  },
  {
    name: 'Concierge',
    price: '[PRICE]',
    period: 'per month',
    accentWidth: 'w-52',
    features: [
      'Priority locker in the private wing',
      'Four personal training sessions monthly',
      'Unlimited spa and massage therapy',
      'PKR 12,000 monthly bar credit',
      '24-hour facility access with keycard',
    ],
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
        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body font-medium text-marble/80 hover:text-marble transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#membership"
            className="text-sm font-body font-semibold text-marble bg-sandstone px-5 py-2.5 hover:bg-sandstone/90 transition-colors"
          >
            Book a Facility Walkthrough
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
          <div className="flex flex-col px-6 py-4 gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-body font-medium text-marble/80 hover:text-marble py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#membership"
              onClick={() => setOpen(false)}
              className="text-sm font-body font-semibold text-marble bg-sandstone px-5 py-2.5 text-center mt-2"
            >
              Book a Facility Walkthrough
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
        <div className="flex flex-col gap-0">
          {MEMBERSHIP_TIERS.map((tier, i) => (
            <div
              key={tier.name}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 py-8 lg:py-10 border-t border-steel/20 ${
                i === MEMBERSHIP_TIERS.length - 1 ? 'border-b' : ''
              }`}
            >
              <div className="lg:col-span-3 flex flex-col">
                <div className={`h-1 ${tier.accentWidth} bg-sandstone mb-4`} />
                <h3 className="font-display font-semibold text-deepink text-2xl lg:text-3xl tracking-tighter">
                  {tier.name}
                </h3>
                <p className="font-body text-steel text-sm mt-2">
                  {tier.price} {tier.period}
                </p>
              </div>
              <div className="lg:col-span-7">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                  {tier.features.map((f) => (
                    <li key={f} className="font-body text-deepink text-sm lg:text-base leading-relaxed">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-2 flex lg:justify-end items-start">
                <a
                  href="#location"
                  className="font-body font-semibold text-sandstone text-sm border border-sandstone px-4 py-2.5 hover:bg-sandstone hover:text-marble transition-colors inline-block"
                >
                  Reserve this tier
                </a>
              </div>
            </div>
          ))}
        </div>
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
