import OceanCanvas from '../components/OceanCanvas';
import { FACILITIES_DATA, SchoolFacility } from '../data/facilities';
import { Link } from '../router/Router';

export default function FacilitiesPage() {
  const scienceLabs = FACILITIES_DATA.filter((f) => ['science-laboratories', 'atl-tinkering-lab'].includes(f.id));
  const studySpaces = FACILITIES_DATA.filter((f) => ['secondary-classrooms', 'curricular-library'].includes(f.id));
  const grounds = FACILITIES_DATA.filter((f) => ['botanical-courtyard'].includes(f.id));

  const renderFacilityCard = (facility: SchoolFacility) => (
    <div
      key={facility.id}
      id={facility.id}
      className="scroll-mt-24 border border-[#D2E3F0] bg-white rounded-xs p-5 sm:p-6 shadow-2xs space-y-4 flex flex-col justify-between"
    >
      <div className="space-y-3">
        {/* Photographic Aperture */}
        <div className="rounded-xs aspect-[16/10] overflow-hidden relative border border-[#D2E3F0] bg-[#EBF3F9]">
          <picture>
            <source type="image/webp" srcSet={facility.imageSrc.replace(/\.jpg$/, '.webp')} />
            <img
              src={facility.imageSrc}
              alt={facility.imageAlt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              style={{ objectPosition: facility.objectPosition }}
              loading="lazy"
              decoding="async"
              width={1920}
              height={820}
            />
          </picture>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A1931]/85 via-[#0A1931]/30 to-transparent p-3 text-white">
            <p className="text-xs font-semibold text-white font-serif">{facility.name}</p>
            <p className="text-[10px] text-[#B3CFE5] font-mono">{facility.campusLabel}</p>
          </div>
        </div>

        {/* Title & Stage */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-[#62839F]">
            <span>{facility.stageRole}</span>
          </div>
          <h3 className="font-serif text-lg sm:text-xl text-[#0A1931] font-medium">
            {facility.name}
          </h3>
          <p className="text-xs sm:text-sm text-[#335372] font-sans leading-relaxed pt-0.5">
            {facility.shortDescription}
          </p>
        </div>
      </div>

      {/* Compact Specifications Bar */}
      <div className="pt-3 border-t border-[#D2E3F0] space-y-1.5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] font-mono">
          {facility.specifications.map((spec, sIdx) => (
            <div key={sIdx} className="p-2 bg-[#F6FAFD] rounded-2xs border border-[#EBF3F9]">
              <span className="text-[#62839F] block text-[9.5px] uppercase">{spec.label}</span>
              <strong className="text-[#0A1931] font-medium truncate block">{spec.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

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
                Campus Infrastructure
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0A1931] font-normal tracking-tight leading-[1.08]">
              Facilities & <br />
              <span className="italic font-light text-[#335372]">Learning Spaces</span>
            </h1>

            <p className="text-base sm:text-lg text-[#335372] font-sans leading-relaxed pt-1">
              Purpose-built spaces for inquiry, practical science, and focused reading across both campuses in Mahadetoli, Senha. Grounded strictly in authentic documentary photography.
            </p>
          </div>
        </div>
      </section>

      {/* FACILITIES SECTIONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-16">

        {/* GROUP 1: SCIENCE & INNOVATION */}
        <section className="space-y-6">
          <div className="border-b border-[#D2E3F0] pb-3 flex items-baseline justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#1A3D63] font-semibold block">
                Category 01
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#0A1931] font-normal">
                Science & Innovation Labs
              </h2>
            </div>
            <span className="text-xs font-mono text-[#62839F]">Manjurmati Campus</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scienceLabs.map(renderFacilityCard)}
          </div>
        </section>

        {/* GROUP 2: CLASSROOMS & READING SPACES */}
        <section className="space-y-6">
          <div className="border-b border-[#D2E3F0] pb-3 flex items-baseline justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#1A3D63] font-semibold block">
                Category 02
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#0A1931] font-normal">
                Classrooms & Reading Spaces
              </h2>
            </div>
            <span className="text-xs font-mono text-[#62839F]">Central & Secondary</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studySpaces.map(renderFacilityCard)}
          </div>
        </section>

        {/* GROUP 3: COURTYARD & GROUNDS */}
        <section className="space-y-6">
          <div className="border-b border-[#D2E3F0] pb-3 flex items-baseline justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#1A3D63] font-semibold block">
                Category 03
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#0A1931] font-normal">
                Courtyard & Campus Grounds
              </h2>
            </div>
            <span className="text-xs font-mono text-[#62839F]">Bal Vidyavasham</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {grounds.map(renderFacilityCard)}
          </div>
        </section>

        {/* Action Callout */}
        <div className="p-6 bg-white border border-[#D2E3F0] rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-sans text-[#335372]">
          <p>
            <strong>Documentary Integrity Note:</strong> All facilities cataloged above represent physical spaces verified against official school documentation and authentic photography.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#0A1931] hover:bg-[#1A3D63] rounded-2xs transition-colors shrink-0"
          >
            <span>Inquire About Visiting →</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
