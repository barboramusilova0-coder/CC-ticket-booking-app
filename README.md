# CC-ticket-booking-app
CC-ticket-booking-app

## Import akcí z O2 areny

V administraci lze tlačítkem „Načíst akce z webu“ načíst akce z https://www.o2arena.cz/events/, zobrazit náhled, vybrat akce a importovat je (bez duplicit podle názvu).

Omezení:
- Prohlížeč může přímé načtení zablokovat kvůli CORS. Aplikace proto automaticky zkusí veřejné CORS proxy (allorigins, corsproxy.io); ty mohou být nedostupné a neposílají se přes ně žádné tajné klíče.
- Pokud načtení selže, zobrazí se pole pro ruční vložení HTML (nebo jen URL) stránky a tlačítko „Zpracovat vložený obsah“.
- Import spoléhá na strukturu veřejného webu O2 areny, která se může změnit a vyžadovat úpravu parseru.
