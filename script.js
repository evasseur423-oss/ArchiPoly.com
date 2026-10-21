/**
 * ARCHIPOLY STUDIO — JAVASCRIPT PRINCIPAL
 * Logique d'interaction, défilement fluide (Smooth Scroll) et micro-interactions UI
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 00. LANGUE DE LA PAGE
  // --------------------------------------------------------------------------
  const languageButtons = document.querySelectorAll('.language-button');
  const translations = {
    'ArchiPoly Studio — Suite 3D locale & open-source pour architectes': 'ArchiPoly Studio — Offline 3D Suite for Architects',
    'Fonctionnalités': 'Features',
    'À Propos': 'About',
    'Code Source': 'Source Code',
    'Télécharger': 'Download',
    'Don': 'Donate',
    'ArchiPoly-Setup-1.0.0.exe • 64-bit (~84 Mo)': 'ArchiPoly-Setup-1.0.0.exe • 64-bit (~84 MB)',
    'Windows 10 / 11 (64 bits) • Version 1.0': 'Windows 10 / 11 (64-bit) • Version 1.0',
    'La boîte à outils 3D locale et open-source pour les architectes.': 'The local, open-source 3D toolkit for architects.',
    "Un écosystème unifié, sans abonnement, ultra-léger et fonctionnant à 100% hors-ligne. De la préparation des matériaux photoréalistes jusqu'à la découpe de maquette physique et aux calculs pré-dimensionnels, reprenez le contrôle de vos flux de travail sans dépendance au cloud.": 'A unified, subscription-free ecosystem that is lightweight and works entirely offline. From preparing photorealistic materials to cutting physical models and preliminary calculations, take control of your workflow without relying on the cloud.',
    'Télécharger pour Windows': 'Download for Windows',
    'Explorer le code source': 'Explore the source code',
    'Version 1.0 (Expérimentale)': 'Version 1.0 (Experimental)',
    "Développé avec l'assistance de l'IA": 'Developed with AI assistance',
    'Un écosystème en 5 modules': 'An ecosystem of 5 modules',
    "Chaque outil a été conçu pour éliminer une friction récurrente en agence ou en atelier d'architecture. Aucun compte requis, aucune latence réseau, vos modèles restent strictement sur votre machine.": 'Each tool is designed to remove a recurring pain point in architecture firms and studios. No account or network connection required: your models stay on your machine.',
    'TEXTURING & SHADERS': 'TEXTURING & SHADERS',
    'Gestionnaire de textures PBR.': 'PBR texture manager.',
    'Organisez vos bibliothèques locales, visualisez vos matériaux sur 4 gabarits 3D et normalisez automatiquement la nomenclature de vos fichiers.': 'Organize your local libraries, preview materials on four 3D templates, and automatically standardize file naming.',
    'CAD VIEWPORT': 'CAD VIEWPORT',
    'Visionneuse universelle rapide (GLB, OBJ, FBX, STL).': 'Fast, universal viewer (GLB, OBJ, FBX, STL).',
    "Inspectez le maillage filaire, vérifiez l'étirement des UVs avec un damier procédural, et gérez la visibilité de vos calques.": 'Inspect wireframes, check UV stretching with a procedural checkerboard, and manage layer visibility.',
    'TEXTURE SYNTHESIS': 'TEXTURE SYNTHESIS',
    'Laboratoire de création.': 'Creation lab.',
    "Glissez une simple photo de site (béton, bois) et l'algorithme génère des textures sans couture (Seamless) en extrayant les cartes Normal, Roughness, Height et AO.": 'Drop in a site photo (concrete, wood) and the algorithm generates seamless textures with Normal, Roughness, Height, and AO maps.',
    'Photogrammétrie': 'Photogrammetry',
    'PHYSICAL FABRICATION': 'PHYSICAL FABRICATION',
    'Maquette Slicer': 'Model Slicer',
    'De la 3D à la découpe physique.': 'From 3D to physical fabrication.',
    "Tranchez n'importe quelle topographie ou volume selon une échelle architecturale (1:50, 1:200) et exportez vos patrons de découpe numérotés en SVG et DXF.": 'Slice any terrain or volume to an architectural scale (1:50, 1:200), then export numbered cutting patterns in SVG and DXF.',
    'Échelles 1:20 à 1:500': 'Scales 1:20 to 1:500',
    'ENGINEERING & RDM': 'ENGINEERING & STRUCTURAL ANALYSIS',
    'Laboratoire de pré-dimensionnement.': 'Preliminary design lab.',
    "Calculez les déperditions thermiques d'une pièce fermée et vérifiez la flèche (RDM) de vos poutres porteuses instantanément sur la géométrie 3D.": 'Calculate heat loss in an enclosed room and instantly check the deflection of structural beams on your 3D geometry.',
    'Flèche Eurocode (L/500)': 'Eurocode deflection (L/500)',
    'Bilan Thermique U': 'Thermal performance (U-value)',
    'Temps Réel': 'Real-time',
    "DÉMARCHE D'ATELIER & TRANSPARENCE": 'STUDIO APPROACH & TRANSPARENCY',
    'Conçu par un étudiant en architecture, pour les étudiants en architecture.': 'Created by an architecture student, for architecture students.',
    "Ce projet est né lors de la banalisation des cours en école d'architecture en France (ENSA Nantes). Suite à un atelier discussion autour des logiciels Open source. En atelier de projet d'architecture, la majorité des suites logicielles propriétaires imposent des abonnements mensuels exorbitants, nécessitent une connexion Internet permanente, et s'avèrent souvent trop lourdes pour des vérifications élémentaires : nettoyer des fichiers OBJ, préparer un gabarit de découpe laser ou tester la faisabilité d'une poutre en bois. L'objectif de ce projet est de fournir un outil léger, rapide et local-first essentiellement pour les étudiants d'architecture, mais aussi pour les 3D modellers, les architectes praticiens etc. C'est surtout une réponse au géant des logiciels propriétaires qui peuvent désormais s'inquiéter de la montée en puissance des outils d'intelligence artificielle et de la communauté open-source.": 'This project began during a period when classes were suspended at the Nantes School of Architecture (ENSA Nantes), following a workshop discussion about open-source software. In architecture studios, most proprietary software suites impose exorbitant monthly fees, require a constant internet connection, and are often too cumbersome for simple tasks: cleaning OBJ files, preparing a laser-cutting template, or checking whether a timber beam is feasible. The goal is to provide a lightweight, fast, local-first tool, primarily for architecture students, but also for 3D modelers and practicing architects. Above all, it is a response to proprietary software giants—and a showcase of the growing potential of AI tools and the open-source community.',
    'ArchiPoly Studio est né pour répondre à ces frictions réelles du quotidien.': 'ArchiPoly Studio was created to address these everyday challenges.',
    'Ce logiciel est actuellement en': 'This software is currently in',
    "phase de test et d'expérimentation": 'a testing and experimental phase',
    "(Version 1.0). Le projet a été développé en combinant passion architecturale et assistance par intelligence artificielle pour le prototypage rapide d'algorithmes géométriques.": '(Version 1.0). It was developed by combining a passion for architecture with AI assistance to rapidly prototype geometric algorithms.',
    'Votre regard compte énormément. Que vous soyez étudiant, architecte praticien, enseignant ou développeur : laissez un avis, signalez un bug ou partagez vos suggestions via notre formulaire.': 'Your feedback matters. Whether you are a student, practicing architect, teacher, or developer, leave a review, report a bug, or share a suggestion through our form.',
    '100% Confidentialité Locale': '100% Local Privacy',
    'Aucune télémétrie intrusive, aucune donnée client envoyée sur un serveur distant.': 'No intrusive telemetry and no client data sent to remote servers.',
    'Zéro Abonnement': 'No Subscription',
    "Libre d'accès sous licence GPLv3. Gratuit pour toujours pour les écoles et les agences.": 'Free under the GPLv3 license. Always free for schools and firms.',
    'Code Source Ouvert': 'Open Source',
    "Auditez, modifiez, forkez et contribuez librement à l'ensemble du dépôt public.": 'Audit, modify, fork, and freely contribute to the public repository.',
    "Télécharger l'exécutable (.exe)": 'Download the installer (.exe)',
    'Voir le code source (GitHub)': 'View the source code (GitHub)',
    'Laisser un avis / signaler un bug': 'Leave feedback / report a bug',
    'Ouvrir le formulaire de retours': 'Open the feedback form',
    'Le programme d’installation ArchiPoly Setup 1.0.0.exe est téléchargé depuis ce site.': 'The ArchiPoly Setup 1.0.0.exe installer downloads from this site.',
    'Téléchargement d’ArchiPoly en cours...': 'ArchiPoly is downloading...',
    "Suite 3D indépendante pour l'expérimentation, la découpe physique et la conception architecturale.": 'An independent 3D suite for experimentation, physical fabrication, and architectural design.',
    'COMMUNAUTÉ': 'COMMUNITY',
    'Dépôt GitHub': 'GitHub repository',
    'Signaler un bug (Issues)': 'Report a bug (Issues)',
    'Notes de version': 'Release notes',
    'Licence GPLv3': 'GPLv3 license',
    'ArchiPoly Studio. Open-source sous licence GPLv3.': 'ArchiPoly Studio. Open source under the GPLv3 license.',
    'Don libre': 'Donate',
    'BUILD : 1.0.0-RELEASE': 'BUILD: 1.0.0-RELEASE',
    'SYS : WIN-X64': 'SYS: WIN-X64',
    'CAD : METRIC / SI': 'CAD: METRIC / SI'
  };
  const attributeTranslations = {
    'Retour au sommet - ArchiPoly': 'Back to top - ArchiPoly',
    'Choix de la langue': 'Choose language',
    'Navigation principale': 'Main navigation',
    'Dépôt GitHub': 'GitHub repository',
    'Faire un don libre via Stripe': 'Make a voluntary donation via Stripe',
    'Menu': 'Menu',
    'Capture d’écran d’ArchiPoly Studio avec le modèle 3D et les résultats de calcul ArchPhysics': 'ArchiPoly Studio screenshot showing the 3D model and ArchPhysics calculation results',
    'Fermer la notification': 'Close notification',
    'ArchiPoly Studio — Suite 3D locale & open-source pour architectes': 'ArchiPoly Studio — Offline 3D Suite for Architects',
    "La boîte à outils 3D locale et open-source pour les architectes. 100% hors-ligne, ultra-légère et sans abonnement.": 'The local, open-source 3D toolkit for architects. Fully offline, ultra-lightweight, and subscription-free.',
    "ArchiPoly Studio est la suite 3D open-source pour l'architecture. Écosystème unifié, 100% hors-ligne, sans abonnement, conçu pour les étudiants et praticiens de l'architecture.": 'ArchiPoly Studio is the open-source 3D suite for architecture. A unified, fully offline, subscription-free ecosystem for students and practicing architects.',
    'architecture, 3D, open-source, CAO, PBR textures, découpe laser, maquette slicer, RDM, thermique, GLB viewer': 'architecture, 3D, open source, CAD, PBR textures, laser cutting, model slicing, structural analysis, thermal analysis, GLB viewer'
  };
  const originalTextNodes = [...document.body.childNodes].flatMap(node => {
    const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    return textNodes;
  }).map(node => ({ node, value: node.nodeValue }));
  const originalAttributes = [...document.querySelectorAll('[aria-label], [title], [alt], meta[name="description"], meta[name="keywords"], meta[property="og:title"], meta[property="og:description"]')]
    .flatMap(element => ['aria-label', 'title', 'alt', 'content']
      .filter(attribute => element.hasAttribute(attribute))
      .map(attribute => ({ element, attribute, value: element.getAttribute(attribute) })));
  const originalDocumentTitle = document.title;

  function setLanguage(language) {
    const isEnglish = language === 'en';
    document.documentElement.lang = language;
    document.title = isEnglish ? (translations[originalDocumentTitle] || originalDocumentTitle) : originalDocumentTitle;

    originalTextNodes.forEach(({ node, value }) => {
      const match = value.match(/^(\s*)([\s\S]*?)(\s*)$/);
      const key = match[2].replace(/\s+/g, ' ');
      node.nodeValue = isEnglish && translations[key]
        ? `${match[1]}${translations[key]}${match[3]}`
        : value;
    });

    originalAttributes.forEach(({ element, attribute, value }) => {
      element.setAttribute(attribute, isEnglish ? (attributeTranslations[value] || value) : value);
    });

    document.querySelectorAll('.language-button').forEach(button => {
      const active = button.dataset.language === language;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  languageButtons.forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.language));
  });

  // --------------------------------------------------------------------------
  // 01. NAVIGATION FLUIDE (SMOOTH SCROLL)
  // --------------------------------------------------------------------------
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const navbar = document.getElementById('navbar');
  const navHeight = navbar ? navbar.offsetHeight : 72;

  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      
      // Si lien vide ou juste '#'
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();

        // Fermer le menu mobile si ouvert
        closeMobileMenu();

        // Calcul de la position avec prise en compte de la hauteur de la navbar
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - (navHeight + 16);

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Mettre à jour l'URL sans saut brutal
        if (history.pushState) {
          history.pushState(null, null, targetId);
        }
      }
    });
  });

  // --------------------------------------------------------------------------
  // 02. MENU MOBILE RESPONSIVE (HAMBURGER)
  // --------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobile-toggle-btn');
  const mainNav = document.getElementById('main-nav');

  function toggleMobileMenu() {
    const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
    mobileToggle.setAttribute('aria-expanded', !isExpanded);
    mainNav.classList.toggle('open');
  }

  function closeMobileMenu() {
    if (mobileToggle && mainNav && mainNav.classList.contains('open')) {
      mobileToggle.setAttribute('aria-expanded', 'false');
      mainNav.classList.remove('open');
    }
  }

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', toggleMobileMenu);

    // Fermer le menu si clic en dehors
    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !mobileToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 03. SUIVI DU DÉFILEMENT & LIENS ACTIFS DANS LA NAVBAR
  // --------------------------------------------------------------------------
  const navItems = document.querySelectorAll('.nav-link');

  function updateActiveNavLink() {
    const scrollPosition = window.pageYOffset + (navbar ? navbar.offsetHeight : 72) + 80;
    let activeItem = navItems[0];

    navItems.forEach(item => {
      const target = document.querySelector(item.getAttribute('href'));
      if (target && scrollPosition >= target.getBoundingClientRect().top + window.pageYOffset) {
        activeItem = item;
      }
    });

    navItems.forEach(item => item.classList.toggle('active', item === activeItem));
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink();

  // --------------------------------------------------------------------------
  // 04. GESTION DU TOAST DE TÉLÉCHARGEMENT
  // --------------------------------------------------------------------------
  const downloadToast = document.getElementById('download-toast');
  const toastCloseBtn = document.getElementById('toast-close-btn');
  const downloadButtons = [
    document.getElementById('final-download-btn'),
    document.getElementById('hero-cta-btn'),
    document.getElementById('nav-download-btn')
  ];

  function showDownloadToast() {
    if (downloadToast) {
      downloadToast.classList.add('show');
      // Masquer automatiquement après 7 secondes
      setTimeout(() => {
        downloadToast.classList.remove('show');
      }, 7000);
    }
  }

  if (toastCloseBtn) {
    toastCloseBtn.addEventListener('click', () => {
      downloadToast.classList.remove('show');
    });
  }

  downloadButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        // Si le bouton mène à une ancre (#download-section), on ne bloque pas le scroll
        const href = btn.getAttribute('href');
        if (href && href.startsWith('#')) {
          // Laisse le smooth-scroll opérer
        } else {
          // Si lien externe vers la release
          showDownloadToast();
        }
      });
    }
  });

  // --------------------------------------------------------------------------
  // 05. ANIMATION D'APPARITION AU DÉFILEMENT (INTERSECTION OBSERVER)
  // --------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('[data-reveal]');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback si pas de support IntersectionObserver
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // --------------------------------------------------------------------------
  // 06. EFFET INTERACTIF CAD DANS LE VIEWPORT DU HERO (MICRO-INTERACTION)
  // --------------------------------------------------------------------------
  const previewFrame = document.querySelector('.app-preview-frame');
  const axisX = document.querySelector('.axis-x');
  const axisY = document.querySelector('.axis-y');

  if (previewFrame && axisX && axisY) {
    previewFrame.addEventListener('mousemove', (e) => {
      const rect = previewFrame.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;

      axisX.textContent = `X: ${(12.45 + x * 0.1).toFixed(3)} m`;
      axisY.textContent = `Y: ${(-8.12 + y * 0.1).toFixed(3)} m`;
    });

    previewFrame.addEventListener('mouseleave', () => {
      axisX.textContent = 'X: +12.450 m';
      axisY.textContent = 'Y: -08.120 m';
    });
  }

  // --------------------------------------------------------------------------
  // 07. ANNÉE DYNAMIQUE DANS LE FOOTER
  // --------------------------------------------------------------------------
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
