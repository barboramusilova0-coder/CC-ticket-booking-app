# CC-ticket-booking-app
CC-ticket-booking-app

## Import akcí z O2 areny

V administraci lze načíst akce z https://www.o2arena.cz/events/ přes konfigurovatelnou CORS proxy, zobrazit náhled a importovat vybrané termíny. Při nedostupné proxy lze vložit HTML nebo JSON ručně. Veřejná proxy může být nedostupná nebo nevhodná pro citlivá data; aplikace proto neposílá žádné tajné klíče. Import spoléhá na strukturu veřejného webu O2 areny, která se může změnit a vyžadovat úpravu parseru.
