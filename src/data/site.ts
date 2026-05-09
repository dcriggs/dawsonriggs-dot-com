export const siteConfig = {
  name: "Dawson Riggs",
  domain: "dawsonriggs.com",
  title: "Healthcare Integration Engineer",
  headline: "I help healthcare technology teams deliver reliable EHR integrations that work in real-world clinical and operational environments.",
  linkedInHeadline: "Integration Engineer | Epic & Oracle Health Interoperability | FHIR, HL7 & EHR Integrations",
  intro:
    "My work sits at the intersection of engineering, implementation, production support, and customer workflows—designing, troubleshooting, and improving integrations across Epic, Oracle Health/Cerner, Meditech, NextGen, eClinicalWorks, FHIR, HL7, REST APIs, SOAP APIs, and SQL-backed production systems.",
  linkedinUrl: "https://www.linkedin.com/in/dawson-riggs/",
  nav: [
    { label: "Focus", href: "#expertise" },
    { label: "Experience", href: "#experience" },
    { label: "Case Studies", href: "#projects" },
    { label: "Writing", href: "#writing" },
    { label: "Contact", href: "#contact" },
  ],
  heroPillars: ["Epic integrations", "Oracle Health/Cerner", "FHIR + HL7", "REST + SOAP APIs", "SQL + production systems"],
  systemNodes: ["Epic EHR", "Hospital systems", "Patient engagement", "Clinical workflows", "FHIR APIs", "HL7 messaging", "Cloud services", "Analytics"],
  metrics: [
    { value: "~90%", label: "Epic API cost reduction" },
    { value: "20+", label: "customer go-lives led" },
    { value: "400+", label: "complex support tickets resolved" },
    { value: "93% → 100%", label: "Meditech PDF writeback reliability" },
  ],
  about: [
    "I started my career at Epic Systems as a MyChart Technical Solutions Engineer supporting patient experience workflows, telehealth integrations, and large health system go-lives. That foundation shaped how I think about interoperability: the technical path has to work, but it also has to survive operational reality.",
    "At Luma Health, I moved from Enterprise Technical Support Engineer to Implementation Specialist to Integration Engineer, working across EHR connectivity, healthcare workflows, customer implementation, escalation support, and production reliability.",
    "My strongest work happens in the gray area where technical systems, customer needs, implementation constraints, and operational reality intersect. I focus on making system behavior visible, translating ambiguity into concrete next steps, and staying with the problem until the integration is dependable.",
  ],
  expertise: [
    {
      title: "Healthcare Interoperability",
      description:
        "Connecting healthcare SaaS products to clinical and operational systems with careful attention to data exchange, workflow impact, and long-term maintainability.",
    },
    {
      title: "EHR Integrations",
      description:
        "Implementing and supporting EHR integrations across Epic, Oracle Health/Cerner, Meditech, NextGen, and eClinicalWorks environments.",
    },
    {
      title: "Implementation & Go-Live Support",
      description:
        "Guiding integrations from configuration and validation through launch readiness, customer communication, go-live support, and post-launch stabilization.",
    },
    {
      title: "Production Troubleshooting",
      description:
        "Debugging FHIR, HL7, REST API, SOAP API, SQL, and workflow issues with a calm, structured approach to restore reliability and reduce downtime.",
    },
    {
      title: "Workflow Systems",
      description:
        "Translating healthcare workflows into practical integration behavior, data mappings, automation logic, and supportable implementation patterns.",
    },
    {
      title: "Technical Customer Ownership",
      description:
        "Bridging engineering, implementation, support, customer success, and health system stakeholders with clear communication and accountable follow-through.",
    },
  ],
  experiences: [
    {
      company: "Luma Health",
      role: "Integration Engineer · Implementation Specialist · Enterprise Technical Support Engineer",
      dates: "Oct. 2022 – Present",
      summary:
        "Progressed across support, implementation, and integration engineering roles focused on EHR connectivity, healthcare workflow delivery, production support, and customer-facing technical ownership.",
      highlights: [
        "Reduced Epic API costs from $1.3M/month to $134K/month—about 90% savings—through integration and workflow optimization.",
        "Implemented and maintained HL7 and API integrations with enterprise EHRs including Epic, Cerner, Meditech, NextGen, and eClinicalWorks.",
        "Developed an Epic SOAP API integration workflow powering AI-enabled IVR prescription refill automation and patient self-service.",
        "Owned the Meditech Cold Feed pipeline across implementation, debugging, code enhancements, and documentation, improving PDF writeback reliability from 93% to 100% for key customers.",
        "Led 20+ customer go-lives by configuring integration workflows and data synchronization processes across implementation, engineering, and customer success teams.",
        "Resolved 400+ Zendesk tickets involving complex EHR integrations, APIs, and workflow issues while maintaining a greater than 95% CSAT.",
      ],
    },
    {
      company: "Epic Systems",
      role: "Technical Solutions Engineer, MyChart",
      dates: "Jun. 2019 – Sep. 2022",
      summary:
        "Supported patient experience workflows, enterprise healthcare integrations, and post-go-live operational issues for large healthcare organizations using Epic MyChart.",
      highlights: [
        "Supported Epic telehealth workflows, including Epic Video Client (EVC) and Teladoc integrations.",
        "Led integration and post-go-live support for 8 major healthcare organizations, aligning platform functionality with operational and clinical workflow requirements.",
        "Diagnosed and documented 97+ recurring MyChart error patterns as MyChart Error Log Tech Lead, accelerating root cause analysis and issue resolution.",
        "Wrote and optimized SQL queries supporting Epic’s largest patient record reconciliation initiative, with roughly 10M records matched.",
        "Collaborated directly with healthcare organizations to troubleshoot interoperability, workflow, and production support issues across large-scale patient engagement systems.",
      ],
    },
  ],
  projects: [
    {
      title: "Reducing Epic API Costs by 90%",
      type: "Future case study",
      description:
        "A planned writeup on finding waste in production integration behavior, aligning workflow design with API utilization, and reducing monthly Epic API costs from $1.3M to $134K.",
      tags: ["Epic integrations", "Cost optimization", "Production systems", "Workflow design"],
    },
    {
      title: "Meditech Cold Feed Pipeline Reliability",
      type: "Future case study",
      description:
        "A placeholder for a practical reliability case study covering implementation, debugging, code enhancements, documentation, and PDF writeback improvements from 93% to 100% for key customers.",
      tags: ["Meditech", "Reliability", "Pipeline debugging", "Documentation"],
    },
    {
      title: "Building Reliable EHR Integration Workflows",
      type: "Future case study",
      description:
        "A future technical narrative on designing supportable healthcare workflows across EHR APIs, HL7 messaging, configuration choices, customer constraints, and go-live readiness.",
      tags: ["EHR integrations", "FHIR", "HL7", "Go-live support"],
    },
    {
      title: "HL7 / FHIR / SOAP Integration Lab",
      type: "Integration lab placeholder",
      description:
        "A living space for lightweight examples, implementation notes, and experiments around payload validation, mapping, troubleshooting, and workflow-oriented integration design.",
      tags: ["FHIR", "HL7", "SOAP APIs", "REST APIs"],
      githubUrl: "https://github.com/dcriggs/prior-auth-integration-lab",
      demoUrl: "https://prior-auth-integration-lab.vercel.app/",
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
    "Make invisible system behavior visible.",
    "Communicate clearly across technical and operational teams.",
    "Debug from first principles.",
    "Design for real-world reliability.",
  ],
};
