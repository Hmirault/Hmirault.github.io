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
        },{id: "nav-milestone",
          title: "Milestone",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/milestone/index.html";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-bookshelf",
          title: "Bookshelf",
          description: "Books that I am reading, have read, or will read",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "post-student-organization-in-au",
        
          title: "Student organization in AU",
        
        description: "How to search for student org in AU and the one to know",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Orgtanization-AU/";
          
        },
      },{id: "post-venue-funding-with-augusta-university",
        
          title: "Venue funding with Augusta University",
        
        description: "How to fund your participation to a venue with the support of GSGA",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/GSGA-Funding/";
          
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
            },},{id: "projects-distributed-simulator",
          title: 'Distributed Simulator',
          description: "A small simulator to play with distributed algorithms and adversarial behaviors.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Distributed_simulator/";
            },},{id: "projects-my-personalized-scripts",
          title: 'My personalized scripts',
          description: "Some small scripts a like to use",
          section: "Projects",handler: () => {
              window.location.href = "/projects/My_scripts/";
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
