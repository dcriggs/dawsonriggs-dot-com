import type { Metadata } from "next";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Why Reliable Go-Lives Depend on More Than Code",
  description:
    "A reflection by Dawson Riggs on why reliable healthcare implementation go-lives depend on readiness, communication, validation, and ownership—not just software.",
  alternates: {
    canonical: "https://dawsonriggs.com/writing/reliable-go-lives-more-than-code",
  },
  openGraph: {
    title: "Why Reliable Go-Lives Depend on More Than Code",
    description:
      "A reflection by Dawson Riggs on healthcare implementation readiness, communication, validation, ownership, and reliable production go-lives.",
    type: "article",
    url: "https://dawsonriggs.com/writing/reliable-go-lives-more-than-code",
  },
};

const technicalRequirements = [
  "APIs need to authenticate correctly",
  "integrations need to route data properly",
  "payloads need to validate",
  "workflows need to behave as expected",
];

const communicationEnsures = [
  "expectations are clearly defined",
  "responsibilities are assigned",
  "blockers are surfaced early",
  "dependencies are understood",
  "timelines are realistic",
  "the right people are involved at the right moments",
];

const implementationChannels = [
  "email threads",
  "live customer calls",
  "internal engineering discussions",
  "implementation meetings",
  "ticketing systems like Zendesk and ClickUp",
  "production escalation workflows",
];

const earlyCareerFlow = ["receive requirements", "configure systems", "test expected workflows", "launch"];

const proactiveSignals = [
  "data arriving in unexpected formats",
  "edge cases not accounted for",
  "workflow assumptions that seem ambiguous",
  "dependencies that have not been fully validated",
  "operational gaps between teams",
];

const implementationComplexity = [
  "multiple vendors",
  "EHR environments",
  "payer systems",
  "APIs",
  "authentication layers",
  "operational workflows",
  "customer-specific configuration",
];

const reliabilityInputs = [
  "clear requirements",
  "thoughtful validation",
  "realistic testing",
  "strong communication",
  "operational alignment",
  "proactive troubleshooting",
  "shared ownership",
];

export default function ReliableGoLivesMoreThanCodePage() {
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
          Why Reliable Go-Lives Depend on More Than Code
        </h1>
        <p className="mt-6 text-xl leading-9 text-slate-600">
          A successful implementation is not just a technical cutover. It is the visible result of readiness, communication, validation, and ownership long before launch day arrives.
        </p>

        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5 sm:p-8">
          <div className="max-w-none space-y-6 text-slate-700 [&_blockquote]:border-l-4 [&_blockquote]:border-teal-500 [&_blockquote]:bg-teal-50/70 [&_blockquote]:px-5 [&_blockquote]:py-4 [&_blockquote]:text-lg [&_blockquote]:font-medium [&_blockquote]:text-slate-800 [&_h2]:pt-6 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-slate-950 [&_li]:ml-6 [&_li]:list-disc [&_li]:leading-8 [&_p]:leading-8">
            <p>
              One of the biggest misconceptions about enterprise software implementations is the idea that a successful go-live is primarily a technical event.
            </p>

            <p>The technology matters, of course.</p>

            <ul>
              {technicalRequirements.map((requirement) => (
                <li key={requirement}>{requirement}</li>
              ))}
            </ul>

            <p>
              But after working on healthcare implementations for several years, I have realized that reliable go-lives depend just as much on readiness, communication, validation, and ownership as they do on the software itself.
            </p>

            <p>
              A technically functional integration can still produce a chaotic implementation if teams are misaligned or assumptions go unverified.
            </p>

            <h2>Communication is infrastructure</h2>

            <p>
              One of the most valuable parts of my role has become something that many people do not immediately associate with technical work: communication.
            </p>

            <p>Not vague communication. Operational communication.</p>

            <p>The kind that ensures:</p>

            <ul>
              {communicationEnsures.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>In practice, this means moving constantly between different channels:</p>

            <ul>
              {implementationChannels.map((channel) => (
                <li key={channel}>{channel}</li>
              ))}
            </ul>

            <p>Good implementation work often looks less dramatic than people expect.</p>

            <p>Sometimes it is simply making sure everyone shares the same understanding of:</p>

            <blockquote>
              <p>“What exactly needs to happen before production traffic starts flowing?”</p>
            </blockquote>

            <p>That clarity prevents a surprising number of problems.</p>

            <h2>Go-lives reward proactive thinking</h2>

            <p>
              One habit I have developed more intentionally as I have become more senior is proactively validating assumptions instead of waiting for failures to prove them wrong.
            </p>

            <p>Earlier in my career, I sometimes viewed integrations too narrowly:</p>

            <ul>
              {earlyCareerFlow.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>

            <p>Over time, I started realizing that strong implementation ownership requires a more skeptical mindset.</p>

            <p>Now, I try to actively look for signals that something may break later:</p>

            <ul>
              {proactiveSignals.map((signal) => (
                <li key={signal}>{signal}</li>
              ))}
            </ul>

            <p>
              When possible, I would much rather surface an uncomfortable conversation before a go-live than troubleshoot avoidable production issues afterward.
            </p>

            <p>That shift in mindset has probably improved my implementation work more than any single technical skill.</p>

            <h2>Validation is not distrust</h2>

            <p>One subtle lesson I have learned is that validation is not about distrusting other teams.</p>

            <p>It is about recognizing the complexity of interconnected systems.</p>

            <p>Healthcare implementations often involve:</p>

            <ul>
              {implementationComplexity.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              In environments that complex, even highly capable teams can unknowingly make conflicting assumptions. That is why validating payloads, checking mappings, confirming workflow expectations, and reviewing edge cases matters so much.
            </p>

            <p>Not because people are careless. Because complex systems amplify small misunderstandings.</p>

            <h2>Ownership changes your perspective</h2>

            <p>
              I think one of the biggest professional shifts happens when you stop viewing yourself as someone merely assigned to complete technical tasks, and start viewing yourself as partially responsible for the success of the overall outcome.
            </p>

            <p>
              That perspective changes how you work. You ask more questions. You verify more assumptions. You communicate more proactively. You become more willing to push back when something does not look right.
            </p>

            <p>And importantly, you stop thinking:</p>

            <blockquote>
              <p>“Well technically my part is done.”</p>
            </blockquote>

            <p>
              Because in implementation work, success is rarely measured by whether a configuration technically existed. It is measured by whether the customer can reliably operate the workflow in the real world after launch.
            </p>

            <h2>Reliable systems require shared understanding</h2>

            <p>
              One thing healthcare technology continues to reinforce for me is that reliability is not created at the moment of go-live.
            </p>

            <p>Reliable systems are usually the result of dozens of smaller decisions made beforehand:</p>

            <ul>
              {reliabilityInputs.map((input) => (
                <li key={input}>{input}</li>
              ))}
            </ul>

            <p>The actual production cutover is often just the visible endpoint of all that preparation.</p>

            <p>
              And when those pieces come together correctly, go-lives start to feel less like high-risk events and more like controlled transitions. That is usually a sign that the real implementation work was done well long before launch day arrived.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Connect</p>
            <p className="mt-2 max-w-2xl text-slate-200">
              Want to talk healthcare integrations, go-live readiness, implementation ownership, or interoperability?
            </p>
          </div>
          <CTAButton href={siteConfig.linkedinUrl}>Connect on LinkedIn</CTAButton>
        </div>
      </article>
    </main>
  );
}
