# Plik zawierający liste zadań do wykonania

## TODO

**Proszę o dodawnia nowych zadań jeśli takowe się pojawią i odhaczanie wykonanych po przez wpisanie inicjałów w [] (np [PK])**

- **[ PK ]** Opracować strukturę JSON dla treningu zapisanego w local storage
- **[ ML ]** Opracować strukturę JSON dla pojedyczego zapisanego w local storage (ćwiczenie dodane przez użytkownika)
- **[ ML ]** Zapisywanie do local storage
- **[ ML ]** Rozbudowanie struktury plików w projekcie (stworzenie katalogów dla serwisów i kontrolerów)
- **[ JD ]** Stworzenie bazy danych - stworzenie bazy danych do przetrzymywania globalnych danych
- **[ PK ]** Obsługa pamięci po uruchomieniu aplikacji - sprawdzanie zawartości local storage
- **[ JD ]** Obsługa danymi aplikacji - stworzenie prostej strony do przeglądania i zarządzania danymi z bazy danych.
- **[ ML ]** Stworzyć plik JSON zwierający listę kilku przykładowych ćwiczeń (będą to ćwiczenia wpisane w aplikacji), dobrze by było gdyby struktua JSONów była taka sama jak tych zapisywanych do local storage
- **[ JD ]** Dodanie danych - Utworzenie podstawowych testowych danych dla aplikacji i wstaiwienie ich do bazy danych. 
- **[ JD ]** Stworzenie zabezpieczeń do przeglądania danych  - Logowanie przy zarządzaniu danymi. 
- **[ PK ]** Obsłużyć okno tworzenia treningu, na razie bez dodawania własnego ćwiczenia, dodać tylko przycisk przenoszący na okno dodawania ćwiczenia
- **[ ]** Opracować metodę przechowywania źródła z którego przenieśliśmy się na okno dodawania ćwiczenia, np gdy dodajemy ćwiczenie w trakcie dodawania treningu to po dodaniu ćwiczenia poza dodaniem go do local storage dodajemy go na tworzoną aktualnie listę trningową
- **[ PK ]** Stworzyć serwis będący magazynem na dane (np trningi)
- **[ ML ]** Opracować okno dodawnia własnego ćwiczenia 
- **[ ML ]** Walidacja okna dodawnia własnego ćwiczenia 
- **[ ]** Zintegrować ze sobą okna dodawania ćwiczenia oraz dodawania treningu
- **[ ML ]** Lista ćwiczeń oraz szczegóły ćwiczenia
- **[ ML ]** Stworzyć okno wyświetlające listę ćwiczeń (na razie tylko nazwy, bez możliwości podglądu)
- **[ PK ]** Stworzyć okno wyświetlające listę trenigów (na razie bez możliwości interakcji)
- **[ ]** Stowrzyć dokumentacje opracownych JSONów
- **[ JD ]** Rest api - Stworzenie api. 
- **[ JD ]** Rest api Test - Stworzenie testowej funkcji odpowiadającej zapytaniom metody POST. 
- **[ PK ]** Dodanie okna na którym wybieramy aktualne ćwiczenie
- **[ PK ]** Obsługa notyfikacji systemowych
- **[ PK ]** Funkcjonalność okna treningowego
- **[ PK ]** Obsługa timera

---  

## Pomysły projektowe

---
**Piotr Klepczyk  03.11.2019**  
Na tę chwilę myślę że to wystarczy na początkową fazę. Niektóre punkty są dość ogólne, ale chyba wiadomo o co chodzi.  
Na tę chwilę nie przejmujemy się wyglądem aplikacji, niech wygląda schludnie ale nie poświęcamy na to dużo czasu, lepiej niech będzie mniej piękna, a w pełni sprawna ;)  
  
Moje propozycje co do struktury JSONów:  
Treniegi:
```JSON
[
    {
        "name": "NAZWA",
        "desc": "OPIS",
        "tasks": [
            ćwiczenie1,
            ćwiczenie2,
        ]
    },
]
```
Gdzie ćwiczenie1 to obiekt ćwiczenia, przerwe tutaj traktujemy jako ćwiczenie.  
  
SERIA:
```JSON
{
    "name": "NAZWA",
    "taskType": "TYP",
    "opis": "OPIS",
    "numOfSeries": "LICZBA_SERII",
    "task": [
        {
            "type": "ĆWICZENIE/PRZERWA",
            "numOfRep": "LICZBA_POWTÓRZEŃ",
            "value": "OBCIĄŻENIE/CZAS/DYSTANS"
        },
        {
            "type": "ĆWICZENIE/PRZERWA",
            "numOfRep": "LICZBA_POWTÓRZEŃ",
            "value": "OBCIĄŻENIE/CZAS/DYSTANS"
        }
    ]
}
```  
Gdzie _taskType_ to typ całego ćwiczenia: na przykłąd kardio / siłowe.  
  
Powyższe to tylko moja sugestia :D  

---