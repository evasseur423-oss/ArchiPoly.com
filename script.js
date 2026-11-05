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
    'Télécharger pour Windows': 'Download for Windows',
    'ArchiPoly-Setup-1.0.0.exe • 64-bit (~84 Mo)': 'ArchiPoly-Setup-1.0.0.exe • 64-bit (~84 MB)',
    'Télécharger pour macOS': 'Download for macOS',
    'ArchiPoly-1.0.0-arm64.dmg • Apple Silicon (~116 Mo)': 'ArchiPoly-1.0.0-arm64.dmg • Apple Silicon (~116 MB)',
    'Télécharger pour Windows (.exe)': 'Download for Windows (.exe)',
    'Télécharger pour macOS (.dmg)': 'Download for macOS (.dmg)',
    'Apple Silicon (M1/M2/M3/M4) • SHA256 vérifié': 'Apple Silicon (M1/M2/M3/M4) • SHA256 verified',
    'SHA-256 (macOS arm64) :': 'SHA-256 (macOS arm64):',
    'Copier': 'Copy',
    'Windows': 'Windows',
    'macOS': 'macOS',
    "Note d'installation :": 'Installation note:',
    "Si SmartScreen affiche un écran bleu, cliquez sur 'Informations complémentaires' puis 'Exécuter quand même'. Logiciel libre sans certificat payant.": "If SmartScreen displays a blue screen, click 'More info' and then 'Run anyway'. Free software without a paid certificate.",
    "Si macOS signale une application d'un développeur non vérifié, faites Clic droit > 'Ouvrir', ou dans le Terminal :": "If macOS reports an unverified developer, right-click > 'Open', or run in Terminal:",
    "Le paquet d'installation est téléchargé depuis GitHub Releases.": 'The installer package is downloaded from GitHub Releases.',
    'Explorer le code source': 'Explore the source code',
    'Version 1.0 (Expérimentale)': 'Version 1.0 (Experimental)',
    "Développé avec l'assistance de l'IA": 'Developed with AI assistance',
    '4 outils pour l’architecture': '4 tools for architecture',
    "ArchiPoly existe toujours : c’est la boîte à outils qui permet de tester rapidement chaque outil. Visualisation 3D, création de matériaux, découpe de maquette et calculs architecturaux restent accessibles depuis un même point d’entrée.": 'ArchiPoly is here to stay: it is the toolbox for quickly testing each tool. 3D visualization, material creation, model making, and architectural calculations remain accessible from one place.',
    "ArchiPoly reste une boîte à outils pour lancer et tester rapidement chaque logiciel. Material Library et PBR Alchemist sont réunis dans un seul outil de création et de gestion de matériaux.": 'ArchiPoly remains a toolbox for quickly launching and testing each software tool. Material Library and PBR Alchemist are brought together in one material creation and management tool.',
    'MATERIALS & TEXTURES': 'MATERIALS & TEXTURES',
    'Material Library + PBR Alchemist': 'Material Library + PBR Alchemist',
    'Un seul logiciel pour créer et gérer vos matériaux.': 'One application to create and manage your materials.',
    'Les deux outils sont destinés à fusionner : gérez vos bibliothèques PBR, prévisualisez les matériaux en 3D et créez des textures sans couture à partir de photos.': 'The two tools are planned to merge: manage PBR libraries, preview materials in 3D, and create seamless textures from photos.',
    'Bibliothèque PBR': 'PBR library',
    'Textures seamless': 'Seamless textures',
    'Découvrir l’outil matériaux': 'Explore the material tool',
    '3D VIEWER': '3D VIEWER',
    '3D Visualizer': '3D Visualizer',
    'Découvrir 3D Visualizer': 'Explore 3D Visualizer',
    'Découvrir Maquette Slicer': 'Explore Model Slicer',
    'Découvrir ArchPhysics': 'Explore ArchPhysics',
    '01. Material Library + PBR Alchemist': '01. Material Library + PBR Alchemist',
    '02. 3D Visualizer': '02. 3D Visualizer',
    '03. Maquette Slicer': '03. Model Slicer',
    '04. ArchPhysics': '04. ArchPhysics',
    'Visionneuse universelle rapide (GLB, OBJ, FBX, STL).': 'Fast, universal viewer (GLB, OBJ, FBX, STL).',
    "Inspectez le maillage filaire, vérifiez l'étirement des UVs avec un damier procédural, et gérez la visibilité de vos calques.": 'Inspect wireframes, check UV stretching with a procedural checkerboard, and manage layer visibility.',
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
    "Boîte à outils indépendante pour tester rapidement des logiciels dédiés à l’architecture.": 'An independent toolbox for quickly testing software made for architecture.',
    'COMMUNAUTÉ': 'COMMUNITY',
    'Dépôt GitHub': 'GitHub repository',
    'Signaler un bug (Issues)': 'Report a bug (Issues)',
    'Notes de version': 'Release notes',
    'Licence GPLv3': 'GPLv3 license',
    'ArchiPoly Studio. Open-source sous licence GPLv3.': 'ArchiPoly Studio. Open source under the GPLv3 license.',
    'Don libre': 'Donate',
    'BUILD : 1.0.0-RELEASE': 'BUILD: 1.0.0-RELEASE',
    'SYS : WIN-X64 / MAC-ARM64': 'SYS : WIN-X64 / MAC-ARM64',
    'SYS : WIN-X64': 'SYS: WIN-X64',
    'CAD : METRIC / SI': 'CAD: METRIC / SI'
  };
  const attributeTranslations = {
    'Retour au sommet - ArchiPoly': 'Back to top - ArchiPoly',
    'Choix de la langue': 'Choose language',
    "Note d'installation Windows": 'Windows installation note',
    "Note d'installation macOS": 'macOS installation note',
    "Copier l'empreinte SHA-256": 'Copy SHA-256 checksum',
    "Copier le SHA-256": 'Copy SHA-256',
    'Navigation principale': 'Main navigation',
    "Note d'installation Windows": 'Windows installation note',
    'Dépôt GitHub': 'GitHub repository',
    'Faire un don libre via Stripe': 'Make a voluntary donation via Stripe',
    'Menu': 'Menu',
    'Capture d’écran d’ArchiPoly Studio avec le modèle 3D et les résultats de calcul ArchPhysics': 'ArchiPoly Studio screenshot showing the 3D model and ArchPhysics calculation results',
    'Fermer la notification': 'Close notification',
    'Découvrir Material Library et PBR Alchemist': 'Explore Material Library and PBR Alchemist',
    'Découvrir 3D Visualizer': 'Explore 3D Visualizer',
    'Découvrir Maquette Slicer': 'Explore Model Slicer',
    'Découvrir ArchPhysics': 'Explore ArchPhysics',
    "ArchiPoly Studio est une boîte à outils open-source pour tester rapidement des logiciels d'architecture : visualisation 3D, matériaux, maquettes et calculs.": 'ArchiPoly Studio is an open-source toolbox for quickly testing architecture software: 3D visualization, materials, model making, and calculations.',
    "ArchiPoly reste une boîte à outils open-source pour tester rapidement des outils dédiés à l'architecture.": 'ArchiPoly remains an open-source toolbox for quickly testing tools made for architecture.',
    'ArchiPoly Studio — Suite 3D locale & open-source pour architectes': 'ArchiPoly Studio — Offline 3D Suite for Architects',
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
  const toastTitle = document.getElementById('toast-title');
  const toastDesc = document.getElementById('toast-desc');
  const downloadButtons = [
    { el: document.getElementById('final-download-btn'), os: 'win' },
    { el: document.getElementById('hero-cta-btn'), os: 'win' },
    { el: document.getElementById('final-download-mac-btn'), os: 'mac' },
    { el: document.getElementById('hero-cta-mac-btn'), os: 'mac' },
    { el: document.getElementById('nav-download-btn'), os: 'nav' }
  ];

  function showDownloadToast(os) {
    if (downloadToast) {
      const isEnglish = document.documentElement.lang === 'en';
      if (toastTitle && toastDesc) {
        if (os === 'mac') {
          toastTitle.textContent = isEnglish
            ? 'ArchiPoly for macOS is downloading...'
            : 'Téléchargement d’ArchiPoly pour macOS en cours...';
          toastDesc.textContent = isEnglish
            ? 'Package ArchiPoly-1.0.0-arm64.dmg (Apple Silicon). SHA-256 verified.'
            : 'Paquet ArchiPoly-1.0.0-arm64.dmg (Apple Silicon). SHA-256 vérifié.';
        } else {
          toastTitle.textContent = isEnglish
            ? 'ArchiPoly is downloading...'
            : 'Téléchargement d’ArchiPoly en cours...';
          toastDesc.textContent = isEnglish
            ? 'The installer ArchiPoly Setup 1.0.0.exe is downloading from GitHub Releases.'
            : 'Le programme d’installation ArchiPoly Setup 1.0.0.exe est téléchargé depuis GitHub Releases.';
        }
      }
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

  downloadButtons.forEach(({ el, os }) => {
    if (el) {
      el.addEventListener('click', (e) => {
        // Si le bouton mène à une ancre (#download-section), on ne bloque pas le scroll
        const href = el.getAttribute('href');
        if (href && href.startsWith('#')) {
          // Laisse le smooth-scroll opérer
        } else {
          // Si lien externe vers la release
          showDownloadToast(os);
        }
      });
    }
  });

  // Copie de l'empreinte SHA-256
  const copyChecksumBtn = document.getElementById('copy-checksum-btn');
  if (copyChecksumBtn) {
    copyChecksumBtn.addEventListener('click', async () => {
      const checksumVal = '5260a423b40e12aba3b45df7a5e5a1146a57d618ed143185b5454394b8586f1a';
      try {
        await navigator.clipboard.writeText(checksumVal);
        const copyText = copyChecksumBtn.querySelector('.copy-text');
        if (copyText) {
          const original = copyText.textContent;
          copyText.textContent = document.documentElement.lang === 'en' ? 'Copied!' : 'Copié !';
          copyChecksumBtn.classList.add('copied');
          setTimeout(() => {
            copyText.textContent = original;
            copyChecksumBtn.classList.remove('copied');
          }, 2000);
        }
      } catch (err) {
        console.error('Erreur lors de la copie', err);
      }
    });
  }

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
