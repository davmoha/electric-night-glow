import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Star, Quote, MapPin } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews — Ethical Electrical Services" },
      { name: "description", content: "See what Tampa Bay customers say about Ethical Electrical Services. 4.9 stars from 248 Google reviews. Honest, professional, and fairly priced." },
      { property: "og:title", content: "Customer Reviews — Ethical Electrical Services" },
      { property: "og:description", content: "248 Google reviews with a 4.9 star average. Read why Tampa Bay trusts Matt at Ethical Electrical." },
    ],
  }),
  component: ReviewsPage,
});

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-bolt text-bolt" />
      ))}
    </div>
  );
}

interface Review {
  name: string;
  localGuide?: boolean;
  reviewCount?: number;
  date: string;
  priceRange?: string;
  priceLabel?: string;
  text: string;
  services?: string;
}

const REVIEWS: Review[] = [
  {
    name: "Liz Congero",
    reviewCount: 14,
    date: "3 months ago",
    priceLabel: "Reasonable price",
    priceRange: "$400–600",
    text: "Matt knows his stuff. He went above and beyond. He installed a new bathroom exhaust fan and added a new outlet for my mom. He even mounted a plug strip on the wall for her so she didn't have a mess of wires on the floor. Left the home clean and neat. He arrived on time and left us feeling confident that the job was done right. Will be using him again and would definitely recommend.",
    services: "Electrical wiring installation, Electrical outlet & switch repair, Electrical wiring repair",
  },
  {
    name: "Jacinto Torres",
    reviewCount: 7,
    date: "2 months ago",
    priceLabel: "Great price",
    priceRange: "$1–200",
    text: "Matthew was very professional and knowledgeable. He took the time out of his busy schedule to get to us quickly when we had a major issue. Work was top notch. Will definitely use him in the future for all of our electrical needs.",
    services: "Electrical inspections, Electrical wiring repair, Electrical power restoration",
  },
  {
    name: "Malachi White",
    localGuide: true,
    reviewCount: 12,
    date: "4 months ago",
    text: "Matt at Ethical Electrical is hands down my go-to electrician. He's the owner and has done several jobs for us over the years, and every experience has been great. Most recently, he installed a 240V outlet and an EV charger, and the work was done quickly, cleanly, and thoroughly.\n\nMatt is extremely knowledgeable, works efficiently, and takes the time to make sure everything is done the right way. His pricing is very fair, and I trust his work completely—which is why I keep calling him back. If you're looking for a reliable, honest electrician who does quality work, Matt is the guy to call.",
  },
  {
    name: "Thomas Smith",
    reviewCount: 7,
    date: "3 months ago",
    priceLabel: "Great price",
    priceRange: "$1,000–1,200",
    text: "Matt was quick and very professional. He did an excellent job of installing 5 ring cameras around the exterior of our house. He even crawled through a very narrow attic space to complete the job. I highly recommend him. He's great!",
    services: "Electrical wiring installation",
  },
  {
    name: "Mario Banales",
    localGuide: true,
    reviewCount: 12,
    date: "5 months ago",
    text: "I'm a real estate agent in the area and was referred to Matthew by a colleague who highly recommended him — and he absolutely lived up to it. He responded promptly, arrived exactly as scheduled, and was extremely thorough in his assessment. He walked me through everything that needed to be addressed and provided a clear breakdown of the repairs required to resolve multiple electrical issues in the home.\n\nHis work was excellent, efficient, and very reasonably priced compared to the big-name electrical companies. I'll definitely be keeping Matthew's contact for future listings, and I can confidently refer him to anyone in need of a reliable, skilled electrician.\n\nOverall, a 10/10 experience.",
  },
  {
    name: "Leon Quenan",
    localGuide: true,
    reviewCount: 30,
    date: "4 months ago",
    priceLabel: "Great price",
    text: "I was referred to Matt, owner of Ethical, by a friend to install a 50 amp hookup for portable generator use for my house. Matt showed up on time and did the installation exactly how we discussed and charged me the same price he quoted me on the phone. He hooked my generator up and showed me the process of using it and everything worked in my house when we tested it. He went over the reverse process when shutting the system off. Matt was very professional and courteous while working and his price was the best I found. His company name is a perfect fit. I was recommended to him and I recommend him to everyone else. Thank you Matt, I know now I will be able to weather the next power outage because of you.",
    services: "Electrical panel replacement or upgrading",
  },
  {
    name: "Jessica King",
    localGuide: true,
    reviewCount: 24,
    date: "4 months ago",
    priceLabel: "Great price",
    text: "Fantastic service and great prices! Matt was professional, punctual, and very knowledgeable. Everything was explained clearly, and the work was done efficiently and neatly. I will definitely be using Ethical Electrical Services again and highly recommend them to anyone needing electrical work.",
  },
  {
    name: "Steve Branson",
    localGuide: true,
    reviewCount: 15,
    date: "5 months ago",
    text: "Matt is just about the friendliest, most hard working, and knowledgeable contractor I have ever had the pleasure to work with. His prices are very reasonable and he is punctual. I would not hesitate to recommend him or hire him for more residential electrical work. Thanks Matt!",
  },
  {
    name: "K Locker",
    localGuide: true,
    reviewCount: 3,
    date: "5 months ago",
    priceLabel: "Great price",
    priceRange: "$200–400",
    text: "Matt came highly recommended to us and he did not disappoint! He fixed several issues we were having around the house and answered all of our questions. Great communication, professional, knowledgeable, fair price, and so pleasant to work with.",
  },
  {
    name: "Chuck P.",
    reviewCount: 8,
    date: "7 months ago",
    text: "Matt arrived on time, went right to work. He identified the issue with the well pump not having power and was able to repair it promptly. Kept me informed what was going on. Definitely would use again and I highly recommend him to anyone.",
  },
  {
    name: "Bill Mayer",
    reviewCount: 1,
    date: "7 months ago",
    priceLabel: "Reasonable price",
    priceRange: "$1,800–2,000",
    text: "Matt has been to my house a number of times for different projects and is always pleasant and professional. One time his wife came with him to assist with running cables through the attic, they make a great team. This last time Matt completed another excellent job.",
  },
  {
    name: "RoseAnna Robbins",
    localGuide: true,
    reviewCount: 22,
    date: "5 months ago",
    priceLabel: "Reasonable price",
    priceRange: "$2,000+",
    text: "They did an outstanding job on all the electrical in my new home. From the rough in all the way down to the hanging of the lights and fans. Good, honest and hardworking people. Great personalities, customer service was outstanding. Definitely would recommend to any and everyone. Thank you guys I truly appreciate you.",
    services: "Fan installation, Ground wire installation, Electrical inspections, Electrical wiring installation, Light fixture installation, Outdoor lighting installation",
  },
  {
    name: "Eloise Chocalas",
    localGuide: true,
    reviewCount: 39,
    date: "8 months ago",
    priceLabel: "Great price",
    priceRange: "$1,800–2,000",
    text: "Matt was recommended to me by friends. I recommended him to a neighbor. Super nice guy. Stuck to the quote, no surprises. Great communication, easy to schedule. Answered our myriad of questions. We are now set to switch our house over to generator for central Florida's next hurricane. After being powerless for 19 days following Milton, I cannot say enough about the peace of mind that Matt has allowed us.",
    services: "Electrical wiring installation",
  },
  {
    name: "Shelly Valdez",
    reviewCount: 14,
    date: "6 months ago",
    priceLabel: "Reasonable price",
    priceRange: "$400–600",
    text: "I will never call another electrical company again! I only wish I found them sooner! I am a Realtor and my clients will really benefit by having him on my list of vendors! My experience with them proves why I will always go with the smaller more personalized company versus a big box company. He was communicative, timely, and did what he said he was going to do without nickle and diming any little issue that arose while he did the job.",
  },
  {
    name: "Laura Schwartz",
    reviewCount: 2,
    date: "7 months ago",
    priceLabel: "Reasonable price",
    priceRange: "$200–400",
    text: "The word ETHICAL says it all. Matt is the owner and Electrician extraordinaire. Prompt, polite, efficient, friendly, and willing to go the extra mile without being asked, Matt wastes no time examining, assessing, and fixing all problems. He is a skilled Electrician with a heart of gold. Got an electrical problem? Call MATT. He's simply the best!",
  },
  {
    name: "Michael Hill",
    reviewCount: 6,
    date: "11 months ago",
    priceLabel: "Great price",
    text: "My wife and I highly recommend Matthew at Ethical Electrical. He came recommended to us, and we recommend him to you. Matthew was able to provide us a competitive quote quickly and was able to work with us on the installation date. He is local, very responsive, professional and his craftsmanship is very good. We are very pleased with our ability to connect our backup generator to our house power. Thank you Matthew!",
    services: "Electrical wiring installation, Electrical panel replacement or upgrading, Electrical fixture installation, Electrical power restoration, Electrical outlet & switch installation",
  },
  {
    name: "Nia Willz",
    reviewCount: 1,
    date: "9 months ago",
    text: "Matt did an outstanding job wiring my home so I can power the entire house with my generator. He was professional, knowledgeable, and walked me through everything step by step so I understood exactly how it worked. His work was clean, efficient, and reliable — I've already recommended him to both my sister and my uncle. If you're looking for someone you can trust to do the job right the first time, I highly recommend Matt!",
  },
  {
    name: "Justin Perelli",
    reviewCount: 5,
    date: "3 months ago",
    text: "Really great guy and he did a fantastic job wiring up my pool pump! Pricing was really good. Highly recommend!",
  },
  {
    name: "Beth Wagner",
    localGuide: true,
    reviewCount: 24,
    date: "9 months ago",
    text: "Matthew does quality work at a fair price. He worked with us to get exactly what we needed. He installed some extended outlets in our garage and a new outlet in our bathroom. We will be using his expertise on future projects for sure.",
  },
  {
    name: "Erro Nijjer",
    reviewCount: 7,
    date: "a year ago",
    text: "Ethical Electrical Services is the best residential electrical contractor in the Tampa bay area. I have had Matt out to my home a few times for electrical work and he has been phenomenal. He always shows up on time. He is extremely honest and provided me with a fair quote each time. In all instances he completed the work ahead of schedule and exceeded my expectations. I would not hesitate to recommend him to my friends and family.",
  },
  {
    name: "Ron Olsen",
    localGuide: true,
    reviewCount: 32,
    date: "5 months ago",
    priceLabel: "Great price",
    priceRange: "$200–400",
    text: "First time using Ethical Electrical for some work I needed completed. I could not have been more happy with the experience. On time, explained work completed in layman's terms. On top of everything the work area was cleaned up. Thank you!",
  },
  {
    name: "Deborah Sanchez",
    reviewCount: 3,
    date: "4 months ago",
    priceLabel: "Reasonable price",
    priceRange: "$1–200",
    text: "Electrical power to 1/2 of my condo was lost. Matt, owner of Ethical Electrical, worked me into his schedule, identified the problem and resolved the issue. I have light again!!!",
    services: "Electrical panel replacement or upgrading, Electrical wiring repair, Electrical power restoration",
  },
  {
    name: "Aaron L",
    reviewCount: 2,
    date: "a year ago",
    text: "We were looking for a local electrician after calling big name companies that never returned calls or emails and came across Ethical Electrical Services. Matt answered right away and was out the next day to give an estimate even with a busy schedule. He was very knowledgeable, honest, and reasonably priced for the work we wanted done. We are glad to have chosen Matt for the job as we now have a go-to electrician for any future problems or jobs. Highly recommend Ethical Electrical Services.",
  },
  {
    name: "Steve Dayton",
    reviewCount: 5,
    date: "9 months ago",
    text: "Mathew Murphy is a true professional! His work is excellent, he is courteous, trustworthy and is willing to go extra to help with understanding what was done. I highly recommend him. Ethical Electric is well named!",
  },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="rounded-xl border border-border/60 bg-card/80 p-6 backdrop-blur-sm transition hover:border-primary/30 hover:shadow-[var(--shadow-bolt)]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold uppercase text-primary">
            {review.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm">{review.name}</span>
              {review.localGuide && (
                <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                  Local Guide
                </span>
              )}
            </div>
            <div className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
              <StarRating />
              <span>· {review.date}</span>
            </div>
          </div>
        </div>
        <Quote className="h-5 w-5 shrink-0 text-primary/30" />
      </div>

      {(review.priceLabel || review.priceRange) && (
        <div className="mt-3 flex items-center gap-2">
          {review.priceLabel && (
            <span className="text-xs font-medium text-accent">{review.priceLabel}</span>
          )}
          {review.priceRange && (
            <span className="rounded-md bg-surface px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
              {review.priceRange}
            </span>
          )}
        </div>
      )}

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
        {review.text}
      </p>

      {review.services && (
        <div className="mt-4 text-[11px] text-muted-foreground/60 uppercase tracking-wider">
          {review.services}
        </div>
      )}
    </div>
  );
}

function ReviewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.72_0.16_240/0.18),_transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary">
              <MapPin className="h-3.5 w-3.5" /> Tampa Bay
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl uppercase leading-[0.95]">
              Real people, <span className="bolt-text">real results.</span>
            </h1>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="font-display text-5xl">4.9</span>
                <Star className="h-8 w-8 fill-bolt text-bolt" />
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="text-lg font-semibold">248 reviews</div>
                <div className="text-sm text-muted-foreground">Google Reviews</div>
              </div>
            </div>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Don't just take our word for it. These are real reviews from real customers across Tampa Bay — homeowners, realtors, and businesses who trust Matt with their electrical work.
            </p>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {REVIEWS.map((review, i) => (
                <ReviewCard key={i} review={review} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[color:var(--surface)]/40">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <h2 className="font-display text-3xl md:text-5xl uppercase">
              Join the <span className="bolt-text">family.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              We'd love to add your story to this wall. Call Matt and experience why Tampa Bay rates us 4.9 stars.
            </p>
            <a
              href="tel:8137508010"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-bolt)]"
            >
              Call (813) 750-8010
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
