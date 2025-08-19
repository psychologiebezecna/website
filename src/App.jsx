import React, { useState } from 'react';
import { User, Sun, DollarSign, Phone, Mail, MapPin, Shield, ChevronDown, ChevronUp } from 'lucide-react';

// Helper component for section titles
const SectionTitle = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
    {children}
  </h2>
);

// Helper component for service cards
const ServiceCard = ({ title, children }) => (
  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-2xl font-semibold text-teal-700 mb-4">{title}</h3>
    <div className="text-gray-600 space-y-4">
      {children}
    </div>
  </div>
);

// Main App Component
export default function PsychologistWebsite() {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);

  const navLinks = [
    { href: '#sluzby', label: 'Služby' },
    { href: '#o-mne', label: 'O mně' },
    { href: '#cenik', label: 'Ceník' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  return (
    <div className="bg-gray-50 font-sans text-gray-700">
      {/* --- Header & Navigation --- */}
      <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-teal-800">
            Psychologie Bezecná
          </a>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-600 hover:text-teal-600 transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            {/* Mobile menu button can be added here */}
          </div>
        </nav>
      </header>

      <main>
        {/* --- Hero Section --- */}
        <section 
          className="relative text-center py-24 md:py-40 bg-cover bg-center text-white"
          // To change the background image, replace the URL below with your own.
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop')" }}
        >
            {/* This div creates a dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="container mx-auto px-6 relative">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-md">
                    Najděte klid a jistotu na své cestě
                </h1>
                <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-sm">
                    Bezpečný prostor pro vaše myšlenky, emoce a osobní růst.
                </p>
                <a href="#kontakt" className="mt-10 inline-block bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-teal-700 transition-transform transform hover:scale-105 duration-300">
                    Domluvit si konzultaci
                </a>
            </div>
        </section>


        {/* --- Services Section --- */}
        <section id="sluzby" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <SectionTitle>Služby</SectionTitle>
            <div className="grid md:grid-cols-2 gap-12">
              
              {/* What I Offer */}
              <ServiceCard title="Co nabízím?">
                <p>
                  Psychologické poradenství je krátkodobá, odborná podpora, která vám může pomoci lépe zvládat náročné období, ve kterém se cítíte ztracení, vyčerpaní nebo pod tlakem.
                </p>
                <p>Můžete se na mě obrátit například když:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                  <li>řešíte vztahové obtíže – partnerské, rodinné nebo pracovní</li>
                  <li>procházíte rozchodem, rozvodem nebo jinou ztrátou</li>
                  <li>jste dlouhodobě pod tlakem, ve stresu nebo na pokraji vyhoření</li>
                  <li>čelíte náročným rozhodnutím nebo životním změnám</li>
                  <li>máte potíže s komunikací, sebehodnotou nebo hranicemi</li>
                  <li>potřebujete nadhled, podporu a praktické nástroje, jak se pohnout dál</li>
                </ul>
                <p>
                  Poradenství je zaměřené na přítomnost a blízkou budoucnost. Společně se podíváme na to, co právě prožíváte, co vás tíží nebo brzdí.
                </p>
              </ServiceCard>

              {/* What I Don't Offer */}
              <ServiceCard title="Co nenabízím?">
                <h4 className="font-semibold text-gray-700">Dlouhodobou psychoterapii</h4>
                <p>
                  Protože jsem teprve na samém počátku psychoterapeutického výcviku, v případě potřeby hlubší práce vám doporučím kolegu s absolvovaným výcvikem a pomohu vám najít někoho vhodného.
                </p>
                <h4 className="font-semibold text-gray-700 mt-6">Dětskou diagnostiku a psychoterapii</h4>
                <p>
                  Nenabízím diagnostiku ani psychoterapii pro děti a dospívající.
                </p>
                <div className="mt-4 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
                  <p className="font-semibold text-amber-800">Poznámka pro rodiče</p>
                  <p className="text-amber-700 text-sm mt-1">
                    Pokud jako rodič potřebujete poradit ohledně Vašeho dítěte a čekáte na termín u jiného odborníka, mohu poskytnout krátkodobé podpůrné vedení a pomoci s hledáním vhodného specialisty.
                  </p>
                </div>
              </ServiceCard>
            </div>
          </div>
        </section>

        {/* --- About Me Section --- */}
        <section id="o-mne" className="py-20 md:py-28 bg-teal-50">
          <div className="container mx-auto px-6">
            <SectionTitle>O mně</SectionTitle>
            {/* MODIFICATION: Changed items-center to md:items-start to prevent image from shifting down on desktop */}
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
              <div className="flex-shrink-0">
                <img 
                  src="https://placehold.co/160x160/a0d2db/3c827d?text=Andrea" 
                  alt="Mgr. Andrea Bezecná"
                  className="rounded-full w-40 h-40 object-cover border-4 border-white shadow-md"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-800">Mgr. Andrea Bezecná</h3>
                <p className="text-teal-600 font-medium mt-1">Psycholožka</p>
                <div className="mt-6 text-gray-600 space-y-4">
                  <p className="font-semibold">Klíčové zkušenosti:</p>
                  <ul className="list-disc list-inside space-y-2 pl-4 text-sm">
                      <li>Studium psychologie na PedF UK v Praze (ukončeno 2018).</li>
                      <li>6 let praxe v SPC Jedličkova ústavu s dětmi a dospívajícími.</li>
                      <li>Aktuálně psycholog ve zdravotnictví na Klinice rehabilitačního lékařství VFN v Praze.</li>
                      <li>Zaměření na dospělé po poškození mozku, neuropsychologickou diagnostiku a kognitivní rehabilitaci.</li>
                      <li>Důraz na psychohygienu, sebepéči a work-life balance.</li>
                      <li>Od 2026 ve výcviku Kognitivně behaviorální terapie (KBT).</li>
                  </ul>
                  
                  {/* Collapsible full text */}
                  <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isAboutExpanded ? 'max-h-screen' : 'max-h-0'}`}>
                    <div className="pt-4 space-y-4 text-sm text-gray-600">
                       <p>Vysokoškolské studium jednooborové psychologie jsem absolvovala na Pedagogické fakultě Univerzity Karlovy v Praze v roce 2018. Ještě během studia jsem 3 roky pracovala v neziskové organizaci Proxima Sociale, kde jsem v terapeutické dvojici lektorovala podpůrné skupiny pro dospívající (12 - 18 let), kteří měli zkušenost s příbuzenskou pěstounskou péčí anebo s OSPOD.</p>
                       <p>Po ukončení studia jsem 6 let působila jako psycholog v ambulantní části Speciálně pedagogického centra Jedličkova ústavu, kde jsem pracovala s dětmi a dospívajícími s tělesným postižením či jiným dlouhodobým onemocněním. Mojí náplní práce byla tehdy především diagnostika kognitivních funkcí, nastavování podpůrných opatření ve vzdělávání ve spolupráci se školami, a v neposlední řadě také práce s rodinou.</p>
                       <p>Od ledna roku 2024 pracuji jako psycholog ve zdravotnictví na Klinice rehabilitačního lékařství Všeobecné fakultní nemocnice v Praze, kde se věnuji především dospělým lidem se získaným poškozením mozku (CMP, úrazy, pooperační stavy..). Kromě neuropsychologické diagnostiky se zde věnuji také nápravě a rehabilitaci kognitivních funkcí, a poskytuji psychologickou podporu jak klientům, tak i jejich blízkým.</p>
                       <p>Ve své práci vnímám jako velmi důležitou sféru osobní psychohygieny a sebepéče, velkým tématem je v dnešní době stále častěji umění vyvážení pracovní zátěže a odpočinku, což vnímám jako velmi důležité pilíře pro spokojený život nejen u klientů, kteří jsou v procesu rehabilitace a potýkají se nečekaně s nějakými zdravotními komplikacemi. Až sekundárně se v případě potřeby zabývám konkrétními obtížemi, jako jsou úzkostná nebo depresivní symptomatika, poruchy spánku, poruchy kognitivních funkcí, snížené sebehodnocení, obtíže v mezilidské komunikaci, vztahové či rodinné problémy, syndrom vyhoření a další.</p>
                       <p>V průběhu roku 2026 nastupuji do akreditovaného psychoterapeutického výcviku v Kognitivně behaviorální terapii.</p>
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsAboutExpanded(!isAboutExpanded)}
                    className="flex items-center gap-2 text-teal-600 hover:text-teal-800 font-semibold mt-4 transition-colors duration-300"
                  >
                    {isAboutExpanded ? 'Skrýt podrobnosti' : 'Zobrazit více o mně'}
                    {isAboutExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Pricing Section --- */}
        <section id="cenik" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <SectionTitle>Ceník</SectionTitle>
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="grid sm:grid-cols-2 gap-8 text-center">
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800">První / jednorázová konzultace</h3>
                  <p className="text-4xl font-bold text-teal-600 mt-4">800,- Kč</p>
                  <p className="text-gray-500 mt-2">/ 60 minut</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800">Opakovaná konzultace</h3>
                  <p className="text-4xl font-bold text-teal-600 mt-4">1000,- Kč</p>
                  <p className="text-gray-500 mt-2">/ 60 minut</p>
                </div>
              </div>
              <div className="text-center text-gray-600 space-y-4 pt-8 border-t">
                <p><strong>Platba:</strong> V hotovosti, QR kódem na místě, nebo převodem na účet.</p>
                <p>Služby jsou poskytovány za přímou úhradu, nemám smlouvy se zdravotními pojišťovnami.</p>
                <p>Ve složité socioekonomické situaci je možná individuální dohoda na nižší sazbě.</p>
                <p className="font-semibold text-red-700">Storno podmínky: Zrušení sezení méně než 24 hodin předem je účtováno plnou cenou.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Contact Section --- */}
        <section id="kontakt" className="py-20 md:py-28 bg-teal-50">
          <div className="container mx-auto px-6">
            <SectionTitle>Kontakt</SectionTitle>
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-10">
                    {/* Left Column: Info */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800">Mgr. Andrea Bezecná</h3>
                            <p className="text-gray-500">IČO: 23530472</p>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-teal-600 mt-1 flex-shrink-0" size={20}/>
                                <div>
                                    <h4 className="font-semibold text-gray-700">Adresa konzultací</h4>
                                    <p>Ostrovského 253/3 (Ženské domovy), 3. patro, dv. č. 3037<br/>150 00 Praha 5</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <Phone className="text-teal-600 mt-1 flex-shrink-0" size={20}/>
                                <div>
                                    <h4 className="font-semibold text-gray-700">Telefon</h4>
                                    <p>DOPLNIT</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <Mail className="text-teal-600 mt-1 flex-shrink-0" size={20}/>
                                <div>
                                    <h4 className="font-semibold text-gray-700">E-mail</h4>
                                    <p>DOPLNIT</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <DollarSign className="text-teal-600 mt-1 flex-shrink-0" size={20}/>
                                <div>
                                    <h4 className="font-semibold text-gray-700">Číslo účtu</h4>
                                    <p>DOPLNIT</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
                          <p className="font-semibold text-blue-800">První kontakt</p>
                          <p className="text-blue-700 text-sm mt-1">
                            Před navázáním spolupráce se prosím ozvěte prostřednictvím <strong>SMS</strong> nebo <strong>e-mailem</strong>. Stručně popište Vaši situaci a zanechte na sebe kontakt, ozvu se Vám zpět ohledně termínu.
                          </p>
                        </div>
                    </div>

                    {/* Right Column: Map */}
                    <div>
                        <div className="aspect-w-1 aspect-h-1 md:aspect-h-full md:h-full w-full bg-gray-200 rounded-lg overflow-hidden">
                            {/* MODIFICATION: Updated iframe src for correct map pin location */}
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.9491089643243!2d14.40008707682758!3d50.06851471479017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b9457240a2afd%3A0x4f60e664a96d9491!2sOstrovsk%C3%A9ho%20253%2F3%2C%20150%2000%20Praha%205-And%C4%9Bl!5e0!3m2!1scs!2scz!4v1755618450355!5m2!1scs!2scz" 
                                width="100%" 
                                height="100%" 
                                style={{ border:0 }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa"
                                className="min-h-[300px] md:min-h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-gray-800 text-gray-400 py-12">
        <div className="container mx-auto px-6 text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
                <Shield size={16} />
                <h4 className="font-semibold">Ochrana osobních údajů</h4>
            </div>
            <p className="max-w-3xl mx-auto text-xs">
              Veškeré záznamy z našich setkání uchovávám výhradně za účelem poskytování psychologických služeb a pro potřeby vzájemné spolupráce. Osobní údaje klientů zpracovávám v souladu s Nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR) a zákonem č. 110/2019 Sb., o zpracování osobních údajů. Osobní údaje nejsou předávány třetím stranám bez výslovného souhlasu klienta, s výjimkou případů daných legislativou.
            </p>
            <p className="mt-8 text-sm">
              &copy; {new Date().getFullYear()} Mgr. Andrea Bezecná. Všechna práva vyhrazena.
            </p>
        </div>
      </footer>
    </div>
  );
}
