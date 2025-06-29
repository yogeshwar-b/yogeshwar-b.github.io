import { Button } from '@/components/ui/button'
import linkedinIcon from './assets/linkedin-161-svgrepo-com.svg'
import githubIcon from './assets/github-svgrepo-com.svg'
import leetcodeIcon from './assets/leetcode-svgrepo-com.svg'
import emailIcon from './assets/email-svgrepo-com.svg'
import sunIcon from './assets/sun-svgrepo-com.svg'
import moonIcon from './assets/moon-svgrepo-com.svg'
import hexagonlogo from './assets/HexagonLogo.svg'

function toggleDarkMode() {
  console.log('Toggling dark mode')
  if (typeof window !== 'undefined') {
    document.documentElement.classList.toggle('dark')
  }
}

function App() {
  // No useState needed!
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 via-blue-100 to-blue-200 text-blue-900 dark:from-slate-900 dark:via-slate-800 dark:to-teal-900 dark:text-white'>
      <div className='container mx-auto py-1 flex justify-end fixed'>
        <button
          onClick={toggleDarkMode}
          className='relative pb-1 w-14 h-8 flex items-center rounded-full transition-colors duration-300 focus:outline-none bg-blue-100 dark:bg-teal-900'
          aria-label='Toggle dark mode'
        >
          <span className='px-1'>
            <img src={sunIcon} alt='Light Mode' className='w-5 h-5 inline' />
          </span>
          <span>
            <img src={moonIcon} alt='Dark Mode' className='w-5 h-5 inline' />
          </span>
          <span className='absolute top-1 left-1 w-6 h-6 rounded-full bg-white dark:bg-slate-700 shadow-md transform transition-transform duration-300 dark:translate-x-6' />
        </button>
      </div>
      <header className='container mx-auto px-4 py-12 flex flex-col md:flex-row items-center md:items-start gap-8'>
        <img
          src='https://avatars.githubusercontent.com/u/40350972?v=4'
          alt='Profile'
          className='rounded-full border-4 border-blue-300 dark:border-blue-900 shadow-lg w-40 h-40 mb-6 md:mb-0'
        />
        <div className='flex-1 flex flex-col items-center md:items-start'>
          <h1 className='text-5xl md:text-6xl font-bold mb-2 leading-tight'>
            Yogeshwar.B
          </h1>
          <span className='text-base text-blue-700 dark:text-blue-300 mb-2'>
            Hyderabad, India
          </span>
          <p className='text-lg mb-4 text-center md:text-left'>
            Full-Stack Developer | Competitive Coder | Tech and
            OpenSource Enthusiast
          </p>
          <div className='flex flex-wrap justify-center md:justify-start gap-4'>
            <Button asChild className='mt-2 px-6 py-2 text-lg cursor-pointer'>
              <a
                href='mailto:byogeshwarreddy@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src={emailIcon}
                  alt='Email'
                  className='w-5 h-5 inline dark:invert-0 invert mr-2'
                />
                Mail
              </a>
            </Button>
            <Button asChild className='mt-2 px-6 py-2 text-lg cursor-pointer'>
              <a
                href='https://www.linkedin.com/in/byogeshwar/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src={linkedinIcon}
                  alt='LinkedIn'
                  className='w-5 h-5 inline dark:invert-0 invert mr-2'
                />
                LinkedIn
              </a>
            </Button>
            <Button asChild className='mt-2 px-6 py-2 text-lg cursor-pointer'>
              <a
                href='https://github.com/yogeshwar-b'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src={githubIcon}
                  alt='GitHub'
                  className='w-5 h-5 inline dark:invert-0 invert mr-2'
                />
                GitHub
              </a>
            </Button>
            <Button asChild className='mt-2 px-6 py-2 text-lg cursor-pointer'>
              <a
                href='https://leetcode.com/u/yogeshwarb/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src={leetcodeIcon}
                  alt='Leetcode'
                  className='w-5 h-5 inline dark:invert-0 invert mr-2'
                />
                Leetcode
              </a>
            </Button>{' '}
          </div>
        </div>
      </header>

<main className='container mx-auto px-4 md:px-16 lg:px-32 py-8'>        {/* Career Overview Section */}
        <section className='mb-3'>
          <h2 className='text-3xl font-semibold mb-4'> Career Overview</h2>
          <p className='text-lg text-blue-800 dark:text-slate-200'>
            Senior Software Developer with over 7 years of experience in developing
            desktop and web applications using C# and the .NET Framework.
            Proficient in both ReactJS and native JavaScript for creating
            dynamic, interactive front-end experiences.
          </p>
            <hr className='my-4 border-blue-200 dark:border-slate-700' />

        </section>

        {/* Tech Stack */}
        <section className='mb-3'>
          <h2 className='text-2xl font-semibold mb-4'>Tech Stack</h2>
          <div className='flex flex-wrap justify-center gap-2'>
            <img
              src='https://skillicons.dev/icons?i=dotnet'
              alt='dotnet'
              title='dotnet'
              className='max-w-full h-12'
            />
            <img
              src='https://skillicons.dev/icons?i=js'
              alt='JavaScript'
              title='JavaScript'
              className='max-w-full h-12'
            />
            <img
              src='https://skillicons.dev/icons?i=react'
              alt='React'
              title='React'
              className='max-w-full h-12'
            />
            <img
              src='https://skillicons.dev/icons?i=ts'
              alt='TypeScript'
              title='TypeScript'
              className='max-w-full h-12'
            />
            <img
              src='https://skillicons.dev/icons?i=express'
              alt='ExpressJS'
              title='ExpressJS'
              className='max-w-full h-12'
            />
            <img
              src='https://skillicons.dev/icons?i=html'
              alt='HTML'
              title='HTML'
              className='max-w-full h-12'
            />
            <img
              src='https://skillicons.dev/icons?i=css'
              alt='CSS'
              title='CSS'
              className='max-w-full h-12'
            />
            <img
              src='https://skillicons.dev/icons?i=flutter'
              alt='Flutter'
              title='Flutter'
              className='max-w-full h-12'
            />
            <img
              src='https://skillicons.dev/icons?i=dart'
              alt='Dart'
              title='Dart'
              className='max-w-full h-12'
            />
            <img
              src='https://skillicons.dev/icons?i=python'
              alt='Python'
              title='Python'
              className='max-w-full h-12'
            />
            <img
              src='https://skillicons.dev/icons?i=mongodb'
              alt='MongoDB'
              title='MongoDB'
              className='max-w-full h-12'
            />
            <img
              src='https://skillicons.dev/icons?i=git'
              alt='Git'
              title='Git'
              className='max-w-full h-12'
            />
            <img
              src='https://skillicons.dev/icons?i=linux'
              alt='Linux'
              title='Linux'
              className='max-w-full h-12'
            />
            <img
              src='https://skillicons.dev/icons?i=azure'
              alt='Azure'
              title='Azure'
              className='max-w-full h-12'
            />
          </div>
            <hr className='my-4 border-blue-200 dark:border-slate-700' />

        </section>

        {/* Experience */}
        <section className='mb-3'>
           <h2 className='text-3xl font-semibold mb-4'>Work Experience</h2>
          <div className='mb-2 text-xl'>
            <a
              className='text-3xl font-bold text-blue-600 dark:text-blue-300'
              href='https://hexagon.com/'
            >
              Hexagon R&amp;D India
              {' '}
            <img
                    src={hexagonlogo}
                    alt='Hexagon Logo'
                    className='w-35 inline dark:invert invert-0 mr-2'
                  />
            </a>
            
            <div className='p-0 m-0 text-sm'>Hyderabad, India</div>
          
          </div>
          {/* <div className='mb-2'>
            <span className='italic'>Software Consultant. </span>{' '}
            <span className='text-sm text-blue-700 dark:text-gray-300'>
              Jun 2017 – Present, Full-time
            </span>
          </div> */}
          <div className='pl-6'>
            <div className='mb-2'>
              <div className='text-xl font-bold text-blue-900 dark:text-blue-200'>Software Consultant</div>
              <div className='text-sm text-blue-700 dark:text-gray-300 mb-1 italic'>2023 – current</div>
              <ul className='list-disc pl-6 space-y-2 text-lg'>
                <li>
                  Leading the migration of features from a legacy desktop application to a modern web-based product. This includes understanding the current functionality, designing for the web platform, and handling schema transitions.
                </li>
                <li>
                  Worked extensively on map-related features and dynamic data rendering.
                </li>
                <li>
                  <span className='font-semibold'>Key contributions:</span>
                  <ul className='list-disc pl-6 space-y-1'>
                    <li>
                      Developed a unit search algorithm that identifies the best match within a defined radius based on priority parameters.
                    </li>
                    <li>
                      Built interactive map widgets and custom icons (units, events, user mappings) using Leaflet.js.
                    </li>
                    <li>
                      Implemented automated workflows such as unit auto return after meal breaks and periodic auto line-up.
                    </li>
                    <li>
                      Created a notification service supporting multiple workflows with group-specific alert customizations.
                    </li>
                  </ul>
                </li>
              </ul>
              <div className='text-lg mt-2 text-blue-800 dark:text-blue-300'>
                Technologies: ReactJS, .NET (C#), ASP.NET, JavaScript, CSS, Leaflet.js
              </div>
            </div>
            {/* <hr className='my-4 border-blue-200 dark:border-slate-700' /> */}
            <div className='mb-2'>
              <div className='text-xl font-bold text-blue-900 dark:text-blue-200'>Senior Software Engineer</div>
              <div className='text-sm text-blue-700 dark:text-gray-300 mb-1'>2021 – 2023</div>
              <ul className='list-disc pl-6 space-y-2 text-lg'>
                <li>
                  Transformed an ASP.NET and WPF-based application to support Right-to-Left (RTL) layout for Arabic language. This included updating both web and desktop UI components, along with automation scripts to refactor styling patterns.
                </li>
                <li>
                  Developed a backend REST API in .NET with subscription and scheduled broadcast capabilities.
                </li>
                <li>
                  Contributed to the development of a no-code configuration tool, enabling users to build logic workflows using drag-and-drop components.
                </li>
              </ul>
              <div className='text-lg mt-2 text-blue-800 dark:text-blue-300'>
                Technologies: .NET (C#), WPF, XAML, ASP.NET, JavaScript, CSS, Python
              </div>
            </div>
            {/* <hr className='my-4 border-blue-200 dark:border-slate-700' /> */}
            <div className='mb-6'>
              <div className='text-xl font-bold text-blue-900 dark:text-blue-200'>Software Engineer</div>
              <div className='text-sm text-blue-700 dark:text-gray-300 mb-1'>2017 – 2020</div>
              <ul className='list-disc pl-6 space-y-2 text-lg'>
                <li>
                  Created a synchronized WinForms application to manage multiple cameras using Bosch Camera API, later followed by a web admin dashboard built with Bootstrap.
                </li>
                <li>
                  Upgraded several product modules from .NET Framework 4.5 to 4.8, which included significant rework of unit tests.
                </li>
                <li>
                  Worked on performance tuning for existing applications, including Legacy MFC Windows Applications.
                </li>
                <li>
                  Worked on data migration efforts from Oracle to MSSQL.
                </li>
                <li>
                  Developed a proof-of-concept to control smart streetlights using Cisco Kinetic.
                </li>
    
              </ul>
              <div className='text-lg mt-2 text-blue-800 dark:text-blue-300'>
                Technologies: .NET Framework (C#), WinForms, HTML, JavaScript, Bootstrap, MFC, Oracle, MSSQL
              </div>
            </div>
            <hr className='my-4 border-blue-200 dark:border-slate-700' />
            
          </div>
        </section>
         {/* Awards & Achievements */}
        <section className='mb-3'>
          <h2 className='text-2xl font-semibold mb-4'>Education</h2>
              <b>B.Tech in Computer Science and Engineering</b> with Aggregate of <span className='font-extrabold
 italic'>84.04%</span>
 <span className='hidden'>from Sree Nidhi Institute of Science and Technology, Hyderabad, India.</span> 
            <div className='text-xs italic'>2013-2017</div>
            <hr className='my-4 border-blue-200 dark:border-slate-700' />

        </section>
        {/* Awards & Achievements */}
        <section className='mb-3'>
          <h2 className='text-2xl font-semibold mb-4'>Awards & Achievements</h2>
          <ul className='list-disc pl-6 space-y-2 text-lg'>
            <li>
              <b>Secured a Rank of 1288 in GATE 2017</b> – Top 1% of around 1 Lakh
              applicants.
            </li>
            <li>
              <b>Achieved Knight Level in LeetCode Weekly Contest</b> with
              Maximum Rating of 1889 – Top 5% sitewide.
            </li>
            <li>
              <b>Received Multiple Star Awards</b> in recognition of outstanding
              work contributions and performance.
            </li>
          </ul>
            <hr className='my-4 border-blue-200 dark:border-slate-700' />

        </section>
        <section className='mb-3'>
          <h2 className='text-2xl font-semibold mb-4'>Projects</h2>
          <div className='grid md:grid-cols-3 gap-6'>
            {projects.map((project) => (
              <div
                key={project.name}
                className='rounded-lg shadow-lg p-6 flex flex-col bg-white text-blue-900 dark:bg-slate-800 dark:text-white'
              >
                <h3 className='text-xl font-bold mb-2'>{project.name}</h3>
                <p className='flex-1 text-blue-800 dark:text-slate-200'>
                  {project.description}
                </p>
                <Button
                  asChild
                  variant='outline'
                  className='mt-4 flex-center self-start cursor-pointer'
                >
                  <a
                    href={project.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      src={githubIcon}
                      alt='GitHub'
                      className='w-5 h-5 inline dark:invert invert-0 '
                    />
                  </a>
                </Button>
              </div>
            ))}
          </div>
            <hr className='my-4 border-blue-200 dark:border-slate-700' />

        </section>

        {/* Projects & Hackathons */}
        <section className='mb-3'>
          <h2 className='text-2xl font-semibold mb-4'>Other Projects &amp; Hackathons</h2>
          <ul className='list-disc pl-6 space-y-2 text-lg'>
            <li>
              <b>iCARD-m (Flutter)</b> – A mobile app that replaces traditional ID cards by generating a dynamic QR code (TOTP-based) that refreshes every 30 seconds for added security.
            </li>
            <li>
              <b>SAP Reports Customizer</b> – A desktop tool that lets users adjust SAP report formats, including font, size, and color customization.
            </li>
            <li>
              <b>LocalProduct GPT</b> – A RAG-based chatbot powered by Meta’s LLaMA 3, designed to understand and respond using context from local documents.
            </li>
          </ul>
            <hr className='my-4 border-blue-200 dark:border-slate-700' />

        </section>
        
      </main>
    </div>
  )
}

const projects = [
  {
    name: 'LayerBoard',
    url: 'https://github.com/yogeshwar-b/layerboard',
    description:
      'A ReactJS-based sketchpad using vector graphics with layer support.'
  },
  {
    name: 'Differento',
    url: 'https://github.com/yogeshwar-b/differento',
    description:
      'A Ground up implementation of Git type text change comparator.'
  },
  {
    name: 'Quizy',
    url: 'https://github.com/yogeshwar-b/quizy-be',
    description:
      'A WebSocket based Multiplayer Quiz game Backend API using ExpressJS and MongoDB, with support for leaderboards and game server rooms.'
  }
]

export default App
