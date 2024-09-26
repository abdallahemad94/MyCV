const cvData = {
  workExperience: [
    {
      title: "Full Stack .NET Developer",
      company: "AFCM (Side Project)",
      duration: "Project-based",
      location: "Cairo, Egypt",
      responsibilities: [
        "Developed a custom application for the Armed Forces College of Medicine using ASP.NET Core, .NET 8, Angular, ABP Framework, and Entity Framework Core with MS SQL Server."
      ]
    },
    {
      title: "Full Stack .NET Developer",
      company: "Edrak Software",
      duration: "Mar 2020 - Present",
      location: "Cairo, Egypt",
      responsibilities: [
        "Contributed to the development of Edara3, a modern ERP system, implementing Modular Monolith architecture with ASP.NET Core, .NET 8, NHibernate, Dapper, MySQL, RabbitMQ, CQRS, and DDD principles.",
        "Contributed to the development and maintenance of Edara2, a legacy ERP system using ASP.NET Web Forms, ADO.NET, .NET Framework 4.8, MS SQL Server, jQuery, and AngularJS.",
        "Implemented Angular-based front-end with PWA capabilities and Angular Material for enhanced user experience.",
        "Optimized SQL Server and MySQL databases, significantly reducing query execution time.",
        "Developed RESTful APIs and reusable Angular components, increasing code maintainability.",
        "Implemented comprehensive unit tests using xUnit and Fluent Assertions, reducing post-release bugs.",
        "Collaborated with senior developers and participated in code reviews to ensure code quality."
      ]
    },
    {
      title: "Trainee",
      company: "Edrak Software",
      duration: "Oct 2018 - Dec 2018",
      location: "Cairo, Egypt",
      responsibilities: [
        "Assisted in developing and testing web applications using ASP.NET Web Forms.",
        "Participated in code reviews and agile development processes."
      ]
    }
  ],
  professionalDevelopment: [
    {
      course: "Full-Stack Developer Nanodegree Program",
      provider: "Udacity",
      certificate: "https://www.udacity.com/certificate/e/34007bd8-ede8-11ea-bb37-37d4a5c489d6"
    },
    {
      course: "Advanced Web Development Nanodegree Program",
      provider: "Udacity",
      certificate: "https://www.udacity.com/certificate/e/5064415a-bc66-11ea-b0ea-b38bf471dcc1"
    },
    {
      course: "Introduction to Computer Science and Programming Using Python",
      provider: "EdX",
      details: "Course 6.00.1x"
    },
    {
      course: "Introduction to Computational Thinking and Data Science",
      provider: "EdX",
      details: "Course 6.00.2x"
    },
    {
      course: "Angular - The Complete Guide",
      provider: "Udemy"
    },
    {
      course: "Scrum Master Professional Certification",
      provider: "Udemy"
    },
    {
      course: "Domain-Driven Design, ASP.NET Core, and Angular Learning Paths",
      provider: "Pluralsight"
    }
  ],
  skills: [
    {
      category: "Backend Development",
      items: ["C#", "ASP.NET Core", "Node.js", "Express.js", "Python", "Fluent Result", "SignalR"]
    },
    {
      category: "Frontend Development",
      items: [
        "JavaScript",
        "TypeScript",
        "Angular",
        "AngularJS",
        "HTML5",
        "CSS3",
        "Sass/SCSS",
        "Progressive Web Apps (PWA)",
        "RxJS",
        "NgRx"
      ]
    },
    {
      category: "UI Frameworks",
      items: ["Bootstrap", "Tailwind CSS", "Angular Material", "PrimeNG"]
    },
    {
      category: "Databases & Caching",
      items: ["MS SQL Server", "MySQL", "Entity Framework Core", "NHibernate", "Dapper", "Fluent Migrator", "Redis"]
    },
    {
      category: "Architecture & Design Patterns",
      items: ["Domain-Driven Design (DDD)", "CQRS", "Modular Monolith", "SOLID Principles", "ABP Framework"]
    },
    {
      category: "DevOps & Tools",
      items: [
        "Git",
        "GitHub",
        "Azure DevOps",
        "Jenkins",
        "Docker",
        "Postman",
        "Swagger",
        "IIS",
        "GitFlow Workflow",
        "Conventional Commits"
      ]
    },
    {
      category: "Testing & Quality Assurance",
      items: ["xUnit", "Fluent Assertions", "Fluent Validation", "AutoMapper", "ESLint"]
    },
    {
      category: "Build Tools",
      items: ["Webpack", "NUKE Build"]
    },
    {
      category: "Security",
      items: ["OAuth 2.0", "OpenID Connect", "JWT (JSON Web Tokens)"]
    },
    {
      category: "Project Management & Collaboration",
      items: ["Agile", "Scrum", "Trello", "Slack", "Notion", "Toggl"]
    },
    {
      category: "Other Technologies",
      items: ["RabbitMQ"]
    },
    {
      category: "Soft Skills",
      items: ["Communication", "Problem-Solving", "Time Management"]
    }
  ]
};

function renderWorkExperience() {
  const container = document.querySelector("#work-experience");
  cvData.workExperience.forEach((job) => {
    const jobElement = document.createElement("div");
    jobElement.className = "mb-4";
    jobElement.innerHTML = `
      <h4 class="job-title">${job.title} <span class="company-name">at ${job.company}</span></h4>
      <p class="job-duration">${job.duration} | ${job.location}</p>
      <ul class="text-gray-800 leading-relaxed">
        ${job.responsibilities.map((resp) => `<li>${resp}</li>`).join("")}
      </ul>
    `;
    container.appendChild(jobElement);
  });
}

function renderProfessionalDevelopment() {
  const container = document.querySelector("#professional-development");
  const ulElement = document.createElement("ul");
  ulElement.className = "text-gray-800 leading-relaxed";

  cvData.professionalDevelopment.forEach((item) => {
    const liElement = document.createElement("li");
    liElement.innerHTML = `
      ${item.course}, ${item.provider}
      ${
        item.certificate
          ? `<span class="certificate-parenthesis">(<a href="${item.certificate}" class="text-blue-600 hover:underline certificate-link">Certificate</a>)</span>`
          : ""
      }
      ${item.details ? `<span>${item.details}</span>` : ""}
    `;
    ulElement.appendChild(liElement);
  });

  container.appendChild(ulElement);
}

function renderSkills(noOfColumns = 3) {
  const grid = document.querySelector("#skills");
  grid.innerHTML = "";

  const columns = [];
  // create columns
  for (let i = 0; i < noOfColumns; i++) {
    const column = document.createElement("div");
    column.className = "skills-column";
    columns.push(column);
    grid.appendChild(column);
  }

  cvData.skills.forEach((skillCategory, index) => {
    const columnIndex = index % noOfColumns;
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "skill-category";
    categoryDiv.innerHTML = `
      <h4 class="skill-title">${skillCategory.category}</h4>
      <ul class="skill-list">
        ${skillCategory.items.map((skill) => `<li>${skill}</li>`).join("")}
      </ul>
    `;
    columns[columnIndex].appendChild(categoryDiv);
  });
}

function getNoOfColumns() {
  if (window.innerWidth < 480) {
    return 1;
  } else if (window.innerWidth < 768) {
    return 2;
  }
  return 3;
}

document.addEventListener("DOMContentLoaded", () => {
  renderWorkExperience();
  renderProfessionalDevelopment();
  renderSkills();
});

window.addEventListener("resize", (event) => {
  renderSkills(getNoOfColumns());
});

window.onbeforeprint = () => {
  renderSkills();
};

window.onafterprint = () => {
  renderSkills(getNoOfColumns());
};
