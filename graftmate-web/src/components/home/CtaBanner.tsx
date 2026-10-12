import { AppStoreBadge } from "@/components/ui/AppStoreBadge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SIGNUP_URL } from "@/lib/urls";

type CtaBannerProps = {
  title?: string;
  description?: string;
  showBrowserNote?: boolean;
};

export function CtaBanner({
  title = "Send your next quote from your phone",
  description = `14-day free trial from sign-up – no card needed. Then £29.99/month. Describe a real job and see how fast you can quote it.`,
  showBrowserNote = true,
}: CtaBannerProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
      <Card className="px-6 py-12 text-center sm:px-12 sm:py-16">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-muted">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4">
          <Button href={SIGNUP_URL} size="lg">
            Start free →
          </Button>
          <AppStoreBadge showBrowserNote={showBrowserNote} />
        </div>
        <p className="mt-4 text-sm text-muted-dim">Cancel anytime · UK support</p>
      </Card>
    </section>
  );
}
