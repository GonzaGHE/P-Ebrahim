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
    <div className="hero-section" style={{
      backgroundImage: `url(${headerBg})`
    }}>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">DISTRIBUTEUR<br/>SAFRAN ET PRODUITS ALIMENTAIRES SECS</h1>
        <p className="hero-subtitle">
          Partenaire privilégié des professionnels de la gastronomie et de l'industrie.
          <br/>Importation directe, certification ISO 3632 et traçabilité totale.
        </p>
        <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <Link to="/products" className="btn btn-primary">Nos Produits</Link>
          <Link to="/contact" className="btn btn-outline-dark">Devenir Partenaire</Link>
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
  <div style={{backgroundColor: 'var(--color-off-white)'}}>
    <section className="container">
      <h1 className="text-center section-title">Nos Produits</h1>
      <p className="text-center section-subtitle">SAFRAN PREMIUM (GRADE 1) - RÉCOLTE RÉCENTE</p>
      
      <div className="product-grid">
        {/* PRODUIT 1G */}
        <div className="card">
          <div className="card-img">Photo Sachet 1g</div>
          <h3 className="product-title">Safran Premium - 1g</h3>
          <p>L'excellence pour votre cuisine quotidienne.</p>
          <div className="coming-soon">Bientôt disponible</div>
          
          <div className="btn-group-vertical">
             <a href="https://wa.me/41782684484?text=Bonjour,%20je%20suis%20intéressé%20par%20le%20Safran%201g" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <Phone size={18} /> Commander via WhatsApp
            </a>
            <a href="mailto:info@ebrahimi-group.ch?subject=Commande%20Safran%201g" className="btn btn-outline-dark">
              <Mail size={18} /> Commander par Email
            </a>
          </div>
        </div>
        {/* PRODUIT 2G */}
        <div className="card">
          <div className="card-img">Photo Sachet 2g</div>
          <h3 className="product-title">Safran Premium - 2g</h3>
          <p>Le format idéal pour les amateurs.</p>
           <div className="coming-soon">Bientôt disponible</div>
           
           <div className="btn-group-vertical">
             <a href="https://wa.me/41782684484?text=Bonjour,%20je%20suis%20intéressé%20par%20le%20Safran%202g" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <Phone size={18} /> Commander via WhatsApp
            </a>
            <a href="mailto:info@ebrahimi-group.ch?subject=Commande%20Safran%202g" className="btn btn-outline-dark">
              <Mail size={18} /> Commander par Email
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
           Clients professionnels en Suisse et international.
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
    <div style={{maxWidth: '700px', margin: '0 auto'}}>
      <h1 className="text-center section-title">Contactez-nous</h1>
      <p className="text-center mb-40" style={{fontSize: '1.1rem'}}>
        Pour toute demande de devis, partenariat ou information générale, notre équipe est à votre disposition.<br/>
        <strong className="text-gold">info@ebrahimi-group.ch</strong>
      </p>
      
      {/* FORMULAIRE - Connecter à Formspree plus tard */}
      <form className="contact-form">
        <div className="form-group">
          <label>Nom complet</label>
          <input type="text" required placeholder="Votre Nom" />
        </div>
        <div className="form-group">
          <label>Email professionnel</label>
          <input type="email" required placeholder="nom@entreprise.com" />
        </div>
        <div className="form-group">
          <label>Objet</label>
          <select>
            <option>Demande de devis (Vrac/Pro)</option>
            <option>Question sur une commande</option>
            <option>Partenariat / Export</option>
            <option>Autre</option>
          </select>
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea rows="6" required placeholder="Comment pouvons-nous vous aider ?"></textarea>
        </div>
        <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Envoyer le message</button>
      </form>
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