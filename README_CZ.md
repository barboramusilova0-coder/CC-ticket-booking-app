# Rezervační portál lístků – finální balíček

Tento balíček obsahuje hlavní aplikaci a soubory pro instalaci jako PWA:

- `index.html` – aplikace
- `manifest.json` – metadata instalovatelné aplikace
- `service-worker.js` – základní cache statických souborů
- `cc-icon.svg` – ikona

## Funkce v této verzi

- plánované akce a rezervace
- dvoustupňové schvalování žádostí
- správa akcí, hromadné úpravy a import CSV
- přehled uživatelů a žádostí o přístup
- automatické vyřazení minulých akcí z rezervací a archiv dokončených/zrušených akcí
- kontrola kapacity při schvalování
- auditní historie a exporty CSV
- JSON záloha a obnova dat
- nastavení vzhledu, jazykový přepínač a pomocník
- živé odběry Firestore pro akce, rezervace, žádosti o přístup a audit

## Nasazení

1. Rozbalte ZIP do samostatné složky.
2. Nahrajte **všechny čtyři soubory** do stejného kořene webu. Samotný `index.html` nestačí pro PWA.
3. Aplikaci provozujte přes HTTPS (např. Firebase Hosting), ne otevřením souboru `file://`.
4. Ověřte, že konfigurace Firebase v `index.html` odpovídá cílovému projektu.
5. Nejprve testujte na kopii Firebase projektu a s testovacími účty.

## Důležitá provozní omezení

Toto je kompletní frontendový balíček s napojením na Firestore, nikoliv samostatně ověřené produkční nasazení. Před ostrým nasazením je potřeba ověřit Firestore Security Rules, oprávnění rolí, přihlášení, schvalování souběžných rezervací a Teams webhooky přímo v cílovém projektu.

Současný frontend historicky používá vlastní kontrolu hesla uloženou v datech aplikace. To **není vhodná produkční autentizace**. Pro firemní nasazení je nutné převést přihlášení na Firebase Authentication a vynutit role v Security Rules/serverové funkci. Webhooky Teams nesmí být považovány za tajné, pokud jsou čitelné z klientského kódu nebo z dokumentu dostupného klientům; bezpečné odesílání má běžet přes serverovou funkci nebo Power Automate.

V této verzi byl odstraněn pevně zakódovaný univerzální administrátorský kód. Správce se má přihlásit existujícím účtem, kterému byla role administrátora přidělena v datech projektu.

## Kontrolní testy před nasazením

- [ ] Přihlášení a odhlášení pro každou roli
- [ ] Vytvoření žádosti a její zobrazení na jiném zařízení bez obnovení stránky
- [ ] První a druhé schválení; ověření, že kapacita nemůže být překročena souběžným schválením
- [ ] Zrušená, vyprodaná a minulá akce nelze rezervovat
- [ ] Nová/změněná akce se objeví na PC i mobilu
- [ ] Export a následná obnova JSON zálohy na testovacím projektu
- [ ] Firestore Rules odmítají přístup nepovoleným rolím
- [ ] Teams notifikace fungují přes bezpečný serverový konektor
- [ ] PWA se instaluje přes HTTPS a po aktualizaci načte novou verzi
