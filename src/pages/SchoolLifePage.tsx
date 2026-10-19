import OceanCanvas from '../components/OceanCanvas';
import { Link } from '../router/Router';

interface SchoolLifeStory {
  id: string;
  tag: string;
  title: string;
  image: string;
  alt: string;
  caption: string;
}

const SCHOOL_LIFE_STORIES: SchoolLifeStory[] = [
  {
    id: 'assembly',
    tag: 'Community Rhythm',
    title: 'Morning Assembly & Daily Pledge',
    image: '/images/communal-morning-assembly.jpg',
    alt: 'Students assembled in neat columns wearing white uniforms taking the morning assembly pledge on campus grounds',
    caption: 'Students and teachers gather in uniform order under the open sky of Senha for morning prayer, national news reading, and the singing of the National Anthem.'
  },
  {
    id: 'sports',
    tag: 'Athletics & Games',
    title: 'Sports Championships & Athletic Honors',
    image: '/images/sports-championship-trophy-celebration.jpg',
    alt: 'School students proudly holding athletic championship trophies and celebratory sports banner',
    caption: 'Inter-school athletics meets, track sprints, football, and kabaddi cultivate physical endurance, teamwork, and institutional pride.'
  },
  {
    id: 'innovation',
    tag: 'STEM & Robotics',
    title: 'Atal Tinkering Lab Workshop',
    image: '/images/manjurmati-atl-lab-workbench.jpg',
    alt: 'Students in uniforms collaborating on electronic circuits and tinkering equipment on the lab workbench',
    caption: 'Senior students build practical electronic circuits, microcontrollers, and creative scientific models under NITI Aayog guidance.'
  },
  {
    id: 'crafts',
    tag: 'Practical Craft',
    title: 'Electronics Prototyping & Soldering',
    image: '/images/manjurmati-atl-soldering-station.jpg',
    alt: 'Hands-on electronic soldering station and instrumentation multimeter at student workbench',
    caption: 'Hands-on circuit assembly, instrumentation measurement, and technical craft teach precision and safety awareness.'
  },
  {
    id: 'laboratory',
    tag: 'Scientific Discovery',
    title: 'Practical Investigation in Science Labs',
    image: '/images/manjurmati-science-laboratory.jpg',
    alt: 'Students engaged in practical experimental discovery in the school science laboratory',
    caption: 'Guided state-board practical coursework in Physics, Chemistry, and Biology using observation benches and anatomical specimens.'
  },
  {
    id: 'courtyard',
    tag: 'Early Childhood',
    title: 'Botanical Courtyard Play & Recreation',
    image: '/images/campus-courtyard-walkway.jpg',
    alt: 'The tree-shaded botanical courtyard walkway where junior students gather and learn',
    caption: 'The sheltered courtyard of Bal Vidyavasham gives young learners from Nursery to Class V a calm setting for nature observation and play.'
  }
];

export default function SchoolLifePage() {
  return (
    <div className="w-full bg-[#F6FAFD] text-[#0A1931]">
      {/* PAGE HERO */}
      <section className="relative py-14 sm:py-20 lg:py-24 bg-[#F6FAFD] border-b border-[#D2E3F0] overflow-hidden">
        <OceanCanvas variant="quiet" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3.5">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A3D63]" aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#1A3D63]">
                Campus Life & Chronicles
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0A1931] font-normal tracking-tight leading-[1.08]">
              School Life & <br />
              <span className="italic font-light text-[#335372]">Campus Chronicles</span>
            </h1>

            <p className="text-base sm:text-lg text-[#335372] font-sans leading-relaxed pt-1">
              Education extends beyond textbooks. Discover the everyday rhythms across both campuses in Mahadetoli—morning assemblies, athletic victories, lab discoveries, and creative projects.
            </p>
          </div>
        </div>
      </section>

      {/* PHOTOGRAPHY-FIRST CHRONICLES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="border-b border-[#D2E3F0] pb-3 mb-8 flex items-baseline justify-between">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#0A1931] font-normal">
            Everyday Rhythms Across Both Schools
          </h2>
          <span className="text-xs font-mono text-[#62839F]">Authentic Photography</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SCHOOL_LIFE_STORIES.map((story) => (
            <article
              key={story.id}
              id={story.id}
              className="scroll-mt-24 border border-[#D2E3F0] bg-white rounded-xs p-4 sm:p-5 shadow-2xs space-y-3.5 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Photographic Aperture */}
                <div className="aspect-[16/10] overflow-hidden rounded-2xs relative border border-[#D2E3F0] bg-[#EBF3F9]">
                  <picture>
                    <source type="image/webp" srcSet={story.image.replace(/\.jpg$/, '.webp')} />
                    <img
                      src={story.image}
                      alt={story.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                    />
                  </picture>
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-[#0A1931]/85 text-white text-[10px] font-mono uppercase tracking-wider rounded-2xs backdrop-blur-xs">
                    {story.tag}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-medium text-[#0A1931]">
                    {story.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#335372] leading-relaxed">
                    {story.caption}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#D2E3F0] flex items-center justify-between text-[10px] font-mono text-[#62839F]">
                <span>MAHADETOLI · SENHA</span>
                <span className="text-[#1A3D63] font-semibold">VERIFIED ARCHIVE</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* DAILY ROUTINE & TIMETABLE SCHEDULE */}
      <section className="bg-white border-t border-[#D2E3F0] py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#1A3D63] font-semibold">
              Daily Schedule
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#0A1931] font-normal">
              A Day in the Life at Campus
            </h2>
            <p className="text-xs sm:text-sm text-[#335372] leading-relaxed">
              Structured daily schedules balance classroom learning with physical exercise, lab practicals, and creative play.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            <div className="bg-[#F6FAFD] border border-[#D2E3F0] p-4 rounded-xs space-y-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#1A3D63] font-bold block">
                08:30 – 09:00 AM
              </span>
              <h4 className="font-serif text-sm text-[#0A1931] font-semibold">
                Morning Assembly
              </h4>
              <p className="text-xs text-[#335372] leading-relaxed">
                Prayer, national anthem, news recitation, and moral address.
              </p>
            </div>

            <div className="bg-[#F6FAFD] border border-[#D2E3F0] p-4 rounded-xs space-y-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#1A3D63] font-bold block">
                09:00 – 11:30 AM
              </span>
              <h4 className="font-serif text-sm text-[#0A1931] font-semibold">
                Core Academics
              </h4>
              <p className="text-xs text-[#335372] leading-relaxed">
                Mathematics, Sciences, and primary Language instruction.
              </p>
            </div>

            <div className="bg-[#F6FAFD] border border-[#D2E3F0] p-4 rounded-xs space-y-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#1A3D63] font-bold block">
                11:30 – 12:00 PM
              </span>
              <h4 className="font-serif text-sm text-[#0A1931] font-semibold">
                Midday Recess
              </h4>
              <p className="text-xs text-[#335372] leading-relaxed">
                Nutritional break, courtyard recreation, and outdoor play.
              </p>
            </div>

            <div className="bg-[#F6FAFD] border border-[#D2E3F0] p-4 rounded-xs space-y-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#1A3D63] font-bold block">
                12:00 – 01:30 PM
              </span>
              <h4 className="font-serif text-sm text-[#0A1931] font-semibold">
                Social & Languages
              </h4>
              <p className="text-xs text-[#335372] leading-relaxed">
                Social Studies, Environmental Science, Hindi, English, Sanskrit.
              </p>
            </div>

            <div className="bg-[#F6FAFD] border border-[#D2E3F0] p-4 rounded-xs space-y-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#1A3D63] font-bold block">
                01:30 – 02:30 PM
              </span>
              <h4 className="font-serif text-sm text-[#0A1931] font-semibold">
                Labs & Sports
              </h4>
              <p className="text-xs text-[#335372] leading-relaxed">
                ATL tinkering, science practicals, crafts, and games before dismissal.
              </p>
            </div>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#D2E3F0]">
            <Link
              to="/facilities"
              className="text-xs font-mono uppercase tracking-wider text-[#1A3D63] hover:text-[#0A1931] font-semibold flex items-center gap-2"
            >
              ← Inspect Physical Learning Facilities
            </Link>
            <Link
              to="/admissions"
              className="text-xs font-mono uppercase tracking-wider text-[#1A3D63] hover:text-[#0A1931] font-semibold flex items-center gap-2"
            >
              Learn About Admissions & Enrolment →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
