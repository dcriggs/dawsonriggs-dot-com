export const siteConfig = {
  name: "Dawson Riggs",
  domain: "dawsonriggs.com",
  headline:
    "Integration Engineer focused on healthcare interoperability, EHR integrations, and customer-facing technical problem solving.",
  linkedInHeadline:
    "Integration Engineer | Former Epic MyChart TS | Shipping EHR Integrations, Solving Edge Cases, Unblocking Go-Lives | FHIR & HL7",
  intro:
    "I help healthcare technology teams ship reliable EHR integrations, solve messy implementation problems, and unblock go-lives across Epic, Oracle Health, APIs, and healthcare data workflows.",
  linkedinUrl: "https://www.linkedin.com/in/dawson-riggs/",
  nav: [
    { label: "Story", href: "#story" },
    { label: "Expertise", href: "#expertise" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Writing", href: "#writing" },
    { label: "Contact", href: "#contact" },
  ],
  about: [
    "I started my career at Epic Systems as a MyChart Technical Services engineer, where I learned how patient experience workflows, health system operations, and real-world EHR implementation constraints fit together. That foundation shaped how I approach technical work: the system has to function, but it also has to support the people trying to deliver care.",
    "At Luma Health, I grew into healthcare startup integration work across EHR connectivity, implementation delivery, escalation support, and customer-facing problem solving. I spend a lot of time in the intersection between engineering, delivery, support, and customer success—translating ambiguous problems into clear next steps and helping teams get live with confidence.",
    "My strongest work happens in the gray area where technical systems, customer needs, and operational reality meet. I care about reliability, clarity, ownership, and practical problem-solving: understanding the workflow, making invisible behavior visible, and staying with the problem until the outcome is dependable.",
  ],
  expertise: [
    {
      title: "EHR Integrations",
      description:
        "Designing, validating, and supporting healthcare integrations that connect products to real clinical and patient-access workflows.",
    },
    {
      title: "API & FHIR Workflows",
      description:
        "Working through API behavior, FHIR resources, payload validation, edge cases, and implementation details that affect production reliability.",
    },
    {
      title: "Epic & Oracle Health/Cerner Connectivity",
      description:
        "Supporting integrations in Epic and Oracle Health/Cerner environments with an understanding of EHR operations and customer constraints.",
    },
    {
      title: "Implementation Troubleshooting",
      description:
        "Debugging go-live blockers, production issues, escalations, and ambiguous defects with a calm, structured, first-principles approach.",
    },
    {
      title: "Data Mapping & Workflow Design",
      description:
        "Translating operational requirements into data mappings, configuration decisions, and workflows that teams can maintain.",
    },
    {
      title: "Customer-Facing Technical Leadership",
      description:
        "Communicating clearly with technical and non-technical stakeholders, building trust, and keeping delivery moving through uncertainty.",
    },
  ],
  experiences: [
    {
      company: "Luma Health",
      role: "Integration Engineer",
      dates: "Oct. 2022 – Present",
      summary:
        "Luma Health is the leading AI-native patient engagement platform, backed by $160M in Series C funding. My work spans EHR integration delivery, production reliability, automation, and customer-facing technical ownership.",
      highlights: [
        "Reduced Epic API costs from $1.3M/month to $134K/month—about 90% savings—through code optimization.",
        "Implemented and maintained HL7 and API integrations with enterprise EHRs including Epic, Cerner, Meditech, NextGen, and eClinicalWorks.",
        "Owned the Meditech Cold Feed pipeline lifecycle across implementation, debugging, code enhancements, and documentation, improving PDF writeback reliability from 93% to 100% for key customers.",
        "Led 20+ new customer go-lives by configuring integration workflows and data sync processes across implementation, engineering, sales, and customer success teams.",
        "Developed JavaScript, TypeScript, and Python scripts to debug production issues, automate monitoring, and resolve complex data/API issues with minimal downtime.",
        "Mentored engineering interns and new team members through onboarding and technical development.",
      ],
    },
    {
      company: "Epic Systems",
      role: "Technical Solutions Engineer, MyChart",
      dates: "Previous role",
      summary:
        "MyChart is Epic’s patient portal used by 190M+ patients for secure online healthcare access. This role built my foundation in patient access workflows, health system operations, and enterprise healthcare software delivery.",
      highlights: [
        "Supported Epic telehealth workflows, including Epic Video Client (EVC) and Teladoc integrations.",
        "Led integration and post-go-live support for 8 major healthcare organizations, customizing platform features to align with operational and clinical requirements.",
        "Wrote and optimized SQL queries for Epic’s largest patient record reconciliation, matching roughly 10M records.",
        "Diagnosed and documented 97+ recurring error patterns as MyChart Error Log Tech Lead, accelerating root cause analysis and resolution.",
        "Supported Epic’s onboarding bootcamp by reviewing new engineers’ code and mentoring certification projects.",
      ],
    },
  ],
  projects: [
    {
      title: "Prior Auth Integration Lab",
      type: "Healthcare interoperability sandbox",
      description:
        "Educational healthcare interoperability sandbox for learning HL7 v2, X12 278, payload mapping, validation, and integration debugging.",
      tags: ["HL7 v2", "X12 278", "Mapping", "Debugging"],
      githubUrl: "https://github.com/dcriggs/prior-auth-integration-lab",
      demoUrl: "https://prior-auth-integration-lab.vercel.app/",
    },
    {
      title: "Pixel Ape Labs Website Revamp",
      type: "Client web product",
      description:
        "Full-stack web work for a Web3 client, modernizing site structure, user flows, and product positioning.",
      tags: ["Next.js", "Product", "Web3", "UX"],
      githubUrl: "",
      demoUrl: "https://pixelapelabs.com/",
    },
    {
      title: "Solana Raffle Platform",
      type: "Full-stack application",
      description:
        "Full-stack Solana application involving NFT/SPL token transfers, escrow logic, database design, and frontend delivery.",
      tags: ["Solana", "Escrow", "Database", "Frontend"],
      githubUrl: "",
      demoUrl: "https://kingsrealm.io/",
    },
    {
      title: "More projects coming soon",
      type: "Living portfolio",
      description:
        "A place for future healthcare integration labs, implementation notes, and product experiments as they become ready to share.",
      tags: ["Healthcare", "Writing", "Labs"],
      githubUrl: "https://github.com/dcriggs",
      demoUrl: "#",
    },
  ],
  writing: [
    {
      title: "What Healthcare Integrations Taught Me About Debugging",
      description:
        "A reflection on reading logs, reconstructing workflows, and separating signal from noise in high-stakes implementation work.",
      status: "Published reflection",
      href: "/writing/healthcare-integrations-debugging",
    },
    {
      title: "The Gray Area Between Engineering and Implementation",
      description:
        "Why some of the most important technical work happens between product behavior, customer expectations, and operational reality.",
      status: "Published reflection",
      href: "/writing/the-gray-area-between-engineering-and-implementation",
    },
    {
      title: "Why Reliable Go-Lives Depend on More Than Code",
      description:
        "A practical look at readiness, communication, validation, and ownership before production traffic starts flowing.",
      status: "Published reflection",
      href: "/writing/reliable-go-lives-more-than-code",
    },
  ],
  values: [
    "Own the problem end-to-end.",
    "Communicate clearly across technical and non-technical teams.",
    "Make invisible system behavior visible.",
    "Debug from first principles.",
    "Build trust by shipping reliable outcomes.",
  ],
};
