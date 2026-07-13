import React, { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const copy = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      services: 'Services',
      contact: 'Contact',
      hire: 'Hire Me',
      theme: 'Theme',
      language: 'Language'
    },
    hero: {
      badge: 'Available for freelance, internships and collaboration',
      title: 'Adam Kayange',
      role: 'Full-Stack Developer & Mobile Engineer',
      intro:
        'Software Engineering student at UDOM CIVE building polished mobile apps, reliable web platforms and practical backend systems.',
      primary: 'View My Work',
      secondary: 'Get In Touch',
      portraitAlt: 'Adam Kayange portrait',
      stats: [
        ['3+', 'Years Coding'],
        ['10+', 'Projects'],
        ['8+', 'Technologies'],
        ['2', 'Core Specialties']
      ]
    },
    about: {
      eyebrow: 'About Me',
      title: 'I build software that feels useful, fast and human.',
      body: [
        'Hi, I am Adam Kayange, a Software Engineering student at the University of Dodoma, College of Informatics and Virtual Education.',
        'I work across React, Flutter, Laravel, Django and Firebase, connecting clean interfaces with solid backend logic.',
        'My focus is practical software: apps that people can understand quickly, trust daily and scale when the idea grows.'
      ],
      facts: [
        ['Location', 'Tanzania'],
        ['University', 'UDOM CIVE'],
        ['Role', 'Full-Stack Developer'],
        ['Specialty', 'Web + Mobile']
      ],
      education: 'BSc. Software Engineering',
      educationBody:
        'Studying software design, algorithms, databases, mobile development and full-stack engineering.',
      languageTitle: 'Languages',
      levels: [
        ['Swahili', 'Native'],
        ['English', 'Professional']
      ]
    },
    skills: {
      eyebrow: 'Technical Skills',
      title: 'A practical stack for real products.',
      intro: 'Frontend polish, backend structure, mobile delivery and cloud-powered features.',
      categories: [
        ['Frontend', ['React', 'HTML5', 'CSS3', 'JavaScript']],
        ['Backend', ['Laravel', 'Django', 'Java', 'REST APIs']],
        ['Mobile', ['Flutter', 'Dart', 'Android']],
        ['Data & Cloud', ['Firebase', 'MySQL', 'PostgreSQL']]
      ],
      proficiencyTitle: 'Proficiency Overview'
    },
    projects: {
      eyebrow: 'Portfolio',
      title: 'Real Projects I Have Built',
      intro: 'Selected public work from my GitHub and Play Store portfolio.',
      items: [
        [
          'Maize Expert Backend',
          'Backend service for an agriculture assistant platform, focused on APIs and data flow for maize expertise.',
          ['Backend', 'API'],
          [['Repository', 'https://github.com/iamAdamKayange/Maize-Expert-Backend']]
        ],
        [
          'Serik App',
          'Mobile and platform project for property discovery and real estate workflows.',
          ['Flutter', 'Mobile'],
          [['Repository', 'https://github.com/iamAdamKayange/Serik-App']]
        ],
        [
          'Android Daycare App Java',
          'Native Android daycare management app built with Java for child-care operations.',
          ['Java', 'Android'],
          [['Repository', 'https://github.com/iamAdamKayange/Android-Daycare-App-Java']]
        ],
        [
          'Blessings Card',
          'A creative card project for sharing blessings and clean digital greetings.',
          ['Web', 'Frontend'],
          [['Repository', 'https://github.com/iamAdamKayange/Blessings-Card']]
        ],
        [
          'Novena ya Mtakatifu Rita wa Kashia',
          'Published mobile prayer app available on Google Play Store.',
          ['Mobile App', 'Play Store'],
          [['Play Store', 'https://play.google.com/store/apps/details?id=com.rav850418082.saint_rita&pcampaignid=web_share']]
        ],
        [
          'More GitHub Repositories',
          'Browse more of my public repositories and development experiments on GitHub.',
          ['GitHub', 'Portfolio'],
          [['View Repos', 'https://github.com/iamAdamKayange?tab=repositories']]
        ]
      ]
    },
    experience: {
      eyebrow: 'Journey',
      title: 'Experience & Growth',
      intro: 'Academic and professional steps focused on building useful software.',
      items: [
        ['Freelance Full-Stack Developer', 'Self-Employed - Remote', '2023 - Present', 'Designing custom web and mobile apps for clients across Tanzania.', ['Flutter', 'React', 'Laravel', 'Firebase']],
        ['Mobile App Developer Intern', 'Tech Startup - Tanzania', '2023', 'Worked on Flutter interfaces, Firebase features and REST API integration.', ['Flutter', 'Firebase', 'REST']],
        ['BSc. Software Engineering', 'UDOM CIVE', '2022 - Present', 'Learning systems design, algorithms, databases and full-stack development.', ['Algorithms', 'OOP', 'DB Design']],
        ['Started Coding Journey', 'Self-Taught - Online', '2021', 'Started with HTML, CSS and JavaScript before moving into mobile and backend work.', ['HTML', 'CSS', 'JS', 'Java']]
      ]
    },
    services: {
      eyebrow: 'What I Offer',
      title: 'Services',
      intro: 'End-to-end development for ideas that need to become working products.',
      items: [
        ['Web Development', 'Full-stack web apps using React, Laravel and Django.'],
        ['Mobile App Development', 'Cross-platform Flutter apps and Android apps with smooth, responsive interfaces.'],
        ['API Development', 'Secure REST APIs that connect mobile and web frontends to reliable backend systems.'],
        ['Firebase Integration', 'Authentication, realtime data, notifications, storage and cloud-backed app features.'],
        ['UI/UX & Frontend', 'Clean responsive interfaces from Figma, sketches or raw ideas.'],
        ['Database Design', 'Relational and NoSQL data models built for clarity and growth.']
      ]
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's Build Together",
      intro: 'Have a project, internship opportunity or collaboration idea? Send a message.',
      getInTouch: 'Get in touch',
      formTitle: 'Send a Message',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      service: 'Service',
      message: 'Message',
      placeholder: 'Tell me about your project or idea...',
      submit: 'Send Message',
      sending: 'Sending...',
      sent: 'Message Sent',
      successToast: 'Message sent successfully. I will receive it in my inbox.',
      errorToast: 'Message failed to send. Opening email fallback now.',
      fallback: 'Open email fallback',
      services: ['Web Development', 'Mobile App', 'API / Backend', 'UI/UX Design', 'Firebase Integration', 'Other']
    },
    footer: {
      rights: 'Adam Kayange. Crafted with care in Tanzania.',
      top: 'Back to Top'
    }
  },
  sw: {
    nav: {
      about: 'Kuhusu',
      skills: 'Ujuzi',
      projects: 'Miradi',
      experience: 'Uzoefu',
      services: 'Huduma',
      contact: 'Mawasiliano',
      hire: 'Ni-ajiri',
      theme: 'Muonekano',
      language: 'Lugha'
    },
    hero: {
      badge: 'Niko tayari kwa freelance, internship na ushirikiano',
      title: 'Adam Kayange',
      role: 'Full-Stack Developer & Mobile Engineer',
      intro:
        'Mwanafunzi wa Software Engineering UDOM CIVE ninayejenga mobile apps, web platforms na backend systems zinazotumika vizuri.',
      primary: 'Tazama Kazi',
      secondary: 'Wasiliana Nami',
      portraitAlt: 'Picha ya Adam Kayange',
      stats: [
        ['3+', 'Miaka ya Code'],
        ['10+', 'Miradi'],
        ['8+', 'Teknolojia'],
        ['2', 'Maeneo Makuu']
      ]
    },
    about: {
      eyebrow: 'Kuhusu Mimi',
      title: 'Ninatengeneza software yenye matumizi, kasi na urahisi.',
      body: [
        'Habari, mimi ni Adam Kayange, mwanafunzi wa Software Engineering katika University of Dodoma, College of Informatics and Virtual Education.',
        'Nafanya kazi na React, Flutter, Laravel, Django na Firebase, nikichanganya UI safi na backend imara.',
        'Lengo langu ni software ya vitendo: app ambazo watu wanaelewa haraka, wanaamini kila siku na zinaweza kukua.'
      ],
      facts: [
        ['Mahali', 'Tanzania'],
        ['Chuo', 'UDOM CIVE'],
        ['Kazi', 'Full-Stack Developer'],
        ['Utaalamu', 'Web + Mobile']
      ],
      education: 'BSc. Software Engineering',
      educationBody:
        'Nasoma software design, algorithms, databases, mobile development na full-stack engineering.',
      languageTitle: 'Lugha',
      levels: [
        ['Kiswahili', 'Lugha Mama'],
        ['Kiingereza', 'Kitaalamu']
      ]
    },
    skills: {
      eyebrow: 'Ujuzi wa Kiufundi',
      title: 'Stack ya vitendo kwa bidhaa halisi.',
      intro: 'Frontend nzuri, backend imara, mobile delivery na cloud features.',
      categories: [
        ['Frontend', ['React', 'HTML5', 'CSS3', 'JavaScript']],
        ['Backend', ['Laravel', 'Django', 'Java', 'REST APIs']],
        ['Mobile', ['Flutter', 'Dart', 'Android']],
        ['Data & Cloud', ['Firebase', 'MySQL', 'PostgreSQL']]
      ],
      proficiencyTitle: 'Kiwango cha Uzoefu'
    },
    projects: {
      eyebrow: 'Portfolio',
      title: 'Miradi Halisi Niliyofanya',
      intro: 'Baadhi ya kazi zangu kutoka GitHub na Play Store.',
      items: [
        [
          'Maize Expert Backend',
          'Backend ya mfumo wa kilimo unaotoa APIs na data flow kwa huduma za ushauri wa mahindi.',
          ['Backend', 'API'],
          [['Repository', 'https://github.com/iamAdamKayange/Maize-Expert-Backend']]
        ],
        [
          'Serik App',
          'Project ya mobile na platform kwa utafutaji wa nyumba na real estate workflows.',
          ['Flutter', 'Mobile'],
          [['Repository', 'https://github.com/iamAdamKayange/Serik-App']]
        ],
        [
          'Android Daycare App Java',
          'Native Android app ya daycare management iliyojengwa kwa Java.',
          ['Java', 'Android'],
          [['Repository', 'https://github.com/iamAdamKayange/Android-Daycare-App-Java']]
        ],
        [
          'Blessings Card',
          'Project ya kutengeneza na kushare blessings cards/digital greetings.',
          ['Web', 'Frontend'],
          [['Repository', 'https://github.com/iamAdamKayange/Blessings-Card']]
        ],
        [
          'Novena ya Mtakatifu Rita wa Kashia',
          'Mobile prayer app ambayo ipo tayari Google Play Store.',
          ['Mobile App', 'Play Store'],
          [['Play Store', 'https://play.google.com/store/apps/details?id=com.rav850418082.saint_rita&pcampaignid=web_share']]
        ],
        [
          'Miradi Zaidi GitHub',
          'Angalia repositories nyingine nilizoweka public kwenye GitHub.',
          ['GitHub', 'Portfolio'],
          [['View Repos', 'https://github.com/iamAdamKayange?tab=repositories']]
        ]
      ]
    },
    experience: {
      eyebrow: 'Safari',
      title: 'Uzoefu na Ukuaji',
      intro: 'Hatua za masomo na kazi zilizolenga kujenga software yenye matumizi.',
      items: [
        ['Freelance Full-Stack Developer', 'Self-Employed - Remote', '2023 - Sasa', 'Ninatengeneza web na mobile apps kwa wateja Tanzania.', ['Flutter', 'React', 'Laravel', 'Firebase']],
        ['Mobile App Developer Intern', 'Tech Startup - Tanzania', '2023', 'Nilifanya Flutter interfaces, Firebase features na REST API integration.', ['Flutter', 'Firebase', 'REST']],
        ['BSc. Software Engineering', 'UDOM CIVE', '2022 - Sasa', 'Najifunza systems design, algorithms, databases na full-stack development.', ['Algorithms', 'OOP', 'DB Design']],
        ['Mwanzo wa Coding', 'Self-Taught - Online', '2021', 'Nilianza na HTML, CSS na JavaScript kabla ya mobile na backend.', ['HTML', 'CSS', 'JS', 'Java']]
      ]
    },
    services: {
      eyebrow: 'Ninachotoa',
      title: 'Huduma',
      intro: 'Development ya mwanzo hadi mwisho kwa mawazo yanayohitaji kuwa bidhaa halisi.',
      items: [
        ['Web Development', 'Web apps kamili kwa React, Laravel na Django.'],
        ['Mobile App Development', 'Flutter apps na Android apps zenye interface laini na responsive.'],
        ['API Development', 'REST APIs salama zinazounganisha frontend na backend imara.'],
        ['Firebase Integration', 'Authentication, realtime data, notifications, storage na cloud features.'],
        ['UI/UX & Frontend', 'Interfaces safi kutoka Figma, michoro au wazo la awali.'],
        ['Database Design', 'Data models za relational na NoSQL kwa uwazi na ukuaji.']
      ]
    },
    contact: {
      eyebrow: 'Mawasiliano',
      title: 'Tujenge Kitu Pamoja',
      intro: 'Una project, nafasi ya internship au wazo la kushirikiana? Tuma ujumbe.',
      getInTouch: 'Wasiliana nami',
      formTitle: 'Tuma Ujumbe',
      firstName: 'Jina la Kwanza',
      lastName: 'Jina la Mwisho',
      email: 'Barua Pepe',
      service: 'Huduma',
      message: 'Ujumbe',
      placeholder: 'Niambie kuhusu project au wazo lako...',
      submit: 'Tuma Ujumbe',
      sending: 'Inatuma...',
      sent: 'Ujumbe Umetumwa',
      successToast: 'Ujumbe umetumwa kikamilifu. Nitaupata kwenye inbox yangu.',
      errorToast: 'Ujumbe umeshindwa kutumwa. Nafungua email fallback sasa.',
      fallback: 'Fungua email fallback',
      services: ['Web Development', 'Mobile App', 'API / Backend', 'UI/UX Design', 'Firebase Integration', 'Nyingine']
    },
    footer: {
      rights: 'Adam Kayange. Imetengenezwa Tanzania kwa umakini.',
      top: 'Rudi Juu'
    }
  }
};

function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'en');
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const t = useMemo(() => copy[language], [language]);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="app-shell min-h-screen font-sans overflow-x-hidden">
      <Navbar
        t={t.nav}
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
      />
      <Hero t={t.hero} />
      <About t={t.about} />
      <Skills t={t.skills} />
      <Projects t={t.projects} />
      <Experience t={t.experience} />
      <Services t={t.services} />
      <Contact t={t.contact} />
      <Footer t={t.footer} />
    </div>
  );
}

export default App;
