# Felmérő: Labdarúgó-világbajnoki döntők

## Feladat

Készíts egy egyszerű, jól áttekinthető weboldalt a mellékelt adatok alapján. Az oldal jelenítse meg az 1930 és 2026 közötti világbajnoki döntőket, tegye megtekinthetővé az egyes döntők részleteit, és engedjen ország szerint keresni.

A projekt egy Vite + Vanilla JavaScript kezdőprojekt. A `src/data.js` fájlban található adatokat használd, ne telepíts hozzá keretrendszert vagy külső csomagot. A megoldást több, jól elkülönített feladatú JavaScript-modulra bontsd.

## Munkamenet

A feladatot az alábbi sorrendben készítsd el. Minden lépés után ellenőrizd az addig elkészült működést.

### 1. A projekt elindítása

- Telepítsd a függőségeket, majd indítsd el a Vite fejlesztői szervert.
- Ismerkedj meg a `src/data.js` fájl exportált `worldCupList` tömbjével.

Ellenőrzés: az oldal betölt, a fejlesztői konzolban nincs JavaScript-hiba.

### 2. Az összes döntő megjelenítése

- Jelenítsd meg a lista minden elemét az oldalon, kártyák formájában.
- Egy kártyán a minta szerinti adatok : az év, a győztes, a végeredmény és a vesztes csapat szerepeljen.
- Mind a 23 rekord jelenjen meg.

### 3. A megjelenítés külön modulba szervezése

- A `main.js` feleljen az adatok betöltéséért és az eseménykezelésért; a `render.js` a megjelenítéséért.


### 4. A kártyák formázása

- A `src/style.css` fájlban alakíts ki jól olvasható, egységes kártyákat.
- A kártyák kisebb képernyőn is férjenek el és legyenek áttekinthetők.
- A címsor, az eredmény és a csapatok vizuálisan különüljenek el.

Ellenőrzés: az oldal széles és keskeny ablakban is használható, vízszintes túlcsordulás nélkül.

### 5. A döntő részleteinek megtekintése

- Minden kártyán legyen „Részletek” gomb.
- A részleteknél egy alert ablakban jelenjen meg a stadion, a helyszín és a nézőszám is a minta szerint

### 6. Keresés ország szerint

- A keresés a győztesek és a vesztesek között is keressen.
- A kis- és nagybetűk ne befolyásolják a találatot
- Találat esetén csak az érintett döntők kártyái jelenjenek meg.
- Találat nélkül jeleníts meg egy rövid, érthető üzenetet a minta szerint

### 7. A szűrés törlése

- A „Szűrés törlése” gomb állítsa vissza a teljes listát és az eredeti címszöveget.
- A visszaállítás után új keresést is lehessen indítani.

Ellenőrzés: keress egy országra, töröld a szűrést, majd keress egy másik országra.

## Elvárt szerkezet

```text
src/
  data.js       megadott adatok
  main.js       inicializálás, keresés és eseménykezelés
  render.js     lista és kártyák megjelenítése
  style.css     megjelenés
```

## Értékelés

- A projekt elindul, és a JavaScript-modulok megfelelően kapcsolódnak: **15 pont**
- A teljes lista és a 2026-os hiányos adatok helyes megjelenítése: **25 pont**
- A kártyák és az oldal reszponzív, áttekinthető formázása: **10 pont**
- A részletek gomb a megfelelő rekord adatait jeleníti meg: **15 pont**
- A keresés mindkét csapatra, kis- és nagybetűtől függetlenül működik: **20 pont**
- A találat nélküli állapot és a szűrés törlése helyes: **10 pont**
- A kód áttekinthető, a feladat szerinti moduláris felépítésű: **5 pont**

**Összesen: 100 pont**
