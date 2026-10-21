# PUREKICKZ – Shop-Neubau

Dieses Repo ist das Shopify-Theme für **PUREKICKZ**, eine deutsche Marke für Schuhpflege.
Erstes Produkt: **PUREKICKZ ONE**, ein elektrischer Sneaker Cleaner (Akku, USB-C, zwei Bürsten + ein Schwamm).
Basis-Theme: **Horizon**. Zielmarkt: Deutschland, alle Texte auf Deutsch, Du-Ansprache.

Ziel: Ein Shop, bei dem Besucher denken **„Wow, schöner Shop – dem vertraue ich“** und das Produkt kaufen wollen.
Kein Landingpage-Gefühl, sondern eine echte, wertige Marke mit Shop.

**Kompletter Neustart.** Das alte Theme ist keine Vorlage. Alles, was du brauchst, steht in diesem
Dokument, in `bilder/` und in `referenzen/` (Startseiten von Shops, die mir gefallen – siehe Abschnitt 2b).

---

## 0. Marke & Produkt (die Wissensbasis)

### Die Marke
- **PUREKICKZ** – junge deutsche Marke für Sneaker- und Schuhpflege.
- Versprechen: Schuhpflege einfacher machen – mit Werkzeug, das die Arbeit übernimmt, und Angaben, die stimmen.
- Zielgruppe: Leute, die ihre Sneaker sauber halten wollen, ohne lange von Hand zu schrubben.
- Markt: Deutschland. Sprache: Deutsch, Du-Ansprache.
- Start mit einem Produkt, geplant ist ein Sortiment (Ersatzaufsätze, Zubehör, Pflegeprodukte, Sets).
  Der Shop muss deshalb von Anfang an als **Mehrprodukt-Shop** funktionieren.

### Das Produkt: PUREKICKZ ONE – Elektrischer Sneaker Cleaner
Was es ist: eine elektrische Handbürste für Schuhe. Ein Motor dreht den Aufsatz –
man führt das Gerät nur über die Oberfläche, statt selbst zu schrubben.

| Merkmal | Angabe |
|---|---|
| Gerät | Elektrischer Sneaker Cleaner mit Motor und rotierendem Aufsatz |
| Design | Grau mit Magenta-Akzent (passt zur Markenfarbe) |
| Aufsätze | 3 Stück: eine **harte Bürste**, eine **weiche Bürste**, ein **Schwamm** |
| Akku | 1200 mAh, im Betrieb kabellos |
| Laden | über USB-C |
| Maße | 163 × 96 × 45 mm |
| Lieferumfang | Gerät, 2 Bürstenaufsätze, 1 Schwammaufsatz (USB-C-Kabel: `[[KABEL_IM_LIEFERUMFANG]]`) |

So funktioniert es:
1. Passenden Aufsatz wählen (harte Bürste, weiche Bürste oder Schwamm).
2. Aufsatz aufsetzen und Gerät einschalten.
3. Gerät über die verschmutzte Fläche führen – der Motor übernimmt die Bewegung.

Echte Vorteile gegenüber der Handbürste (nur diese verwenden, nichts dazu erfinden):
- Der Motor macht die Bewegung, nicht dein Arm.
- Drei Aufsätze für unterschiedliche Materialien und Verschmutzungen.
- Kabellos im Einsatz, laden per USB-C.

### Kauf & Service (Fakten für Vertrauen)
- **Versand aus Deutschland** (nicht aus Übersee).
- **14 Tage Widerrufsrecht.**
- Sichere Bezahlung über Shopify-Checkout.
- Kontakt / Support: **info@purekickz.de**
- Rechtsseiten (Impressum, Datenschutz, AGB, Widerruf, Versand, Zahlungsarten, FAQ) existieren als Shopify-Seiten.
- Preis, Varianten und Lagerstand kommen **immer aus dem Shopify-Produkt** – nie fest in den Code schreiben.

### Noch nicht bestätigt – nicht behaupten, Platzhalter setzen
| Info | Platzhalter |
|---|---|
| Lieferzeit innerhalb Deutschlands | `[[LIEFERZEIT]]` |
| USB-C-Kabel im Lieferumfang? | `[[KABEL_IM_LIEFERUMFANG]]` |
| Akkulaufzeit, Ladedauer, Drehzahl | `[[AKKULAUFZEIT]]`, `[[LADEDAUER]]` – sonst weglassen |
| Wer die Rücksendekosten trägt | `[[RUECKSENDEKOSTEN]]` |
| Kundenbewertungen | gibt es noch keine → Bewertungs-Bereich **nicht anzeigen** |

Alle Platzhalter, die du verwendest, am Ende jeder Phase für mich auflisten.

---

## 1. Was fest ist (nicht verändern)

### Schriften
| Rolle | Schrift | Gewicht |
|---|---|---|
| Überschriften, Subheadings, Akzente | **Poppins** | 700 (Headings), 600 (Sub/Accent) |
| Fließtext, UI | **Archivo** | 400 |

Keine weiteren Schriftfamilien einführen.

### Farben
| Token | Wert | Einsatz |
|---|---|---|
| Text / Schwarz | `#191917` | Text, dunkle Flächen |
| Weiß | `#FFFFFF` | Haupthintergrund – der Shop ist überwiegend weiß |
| **Magenta (Akzent)** | `#B42998` | Kaufbuttons, wichtige Hervorhebungen |
| Magenta hell | `#D24FB6` | Hover-/Aktiv-Zustände |
| Hellgrau | `#E8E8E6` | ruhige Flächen, Bildhintergründe |
| Linien | `#E3E3DF` | Rahmen, Trenner |
| Grau gedämpft | `#8A8A84` | Nebeninfos |

Magenta ist kostbar: sparsam einsetzen, damit es dort wirkt, wo gekauft wird.
Keine neuen Farben ohne Rückfrage.

### Logo & Bilder
- Logo (PK-Monogramm + PUREKICKZ-Wortmarke) unverändert verwenden.
- Nur eigene Produktfotos verwenden, keine Lieferanten-Renderings, keine Stockfotos von anderen Produkten.

**Wo die Dateien liegen** (auf dem Branch **`material`**, nicht auf `neubau` – siehe Abschnitt 5):
| Ordner | Inhalt |
|---|---|
| `bilder/Produktbilder/` | alle eigenen Produktfotos (Originale) |
| `bilder/Logos/` | Logo-Varianten |

**Bildeinbettung (feste Regel):** Produktbilder nie als Kasten mit harter Kante auf Weiß – das wirkt
eingefügt und leer. Stattdessen immer eine dieser drei Formen:
1. **freigestellt** – das Produkt steht direkt auf der Fläche (mit weichem Schatten),
2. **randlos** – das Bild füllt die ganze Breite der Section,
3. **weiche Übergänge** – der Bildhintergrund läuft nahtlos in die Section-Fläche aus.
Harte Kanten nur zum Trennen von Sections. Ausnahme: die Produktgalerie (Fotos mit Hintergrund sind dort erwartet).

Die Originale in `bilder/` sind Rohmaterial und werden **nicht verändert und nicht gelöscht**.
Sie gehören nicht ins Theme selbst (keine Original-Fotos nach `assets/` kopieren).

### Ehrlichkeit (harte Regel)
Keine erfundenen Bewertungen, Kundenzahlen, Statistiken, Testsiegel, Lieferzeiten, Countdown-Timer
oder Knappheits-Hinweise („Nur noch 3 da!“). Nur Aussagen, die stimmen.
Fehlt eine Info (z. B. Lieferzeit), Platzhalter `[[LIEFERZEIT]]` setzen und mich darauf hinweisen.

---

## 2. Was frei ist

Alles andere: Layout, Seitenaufbau, Reihenfolge, Bildinszenierung, Section-Ideen, Typo-Hierarchie
innerhalb der beiden Schriften, Weißraum, Mikrointeraktionen, Tonalität der Texte.

**Erfinde den Shop neu.** Orientiere dich nicht am alten Theme. Denk wie ein Designer einer
Premium-Marke, nicht wie ein Template. Überrasche mich – solange die Leitplanken unten halten.

### Der Kreativ-Auftrag
Bau diesen Shop so, wie du deine besten Websites baust: mit echter Gestaltungsidee, Mut und Liebe zum Detail.
Ich will beim ersten Öffnen „Wow“ denken. Nicht „ordentlich“, nicht „sauber“ – **Wow**.

Und gleichzeitig ist es ein Shop: **Jeder Wow-Moment muss das Produkt zeigen, erklären oder verkaufen.**
Effekte um ihrer selbst willen fliegen raus.

Was „Wow“ hier bedeuten kann (Ideen, keine Pflicht – finde eigene, bessere):
- **Ein Signature-Moment** auf der Startseite, an den man sich erinnert – z. B. das Gerät, das sich beim
  Scrollen dreht oder heranzoomt; ein Vorher/Nachher-Schieberegler auf einem echten Sneaker;
  ein interaktiver Aufsatz-Wähler („Welcher Aufsatz für welches Material?“).
- **Mutige Typografie** mit Poppins: große, selbstbewusste Headlines, starke Größenkontraste.
- **Art Direction statt Bildergalerie:** Bilder bewusst inszeniert – angeschnitten, groß, im Wechsel mit viel Weiß.
- **Magenta als Licht:** sparsam, aber gezielt – ein Akzent, der das Auge zum Kaufen führt.
- **Feine Mikrointeraktionen:** Hover-Zustände, weiche Übergänge, ein Kaufbutton, der sich gut anfühlt.

### Animationen – ausdrücklich erwünscht
Ich mag Animationen. Der Shop soll **lebendig** wirken und sich hochwertig bewegen – deutlich mehr als ein
Standard-Shop. Bewegung ist ein zentrales Gestaltungsmittel, kein Nachgedanke.
- Scroll-Animationen: Inhalte, die beim Scrollen elegant erscheinen, gestaffelt, mit Gefühl für Timing.
- Produkt-Inszenierung: das Gerät, das sich beim Scrollen dreht, heranzoomt, in Teile zerfällt
  (Aufsätze lösen sich) oder Schritt für Schritt erklärt wird.
- Parallax und Tiefe bei großen Bildflächen, Text, der sich Zeile für Zeile aufbaut.
- Animierte Zahlen/Fakten (z. B. 1200 mAh, 3 Aufsätze) – nur mit echten Werten.
- Weiche Übergänge bei Galerie, Akkordeons, Warenkorb-Drawer und Hover.

Grenzen: Animationen dürfen nie den Kaufbutton verstecken oder verzögern, nie den Text unlesbar machen
und nie das Handy ruckeln lassen. Lieber eine perfekte Animation als fünf mittelmäßige.
Ohne JavaScript bzw. mit `prefers-reduced-motion` muss jede Seite vollständig und gut aussehen.
- **Schwarze Bühnen-Momente:** einzelne dunkle Flächen (`#191917`), auf denen das Produkt leuchtet –
  als Kontrast zum sonst hellen Shop.

Der Verkauf darf dabei nie leiden:
- Der Kaufbutton ist auf Startseite und Produktseite schnell erreichbar, auf dem Handy ohne Suchen.
- Alles bleibt schnell (Ladezeit vor Effekt), auf dem Handy flüssig, mit `prefers-reduced-motion` ruhig.
- Wenn ein Effekt das Verständnis stört oder den Kauf verlangsamt, ist er falsch.

Falls in deiner Umgebung ein Design-Skill wie `frontend-design` verfügbar ist, nutze ihn.

---

## 2b. Referenzen (Richtung, keine Kopiervorlage)

In `referenzen/` liegen Startseiten von Shops, die mir gefallen:
**MVMT, ESN, BALLS, Studio Neat, Editors Keys, Turtle Beach, Bruvi.**
Schau sie dir zu Beginn an. Übernimm **Muster und Wirkung**, nicht Layouts 1:1.
Unsere Schriften, Farben und Bilder bleiben – die Referenzen zeigen nur, *wie* gute Shops aufgebaut sind.

### Was diese Shops gemeinsam haben (das will ich auch)
- **Sie wirken sofort wie ein echter Shop**, nicht wie eine Landingpage: Header mit Navigation,
  Suche, Konto, Warenkorb, oben eine schmale Ankündigungsleiste.
- **Starker Einstieg:** großes, hochwertiges Bild, eine kurze Aussage, ein klarer Button.
- **Vertrauen direkt sichtbar:** eine Leiste mit 3–4 Versprechen und Icons
  (z. B. BALLS direkt unter dem Hero, Bruvi unter dem Kaufbereich, MVMT „Our Promises“ vor dem Footer).
- **Produkt auf der Startseite kaufbar:** BALLS, Bruvi und Editors Keys zeigen einen Kaufbereich
  mit Galerie, Preis und Button direkt auf der Startseite – ideal, solange wir ein Hauptprodukt haben.
- **Menschen und Anwendung:** viele Bilder zeigen das Produkt in der Hand / im Einsatz, nicht nur freigestellt.
- **Kacheln mit Bildern** für Kategorien bzw. Einstiege (MVMT, Editors Keys, Turtle Beach als Bento-Raster) –
  bei uns z. B. „Sneaker Cleaner“, später „Aufsätze“, „Pflege“, „Sets“.
- **Vorteile als Icon-Raster** mit sehr kurzen Texten (BALLS, Bruvi).
- **Vergleich als Tabelle** – Bruvi vs. Keurig → bei uns PUREKICKZ ONE vs. Handbürste.
- **Marke mit Gesicht:** kurze „Über uns“-Geschichte mit Bild (Studio Neat, MVMT).
- **Rhythmus:** abwechselnd ruhige weiße Bereiche und große Bild-Flächen, abgerundete Karten, viel Luft.
- **Großer, vollständiger Footer:** mehrere Spalten (Shop, Hilfe, Rechtliches, Über uns),
  Kontakt, Social, Zahlungsarten-Icons.

### Muster der Produktseiten (ESN, BALLS, Studio Neat, Editors Keys, Turtle Beach, Bruvi)
**Oberer Bereich – entscheidet über den Kauf:**
- Links große Galerie mit Thumbnails (6+ Bilder: freigestellt, Detail, Anwendung, Lieferumfang).
- Rechts der Kaufbereich: Titel, kurze Unterzeile, Preis inkl. MwSt., ggf. Varianten als Chips,
  großer Button, darunter Express-Zahlung (Shop Pay / PayPal) und „Weitere Zahlungsoptionen“.
- 3–6 kurze Vorteils-Häkchen direkt im Kaufbereich (ESN, Turtle Beach).
- **Trust-Icons direkt unter dem Button**: Versand, Rückgabe, sichere Zahlung, Lieferzeit (BALLS, ESN, Bruvi).
- Details in **Akkordeons/Tabs** statt Textwand: Beschreibung, Lieferumfang, Technische Daten,
  Versand & Rückgabe (Editors Keys, ESN).
- Beim Runterscrollen eine **Sticky-Kaufleiste** mit Preis und Button (ESN).

**Darunter – überzeugen und Fragen klären:**
- **Feature-Raster mit Bildern:** 4–6 Kacheln, je Bild + 2–4 Wörter Titel + 1 Satz (BALLS).
- **Abwechselnd Bild/Text-Blöcke** für die wichtigsten Vorteile (BALLS, Studio Neat) – jeder Vorteil nur einmal.
- **Video oder Demo** des Produkts im Einsatz, falls vorhanden (Studio Neat, Turtle Beach) –
  Section bauen, ohne Video ausgeblendet.
- **So funktioniert's** in 3 Schritten mit Bildern (BALLS „How to Use“).
- **Vergleichstabelle** (BALLS, Bruvi) → PUREKICKZ ONE vs. Handbürste.
- **Versprechen-Block** mit Siegel-artigem Element (Studio Neat „Designed to last“, ESN „Qualitätsversprechen“)
  → bei uns nur mit echten Inhalten, z. B. Versand aus DE, 14 Tage Widerruf, `[[GARANTIE]]`.
- **Technische Daten** übersichtlich als Liste/Tabelle (Turtle Beach, Studio Neat).
- **FAQ als Akkordeon** (alle).
- **Bewertungen** (alle) → bei uns gebaut, aber ausgeblendet.
- **„Passt dazu“ / Cross-Selling** (alle) → sobald es weitere Produkte gibt; bis dahin ausgeblendet.

### Was wir bewusst NICHT übernehmen
- Bewertungszahlen, Sterne, Presse-Logos, Awards, „Trusted by thousands“ – haben wir (noch) nicht.
  Dafür Platz vorsehen (ausgeblendet), aber nichts vortäuschen.
- Rabatt-Aktionen, „BOGO“, durchgestrichene Preise, Countdown, „Last Chance“, „Sold out“-Druck.
- Blog/Stories-Bereiche – erst später, wenn es Inhalte gibt.
- Newsletter-Pop-ups. Ein Newsletter-Feld im Footer darf gebaut werden, bleibt aber ausgeblendet.
- Die Farbwelten der Referenzen (Turtle Beach lila, BALLS blau/gelb usw.) – wir bleiben bei unseren Farben.

---

## 3. Leitplanken (das „Wie“ – nicht das „Was“)

Das sind Prinzipien guter Shops, keine feste Struktur. Wie du sie umsetzt, entscheidest du.

1. **Shop zuerst, Story danach.** Ein Besucher muss in Sekunden verstehen: was es ist, was es kostet, wie er es kauft.
2. **Jede Botschaft genau einmal.** Lieber eine starke Aussage als dieselbe Idee in drei Sections.
3. **Bilder tragen den Shop.** Groß, ruhig, einheitlich. Text unterstützt die Bilder, nicht umgekehrt.
4. **Vertrauen durch Fakten.** Die echten Pluspunkte sichtbar machen: Versand aus Deutschland,
   14 Tage Widerrufsrecht, sichere Zahlung, klarer Lieferumfang, erreichbarer Kontakt, Impressum.
5. **Der Kaufbereich gibt Sicherheit.** Preis, Lieferumfang, Zahlungsarten und Rückgabe auf einen Blick.
6. **Wenig Text.** Kurze Sätze. Kein Marketing-Blabla.
7. **Mobile first.** Die meisten Kunden kommen vom Handy. Dort muss es zuerst großartig aussehen.
8. **Mehrprodukt-Shop.** Architektur so bauen, dass weitere Produkte ohne Umbau dazukommen können.
9. **Nichts Leeres live.** Keine Section darf für Kunden leer oder halbfertig wirken
   (z. B. „noch keine Bewertungen“). Was noch fehlt, wird trotzdem gebaut – aber ausgeblendet,
   bis der Inhalt da ist (siehe Trust-Ebene).

### Trust-Ebene (Pflicht – sehr wichtig)
Vertrauen ist für diesen Shop entscheidend. Die folgenden Trust-Elemente werden **alle gebaut**,
auch wenn Inhalte noch fehlen. Wie sie aussehen und wo sie sitzen, entscheidest du.

| Element | Inhalt jetzt |
|---|---|
| Trust-Leiste (sitewide, z. B. unter Header oder über Footer) | Versand aus Deutschland · 14 Tage Widerruf · Sichere Bezahlung · `[[LIEFERZEIT]]` |
| Trust-Hinweise direkt unter dem Kaufbutton | Versand, Rückgabe, sichere Zahlung, Zahlungsarten-Icons |
| Lieferumfang & technische Daten | aus Abschnitt 0 |
| Zahlungsarten-Icons | im Kaufbereich und im Footer (Shopify-Zahlungsarten automatisch) |
| Service-/Kontakt-Block | Support per E-Mail, Antwort-Zeit `[[ANTWORTZEIT]]` |
| FAQ (auf Produktseite + eigene Seite) | aus Abschnitt 0, offene Fakten als Platzhalter |
| Über uns / Markenversprechen | kurze, ehrliche Markengeschichte |
| Garantie-/Rückgabe-Hinweis | `[[GARANTIE]]`, `[[RUECKSENDEKOSTEN]]` |
| Vorher/Nachher | Section mit Bild-Einstellungen, bis echte Fotos da sind mit Platzhalterbild |
| Kundenbewertungen | Section bauen, aber **standardmäßig ausgeblendet**; Aktivierung per Schalter im Theme-Editor |

Regeln für Platzhalter:
- Jeder Platzhalter ist im **Theme-Editor** als Text-/Bildfeld pflegbar, nicht im Code versteckt.
- Platzhalter sind deutlich erkennbar (`[[NAME]]`), damit ich vor dem Launch keinen übersehe.
- Vor dem Launch gilt: Ein Platzhalter wird entweder ausgefüllt oder das Element ausgeblendet –
  nie mit einer erfundenen Angabe gefüllt.
- Führe eine Liste aller Platzhalter in `PLATZHALTER.md` (Name, wo er steht, was fehlt).

### Was in einem guten Shop nicht fehlen sollte
Startseite, Produktseite, Kollektion/Katalog, Warenkorb, FAQ, Kontakt, Über uns,
ein vollständiger Footer (Kontakt, Zahlungsarten, Rechtsseiten, Social) und eine Trust-Ebene.
Welche Form das jeweils hat, ist deine Entscheidung.

---

## 4. Technische Regeln

- **Horizon für die Shop-Mechanik, Freiheit für die Bühne.** Warenkorb, Produktformular, Varianten,
  Kollektionen, Suche, Header-Logik und Checkout-Anbindung kommen aus Horizon – die funktionieren und bleiben stabil.
  Für die gestalterischen Sections (Hero, Signature-Moment, Feature-Inszenierung, Vergleich usw.)
  darfst und sollst du eigene Sections bauen, wenn Horizon die Idee nicht hergibt –
  sauber mit Schema, im Theme-Editor anpassbar.
- **Alles im Theme-Editor pflegbar.** Texte, Bilder, Reihenfolge nicht hart im Code.
- **Bilder:** einheitliche Seitenverhältnisse pro Kontext (z. B. Galerie durchgehend 4:5),
  `image_url` mit passenden Breiten + `srcset`, Lazy Loading unterhalb des ersten Bildschirms,
  keine riesigen PNGs. Nie Bilder verzerren; Zuschnitt per `object-fit`.
- **Animationen:** Bevorzugt CSS, Scroll-Driven Animations und `IntersectionObserver`. Wenn eine Idee mehr braucht,
  ist **GSAP + ScrollTrigger** erlaubt (als Datei in `assets/`, nur auf Seiten laden, die es nutzen).
  Keine weiteren Animationsbibliotheken ohne Rückfrage.
- **Performance:** nur `transform` und `opacity` animieren, keine Layout-Sprünge, Bilder nicht wegen
  Animationen verzögern, auf Mittelklasse-Handys flüssig (60 fps). `prefers-reduced-motion` respektieren:
  dann ruhige Version ohne Bewegung, Inhalt vollständig sichtbar.
- **Barrierefreiheit:** ausreichende Kontraste, Alt-Texte, Fokus-Zustände, Buttons mind. 44 px hoch.
- **Rechtsseiten** (Impressum, Datenschutz, AGB, Widerruf, Versand) existieren bereits als Shopify-Seiten –
  nur verlinken, Inhalte nicht ändern.

### Bilder ins Theme bringen
- Produktfotos kommen in Shopify an das **Produkt** (Produkt-Medien), Bilder für Startseite & Co.
  werden im **Theme-Editor** über Bild-Einstellungen gewählt. Beides lade ich selbst in Shopify hoch.
- Deine Aufgabe: aus den Originalen **optimierte Versionen** erzeugen und in `bilder/optimiert/` ablegen –
  einheitlich zugeschnitten (Format je Einsatz festlegen, z. B. Galerie 4:5), als JPG oder WebP,
  max. ca. 2400 px lange Kante, gute Qualität bei kleiner Dateigröße.
- Dazu eine kurze Liste `bilder/optimiert/UPLOAD.md`: welche Datei wohin gehört
  (Produktgalerie in welcher Reihenfolge, welche Section, welcher Alt-Text).
- Sections so bauen, dass sie mit Bildern aus den Einstellungen funktionieren (keine fest verdrahteten Bildpfade).

---

## 5. Setup: Claude Code (Cloud) + GitHub + Shopify

- Dieses Repo ist per **Shopify-GitHub-Integration** mit einem unveröffentlichten Theme verbunden.
  Jeder Commit auf dem verbundenen Branch erscheint nach kurzer Zeit in diesem Theme.
- **Gearbeitet wird auf dem Branch `neubau`.** `main` bleibt das unveränderte Horizon-Original.
  Nie direkt auf `main` committen, nie force-pushen.
- **Vor jeder Aufgabe `git pull`.** Die Synchronisierung läuft in beide Richtungen: Änderungen,
  die ich im Theme-Editor mache, committet Shopify zurück in den Branch (v. a. `templates/*.json`,
  `config/settings_data.json`, `sections/*-group.json`). Diese Änderungen nie überschreiben, sondern übernehmen.
- **Kleine, saubere Commits** – eine Section oder ein Schritt pro Commit, mit deutscher, verständlicher Commit-Nachricht.
- Es läuft **kein** `shopify theme dev` und kein `shopify theme push`. Nichts veröffentlichen.
- Vor jedem Commit prüfen, dass das Theme gültig bleibt (gültiges JSON in `templates/` und `config/`,
  gültige Section-Schemas) – ein kaputter Commit bricht die Synchronisierung.
- **Shopify lädt den ganzen Branch und erlaubt höchstens 50 MB.** Deshalb liegen `bilder/` (Originale,
  `optimiert/`, `UPLOAD.md`) und `referenzen/` auf dem eigenen Branch **`material`**, nie auf `neubau`.
  Zum Arbeiten damit: `git worktree add ../material material`; Änderungen dort committen und auf `material` pushen.

---

## 6. Arbeitsweise (verbindlich)

1. **Erst denken, dann bauen.** Vor dem Code: kurzes Konzept (Idee, Seitenaufbau, Bildinszenierung) zeigen und auf mein OK warten.
   Wenn es hilft, das Konzept als einfaches HTML-Mockup zeigen.
2. **Eine Section nach der anderen.** Nicht alles in einem Durchgang.
3. **Ich bin das Auge.** Du kannst die Shop-Vorschau aus der Cloud meist nicht selbst öffnen.
   Nach jeder Section committen, mir sagen, was ich mir in der Vorschau anschauen soll (Handy **und** Desktop),
   und auf meine Screenshots/Rückmeldung warten. Meine Screenshots kritisch prüfen, nicht nur bestätigen.
4. **Fertig heißt fertig** – eine Section ist erst fertig, wenn:
   - sie auf Handy und Desktop gut aussieht (anhand meiner Screenshots geprüft),
   - keine leeren Flächen, abgeschnittenen Texte oder springenden Bildformate da sind,
   - nur die festen Schriften und Farben verwendet werden,
   - sie im Theme-Editor anpassbar ist,
   - keine erfundene Aussage enthalten ist.
5. **Ehrliche Selbstkritik.** Am Ende jeder Seite: „Würde ich hier kaufen? Was wirkt billig, unklar oder überladen?“ – und das dann verbessern.
6. Unklare Fakten nicht raten, sondern nachfragen.
