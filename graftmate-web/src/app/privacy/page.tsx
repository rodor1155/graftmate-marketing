import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | GraftMate",
  description:
    "Privacy Policy for GraftMate, a trading name of Ross Ellner, trading as Rodor Technologies. How we collect, use, and protect your personal data under UK GDPR.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-muted-dim">Last updated: November 2026</p>

      <div className="prose-custom mt-10 space-y-10 text-muted [&_a]:text-secondary [&_a]:underline [&_a]:underline-offset-2 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">
        <section>
          <h2>1. Who We Are</h2>
          <p>
            GraftMate is a trading name of <strong>Ross Ellner</strong>,
            trading as <strong>Rodor Technologies</strong>, a sole trader
            based in England. References to &ldquo;we&rdquo;, &ldquo;us&rdquo;,
            or &ldquo;our&rdquo; in this policy refer to Ross Ellner trading as
            Rodor Technologies.
          </p>
          <p>
            If you have any questions about how we handle your personal data,
            please contact us at{" "}
            <a href="mailto:info@rodortech.com">info@rodortech.com</a>.
          </p>
        </section>

        <section>
          <h2>2. Personal Data We Collect</h2>
          <p>
            When you register for or use GraftMate, we may collect the following
            categories of personal data:
          </p>
          <ul>
            <li>
              <strong>Identity data</strong> — your name and business name.
            </li>
            <li>
              <strong>Contact data</strong> — your email address, phone number,
              and business address.
            </li>
            <li>
              <strong>Job and trade details</strong> — your trade type and
              information about the jobs you manage through the platform.
            </li>
            <li>
              <strong>Financial data</strong> — payment information processed
              via Stripe (we do not store card details ourselves).
            </li>
            <li>
              <strong>Usage data</strong> — how you interact with the GraftMate
              application, including pages visited, features used, and session
              activity.
            </li>
            <li>
              <strong>Communications data</strong> — messages or support
              requests you send to us.
            </li>
          </ul>
          <p>
            We only collect data that is necessary to provide the GraftMate
            service or to comply with a legal obligation.
          </p>
        </section>

        <section>
          <h2>3. How We Use Your Data</h2>
          <p>We use your personal data for the following purposes:</p>
          <ul>
            <li>To create and manage your GraftMate account.</li>
            <li>
              To provide the GraftMate service, including AI-assisted quote
              generation, unified inbox, client management, and invoicing.
            </li>
            <li>
              To process subscription payments and maintain your billing
              history.
            </li>
            <li>
              To send you transactional emails (e.g. account confirmations,
              password resets, and invoice notifications) via our email
              provider, Resend.
            </li>
            <li>
              To improve and develop the GraftMate platform, using aggregated
              and anonymised analytics data.
            </li>
            <li>To respond to support queries and account requests.</li>
            <li>To comply with applicable law and legal obligations.</li>
          </ul>
          <p>
            The legal basis for processing is primarily the performance of a
            contract with you (providing the GraftMate service), our legitimate
            interests in improving the service, and your consent where
            applicable.
          </p>
        </section>

        <section>
          <h2>4. Data Storage</h2>
          <p>
            Your data is stored using <strong>Supabase</strong>, a database and
            authentication platform. Our Supabase project is hosted in the{" "}
            <strong>European Union (EU)</strong>. Supabase implements
            industry-standard security measures including encryption at rest and
            in transit.
          </p>
          <p>
            We retain your personal data for as long as your account is active
            or as needed to provide the service. If you close your account, we
            will delete or anonymise your data within a reasonable period,
            unless we are required to retain it by law.
          </p>
        </section>

        <section>
          <h2>5. Third-Party Processors</h2>
          <p>
            We share your data only with trusted third-party service providers
            (&ldquo;processors&rdquo;) who act on our instructions and in
            accordance with this policy. These include:
          </p>
          <ul>
            <li>
              <strong>Supabase</strong> — database, authentication, and storage.
              Data is hosted in the EU.
            </li>
            <li>
              <strong>Resend</strong> — transactional email delivery (e.g.
              account and notification emails). Resend processes your email
              address to deliver messages on our behalf.
            </li>
            <li>
              <strong>Stripe</strong> — payment processing and subscription
              management. Stripe is a PCI DSS-compliant payment processor. We do
              not store your card details; Stripe handles all payment data
              directly.
            </li>
            <li>
              <strong>Anthropic</strong> — AI processing used to generate
              quote drafts and other AI-assisted features. Relevant job
              description text is sent to Anthropic&apos;s API to produce
              output; Anthropic&apos;s data handling is governed by their
              privacy policy and enterprise data-use commitments.
            </li>
            <li>
              <strong>Google Analytics</strong> — on graftmate.net we load
              Google Analytics 4 only after you accept analytics cookies in
              our cookie banner (see section 6). The GraftMate app may use
              Google Analytics under separate notices in the application.
            </li>
            <li>
              <strong>Vercel</strong> — hosting for the marketing site and the
              GraftMate application. On graftmate.net, Vercel Web Analytics runs
              only after you accept analytics cookies; we do not rely on
              legitimate interest alone for this tool on the marketing site.
            </li>
          </ul>
          <p>
            We do not sell your personal data to third parties and we do not
            permit processors to use your data for their own purposes beyond
            delivering their service to us.
          </p>
        </section>

        <section id="cookies">
          <h2>6. Cookies</h2>
          <p>
            This section describes cookies and similar technologies on{" "}
            <strong>graftmate.net</strong> (the marketing site). The GraftMate
            application uses additional essential cookies for sign-in and
            features; those are listed below for reference.
          </p>
          <p>
            Under the UK Privacy and Electronic Communications Regulations
            (PECR) and UK GDPR, we ask for your consent before setting optional
            analytics on the marketing site. When you first visit graftmate.net,
            a cookie banner offers equally prominent <strong>Accept</strong> and{" "}
            <strong>Reject</strong> choices. Your choice is stored in your
            browser so we can remember it on later visits. You can change your
            choice at any time via <strong>Cookie settings</strong> in the site
            footer.
          </p>
          <p>
            <strong>Strictly necessary storage</strong> — we store your
            analytics choice under the key{" "}
            <code>graftmate_analytics_consent</code> in{" "}
            <code>localStorage</code> so the site can honour Accept or Reject.
            This is required to operate the consent mechanism and is not used for
            advertising.
          </p>
          <p>
            <strong>Analytics (consent required on graftmate.net)</strong> — if
            you accept analytics, we load:
          </p>
          <ul>
            <li>
              <strong>Google Analytics 4</strong> — measurement ID{" "}
              <code>G-Z4N9PVFF88</code>. Google may set cookies such as{" "}
              <code>_ga</code> and <code>_ga_&lt;container-id&gt;</code> (typically
              up to about 2 years). We use Google Consent Mode v2 with analytics
              storage denied until you accept.
            </li>
            <li>
              <strong>Vercel Web Analytics</strong> — page-view statistics for
              graftmate.net. Although Vercel describes this product as
              privacy-oriented, on this marketing site we only enable it after
              you accept analytics cookies alongside GA4, rather than treating
              it as cookieless legitimate interest.
            </li>
          </ul>
          <p>
            If you reject analytics, we do not load Google Analytics or Vercel
            Web Analytics on graftmate.net. We use no advertising cookies on the
            marketing site.
          </p>
          <p>
            <strong>Essential cookies (GraftMate app)</strong>:
          </p>
          <ul>
            <li>
              <code>sb-…-auth-token</code> — Supabase sign-in session cookies
              that keep you signed in. They may be split into several parts.
            </li>
            <li>
              <code>graftmate_native_shell</code> — marks a session started in
              the GraftMate iOS app; lasts 2 hours.
            </li>
            <li>
              <code>gmail_oauth_state</code> and{" "}
              <code>calendar_oauth_state_&lt;provider&gt;</code> — short-lived
              security cookies used while you connect a Gmail account or
              calendar.
            </li>
          </ul>
          <p>
            <strong>Device storage (not cookies)</strong> — the GraftMate app
            also keeps small preferences on your device, such as your theme,
            banners you have dismissed, and review-prompt state.
          </p>
        </section>

        <section>
          <h2>7. Your Rights Under UK GDPR</h2>
          <p>
            As a data subject under the UK General Data Protection Regulation
            (UK GDPR), you have the following rights regarding your personal
            data:
          </p>
          <ul>
            <li>
              <strong>Right of access</strong> — you can request a copy of the
              personal data we hold about you.
            </li>
            <li>
              <strong>Right to rectification</strong> — you can ask us to
              correct inaccurate or incomplete data.
            </li>
            <li>
              <strong>Right to erasure</strong> — you can ask us to delete your
              personal data where there is no legitimate reason for us to
              continue processing it.
            </li>
            <li>
              <strong>Right to data portability</strong> — you can request that
              we provide your data in a structured, commonly used,
              machine-readable format.
            </li>
            <li>
              <strong>Right to restrict processing</strong> — you can ask us to
              suspend the processing of your data in certain circumstances.
            </li>
            <li>
              <strong>Right to object</strong> — you can object to processing
              based on legitimate interests.
            </li>
          </ul>
          <p>
            To exercise any of these rights, please email us at{" "}
            <a href="mailto:info@rodortech.com">info@rodortech.com</a>. We will
            respond within 30 days. You also have the right to lodge a complaint
            with the{" "}
            <a
              href="https://ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Information Commissioner&apos;s Office (ICO)
            </a>
            .
          </p>
        </section>

        <section>
          <h2>8. Data Security</h2>
          <p>
            We take reasonable technical and organisational measures to protect
            your personal data from unauthorised access, loss, or disclosure.
            These include encrypted data storage, HTTPS for all data in transit,
            and access controls that limit who within Rodor Technologies can
            access personal data.
          </p>
        </section>

        <section>
          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will post
            any changes on this page with an updated &ldquo;last updated&rdquo;
            date. For significant changes, we will notify you by email or via a
            notice in the GraftMate application.
          </p>
        </section>

        <section>
          <h2>10. Contact</h2>
          <p>
            If you have any questions, concerns, or requests relating to this
            Privacy Policy or how Rodor Technologies handles your personal
            data, please contact us:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@rodortech.com">info@rodortech.com</a>
            </li>
            <li>
              <strong>Operator:</strong> Ross Ellner, trading as Rodor
              Technologies (sole trader)
            </li>
            <li>
              <strong>Address:</strong> Suite 861, 80A Ruskin Ave, Welling
              DA16 3QQ
            </li>
          </ul>
        </section>
      </div>

      <div className="mt-12 border-t border-border-subtle pt-8">
        <p className="text-sm text-muted-dim">
          <Link href="/terms" className="text-secondary hover:underline">
            Terms &amp; Conditions
          </Link>{" "}
          &middot;{" "}
          <Link href="/" className="text-secondary hover:underline">
            Back to GraftMate
          </Link>
        </p>
      </div>
    </div>
  );
}
