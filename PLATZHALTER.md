# Platzhalter

Vor dem Launch gilt: Jeder Platzhalter wird ausgefüllt **oder** das Element wird ausgeblendet. Nie mit erfundenen Angaben füllen.
Pflege im Theme-Editor, sofern nicht anders angegeben.

## So funktioniert die Ausblendung

Alles, was `[[...]]` enthält oder leer ist, wird **für Kunden automatisch ausgeblendet** – FAQ-Fragen,
Service-Block (Antwortzeit), Häkchen, Vorteile, Versprechen, Technische Daten, Vergleich, Fakten und
die Produkt-Metafelder. Im **Theme-Editor** bleiben diese Einträge sichtbar, mit gestrichelter
Magenta-Linie markiert, damit du keinen übersiehst. Sobald du den Platzhalter durch die echte Angabe
ersetzt, erscheint der Eintrag im Shop.

## Offen

| Platzhalter | Wo er steht | Was fehlt |
|---|---|---|
| `[[KABEL_IM_LIEFERUMFANG]]` | Produktseite: FAQ „Ist ein USB-C-Kabel dabei?“ (ausgeblendet). Lieferumfang nennt bis dahin kein Kabel. | Liegt ein USB-C-Kabel bei? Ja → Antwort eintragen und im Metafeld „Lieferumfang“ die Zeile „USB-C-Kabel“ ergänzen; Nein → Frage löschen. |
| `[[LADEDAUER]]` | Produktseite: FAQ „Wie lange dauert das Laden?“ (ausgeblendet) | Dauer einer vollen Ladung. |
| `[[AKKULAUFZEIT]]` | Produktseite: FAQ „Wie lange hält eine Akkuladung?“ (ausgeblendet) | Laufzeit pro Akkuladung. |
| `[[GARANTIE]]` | Produktseite: FAQ „Gibt es eine Garantie?“ (ausgeblendet) | Garantie über die gesetzliche Gewährleistung hinaus? Sonst Frage löschen. |
| `[[ANTWORTZEIT]]` | Produktseite: „FAQ & Service“ → Kontaktkarte, Zeile „Antwort: …“ (ausgeblendet) | Wie schnell antwortet der Support? |
| `[[FOTO_ANWENDUNG]]` | Produktseite: „So funktioniert's“, Schritt 3 (zeigt bis dahin das Gerät in der Hand); Produktgalerie | Foto: Gerät reinigt einen verschmutzten Sneaker. |
| `[[VORHER_NACHHER]]` | Produktseite: Section „PK Vorher/Nachher“ (im Shop unsichtbar, bis beide Bilder gesetzt sind) | Zwei echte Fotos desselben Schuhs, gleicher Ausschnitt, vorher und nachher. |
| Kundenbewertungen | Produktseite: Section „PK Bewertungen“ (ausgeblendet, Schalter „Bewertungen anzeigen“) | Nur echte Bewertungen eintragen. |
| Social-Media-Profile | Footer → „Social Media“ | Nur echte Profil-Links eintragen; leere Felder werden nicht angezeigt. |
| `[[BILD_PFLEGE]]` usw. | Kategorie-Kacheln (ausgeblendet) | Erst nötig, wenn es weitere Kategorien gibt. |
| Weitere Produkte | Startseite: „Unsere Produkte“ (ausgeblendet) | Einblenden, sobald es mindestens zwei Produkte gibt. |

## Erledigt (aus dem Shopify-Shop übernommen)

| Platzhalter | Wert | Quelle |
|---|---|---|
| `[[LIEFERZEIT]]` | Bearbeitung meist 1 Werktag, Lieferung 2–4 Werktage nach Versand (DE) | Richtlinie „Versand“ |
| `[[RUECKSENDEKOSTEN]]` | Rücksendung für dich kostenlos | Richtlinie „Widerrufsrecht“ |

## Im Shopify-Admin offen (nicht im Theme) – Launch-Liste

Diese Punkte betreffen Shop-Einstellungen, Rechtstexte und Pflichten als Händler. Das Theme ändert sie nicht.

### Rechtstexte
- [ ] **Impressum fehlt (404):** Einstellungen → Richtlinien → „Impressum“ ausfüllen. Footer-Link und Kontaktzeile unter dem Kaufbutton zeigen auf `/policies/legal-notice`.
- [ ] **Richtlinie „Versand“** durch den neuen Text ersetzen (Liefergebiet EU, 5,99 €, ab 50 € kostenlos, Express 9,99 €, EU 13,99 €). Darin offen: `[[LIEFERZEIT_EXPRESS]]` (Lieferzeit Express DE), `[[LIEFERZEIT_EU]]` (Lieferzeit in andere EU-Länder) – gesetzlich nötig, nicht leer lassen.
- [ ] **AGB:** § 6 „Wir liefern innerhalb Deutschlands.“ → „Wir liefern nach Deutschland und in alle Länder der Europäischen Union.“ Außerdem `[FIRMENNAME]`, `[STRASSE UND HAUSNUMMER]`, `[PLZ ORT]`, `[Telefon]` ausfüllen.
- [ ] **Widerrufsbelehrung (Seite):** `[FIRMENNAME]`, Anschrift, `[TELEFONNUMMER]`, `[RÜCKSENDEADRESSE]` ausfüllen.
- [ ] **Datenschutz:** Telefonnummer im Abschnitt „Kontakt“ fehlt („telefonisch unter ,“). Am besten Rechtstexte über einen Dienst (IT-Recht Kanzlei, Händlerbund, eRecht24) beziehen.
- [x] Cookie-Banner aktiv
- [x] Versand-Einstellungen: DE 5,99 € / ab 50 € kostenlos / Express 9,99 €, EU 13,99 €, Zone „International“ entfernt
- [x] Seite „Zahlungsarten“ und FAQ-Seite an aktive Zahlungsarten und Versand angepasst

### Pflichten für ein Elektrogerät mit Akku (vor dem ersten Verkauf)
- [ ] ElektroG: Registrierung bei der stiftung ear, WEEE-Reg.-Nr. in Shop und Rechnungen
- [ ] Batterie: Registrierung für den eingebauten Akku (stiftung ear)
- [ ] Verpackung: LUCID-Registrierung + Vertrag mit dualem System
- [ ] Produktsicherheit (GPSR): Hersteller-Name/-Anschrift, verantwortliche Person in der EU, Sicherheitshinweise auf der Produktseite
- [ ] CE-Konformitätserklärung vom Lieferanten, deutsche Bedienungsanleitung im Paket
- [ ] Hinweise zur Rücknahme von Altgeräten/Altbatterien im Shop
- [ ] Kleinunternehmer (§ 19 UStG)? Dann „inkl. MwSt.“ im Theme ersetzen

### Aufräumen
- [ ] CJ-Bewertungen in AG Product Reviews löschen, App-Reiter „Our Reviews“ abschalten; danach Sterne einschalten (Produktseite → PK Sterne)
- [ ] Loox und Judge.me deinstallieren
- [ ] Alte englische Seiten löschen (Track Order, Terms and Conditions, Shipping Policy, Return Policy, About us, Contact)
- [ ] Produktgewicht eintragen (steht auf 0 kg)
- [ ] Testbestellung DE und EU

### Live schalten
- [ ] Domain verbinden, Theme `neubau` veröffentlichen, Passwortschutz entfernen
