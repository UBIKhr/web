---
title: "Što su pametni ugovori – uvod"
date: 2018-03-26T15:27:17+06:00
draft: false
image: "https://i.imgur.com/nhUXXVS.jpg"
author: "Ivan Voras"
tags: ["Blockchain", "Edukacija"]
type: "post"
---

Pametni ugovori su koncept koji se zadnjih godina često spominje u istom kontekstu kao blockchain, sa sličnom kombinacijom potencijala za velike promjene i doze tehničke složenosti koja čini da sam koncept nije jasan većini koji su čuli za njega. Cilj ovog članka je na pristupačan način opisati tehnologiju iza pametnih ugovora te koje praktične stvari se s njima mogu napraviti.

Blockchain je vrsta baze podataka koja je napravljena specifično za to da omogući upisivanje u nju iz cijelog svijeta na način da su ti upiti nepromjenjivi. Takvi zapisi mogu a ne moraju biti povezani s nekom osobom ili tvrtkom, jednostavno su skupovi podataka. Trenutno se blockchain najčešće koristi za kriptovalute, sustave koji imaju ulogu novčanog sustava: omogućavaju da se nešto što ima neke osobine novca stvara, pohranjuje i distribuira. Dio “kripto” iz naziva “kriptovalute” se odnosi na kriptografiju, disciplinu zaštite podataka (“šifriranje”). Razlog zašto se blockchain koristi za kriptovalute je što je jedan od načina korištenja blockchaina takav da može funkcionirati u okruženju gdje se korisnici ne poznaju niti si vjeruju. Algoritmi odrađuju sve što se tiče pohrane, verifikacije i distribucije podataka i nije potrebna razina povjerenja koju obično ljudi imaju prema bankama, državama i slično. Međutim, to je samo jedna od mogućnosti blockchaina, i nije nužno da se on koristi niti za kriptovalute niti da bude globalno distribuiran, niti da zapisi u njemu budu na određeni način verificirani, nego se može koristiti u manjem okruženju – na primjer jednoj tvrtki, organizaciji, državi, ministarstvu i slično. U takvom svojstvu blockchain može biti rješenje za transparentno poslovanje i komunikaciju.

Pametni ugovori su jedna od mogućih nadogradnji na koncept blockchaina, u kojoj se kao vrsta podataka, u blockchain upisuje programski kod. Ovaj programski kod može gotovo sve, i sam naziv “pametni ugovori” je samo mali dio potencijalnih mogućnosti. Naziv “ugovori” dolazi od primjene ovakvog sustava na izvođenje uvjetnih novčanih transakcija: “ako se dogodi X, izvede se novčana transakcija Y” — što ima sličnosti s ugovorima u stvarnom svijetu kojima se uspostavljaju obaveze i rezultati nekog poduhvata. Razlog zašto se ovakav programski kod nalazi u blockchainu je u onom svojstvu blockchaina koji omogućuje da su podaci u njemu nepromjenjivi i ne ovise o povjerenju među stranama koje tim putem komuniciraju. Ako se dvije strane dogovore da će programski kod, tj. “pametni ugovor” odlučivati o tome da li će se nešto dogoditi (što može a ne mora biti novčana transakcija), ne treba im, barem što se izvršavanja uvjeta ugovora tiče, treća strana koja će odobriti, zapisati, nadgledati ili štititi taj ugovor. Na vrlo konkretan način, programski kod je neumoljiv.

Dio gdje može biti potrebna treća strana, je da ovom programskom kodu pametnih ugovora dostavi informacije da se nešto dogodilo “u stvarnom svijetu”. Sam po sebi, programski kod pametnih ugovora može pristupati samo podacima koji su zapisani u blockchain, što dovodi do potrebe za sustavima (koji su nazvani “oracles”) koji neke informacije iz stvarnog svijeta zapisuju u blockchain tako da ih pametni ugovori mogu koristiti pri donošenju odluka. Jednom kad pametni ugovor ima informaciju koja mu je potrebna, donosi odluke koje je programiran donijeti. Sustav blockchaina osigurava da su takve odluke zapisane globalno i nepromjenjive.

Pametni ugovori se mogu koristiti za automatizaciju ili izbacivanje posrednika kod mnogih aktivnosti, na primjer:

    Osiguranje: ako autorizirani agenti upišu u blockchain da su uvjeti za isplatu osiguranja zadovoljeni, isplata će se automatski napraviti
    Na primjer: medicinsko osiguranje: ako liječnik potpiše da je pacijent bolestan (tj. upiše taj podatak u blockchain), bolesniku će se automatski isplaćivati naknada za bolovanje
    Na primjer: mirovinsko osiguranje: ako liječnik (ili državno tijelo) potpiše da je osoba ispunila uvjete (na primjer godine staža) za mirovinu, osobi će se automatski isplaćivati mirovina
    Kladionice: osobe uplaćuju na račun pametnog ugovora, i kad se događaj završi i povjerljiva strana upiše u blockchain tko je pobjednik, oni koji su pogodili automatski dobivaju uplate
    Plaćanje glazbe ili video zapisa: ako je izvršena uplata za slušanje određenog glazbenog albuma ili filma, uplatitelj automatski dobija pravo slušati ga odnosno gledati
    Praćenje materijal kroz nabavni i proizvodni proces koji uključuje veliki broj tvrtki: ako se sve tvrtke slažu oko korištenja istih pametnih ugovora, roba može biti praćenja od proizvođača do krajnjeg kupca kroz više skladišta, prijevoznih sredstava automatski, i primo-predaja se može automatski odvijati ako su ispunjeni zahtjevi pametnih ugovora.

Pametni ugovori su programski kod, što znači da nisu ograničeni samo na scenarije oblika “ako se dogodi X, napraviti će se Y” nego se mogu koristiti doslovno za bilo što, dok god je to unutar ograničenja da podaci moraju biti zapisani u blockchainu. Primjeri aktivnosti kod kojih se koriste “pametni ugovori” bez da se radi o nekim ugovorima su:

    Autenticirana pohrana podataka: programski kod samo provjerava da li je podatak upisan u blockchain od određenog autora / izvora
    Komunikacija: podaci koje jedna strana upiše u blockchain, druga strana ili više njih mogu čitati
    Izračuni / analitika podataka u blockchainu: programski kod izvodi izračun nad podacima zapisanima u blockchainu i šalje ga korisniku
    Standardizacija podataka: umjesto da svaka strana u blockchain zapisuje podatke samostalno, u obliku koji je razumljiv drugim stranama, podaci se upisuju kroz pametni ugovor koji ih prilagođava ako je potrebno

Predmeti interakcije u pametnim ugovorima su podaci i adrese. Adrese su posebno izračunati brojevi koji mogu biti pridruženi fizičkim ili pravnim osobama, ili bilo kakvom drugom entitetu iz “stvarnog svijeta” ali ne moraju biti. Putem blockchaina i pametnih ugovora mogu interaktirati potpuno automatizirani sustavi iza kojih ne stoji nikakav entitet.

Pametni ugovori su stoga vrlo fleksibilan alat čije mogućnosti sežu izvan ostvarivanja konkretnih ugovora. Uz blockchain koji omogućava da se pametni ugovori događaju bez potrebe za povjerenjem prema trećim stranama, potencijalne primjene u državnom, financijskom i telekomunikacijskom sektoru mogu dovesti do velikog povećanja efikasnosti, transparentnosti i uštede, a s druge strane mogu biti alat za društvene promjene koje su posve neovisne o tim sektorima.

 

Autor članka je Ivan Voras, jedan od suosnivača UBIK-a, konzultant i developer za projekte na blockchainu i pametnim ugovorima.
Kontakt adresa autora je ivoras@idejanakvadrat.hr
