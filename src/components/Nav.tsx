import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { identity, navItems } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";

export function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";
  const active = useActiveSection(
    navItems.map((item) => item.id),
    onHome,
  );
  const homeBase = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  const close = () => setOpen(false);

  return (
    <>
      <header className="nav">
        <Link className="nav__brand" to="/" onClick={close}>
          {identity.handle}
        </Link>
        <nav className="nav__links" aria-label="섹션">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={onHome ? item.href : `${homeBase}${item.href}`}
              className={onHome && active === item.id ? "is-active" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className="nav__mail" href={`mailto:${identity.email}`}>
          {identity.email}
        </a>
        <button
          className={`nav__toggle${open ? " is-open" : ""}`}
          type="button"
          aria-expanded={open}
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </header>
      <div className={`menu${open ? " is-open" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={onHome ? item.href : `${homeBase}${item.href}`}
            className={onHome && active === item.id ? "is-active" : undefined}
            onClick={close}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
