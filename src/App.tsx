import { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Mail, MapPin, Briefcase, Phone } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'education', 'skills', 'certifications', 'projects', 'languages', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <img
              src="/IMG_0094.jpg"
              alt="Shiva Chaitanya Susarla"
              className="w-12 h-12 rounded-full object-cover border-2 border-blue-600"
            />

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-8 absolute md:relative top-16 md:top-0 left-0 right-0 bg-white md:bg-transparent p-6 md:p-0 border-b md:border-0 border-slate-200`}>
              {['about', 'experience', 'education', 'skills', 'certifications', 'projects', 'languages', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`font-medium transition-colors capitalize ${
                      activeSection === section
                        ? 'text-blue-600'
                        : 'text-slate-600 hover:text-blue-600'
                    }`}
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-24">
        <section id="about" className="py-16 text-center">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full border-4 border-blue-600 shadow-2xl shadow-blue-500/50 overflow-hidden">
            <img
              src="/IMG_0094.jpg"
              alt="Shiva Chaitanya Susarla"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
            Shiva Chaitanya Susarla
          </h1>
          <p className="text-2xl text-blue-600 mb-4 font-medium">
            Lead Engineer (Data & Analytics, Digital X)
          </p>
          <p className="max-w-3xl mx-auto text-slate-600 leading-relaxed mb-8 text-lg">
            Organized & hard-working Data Engineer. Knowledgeable in modern data architecture, big data platforms, cloud solutions, and agile methodologies. Passionate about building clean, automated, and data-driven ecosystems. Possess great strengths - Self-confident, quick learner, adaptability, communication skills.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://www.linkedin.com/in/shiva-chaitanya-susarla-b36559239/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:-translate-y-1 flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn Profile
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-slate-500/50 transition-all hover:-translate-y-1 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </button>
          </div>
        </section>

        <section id="experience" className="py-16">
          <h2 className="text-4xl font-bold text-center mb-12 relative pb-4">
            Work Experience
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
          </h2>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200 hover:border-blue-600">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">Lead Engineer</h3>
                <p className="text-lg text-slate-700 font-medium">NatWest Group · Full-time</p>
                <p className="text-slate-600 mt-1">Data & Analytics, Digital X</p>
                <p className="text-slate-500 text-sm mt-1 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Bengaluru, Karnataka, India · Remote
                </p>
              </div>
              <div className="text-blue-600 font-medium whitespace-nowrap">Jun 2025 - Present (5 months)</div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Neo4j', 'Spring Boot', 'Data & Analytics', 'Graph Databases'].map(skill => (
                <span key={skill} className="px-4 py-2 bg-cyan-50 text-slate-700 rounded-full text-sm border border-cyan-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="py-16">
          <h2 className="text-4xl font-bold text-center mb-12 relative pb-4">
            Education
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
          </h2>

          <div className="space-y-6">
            {[
              {
                institution: 'Andhra University',
                degree: 'Bachelor of Technology - BTech, Electronics and Communication Engineering',
                grade: '59.3%',
                period: 'Dec 2020 - Aug 2024'
              },
              {
                institution: 'Sankethika Polytechnic College',
                degree: 'Diploma, Electronics and Communication Engineering',
                grade: '71.3%',
                period: 'Jun 2016 - May 2019'
              },
              {
                institution: 'Sri Kashyap Vidyanikethan',
                degree: 'SSC (Secondary School Certificate)',
                grade: '8.3 GPA',
                period: 'Jun 2012 - Mar 2016'
              }
            ].map((edu, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-200 hover:border-blue-600 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-600 mb-2">{edu.institution}</h3>
                    <p className="text-lg text-slate-700">{edu.degree}</p>
                    <p className="text-cyan-600 font-medium mt-2">Grade: {edu.grade}</p>
                  </div>
                  <div className="text-blue-600 font-medium whitespace-nowrap">{edu.period}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="py-16">
          <h2 className="text-4xl font-bold text-center mb-12 relative pb-4">
            Skills & Technologies
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Amazon Web Services (AWS)', 'YAML', 'Jupyter', 'Amazon Athena',
              'PySpark', 'Spring Boot', 'Neo4j', 'Graph Databases',
              'Core Java', 'Python (Programming Language)', 'Documentation',
              'Software Installation', 'Technical Presentations'
            ].map(skill => (
              <div key={skill} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 text-center font-medium text-slate-700 border border-blue-200 hover:shadow-lg hover:scale-105 transition-all cursor-default">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="certifications" className="py-16">
          <h2 className="text-4xl font-bold text-center mb-12 relative pb-4">
            Certifications & Publications
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
          </h2>

          <div className="space-y-6">
            {[
              {
                title: 'Generative AI Mastermind',
                issuer: 'Outskills',
                date: 'Completed Oct 2025',
                credential: 'N/A',
                skills: ['Generative AI', 'Artificial Intelligence', 'Machine Learning']
              },
              {
                title: 'Neo4j: GraphDB Foundations with Cypher',
                issuer: 'Udemy',
                date: 'Issued Jun 2025',
                credential: 'UC-cde4abe9-7636-4aa1-a770-740bdd0105ce',
                skills: ['Neo4j', 'Graph Databases']
              },
              {
                title: 'Removal of Speckle Noise from SAR Images using Various Filters',
                issuer: 'IJERT - International Journal of Engineering Research and Technology',
                date: 'Published May 2023',
                credential: 'IJERTV12IS050043',
                skills: ['Software Installation', 'Technical Presentations', 'Documentation']
              },
              {
                title: 'Programming in Java',
                issuer: 'NIIT Limited',
                date: 'Issued Jun 2022',
                credential: 'R200001700134',
                skills: ['Core Java']
              },
              {
                title: 'Python Programming and Data Exploration',
                issuer: 'NIIT Limited',
                date: 'Issued Apr 2020',
                credential: 'R200001700163',
                skills: ['Python (Programming Language)']
              },
              {
                title: 'Cisco Certified Networking Academy Connecting Networks',
                issuer: 'Cisco Networking Academy',
                date: 'Issued Jul 2019',
                credential: '54639857',
                skills: ['Networking', 'CCNA']
              },
              {
                title: 'Cisco Certified Networking Academy Routing and Switching Essentials',
                issuer: 'Cisco Networking Academy',
                date: 'Issued Jul 2019',
                credential: '54639857',
                skills: ['Routing', 'Switching', 'CCNA']
              },
              {
                title: 'Cisco Certified Networking Academy Scaling Networks',
                issuer: 'Cisco Networking Academy',
                date: 'Issued Jul 2019',
                credential: '54639857',
                skills: ['Network Scaling', 'CCNA']
              }
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-200 hover:border-blue-600">
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">{cert.title}</h3>
                <p className="text-lg text-slate-700 mb-1">{cert.issuer}</p>
                <p className="text-blue-600 font-medium mb-2">{cert.date}</p>
                <p className="text-slate-500 text-sm mb-4">Credential ID: {cert.credential}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map(skill => (
                    <span key={skill} className="px-4 py-2 bg-cyan-50 text-slate-700 rounded-full text-sm border border-cyan-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-16">
          <h2 className="text-4xl font-bold text-center mb-12 relative pb-4">
            Projects
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
          </h2>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-200 hover:border-blue-600">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Removing Speckle Noise from SAR Images using Various Filters</h3>
            <p className="text-lg text-slate-700 mb-1">Associated with Andhra University</p>
            <p className="text-blue-600 font-medium mb-4">Jan 2023 - Apr 2023</p>
            <p className="text-slate-600 leading-relaxed mb-4">
              As part of the Engineering team project, this was also published on IJERT journal publishing foundation. We used SNAP (Sentinel Application Platform) software to remove noise from SAR images and applied various filters like Boxcar filter, Lee Sigma filter, and Frost filter.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Documentation', 'Software Installation', 'Image Processing'].map(skill => (
                <span key={skill} className="px-4 py-2 bg-cyan-50 text-slate-700 rounded-full text-sm border border-cyan-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="languages" className="py-16">
          <h2 className="text-4xl font-bold text-center mb-12 relative pb-4">
            Languages
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { language: 'English', proficiency: 'Professional Working Proficiency' },
              { language: 'Telugu', proficiency: 'Native or Bilingual Proficiency' },
              { language: 'Hindi', proficiency: 'Elementary Proficiency' }
            ].map((lang, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-slate-200 hover:border-blue-600">
                <h4 className="text-xl font-semibold text-blue-600 mb-2">{lang.language}</h4>
                <p className="text-slate-600">{lang.proficiency}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-16">
          <h2 className="text-4xl font-bold text-center mb-12 relative pb-4">
            Get In Touch
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
          </h2>

          <div className="text-center">
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg">
              I'm always interested in hearing about new opportunities and collaborations. Feel free to reach out!
            </p>

            <div className="flex flex-wrap gap-8 justify-center mb-8">
              <div className="flex items-center gap-3 text-slate-600">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Visakhapatnam, Andhra Pradesh, India</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <Phone className="w-5 h-5 text-blue-600" />
                <a href="tel:+919121026940" className="hover:text-blue-600 transition-colors">
                  +91 9121026940
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-blue-600" />
                <a
                  href="https://www.linkedin.com/in/shiva-chaitanya-susarla-b36559239/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-slate-200 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-600">
          <p>&copy; 2025 Shiva Chaitanya Susarla. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with passion for data and analytics.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
