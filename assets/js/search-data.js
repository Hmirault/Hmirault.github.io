// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about-me",
    title: "About me",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "My academic publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv-resume",
          title: "CV-Resume",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-bookshelf",
          title: "Bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "books-distributed-computing-fundamentals-simulations-and-advanced-topics",
          title: 'Distributed Computing: Fundamentals, Simulations and Advanced Topics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/DistriCompBook_1/";
            },},{id: "books-distributed-computing-through-combinatorial-topology",
          title: 'Distributed Computing Through Combinatorial Topology',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/DistriCompBook_2/";
            },},{id: "books-distributed-algorithms",
          title: 'Distributed Algorithms',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/DistriCompBook_3/";
            },},{id: "books-distributed-computing-a-locality-sensitive-approach",
          title: 'Distributed Computing: A Locality-Sensitive Approach',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/DistriCompBook_4/";
            },},{id: "projects-distributed-simulator-test-page",
          title: 'Distributed Simulator (Test Page)',
          description: "I am coding a small simulator for playing with distributed algorithms and a potential adversary. The goal is to help produce some reasoning on the behaviors of distributed algorithms. Yet this is focused on the problem of Consensus.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/333/0834.html", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%6D%69%72%61%75%6C%74@%61%75%67%75%73%74%61.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Hmirault", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/hugo-mirault", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0008-5885-8372", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=WZtCsUsAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
