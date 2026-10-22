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

## Im Shopify-Admin offen (nicht im Theme)

Diese Punkte betreffen Shop-Einstellungen und Rechtstexte. Das Theme ändert sie nicht.

- **DRINGEND – Impressum fehlt (404):** Der Footer-Link „Impressum“ kommt aus dem Menü „Footer Rechtliches“ (Onlineshop → Navigation) und zeigt auf `/policies/legal-notice`. Im Shop gibt es weder die Richtlinie „Impressum“ noch eine Seite dafür. Entweder unter Einstellungen → Richtlinien → „Impressum“ den Text eintragen (dann funktioniert der Link sofort) oder eine Seite anlegen und den Menülink darauf umstellen.
- **AGB + Widerrufsbelehrung:** `[FIRMENNAME]`, `[STRASSE UND HAUSNUMMER]`, `[PLZ ORT]`, `[TELEFONNUMMER]`, `[RÜCKSENDEADRESSE]` ausfüllen
- **Datenschutz:** Telefonnummer im Abschnitt „Kontakt“ fehlt
- **Versand:** Richtlinie (4,95 € / frei ab 50 € / nur DE) und Versandeinstellungen (5,99 € / frei ab 55 € / EU + International) widersprechen sich
- **Seite „Zahlungsarten“:** Liste in eckigen Klammern mit den tatsächlich aktiven Zahlungsarten abgleichen
- **FAQ-Seite:** „[2–4 Werktage]“ steht noch in Klammern
- **Produktgewicht:** 0 kg
