import React from 'react';
import { Landmark, Phone, Mail, MapPin, ShieldUser } from 'lucide-react';
import logo from "./assets/logo.png";
import heroBackground from "./assets/background.webp";
import profile from "./assets/andrea.webp"

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
    {children}
  </h2>
);

const ContactItem = ({ icon: Icon, title, children }) => (
  <div className="flex items-start gap-4">
    <Icon className="text-teal-600 mt-1 flex-shrink-0" size={20} />
    <div>
      <h4 className="font-semibold text-gray-700">{title}</h4>
      <div className="text-gray-600 space-y-1">
        {children}
      </div>
    </div>
  </div>
);

// Main App Component
export default function PsychologistWebsite() {

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
          <a href="#" className="flex items-center gap-3 text-2xl font-bold text-teal-800">
            <img 
              src={logo} 
              alt="Psychologie Bezecná Logo"
              className="h-8 w-8 rounded-md"
            />
            <span>Psychologie Bezecná</span>
          </a>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-600 hover:text-teal-600 transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        {/* --- Hero Section --- */}
        <section 
          className="relative text-center py-24 md:py-40 bg-cover bg-center text-white"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="container mx-auto px-6 relative">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-md">
                    Najděte klid a jistotu na své cestě
                </h1>
                <a href="#kontakt" className="mt-10 inline-block bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-teal-700 transition-transform transform hover:scale-105 duration-300">
                    Domluvit si konzultaci
                </a>
            </div>
        </section>


        {/* --- Services Section --- */}
        <section id="sluzby" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <SectionTitle>Služby</SectionTitle>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-teal-700 mb-6 text-center">Psychologické poradenství</h3>
              <div className="space-y-4 text-gray-600">
                <p className="text-justify">
                  Psychologické poradenství je odborná podpora, která vám může pomoci lépe zvládat náročné období, ve kterém se cítíte ztracení, vyčerpaní nebo pod tlakem. Ne vždy musí jít o „velký problém“ – často stačí, že se něco v životě zamotá, nevíte, jak dál, nebo potřebujete bezpečný prostor, kde si srovnat myšlenky a emoce.
                </p>
                <p className="pt-2">Můžete se na mě obrátit například když:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                  <li>řešíte vztahové obtíže – partnerské, rodinné nebo pracovní</li>
                  <li>procházíte rozchodem, rozvodem nebo jinou ztrátou</li>
                  <li>čelíte důsledkům závažného onemocnění či změny zdravotního stavu - vlastního nebo v rodině</li>
                  <li>jste rodič a hledáte podporu při řešení potíží svého dítěte (např. emoce, chování, škola, vrstevnické vztahy)</li>
                  <li>jste dlouhodobě pod tlakem, ve stresu nebo na pokraji vyhoření</li>
                  <li>čelíte náročným rozhodnutím nebo životním změnám</li>
                  <li>máte potíže s komunikací, sebehodnotou nebo hranicemi</li>
                  <li>potřebujete nadhled, podporu a praktické nástroje, jak se pohnout dál</li>
                </ul>
                <p className="text-justify pt-2">
                  Poradenství je zaměřené na přítomnost a blízkou budoucnost – nepracujeme do hloubky s minulostí, ale spíš se soustředíme na to, co teď potřebujete zvládnout, změnit nebo pochopit. Společně se podíváme na to, co právě prožíváte, co vás tíží nebo brzdí. Pomohu vám lépe se v situaci zorientovat, zvládnout související stres, posílit vaši schopnost rozhodovat se, komunikovat nebo najít konkrétní kroky ke změně.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- About Me Section --- */}
        <section id="o-mne" className="py-20 md:py-28 bg-teal-50">
          <div className="container mx-auto px-6">
            <SectionTitle>O mně</SectionTitle>
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
              <div className="flex-shrink-0">
                <div 
                  style={{ backgroundImage: `url(${profile})` }}
                  className="rounded-full w-40 h-40 object-cover border-4 border-white shadow-md bg-cover bg-center"
                  role="img"
                  aria-label="Mgr. Andrea Bezecná"
                ></div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-800">Mgr. Andrea Bezecná</h3>
                <p className="text-teal-600 font-medium mt-1">Psycholožka</p>
                <div className="mt-6 text-gray-600 space-y-4 text-justify">
                   <p>Vysokoškolské studium jednooborové psychologie jsem absolvovala na Pedagogické fakultě Univerzity Karlovy v Praze v roce 2018. Ještě během studia jsem 3 roky pracovala v neziskové organizaci Proxima Sociale, kde jsem v terapeutické dvojici lektorovala podpůrné skupiny pro dospívající (12–18 let), kteří měli zkušenost s příbuzenskou pěstounskou péčí anebo s <span className="relative group font-normal">OSPOD<sup className="text-teal-600 font-bold cursor-help text-xs ml-0.5">?</sup><span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 bg-gray-700 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">Orgán sociálně-právní ochrany dětí</span></span>.</p>
                   <p>Po ukončení studia jsem 6 let působila jako psycholog v ambulantní části Speciálně pedagogického centra Jedličkova ústavu, kde jsem pracovala s dětmi a dospívajícími s tělesným postižením či jiným dlouhodobým onemocněním. Mojí náplní práce byla tehdy především diagnostika kognitivních funkcí, nastavování podpůrných opatření ve vzdělávání ve spolupráci se školami, a v neposlední řadě také práce s rodinou.</p>
                   <p>Od ledna roku 2024 pracuji jako psycholog ve zdravotnictví na Klinice rehabilitačního lékařství Všeobecné fakultní nemocnice v Praze, kde se věnuji především dospělým lidem se získaným poškozením mozku (CMP, úrazy, pooperační stavy). Kromě neuropsychologické diagnostiky se zde věnuji také nápravě a rehabilitaci kognitivních funkcí, a poskytuji psychologickou podporu jak našim klientům, tak i jejich blízkým.</p>
                   <p>Ve své práci vnímám jako velmi důležitou sféru osobní psychohygieny a sebepéče, velkým tématem je v dnešní době stále častěji umění vyvážení pracovní zátěže a odpočinku, což vnímám jako velmi důležité pilíře pro spokojený život nejen u klientů, kteří jsou v procesu rehabilitace a potýkají se nečekaně s nějakými zdravotními komplikacemi. Dále se v případě potřeby zabývám konkrétními obtížemi, jako jsou úzkostná nebo depresivní symptomatika, poruchy spánku, poruchy kognitivních funkcí, snížené sebehodnocení, obtíže v mezilidské komunikaci, vztahové či rodinné problémy, syndrom vyhoření a další.</p>
                   <p>Od března roku 2024 jsem zařazena v programu specializačního vzdělávání v oboru Klinická psychologie.</p>
                   <p>V lednu roku 2026 nastupuji do akreditovaného psychoterapeutického výcviku v Kognitivně behaviorální terapii.</p>
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
                  <h3 className="text-xl font-semibold text-gray-800 whitespace-nowrap">První / jednorázová konzultace</h3>
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
                <p>Platba možná v hotovosti/prostřednictvím QR kódu během setkání, anebo převodem na účet.</p>
                <p>Služby jsou poskytovány za přímou úhradu. Nemám smlouvy se zdravotními pojišťovnami.</p>
                <p>Pokud se nacházíte ve složité socioekonomické situaci, je možné se individuálně dohodnout na nižší sazbě.</p>
                <p className="font-semibold text-red-700">Pokud se klient na sezení nedostaví bez předchozí omluvy nebo jej zruší méně než 24 hodin předem, je účtována plná cena sezení.</p>
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
                            <p className="text-gray-500">Sídlo: Praha 4, 147 00</p>
                        </div>
                        
                        <div className="space-y-4">
                          <ContactItem icon={MapPin} title="Adresa">
                            <p>Nabízené služby poskytuji <u>po předchozí domluvě</u> na adrese:<br/>Ostrovského 253/3 (Ženské domovy), 3.patro, dv. č.: 3037<br/>150 00 Praha 5, anebo <u>online.</u> </p>
                          </ContactItem>
                          <ContactItem icon={Phone} title="Telefon">
                            <a href="sms:+420608935051" className="text-gray-600 hover:text-teal-600 transition-colors duration-300">+420 608 935 051</a>
                          </ContactItem>
                          <ContactItem icon={Mail} title="E-mail">
                            <a href="mailto:psychologiebezecna@gmail.com" className="text-teal-600 hover:underline">psychologiebezecna@gmail.com</a>
                          </ContactItem>
                          <ContactItem icon={Landmark} title="Číslo účtu">
                            <p>3453240019/3030</p>
                          </ContactItem>
                        </div>
                        <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
                          <p className="text-blue-800 text-sm">
                            Před navázáním spolupráce se prosím nejdříve ozvěte prostřednictvím <b>SMS</b> anebo <b>e-mailem</b> (popište stručně situaci, se kterou se potýkáte, zanechte mi na sebe kontakt a já se Vám ozvu zpět ohledně termínu).
                          </p>
                        </div>
                    </div>

                    {/* Right Column: Map */}
                    <div>
                        <div className="aspect-square md:aspect-auto md:h-full w-full bg-gray-200 rounded-lg overflow-hidden">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.9491089643243!2d14.40008707682758!3d50.06851471479017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b9457240a2afd%3A0x4f60e664a96d9491!2sOstrovsk%C3%Aho%20253%2F3%2C%2C%20150%2000%20Praha%205-And%C4%9Bl!5e0!3m2!1scs!2scz!4v1755618450355!5m2!1scs!2scz" 
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
      <footer className="bg-gray-800 text-gray-400 pt-12 pb-16">
        <div className="container mx-auto px-6 text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
                <ShieldUser size={24} />
                <h4 className="font-semibold">Ochrana osobních údajů</h4>
            </div>
            <div className="max-w-3xl mx-auto text-xs space-y-3">
              <p>
                Veškeré záznamy z našich setkání uchovávám výhradně za účelem poskytování psychologických služeb a pro potřeby vzájemné spolupráce. Osobní údaje klientů zpracovávám v souladu s Nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR) a zákonem č. 110/2019 Sb., o zpracování osobních údajů.
              </p>
              <p>
                Osobní údaje nejsou předávány třetím stranám bez výslovného souhlasu klienta, <u>s výjimkou případů, kdy je poskytnutí údajů vyžadováno platnou legislativou</u> - například při ohlašovací povinnosti v souvislosti s trestnou činností, při bezprostředním ohrožení života nebo zdraví klienta či jiných osob, nebo pokud o údaje požádají oprávněné orgány veřejné moci (např. soud, policie).
              </p>
            </div>
            <p className="mt-8 text-sm">
              &copy; {new Date().getFullYear()} Mgr. Andrea Bezecná. Všechna práva vyhrazena.
            </p>
        </div>
      </footer>
    </div>
  );
}
