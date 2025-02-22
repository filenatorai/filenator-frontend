import Link from "next/link"
export function CTASection() {
  return (
    <section className="bg-primary/5 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-muted-foreground mb-8">
          Join thousands of users who trust our platform
        </p>
        <Link 
          href="/signup" 
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}