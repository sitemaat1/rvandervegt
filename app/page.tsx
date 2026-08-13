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
    text: "Van de eerste meters tot lastige situaties in Apeldoorn — in een volgorde die je bij kunt houden.",
  },
  {
    title: "Cijfers na elke les",
    text: "Je ziet meteen wat goed ging en waar je de volgende keer aan werkt. Zo blijf je scherp.",
  },
  {
    title: "Klaar voor het verkeer",
    text: "Je leert niet alleen voor het CBR, maar om zelfstandig en veilig mee te rijden.",
  },
] as const;

const steps = [
  {
    n: "01",
    title: "Gratis proefles",
    text: "Stap in bij René. Je merkt meteen of het klikt — zonder verplichtingen.",
  },
  {
    n: "02",
    title: "Theorie op tijd",
    text: "Haal je theorie vóór je tiende rijles. Dan krijg je van René één les gratis.",
  },
  {
    n: "03",
    title: "Lessen met RIS",
    text: "Elke les een duidelijk doel. Elke les cijfers. Jij ziet waar je staat.",
  },
  {
    n: "04",
    title: "Praktijkexamen",
    text: "Goed voorbereid naar het CBR in Apeldoorn. René gaat mee tot die dag.",
  },
] as const;

const faq = [
  {
    question: "Wat kost een rijles?",
    answer: `Een rijles van 60 minuten kost ${siteConfig.lessonPrice}. Het praktijkexamen kost ${siteConfig.examPrice}.`,
  },
  {
    question: "Kan ik eerst een proefles doen?",
    answer:
      "Ja. De proefles is gratis. Je maakt kennis met René, de lesauto en zijn manier van lesgeven — zonder verplichtingen.",
  },
  {
    question: "Wat houdt het actiepakket in?",
    answer: `De eerste ${siteConfig.introPackageLessons} rijlessen plus het praktijkexamen voor slechts ${siteConfig.introPackagePrice}.`,
  },
  {
    question: "Wat is de RIS-methode?",
    answer:
      "RIS staat voor Rijopleiding In Stappen. Je leert in vaste fases, houdt je voortgang bij via een cijferkaart en bouwt systematisch toe naar het examen.",
  },
  {
    question: "Hoe zeg ik een les af?",
    answer: `Bij verhindering van een les minimaal ${siteConfig.cancellationHours} uur van tevoren afbellen. Zo kan René de les nog aan een andere leerling geven.`,
  },
  {
    question: "Waar geef je les?",
    answer: `In ${siteConfig.regionDescription}. Ophalen en terugbrengen gebeurt in overleg.`,
  },
] as const;

const gallery = [
  {
    src: "/images/gallery/rene-thumbs.jpg",
    alt: "Leerling bij de lesauto van Rijschool René van der Vegt",
    caption: "Klaar voor de les",
  },
  {
    src: "/images/gallery/geslaagd-max.jpg",
    alt: "Geslaagd: Max Voorberg bij de lesauto van René van der Vegt",
    caption: "Geslaagd — Max Voorberg",
  },
  {
    src: "/images/gallery/geslaagd-1.jpg",
    alt: "Geslaagde leerling naast de Volkswagen Golf van René",
    caption: "Geslaagd in Apeldoorn",
  },
  {
    src: "/images/gallery/lesauto-zilver.jpg",
    alt: "Geslaagde leerling bij de Volkswagen Golf van René van der Vegt",
    caption: "Geslaagd bij René",
  },
  {
    src: "/images/gallery/geslaagd-2.jpg",
    alt: "Geslaagde leerling achter de lesauto van Rijschool van der Vegt",
    caption: "Weer een rijbewijs erbij",
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
            preload
          />
        </a>
        <nav className="desktop-nav" aria-label="Hoofdnavigatie">
          <a href="#over">Over René</a>
          <a href="#prijzen">Prijzen</a>
          <a href="#geslaagd">Geslaagd</a>
          <a href="#ris">RIS</a>
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
            <a href="#over">Over René</a>
            <a href="#prijzen">Prijzen</a>
            <a href="#geslaagd">Geslaagd</a>
            <a href="#ris">RIS</a>
            <a href="#contact">Contact</a>
          </nav>
        </details>
      </header>

      <main id="top">
        <aside className="promo-bar" aria-label="Acties">
          <p>
            <strong>Actie</strong>
            De eerste 10 rijlessen + praktijkexamen voor slechts {siteConfig.introPackagePrice}
          </p>
          <p>
            <strong>Theorie</strong>
            Haal voor je 10e rijles je theorie en ontvang 1 gratis les!
          </p>
        </aside>

        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-kicker">Autorijschool in Apeldoorn · sinds {siteConfig.foundedYear}</p>
            <h1 id="hero-title">
              Rijles bij <em>René</em>.
            </h1>
            <p className="hero-lead">
              Geen anonieme rijschool. Sinds {siteConfig.foundedYear} haalt René leerlingen op in{" "}
              {siteConfig.city} — één op één, in zijn Golf. Gezellig, duidelijk, en na elke les je
              cijfers.
            </p>
            <div className="hero-buttons">
              <a className="button button-accent" href={siteConfig.signupUrl} target="_blank" rel="noreferrer">
                Plan een gratis proefles
              </a>
              <a className="text-link" href={siteConfig.phoneHref}>
                Bel {siteConfig.phoneDisplay}
              </a>
            </div>
            <ul className="hero-facts">
              <li>
                <strong>{siteConfig.lessonPrice}</strong>
                <span>per les 60 min.</span>
              </li>
              <li>
                <strong>Gratis</strong>
                <span>proefles</span>
              </li>
              <li>
                <strong>{siteConfig.rating} ★</strong>
                <span>{siteConfig.reviewCount} Google reviews</span>
              </li>
            </ul>
          </div>
          <div className="hero-photo">
            <Image
              src="/images/lesauto-golf.jpg"
              alt="Zwarte Volkswagen Golf van René van der Vegt met dakbord R.vanderVEGT en L-teken"
              fill
              sizes="(max-width: 860px) 100vw, 48vw"
              preload
            />
            <p className="hero-photo-caption">De lesauto van René — Volkswagen Golf</p>
          </div>
        </section>

        <section className="section about-section" id="over">
          <div className="about-photos">
            <figure className="about-portrait">
              <Image
                src="/images/rene.jpg"
                alt="René van der Vegt bij zijn lesauto"
                width={278}
                height={264}
              />
              <figcaption>René van der Vegt</figcaption>
            </figure>
            <figure className="about-car">
              <Image
                src="/images/rene-en-auto.jpg"
                alt="Eerdere lesauto van Rijschool R. van der Vegt met kenteken R-VD-VEGT"
                width={500}
                height={331}
              />
              <figcaption>Herkenbaar in Apeldoorn sinds {siteConfig.foundedYear}</figcaption>
            </figure>
          </div>
          <div className="about-copy">
            <span className="eyebrow">Over de rijschool</span>
            <h2>Eén instructeur. Jouw tempo. Eerlijke cijfers.</h2>
            <p className="lead">
              René geeft les zoals hij zelf graag les had willen krijgen: rustig als dat nodig is,
              scherp als je verder wilt. Geen drukte, wel structuur.
            </p>
            <p>
              Sinds {siteConfig.foundedYear} rijdt hij met leerlingen door {siteConfig.regionDescription}.
              Je krijgt les volgens de RIS-methode — Rijopleiding In Stappen — en na elke les een
              cijferkaart. Zo zie je zelf waar je staat, en wat de volgende stap is.
            </p>
            <blockquote>
              “René is een gezellige rij-instructeur waardoor ik elke keer weer uitkeek naar een
              rijles.”
              <cite>Wendy</cite>
            </blockquote>
          </div>
        </section>

        <section className="section pricing-section" id="prijzen">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Prijzen</span>
              <h2>Helder. Geen kleine lettertjes.</h2>
            </div>
            <p>
              Begin met een gratis proefles. Daarna kies je losse lessen of het actiepakket met
              examen.
            </p>
          </div>

          <div className="price-grid">
            <article className="price-card featured">
              <span className="price-label">Actie</span>
              <h3>10 rijlessen + praktijkexamen</h3>
              <p className="price-amount">{siteConfig.introPackagePrice}</p>
              <p>
                De eerste 10 rijlessen + praktijkexamen voor slechts {siteConfig.introPackagePrice}.
                Tip: haal voor je 10e rijles je theorie en ontvang 1 gratis les.
              </p>
              <a className="button button-ink" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
                Vraag dit pakket aan
              </a>
            </article>
            <article className="price-card">
              <span className="price-label">Losse les</span>
              <h3>60 minuten</h3>
              <p className="price-amount">{siteConfig.lessonPrice}</p>
              <p>€ 65,- per les 60 min. Ophalen en terugbrengen in overleg.</p>
            </article>
            <article className="price-card">
              <span className="price-label">Examen</span>
              <h3>Praktijkexamen</h3>
              <p className="price-amount">{siteConfig.examPrice}</p>
              <p>Praktijkexamen: € 325,-. René begeleidt je tot en met die dag.</p>
            </article>
            <article className="price-card">
              <span className="price-label">Kennismaken</span>
              <h3>Proefles</h3>
              <p className="price-amount">Gratis</p>
              <p>Gratis proefles. Bel of app — dan plannen we een moment.</p>
            </article>
          </div>
        </section>

        <section className="gallery-section" id="geslaagd">
          <div className="section">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Geslaagd</span>
                <h2>Gezichten bij de Golf.</h2>
              </div>
              <p>
                Na het examen een foto bij de lesauto — zo viert René het. Meer foto’s staan op
                Facebook.
              </p>
            </div>
            <div className="gallery-grid">
              {gallery.map((item) => (
                <figure key={item.src}>
                  <div className="gallery-frame">
                    <Image src={item.src} alt={item.alt} fill sizes="(max-width: 860px) 50vw, 20vw" />
                  </div>
                  <figcaption>{item.caption}</figcaption>
                </figure>
              ))}
            </div>
            <a className="button button-ghost" href={siteConfig.facebookUrl} target="_blank" rel="noreferrer">
              Meer foto’s op Facebook
            </a>
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
                René rijdt in een Golf met instructeursspiegels en het herkenbare dakbord. Zo
                herken je de rijschool in {siteConfig.city} — en zit je comfortabel tijdens elke les.
              </p>
              <ul className="check-list">
                <li>Volkswagen Golf met L-bord</li>
                <li>Extra spiegels voor veilige begeleiding</li>
                <li>Ophalen en terugbrengen in overleg</li>
              </ul>
              <a className="button button-accent" href={siteConfig.signupUrl} target="_blank" rel="noreferrer">
                Plan je proefles
              </a>
            </div>
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
              <a className="button button-outline" href={siteConfig.emailHref}>
                {siteConfig.email}
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
                <dt>Telefoon</dt>
                <dd>
                  <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href={siteConfig.emailHref}>{siteConfig.email}</a>
                </dd>
              </div>
              <div>
                <dt>Afmelden</dt>
                <dd>
                  Bij verhindering van een les minimaal {siteConfig.cancellationHours} uur van
                  tevoren afbellen.
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
            <a href="#geslaagd">Geslaagd</a>
            <a href="#ris">RIS</a>
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
