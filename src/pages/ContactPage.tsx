import React, { useState } from 'react';
import OceanCanvas from '../components/OceanCanvas';
import { Link } from '../router/Router';
import { INSTITUTIONAL_CONTACT_DATA } from '../data/contact';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    purpose: 'General Administrative Query',
    message: '',
  });

  const formattedMessageText = `OFFICIAL ADMINISTRATIVE QUERY
--------------------------------------------------
Inquiry Purpose: ${formData.purpose}
Sender Full Name: ${formData.name}
Contact Telephone: ${formData.phone}
Email Address: ${formData.email || 'Not specified'}
Message Body:
${formData.message}
--------------------------------------------------
Transmitted via Bal Vidyavasham × Manjurmati Portal
Destination: Mahadev Aashram, PO Badla, Senha - 835302`;

  const mailtoUrl = `mailto:mmhs66535@gmail.com?cc=shivayashivi@gmail.com&subject=${encodeURIComponent(
    `[${formData.purpose}] ${formData.name}`
  )}&body=${encodeURIComponent(formattedMessageText)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.location.href = mailtoUrl;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedMessageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setCopied(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      purpose: 'General Administrative Query',
      message: '',
    });
  };

  const manjur = INSTITUTIONAL_CONTACT_DATA.manjurmati;
  const bal = INSTITUTIONAL_CONTACT_DATA['bal-vidyavasham'];

  return (
    <div className="w-full bg-[#F6FAFD] text-[#0A1931]">
      {/* ──────────────────────────────────────────────────────────────────
          PAGE HERO: INSTITUTIONAL CONTACT DIRECTORY
         ────────────────────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-24 lg:py-28 bg-[#F6FAFD] border-b border-[#D2E3F0] overflow-hidden">
        <OceanCanvas variant="quiet" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A3D63]" aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#1A3D63]">
                Campus Directory & Administrative Desks
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0A1931] font-normal tracking-tight leading-[1.08]">
              Contact & <br />
              <span className="italic font-light text-[#335372]">Campus Directory</span>
            </h1>

            <p className="text-base sm:text-lg text-[#335372] font-sans leading-relaxed pt-1">
              Direct communication lines, official postal coordinates, administrative desk hours, and travel guidelines for both institutions in Mahadetoli, Senha.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] font-mono text-[#1A3D63]">
              <span className="px-2.5 py-1 bg-[#EBF3F9] border border-[#D2E3F0] rounded-2xs font-semibold">
                SENHA BLOCK · LOHARDAGA DISTRICT
              </span>
              <span className="px-2.5 py-1 bg-[#EBF3F9] border border-[#D2E3F0] rounded-2xs font-semibold">
                PIN 835302 · JHARKHAND
              </span>
              <span className="px-2.5 py-1 bg-white border border-[#D2E3F0] rounded-2xs text-[#62839F]">
                MONDAY – SATURDAY 08:30 AM – 02:00 PM
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          OFFICIAL POSTAL & CONTACT DETAILS (DUAL CARDS)
         ────────────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="border-b border-[#D2E3F0] pb-6 mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#62839F]">
            Section 01 · Institutional Desks
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0A1931] font-normal pt-1">
            Official Postal Coordinates & Helplines
          </h2>
          <p className="text-sm text-[#335372] font-sans max-w-2xl pt-2">
            Both institutions operate separate administrative offices situated across the roadway in Mahadetoli, PO Badla.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Manjurmati High School */}
          <div className="border border-[#D2E3F0] bg-white rounded-xs p-6 sm:p-8 space-y-6 shadow-2xs">
            <div className="flex items-center justify-between border-b border-[#EBF3F9] pb-4">
              <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 bg-[#0A1931] text-white rounded-2xs font-semibold">
                Secondary Senior Wing · Classes VI–X (JAC)
              </span>
              <span className="text-xs font-mono text-[#62839F]">
                JAC Code · Senha
              </span>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-[#0A1931] font-normal">
                {manjur.institutionName}
              </h3>
              <p className="text-xs font-mono text-[#4A7FA7] pt-0.5">
                {manjur.stageRole}
              </p>
            </div>

            {/* Postal Address Block */}
            <div className="bg-[#F6FAFD] border border-[#D2E3F0] p-4 rounded-2xs space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#1A3D63] font-bold block">
                Official Registered Postal Address
              </span>
              <p className="text-xs text-[#0A1931] font-sans leading-relaxed">
                {manjur.postalAddress.line1}<br />
                {manjur.postalAddress.postOffice}, {manjur.postalAddress.block}<br />
                {manjur.postalAddress.policeStation}, District {manjur.postalAddress.district}<br />
                {manjur.postalAddress.state} – <span className="font-mono font-bold">{manjur.postalAddress.pinCode}</span>
              </p>
            </div>

            {/* Communications List */}
            <div className="space-y-3 pt-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#1A3D63] font-bold block">
                Telephone & Electronic Helplines
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                {manjur.phoneNumbers.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="p-2.5 bg-[#F6FAFD] hover:bg-[#EBF3F9] border border-[#D2E3F0] rounded-2xs text-[#1A3D63] font-semibold flex items-center gap-2 transition-colors"
                  >
                    <svg className="w-4 h-4 text-[#4A7FA7] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{phone}</span>
                  </a>
                ))}
              </div>

              <div className="space-y-2 pt-1">
                {manjur.emailAddresses.map((email, idx) => (
                  <a
                    key={idx}
                    href={`mailto:${email}`}
                    className="p-2.5 bg-[#F6FAFD] hover:bg-[#EBF3F9] border border-[#D2E3F0] rounded-2xs text-xs font-mono text-[#1A3D63] flex items-center gap-2 transition-colors"
                  >
                    <svg className="w-4 h-4 text-[#4A7FA7] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{email}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Office Timings */}
            <div className="border-t border-[#EBF3F9] pt-4 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#62839F] block">
                Office Hours & Desk Timings
              </span>
              <p className="text-xs text-[#0A1931] font-sans font-medium">
                {manjur.officeHours.days} ({manjur.officeHours.timings})
              </p>
              <p className="text-[11px] text-[#62839F] leading-relaxed">
                {manjur.officeHours.notes}
              </p>
            </div>
          </div>

          {/* Card 2: Bal Vidyavasham */}
          <div className="border border-[#D2E3F0] bg-white rounded-xs p-6 sm:p-8 space-y-6 shadow-2xs">
            <div className="flex items-center justify-between border-b border-[#EBF3F9] pb-4">
              <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 bg-[#EBF3F9] text-[#1A3D63] rounded-2xs font-semibold">
                Foundational Junior Wing · Nursery–V (English Medium)
              </span>
              <span className="text-xs font-mono text-[#62839F]">
                Early Childhood Section
              </span>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-[#0A1931] font-normal">
                {bal.institutionName}
              </h3>
              <p className="text-xs font-mono text-[#4A7FA7] pt-0.5">
                {bal.stageRole}
              </p>
            </div>

            {/* Postal Address Block */}
            <div className="bg-[#F6FAFD] border border-[#D2E3F0] p-4 rounded-2xs space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#1A3D63] font-bold block">
                Official Registered Postal Address
              </span>
              <p className="text-xs text-[#0A1931] font-sans leading-relaxed">
                {bal.postalAddress.line1}<br />
                {bal.postalAddress.postOffice}, {bal.postalAddress.block}<br />
                {bal.postalAddress.policeStation}, District {bal.postalAddress.district}<br />
                {bal.postalAddress.state} – <span className="font-mono font-bold">{bal.postalAddress.pinCode}</span>
              </p>
            </div>

            {/* Communications List */}
            <div className="space-y-3 pt-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#1A3D63] font-bold block">
                Telephone & Electronic Helplines
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                {bal.phoneNumbers.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="p-2.5 bg-[#F6FAFD] hover:bg-[#EBF3F9] border border-[#D2E3F0] rounded-2xs text-[#1A3D63] font-semibold flex items-center gap-2 transition-colors"
                  >
                    <svg className="w-4 h-4 text-[#4A7FA7] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{phone}</span>
                  </a>
                ))}
              </div>

              <div className="space-y-2 pt-1">
                {bal.emailAddresses.map((email, idx) => (
                  <a
                    key={idx}
                    href={`mailto:${email}`}
                    className="p-2.5 bg-[#F6FAFD] hover:bg-[#EBF3F9] border border-[#D2E3F0] rounded-2xs text-xs font-mono text-[#1A3D63] flex items-center gap-2 transition-colors"
                  >
                    <svg className="w-4 h-4 text-[#4A7FA7] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{email}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Office Timings */}
            <div className="border-t border-[#EBF3F9] pt-4 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#62839F] block">
                Office Hours & Desk Timings
              </span>
              <p className="text-xs text-[#0A1931] font-sans font-medium">
                {bal.officeHours.days} ({bal.officeHours.timings})
              </p>
              <p className="text-[11px] text-[#62839F] leading-relaxed">
                {bal.officeHours.notes}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          TRAVEL & CAMPUS ACCESS GUIDANCE
         ────────────────────────────────────────────────────────────────── */}
      <section className="bg-white border-y border-[#D2E3F0] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#1A3D63] font-semibold">
              Section 02 · Location & Directions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0A1931] font-normal">
              Reaching the Campus in Mahadetoli, Senha
            </h2>
            <p className="text-sm sm:text-base text-[#335372] leading-relaxed">
              Situated in the scenic countryside of Senha Block, approximately 12 kilometers southwest of Lohardaga District Headquarters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-[#F6FAFD] border border-[#D2E3F0] p-6 rounded-xs space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#1A3D63] font-bold block">
                01 · By Railway
              </span>
              <h4 className="font-serif text-lg text-[#0A1931] font-semibold">
                Lohardaga Railway Station
              </h4>
              <p className="text-xs text-[#335372] leading-relaxed">
                Lohardaga Railway Station is connected to Ranchi Junction. From the station, local auto-rickshaws, shared taxis, and buses ply toward Senha and Badla regularly. Travel duration is approximately 25–30 minutes.
              </p>
            </div>

            <div className="bg-[#F6FAFD] border border-[#D2E3F0] p-6 rounded-xs space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#1A3D63] font-bold block">
                02 · By Road / Bus
              </span>
              <h4 className="font-serif text-lg text-[#0A1931] font-semibold">
                Lohardaga Bus Stand
              </h4>
              <p className="text-xs text-[#335372] leading-relaxed">
                Direct state and private buses connect Lohardaga with Ranchi, Gumla, and Latehar. Disembark at Lohardaga or take the Senha route bus stopping near Badla / Mahadev Ashram turn-off.
              </p>
            </div>

            <div className="bg-[#F6FAFD] border border-[#D2E3F0] p-6 rounded-xs space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#1A3D63] font-bold block">
                03 · Local Access
              </span>
              <h4 className="font-serif text-lg text-[#0A1931] font-semibold">
                Mahadetoli Roadway
              </h4>
              <p className="text-xs text-[#335372] leading-relaxed">
                Upon reaching Mahadev Aashram (Mahadetoli) in Badla, the two campuses face each other directly across the quiet village road: Manjurmati High School on one side and Bal Vidyavasham opposite.
              </p>
            </div>
          </div>

          {/* Campus Schematic / Landmark Card */}
          <div className="bg-[#F6FAFD] border border-[#1A3D63]/30 p-6 sm:p-8 rounded-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#D2E3F0] pb-3">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#1A3D63] font-bold">
                  Spatial Campus Layout
                </span>
                <h4 className="font-serif text-xl text-[#0A1931]">
                  The Dual-School Campus Corridor
                </h4>
              </div>
              <span className="text-xs font-mono text-[#62839F]">
                Senha Block · Mahadetoli Roadway
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-11 items-center gap-4 py-4">
              <div className="md:col-span-5 bg-white border border-[#D2E3F0] p-4 rounded-2xs text-center space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 bg-[#0A1931] text-white rounded-2xs font-bold inline-block">
                  Senior Wing
                </span>
                <h5 className="font-serif text-base text-[#0A1931] font-semibold pt-1">
                  Manjurmati High School
                </h5>
                <p className="text-[11px] text-[#62839F]">
                  Main academic building · Science Laboratory · Atal Tinkering Lab · Campus Gate
                </p>
              </div>

              <div className="md:col-span-1 text-center py-2">
                <div className="font-mono text-[10px] text-[#4A7FA7] uppercase tracking-widest font-bold">
                  ← 15m →<br />
                  <span className="text-[9px] text-[#62839F]">Shared Road</span>
                </div>
              </div>

              <div className="md:col-span-5 bg-white border border-[#D2E3F0] p-4 rounded-2xs text-center space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 bg-[#EBF3F9] text-[#1A3D63] rounded-2xs font-bold inline-block">
                  Junior Wing
                </span>
                <h5 className="font-serif text-base text-[#0A1931] font-semibold pt-1">
                  Bal Vidyavasham
                </h5>
                <p className="text-[11px] text-[#62839F]">
                  Sheltered botanical courtyard · Primary classrooms · Junior play area
                </p>
              </div>
            </div>

            <p className="text-xs text-[#335372] font-sans leading-relaxed text-center max-w-2xl mx-auto pt-2">
              Visitors arriving by private vehicle may park along the designated visitor verge adjacent to the main gate of Manjurmati High School.
            </p>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          COMMUNICATION DISPATCH / MESSAGE FORM
         ────────────────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="border border-[#D2E3F0] bg-white rounded-xs p-6 sm:p-10 shadow-xs space-y-8">
          <div className="border-b border-[#D2E3F0] pb-6 space-y-2 text-center max-w-xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-[#1A3D63] font-semibold">
              Administrative Message
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#0A1931] font-normal">
              Send an Official Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-[#335372] leading-relaxed">
              For general administrative inquiries, verification requests, or meeting requests with school leadership, please submit this inquiry.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#EBF3F9] border border-[#1A3D63] p-6 sm:p-8 rounded-xs space-y-6">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#1A3D63] text-white flex items-center justify-center shrink-0 text-base font-bold">
                  ✉
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#0A1931]">
                    Official Communication Draft Prepared
                  </h3>
                  <p className="text-xs sm:text-sm text-[#335372] leading-relaxed">
                    Your device email client has been prompted to send this structured inquiry to <strong className="text-[#0A1931]">mmhs66535@gmail.com</strong> (with secondary copy to <strong className="text-[#0A1931]">shivayashivi@gmail.com</strong>).
                  </p>
                </div>
              </div>

              {/* Data Transparency Notice */}
              <div className="p-4 bg-white border border-[#D2E3F0] rounded-2xs text-xs font-sans text-[#335372] space-y-1.5">
                <p className="font-semibold text-[#0A1931] flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1A3D63]" />
                  Direct Administrative Channel
                </p>
                <p className="text-[12px] leading-relaxed text-[#62839F]">
                  This public site does not transmit personal data to third-party databases. If your mail client did not automatically launch, please copy the structured payload below or contact the administrative desk by telephone.
                </p>
              </div>

              {/* Pre-formatted Text Block */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#1A3D63]">
                  <span>Structured Message Payload</span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="font-bold underline hover:text-[#0A1931] cursor-pointer"
                  >
                    {copied ? '✓ Copied to Clipboard' : 'Copy Text'}
                  </button>
                </div>
                <pre className="p-3.5 bg-white border border-[#D2E3F0] rounded-2xs text-[11px] font-mono text-[#0A1931] whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">
                  {formattedMessageText}
                </pre>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={mailtoUrl}
                  className="px-4 py-2 bg-[#1A3D63] text-white text-xs font-mono uppercase tracking-wider rounded-2xs hover:bg-[#0A1931] transition-colors font-semibold"
                >
                  Launch Mail App Again ↗
                </a>
                <a
                  href="tel:+918340469822"
                  className="px-4 py-2 bg-white border border-[#1A3D63] text-[#1A3D63] text-xs font-mono uppercase tracking-wider rounded-2xs hover:bg-[#EBF3F9] transition-colors font-semibold"
                >
                  Call Main Desk: +91 8340469822
                </a>
                <a
                  href="tel:+919304544100"
                  className="px-4 py-2 bg-white border border-[#D2E3F0] text-[#1A3D63] text-xs font-mono uppercase tracking-wider rounded-2xs hover:bg-[#EBF3F9] transition-colors font-semibold"
                >
                  Alt: +91 9304544100
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 text-xs font-mono uppercase tracking-wider text-[#62839F] hover:text-[#0A1931] transition-colors ml-auto cursor-pointer"
                >
                  Draft Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="contactName" className="block text-xs font-mono uppercase tracking-wider text-[#1A3D63] font-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your legal full name"
                    className="w-full px-3.5 py-2 text-xs font-sans border border-[#D2E3F0] rounded-2xs focus:outline-hidden focus:border-[#1A3D63] focus:ring-1 focus:ring-[#1A3D63] bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="contactPhone" className="block text-xs font-mono uppercase tracking-wider text-[#1A3D63] font-semibold">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    id="contactPhone"
                    required
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full px-3.5 py-2 text-xs font-sans border border-[#D2E3F0] rounded-2xs focus:outline-hidden focus:border-[#1A3D63] focus:ring-1 focus:ring-[#1A3D63] bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="contactEmail" className="block text-xs font-mono uppercase tracking-wider text-[#1A3D63] font-semibold">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2 text-xs font-sans border border-[#D2E3F0] rounded-2xs focus:outline-hidden focus:border-[#1A3D63] focus:ring-1 focus:ring-[#1A3D63] bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="contactPurpose" className="block text-xs font-mono uppercase tracking-wider text-[#1A3D63] font-semibold">
                    Purpose of Communication *
                  </label>
                  <select
                    id="contactPurpose"
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs font-sans border border-[#D2E3F0] rounded-2xs focus:outline-hidden focus:border-[#1A3D63] focus:ring-1 focus:ring-[#1A3D63] bg-white"
                  >
                    <option value="General Administrative Query">General Administrative Query</option>
                    <option value="Admission Inquiry - Bal Vidyavasham">Admission Inquiry - Bal Vidyavasham (Junior)</option>
                    <option value="Admission Inquiry - Manjurmati">Admission Inquiry - Manjurmati (Senior)</option>
                    <option value="JAC State Board Verification">JAC State Board Verification / Mark Sheet</option>
                    <option value="Meeting Request with Leadership">Meeting Request with School Leadership</option>
                    <option value="Media or Community Liaison">Media or Community Liaison</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="contactMsg" className="block text-xs font-mono uppercase tracking-wider text-[#1A3D63] font-semibold">
                  Detailed Message / Inquiry *
                </label>
                <textarea
                  id="contactMsg"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please state the details of your inquiry..."
                  className="w-full px-3.5 py-2 text-xs font-sans border border-[#D2E3F0] rounded-2xs focus:outline-hidden focus:border-[#1A3D63] focus:ring-1 focus:ring-[#1A3D63] bg-white resize-y"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#D2E3F0]">
                <p className="text-[11px] font-mono text-[#62839F]">
                  Desk Response: Within 1–2 official working days
                </p>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#0A1931] text-white text-xs font-mono uppercase tracking-wider rounded-2xs hover:bg-[#1A3D63] transition-colors font-semibold cursor-pointer"
                >
                  Prepare Official Email Dispatch →
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Directory links */}
        <div className="pt-12 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/admissions"
            className="text-xs font-mono uppercase tracking-wider text-[#1A3D63] hover:text-[#0A1931] font-semibold flex items-center gap-2"
          >
            ← Check Admissions & Enrolment Criteria
          </Link>
          <Link
            to="/notices"
            className="text-xs font-mono uppercase tracking-wider text-[#1A3D63] hover:text-[#0A1931] font-semibold flex items-center gap-2"
          >
            View Official Gazetted Notices →
          </Link>
        </div>
      </section>
    </div>
  );
}
