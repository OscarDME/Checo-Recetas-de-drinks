// ─────────────────────────────────────────────────────────────────────────────
// COPY.JS — Zdroj VEŠKERÉHO viditelného textu pro landing page.
// Doc §7: Žádný natvrdo napsaný text v komponentách. Co je na obrazovce, je tady.
// ─────────────────────────────────────────────────────────────────────────────

export const copy = {
  // ── SEO / METADATA (čte to Layout.astro) ──────────────────────────────────
  metadata: {
    lang: 'cs',
    title: '150 receptů na prémiové koktejly k tobě domů',
    description:
      'Recepty na top párty drinky — dostupné suroviny, rychlá příprava. Ohrom svou partu, ušetři za předražené bary a staň se hvězdou večera. Včetně exkluzivních bonusů.',
    canonical: 'https://150receitascopao.netlify.app',
    ogImage: '/og-cover.jpg',
    ogType: 'website',
    siteName: 'SVĚT KOKTEJLŮ',
  },

  // ── 1. TIMER STICKY HLAVIČKA ────────────────────────────────────────────────
  timerBar: {
    icon: '⏰',
    label: 'Tato nabídka vyprší za:',
    initialMinutes: 9,
    initialSeconds: 57,
  },

  // ── 2. HERO ───────────────────────────────────────────────────────────────
  hero: {
    tag: '🍋 Exkluzivní nabídka',
    titleHighlight: '150 receptů na luxusní koktejly',
    titleConnector: 'pro tvoje',
    titleHighlightGreen: 'maximální potěšení',
    titleEnd: 'I když s mícháním teprve začínáš',
    deliveryLabel: 'Přístup získáš okamžitě přes',
    deliveryChannels: [
      { label: 'WhatsApp', kind: 'whatsapp' },
      { label: 'E-mail', kind: 'email' },
    ],
    videoAlt: 'Ukázka balíčku 150 receptů na domácí koktejly',
    ctaLabel: '✅ CHCI SVOJE RECEPTY HNED TEĎ',
    ctaSub: '🔒 100% bezpečný nákup • Okamžitý přístup',
  },

  // ── 3. VÝHODY ─────────────────────────────────────────────────────────
  benefits: {
    intro:
      'Recepty poskládané pro ten nejlepší zážitek — dostupné suroviny, blesková příprava,',
    introStrong: 'a neskutečná chuť i vzhled, kterými dostaneš do kolen každého hosta!',
    items: [
      'Míchat jakýkoliv koktejl naprosto bez předchozích zkušeností',
      'Tvořit doslova magii i bez profi vybavení nebo luxusní kuchyně',
      'Vychutnávat si ověřené drinky z běžně dostupných surovin',
      'Zářit jako hvězda na každé domácí párty, na chatě nebo při grilovačce s přáteli',
    ],
    ctaLabel: '🍹 CHCI SVOJE RECEPTY HNED TEĎ',
  },

  // ── 4. KARUSEL S RECEPTY ────────────────────────────────────────────────
  carousel: {
    title: '🍹 Malá ochutnávka receptů, které si',
    titleHighlight: 'užijete s partou!',
    slides: [
      { caption: 'Sladký polibek', alt: 'Koktejl Sladký polibek' },
      {
        caption: 'Španělské víno s marakujou',
        alt: 'Koktejl Španělské víno s marakujou',
      },
      { caption: 'Krémové Marakuja Beats', alt: 'Koktejl Krémové Marakuja Beats' },
      { caption: 'Koktejl s bonbóny Halls', alt: 'Koktejl s bonbóny Halls' },
      { caption: 'Letní vánek', alt: 'Koktejl Letní vánek' },
      {
        caption: 'Caipirinha s marakujou a kávou',
        alt: 'Koktejl Caipirinha s marakujou a kávou',
      },
    ],
    prevLabel: 'Předchozí snímek',
    nextLabel: 'Další snímek',
    dotLabel: 'Přejít na snímek',
  },

  // ── 5. BONUSY ──────────────────────────────────────────────────────────────
  bonuses: {
    title: '🎁 A k tomu samozřejmě dostaneš',
    titleHighlight: 'BONUSY!',
    items: [
      {
        tag: 'Bonus 1',
        title: '50 receptů na alkoholické panáky a punče',
        description: 'Ideální párty drinky, které připravíš bleskově a zvedneš s nimi náladu celé partě.',
        alt: '50 receptů na alkoholické panáky a punče',
      },
      {
        tag: 'Bonus 2',
        title: 'Chytrý nákupní seznam — jak ušetřit peníze',
        description:
          'Zjisti, jaké suroviny přesně koupit, abys namíchal top koktejly a nenechal přitom půlku výplaty v předražených barech.',
        alt: 'Nákupní seznam a kalkulačka',
      },
      {
        tag: 'Bonus 3',
        title: '✅ Průvodce: Jak uspořádat dokonalý koktejlový večer',
        description: 'Ověřené nápady krok za krokem, jak vytvořit nezapomenutelný zážitek a úplně ohromit své hosty.',
        alt: 'Manuál pro domácí párty',
      },
      {
        tag: 'Bonus 4',
        title: 'Video lekce: Jak zdobit a servírovat jako profík',
        description:
          'Nauč se tajemství profi barmanů. Proměň i ten nejobyčejnější drink v pětihvězdičkové umělecké dílo.',
        alt: 'Video lekce zdobení koktejlů',
      },
    ],
  },

  // ── 6. CENY ──────────────────────────────────────────────────────────────
  pricing: {
    sectionId: 'ceny',
    title: 'Vyber si, jak chceš dneska začít:',
    complete: {
      badge: '⭐ Nejprodávanější',
      title: 'Kompletní balíček: 150+ receptů na koktejly',
      descriptionLead: '150+ receptů na neskutečné domácí koktejly + všechny',
      descriptionStrong: 'exkluzivní bonusy,',
      descriptionTail: 'abys byl ten nejlepší domácí barman.',
      mockupAlt: 'Mockup kompletního balíčku se 150 recepty',
      includesLabel: '🎁 Obsahuje všechny bonusy:',
      items: [
        '150+ receptů na prémiové koktejly',
        'Seznam levných alternativ k drahému alkoholu',
        'Průvodce chytrým nakupováním surovin',
        'Manuál pro dokonalou domácí párty',
        'Video lekce profesionálního zdobení',
      ],
      strikePrice: 'Místo 749 Kč',
      price: '199 Kč',
      priceNote: 'okamžitý přístup',
      ctaLabel: '🛒 CHCI KOMPLETNÍ BALÍČEK',
      footer: '✅ Okamžitý přístup · E-mail + WhatsApp · Garance 14 dní',
    },
  },

  // ── 7. ZÁRUKA ───────────────────────────────────────────────────────────
  guarantee: {
    icon: '🛡️',
    title: '14 dní 100% garance vrácení peněz',
    description:
      'Pokud tě recepty z jakéhokoliv důvodu nenadchnou, vrátíme ti peníze do posledního haléře. Žádné zbytečné otázky, žádné nervy.',
  },

  // ── 8. FAQ (Často kladené otázky) ────────────────────────────────────────────────
  faq: {
    title: 'Často kladené',
    titleHighlight: 'otázky:',
    items: [
      {
        q: 'Potřebuju nějaké zkušenosti, abych to zvládl namíchat?',
        a: 'Rozhodně ne! Recepty jsou popsané tak jednoduše, že to zvládne každý, i když koktejl míchá poprvé v životě.',
      },
      {
        q: 'Musím si kupovat drahé shakery a profi vybavení?',
        a: 'Vůbec. Všechno v klidu zvládneš s běžným nádobím, které už teď máš doma v kuchyni.',
      },
      {
        q: 'Pro jaké příležitosti se tyhle koktejly hodí?',
        a: 'Úplně pro všechny! Od relaxu po těžkém dni v práci, přes romantickou večeři, až po divokou domácí párty nebo víkend na chatě.',
      },
      {
        q: 'Jsou ingredience drahé?',
        a: 'Ne. Díky našemu chytrému nákupnímu seznamu zjistíš, jak dosáhnout prémiové chuti s cenově dostupnými surovinami z běžného supermarketu.',
      },
      {
        q: 'Jak se k receptům po zaplacení dostanu?',
        a: 'Přístup je okamžitý! Jakmile platba projde, pošleme ti všechno rovnou na e-mail a do WhatsAppu.',
      },
      {
        q: 'Co když se mi to nebude líbit, mám nějakou záruku?',
        a: 'Jasně! Máš celých 14 dní na vyzkoušení. Pokud nebudeš stoprocentně spokojený, vrátíme ti všechny peníze zpět.',
      },
    ],
  },

  // ── 9. URGENTNOST ──────────────────────────────────────────────────────────
  urgency: {
    text: '⏰ Neodkládej to — víkend se blíží a s ním další nudný večer u televize. Změň to hned teď!',
  },

  // ── 10. FINÁLNÍ CTA ─────────────────────────────────────────────────────────
  finalCta: {
    ctaLabel: '🍹 CHCI PŘÍSTUP KE 150 RECEPTŮM HNED TEĎ',
    subText: '🔒 Okamžitý přístup • Garance 14 dní • Bezpečná platba',
  },

  // ── 11. BEZPEČNOST (badges) ────────────────────────────────────────────────
  security: {
    items: [
      { icon: '🔒', label: 'SSL Ochrana' },
      { icon: '💳', label: 'Bezpečná platba' },
      { icon: '📲', label: 'Okamžitý přístup' },
    ],
  },

  // ── 12. PATIČKA ────────────────────────────────────────────────────────────
  footer: {
    text: '© 2026 · SVĚT KOKTEJLŮ · Všechna práva vyhrazena',
  },

  // ── A11Y / pomocný text pro přístupnost ──
  a11y: {
    skipToContent: 'Přeskočit na hlavní obsah',
  },
};