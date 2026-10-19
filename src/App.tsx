import Header from './components/Header';
import Footer from './components/Footer';
import { RouterProvider, useRouter } from './router/Router';
import { SmoothScrollProvider } from './motion/lenis';
import { RouteTransition } from './motion/RouteTransition';

// All 10 site destinations + 404
import HomePage from './pages/HomePage';
import JuniorSchoolPage from './pages/JuniorSchoolPage';
import SeniorSchoolPage from './pages/SeniorSchoolPage';
import FacilitiesPage from './pages/FacilitiesPage';
import FacultyLeadershipPage from './pages/FacultyLeadershipPage';
import NoticesPage from './pages/NoticesPage';
import AcademicsPage from './pages/AcademicsPage';
import SchoolLifePage from './pages/SchoolLifePage';
import AdmissionsPage from './pages/AdmissionsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

import { useEffect } from 'react';

function AppContent() {
  const { currentPath } = useRouter();

  // Normalize path by stripping trailing slashes if any (except root)
  const normalizedPath =
    currentPath.length > 1 && currentPath.endsWith('/')
      ? currentPath.slice(0, -1)
      : currentPath;

  // Accessible document title and SEO metadata updates
  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Manjurmati High School with Bal Vidyavasham | Mahadetoli, Senha',
      '/junior-school': 'Bal Vidyavasham | Foundational Junior School (Nursery–V)',
      '/senior-school': 'Manjurmati High School | Secondary School (VI–X · JAC)',
      '/facilities': 'Facilities & Learning Spaces | Manjurmati × Bal Vidyavasham',
      '/faculty-leadership': 'Faculty & Academic Leadership | Manjurmati × Bal Vidyavasham',
      '/notices': 'Noticeboard & Gazette Register | Manjurmati × Bal Vidyavasham',
      '/academics': 'Academics & Board Examination Standards | Manjurmati High School',
      '/school-life': 'School Life & Campus Chronicles | Manjurmati × Bal Vidyavasham',
      '/admissions': 'Admissions & Enrolment Desk | Manjurmati × Bal Vidyavasham',
      '/contact': 'Contact & Campus Directory | Manjurmati × Bal Vidyavasham',
    };

    const descriptions: Record<string, string> = {
      '/': 'Manjurmati (Senior School, Classes VI–X, JAC Affiliated) and Bal Vidyavasham (Junior School, Nursery–Class V) — dual institutional campus in Mahadetoli, Senha, Lohardaga, Jharkhand.',
      '/junior-school': 'Bal Vidyavasham: Foundational junior wing providing early childhood education and primary schooling (Nursery through Class V) with English medium instruction in Senha, Lohardaga.',
      '/senior-school': 'Manjurmati High School: Secondary institution (Classes VI to X) affiliated with Jharkhand Academic Council (JAC), offering dual-medium streams, science labs, and ATL facilities.',
      '/facilities': 'Explore campus facilities at Manjurmati and Bal Vidyavasham: Atal Tinkering Lab (ATL), secondary science laboratory, curricular library, sports ground, and junior courtyard.',
      '/faculty-leadership': 'Academic stewardship and faculty directory of Manjurmati High School and Bal Vidyavasham. Meet certified subject educators and institutional mentors in Senha Block.',
      '/notices': 'Official administrative bulletin register and historical gazette archives for Manjurmati High School and Bal Vidyavasham. Verified circulars, events, and examination notices.',
      '/academics': 'Secondary academic standards, board curriculum, examination frameworks, and direct link to Jharkhand Academic Council (JAC) matriculation results portal.',
      '/school-life': 'Campus chronicles, co-curricular traditions, science exhibitions, annual athletic sports, morning assemblies, and student environmental initiatives at Mahadetoli, Senha.',
      '/admissions': 'Official admission criteria, grade pathways (Nursery–V and VI–X), required documentation, and direct enquiry desk for Bal Vidyavasham and Manjurmati High School.',
      '/contact': 'Direct administrative office lines, campus address in Mahadetoli, PO Badla, Senha Block, PIN 835302, Lohardaga, helpline numbers (+91 8340469822), and travel instructions.',
    };

    const SITE_URL = 'https://manjurmatihighschool.com';
    const title = titles[normalizedPath] || 'Folio Not Located (404) | Manjurmati × Bal Vidyavasham';
    const description = descriptions[normalizedPath] || 'The requested folio could not be located in the campus register of Manjurmati High School with Bal Vidyavasham.';
    const canonicalUrl = `${SITE_URL}${normalizedPath === '/' ? '' : normalizedPath}`;

    document.title = title;

    // Helper to update or create meta tags
    const setMetaTag = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const match = selector.match(/\[([a-zA-Z0-9_:-]+)="?([^"\]]+)"?\]/);
        if (match) el.setAttribute(match[1], match[2]);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMetaTag('meta[name="description"]', 'content', description);
    setMetaTag('meta[property="og:title"]', 'content', title);
    setMetaTag('meta[property="og:description"]', 'content', description);
    setMetaTag('meta[property="og:url"]', 'content', canonicalUrl);
    setMetaTag('meta[name="twitter:title"]', 'content', title);
    setMetaTag('meta[name="twitter:description"]', 'content', description);

    // Synchronize Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [normalizedPath]);

  const renderPage = () => {
    switch (normalizedPath) {
      case '/':
      case '':
        return <HomePage />;
      case '/junior-school':
        return <JuniorSchoolPage />;
      case '/senior-school':
        return <SeniorSchoolPage />;
      case '/facilities':
        return <FacilitiesPage />;
      case '/faculty-leadership':
        return <FacultyLeadershipPage />;
      case '/notices':
        return <NoticesPage />;
      case '/academics':
        return <AcademicsPage />;
      case '/school-life':
        return <SchoolLifePage />;
      case '/admissions':
        return <AdmissionsPage />;
      case '/contact':
        return <ContactPage />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F6FAFD] text-[#0A1931] flex flex-col font-sans selection:bg-[#B3CFE5]/40 selection:text-[#0A1931]">
      <Header />
      <main id="main-content" className="flex-1 w-full overflow-x-hidden pt-18 sm:pt-20">
        <RouteTransition>
          {renderPage()}
        </RouteTransition>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <SmoothScrollProvider>
        <AppContent />
      </SmoothScrollProvider>
    </RouterProvider>
  );
}
