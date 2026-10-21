# Platzhalter

Vor dem Launch gilt: Jeder Platzhalter wird ausgefüllt **oder** das Element wird ausgeblendet. Nie mit erfundenen Angaben füllen.
Pflege im Theme-Editor, sofern nicht anders angegeben.

## Offen

| Platzhalter | Wo er steht | Was fehlt |
|---|---|---|
| `[[KABEL_IM_LIEFERUMFANG]]` | Lieferumfang (Produktseite, Startseite) | Liegt ein USB-C-Kabel bei? Ja/Nein. Bis zur Antwort wird kein Kabel genannt. |
| `[[AKKULAUFZEIT]]` | Technische Daten | Laufzeit pro Akkuladung. Ohne Angabe wird die Zeile ausgeblendet. |
| `[[LADEDAUER]]` | Technische Daten | Dauer einer vollen Ladung. Ohne Angabe wird die Zeile ausgeblendet. |
| `[[GARANTIE]]` | Versprechen-Block, Versand & Rückgabe | Gibt es eine Garantie über die gesetzliche Gewährleistung hinaus? Sonst ausblenden. |
| `[[ANTWORTZEIT]]` | Service-/Kontakt-Block | Wie schnell antwortet der Support? Sonst ausblenden. |
| `[[FOTO_ANWENDUNG]]` | So funktioniert's, Schritt 3; Produktgalerie (letztes Bild) | Foto: Gerät reinigt einen verschmutzten Sneaker. |
| `[[VORHER_NACHHER]]` | Vorher/Nachher-Section (ausgeblendet) | Zwei echte Fotos desselben Schuhs, vorher und nachher. |
| `[[BILD_PFLEGE]]` usw. | Kategorie-Kacheln (ausgeblendet) | Erst nötig, wenn es weitere Kategorien gibt. |

## Erledigt (aus dem Shopify-Shop übernommen)

| Platzhalter | Wert | Quelle |
|---|---|---|
| `[[LIEFERZEIT]]` | Bearbeitung meist 1 Werktag, Lieferung 2–4 Werktage nach Versand (DE) | Richtlinie „Versand“ |
| `[[RUECKSENDEKOSTEN]]` | Rücksendung für dich kostenlos | Richtlinie „Widerrufsrecht“ |

## Im Shopify-Admin offen (nicht im Theme)

Diese Punkte betreffen Shop-Einstellungen und Rechtstexte. Das Theme ändert sie nicht.

- **Impressum fehlt** → Einstellungen → Richtlinien
- **AGB + Widerrufsbelehrung:** `[FIRMENNAME]`, `[STRASSE UND HAUSNUMMER]`, `[PLZ ORT]`, `[TELEFONNUMMER]`, `[RÜCKSENDEADRESSE]` ausfüllen
- **Datenschutz:** Telefonnummer im Abschnitt „Kontakt“ fehlt
- **Versand:** Richtlinie (4,95 € / frei ab 50 € / nur DE) und Versandeinstellungen (5,99 € / frei ab 55 € / EU + International) widersprechen sich
- **Seite „Zahlungsarten“:** Liste in eckigen Klammern mit den tatsächlich aktiven Zahlungsarten abgleichen
- **FAQ-Seite:** „[2–4 Werktage]“ steht noch in Klammern
- **Produktgewicht:** 0 kg
