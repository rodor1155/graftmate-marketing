import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | GraftMate AI",
  description:
    "Terms and Conditions for using GraftMate AI, operated by Rodor Technologies Ltd. Governing law: England and Wales.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Terms &amp; Conditions
      </h1>
      <p className="mt-4 text-sm text-muted-dim">Last updated: June 2026</p>

      <div className="mt-10 space-y-10 text-muted [&_a]:text-secondary [&_a]:underline [&_a]:underline-offset-2 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">
        <section>
          <h2>1. About These Terms</h2>
          <p>
            These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use
            of GraftMate AI, a software-as-a-service platform for UK
            tradespeople, operated by{" "}
            <strong>Rodor Technologies Ltd</strong> (&ldquo;we&rdquo;,
            &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a company registered in
            England and Wales.
          </p>
          <p>
            By creating an account or using GraftMate AI, you agree to be bound by
            these Terms. If you do not agree, you must not use the service.
            Please also read our{" "}
            <Link href="/privacy">Privacy Policy</Link>, which forms part of
            these Terms.
          </p>
          <p>
            For questions about these Terms, contact us at{" "}
            <a href="mailto:ross@ellner.co.uk">ross@ellner.co.uk</a>.
          </p>
        </section>

        <section>
          <h2>2. Service Description</h2>
          <p>
            GraftMate AI is an AI-powered job management platform designed for UK
            sole traders and small trade businesses. The service includes:
          </p>
          <ul>
            <li>
              AI-assisted quote generation — describe a job and GraftMate AI
              produces a professional draft quote you can review and send.
            </li>
            <li>
              Unified inbox — manage email and WhatsApp messages from a single
              interface, linked to clients and jobs.
            </li>
            <li>
              Client management — store contact details, addresses, job history,
              and notes.
            </li>
            <li>
              Invoicing — generate VAT-ready invoices from accepted quotes.
            </li>
          </ul>
          <p>
            We reserve the right to add, modify, or remove features at any time.
            Where a material change affects paid features, we will give
            reasonable notice.
          </p>
        </section>

        <section>
          <h2>3. Subscription and Pricing</h2>
          <p>
            GraftMate AI is offered on a subscription basis at{" "}
            <strong>£29.99 per month</strong> (excluding VAT where applicable),
            giving access to all current features on a single plan.
          </p>
          <p>
            <strong>First month free:</strong> New subscribers currently receive
            their first month of GraftMate AI free of charge. From the second
            month, a paid subscription is required to continue using the
            service. We will notify registered users by email before billing
            begins.
          </p>
          <ul>
            <li>
              Subscriptions are billed monthly in advance via Stripe, our
              payment processor.
            </li>
            <li>
              Prices are in GBP. We will give at least 30 days&rsquo; notice of
              any price changes.
            </li>
            <li>
              You may cancel your subscription at any time from your account
              settings. Cancellation takes effect at the end of the current
              billing period; no refunds are issued for partial months.
            </li>
            <li>
              We reserve the right to suspend or terminate accounts with
              outstanding unpaid balances.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Account Registration</h2>
          <p>To use GraftMate AI, you must:</p>
          <ul>
            <li>Be at least 18 years old.</li>
            <li>
              Provide accurate, current, and complete registration information.
            </li>
            <li>
              Keep your login credentials confidential and notify us immediately
              of any suspected unauthorised access.
            </li>
          </ul>
          <p>
            You are responsible for all activity that occurs under your account.
            Each account is for use by a single individual or business entity;
            account sharing is not permitted.
          </p>
        </section>

        <section>
          <h2>5. Acceptable Use</h2>
          <p>
            You agree to use GraftMate AI only for lawful purposes and in
            accordance with these Terms. You must not:
          </p>
          <ul>
            <li>
              Use the service to create, store, or transmit any content that is
              unlawful, fraudulent, defamatory, harassing, or otherwise
              objectionable.
            </li>
            <li>
              Attempt to gain unauthorised access to any part of GraftMate AI or
              its underlying systems.
            </li>
            <li>
              Reverse-engineer, decompile, or attempt to extract the source code
              of the platform.
            </li>
            <li>
              Use automated tools, bots, or scripts to scrape or excessively
              query the service in a way that degrades performance for other
              users.
            </li>
            <li>
              Resell, sublicense, or otherwise transfer access to GraftMate AI
              without our prior written consent.
            </li>
            <li>
              Use the AI features to generate content that could be considered
              spam, misleading, or harmful to recipients.
            </li>
          </ul>
          <p>
            We reserve the right to suspend or terminate accounts that breach
            these acceptable use requirements, without refund.
          </p>
        </section>

        <section>
          <h2>6. Intellectual Property</h2>
          <p>
            All intellectual property in the GraftMate AI platform — including
            software, design, trademarks, and content created by us — belongs to
            Rodor Technologies Ltd or our licensors.
          </p>
          <p>
            You retain ownership of any content you create and store in
            GraftMate AI (such as your quotes, invoices, client records, and job
            notes). By using the service, you grant us a limited licence to
            process and store that content solely to provide the service to you.
          </p>
        </section>

        <section>
          <h2>7. Availability and Downtime</h2>
          <p>
            We aim to keep GraftMate AI available at all times but we do not
            guarantee uninterrupted access. Planned maintenance, third-party
            service outages (e.g. Supabase, Vercel), or circumstances beyond
            our control may cause temporary unavailability. We will endeavour to
            give advance notice of planned maintenance where possible.
          </p>
        </section>

        <section>
          <h2>8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, Rodor
            Technologies Ltd shall not be liable for any:
          </p>
          <ul>
            <li>
              Indirect, incidental, special, or consequential losses (including
              loss of revenue, profit, contracts, or data) arising from your use
              of, or inability to use, GraftMate AI.
            </li>
            <li>
              Loss or damage caused by errors or inaccuracies in AI-generated
              content (such as quote drafts) — you are responsible for reviewing
              all output before sending it to clients.
            </li>
            <li>
              Loss or damage resulting from unauthorised access to your account
              due to your failure to keep credentials secure.
            </li>
          </ul>
          <p>
            Our total aggregate liability to you for any claims arising out of
            or related to these Terms or your use of GraftMate AI shall not exceed
            the total subscription fees paid by you in the three months
            immediately preceding the claim.
          </p>
          <p>
            Nothing in these Terms excludes or limits liability for death or
            personal injury caused by negligence, fraud or fraudulent
            misrepresentation, or any other liability that cannot be excluded by
            law.
          </p>
        </section>

        <section>
          <h2>9. Termination</h2>
          <p>
            Either party may terminate this agreement at any time. You may close
            your account via the account settings page; we may suspend or
            terminate your account if you breach these Terms or if we decide to
            discontinue the service (with reasonable notice).
          </p>
          <p>
            On termination, your right to access GraftMate AI ceases. We will
            retain your data for a limited period after termination in
            accordance with our Privacy Policy, after which it will be deleted.
          </p>
        </section>

        <section>
          <h2>10. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. We will post the
            revised Terms on this page with an updated &ldquo;last updated&rdquo;
            date and, for material changes, notify you by email at least 14 days
            in advance. Continued use of GraftMate AI after the effective date of
            updated Terms constitutes acceptance.
          </p>
        </section>

        <section>
          <h2>11. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the
            laws of <strong>England and Wales</strong>. Any disputes arising
            from or related to these Terms or your use of GraftMate AI shall be
            subject to the exclusive jurisdiction of the courts of England and
            Wales.
          </p>
        </section>

        <section>
          <h2>12. Contact</h2>
          <p>
            For questions about these Terms, please contact Rodor Technologies
            Ltd at:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:ross@ellner.co.uk">ross@ellner.co.uk</a>
            </li>
          </ul>
        </section>
      </div>

      <div className="mt-12 border-t border-border-subtle pt-8">
        <p className="text-sm text-muted-dim">
          <Link href="/privacy" className="text-secondary hover:underline">
            Privacy Policy
          </Link>{" "}
          &middot;{" "}
          <Link href="/" className="text-secondary hover:underline">
            Back to GraftMate AI
          </Link>
        </p>
      </div>
    </div>
  );
}
