# CC-ticket-booking-app
CC-ticket-booking-app

## Import akcí z O2 areny

V administraci lze načíst akce z https://www.o2arena.cz/events/ přes konfigurovatelnou CORS proxy, zobrazit náhled a importovat vybrané termíny. Při nedostupné proxy lze vložit HTML nebo JSON ručně. Veřejná proxy může být nedostupná nebo nevhodná pro citlivá data; aplikace proto neposílá žádné tajné klíče. Import spoléhá na strukturu veřejného webu O2 areny, která se může změnit a vyžadovat úpravu parseru.

### Postup a omezení importu

- Tlačítko „Načíst akce z O2 arena“ nejdřív zkusí přímé načtení (`fetch`, `mode: "cors"`), poté automaticky několik CORS proxy (nastavená proxy, allorigins `raw` i `get`, corsproxy.io, codetabs, r.jina.ai). Prohlížeč přímé načtení z `file://` nebo cizí domény zpravidla blokuje (CORS) a veřejné proxy mohou být nedostupné.
- Pokud nic nepomůže, otevřete stránku O2 areny, zobrazte zdroj stránky (Ctrl+U), zkopírujte celý obsah (HTML) a vložte jej do pole „Ruční záloha“. Do pole lze vložit i URL z `o2arena.cz` – aplikace ji načte přes proxy. Samotná URL ale nenahrazuje obsah stránky.
- Parser zkouší JSON-LD, vložený JSON (`__NEXT_DATA__`, `__INITIAL_STATE__` …), karty a odkazy na `/events/…` a nakonec text. Po změně struktury webu může být nutná úprava parseru. Diagnostika (délka HTML, počty nalezených akcí) se zobrazuje pod tlačítky a v konzoli.
- Duplicity se určují podle názvu akce (bez ohledu na velikost písmen).
