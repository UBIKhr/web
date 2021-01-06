---
title: "Odgovor na kritiku pametnih ugovora"
date: 2021-01-06
draft: false
image: "images/blog/placeholder.png"
author: "UBIK Upravni Odbor"
tags: ["Blockchain", "Pametni Ugovori", "DeFi", "Sigurnost"]
type: "post"
---

Blog Mreža je 20.12.2020. izbacio [članak Željka Ivankovića](https://archive.is/7oHgT) na temu
relativno nedavne
[Compound likvidacije](https://www.theblockcrypto.com/post/85850/dai-compound-dydx-liquidations-defi)
u vrijednosti od 89 milijuna dolara. Zbog krivih navoda u članku kao i zbog neslaganja s određenim
mišljenjima u članku, smatramo da je potrebno izdati repliku na isti. Mreži pak savjetujemo da nas
ubuduće slobodno kontaktira za **stručno** mišljenje prije publikacije članaka na temu blockchaina i
kriptovaluta za provjeru materijalnih činjenica.

## Kontekst

Compound je DeFi (decentralizirane financije) platforma koja korisnicima pomoću pametnih ugovora
dopušta da uzmu dug u nekoj kriptovaluti ako kao kolateral ostave veću količinu druge valute. Npr.
za 1 ether kolaterala (cca 600 USD) moguće je uzeti cca 200 DAI tokena (tokeni koji uglavnom cijenom
odgovaraju američkom dolaru).

> Moramo napomenuti da je _pametni ugovor_ možda krivi naziv za tehnologiju koja se koristi te daje
> krive konotacije, i to su
> [sami autori termina i tehnologije iza istog priznali](https://twitter.com/vitalikbuterin/status/1051160932699770882?lang=en).

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">To be clear, at this point I quite regret adopting the term &quot;smart contracts&quot;. I should have called them something more boring and technical, perhaps something like &quot;persistent scripts&quot;.</p>&mdash; vitalik.eth (@VitalikButerin) <a href="https://twitter.com/VitalikButerin/status/1051160932699770882?ref_src=twsrc%5Etfw">October 13, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

> Točniji naziv bio bi "vječni logički okidači" ili "vječne skripte", jer kao "ugovor" ovaj ugovor
> nema osnove u zakonu, niti zahtijeva potpis obje strane, niti obje stane moraju biti realni aktori
> jer pametni ugovori mogu komunicirati i sa drugim pametnim ugovorima a ne samo "ljudima".

Nadalje, valja spomenuti da za sredstva kažemo da su u pametnom ugovoru _"zaključana"_ ne zato jer
volimo "kao i svi profesionalci, terminima davati jedan ton sofisticiranosti", kao što to tvrdi g.
Ivanković u spornom članku, nego jer se sredstva zaista deponiraju u instancu pametnog ugovora te se
tamo zaključavaju privatnim ključem deponenta. G. Ivanković umjesto termina _"zaključana
vrijednost"_ radije koristi termin _"vrijednost ugovora"_, što možda zvuči jednostavnije, ali je to
ujedno i krivo jer pametni ugovori po sebi nemaju vrijednost. Jasno nam je da se možda radi o
namjernom podjednostavljenju kako bi se tema približila široj publici, ali u ovom slučaju ispalo je
nespretno i nestručno.

Nekome neupućenom ostaviti više kriptovalute u nekom ugovoru da biste posudili manje možda zvuči
besmisleno na prvi pogled ali takva mehanika je jako korisna u raznim situacijama. Primjerice,
ukoliko vam je potrebna stabilna i prepoznatljiva vrijednost kao što je USD za plaćanje računa ili
plaća, za _leverage_ da biste još više povećali izloženost valuti koju koristite kao kolateral, ili
čak za _hedging_ u stabilnoj vrijednosti dok očekujete pad cijena na kripto tržištu - sve to bez da
prodate ostale kriptovalute koje posjedujete i izgubite izloženost istima.

Na posudbu protokol sam automatski naplaćuje kamatu koja se plaća prilikom zatvaranja duga, a
ukoliko u bilo kojem momentu omjer kolateralizacije padne ispod neke propisane vrijednosti, **bilo
koji korisnik protokola ima mogućnost likvidirati taj odnos i biti nagrađen.**

Tu je ujedno i sljedeća greška u Ivankovićevom članku. Algoritam **ne likvidira pozicije
automatski**. Likvidaciju mora mora izvesti korisnik sustava preko automatizirane skripte ili ručno.
Likvidator dobiva proviziju za izvršenje likvidacije, pa se time stvara otvoreno tržište za praćenje
stanja Compound dugova koji ujedno čini cijeli sustav stabilnijim.

26.11. cijena DAI tokena na platformi Coinbase Pro narasla je na 1.3 USD, što je 30% više od
uobičajenih 1 USD. Tu je druga greška Ivankovićevog članka: _Compound Pro_ na kojeg više puta
aludira u svom tekstu ne postoji. Platforma o kojoj se radi je Coinbase Pro, najveća centralizirana
kriptovalutna burza u SADu, no zbog sličnosti imena neupućenim promatračima ne treba previše
zamjeriti takvu bezazlenu grešku.

![Skok cijene DAIa na Coinbase platformi](/images/blog/spike.png)

Compound platforma koristila je isključivo Coinbase Pro kao izvor USD cijene DAI tokena, pa je time
nagli skok cijene uzrokovao pad omjera kolateralizacije dugova na Compound platformi kod svih
korisnika koji su posudili DAI. To je omogućilo likvidaciju pod-kolateraliziranih dugova od kojih su
neki bili veći (~50 milijuna DAI).

## Likvidacije

Ivanković kaže "_Posao je, dakle, likvidiran protivno pretpostavljenoj volji obiju strana koje su u
njega uključene_" misleći na likvidaciju duga koji je izgubio omjer zbog skoka cijene DAI-a.

Posao je krivi termin. Ne radi se o poslu nego o minijaturnom programu sklopljenom od strane
**jedne** stranke prema postojećoj infrastrukturi.

U pravilima tog programa piše "ako omjer kolateralizacije padne, bilo koji korisnik blockchaina ima
pravo likvidirati ovaj odnos". Dug, prema tome, nije likvidiran "protivno volji obiju strana" nego
možda protivno volji jedne strane ali pod svim unaprijed deklariranim pravilima tog programa. Naivno
je predpostaviti da osoba koja je u pametni ugovor zaključala 50 milijuna dolara nije dobro znala
pravila tog programa. Pravila su jasno napisana u samom pametnom ugovoru i svaki programer koji se
razumije u pametne ugovore će vam ih znati pročitati. A za 50 mil USD može se kupiti jako puno sati
takvih programera. Osoba koja je zaključala ova sredstva u Compound je znala u što se upušta.

Za razliku od g. Ivankovića, koji dalje kaže: "Što likvidacija znači u slučaju ovog pametnog
ugovora, nije jasno". Evidentno je da g. Ivankoviću nije jasno. Svakome tko se imalo razumije u
tematiku je jasno što _"likvidacija znači"_. Vjerujemo da i među novinarima eminentnog hrvatskog
časopisa Mreža ima tehnički potkovanih novinara kojima shvaćanje procesa likvidacije na Compoundu
neće predstavljati poteškoću i nadamo se da će urednički kolegij Mreže ubuduće znati prepoznati kada
autorovo poznavanje materije nije na razini zadatka. G. Ivankoviću, u međuvremenu, preporučujemo da
pročita poglavlje o likvidaciji u vodiču
"[Compound Finance for Dummies](https://ethereumprice.org/guides/article/compound-finance-explained/#liquidation)".

![](/images/blog/dummies.png)

Ivanković nastavlja: "No, kako je ugovor točno likvidiran, ... još nije odgovoreno". To je pitanje,
naravno, odgovoreno. Likvidator je dobio nagradu za likvidaciju isplaćenu iz likvidiranog
kolaterala. Kao što smo već spomenuli, likvidatori su korisnici platforme koji ili nekom skriptom
ili manualno pokreću funkciju likvidacije na pod-kolateraliziranim dugovima sukladno pravilima
sustava koje svi korisnici prihvaćaju prilikom ulaska u sustav.

"Ili je vjerovnik jednostavno uzeo kolateral, a dužniku su ostali DAI-tokeni, što je vjerojatnije."

Ovdje se može vidjeti koliko autor u stvari ne poznaje materiju o kojoj piše. U sustavu Compound ne
postoje vjerovnici, uz dužnike postoje samo pružatelji likvidnosti, što je bitno drugačija uloga, ne
radi se o semantici. Za razliku od vjerovnika - koji sredstva kome daje u zajam - pružatelji
likvidnosti svoja sredstva _"zaključavaju"_ u Compoundove bazene likvidnosti iz kojih onda dužnik
može posuditi sredstva tako da, opet, _"zaključa"_ tokene koji predstavljaju dužnikov udio u
Compoundovim bazenima likvidnosti.

Skloni smo vjerovati da članak g. Ivankovića ne bi vrvio ovakvim netočnostima da se autor potrudio,
za početak, shvatiti zašto _"profesionalci"_ koriste ovaj _"sofisticirani"_ pojam _"zaključati"_.

Zatim nas g. Ivanković podučava o mogućim motivima za ovaj cijeli incident. "To je moglo biti u
interesu bilo kome, nekoj strani izvan ovog posla, naprosto da našteti svojem konkurentu u nekom
drugom poslu, ...". Poprilično je jasno kome je bilo u interesu pokrenuti ovu likvidaciju -
likvidatoru koji ju je pokrenuo. Samo u
[jednoj od transakcija](https://etherscan.io/tx/0x53e09adb77d1e3ea593c933a85bd4472371e03da12e3fec853b5bc7fac50f3e4)
tijekom ovog incidenta likvidator je ostvario 3.7 milijuna dolara. Dosta jasna motivacija, a uz to i
svima jasno vidljiva na blockchainu.

<iframe src="https://giphy.com/embed/l3V0B6ICVWbg8Xi5q" width="480" height="269" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/showtime-kristen-bell-don-cheadle-house-of-lies-l3V0B6ICVWbg8Xi5q">via GIPHY</a></p>

Ivanković završava: "Otprilike u duhu teorije nekompletnog ugovaranja ide načelna kritika pametnih
ugovora. Tvrdi se, dakle, da se ni pametni ugovori ne mogu napisati da se izbjegne treću stranu koja
bi prosudila je li jedna strana oštećena manipulacijom ili izvanrednim okolnostima." - UBIK se ne
slaže s ovom kritikom.

Pametne je ugovore apsolutno moguće napisati na način da se izbjegne treću stranu koja mora dati
mišljenje. U svijetu programabilnog novca kao što je Ethereumov blockchain, "code is law" je mantra
zajednice - ono što piše u kodu, toga se i držimo. U kodu je bilo jasno definirano da: cijena DAIa
ima samo jedan _oracle_ (izvor cijene), da je likvidacija moguća u slučaju pomaka omjera
kolateralizacije, i da će likvidator biti nagrađen. **Sve** drugo je nebitno u kontekstu
dodijeljivanja odgovornosti i krivice.

Je li do toga došlo zbog _hacka_, zbog manipulacije cijena, zbog pada tržišta, ili nečeg trećeg -
nebitno. Uvjeti za likvidaciju **prema pravilima pametnog ugovora** su ispunjeni. Naravno, postoji
način za osiguranje od svih tih vrsta gubitaka - razne metode decentraliziranog osiguranja već
postoje (Nexus, Cover, Opyn...), ali to izlazi iz konteksta ovog specifičnog slučaja.

## Tko je kriv?

Compound bez dvojbe nosi dio krivnje zbog lošeg planiranja cijelog sustava (samo jedan oracle nikada
nije dobra ideja), no sam pametni ugovor funkcionirao je besprijekorno.

Naravno, tržište kriptoimovine nije imuno na manipulacije i prijevarna postupanja sudionika, a što
je ispravno prepoznala i Europska komisija u prijedlogu nacrta Uredbe o tržištima kriptoimovine
(Glava VI.: Sprečavanje zlouporabe tržišta koja uključuje kriptoimovinu). U ovom konkretnom slučaju
se očito radilo i o manipulaciji cijenom koja je dovela do zlouporabe tržišta. U pravilu, radi se o
postupanju koje je sankcionirano pravnim poretkom određene države, a najčešće kaznenopravnim
sankcijama.

Ipak, bitno je istaknuti da mogućnost zloporabe isključivo postoji tamo gdje postoji i ljudski
faktor, a najčešće kod pružatelja usluga odnosno posrednika. Tako je bilo i u ovom konkretnom
primjeru jer je do manipulacije cijenom kriptopimovine došlo na centraliziranoj burzi Coinbase Pro.
S druge strane, iako su decentralizirane financije ranjive na cijeli niz napada i zloupotreba, kao
što to pokazuje ovaj primjer, on još više pokazuje zašto nam je potrebna decentralizacija i zašto je
potrebno korištenjem novih tehnologija ukloniti rizike svojstvene intermedijarima na financijskim
tržištima. Dakle, problem u opisanom primjeru (Compound) nije proizašao iz previše
„decentraliziranih financija“ već baš obrnuto, problem je nastao zbog **nedovoljno
decentraliziranih** rješenja i ovisnosti ovog konkretnog projekta o izvoru informacija o cijeni
kriptoimnovine (price feed) iz jednog centraliziranog izvora.

Ono što želimo reći je da je na kraju krajeva odgovornost na korisniku - korisnik je onaj koji se
mora informirati o faktorima rizika i vektorima napada, a nadamo se da ćemo mi iz UBIKa u 2021. u
tome značajno pomoći. Idealno, korisnik bi znao i čitati kod, ili bio voljan platiti mišljenje
nekoga tko to zna. U ovim ranim fazama blockchain razvoja, **raditi manje a očekivati više bilo bi
nadasve neodgovorno**.

## Alkemija novog doba

Zadnji odjeljak članka, “Alkemija novog doba”, neupućenom čitatelju ostavlja dojam da se radi u
najmanju ruku o financijskoj verziji nadriliječništva. Vjerujemo da autor u stvari nema zle namjere,
već da se radi o kombinaciji neinformiranosti te činjenice da je autor proveo većinu svog
profesionalnog života u tradicionalnom financijskom sektoru te ih iz tog razloga teško razumijeva.
Kao što je 1999. godine bilo teško razumjeti da će se npr. 2010. kompletna financijska
infrastruktura bazirati gotovo isključivo na internet tehnologijama, mnogim stručnjacima trenutnih
financijskih sustava nije u potpunosti razumljiva "kripto" strana financija i _samo-bankarstva_.
Radi se o generacijskom jazu koji je teško premostiv bez ozbiljne količine truda.

Autor u svom osvrtu spominje i flash crash američkih burzi iz 2010. godine, što smatramo da je
izvrstan kontrapunkt incidentu o kojem upravo govorimo. U ovom članku iznjeli smo u kratkim crtama
činjenicama potkrepljen opis samog događaja, a na raznim blogovima koji se bave ovom temom moguće je
pročitati zbilja detaljne analize koje jasno opisuju što se prilikom ovog incidenta na Compoundu
događalo. Jasno je zašto se incident desio, s kojim motivacijama i kako se odvio. S druge strane,
nakon 10 godina istraživanja, tisuća stranica izvještaja američkih regulatora i jednog sudskog
procesa, sve što o flash crashu iz 2010. sa sigurnoću možemo reći da je značajan faktor u svemu bio
trenutak kad je u
[jednom londonskom predgrađu tridesetogodišnjeg momka mama pozvala da siđe na ručak](https://www.reuters.com/article/us-usa-security-fraud-idUSKBN0NC21220150422).
Kako je to točno dovelo do flash crasha - ne zna se. Zna da se samo da je to definitivno imalo
značajan utjecaj, a ostatak priče je - alkemija.

![](/images/blog/alkemija.png)

Akteri u tradicionalnoj financijskoj industriji navikli su živjeti u svijetu gdje je malo kome, ako
ikome, jasno što se na tržištu u stvari događa. G. Ivanković dolazi iz jedne industrije gdje je
sasvim normalno da se 10 godina istražuje flash crash koji je izbrisao bilijun (eng. trillion)
dolara vrijednosti u roku od pola sata i da se ne dođe do jasnih zaključaka. Prelazak u svijet gdje
su sve transakcije javne, sve motivacije jasne i svi mehanizmi svima poznati može predstavljati šok
za kognitivni aparat navikao na alkemiju. Moguće je da g. Ivankoviću možda nije niti jasno da je
svijet u kojem su financijske transakcije transparetne uopće moguć. I to iz potpuno istih razloga iz
kojih nekom alkemičaru nikako ne bi bila jasna znanstvena metoda kojom je Hantaro Nagaoka 1924. iz
žive proizveo zlato.

Kad je Satoshi Nakamoto 2009. proizveo digitalno zlato, na svijet je donio jednu potpuno novu
industriju, koja zahtjeva potpuno nove autore. Nadamo se da će urednički kolegij ubuduće znati
razlikovati znanstvenike od alkemičara. Da nam se ne bi opet događalo da na konferencijama o
budućnosti financija i dalje slušamo glasove prošlosti.

---

Da biste ostali u toku s najnovijim kripto događanjima predlažemo da se prijavite na naš
[novi forum](https://forum.ubik.hr).
