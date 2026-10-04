# CC-ticket-booking-app
CC-ticket-booking-app

## Import akcí z O2 areny

V administraci (panel „Import akcí z O2 arena“) lze načíst akce z https://www.o2arena.cz/events/, zobrazit náhled a přidat vybrané akce. Vícedenní akce se ukládají s termíny pro každý den a v rezervaci lze termín vybrat. Import se deduplikuje podle názvu.

Omezení: prohlížeč může přímé načtení zablokovat (CORS). Aplikace poté automaticky zkusí veřejné CORS proxy (allorigins, corsproxy.io); pokud selžou, zobrazí se pole, kam lze ručně vložit HTML stránky (nebo její URL). Aplikace neposílá žádné tajné klíče. Parser spoléhá na strukturu webu O2 areny, která se může změnit.
