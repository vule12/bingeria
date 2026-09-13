# Kako pokrenuti projekt

```bash
npm install
npm run dev
```

Otvori [http://localhost:3000](http://localhost:3000) u pregledniku.

Ostale naredbe:

```bash
npm run build   # produkcijski build
npm run start   # pokreće build
npm run lint    # provjera koda
```

## Zašto je tražilica klijentska komponenta, a lista rezultata nije?

Tražilica je jedini dio koji mora reagirati tipkamo. Ona pamti što je u polju, čeka da prestanemo tipkati i onda mijenja adresu. To se sve događa u pregledniku.

Lista rezultata ništa ne treba pamtiti. Ona samo prikaže kartice. To se odradi na serveru, prije nego što stranica učita. Time, ključevi i API adrese ne završe u pregledniku i ostanu sigurne.

## Čemu služi grupiranje ruta bez utjecaja na URL

Dijeljenje info u O Projektu i Pravila postoji samo radi organizacije
koda i dijeljenja istog layouta. Next.js takvu mapu preskoči kad gradi adresu, pa stranice unutar nje žive na `/o-projektu` i `/pravila`, a ne na `/info/o-projektu`.
