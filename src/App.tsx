import { Button } from '@/components/ui/button'
import linkedinIcon from './assets/linkedin-161-svgrepo-com.svg'
import githubIcon from './assets/github-svgrepo-com.svg'
import leetcodeIcon from './assets/leetcode-svgrepo-com.svg'
import emailIcon from './assets/email-svgrepo-com.svg'
import sunIcon from './assets/sun-svgrepo-com.svg'
import moonIcon from './assets/moon-svgrepo-com.svg'

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
            Passionate Full-Stack Developer | Competitive Coder | Tech and
            OpenSource Enthusiast
          </p>
          <div className='flex flex-wrap justify-left md:justify-start gap-4'>
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

      <main className='container mx-auto px-4 py-8'>
        {/* Career Overview Section */}
        <section className='mb-12'>
          <h2 className='text-3xl font-semibold mb-4'> Career Overview</h2>
          <p className='text-lg text-blue-800 dark:text-slate-200'>
            Senior Developer with over 7 years of experience in developing
            desktop and web applications using C# and the .NET Framework.
            Proficient in both ReactJS and native JavaScript for creating
            dynamic, interactive front-end experiences.
          </p>
        </section>

        {/* Tech Stack */}
        <section className='mb-12'>
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
        </section>

        {/* Experience */}
        <section className='mb-12'>
          <h2 className='text-3xl font-semibold mb-4'>Work Experience</h2>
          <div className='mb-2 text-xl'>
            <a
              className='font-bold text-blue-600 dark:text-blue-300'
              href='https://hexagon.com/'
            >
              Hexagon R&amp;D India
            </a>{' '}
            <br />
            <div className='text-sm'>Hyderabad, India</div>
          </div>
          <div className='mb-2'>
            <span className='italic'>Software Consultant. </span>{' '}
            <span className='text-sm text-blue-700 dark:text-gray-300'>
              Jun 2017 – Present, Full-time
            </span>
          </div>
          <ul className='list-disc pl-6 space-y-2 text-lg'>
            <li>
              Developed a WPF desktop application in .NET to synchronize and
              control multiple camera feeds, enabling seamless playback.
            </li>
            <li>
              Supported the migration of a product codebase from .NET Framework
              4.5 to 4.8, enhancing maximum compatibility and performance.
            </li>
            <li>
              Designed and implemented a .NET-based backend API with REST-based
              subscription, supporting timely broadcast of responses.
            </li>
            <li>
              Migrated a full ASP.NET application to support RTL (Right-To-Left)
              interfaces and languages, involving dynamic, responsive CSS
              customization.
            </li>
            <li>
              Built a RAG-enabled web application utilizing Meta’s LLaMA 3 to
              analyze local documents and provide interactive chat-based
              querying.
            </li>
            <li>
              Created custom interactive map widgets using the Leaflet.js
              library, enabling features such as pin placement, map graphics and
              route drawing.
            </li>
          </ul>
        </section>
        {/* Awards & Achievements */}
        <section className='mb-12'>
          <h2 className='text-2xl font-semibold mb-4'>Awards & Achievements</h2>
          <ul className='list-disc pl-6 space-y-2 text-lg'>
            <li>
              <b>Secured a Rank of 1288 in GATE 2017</b> – Top 1% out of 1 Lakh+
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
        </section>
        <section className='mb-12'>
          <h2 className='text-2xl font-semibold mb-4'>Other Projects</h2>
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
