- [iamjunior-home-service (frontend)](#iamjunior-home-service-frontend)
- [React part](#react-part)
  - [DONE BONUS features](#done-bonus-features)
  - [TODO BONUS features](#todo-bonus-features)
  - [Actual project requirements](#actual-project-requirements)
    - [React ekosistema, JSX sintaksė ir state valdymas](#react-ekosistema-jsx-sintaksė-ir-state-valdymas)
    - [Komponento gyvavimo ciklai ir react-router-dom](#komponento-gyvavimo-ciklai-ir-react-router-dom)
    - [Custom Hooks](#custom-hooks)
    - [React Context ir zustand](#react-context-ir-zustand)

# iamjunior-home-service (frontend)

# React part

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

## TODO BONUS features

- [ ] Functional search in homepage
- [ ] pagination (100 businesses)
- [x] absolute paths instead of ../../
- [ ] dark mode - https://usehooks-ts.com/react-hook/use-dark-mode
- [ ] make favorites to be stored in the db(different for each user), not in local storage

## Actual project requirements

### React ekosistema, JSX sintaksė ir state valdymas

1. [x] Topbar komponentas: Tai turėtų apimti logotipą ir navigacijos meniu, kuris kol kas gali būti statinis vėliau bus įtrauktas react-router.
2. [x] Paieškos juosta: Centrinė paieškos juosta su mygtuku. Nors interaktyvi paieška dar nebus įgyvendinta, svarbu paruošti input elementą ir paieškos mygtuką.
3. [x] Kategorijos kortelė: Paslaugų sekcijoje, kiekviena paslauga (pvz., “Cleaning”, “Repair”) turėtų būti atvaizduojama kaip atskiras komponentas su ikona ir tekstiniu aprašymu.
4. [x] Stilius: SCSS modules arba Styled-components
5. [ ] Responsive design (optional): Naudoti CSS media queries, kad puslapis tinkamai atrodytų įvairaus dydžio įrenginiuose.
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
