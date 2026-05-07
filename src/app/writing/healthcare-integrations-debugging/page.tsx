import type { Metadata } from "next";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "What Healthcare Integrations Taught Me About Debugging",
  description:
    "A reflection by Dawson Riggs on debugging healthcare integrations, reconstructing workflows, and following evidence through complex EHR systems.",
  alternates: {
    canonical: "https://dawsonriggs.com/writing/healthcare-integrations-debugging",
  },
  openGraph: {
    title: "What Healthcare Integrations Taught Me About Debugging",
    description:
      "A reflection by Dawson Riggs on debugging healthcare integrations, workflow reconstruction, and disciplined reasoning under pressure.",
    type: "article",
    url: "https://dawsonriggs.com/writing/healthcare-integrations-debugging",
  },
};

const obviousChecks = [
  "a credential expired",
  "an IP was not whitelisted",
  "a payload field was malformed",
  "a date format changed",
  "a mapping assumption broke",
  "a service was not restarted",
  "an endpoint URL was wrong",
  "a file never arrived",
];

const workflowQuestions = [
  "What system generated the message?",
  "What transport layer carried it?",
  "What transformation happened in between?",
  "What assumptions did each system make?",
  "Where did the data stop matching expectations?",
];

const realSkills = [
  "process large amounts of information quickly",
  "ask relevant questions",
  "isolate variables methodically",
  "communicate clearly under pressure",
  "stay calm while narrowing the search space",
];

export default function HealthcareIntegrationsDebuggingPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="border-b border-white/70 bg-white/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Writing navigation">
          <Link href="/" className="text-sm font-bold tracking-tight text-slate-950">
            Dawson Riggs
          </Link>
          <Link href="/#writing" className="rounded-full px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950">
            Back to writing
          </Link>
        </nav>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-16 sm:py-24 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">Professional reflection</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          What Healthcare Integrations Taught Me About Debugging
        </h1>
        <p className="mt-6 text-xl leading-9 text-slate-600">
          Debugging complex healthcare systems is less about heroics and more about disciplined reasoning, workflow reconstruction, and staying curious long enough to follow the evidence.
        </p>

        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5 sm:p-8">
          <div className="max-w-none space-y-6 text-slate-700 [&_blockquote]:border-l-4 [&_blockquote]:border-teal-500 [&_blockquote]:bg-teal-50/70 [&_blockquote]:px-5 [&_blockquote]:py-4 [&_blockquote]:text-lg [&_blockquote]:font-medium [&_blockquote]:text-slate-800 [&_h2]:pt-6 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-slate-950 [&_li]:ml-6 [&_li]:list-disc [&_li]:leading-8 [&_p]:leading-8">
            <p>
              One of the most valuable lessons I learned early in my career came from a mentor at Epic Systems—a brilliant former materials scientist with a Ph.D. During one particularly difficult troubleshooting session, he said something that permanently changed the way I think about technology:
            </p>

            <blockquote>
              <p>“Computers are actually easy to understand. At the end of the day, everything comes down to binary bits—true or false, yes or no.”</p>
            </blockquote>

            <p>
              At first, that sounded almost absurdly simple compared to the complexity of modern healthcare systems. APIs, EHR integrations, authentication workflows, HL7 messages, databases, production incidents, customer escalations—none of it feels simple when a go-live is blocked and multiple teams are waiting for answers.
            </p>

            <p>But over time, I realized what he meant.</p>

            <p>
              The problems we solve in IT and software integrations may be difficult, but they are not unknowable. They are not beyond human understanding. A computer is never secretly rewriting the laws of physics because it is having a bad day.
            </p>

            <p>Something specific is going wrong.</p>
            <p>The challenge is identifying what it is.</p>
            <p>That mindset has shaped the way I approach debugging ever since.</p>

            <h2>Start with the obvious</h2>

            <p>One thing healthcare integrations taught me is that troubleshooting often rewards humility more than brilliance.</p>

            <p>
              When systems fail, there is a temptation to immediately assume the problem is deeply complex: a hidden infrastructure issue, an obscure race condition, a mysterious vendor bug, or some once-in-a-career edge case.
            </p>

            <p>Sometimes it is complicated. But surprisingly often, it is not.</p>

            <ul>
              {obviousChecks.map((check) => (
                <li key={check}>{check}</li>
              ))}
            </ul>

            <p>
              The technical equivalent of “did you unplug it and plug it back in?” exists everywhere in software engineering. Experience teaches you not to skip those questions just because they seem too simple.
            </p>

            <h2>Debugging is workflow reconstruction</h2>

            <p>In healthcare integrations especially, debugging is rarely about staring at code in isolation.</p>

            <p>It is about reconstructing the full workflow:</p>

            <ul>
              {workflowQuestions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>

            <p>
              Over time, I have realized that strong troubleshooting is less about memorizing technologies and more about building a mental model of how information flows through systems.
            </p>

            <p>
              You learn to read logs almost like a timeline. You correlate timestamps. You compare expected behavior against actual behavior. You separate signal from noise.
            </p>

            <p>And importantly, you keep narrowing the possibilities.</p>

            <h2>Growth mindset matters</h2>

            <p>Another lesson I have learned is that mindset affects troubleshooting quality.</p>

            <p>
              If you approach an issue believing, “This is impossible,” you stop exploring too early. But if you approach it with, “There is an explanation, and I can figure it out,” your brain stays engaged longer.
            </p>

            <p>
              That does not mean every issue gets solved quickly. Some production incidents take hours of careful investigation across multiple systems and teams. Some problems require vendor involvement, packet traces, or deep dives into obscure implementation details.
            </p>

            <p>But I have found that maintaining curiosity is often more useful than panic.</p>
            <p>Every failed integration leaves clues behind.</p>

            <h2>The real skill</h2>

            <p>
              As I have grown in healthcare technology, I have become less impressed by people who immediately jump to complicated conclusions, and more impressed by people who can:
            </p>

            <ul>
              {realSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>

            <p>That is the real work.</p>
            <p>Not magic. Not heroics.</p>

            <p>Just disciplined reasoning applied consistently.</p>

            <p>
              And in a strange way, I think that is one reason I enjoy healthcare integrations so much. Underneath all the complexity—APIs, HL7 messages, authentication flows, EHR workflows, production systems—there is always an answer waiting to be uncovered.
            </p>

            <p>You just have to keep following the evidence.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Connect</p>
            <p className="mt-2 max-w-2xl text-slate-200">
              Want to talk healthcare integrations, debugging, implementation work, or interoperability?
            </p>
          </div>
          <CTAButton href={siteConfig.linkedinUrl}>Connect on LinkedIn</CTAButton>
        </div>
      </article>
    </main>
  );
}
