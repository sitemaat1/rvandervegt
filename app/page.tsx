import Image from "next/image";
import { siteConfig } from "./site-config";

const reviews = [
  { name: "Freek Teunen", text: "Na elke les krijg je cijfers, waardoor je zelf doelen kan stellen. Daardoor ben ik eerder gemotiveerd." },
  { name: "Wendy", text: "Ren\u00e9 is een gezellige rij-instructeur. Hij geeft goed en prettig les." },
  { name: "Leerling Apeldoorn", text: "Duidelijke stappen en een fijne sfeer in de auto." },
] as const;

const faq = [
  { question: "Wat kost een les?", answer: "\u20ac 65,- voor 60 minuten. Praktijkexamen \u20ac 325,-." },
  { question: "Is er een proefles?", answer: "Ja, de proefles is gratis." },
  { question: "Wat is RIS?", answer: "Rijopleiding In Stappen: hogere slagingskans, inzicht via cijferkaart en betere verkeersvoorbereiding." },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  name: siteConfig.name,
  url: siteConfig.url,
  telephone: siteConfig.phoneHref.replace("tel:", ""),
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address,
    postalCode: siteConfig.postalCode,
    addressLocality: siteConfig.city,
    addressCountry: "NL",
  },
  areaServed: siteConfig.regionDescription,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: siteConfig.rating.replace(",", "."),
    reviewCount: String(siteConfig.reviewCount),
    bestRating: "5",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div className="announcement">
        <span>Rijles in {siteConfig.regionDescription}</span>
        <a href={siteConfig.googleReviewsUrl} target="_blank" rel="noreferrer">
          Google {siteConfig.rating} ★ · {siteConfig.reviewCount} reviews
        </a>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label={`${siteConfig.name}, naar boven`}>
          <Image src="/logo-mark.svg" alt={siteConfig.name} width={200} height={40} priority />
        </a>
        <nav className="desktop-nav" aria-label="Hoofdnavigatie">
          <a href="#over">Over ons</a>
          <a href="#werkwijze">Werkwijze</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button button-small header-cta" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
        <details className="mobile-menu">
          <summary aria-label="Menu openen"><span /><span /><span /></summary>
          <nav aria-label="Mobiele navigatie">
            <a href="#over">Over ons</a>
            <a href="#werkwijze">Werkwijze</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>
        </details>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <Image className="hero-image" src="/images/hero.jpg" alt={`Lesauto van ${siteConfig.name}`} fill sizes="100vw" priority />
          <div className="hero-overlay" />
          <div className="hero-content">
            <span className="eyebrow light">{siteConfig.slogan}</span>
            <h1 id="hero-title" dangerouslySetInnerHTML={{ __html: "Persoonlijke rijles<br /><em>in Apeldoorn.</em>" }} />
            <p>€ 65,- per les van 60 minuten. Gratis proefles, cijferkaart na elke les en de RIS-methode voor heldere voortgang.</p>
            <div className="hero-buttons">
              <a className="button button-accent" href={siteConfig.signupUrl} target="_blank" rel="noreferrer">
                Aanmelden <span aria-hidden="true">→</span>
              </a>
              <a className="text-link light-link" href={siteConfig.phoneHref}>
                Bel {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="hero-badge">
            <span>Google reviews</span>
            <strong>{siteConfig.rating} ★</strong>
          </div>
        </section>

        <section className="trust-strip" aria-label="Voordelen">
          <div><strong>{siteConfig.city}</strong><span>en omgeving</span></div>
          <div><strong>Persoonlijk</strong><span>vaste begeleiding</span></div>
          <div><strong>{siteConfig.rating} ★</strong><span>Google reviews</span></div>
          <div><strong>WhatsApp</strong><span>snel bereikbaar</span></div>
        </section>

        <section className="section about-section" id="over">
          <div className="about-copy">
            <span className="eyebrow">Over {siteConfig.shortName}</span>
            <h2>{siteConfig.slogan}.</h2>
            <p className="lead">René geeft prettig en duidelijk les, met na elke les cijfers zodat je zelf doelen stelt.</p>
            <p>Actie: de eerste 10 rijlessen + praktijkexamen voor € 795,-. Haal voor je 10e rijles je theorie en ontvang 1 gratis les.</p>
            <blockquote>“{siteConfig.slogan}.”</blockquote>
          </div>
          <div className="about-media">
            <Image src="/images/about.jpg" alt={siteConfig.name} fill sizes="(max-width: 860px) 100vw, 44vw" />
            <div className="photo-label">
              <span>Gevestigd in</span>
              <strong>{siteConfig.city}</strong>
            </div>
          </div>
        </section>

        <section className="dark-section" id="werkwijze">
          <div className="section">
            <div className="section-heading dark-heading">
              <div>
                <span className="eyebrow light">Waarom wij</span>
                <h2>Duidelijk.<br />Persoonlijk.<br />Resultaatgericht.</h2>
              </div>
              <p>Alles wat je nodig hebt om met vertrouwen je rijbewijs te behalen.</p>
            </div>
            <div className="benefit-grid">
              <article>
                <span className="benefit-number">01</span>
                <h3>Gratis proefles</h3>
                <p>Eerst kennismaken.</p>
              </article>
              <article>
                <span className="benefit-number">02</span>
                <h3>RIS-methode</h3>
                <p>Stap voor stap met cijferkaart.</p>
              </article>
              <article>
                <span className="benefit-number">03</span>
                <h3>€ 65,- / 60 min</h3>
                <p>Praktijkexamen € 325,-.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="photo-statement">
          <Image src="/images/hero.jpg" alt="" fill sizes="100vw" />
          <div className="photo-statement-overlay" />
          <div className="section photo-statement-copy">
            <span className="eyebrow light">Lesgebied</span>
            <h2>{siteConfig.regionDescription}.</h2>
            <p>Bel of WhatsApp ons om te horen of we ook bij jou in de buurt lesgeven.</p>
          </div>
        </section>

        <section className="section reviews-section" id="reviews">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Reviews</span>
              <h2>Wat leerlingen zeggen.</h2>
            </div>
            <a className="button button-outline-dark" href={siteConfig.googleReviewsUrl} target="_blank" rel="noreferrer">
              Bekijk Google reviews <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="reviews-score">
            <strong>{siteConfig.rating}</strong>
            <div>
              <span className="stars" aria-hidden="true">★★★★★</span>
              <p>Op basis van {siteConfig.reviewCount} reviews.</p>
            </div>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <blockquote key={review.name}>
                <p>“{review.text}”</p>
                <cite>{review.name}</cite>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="faq-section" id="vragen">
          <div className="section faq-layout">
            <div className="faq-intro">
              <span className="eyebrow">Goed om te weten</span>
              <h2>Veelgestelde vragen.</h2>
              <a className="text-link" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp {siteConfig.phoneDisplay} <span>→</span>
              </a>
            </div>
            <div className="faq-list">
              {faq.map((item, index) => (
                <details key={item.question} open={index === 0}>
                  <summary>{item.question}<span aria-hidden="true">+</span></summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-media">
            <Image src="/images/about.jpg" alt={siteConfig.name} fill sizes="(max-width: 860px) 100vw, 48vw" />
          </div>
          <div className="contact-content">
            <span className="eyebrow light">Klaar om te starten?</span>
            <h2>Neem contact op.</h2>
            <p className="lead">Bel, WhatsApp of mail — we helpen je graag verder.</p>
            <div className="contact-buttons">
              <a className="button button-accent" href={siteConfig.phoneHref}>Bel {siteConfig.phoneDisplay}</a>
              <a className="button button-outline" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
            <dl className="business-details">
              <div>
                <dt>Adres</dt>
                <dd>{siteConfig.address}<br />{siteConfig.postalCode} {siteConfig.city}</dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd><a href={siteConfig.emailHref}>{siteConfig.email}</a></dd>
              </div>
              <div>
                <dt>Google</dt>
                <dd>
                  <a href={siteConfig.googleReviewsUrl} target="_blank" rel="noreferrer">
                    {siteConfig.rating} ★ · reviews bekijken
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main">
          <a className="footer-brand" href="#top">
            <Image src="/logo-mark.svg" alt={siteConfig.name} width={200} height={40} />
          </a>
          <p>{siteConfig.slogan}. Rijles in {siteConfig.regionDescription}.</p>
          <nav className="footer-links" aria-label="Voettekst">
            <a href="#over">Over ons</a>
            <a href="#reviews">Reviews</a>
            <a href={siteConfig.googleReviewsUrl} target="_blank" rel="noreferrer">Google reviews</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {siteConfig.name}</span>
          <span className="legal-links">
            <a href={siteConfig.privacyUrl} target="_blank" rel="noreferrer">Privacy</a>
            <a href={siteConfig.contactUrl} target="_blank" rel="noreferrer">Contact</a>
          </span>
        </div>
      </footer>

      <a className="mobile-cta" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
        WhatsApp <span aria-hidden="true">→</span>
      </a>
    </>
  );
}
