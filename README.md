### CELE
:white_check_mark: SPA single page application
:white_check_mark: json-server server udostepniający dane w postaci json
:white_check_mark: Ajax klient działający w przeglądarce
:white_check_mark: React javascriptowa biblioteka
---2---
:white_check_mark: przygotowanie widoku (read only) do prezentacji danych pobranych z wybranego przez siebie ogólnodostępnego API -     przy czym nie powinny to być płaskie dane w postaci zwykłej listy rekordów, ale coś z przynajmniej jednym poziomem relacji.
:white_check_mark: przeglądanie powinno uwzględniać takie podstawowe operacje jak wyszukiwanie czy sortowanie. 
:white_check_mark: W realizacji dalszej części projektu dane te należy wykorzystać do zasilenia lub uzupełnienia swojej bazy (np. aplikacja może przechowywać dane o kolekcji filmów, własne oceny czy opisy, ale informacje o filmach i obrazy pobierać z API).
---3---
:white_check_mark: prawidłowa realizacja zakładanej funkcjonalności (ocenie podlega również złożoność przedstawianego projektu - CRUD do pojedynczej tabeli to maks. 3 punkty, dodatkowe punkty przyniesie bardziej złożony model danych i bardziej interesujący dostęp do nich, w tym logika biznesowa pasująca do wybranego tematu)
:white_check_mark: jakość interfejsu (intuicyjność, wygoda, przyjazność użycia, niepodatność na błędy, atrakcyjność)
:white_check_mark: jakość projektu, w tym ocena struktury, czytelności kodu, prawidłowy podziału na moduł czy komponenty, poprawność korzystania z bibliotek (wymaga przedstawienia ustnego sprawozdania)


potrzebny jest node.js

Aplikację uruchamiamy wpisując w konsole:
(musimy być w folderze spacex)
### `npm start`

Server Json uruchamiamy:
Otwieramy inny terminal w który wpisujemy komendę
 ### `npx json-server --watch data/db.json --port 8000`


Link do Api: i do danych jakie daje:
### https://api.spacexdata.com/v4/
