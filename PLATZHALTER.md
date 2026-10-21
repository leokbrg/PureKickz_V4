# Platzhalter

Vor dem Launch gilt: Jeder Platzhalter wird ausgefüllt **oder** das Element wird ausgeblendet. Nie mit erfundenen Angaben füllen.
Pflege im Theme-Editor, sofern nicht anders angegeben.

## Offen

| Platzhalter | Wo er steht | Was fehlt |
|---|---|---|
| `[[KABEL_IM_LIEFERUMFANG]]` | Startseite: „Lieferumfang & Daten“ (Zeile „USB-C-Kabel“), FAQ „Ist ein USB-C-Kabel dabei?“; Produktseite: Lieferumfang | Liegt ein USB-C-Kabel bei? Ja → Zeile „1× USB-C-Kabel“; Nein → Zeile und FAQ-Frage löschen. |
| `[[AKKULAUFZEIT]]` | Startseite: „Lieferumfang & Daten“ (Zeile „Akkulaufzeit“), FAQ „Wie lange hält der Akku?“; Produktseite: Technische Daten | Laufzeit pro Akkuladung. Ohne Angabe: Zeile löschen, FAQ-Satz kürzen. |
| `[[LADEDAUER]]` | Startseite: „Lieferumfang & Daten“ (Zeile „Ladedauer“), FAQ „Wie lade ich das Gerät?“; Produktseite: Technische Daten | Dauer einer vollen Ladung. Ohne Angabe: Zeile löschen, FAQ-Satz kürzen. |
| `[[GARANTIE]]` | Startseite: FAQ „Gibt es eine Garantie?“; Produktseite: Versprechen-Block, Versand & Rückgabe | Gibt es eine Garantie über die gesetzliche Gewährleistung hinaus? Sonst Frage löschen bzw. ausblenden. |
| `[[ANTWORTZEIT]]` | Startseite: „FAQ & Service“ → Kontaktkarte („Antwort: …“) | Wie schnell antwortet der Support? Sonst Feld „Antwortzeit“ leeren. |
| `[[FOTO_ANWENDUNG]]` | Startseite: „So funktioniert's“, Schritt 3 (zeigt bis dahin das Gerät in der Hand); Produktgalerie | Foto: Gerät reinigt einen verschmutzten Sneaker (freigestellt oder auf neutralem Grund). |
| `[[VORHER_NACHHER]]` | Startseite: Section „PK Vorher/Nachher“ (ausgeblendet) | Zwei echte Fotos desselben Schuhs, gleicher Ausschnitt, vorher und nachher. |
| Kundenbewertungen | Startseite: Section „PK Bewertungen“ (ausgeblendet, Schalter „Bewertungen anzeigen“) | Nur echte Bewertungen eintragen. |
| Social-Media-Profile | Footer → „Social Media“ | Nur echte Profil-Links eintragen; leere Felder werden nicht angezeigt. |
| `[[BILD_PFLEGE]]` usw. | Kategorie-Kacheln (ausgeblendet) | Erst nötig, wenn es weitere Kategorien gibt. |

## Erledigt (aus dem Shopify-Shop übernommen)

| Platzhalter | Wert | Quelle |
|---|---|---|
| `[[LIEFERZEIT]]` | Bearbeitung meist 1 Werktag, Lieferung 2–4 Werktage nach Versand (DE) | Richtlinie „Versand“ |
| `[[RUECKSENDEKOSTEN]]` | Rücksendung für dich kostenlos | Richtlinie „Widerrufsrecht“ |

## Im Shopify-Admin offen (nicht im Theme)

Diese Punkte betreffen Shop-Einstellungen und Rechtstexte. Das Theme ändert sie nicht.

- **Impressum fehlt** → Einstellungen → Richtlinien → „Impressum“ (der Footer verlinkt bereits auf `/policies/legal-notice`, aktuell ins Leere)
- **AGB + Widerrufsbelehrung:** `[FIRMENNAME]`, `[STRASSE UND HAUSNUMMER]`, `[PLZ ORT]`, `[TELEFONNUMMER]`, `[RÜCKSENDEADRESSE]` ausfüllen
- **Datenschutz:** Telefonnummer im Abschnitt „Kontakt“ fehlt
- **Versand:** Richtlinie (4,95 € / frei ab 50 € / nur DE) und Versandeinstellungen (5,99 € / frei ab 55 € / EU + International) widersprechen sich
- **Seite „Zahlungsarten“:** Liste in eckigen Klammern mit den tatsächlich aktiven Zahlungsarten abgleichen
- **FAQ-Seite:** „[2–4 Werktage]“ steht noch in Klammern
- **Produktgewicht:** 0 kg
