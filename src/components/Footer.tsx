import { identity, seoBlurb } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="shell">
        <p className="kicker">05 — Contact</p>
        <h2 className="footer__title font-display">Contact</h2>
        <p className="footer__mail">{identity.email}</p>
        <div className="footer__links">
          <a href={identity.instagramUrl} target="_blank" rel="noreferrer">
            Instagram {identity.handle}
          </a>
          <span className="footer__email">Email</span>
        </div>
        <p className="footer__seo">{seoBlurb}</p>
        <p className="footer__copy">
          © {identity.handle} {identity.year}
        </p>
      </div>
    </footer>
  );
}
