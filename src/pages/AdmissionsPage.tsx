import React, { useState } from 'react';
import OceanCanvas from '../components/OceanCanvas';
import { Link } from '../router/Router';

export default function AdmissionsPage() {
  const [selectedSchool, setSelectedSchool] = useState<'bal-vidyavasham' | 'manjurmati'>('bal-vidyavasham');
  const [formData, setFormData] = useState({
    studentName: '',
    dateOfBirth: '',
    seekingGrade: 'Nursery',
    guardianName: '',
    phoneNumber: '',
    emailAddress: '',
    currentSchool: '',
    comments: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const schoolLabel =
    selectedSchool === 'bal-vidyavasham'
      ? 'Bal Vidyavasham (Junior Section, Nursery–Class V)'
      : 'Manjurmati High School (Senior Section, Classes VI–X, JAC)';

  const formattedInquiryText = `OFFICIAL ADMISSION ENQUIRY
--------------------------------------------------
Institutional Wing: ${schoolLabel}
Candidate Name: ${formData.studentName}
Seeking Grade / Class: ${formData.seekingGrade}
Date of Birth: ${formData.dateOfBirth || 'Not specified'}
Parent / Guardian: ${formData.guardianName}
Contact Telephone: ${formData.phoneNumber}
Email Address: ${formData.emailAddress || 'Not specified'}
Previous School / Locality: ${formData.currentSchool || 'None'}
Parent Notes / Questions:
${formData.comments || 'No specific remarks'}
--------------------------------------------------
Dispatched via Official Portal · Mahadev Aashram, Senha`;

  const mailtoUrl = `mailto:mmhs66535@gmail.com?subject=${encodeURIComponent(
    `[Admission Inquiry - ${selectedSchool === 'bal-vidyavasham' ? 'Bal Vidyavasham' : 'Manjurmati'}] ${formData.studentName} (${formData.seekingGrade})`
  )}&body=${encodeURIComponent(formattedInquiryText)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.location.href = mailtoUrl;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedInquiryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setCopied(false);
    setFormData({
      studentName: '',
      dateOfBirth: '',
      seekingGrade: selectedSchool === 'bal-vidyavasham' ? 'Nursery' : 'Class VI',
      guardianName: '',
      phoneNumber: '',
      emailAddress: '',
      currentSchool: '',
      comments: '',
    });
  };

  return (
    <div className="w-full bg-[#F6FAFD] text-[#0A1931]">
      {/* ──────────────────────────────────────────────────────────────────
          PAGE HERO: ADMISSIONS ROADMAP
         ────────────────────────────────────────────────────────────────── */}
      <section className="relative py-14 sm:py-20 lg:py-24 bg-[#F6FAFD] border-b border-[#D2E3F0] overflow-hidden">
        <OceanCanvas variant="quiet" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A3D63]" aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#1A3D63]">
                Admission Roadmap & Enrolment
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0A1931] font-normal tracking-tight leading-[1.08]">
              Admissions Guide & <br />
              <span className="italic font-light text-[#335372]">3-Step Enrolment Roadmap</span>
            </h1>

            <p className="text-base sm:text-lg text-[#335372] font-sans leading-relaxed pt-1">
              Both institutions maintain independent admissions desks in Mahadetoli, Senha. Follow this 3-step guide to choose your school, verify required documents, and submit your inquiry.
            </p>

            {/* Quick 3-Step Stepper Bar */}
            <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div className="p-3 bg-white border border-[#D2E3F0] rounded-2xs flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#1A3D63] text-white text-xs font-mono font-semibold flex items-center justify-center shrink-0">1</span>
                <div>
                  <span className="text-xs font-semibold text-[#0A1931] block">Choose School</span>
                  <span className="text-[11px] text-[#62839F]">Junior (N–V) or Senior (VI–X)</span>
                </div>
              </div>
              <div className="p-3 bg-white border border-[#D2E3F0] rounded-2xs flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#1A3D63] text-white text-xs font-mono font-semibold flex items-center justify-center shrink-0">2</span>
                <div>
                  <span className="text-xs font-semibold text-[#0A1931] block">Prepare Documents</span>
                  <span className="text-[11px] text-[#62839F]">Birth cert, TC, Aadhaar, photos</span>
                </div>
              </div>
              <div className="p-3 bg-white border border-[#D2E3F0] rounded-2xs flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#1A3D63] text-white text-xs font-mono font-semibold flex items-center justify-center shrink-0">3</span>
                <div>
                  <span className="text-xs font-semibold text-[#0A1931] block">Submit Enquiry</span>
                  <span className="text-[11px] text-[#62839F]">Direct call or online dispatch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          STEP 1: CHOOSE YOUR SCHOOL
         ────────────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
        <div className="border-b border-[#D2E3F0] pb-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-[#1A3D63] text-white text-[11px] font-mono font-semibold flex items-center justify-center">1</span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#1A3D63] font-semibold">
              Step 1 · Choose Your School & Stage
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#0A1931] font-normal pt-2">
            Two Independent Campuses Across the Road
          </h2>
          <p className="text-xs sm:text-sm text-[#335372] font-sans max-w-2xl pt-1">
            Bal Vidyavasham and Manjurmati High School maintain separate admissions registers, faculties, and age criteria.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Bal Vidyavasham */}
          <div className={`border rounded-xs p-6 space-y-4 transition-all ${
            selectedSchool === 'bal-vidyavasham'
              ? 'border-[#1A3D63] bg-white shadow-md ring-1 ring-[#1A3D63]'
              : 'border-[#D2E3F0] bg-white/80'
          }`}>
            <div className="flex items-center justify-between border-b border-[#EBF3F9] pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#1A3D63] font-semibold block">
                  Foundational Primary
                </span>
                <h3 className="font-serif text-xl font-medium text-[#0A1931]">
                  Bal Vidyavasham (Junior Section)
                </h3>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#EBF3F9] text-[#1A3D63] rounded-2xs border border-[#D2E3F0]">
                Nursery – Class V
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#335372] leading-relaxed">
              English-medium foundational school nurturing phonics, early literacy, arithmetic readiness, and social play in a botanical courtyard setting.
            </p>

            <div className="space-y-1.5 text-xs text-[#335372]">
              <div className="flex items-center gap-2">
                <span className="font-mono font-semibold text-[#1A3D63] w-20">Age Guide:</span>
                <span>Nursery (3+ yrs) · LKG/UKG (4–5 yrs) · Classes I–V (6–11 yrs)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-semibold text-[#1A3D63] w-20">Process:</span>
                <span>Informal parent-child interaction (no written test for Nursery)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-semibold text-[#1A3D63] w-20">Helpline:</span>
                <a href="tel:+918340469822" className="text-[#1A3D63] hover:underline font-semibold">+91 8340469822</a>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setSelectedSchool('bal-vidyavasham');
                setFormData(prev => ({ ...prev, seekingGrade: 'Nursery' }));
              }}
              className={`w-full py-2 text-xs font-semibold uppercase tracking-wider rounded-2xs border transition-colors ${
                selectedSchool === 'bal-vidyavasham'
                  ? 'bg-[#1A3D63] text-white border-[#1A3D63]'
                  : 'bg-white text-[#1A3D63] border-[#1A3D63] hover:bg-[#EBF3F9]'
              }`}
            >
              {selectedSchool === 'bal-vidyavasham' ? '✓ Selected for Enquiry' : 'Select Bal Vidyavasham'}
            </button>
          </div>

          {/* Card 2: Manjurmati High School */}
          <div className={`border rounded-xs p-6 space-y-4 transition-all ${
            selectedSchool === 'manjurmati'
              ? 'border-[#0A1931] bg-white shadow-md ring-1 ring-[#0A1931]'
              : 'border-[#D2E3F0] bg-white/80'
          }`}>
            <div className="flex items-center justify-between border-b border-[#EBF3F9] pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#0A1931] font-semibold block">
                  Secondary State Board
                </span>
                <h3 className="font-serif text-xl font-medium text-[#0A1931]">
                  Manjurmati High School (Senior Section)
                </h3>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#0A1931] text-white rounded-2xs">
                Classes VI – X · JAC
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#335372] leading-relaxed">
              JAC-affiliated secondary school with dual-medium instruction (Hindi & English), science laboratories, and hands-on robotics in the Atal Tinkering Lab.
            </p>

            <div className="space-y-1.5 text-xs text-[#335372]">
              <div className="flex items-center gap-2">
                <span className="font-mono font-semibold text-[#0A1931] w-20">Eligibility:</span>
                <span>Class VI requires passing Class V · Classes VII–IX require TC & marks sheet</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-semibold text-[#0A1931] w-20">Process:</span>
                <span>Prior transcript submission and diagnostic proficiency placement</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-semibold text-[#0A1931] w-20">Helpline:</span>
                <a href="tel:+919155184206" className="text-[#0A1931] hover:underline font-semibold">+91 9155184206</a>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setSelectedSchool('manjurmati');
                setFormData(prev => ({ ...prev, seekingGrade: 'Class VI' }));
              }}
              className={`w-full py-2 text-xs font-semibold uppercase tracking-wider rounded-2xs border transition-colors ${
                selectedSchool === 'manjurmati'
                  ? 'bg-[#0A1931] text-white border-[#0A1931]'
                  : 'bg-white text-[#0A1931] border-[#0A1931] hover:bg-[#F0F5FA]'
              }`}
            >
              {selectedSchool === 'manjurmati' ? '✓ Selected for Enquiry' : 'Select Manjurmati High School'}
            </button>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          STEP 2: PREPARE ESSENTIAL DOCUMENTS
         ────────────────────────────────────────────────────────────────── */}
      <section className="bg-white border-y border-[#D2E3F0] py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="border-b border-[#D2E3F0] pb-4">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#1A3D63] text-white text-[11px] font-mono font-semibold flex items-center justify-center">2</span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#1A3D63] font-semibold">
                Step 2 · Prepare Required Documents
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#0A1931] font-normal pt-2">
              Document Checklist & Counter Verification
            </h2>
            <p className="text-xs sm:text-sm text-[#335372] max-w-2xl pt-1">
              Bring self-attested photocopies along with original documents for physical inspection at the school administrative desk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-[#F6FAFD] border border-[#D2E3F0] rounded-xs space-y-1">
              <span className="font-mono text-xs text-[#1A3D63] font-bold">01. Birth Certificate</span>
              <p className="text-xs text-[#335372]">Issued by Municipal Corporation or Gram Panchayat registrar.</p>
            </div>
            <div className="p-4 bg-[#F6FAFD] border border-[#D2E3F0] rounded-xs space-y-1">
              <span className="font-mono text-xs text-[#1A3D63] font-bold">02. Transfer Certificate</span>
              <p className="text-xs text-[#335372]">Original TC from prior school (mandatory for Class II and above).</p>
            </div>
            <div className="p-4 bg-[#F6FAFD] border border-[#D2E3F0] rounded-xs space-y-1">
              <span className="font-mono text-xs text-[#1A3D63] font-bold">03. Aadhaar Copies</span>
              <p className="text-xs text-[#335372]">Photocopies of student and parent/guardian Aadhaar cards.</p>
            </div>
            <div className="p-4 bg-[#F6FAFD] border border-[#D2E3F0] rounded-xs space-y-1">
              <span className="font-mono text-xs text-[#1A3D63] font-bold">04. 4 Passport Photos</span>
              <p className="text-xs text-[#335372]">Recent color passport-sized photographs of the student.</p>
            </div>
          </div>

          {/* Prospectus & Fee Transparency Box */}
          <div className="p-4 sm:p-5 bg-[#EBF3F9]/60 border border-[#B3CFE5] rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-sans text-[#335372]">
            <div className="space-y-1">
              <p className="font-semibold text-[#0A1931]">
                Official Prospectus & Transparent Fee Structure:
              </p>
              <p className="leading-relaxed">
                Authentic fee schedules and prospectus forms are provided directly at the administrative counter to maintain complete accuracy and avoid unverified online claims.
              </p>
            </div>
            <div className="shrink-0 font-mono text-[11px] text-[#1A3D63] bg-white px-3 py-1.5 border border-[#B3CFE5] rounded-2xs">
              Desk Hours: Mon–Sat 8:30 AM – 2:00 PM
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          STEP 3: CONTACT & SUBMIT ADMISSION ENQUIRY
         ────────────────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="border border-[#D2E3F0] bg-white rounded-xs p-6 sm:p-10 shadow-xs space-y-6">
          <div className="border-b border-[#D2E3F0] pb-5 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#1A3D63] text-white text-[11px] font-mono font-semibold flex items-center justify-center">3</span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#1A3D63] font-semibold">
                Step 3 · Submit Admission Enquiry
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#0A1931] font-normal pt-1">
              Send Enquiry for {selectedSchool === 'bal-vidyavasham' ? 'Bal Vidyavasham (Junior)' : 'Manjurmati High School (Senior)'}
            </h2>
            <p className="text-xs sm:text-sm text-[#335372] leading-relaxed">
              Complete the form below to generate a pre-formatted dispatch to <strong className="text-[#0A1931]">mmhs66535@gmail.com</strong>, or call the desk directly.
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
                    Official Admission Enquiry Prepared
                  </h3>
                  <p className="text-xs sm:text-sm text-[#335372] leading-relaxed">
                    Your device email application was prompted to transmit this enquiry directly to the administration desk (<strong className="text-[#0A1931]">mmhs66535@gmail.com</strong>).
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
                  This public portal operates without intermediary third-party tracking databases. If your mail client did not open automatically, copy the pre-formatted enquiry below to send via your email app, or call the campus helpline directly.
                </p>
              </div>

              {/* Pre-formatted Text Block */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#1A3D63]">
                  <span>Structured Enquiry Payload</span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="font-bold underline hover:text-[#0A1931] cursor-pointer"
                  >
                    {copied ? '✓ Copied to Clipboard' : 'Copy Text'}
                  </button>
                </div>
                <pre className="p-3.5 bg-white border border-[#D2E3F0] rounded-2xs text-[11px] font-mono text-[#0A1931] whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">
                  {formattedInquiryText}
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
                  href={`tel:${selectedSchool === 'bal-vidyavasham' ? '+918340469822' : '+919155184206'}`}
                  className="px-4 py-2 bg-white border border-[#1A3D63] text-[#1A3D63] text-xs font-mono uppercase tracking-wider rounded-2xs hover:bg-[#EBF3F9] transition-colors font-semibold"
                >
                  Call School Desk
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 text-xs font-mono uppercase tracking-wider text-[#62839F] hover:text-[#0A1931] transition-colors ml-auto cursor-pointer"
                >
                  Edit / Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: Student Name & Seeking Grade */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="studentName" className="block text-xs font-mono uppercase tracking-wider text-[#1A3D63] font-semibold">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    required
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="Enter student legal name"
                    className="w-full px-3.5 py-2 text-xs font-sans border border-[#D2E3F0] rounded-2xs focus:outline-hidden focus:border-[#1A3D63] focus:ring-1 focus:ring-[#1A3D63] bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="seekingGrade" className="block text-xs font-mono uppercase tracking-wider text-[#1A3D63] font-semibold">
                    Seeking Grade / Class *
                  </label>
                  <select
                    id="seekingGrade"
                    required
                    value={formData.seekingGrade}
                    onChange={(e) => setFormData({ ...formData, seekingGrade: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs font-sans border border-[#D2E3F0] rounded-2xs focus:outline-hidden focus:border-[#1A3D63] focus:ring-1 focus:ring-[#1A3D63] bg-white"
                  >
                    {selectedSchool === 'bal-vidyavasham' ? (
                      <>
                        <option value="Nursery">Nursery</option>
                        <option value="LKG">LKG</option>
                        <option value="UKG">UKG</option>
                        <option value="Class I">Class I</option>
                        <option value="Class II">Class II</option>
                        <option value="Class III">Class III</option>
                        <option value="Class IV">Class IV</option>
                        <option value="Class V">Class V</option>
                      </>
                    ) : (
                      <>
                        <option value="Class VI">Class VI</option>
                        <option value="Class VII">Class VII</option>
                        <option value="Class VIII">Class VIII</option>
                        <option value="Class IX">Class IX</option>
                        <option value="Class X">Class X</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              {/* Row 2: Guardian Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="guardianName" className="block text-xs font-mono uppercase tracking-wider text-[#1A3D63] font-semibold">
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    id="guardianName"
                    required
                    value={formData.guardianName}
                    onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                    placeholder="Enter parent/guardian name"
                    className="w-full px-3.5 py-2 text-xs font-sans border border-[#D2E3F0] rounded-2xs focus:outline-hidden focus:border-[#1A3D63] focus:ring-1 focus:ring-[#1A3D63] bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="phoneNumber" className="block text-xs font-mono uppercase tracking-wider text-[#1A3D63] font-semibold">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    required
                    pattern="[0-9]{10}"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full px-3.5 py-2 text-xs font-sans border border-[#D2E3F0] rounded-2xs focus:outline-hidden focus:border-[#1A3D63] focus:ring-1 focus:ring-[#1A3D63] bg-white"
                  />
                </div>
              </div>

              {/* Row 3: Email & Previous School */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="emailAddress" className="block text-xs font-mono uppercase tracking-wider text-[#1A3D63] font-semibold">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    id="emailAddress"
                    value={formData.emailAddress}
                    onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                    placeholder="parent.email@example.com"
                    className="w-full px-3.5 py-2 text-xs font-sans border border-[#D2E3F0] rounded-2xs focus:outline-hidden focus:border-[#1A3D63] focus:ring-1 focus:ring-[#1A3D63] bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="currentSchool" className="block text-xs font-mono uppercase tracking-wider text-[#1A3D63] font-semibold">
                    Previous School / Locality
                  </label>
                  <input
                    type="text"
                    id="currentSchool"
                    value={formData.currentSchool}
                    onChange={(e) => setFormData({ ...formData, currentSchool: e.target.value })}
                    placeholder="Previous school name & area"
                    className="w-full px-3.5 py-2 text-xs font-sans border border-[#D2E3F0] rounded-2xs focus:outline-hidden focus:border-[#1A3D63] focus:ring-1 focus:ring-[#1A3D63] bg-white"
                  />
                </div>
              </div>

              {/* Row 4: Remarks */}
              <div className="space-y-1">
                <label htmlFor="comments" className="block text-xs font-mono uppercase tracking-wider text-[#1A3D63] font-semibold">
                  Inquiry Notes / Questions
                </label>
                <textarea
                  id="comments"
                  rows={2}
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  placeholder="Any questions regarding documentation, bus routes, or timings..."
                  className="w-full px-3.5 py-2 text-xs font-sans border border-[#D2E3F0] rounded-2xs focus:outline-hidden focus:border-[#1A3D63] focus:ring-1 focus:ring-[#1A3D63] bg-white resize-y"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#D2E3F0]">
                <p className="text-[11px] font-mono text-[#62839F]">
                  Mahadev Aashram, PO Badla, Senha, Lohardaga - 835302
                </p>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#0A1931] text-white text-xs font-mono uppercase tracking-wider rounded-2xs hover:bg-[#1A3D63] transition-colors font-semibold cursor-pointer"
                >
                  Submit Admission Enquiry →
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Directory links */}
        <div className="pt-10 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/contact"
            className="text-xs font-mono uppercase tracking-wider text-[#1A3D63] hover:text-[#0A1931] font-semibold flex items-center gap-2"
          >
            ← View Campus Location & Directions
          </Link>
          <Link
            to="/notices"
            className="text-xs font-mono uppercase tracking-wider text-[#1A3D63] hover:text-[#0A1931] font-semibold flex items-center gap-2"
          >
            Check Admission Notices on Gazette Board →
          </Link>
        </div>
      </section>
    </div>
  );
}
