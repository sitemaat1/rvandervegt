import Image from "next/image";
import { siteConfig } from "./site-config";

const reviews = [
  {
    name: "Freek Teunen",
    text: "Na elke les krijg je cijfers, waardoor je zelf doelen kan stellen. Hierdoor ben ik eerder gemotiveerd om nog meer mijn best te doen.",
  },
  {
    name: "Wendy",
    text: "René is een gezellige rij-instructeur waardoor ik elke keer weer uitkeek naar een rijles. Ook geeft hij goed en prettig les.",
  },
] as const;

const risBenefits = [
  {
    title: "Hoger slagingspercentage",
    text: "Je oefent gericht per onderdeel. Daardoor ga je sterker en zekerder het praktijkexamen in.",
  },
  {
    title: "Stap voor stap",
    text: "Van de basis tot lastige situaties in het verkeer — in een logische volgorde die je bij kunt houden.",
  },
  {
    title: "Inzicht via je cijferkaart",
    text: "Na elke les zie je wat goed ging en waar je de volgende keer aan werkt. Zo blijf je gemotiveerd.",
  },
  {
    title: "Klaar voor het verkeer",
    text: "Je leert niet alleen voor het examen, maar om zelfstandig en veilig mee te rijden.",
  },
] as const;

const steps = [
  {
    n: "01",
    title: "Gratis proefles",
    text: "Maak kennis met René en de lesauto. Zo weet je meteen of het klikt — zonder verplichtingen.",
  },
  {
    n: "02",
    title: "Theorie op tijd",
    text: "Haal je theorie vóór je tiende rijles. Dan krijg je van René één les gratis.",
  },
  {
    n: "03",
    title: "Lessen met RIS",
    text: "Je volgt een duidelijk traject. Na elke les krijg je cijfers, zodat je zelf doelen kunt stellen.",
  },
  {
    n: "04",
    title: "Praktijkexamen",
    text: "Goed voorbereid naar het CBR. René begeleidt je tot en met die dag.",
  },
] as const;

const faq = [
  {
    question: "Wat kost een rijles?",
    answer: `Een rijles van ${siteConfig.lessonDuration} kost ${siteConfig.lessonPrice}. Het praktijkexamen kost ${siteConfig.examPrice}.`,
  },
  {
    question: "Kan ik eerst een proefles doen?",
    answer:
      "Ja, de proefles is gratis. Je maakt kennis met René, de lesauto en zijn manier van lesgeven — zonder verplichtingen.",
  },
  {
    question: "Wat houdt het actiepakket in?",
    answer: `De eerste ${siteConfig.introPackageLessons} rijlessen plus het praktijkexamen voor ${siteConfig.introPackagePrice}. Ideaal als je overzichtelijk wilt starten.`,
  },
  {
    question: "Wat is de RIS-methode?",
    answer:
      "RIS staat voor Rijopleiding In Stappen. Je leert in vaste fases, houdt je voortgang bij via een cijferkaart en bouwt systematisch toe naar het examen.",
  },
  {
    question: "Hoe zeg ik een les af?",
    answer: `Kun je er niet zijn? Bel of app dan minimaal ${siteConfig.cancellationHours} uur van tevoren. Zo kan René de les nog aan een andere leerling geven.`,
  },
  {
    question: "Waar geef je les?",
    answer: `In ${siteConfig.regionDescription}. Ophalen en terugbrengen gebeurt in overleg.`,
  },
] as const;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  name: siteConfig.name,
  url: siteConfig.url,
  telephone: siteConfig.phoneHref.replace("tel:", ""),
  email: siteConfig.email,
  foundingDate: String(siteConfig.foundedYear),
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

      <header className="site-header">
        <a className="brand" href="#top" aria-label={`${siteConfig.name}, naar boven`}>
          <Image
            src="/images/logo-original.png"
            alt={siteConfig.name}
            width={220}
            height={46}
            priority
          />
        </a>
        <nav className="desktop-nav" aria-label="Hoofdnavigatie">
          <a href="#over">Over</a>
          <a href="#prijzen">Prijzen</a>
          <a href="#ris">RIS</a>
          <a href="#lesauto">Lesauto</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button button-small header-cta" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
        <details className="mobile-menu">
          <summary aria-label="Menu openen">
            <span />
            <span />
            <span />
          </summary>
          <nav aria-label="Mobiele navigatie">
            <a href="#over">Over</a>
            <a href="#prijzen">Prijzen</a>
            <a href="#ris">RIS</a>
            <a href="#lesauto">Lesauto</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>
        </details>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <Image
            className="hero-image"
            src="/images/road-hero.jpg"
            alt="Weg door Apeldoorn en omgeving"
            fill
            sizes="100vw"
            priority
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <Image
              className="hero-plate"
              src="/images/logo-original.png"
              alt={siteConfig.name}
              width={340}
              height={72}
              priority
            />
            <h1 id="hero-title">
              Persoonlijk naar
              <br />
              je rijbewijs.
            </h1>
            <p>
              Rijlessen van René in {siteConfig.city}: {siteConfig.lessonPrice} per{" "}
              {siteConfig.lessonDuration.toLowerCase()}, een gratis proefles en begeleiding via de
              RIS-methode.
            </p>
            <div className="hero-buttons">
              <a className="button button-accent" href={siteConfig.signupUrl} target="_blank" rel="noreferrer">
                Plan gratis proefles
              </a>
              <a className="text-link light-link" href={siteConfig.phoneHref}>
                Bel {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Kerngegevens">
          <div>
            <strong>Sinds {siteConfig.foundedYear}</strong>
            <span>ervaren begeleiding</span>
          </div>
          <div>
            <strong>{siteConfig.lessonPrice}</strong>
            <span>{siteConfig.lessonDuration} per les</span>
          </div>
          <div>
            <strong>{siteConfig.rating} ★</strong>
            <span>{siteConfig.reviewCount} Google reviews</span>
          </div>
          <div>
            <strong>Gratis</strong>
            <span>proefles</span>
          </div>
        </section>

        <section className="section about-section" id="over">
          <div className="about-copy">
            <span className="eyebrow">Over de rijschool</span>
            <h2>Duidelijk lesgeven. Eerlijk bijhouden.</h2>
            <p className="lead">
              René geeft prettig en helder les in {siteConfig.city}. Na elke les krijg je cijfers,
              zodat je zelf ziet waar je staat — en wat de volgende stap is.
            </p>
            <p>
              Sinds {siteConfig.foundedYear} helpt hij leerlingen aan hun rijbewijs: rustig als dat
              nodig is, duidelijk als je verder wilt. Geen drukte, wel structuur. Kun je er een keer
              niet zijn? Meld je dan minimaal {siteConfig.cancellationHours} uur van tevoren af.
            </p>
            <blockquote>
              “Na elke les krijg je cijfers, waardoor je zelf doelen kan stellen.”
              <cite>Freek Teunen</cite>
            </blockquote>
          </div>
          <aside className="about-facts" aria-label="In het kort">
            <div>
              <strong>Sinds {siteConfig.foundedYear}</strong>
              <span>Rijlessen in {siteConfig.regionDescription}</span>
            </div>
            <div>
              <strong>RIS-methode</strong>
              <span>Stap voor stap, met cijferkaart na elke les</span>
            </div>
            <div>
              <strong>Gratis proefles</strong>
              <span>Kennismaken zonder verplichtingen</span>
            </div>
            <div>
              <strong>{siteConfig.lessonPrice}</strong>
              <span>Per les van {siteConfig.lessonDuration.toLowerCase()}</span>
            </div>
          </aside>
        </section>

        <section className="section pricing-section" id="prijzen">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Prijzen</span>
              <h2>Heldere tarieven. Geen verrassingen.</h2>
            </div>
            <p>
              Begin met een gratis proefles. Daarna kies je losse lessen of het actiepakket met
              examen.
            </p>
          </div>

          <div className="pricing-spotlight">
            <div className="pricing-spotlight-copy">
              <span className="eyebrow">Actiepakket</span>
              <h3>
                {siteConfig.introPackageLessons} rijlessen + praktijkexamen
              </h3>
              <p>
                De eerste {siteConfig.introPackageLessons} rijlessen én je praktijkexamen voor{" "}
                {siteConfig.introPackagePrice}. Tip: haal je theorie vóór je tiende les — dan krijg
                je één les gratis.
              </p>
              <a className="button button-accent" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
                Vraag dit pakket aan
              </a>
            </div>
            <div className="pricing-spotlight-price" aria-label="Actieprijs">
              <span>Actieprijs</span>
              <strong>{siteConfig.introPackagePrice}</strong>
              <small>10 lessen + examen</small>
            </div>
          </div>

          <div className="rate-row">
            <div>
              <span>Losse les · 60 min</span>
              <strong>{siteConfig.lessonPrice}</strong>
            </div>
            <div>
              <span>Praktijkexamen</span>
              <strong>{siteConfig.examPrice}</strong>
            </div>
            <div>
              <span>Proefles</span>
              <strong>Gratis</strong>
            </div>
          </div>
        </section>

        <section className="ris-section" id="ris">
          <div className="section">
            <div className="section-heading light-heading">
              <div>
                <span className="eyebrow light">RIS-methode</span>
                <h2>Rijopleiding in stappen.</h2>
              </div>
              <p>
                Structuur, motivatie en inzicht. Zo weet je steeds waar je staat — en wat er nog
                nodig is voor je examen.
              </p>
            </div>
            <div className="ris-grid">
              {risBenefits.map((item, index) => (
                <article key={item.title}>
                  <span>0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <div className="ris-badge">
              <Image src="/images/ris.jpg" alt="RIS — Rijopleiding In Stappen" width={420} height={142} />
            </div>
          </div>
        </section>

        <section className="section steps-section" id="werkwijze">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Werkwijze</span>
              <h2>Van proefles tot geslaagd.</h2>
            </div>
            <p>Vier heldere stappen. Jouw tempo, René’s begeleiding.</p>
          </div>
          <div className="steps-grid">
            {steps.map((step) => (
              <article key={step.n}>
                <span>{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section lesauto-section" id="lesauto">
          <div className="lesauto-photo">
            <Image
              src="/images/lesauto-golf.jpg"
              alt="Zwarte Volkswagen Golf van René van der Vegt met dakbord en L-teken"
              width={768}
              height={1024}
            />
            <div>
              <span className="eyebrow">De lesauto</span>
              <h2>Lessen in een Volkswagen Golf.</h2>
              <p className="lead">
                René rijdt in een zwarte Golf met instructeursspiegels en het herkenbare dakbord.
                Zo herken je de rijschool in {siteConfig.city} — en zit je comfortabel tijdens elke
                les.
              </p>
              <ul className="check-list">
                <li>Zwarte Volkswagen Golf met L-bord</li>
                <li>Extra spiegels voor veilige begeleiding</li>
                <li>Ophalen en terugbrengen in overleg</li>
              </ul>
              <a className="button button-accent" href={siteConfig.signupUrl} target="_blank" rel="noreferrer">
                Plan je proefles
              </a>
            </div>
          </div>
        </section>

        <section className="photo-statement">
          <Image src="/images/road-detail.jpg" alt="" fill sizes="100vw" />
          <div className="photo-statement-overlay" />
          <div className="section photo-statement-copy">
            <span className="eyebrow light">Lesgebied</span>
            <h2>{siteConfig.regionDescription}.</h2>
            <p>
              Twijfel je of René ook bij jou in de buurt ophaalt? App of bel even — dan kijken we
              het samen na.
            </p>
          </div>
        </section>

        <section className="section reviews-section" id="reviews">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Reviews</span>
              <h2>Wat leerlingen zeggen.</h2>
            </div>
            <a className="button button-ghost" href={siteConfig.googleReviewsUrl} target="_blank" rel="noreferrer">
              Bekijk Google reviews
            </a>
          </div>
          <div className="reviews-score">
            <strong>{siteConfig.rating}</strong>
            <div>
              <span className="stars" aria-hidden="true">
                ★★★★★
              </span>
              <p>
                Op basis van {siteConfig.reviewCount} Google reviews bij Rijschool René van der
                Vegt.
              </p>
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
              <span className="eyebrow">Vragen</span>
              <h2>Goed om te weten.</h2>
              <p>Staat je vraag er niet bij? App of bel — René helpt je graag verder.</p>
              <a className="text-link" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp {siteConfig.phoneDisplay}
              </a>
            </div>
            <div className="faq-list">
              {faq.map((item, index) => (
                <details key={item.question} open={index === 0}>
                  <summary>
                    {item.question}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-content">
            <span className="eyebrow light">Contact</span>
            <h2>Klaar voor je eerste les?</h2>
            <p className="lead">
              Bel, WhatsApp of mail. Plan je gratis proefles, of vraag naar het actiepakket van{" "}
              {siteConfig.introPackagePrice}.
            </p>
            <div className="contact-buttons">
              <a className="button button-accent" href={siteConfig.phoneHref}>
                Bel {siteConfig.phoneDisplay}
              </a>
              <a className="button button-outline" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
            <dl className="business-details">
              <div>
                <dt>Adres</dt>
                <dd>
                  {siteConfig.address}
                  <br />
                  {siteConfig.postalCode} {siteConfig.city}
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href={siteConfig.emailHref}>{siteConfig.email}</a>
                </dd>
              </div>
              <div>
                <dt>Vast</dt>
                <dd>
                  <a href={siteConfig.phoneLandlineHref}>{siteConfig.phoneLandlineDisplay}</a>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main">
          <a className="footer-brand" href="#top">
            <Image src="/images/logo-original.png" alt={siteConfig.name} width={200} height={42} />
          </a>
          <p>
            {siteConfig.slogan}. Rijles in {siteConfig.regionDescription} sinds{" "}
            {siteConfig.foundedYear}.
          </p>
          <nav className="footer-links" aria-label="Voettekst">
            <a href="#prijzen">Prijzen</a>
            <a href="#ris">RIS</a>
            <a href="#lesauto">Lesauto</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}
          </span>
          <span>
            KvK {siteConfig.kvk} · CBR {siteConfig.cbrNumber}
          </span>
        </div>
      </footer>

      <a className="mobile-cta" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
        WhatsApp
      </a>
    </>
  );
}
