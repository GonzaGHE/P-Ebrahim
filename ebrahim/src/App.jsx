import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Truck, Leaf, Mail, MapPin, Phone, Menu, X } from 'lucide-react';

// Import Assets
import logoImg from './assets/logo.png';
import headerBg from './assets/header-bg.jpg';

// --- UTILITAIRES ---
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
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
            <span className="desktop-only"><Mail size={14} color="var(--color-green)"/> info@ebrahimi-group.ch</span>
            <span><Phone size={14} color="var(--color-green)"/> +41 78 268 44 84</span>
          </div>
          <div>
            <Link to="/b2b" className="top-bar-link">Espace Pro <Truck size={14} /></Link>
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
            <Link to="/products">Nos Produits</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} color="var(--color-black)" /> : <Menu size={28} color="var(--color-black)" />}
          </button>

          {/* Mobile Dropdown */}
          <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
            <Link to="/">Accueil</Link>
            <Link to="/about">À Propos</Link>
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
            Importateur et distributeur suisse de safran premium. Une qualité sans compromis, de la terre à l'assiette.
          </p>
        </div>

        {/* Colonne 2 : Navigation */}
        <div className="footer-col">
          <h4 className="footer-title">Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/products">Nos Produits</Link></li>
            <li><Link to="/b2b">Espace Pro</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Colonne 3 : Contact */}
        <div className="footer-col">
          <h4 className="footer-title">Contact</h4>
          <ul className="footer-contact">
            <li><MapPin size={18} color="var(--color-gold)"/> Suisse</li>
            <li><Mail size={18} color="var(--color-gold)"/>info@ebrahimi-group.ch</li>
            <li><Phone size={18} color="var(--color-gold)"/>+41 78 268 44 84</li>
          </ul>
        </div>

        {/* Colonne 4 : Citation */}
        <div className="footer-col" style={{display: 'flex', alignItems: 'center'}}>
          <p className="footer-quote">
            "Derrière chaque filament de safran, il y a une terre, un savoir-faire et des mains qui travaillent avec patience et dignité."
          </p>
        </div>

      </div>
      
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Ebrahimi Group. Tous droits réservés.</span>
      </div>
    </div>
  </footer>
);

// --- PAGES ---

const Home = () => (
  <>
    {/* HERO SECTION */}
    {/* HERO SECTION */}
    <div className="hero-section" style={{
      backgroundImage: `url(${headerBg})`
    }}>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <span className="hero-surtitle">DISTRIBUTEUR OFFICIEL</span>
        <h1 className="hero-title">SAFRAN PREMIUM<br/>& ÉPICERIE FINE</h1>
        <p className="hero-subtitle">
          Le lien direct entre les terroirs d'exception et la gastronomie suisse.<br/>
          Importation éthique, Grade 1 (ISO 3632) et traçabilité totale.
        </p>
        <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <Link to="/products" className="btn btn-primary">Découvrir la Collection</Link>
          <Link to="/contact" className="btn btn-outline">Devenir Partenaire</Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div style={{color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '0.8rem', opacity: 0.8}}>
          <span style={{marginBottom: '10px', letterSpacing: '2px', textTransform: 'uppercase'}}>Explorer</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
    </div>

    {/* INTRO SERIEUSE */}
    <section>
      <div className="container text-center">
        <h2 className="section-title">Excellence Suisse et Origine Certifiée</h2>
        <p style={{maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--color-text-light)'}}>
          Basé en Suisse, Ebrahimi Group assure le lien direct entre les terroirs d'exception et le marché européen. 
          Nous garantissons une chaine de valeur éthique et une qualité constante pour nos clients exigeants.
        </p>
        <div className="features-grid">
          <div className="feature-item"><ShieldCheck size={40} className="text-gold"/><p>Grade 1 (ISO 3632)</p></div>
          <div className="feature-item"><Leaf size={40} className="text-green"/><p>Agriculture Raisonnée</p></div>
          <div className="feature-item"><Truck size={40} className="text-gold"/><p>Logistique Suisse</p></div>
        </div>
      </div>
    </section>
  </>
);

const About = () => (
  <section className="section-commitment">
    <div className="container">
      <div className="commitment-header text-center">
        <h1 className="section-title">Notre Engagement</h1>
        <p className="lead-text">
          Chez Ebrahimi Group, nous croyons qu’un produit de qualité commence par le respect de l’humain et du travail agricole.
        </p>
      </div>
      
      <div className="commitment-wrapper">
        <div className="commitment-text">
           <p>
            Nous collaborons avec des producteurs agricoles sélectionnés, notamment en <strong>Afghanistan</strong>, et soutenons indirectement l’activité de femmes engagées dans les étapes de récolte et de transformation, contribuant ainsi à une économie locale plus stable.
          </p>
           <p>
            Pour nous, la qualité du produit final est indissociable de la qualité de vie de ceux qui le cultivent.
           </p>
        </div>
      </div>
    </div>
  </section>
);

const Products = () => (
  <div style={{backgroundColor: 'white'}}>
    <section className="container">
      <div className="text-center">
        <h1 className="section-title">Notre Collection</h1>
        <p className="section-subtitle">SAFRAN PREMIUM (GRADE 1) - EXCELLENCE SUISSE</p>
      </div>
      
      <div className="product-grid">
        {/* PRODUIT 1G */}
        <div className="product-card">
          <div className="packshot-container">
            <div className="packshot-saffron"></div>
          </div>
          <div className="product-meta">
            <span className="coming-soon-badge">Bientôt Disponible</span>
            <h3 className="product-title">Éclat de Safran - 1g</h3>
            <p className="product-desc">L'excellence pour votre cuisine quotidienne. <br/>Pureté certifiée ISO 3632.</p>
            
            <a href="mailto:info@ebrahimi-group.ch?subject=Commande%20Safran%201g" 
               className="btn btn-luxury">
               <Mail size={16} style={{marginRight: '8px'}}/> COMMANDER PAR EMAIL
            </a>
            <a href="https://wa.me/41782684484?text=Bonjour,%20je%20souhaite%20commander%20l'Éclat%20de%20Safran%20(1g)" 
               target="_blank" rel="noopener noreferrer" 
               className="link-discrete">
               <Phone size={14} /> ou via WhatsApp
            </a>
          </div>
        </div>

        {/* PRODUIT 2G */}
        <div className="product-card">
          <div className="packshot-container">
            <div className="packshot-saffron"></div>
          </div>
          <div className="product-meta">
            <span className="coming-soon-badge">Bientôt Disponible</span>
            <h3 className="product-title">Trésor de Safran - 2g</h3>
            <p className="product-desc">Le format idéal pour les connaisseurs. <br/>Arôme intense et couleur profonde.</p>
            
            <a href="mailto:info@ebrahimi-group.ch?subject=Commande%20Safran%202g" 
               className="btn btn-luxury">
               <Mail size={16} style={{marginRight: '8px'}}/> COMMANDER PAR EMAIL
            </a>
            <a href="https://wa.me/41782684484?text=Bonjour,%20je%20souhaite%20commander%20le%20Trésor%20de%20Safran%20(2g)" 
               target="_blank" rel="noopener noreferrer" 
               className="link-discrete">
               <Phone size={14} /> ou via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* BANNIERE B2B */}
    <section>
      <div className="b2b-banner">
        <h2 style={{color: 'white', border: 'none', fontFamily: 'var(--font-heading)'}}>Vous êtes un professionnel ?</h2>
        <p style={{fontSize: '1.2rem', marginBottom: '30px'}}>
           Restaurants, Épiceries fines et Industrie. Tarifs préférentiels.
        </p>
        <Link to="/b2b" className="btn btn-primary">Accéder à l'espace Pro</Link>
      </div>
    </section>
  </div>
);

const B2B = () => (
  <section className="container">
    <h1 className="text-center section-title">Espace Professionnel et Export</h1>
    <div style={{maxWidth: '800px', margin: '40px auto', display: 'flex', flexDirection: 'column', gap: '40px'}}>
      
      <div className="text-center">
        <h3 style={{fontFamily: 'var(--font-heading)'}}>Pour qui ?</h3>
        <p>Restaurants, Épiceries Fines, Grossistes, Distributeurs et Clients Export.</p>
      </div>

      <div className="b2b-grid">
        <div className="info-card">
          <h4 className="text-gold" style={{fontFamily: 'var(--font-heading)'}}>Produits et Services</h4>
          <ul>
            <li>• Vente en vrac (dès 100g)</li>
            {/* Removed Conditionnement & Documentation */}
          </ul>
        </div>
        <div className="info-card">
          <h4 className="text-gold" style={{fontFamily: 'var(--font-heading)'}}>Qualité & Documents</h4>
          <ul>
            <li>• Certificats d'analyse (ISO 3632)</li>
            <li>• Certificats d'origine</li>
            <li>• Traçabilité lot par lot</li>
          </ul>
        </div>
      </div>

      <div style={{textAlign: 'center', marginTop: '20px'}}>
        <p style={{fontStyle: 'italic', fontSize: '0.9rem', color: '#666'}}>
          * Les documents qualité sont fournis aux clients professionnels sur demande lors de l'ouverture de compte.
        </p>
        <Link to="/contact" className="btn btn-primary mt-20">Demander un tarif Pro</Link>
      </div>

    </div>
  </section>
);

const Contact = () => (
  <section className="container">
    <div className="text-center mb-40">
      <h1 className="section-title">Prenons Contact</h1>
      <p className="section-subtitle">UNE QUESTION ? UN PROJET ? NOUS SOMMES À VOTRE ÉCOUTE.</p>
    </div>

    <div className="contact-section-wrapper">
      
      {/* Panneau d'informations (Gauche) */}
      <div className="contact-info-panel">
        
        <div className="contact-info-item">
          <div className="contact-icon-box"><Phone size={24} color="var(--color-gold)"/></div>
          <div className="contact-info-content">
            <h4>Téléphone & WhatsApp</h4>
            <p>+41 78 268 44 84</p>
            <p style={{fontSize: '0.85rem', opacity: 0.7, marginTop: '5px'}}>Disponible 7j/7</p>
          </div>
        </div>

        <div className="contact-info-item">
          <div className="contact-icon-box"><Mail size={24} color="var(--color-gold)"/></div>
          <div className="contact-info-content">
            <h4>Email Professionnel</h4>
            <p>info@ebrahimi-group.ch</p>
            <p style={{fontSize: '0.85rem', opacity: 0.7, marginTop: '5px'}}>Réponse sous 24h</p>
          </div>
        </div>

        <div className="contact-info-item">
          <div className="contact-icon-box"><MapPin size={24} color="var(--color-gold)"/></div>
          <div className="contact-info-content">
            <h4>Siège Social</h4>
            <p>Suisse</p>
            <p style={{fontSize: '0.85rem', opacity: 0.7, marginTop: '5px'}}>Livraison dans toute l'Europe</p>
          </div>
        </div>

        <div style={{marginTop: '40px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.1)'}}>
          <h4 style={{color: 'white', marginBottom: '15px'}}>Besoin d'un devis Pro ?</h4>
          <p style={{color: '#aaa', fontSize: '0.9rem', marginBottom: '20px'}}>
            Pour les restaurants et revendeurs, accédez à nos tarifs préférentiels.
          </p>
          <Link to="/b2b" className="btn btn-outline" style={{width: '100%'}}>Espace Professionnel</Link>
        </div>

      </div>

      {/* Formulaire (Droite) */}
      <div className="contact-form-panel">
        <h3 style={{marginBottom: '30px', fontFamily: 'var(--font-heading)'}}>Envoyez-nous un message</h3>
        <form className="contact-form">
          <div className="form-row-split">
            <div className="form-group">
              <label>Prénom / Nom</label>
              <input type="text" required placeholder="Votre nom" />
            </div>
            <div className="form-group">
              <label>Téléphone</label>
              <input type="tel" placeholder="+41 ..." />
            </div>
          </div>
          
          <div className="form-group">
            <label>Email Professionnel</label>
            <input type="email" required placeholder="nom@entreprise.com" />
          </div>

          <div className="form-group">
            <label>Objet de la demande</label>
            <select>
              <option>Sélectionnez un sujet...</option>
              <option>Demande de tarifs (Pro)</option>
              <option>Commande Particulier</option>
              <option>Information Produit</option>
              <option>Presse & Partenariat</option>
            </select>
          </div>

          <div className="form-group">
            <label>Votre Message</label>
            <textarea rows="5" required placeholder="Comment pouvons-nous vous aider ?"></textarea>
          </div>

          <button type="submit" className="btn btn-primary" style={{width: '100%', marginTop: '10px'}}>
            Envoyer ma demande
          </button>
        </form>
      </div>

    </div>
  </section>
);



// --- APP ---
function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/b2b" element={<B2B />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;