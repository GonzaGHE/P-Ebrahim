import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Truck, Leaf, Mail, MapPin, ChevronRight } from 'lucide-react';

// --- UTILITAIRES ---
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// --- COMPOSANTS FIXES ---
const Navbar = () => (
  <nav>
    <div className="container nav-flex">
      <Link to="/" className="logo">Ebrahimi Group</Link>
      <div className="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/about">À Propos</Link>
        <Link to="/products">Nos Produits</Link>
        <Link to="/b2b">Espace Pro</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-grid">
        <div>
          <h3 style={{fontSize: '1.5rem', marginBottom: '20px'}}>EBRAHIMI GROUP</h3>
          <p style={{opacity: 0.8}}>Importateur et distributeur suisse de safran premium.</p>
          <div style={{marginTop: '30px', opacity: 0.8}}>
            <p style={{display: 'flex', alignItems: 'center', gap: '10px'}}><MapPin size={18} color="#D4AF37"/> Basé en Suisse</p>
            <p style={{display: 'flex', alignItems: 'center', gap: '10px'}}><Mail size={18} color="#D4AF37"/> contact@ebrahimi-group.ch</p>
          </div>
        </div>
        <div style={{textAlign: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <p style={{fontStyle: 'italic', fontSize: '1.4rem', color: '#D4AF37', lineHeight: '1.4'}}>
            "Derrière chaque filament de safran, il y a une terre, un savoir-faire et des mains qui travaillent avec patience et dignité."
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Ebrahimi Group. Tous droits réservés.</span>
        <Link to="/legal">Mentions Légales</Link>
      </div>
    </div>
  </footer>
);

// --- PAGES ---

const Home = () => (
  <>
    {/* HERO SECTION */}
    <div style={{
      backgroundColor: '#111', 
      color: 'white', 
      padding: '160px 0', 
      textAlign: 'center',
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1596558693722-1d7c927f310f?q=80&w=2000&auto=format&fit=crop")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="container">
        <h1 style={{marginBottom: '20px', letterSpacing: '1px'}}>SAFRAN PREMIUM &<br/>PRODUITS SECS</h1>
        <p style={{fontSize: '1.3rem', maxWidth: '700px', margin: '0 auto 50px', fontWeight: '300'}}>
          De la terre à la table, une sélection d’exception, cultivée avec soin pour une qualité authentique.
        </p>
        <div style={{display: 'flex', gap: '20px', justifyContent: 'center'}}>
          <Link to="/products" className="btn" style={{backgroundColor: '#D4AF37', border: 'none', color: 'black'}}>Commander (Particuliers)</Link>
          <Link to="/b2b" className="btn btn-outline">Espace Professionnel</Link>
        </div>
      </div>
    </div>

    {/* INTRO SERIEUSE */}
    <section>
      <div className="container text-center">
        <h2 className="text-gold">Une Entreprise Suisse</h2>
        <p style={{maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem'}}>
          Ebrahimi Group est spécialisée dans l’importation, le conditionnement et la distribution. 
          Nous garantissons la traçabilité complète et la conformité de produits issus de régions agricoles reconnues.
        </p>
        <div style={{marginTop: '50px', display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap'}}>
          <div><ShieldCheck size={40} className="text-gold"/><p>Qualité Contrôlée</p></div>
          <div><Leaf size={40} className="text-gold"/><p>100% Naturel</p></div>
          <div><Truck size={40} className="text-gold"/><p>Importateur Direct</p></div>
        </div>
      </div>
    </section>
  </>
);

const About = () => (
  <section className="container">
    <div style={{maxWidth: '900px', margin: '0 auto'}}>
      <h1 className="text-center mb-40">Notre Engagement</h1>
      <p style={{fontSize: '1.1rem', marginBottom: '20px'}}>
        Chez Ebrahimi Group, nous croyons qu’un produit de qualité commence par le respect de l’humain et du travail agricole.
      </p>
      <p style={{fontSize: '1.1rem', marginBottom: '40px'}}>
        Nous collaborons avec des producteurs agricoles sélectionnés et soutenons indirectement l’activité de femmes engagées dans les étapes de récolte et de transformation, contribuant ainsi à une économie locale plus stable.
      </p>
      
      <div style={{background: '#f9f9f9', padding: '40px', borderLeft: '4px solid #D4AF37'}}>
        <h3 style={{marginTop: 0}}>Notre rôle en Suisse</h3>
        <ul style={{listStyle: 'none', padding: 0}}>
          <li style={{marginBottom: '10px'}}>✔️ Sélection rigoureuse des lots</li>
          <li style={{marginBottom: '10px'}}>✔️ Contrôle de la traçabilité et analyses (ISO 3632)</li>
          <li style={{marginBottom: '10px'}}>✔️ Conditionnement respectant les normes suisses</li>
        </ul>
      </div>
    </div>
  </section>
);

const Products = () => (
  <div className="container">
    <section className="text-center">
      <h1>Nos Produits</h1>
      <p style={{maxWidth: '700px', margin: '0 auto'}}>
        Safran en filaments pur (Crocus sativus L.). Origine : Afghanistan (Région de Herat).<br/>
        <strong>Grade Premium ISO 3632</strong>. Couleur rouge intense, arôme puissant.
      </p>
    </section>

    {/* SHOP */}
    <section style={{paddingTop: 0}}>
      <h3 style={{textAlign: 'center', marginBottom: '40px', color: '#888', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px'}}>Boutique Particuliers</h3>
      <div className="product-grid">
        {/* PRODUIT 1G */}
        <div className="card">
          <div className="card-img">Photo Sachet 1g</div>
          <h3>Safran Premium - 1g</h3>
          <p>L'excellence pour votre cuisine quotidienne.</p>
          <p className="text-gold" style={{fontWeight: 'bold', fontSize: '1.2rem'}}>15.00 CHF</p>
          <button className="btn btn-primary" style={{width: '100%'}}>Acheter (Stripe)</button>
        </div>
        {/* PRODUIT 2G */}
        <div className="card">
          <div className="card-img">Photo Sachet 2g</div>
          <h3>Safran Premium - 2g</h3>
          <p>Le format idéal pour les amateurs.</p>
          <p className="text-gold" style={{fontWeight: 'bold', fontSize: '1.2rem'}}>28.00 CHF</p>
          <button className="btn btn-primary" style={{width: '100%'}}>Acheter (Stripe)</button>
        </div>
      </div>
    </section>

    {/* BANNIERE B2B */}
    <section>
      <div style={{background: '#1a1a1a', color: 'white', padding: '60px', textAlign: 'center', borderRadius: '4px'}}>
        <h2 style={{color: 'white', border: 'none'}}>Vous êtes un professionnel ?</h2>
        <p style={{fontSize: '1.2rem', marginBottom: '30px'}}>
          Nous proposons des formats vrac (100g, 250g, 1kg) pour la restauration et la revente.
        </p>
        <Link to="/b2b" className="btn" style={{background: '#D4AF37', color: 'black', border: 'none'}}>Accéder à l'espace Pro</Link>
      </div>
    </section>
  </div>
);

const B2B = () => (
  <section className="container">
    <h1 className="text-center">Espace Professionnel & Export</h1>
    <div style={{maxWidth: '800px', margin: '40px auto', display: 'flex', flexDirection: 'column', gap: '40px'}}>
      
      <div>
        <h3>Pour qui ?</h3>
        <p>Restaurants, Épiceries Fines, Grossistes, Distributeurs et Clients Export.</p>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
        <div style={{padding: '20px', background: '#f9f9f9'}}>
          <h4 className="text-gold">Produits & Services</h4>
          <ul>
            <li>• Vente en vrac (dès 100g)</li>
            <li>• Conditionnement personnalisé</li>
            <li>• Documentation export complète</li>
          </ul>
        </div>
        <div style={{padding: '20px', background: '#f9f9f9'}}>
          <h4 className="text-gold">Qualité & Documents</h4>
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
    <div style={{maxWidth: '600px', margin: '0 auto'}}>
      <h1 className="text-center">Contactez-nous</h1>
      <p className="text-center mb-40">Pour toute demande de devis B2B ou information.</p>
      
      {/* FORMULAIRE - Connecter à Formspree plus tard */}
      <form style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
        <div>
          <label style={{fontWeight: 'bold', display: 'block', marginBottom: '5px'}}>Nom complet</label>
          <input type="text" style={{width: '100%', padding: '12px', border: '1px solid #ddd'}} required />
        </div>
        <div>
          <label style={{fontWeight: 'bold', display: 'block', marginBottom: '5px'}}>Email professionnel</label>
          <input type="email" style={{width: '100%', padding: '12px', border: '1px solid #ddd'}} required />
        </div>
        <div>
          <label style={{fontWeight: 'bold', display: 'block', marginBottom: '5px'}}>Objet</label>
          <select style={{width: '100%', padding: '12px', border: '1px solid #ddd'}}>
            <option>Demande de devis (Vrac/Pro)</option>
            <option>Question sur une commande</option>
            <option>Autre</option>
          </select>
        </div>
        <div>
          <label style={{fontWeight: 'bold', display: 'block', marginBottom: '5px'}}>Message</label>
          <textarea rows="6" style={{width: '100%', padding: '12px', border: '1px solid #ddd'}} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Envoyer</button>
      </form>
    </div>
  </section>
);

const Legal = () => (
  <section className="container">
    <h1>Mentions Légales</h1>
    <div style={{fontSize: '0.9rem', color: '#555', maxWidth: '800px'}}>
      <h3>1. Éditeur</h3>
      <p>Ebrahimi Group - Suisse<br/>Contact : contact@ebrahimi-group.ch</p>
      <h3>2. Responsabilité</h3>
      <p>L'ensemble de ce site relève de la législation suisse. Les informations fournies le sont à titre indicatif. Ebrahimi Group ne saurait être tenu responsable des erreurs ou omissions.</p>
    </div>
  </section>
);

// --- APP ---
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/b2b" element={<B2B />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;