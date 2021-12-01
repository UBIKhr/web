---
title: "Nov sam u kriptovalutama - gdje početi?"
date: 2021-01-27
draft: false
image: "images/blog/uvod/kriptovalute.png"
author: "Bruno Škvorc"
tags: ["uvod", "kriptovalute", "edukacija"]
type: "post"
---

# Nov sam u kriptovalutama - gdje početi?

Kriptovalute i blockchain su dva termina kojima se u ovo doba novog _bull marketa_ mnogi razbacuju.
Kako bismo vas zaštitili od potencijalnih prijevara (vidi
[Pi](https://ubik.hr/blog/pi-coin-nije-kriptovaluta-i-potencijalno-je-opasan/),
[Neter](https://crobitcoin.com/je-li-netercoin-prijevara-koja-hara-hrvatskim-trzistem/), i slične)
te usmjerili na pravi put kod ulaženja u ovaj novi ekosustav, bilo financijski bilo karijerno (ili
oboje!), UBIK je sastavio ovaj kratki uvodni članak s popratnim linkovima.

Članak ćemo držati ažurnim kako bi do daljnjega ostao kvalitetna startna točka.

## Osnove

Kriptovalute su novac koji nema centralnog izdavača, već se kreiraju pomoću tehnologije koju zovemo
blockchain, lanac blokova. Da saznate _zašto_ su nastale, predlažemo
[ovaj uvodni članak](https://bitfalls.com/hr/2017/08/20/cryptocurrency/).

Blockchain je globalna baza podataka koju održava više računala odjednom. Zamislite je kao veliku
Excel tablicu u kojoj polja smiju mijenjati samo oni koji imaju lozinku za to pojedino polje.

![](https://i.imgur.com/xnQKC5X.png)

Alice smije mijenjati samo polje B1, i samo tako da mu smanji broj. Za koliko god jedinica smanji
svoje polje, Alice može povećati tuđe polje. Npr. Alice šalje 2 jedinice Charlieju. Sada je stanje:

![](https://i.imgur.com/2QajytE.png)

Blockchain se zasniva na suglasnosti, tj. konsenzusu koji se postiže _rudarenjem_, što kolokvijalno
možete zamisliti kao mrežu računala koja prate promjene u tim Excel tablicama. Prvo računalo koje
nekolicinu promjena "zapakira" u skup transakcija koje zovemo blok i pošalje svima ostalima (recimo
da je 0xBob ne samo korisnik sustava već i _rudar_) dobiva nagradu od samog sustava - njegovo stanje
računa poraste.

![](https://i.imgur.com/W8D7rR8.png)

Ukoliko Alice pokuša promijeniti svoje stanje na više, ili tuđe stanje na manje, rudari koji
promatraju tablicu izbaciti će je iz sustava i poništiti njene promjene.

Blockchain zovemo blockchain jer je to _lanac_ _blokova_, a jedan blok je skup transakcija
(prijenosa podataka ili vrijednosti) određene veličine u određenom vremenskom roku. Blokovi se grade
jedni za drugima, i sadržaj jednog ovisi o sadržaju prošlog, pa se time gradi lanac - ukoliko se
promijeni blok u prošlosti, svi blokovi građeni na istom također se mijenjaju.

Naravno, nije sve tako jednostavno - za malo detaljniji i ilustrirani prikaz (prilagođeno
ne-tehničkim čitateljima) i objašnjenje što je to zapravo rudarenje, predlažemo ovaj
[uvodni članak o blockchainu](https://bitfalls.com/hr/2017/08/20/blockchain-explained-blockchain-works/).

### Bitcoin i Ethereum

![](https://i.imgur.com/HeEyTNk.jpg)

Bitcoin je jedna takva Excel tablica - promjene se ažuriraju jednom u 10 minuta, i onaj rudar koji
prvi prijavi blok transakcija ostalima dobiva nagradu od samog Bitcoin blockchaina, trenutno u
visini 6.25 BTC. Ethereum je druga takva tablica, no ta je malo kompleksnija.

Dok Bitcoin služi samo za prijenos vrijednosti, Ethereum služi za prijenos poruka. Poruke mogu biti
chat poruke, mogu biti sadržaj koji netko možda i ne želi da vidite (veliki kineski vatrozid, npr.),
ili financijske (prijenost vrijednosti). Nadalje, ether - kriptovaluta blockchaina Ethereum - služi
kao "nafta" koju rafiniramo u razne proizvode na Ethereum blockchainu, te da s njima komuniciramo.

Fundamentalna funkcionalna razlika Bitcoina i Ethereuma je sljedeća: Bitcoin je možda teoretski
najbolje opisati kao digitalno zlato. Uglavnom se koristi za transakcije otporne na cenzuru,
špekulaciju, i zaštitu od inflacije. Ethereum je programabilni novac i svjetsko računalo. Omogućuje
vječne programe koje zovemo pametni ugovori (smart contracts) koji žive tako dugo dok i Ethereum
živi. Ti programi mogu biti digitalna dionička društva bez vodstva i regulatornih prepreka,
decentralizirane burze za razmjenu tokena (alternativnih valuta), digitalna umjetnost, neopovrgive
propusnice, certifikati, i drugo.

U obje mreže sudjeluje više tisuća računala diljem svijeta, s bitnom razlikom - Ethereum je usred
prelaska s Proof of Work metode rada (rudarenje), na Proof of Stake metodu koja ne zahtijeva enormne
količine energije i nije centralizirana u određenim regijama svijeta. To znači da rudarenje
Ethereuma više neće biti isplativo, no _staking_ hoće - staking je čin zaključavanja 32 ethera u
sustav s obećanjem da ćete pokrenuti i držati ažurnim program koji zovemo _Ethereum node_ ili
Ethereum čvor. Taj program izvršava funkciju rudara, no na moralno i ekološki prihvatljiviji način
od [paljenja mazuta](https://twitter.com/ercwl/status/1350881938450608132).

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Disturbing bitcoin developments in Iran. Massive electricity outages have led to the government burning &quot;mazut&quot; to keep the lights on around Tehran. Now, the regime have been pressured to admit the outages are connected to bitcoin mining (Dr. Vaezi a.k.a. &quot;Dr Bitcorn&quot; below). <a href="https://t.co/Lp4uOiAN0D">pic.twitter.com/Lp4uOiAN0D</a></p>&mdash; Eric Wall 🟨 (@ercwl) <a href="https://twitter.com/ercwl/status/1350881938450608132?ref_src=twsrc%5Etfw">January 17, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Da biste saznali više o razlici Proof of Work i Proof of Stake, pročitajte
[ovaj uvodni članak](https://bitfalls.com/hr/2018/04/24/whats-the-difference-between-proof-of-work-pow-proof-of-stake-pos-and-delegated-pos/),
a da biste se upoznali s još nekim terminima, predlažemo i
[pojmovnik na Bitfalls.com portalu](https://bitfalls.com/hr/glossary/).

#### Valute

Bitcoin (BTC) je valuta Bitcoin blockchaina. Ether je valuta Ethereum lanca. Bitcoin se koristi za
plaćanje prijenosa Bitcoina. Ether se koristi za kreiranje pametnih ugovora i prijenost tokena i
valuta na Ethereum platformi.

Bitcoin ima teoretski\* fiksnu monetarnu politiku - maksimum od 21 milijun BTCa koji se pravilno
emitiraju do cca ~2140. godine. Ethereum ima "minimum viable issuance" politiku koja teži
deflaciji - drugim riječima, dinamički se podešava emisija Ethera ovisno o potrebama mreže, ali teži
k tome da emisija bude negativna (količina Ethera se smanjuje spaljivanjem).

_\*teoretski jer se upravo u jednom od projekata-pionira
[DeFi](https://www.rep.hr/vijesti/blockchain/sto-su-to-decentralizirane-financije-i-zasto-su-tako-zanimljive-ulagacima-i-kripto-entuzijastima/7266/)
pokreta, [Yearn](https://yearn.finance)-u, odvija rasprava o dizanju maksimalnog broja tokena sa
30000 na 36666 kako bi se nagradili developeri. Ista se stvar može desiti u Bitcoin core-u - sve je
stvar dogovora i ukoliko ekonomske (ne)prilike pokažu potrebu za inflacijom, do iste može doći.
Dakako, to će uzrokovati kontroverze i forkove, no o tome ćemo detaljnije u nekom drugom članku._

## Layeri

![](https://i.imgur.com/vykd5E2.png)

Zbog globalne prirode blockchaina, podaci koje jedan rudar javlja drugima pred sobom imaju dug put.
Vremenski odmak od otkrića nekog bloka do njegove propagacije u daleke kutke svijeta zovemo
_latencija_. Kada u obzir uzmemo i činjenicu da nemaju svi sudionici jednako moćna računala, i to da
nemaju svi pristup internetu identične kvalitete, lakše je razumjeti zbog čega je moderni blockchain
sustav ograničen na cca 15ak transakcija po sekundi.

Bitcoin trenutno može procesirati oko 300,000 transakcija na dan. Ethereum je na oko 1.3 milijuna
transakcija na dan. Uglavnom zbog tehničkih limitacija, nijedan od tih blockchaina vjerojatno neće
nadmašiti te brojeve u skoroj budućnosti.

Te se transakcije odvijaju na tzv. layer 1, prvom sloju blockchaina. Taj je sloj spor ali veoma
siguran zbog ekonomske podloge - mnogo je novca uloženo u proizvodnju tih blokova (rudarenjem i
potrošnjom struje), pa je poništiti ili lažirati transakcije jako skupo. Da bi se postigla
_skalabilnost_ tj. povećanje protoka prvog sloja, grade se rješenja na layer 2 (L2), drugom sloju.

Drugi sloj izvršava transakcije mimo blockchaina, ali kriptografski verificira njihov ishod i taj
ishod bilježi na layeru 1. Bitcoin to pokušava Lightning Network projektom, a Ethereum ima 10-ak
aktivnih projekata u toj sferi kao što su Loopring, XDai, Matic, i slični. Drugi blockchaini nemaju
L2 projekte jer trenutno nemaju problema s propusnosti transakcija (nitko ih ne koristi), no lako će
adaptirati neko od Ethereumovih rješenja ako dođe do potrebe za istim.

Postoji i tzv. Layer 0. Nulti sloj je novi sloj kojem je cilj spajanje raznih Layer 1 protokola.
Bitcoin i Ethereum nisu u mogućnosti izravno komunicirati. Trenutno to čine preko _bridge_ (most)
protokola koji zahtijevaju posebni sloj korisnika koji vrte posebni softver i zaključavaju jednu
valutu da bi se kreirala sintetička verzija druge. Bridge protokoli su relativno korisni, no vrlo su
specifični za taj par Layer 1 blockchaina i trebaju posebnu financijsku infrastrukturu koja će
održavanje bridge čvorova učiniti isplativim za njihove korisnike. Novija alternativa su prije
spomenuti Layer 0 protokoli poput Polkadot i Kusama mreže.

![](https://i.imgur.com/mTTaeFa.png)

Ti su blockchaini osmišljeni kao komunikacijsko čvorište raznih blockchainova na način da spajanje
jednog u taj sustav sve mogućnosti tog spojenog blockchaina prenosi na ostale već spojene u tom
sustavu. Time bridgevi kojima se postojeći protokoli poput Bitcoina i Ethereuma spajaju u Polkadot
imaju versatilniju svrhu i dugoročniji plan postojanja.

Suprotno popularnim tvrdnjama i mišljenjima, Polkadot se ne natječe s Ethereumom niti je "Ethereum
killer".

## DeFi, NFT, i ostalo

Layer 0-2 su infrastrukturni slojevi na kojima se grade aplikacije: apps ili dapps.

Originalno stilizirano kao Đapps ili đapps ([Đ/đ se čita "eth"](https://en.wikipedia.org/wiki/Eth),
pa je to _Eth apps_, ne _decentralized apps_), ta je skraćenica metamorfozirala u _dapps_ -
decentralizirane aplikacije - nastankom drugih "pametnih" blockchaina.

I apps i dapps dolaze u raznim oblicima - neke samo čitaju podatke s blockchaina i predstavljaju ih
na zanimljive načine, vizualiziraju u impresivnim grafovima ili pomažu pri poreznim izvadcima. Druge
pak komuniciraju izravno s blockchainom na kojem se vrte. Za osnovni pregled popularnih aplikacija
na Ethereum platformi, predlažemo [Dapps](https://dap.ps) direktorij.

![](https://i.imgur.com/Ho0qX7s.jpg)

Ethereum svijet vrvi i alternativnim ekonomijama, društvima, i tvorevinama. Postoji
[DeFi](https://www.rep.hr/vijesti/blockchain/sto-su-to-decentralizirane-financije-i-zasto-su-tako-zanimljive-ulagacima-i-kripto-entuzijastima/7266/) -
decentralizirane financije ili tzv. otvorene financije - koje omogućuju svakome da svojim novcem
upravlja točno onako kako želi - od ulaganja do kockanja. DAO su "zadruge" ili društva na
blockchainu u kojima članovi tokenima demokratski donose odluke, a NFTevi su non-fungibilni tokeni
koji služe za kolekcionarstvo, interaktivnu umjetnost, prijenose intelektualnog vlasništva,
certifikate, propusnice, javno bilježništvo, i drugo. Nerijetko se svijetovi i spajaju, pa tako
primjerice postoji članstvo u udrugama za koje vam je potreban neki NFT, a sama udruga demokratski
upravlja ulaganjima svojih članova. Za osnove NFT-eva pročitajte
[ovaj uvodni članak](https://bitfalls.com/hr/2018/10/15/the-last-nft-non-fungible-token-explanation-post-youll-ever-need/).

Konkretne upotrebe pametnih ugovora objasniti ćemo na primjerima u posebnom članku.

## Prijevare i ponziji

Ona dobra stara "Ukoliko nešto zvuči predobro da bi bilo istinito, vjerojatno to i jest" ne mora
vrijediti u kriptovalutama. 2015. nitko razuman ne bi očekivao rast ethera od 275000% u pet godina.
Pa ipak, tu smo. Stoga je bitno voditi računa o sljedećim pitanjima kod razmatranja je li neki
projekt prijevara ili legitiman:

- je li tim iza projekta javan? (poželjno: DA)
- je li projekt baziran na otvorenom blockchainu? (poželjno: DA)
- je li moguće napraviti račun na tom blockchainu / projektu bez da prolazite kroz verifikaciju
  telefonom ili osobnim dokumentima? (poželjno: DA)
- je li vas itko nagovarao da kupite tokene tog projekta? (poželjno: NE)
- obećaje li vam se određeni povrat dnevno, tjedno, ili mjesečno koji nadilazi godišnje postotke
  dostupne na [LoanScan](https://loanscan.io/)? (poželjno: NE)
- zahtijeva li se od vas da u neki servis ili na neku adresu pošaljete neka sredstva, kripto ili
  fiat, da biste dobili nazad više nego ste poslali? (poželjno: NE)
- prodaje li vam se "edukacija" o tom projeku i/ili nagrađuje dovođenje drugih ljudi u sustav?
  (poželjno: NE)

Mnogo je crvenih zastava koje su lako prepoznatljive. Kroz sva pitanja gore i objašnjenja zašto su
relevantna prolazimo u nadolazećem članku "Kako prepoznati kripto prijevare".

---

Ovaj članak možete komentirati u
[pripadajućoj forum raspravi](https://forum.ubik.hr/d/38-nov-sam-u-kriptovalutama-gdje-poceti).
