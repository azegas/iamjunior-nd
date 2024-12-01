# iamjunior-home-service Task overview

First I write **bonus** features that I have done besides the actual project requirements.

Actual project requirements are written below with indications what is done and what is not.

## DONE BONUS features

- [x] Mimicking loading functionality - fetching what is "static" quickly, fetching businesses with setTimeout to imitate loading, so the user is aware, that he will get some information soon. Not having a long initial loading screen.
- [x] json server to to mimic and provide fake data
- [x] active class both in menu and in service search
- [x] loading effect faked in useFetch hook by adding setTimeout
- [x] catch error in useFetch hook and display it in the component
- [x] go to individual business pages
- [x] 404 page
- [x] favicon
- [x] deployed to vercel
- [x] toast notifications
- [x] user dashboard
- [x] Allow user to add favorites only if they are logged in
- [x] Navigation menu displays favorites only if the user is logged in
- [x] login/logout/register info messages
- [x] If no favorites in the favorites page, display a message and a button to go back to the main page to add some
- [x] Swagger API docs - https://www.youtube.com/watch?v=eiSem0cqaN0&ab_channel=KrisFoster
- [x] Automatically recreate database data from scratch
- [x] Bookings functionality
- [x] Delete endpoints
- [x] absolute paths instead of ../../
- [x] Functional search in homepage

## TODO BONUS features

- [ ] pagination (100 businesses)
- [ ] dark mode - https://usehooks-ts.com/react-hook/use-dark-mode
- [ ] make favorites to be stored in the db(different for each user), not in local storage
- [ ] fetch images from aws s3 bucket or similar
- [ ] dark mode toggle
- [ ] when clicking book now (in business list view, individual card) - leads to individual page with booking panel already opened

# Actual project requirements

## React

### React ekosistema, JSX sintaksė ir state valdymas

1. [x] Topbar komponentas: Tai turėtų apimti logotipą ir navigacijos meniu, kuris kol kas gali būti statinis vėliau bus įtrauktas react-router.
2. [x] Paieškos juosta: Centrinė paieškos juosta su mygtuku. Nors interaktyvi paieška dar nebus įgyvendinta, svarbu paruošti input elementą ir paieškos mygtuką.
3. [x] Kategorijos kortelė: Paslaugų sekcijoje, kiekviena paslauga (pvz., “Cleaning”, “Repair”) turėtų būti atvaizduojama kaip atskiras komponentas su ikona ir tekstiniu aprašymu.
4. [x] Stilius: SCSS modules arba Styled-components
5. [ ] Responsive design (optional): Naudoti CSS media queries, kad puslapis tinkamai atrodytų įvairaus dydžio įrenginiuose. (did not want to focus on styling for now, was focusing on react and node more)
6. [x] Būsenos valdymas: Nors šioje užduotyje būsenos valdymo galimybių nebus daug, verta paruošti būsimam funkcionalumui su useState. Galima paruošti search inputui.

### Komponento gyvavimo ciklai ir react-router-dom

1. [x] Topbar komponentas: Įgyvendinti navigaciją react-router-dom pagalba tarp puslapių Home, Services ir About Us. Naudoti Link komponentą
2. [x] Login mygtukas: Paspaudus Login/Sign Up mygtuką naviguoti į Login puslapį naudojant useNavigate hooką
3. [x] Paslaugų kortelė: Paspaudus ant kortelės naviguoti į /search/:category routą
4. [x] Routes: Įgyivendinti naujus maršrutus (routes) tokius kaip: Home, Services, About Us, Login, Register, SearchCategory

### Custom Hooks

1. [x] Categories komponentas: Įgyvendinti kategorijų pasirinkimą. Paspaudus ant kitos kategorijos turi pasikeisti ir URL iš /search/cleaning į /search/repair
2. [x] Filtravimas: Išfiltruoti tik tas paslaugas kurios įeina į kategoriją
3. [x] Save as favorite (optional): Pridėti ant kortelės širdelės arba žymos ikoną, kurią nuspaudus būtų išsaugotą paslauga į localStorage. Galite naudoti useLocalStorage hooksą.

### React Context ir zustand

1. [x] Login: Sukurti /login route, įgyvendinti savo norimą dizainą ir pridėti inputų validaciją.
2. [x] Redirect: Suvedus inputus ir paspaudus Login mygtuką išsaugoti userio informaciją su useContext ir localStorage bei redirectint į pagrindinį / route
3. [x] Topbar komponentas: Atnaujinti komponento state kai asmuo yra prisijungęs
4. [x] Register (optional): Įgyvendinti /register route ir savo norimą dizainą

## Node.js

### Node.js ir Express pagrindai

Home service aplikacijos API. Sukurti RESTful API naudojant Express.js, skirtą valdyti kategorijas, įmones ir užsakymus.

#### Duomenų Modeliai:

- [x] Kategorijos: Kiekviena kategorija turi ID, pavadinimą, fono spalvą ir ikonos URL.
- [x] Įmonės: Kiekvienas įmonės įrašas apima tokius duomenis kaip ID, pavadinimas, aprašymas, adresas, kategorija, kontaktinis asmuo, el. paštas ir nuotraukos.
- [x] Užsakymai: Sekami užsakymai su tokiomis detalėmis kaip ID, įmonės ID, data, laikas, vartotojo el. paštas, vartotojo vardas ir statusas.

#### API kuriuos reikia įgyvendinti:

##### 1. Kategorijos

- [x] GET /categories: Gauna visas kategorijas.
- [x] POST /categories: Sukuria naują kategoriją.

##### 2. Įmonės

- [x] GET /businesses: Gauna visas įmones.
- [x] GET /businesses/category/:category: Gauna visas įmones, priklausančias nurodytai kategorijai.
- [x] GET /businesses/:id: Gauna konkrečią įmonę pagal ID.
- [x] POST /businesses: Prideda naują įmonę į sąrašą. Užtikrinti, kad būtų pateikti visi būtini laukai.
- [x] PUT /businesses/:id: Atnaujina esamą įmonę. Patikrinti, ar įmonė su nurodytu ID egzistuoja, prieš atnaujinant.
- [x] GET /businesses/:businessId/bookings/date/:date: Gauna visus užsakymus konkrečiai įmonei nurodytą dieną.

##### 3. Užsakymai

- [x] GET /bookings/user/:email: Gauna visus užsakymus, susijusius su konkretaus vartotojo el. pašto adresu.
- [x] POST /bookings: Sukuria naują užsakymą. Užtikrinti, kad būtų pateikti visi laukai.
- [x] DELETE /bookings/:id: Ištrina konkretų užsakymą.

##### Papildomos funkcijos, kurias reikia įgyvendinti:

- [x] Error handling: Įgyvendinti išsamią klaidų tvarkymo sistemą, kad būtų aiškiai pateikiami pranešimai apie trūkstamus duomenis, netinkamas operacijas ir nesėkmingus veiksmus.
- [x] Data check: Užtikrinti, kad visi įvesties duomenys atitiktų tikėtinus formatus ir apribojimus prieš juos apdorojant.

### MongoDB ir Mongoose

- [x] Panaudoti 5 paskaitos kurtus API ir perdaryti juos naudojant MongoDB ir mongoose

### Autentifikacija Node.js

- [x] Pridėti User schemą su atitinkamais laukais
- [x] Panaudoti autentifikacijos metodus ir apsaugoti reikiamus API
- [x] Išskaidyti routes į skirtingus failus pvz. routes/bookingRoutes.js, routes/businessRoutes.js, routes/authRoutes.js

### ESlint ir Prettier

- [x] Integruoti ESlint ir atitikti visus ESlint reikalavimus
- [x] Integruoti Prettier ir suformatuoti visus failus

## Typescript

### Typescript basics

- [x] Integruoti Typescript palaikymą
- [x] Refactorinti visą kodą iš Javascript į Typescript

### Frontend + Backend

- [x] Pridėti kategorijas ir įmones į duomenų bazę
- [x] Sukurta front-end aplikacija
- [x] Sukurta prisijungimo ir registracijos forma
- [x] Sujungti /categories ir /businesses API su front-end aplikacija
- [x] Sujungti /login ir /register API su prisijungimo ir registracijos formomis.(Įgyvendinti registracijos formą, jeigu nėra)
- [x] (Optional) Pridėti error ir sucess messages. Pvz. kai įvesti netinkami duomenys

### Formik + Yup

### Formik & Yup

1. [x] Integruoti Formik ir yup bibliotekas į React aplikaciją
   1. [x] Login forma
   2. [x] Register forma
2. [x] Naudokite tipus kiekviename komponente: Naudokite TypeScript tipus visur, kur įmanoma, kad užtikrintumėte saugumą ir pagerintumėte kodo kokybę.
3. [x] Klaidos pranešimai: Visada parodykite klaidos pranešimus šalia laukelių, kad vartotojai žinotų, kas negerai.
4. [x] Naudokite Yup validaciją: Yup yra galinga biblioteka, kuri leidžia lengvai kurti sudėtingas validacijos taisykles.
5. [x] Automatinis laukų tikrinimas: Naudokite touched savybę iš Formik, kad parodytumėte klaidas tik tiems laukams, kurie buvo paliesti (paspausti). Field tai daro automatiškai.
6. [x] Kintamųjų laikymas: Laikykite initialValues ir validationSchema ne renderio viduje. Galite laikyti virš komponento arba geriausia iškelti į atskirą failą.
7. [x] Pavadinimai: Kuriant didelę aplikaciją naudoti papildomus žodžius kintamiesmams pvz.: komponentas LoginForm.tsx, tipai LoginFormValues, pradinės reikšmės const loginInitialValues: LoginFormValues = {...}, schema const loginValidationSchema: Yup.Schema<LoginFormValues> = Yup.object({...})
8. [x] Pernaudojamumas: Išsikelti dažniausiai naudojamus error žinutes į atskirą kintamąjį pvz.: const errorMessage = { required: "Laukas privalomas"}

### React-query

- [x] Integruoti React-query biblioteką į React aplikaciją

### Praktika 2 paskaitas

- [x] Padaryti dinaminį route vieno business page
- [x] Dropdown menu paspaudus ant Avatar
- [x] Sidebar modal form atidarymas nuspaudus "Book Appointment" mygtuką
- [x] Atidaryti Mano užsakymai route pasirinkus "My booking" opciją iš dropdown menu

## Test

- [x] Integruoti Jest ir React Testing Library bibliotekas į React aplikaciją
- [ ] Parašyti testus kurie padengtų bent 50% code coverage (did a few tests for practice)

## Deploy

- [x] Deployinti front-end į Vercel
