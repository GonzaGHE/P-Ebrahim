import React, { useEffect, useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import {
  ShieldCheck,
  Truck,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Menu,
  X,
  Brain,
  Smile,
  Moon,
  Heart,
  Zap,
  Utensils,
  Scale,
  Info,
  Award,
  Check,
  Instagram,
  Briefcase,
  User,
} from "lucide-react";
import emailjs from "@emailjs/browser";

// Import Assets
import logoImg from "./assets/logo.png";
import headerBg from "./assets/header-bg.jpg";

// --- UTILITAIRES ---
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// --- COMPOSANTS FIXES ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Bar - Contact & Pro */}
      <div className="top-bar">
        <div className="container top-bar-flex">
          <div className="top-bar-info">
            <span>
              <Mail size={14} color="var(--color-green)" />{" "}
              info@ebrahimi-group.ch
            </span>
            <span>
              <Phone size={14} color="var(--color-green)" /> +41 78 268 44 84
            </span>
            <a 
              href="https://www.instagram.com/ebrahimigroup.ch/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }}
            >
              <Instagram size={14} color="var(--color-green)" /> Instagram
            </a>
          </div>
          <div>
            <Link to="/b2b" className="top-bar-link">
              Espace Pro <Truck size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav>
        <div className="container nav-flex">
          <Link to="/" className="logo-container">
            <img src={logoImg} alt="Ebrahimi Group" className="nav-logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="nav-links desktop-only">
            <Link to="/">Accueil</Link>
            <Link to="/about">À Propos</Link>
            <Link to="/benefits">Les Bienfaits</Link>
            <Link to="/products">Nos Produits</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={28} color="var(--color-black)" />
            ) : (
              <Menu size={28} color="var(--color-black)" />
            )}
          </button>

          {/* Mobile Dropdown */}
          <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
            <Link to="/">Accueil</Link>
            <Link to="/about">À Propos</Link>
            <Link to="/benefits">Les Bienfaits</Link>
            <Link to="/products">Nos Produits</Link>
            <Link to="/b2b">Espace Pro</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-grid">
        {/* Colonne 1 : Marque */}
        <div className="footer-col">
          <h3 className="footer-logo">EBRAHIMI GROUP</h3>
          <p className="footer-desc">
            Importateur et distributeur suisse de safran premium. Une qualité
            sans compromis, de la terre à l'assiette.
          </p>
        </div>

        {/* Colonne 2 : Navigation */}
        <div className="footer-col">
          <h4 className="footer-title">Navigation</h4>
          <ul className="footer-links">
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/benefits">Les Bienfaits</Link>
            </li>
            <li>
              <Link to="/products">Nos Produits</Link>
            </li>
            <li>
              <Link to="/b2b">Espace Pro</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Colonne 3 : Contact */}
        <div className="footer-col">
          <h4 className="footer-title">Contact</h4>
          <ul className="footer-contact">
            <li>
              <MapPin size={18} color="var(--color-gold)" /> Suisse
            </li>
            <li>
              <Mail size={18} color="var(--color-gold)" />
              info@ebrahimi-group.ch
            </li>
            <li>
              <Phone size={18} color="var(--color-gold)" />
              +41 78 268 44 84
            </li>
            <li>
              <a 
                href="https://www.instagram.com/ebrahimigroup.ch/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: "inherit", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}
              >
                <Instagram size={18} color="var(--color-gold)" />
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Colonne 4 : Citation */}
        <div
          className="footer-col"
          style={{ display: "flex", alignItems: "center" }}
        >
          <p className="footer-quote">
            "Derrière chaque filament de safran, il y a une terre, un
            savoir-faire et des mains qui travaillent avec patience et dignité."
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Ebrahimi Group. Tous droits réservés.
        </span>
      </div>
    </div>
  </footer>
);

// --- PAGES ---

const Home = () => (
  <>
    {/* HERO SECTION */}
    {/* HERO SECTION */}
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${headerBg})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <span className="hero-surtitle">DISTRIBUTEUR OFFICIEL</span>
        <h1 className="hero-title">
          SAFRAN PREMIUM
          <br />& ÉPICERIE FINE
        </h1>
        <p className="hero-subtitle">
          Le lien direct entre les terroirs d'exception et la gastronomie
          suisse.
          <br />
          Importation éthique, Grade 1 (ISO 3632) et traçabilité totale.
        </p>
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link to="/products" className="btn btn-primary">
            Découvrir la Collection
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Devenir Partenaire
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div
          style={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "0.8rem",
            opacity: 0.8,
          }}
        >
          <span
            style={{
              marginBottom: "10px",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Explorer
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
    </div>

    {/* INTRO SERIEUSE */}
    <section>
      <div className="container text-center">
        <h2 className="section-title">
          Excellence Suisse et Origine Certifiée
        </h2>
        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "1.1rem",
            color: "var(--color-text-light)",
          }}
        >
          Ebrahimi Group est une entreprise basée en Suisse, à Lausanne
          spécialisée dans l’importation et la distribution de safran premium
          provenant de Herat, en Afghanistan. Nous proposons du safran en
          pistils entiers, certifié Grade 1 (ISO 3632), destiné aussi bien aux
          particuliers qu’aux restaurants, pâtisseries, épiceries fines et
          professionnels de la gastronomie en Suisse. Si vous recherchez où
          acheter du safran premium à Lausanne ou en Suisse, Ebrahimi Group
          propose une sélection de haute qualité avec traçabilité et livraison
          rapide.
        </p>
        <div className="features-grid">
          <div className="feature-item">
            <ShieldCheck size={40} className="text-gold" />
            <p>Grade 1 (ISO 3632)</p>
          </div>
          <div className="feature-item">
            <Leaf size={40} className="text-green" />
            <p>Agriculture Raisonnée</p>
          </div>
          <div className="feature-item">
            <Truck size={40} className="text-gold" />
            <p>Logistique Suisse</p>
          </div>
        </div>
      </div>
    </section>
  </>
);

const About = () => (
  <section className="section-commitment">
    <div className="container">
      {/* Notre Engagement */}
      <div className="commitment-header text-center mb-40">
        <h1 className="section-title">Notre Engagement</h1>
        <p className="lead-text">
          Chez Ebrahimi Group, nous croyons qu’un produit de qualité commence
          par le respect de l’humain et du travail agricole.
        </p>
      </div>

      <div className="commitment-wrapper">
        <div className="commitment-text">
          {/* Histoire */}
          <h3
            className="text-gold"
            style={{ marginBottom: "20px", fontFamily: "var(--font-heading)" }}
          >
            Notre Histoire
          </h3>
          <p>
            Né en Afghanistan et installé en Suisse, notre fondateur connaît à
            la fois la richesse agricole du pays d’origine et les exigences
            élevées du marché suisse.
            <br />
            Ebrahimi Group est né d’une vision simple : offrir un safran
            authentique, éthique et d’une qualité irréprochable.
          </p>

          <div
            style={{
              width: "60px",
              height: "2px",
              background: "var(--color-gold)",
              margin: "40px auto",
              opacity: 0.5,
            }}
          ></div>

          {/* Safran Premium */}
          <h3
            className="text-gold"
            style={{
              marginBottom: "20px",
              fontFamily: "var(--font-heading)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Award size={28} /> Safran Premium – Qualité Supérieure d’Herat,
            Afghanistan
          </h3>
          <p>
            <strong>Pour les exigences les plus élevées</strong>
            <br />
            <br />
            Le safran Ebrahimi Group provient des hautes terres ensoleillées
            d’Herat, une région reconnue mondialement comme l’un des berceaux
            historiques du safran de qualité supérieure. Récolté à la main, brin
            par brin, notre safran ne contient que les pistils entiers issus de
            la partie la plus aromatique du Crocus Sativus.
            <br />
            <br />
            Séché lentement selon une méthode traditionnelle et contrôlée, il se
            distingue par :
          </p>
          <ul
            style={{
              listStyle: "none",
              paddingLeft: 0,
              marginTop: "10px",
              marginBottom: "15px",
            }}
          >
            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "8px",
              }}
            >
              <Check size={18} className="text-gold" /> une couleur rouge
              intense,
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "8px",
              }}
            >
              <Check size={18} className="text-gold" /> un parfum riche et
              épicé,
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "8px",
              }}
            >
              <Check size={18} className="text-gold" /> une puissance aromatique
              exceptionnelle,
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "8px",
              }}
            >
              <Check size={18} className="text-gold" /> une pureté garantie sans
              additifs, ni colorants, ni conservateurs.
            </li>
          </ul>
          <p>
            Grâce à sa forte teneur en crocine, picrocrocine et safranal, notre
            safran développe une couleur brillante, une saveur subtile et un
            arôme unique, idéal pour enrichir vos recettes de riz, vos thés, vos
            desserts, vos bouillons et vos plats raffinés.
          </p>

          <div
            style={{
              width: "60px",
              height: "2px",
              background: "var(--color-gold)",
              margin: "40px auto",
              opacity: 0.5,
            }}
          ></div>

          {/* Producteurs */}
          <h3
            className="text-gold"
            style={{ marginBottom: "20px", fontFamily: "var(--font-heading)" }}
          >
            Nos Producteurs
          </h3>
          <p>
            Nous collaborons avec des producteurs sélectionnés en Afghanistan.
            <br />
            Nous soutenons également l’activité de femmes engagées dans les
            étapes de récolte et de transformation, renforçant l’économie
            locale.
          </p>

          <div
            style={{
              width: "60px",
              height: "2px",
              background: "var(--color-gold)",
              margin: "40px auto",
              opacity: 0.5,
            }}
          ></div>

          {/* Philosophie */}
          <h3
            className="text-gold"
            style={{ marginBottom: "20px", fontFamily: "var(--font-heading)" }}
          >
            Notre Philosophie
          </h3>
          <p>
            Pour nous, la qualité du produit final dépend de la qualité de vie
            de ceux qui le cultivent.
            <br />
            Chaque filament reflète un savoir-faire, une tradition et un profond
            respect de la terre.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const productsData = [
  {
    id: "safran-1g",
    title: "Éclat de Safran - 1g",
    category: "safran",
    image: "/1gramme.webp",
    description: "L'excellence pour votre cuisine quotidienne. Pureté certifiée ISO 3632.",
    specs: [
      "Safran filaments entiers",
      "Grade 1 (ISO 3632)",
      "Origine : Afghanistan, Herat"
    ],
    pricing: {
      particulier: {
        price: "16.90 CHF",
        unit: "le pot"
      },
      professionnel: {
        text: "Tarifs adaptés à vos volumes de commande. Conditionnements professionnels disponibles (dès 10g).",
        cta: "Demander un devis Pro"
      }
    }
  },
  {
    id: "safran-2g",
    title: "Trésor de Safran - 2g",
    category: "safran",
    image: "/2gramme.webp",
    description: "Le format idéal pour les connaisseurs. Arôme intense et couleur profonde.",
    specs: [
      "Safran filaments entiers",
      "Grade 1 (ISO 3632)",
      "Origine : Afghanistan, Herat"
    ],
    pricing: {
      particulier: {
        price: "29.90 CHF",
        unit: "le pot"
      },
      professionnel: {
        text: "Tarifs adaptés à vos volumes de commande. Conditionnements professionnels disponibles (dès 10g).",
        cta: "Demander un devis Pro"
      }
    }
  },
  {
    id: "nutella-25g",
    title: "Nutella® - 25g",
    category: "epicerie",
    image: "/nutella_25g.png",
    description: "Le format individuel iconique en verre, idéal pour vos buffets, petits-déjeuners d'hôtel ou corbeilles d'accueil.",
    specs: [
      "Format individuel en verre (25g)",
      "Parfait pour l'hôtellerie, restauration et traiteurs",
      "Présentation soignée et hygiène garantie"
    ],
    pricing: {
      particulier: {
        tiers: [
          { label: "1 pot (25 g)", price: "1.05 CHF" },
          { label: "1 carton (64 pièces)", price: "56.00 CHF" }
        ]
      },
      professionnel: {
        text: "Vous êtes un professionnel ? Contactez-nous pour recevoir un devis personnalisé et bénéficier de tarifs adaptés à vos volumes d’achat.",
        cta: "Demander un devis personnalisé"
      }
    }
  }
];

const Products = () => {
  const [profile, setProfile] = useState("pro"); // 'pro' by default as per user request to emphasize pros
  const [category, setCategory] = useState("all");

  const filteredProducts = productsData.filter(
    (product) => category === "all" || product.category === category
  );

  return (
    <div style={{ backgroundColor: "white" }} className="page-header-spacer">
      <section className="container" style={{ paddingBottom: "40px" }}>
        <div className="text-center">
          <h1 className="section-title">Notre Collection</h1>
          <p className="section-subtitle">
            DES PRODUITS D'EXCEPTION POUR PROFESSIONNELS ET PARTICULIERS
          </p>

          {/* Profile Switcher */}
          <div className="profile-toggle-wrapper">
            <span className="profile-toggle-intro">Sélectionnez votre espace :</span>
            <div className="profile-toggle-container">
              <button
                className={`profile-toggle-btn ${profile === "pro" ? "active" : ""}`}
                onClick={() => setProfile("pro")}
              >
                <Briefcase size={16} /> Espace Professionnel
              </button>
              <button
                className={`profile-toggle-btn ${profile === "particulier" ? "active" : ""}`}
                onClick={() => setProfile("particulier")}
              >
                <User size={16} /> Espace Particulier
              </button>
            </div>
          </div>

          {/* Professional Target Banner (Shown only when Professional profile is active) */}
          {profile === "pro" && (
            <div className="pro-target-banner">
              <h3 className="pro-target-title">Partenaire des Métiers de la Bouche & de l'Hébergement</h3>
              <div className="pro-target-sectors">
                <span>Hôtels</span> • <span>Cafés</span> • <span>Restaurants</span> • <span>Boulangeries</span> • <span>Traiteurs</span> • <span>Entreprises</span> • <span>Revendeurs</span>
              </div>
              <p className="pro-target-desc">
                Nous accompagnons les établissements exigeants en Suisse en leur fournissant des produits d'exception.
                Bénéficiez de conditions d'achat adaptées à votre activité et de volumes flexibles.
              </p>
            </div>
          )}

          {/* Category Filters */}
          <div className="category-filters-container">
            <button
              className={`category-filter-btn ${category === "all" ? "active" : ""}`}
              onClick={() => setCategory("all")}
            >
              Tous les produits
            </button>
            <button
              className={`category-filter-btn ${category === "safran" ? "active" : ""}`}
              onClick={() => setCategory("safran")}
            >
              Safran d'exception
            </button>
            <button
              className={`category-filter-btn ${category === "epicerie" ? "active" : ""}`}
              onClick={() => setCategory("epicerie")}
            >
              Épicerie Fine
            </button>
          </div>

          {/* SHIPPING INFO BANNER (Shown for particulars or general context) */}
          {profile === "particulier" && (
            <div
              style={{
                background: "#f9fbf7",
                border: "1px solid #e0e0e0",
                borderRadius: "4px",
                padding: "20px",
                margin: "0 auto 40px",
                maxWidth: "600px",
                fontSize: "0.95rem",
                color: "#555",
              }}
            >
              <div
                style={{
                  fontWeight: "600",
                  color: "var(--color-green)",
                  marginBottom: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                <Truck
                  size={18}
                  style={{ marginBottom: "-4px", marginRight: "8px" }}
                />{" "}
                Informations Livraison
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  <ShieldCheck size={16} color="var(--color-gold)" />{" "}
                  <span>
                    Livraison <strong>GRATUITE</strong> dès 39 CHF d'achat
                  </span>
                </div>
                <div>• Frais de port : 12 CHF (si commande inférieure)</div>
                <div>• Délai : 1 à 2 jours ouvrables</div>
              </div>
            </div>
          )}
        </div>

        {/* Dynamic Product Grid */}
        <div className="product-grid">
          {filteredProducts.map((product) => {
            const isPro = profile === "pro";
            const contactState = {
              subject: isPro ? "Demande de tarifs (Pro)" : "Commande Particulier",
              message: isPro
                ? `Bonjour, je suis intéressé par votre produit "${product.title}" en tant que professionnel. J'aimerais recevoir un devis personnalisé pour mon établissement.\n\nType d'établissement : [Hôtel / Café / Restaurant / Boulangerie / Traiteur / Entreprise / Revendeur]\nVolume estimé : `
                : `Bonjour, je souhaite commander le produit "${product.title}" en tant que particulier.\n\nQuantité souhaitée : \nAdresse de livraison : `
            };

            return (
              <Link
                key={product.id}
                to="/contact"
                state={contactState}
                className="product-card"
              >
                <div className="packshot-container">
                  <img src={product.image} alt={product.title} className="packshot-img" />
                </div>
                <div className="product-meta">
                  <h3 className="product-title">{product.title}</h3>

                  <ul
                    style={{
                      textAlign: "left",
                      margin: "0 auto 20px",
                      maxWidth: "90%",
                      fontSize: "0.9rem",
                      color: "#555",
                      listStyle: "none",
                      paddingLeft: 0,
                    }}
                  >
                    {product.specs.map((spec, idx) => (
                      <li key={idx} style={{ marginBottom: "5px" }}>
                        • {spec}
                      </li>
                    ))}
                  </ul>

                  <p className="product-desc">{product.description}</p>

                  <div className="pricing-container" style={{ marginTop: "20px" }}>
                    {isPro ? (
                      <div className="pro-pricing-view">
                        <p className="pro-pricing-mention">
                          {product.pricing.professionnel.text}
                        </p>
                        <div className="btn btn-primary" style={{ marginTop: "15px", width: "100%" }}>
                          {product.pricing.professionnel.cta} <Mail size={16} />
                        </div>
                      </div>
                    ) : (
                      <div className="particulier-pricing-view">
                        {product.pricing.particulier.price ? (
                          <div
                            style={{
                              fontSize: "1.8rem",
                              color: "var(--color-gold)",
                              fontWeight: "700",
                              marginBottom: "15px",
                              fontFamily: "var(--font-heading)",
                            }}
                          >
                            {product.pricing.particulier.price}
                          </div>
                        ) : (
                          <div className="tiered-pricing-list" style={{ marginBottom: "15px" }}>
                            {product.pricing.particulier.tiers.map((tier, idx) => (
                              <div
                                key={idx}
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  padding: "6px 0",
                                  borderBottom: "1px dashed #eaeaea",
                                  fontSize: "0.95rem",
                                }}
                              >
                                <span style={{ fontWeight: "500", color: "#555" }}>{tier.label}</span>
                                <span style={{ fontWeight: "700", color: "var(--color-gold)" }}>
                                  {tier.price}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                        <div className="btn btn-primary" style={{ width: "100%" }}>
                          Commander <Mail size={16} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* BANNIERE B2B */}
      <section>
        <div className="b2b-banner">
          <h2
            style={{
              color: "white",
              border: "none",
              fontFamily: "var(--font-heading)",
            }}
          >
            Besoin d'un accompagnement spécifique ?
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
            Hôtels, restaurants, épiceries fines, grossistes et revendeurs. Découvrez notre espace pro dédié.
          </p>
          <Link to="/b2b" className="btn btn-primary">
            Accéder à l'espace Pro
          </Link>
        </div>
      </section>
    </div>
  );
};

const B2B = () => (
  <section className="container">
    <h1 className="text-center section-title">
      Espace Professionnel et Export
    </h1>
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      <div className="text-center">
        <h3 style={{ fontFamily: "var(--font-heading)" }}>Pour qui ?</h3>
        <p>
          Restaurants, Épiceries Fines, Grossistes, Distributeurs et Clients
          Export.
        </p>
      </div>

      <div className="b2b-grid">
        <div className="info-card">
          <h4
            className="text-gold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Produits et Services
          </h4>
          <ul>
            <li>• Vente en vrac (dès 10g)</li>
            {/* Removed Conditionnement & Documentation */}
          </ul>
        </div>
        <div className="info-card">
          <h4
            className="text-gold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Qualité & Documents
          </h4>
          <ul>
            <li>• Certificats d'analyse (ISO 3632)</li>
            <li>• Certificats d'origine</li>
            <li>• Traçabilité lot par lot</li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p style={{ fontStyle: "italic", fontSize: "0.9rem", color: "#666" }}>
          * Les documents qualité sont fournis aux clients professionnels sur
          demande lors de l'ouverture de compte.
        </p>
        <Link to="/contact" className="btn btn-primary mt-20">
          Demander un tarif Pro
        </Link>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // '', 'sending', 'success', 'error'
  const location = useLocation();
  const [subject, setSubject] = useState("Autre");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (location.state) {
      if (location.state.subject) {
        setSubject(location.state.subject);
      }
      if (location.state.message) {
        setMessage(location.state.message);
      }
    }
  }, [location]);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    // REMPLACEZ CES VALEURS PAR LES VÔTRES DEPUIS EMAILJS DASHBOARD
    const SERVICE_ID = "service_720nydw";
    const TEMPLATE_ID_CLIENT = "template_4f7230g"; // Template pour le CLIENT (Auto-reply)
    const TEMPLATE_ID_ADMIN = "template_4uk6pwk"; // Template pour VOUS (Notification)
    const PUBLIC_KEY = "36N88fav0oLsDc75W";

    // 1. Envoi au CLIENT (Confirmation) via sendForm
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID_CLIENT, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(() => {
        // 2. Envoi à l'ADMIN (Notification) via send
        // Seulement si le premier a réussi
        return emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID_ADMIN,
          {
            user_name: form.current.user_name.value,
            user_email: form.current.user_email.value,
            user_phone: form.current.user_phone.value,
            subject: form.current.subject.value,
            message: form.current.message.value,
          },
          {
            publicKey: PUBLIC_KEY,
          },
        );
      })
      .then(() => {
        setStatus("success");
        form.current.reset();
        setTimeout(() => setStatus(""), 5000);
      })
      .catch((error) => {
        setStatus("error");
        console.error("FAILED...", error);
      });
  };

  return (
    <section className="container page-header-spacer">
      <div className="text-center mb-40">
        <h1 className="section-title">Prenons Contact</h1>
        <p className="section-subtitle">
          UNE QUESTION ? UN PROJET ? NOUS SOMMES À VOTRE ÉCOUTE.
        </p>
      </div>

      <div className="contact-section-wrapper">
        {/* Panneau d'informations (Gauche) */}
        <div className="contact-info-panel">
          <div className="contact-info-item">
            <div className="contact-icon-box">
              <Phone size={24} color="var(--color-gold)" />
            </div>
            <div className="contact-info-content">
              <h4>Téléphone & WhatsApp</h4>
              <p>+41 78 268 44 84</p>
              <p
                style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "5px" }}
              >
                Disponible 7j/7
              </p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-icon-box">
              <Mail size={24} color="var(--color-gold)" />
            </div>
            <div className="contact-info-content">
              <h4>Email Professionnel</h4>
              <p>info@ebrahimi-group.ch</p>
              <p
                style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "5px" }}
              >
                Réponse sous 24h
              </p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-icon-box">
              <MapPin size={24} color="var(--color-gold)" />
            </div>
            <div className="contact-info-content">
              <h4>Siège Social</h4>
              <p>Suisse</p>
              <p
                style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "5px" }}
              >
                Livraison dans toute l'Europe
              </p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-icon-box">
              <Instagram size={24} color="var(--color-gold)" />
            </div>
            <div className="contact-info-content">
              <h4>Instagram</h4>
              <p>
                <a 
                  href="https://www.instagram.com/ebrahimigroup.ch/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: "white", textDecoration: "none" }}
                >
                  @ebrahimigroup.ch
                </a>
              </p>
              <p
                style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "5px" }}
              >
                Suivez nos actualités
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: "40px",
              paddingTop: "40px",
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <h4 style={{ color: "white", marginBottom: "15px" }}>
              Besoin d'un devis Pro ?
            </h4>
            <p
              style={{
                color: "#aaa",
                fontSize: "0.9rem",
                marginBottom: "20px",
              }}
            >
              Pour les restaurants et revendeurs, accédez à nos tarifs
              préférentiels.
            </p>
            <Link
              to="/b2b"
              className="btn btn-outline"
              style={{ width: "100%" }}
            >
              Espace Professionnel
            </Link>
          </div>
        </div>

        {/* Formulaire (Droite) */}
        <div className="contact-form-panel">
          <h3
            style={{ marginBottom: "30px", fontFamily: "var(--font-heading)" }}
          >
            Envoyez-nous un message
          </h3>

          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="form-row-split">
              <div className="form-group">
                <label>Prénom / Nom</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Votre nom"
                />
              </div>
              <div className="form-group">
                <label>Téléphone</label>
                <input type="tel" name="user_phone" placeholder="+41 ..." />
              </div>
            </div>

            <div className="form-group">
              <label>Email Professionnel</label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="nom@entreprise.com"
              />
            </div>

            <div className="form-group">
              <label>Objet de la demande</label>
              <select name="subject" value={subject} onChange={(e) => setSubject(e.target.value)}>
                <option value="Autre">Sélectionnez un sujet...</option>
                <option value="Demande de tarifs (Pro)">
                  Demande de tarifs (Pro)
                </option>
                <option value="Commande Particulier">
                  Commande Particulier
                </option>
                <option value="Information Produit">Information Produit</option>
                <option value="Presse & Partenariat">
                  Presse & Partenariat
                </option>
              </select>
            </div>

            <div className="form-group">
              <label>Votre Message</label>
              <textarea
                rows="5"
                name="message"
                required
                placeholder="Comment pouvons-nous vous aider ?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%", marginTop: "10px" }}
              disabled={status === "sending"}
            >
              {status === "sending"
                ? "Envoi en cours..."
                : "Envoyer ma demande"}
            </button>

            {status === "success" && (
              <p
                style={{
                  color: "green",
                  marginTop: "10px",
                  fontSize: "0.9rem",
                  textAlign: "center",
                }}
              >
                Message envoyé avec succès ! Nous vous répondrons bientôt.
              </p>
            )}
            {status === "error" && (
              <p
                style={{
                  color: "red",
                  marginTop: "10px",
                  fontSize: "0.9rem",
                  textAlign: "center",
                }}
              >
                Une erreur est survenue. Veuillez nous contacter par email ou
                téléphone.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

const Benefits = () => (
  <section className="container page-header-spacer">
    <div className="text-center mb-40">
      <h1 className="section-title">Les Bienfaits du Safran</h1>
      <p className="section-subtitle">
        L’EXCELLENCE NATURELLE AU SERVICE DU BIEN-ÊTRE
      </p>
    </div>

    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <p
        style={{ marginBottom: "40px", fontSize: "1.1rem", lineHeight: "1.6" }}
      >
        Le safran est reconnu depuis l’Antiquité pour sa rareté, son intensité
        aromatique et ses propriétés naturelles. Riche en composés bioactifs
        tels que la crocin et le safranal, il est aujourd’hui étudié pour son
        intérêt dans le soutien du bien-être global.
        <br />
        <br />
        Chez Ebrahimi Group, nous sélectionnons un safran pur en filaments,
        garantissant une concentration optimale en principes actifs.
      </p>

      <div
        className="benefits-list"
        style={{ display: "flex", flexDirection: "column", gap: "30px" }}
      >
        {/* 1 */}
        <div>
          <h3
            className="text-gold"
            style={{
              fontFamily: "var(--font-heading)",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Brain size={24} /> 1. Soutien de l’équilibre émotionnel
          </h3>
          <p>
            Le safran est étudié pour son influence positive sur l’humeur.
            Certaines recherches suggèrent qu’il peut contribuer au maintien
            d’un équilibre émotionnel, notamment en période de fatigue mentale
            ou de stress prolongé.
          </p>
        </div>

        {/* 2 */}
        <div>
          <h3
            className="text-gold"
            style={{
              fontFamily: "var(--font-heading)",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Smile size={24} /> 2. Gestion naturelle du stress
          </h3>
          <p>
            Grâce à ses composés aromatiques, le safran est associé à une
            sensation de détente. Il peut accompagner les phases de tension
            quotidienne en favorisant un état de calme intérieur.
          </p>
        </div>

        {/* 3 */}
        <div>
          <h3
            className="text-gold"
            style={{
              fontFamily: "var(--font-heading)",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Moon size={24} /> 3. Relaxation et qualité du sommeil
          </h3>
          <p>
            Le safran est traditionnellement utilisé pour favoriser la
            relaxation en fin de journée. Une meilleure détente peut contribuer
            indirectement à un sommeil plus régulier.
          </p>
        </div>

        {/* 4 */}
        <div>
          <h3
            className="text-gold"
            style={{
              fontFamily: "var(--font-heading)",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <ShieldCheck size={24} /> 4. Puissant pouvoir antioxydant
          </h3>
          <p>
            La crocin, pigment naturel responsable de la couleur rouge intense,
            possède une activité antioxydante reconnue. Les antioxydants
            contribuent à protéger les cellules contre le stress oxydatif,
            impliqué dans le vieillissement cellulaire.
          </p>
        </div>

        {/* 5 */}
        <div>
          <h3
            className="text-gold"
            style={{
              fontFamily: "var(--font-heading)",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Heart size={24} /> 5. Soutien cardiovasculaire
          </h3>
          <p>
            Intégré dans une alimentation équilibrée, le safran peut participer
            au maintien d’un bon fonctionnement général du système
            cardiovasculaire grâce à son profil antioxydant.
          </p>
        </div>

        {/* 6 */}
        <div>
          <h3
            className="text-gold"
            style={{
              fontFamily: "var(--font-heading)",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Zap size={24} /> 6. Concentration et clarté mentale
          </h3>
          <p>
            Des études explorent l’effet potentiel du safran sur les fonctions
            cognitives. Il peut soutenir la concentration et la vigilance
            mentale dans un mode de vie actif.
          </p>
        </div>

        {/* 7 */}
        <div>
          <h3
            className="text-gold"
            style={{
              fontFamily: "var(--font-heading)",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Utensils size={24} /> 7. Confort digestif
          </h3>
          <p>
            Traditionnellement utilisé après les repas, le safran peut
            contribuer au confort digestif et à l’équilibre gastronomique.
          </p>
        </div>
      </div>

      {/* Utilisation */}
      <div
        style={{
          marginTop: "50px",
          padding: "30px",
          backgroundColor: "#f9fbf7",
          borderRadius: "8px",
        }}
      >
        <h3
          className="text-green"
          style={{
            fontFamily: "var(--font-heading)",
            marginBottom: "15px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Leaf size={24} /> Utilisation recommandée
        </h3>
        <ul style={{ listStyle: "disc", paddingLeft: "20px", color: "#555" }}>
          <li style={{ marginBottom: "10px" }}>
            5 à 10 filaments en infusion dans de l’eau chaude (non bouillante)
            pendant 10 minutes
          </li>
          <li>
            À intégrer dans les préparations culinaires après infusion préalable
          </li>
        </ul>
      </div>

      {/* Engagement */}
      <div
        style={{
          marginTop: "30px",
          padding: "30px",
          border: "1px solid var(--color-gold)",
          borderRadius: "8px",
        }}
      >
        <h3
          className="text-gold"
          style={{
            fontFamily: "var(--font-heading)",
            marginBottom: "15px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Scale size={24} /> Engagement Qualité – Ebrahimi Group
        </h3>
        <ul style={{ listStyle: "none", padding: 0, color: "#555" }}>
          <li style={{ marginBottom: "5px" }}>• Safran pur en filaments</li>
          <li style={{ marginBottom: "5px" }}>• Sélection rigoureuse</li>
          <li>• Traçabilité</li>
        </ul>
      </div>

      {/* Disclaimer */}
      <div
        style={{
          marginTop: "40px",
          marginBottom: "80px",
          padding: "20px",
          backgroundColor: "#fff8e1",
          borderLeft: "4px solid #ffc107",
          borderRadius: "4px",
          color: "#795548",
          display: "flex",
          gap: "15px",
          alignItems: "start",
        }}
      >
        <Info size={24} style={{ marginTop: "2px", flexShrink: 0 }} />
        <div>
          <strong
            style={{
              display: "block",
              marginBottom: "5px",
              textTransform: "uppercase",
              fontSize: "0.9rem",
            }}
          >
            Mention informative
          </strong>
          <p style={{ fontSize: "0.95rem", margin: 0, lineHeight: "1.5" }}>
            Les informations présentées sont données à titre informatif et ne
            constituent pas des allégations médicales. En cas de traitement
            médical, grossesse ou condition particulière, demander conseil à un
            professionnel de santé.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// --- APP ---
const App = () => {
  return (
    <Router basename="/">
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/products" element={<Products />} />
          <Route path="/b2b" element={<B2B />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
