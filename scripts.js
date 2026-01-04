// REFRESH PAGE
window.onresize = () => {
    let MiddleOfPage = document.querySelector('.MiddleOfPage');

    if (screen.width > 412 && MiddleOfPage.className == 'MiddleOfPage login') {
        location.reload();
    }
}


/// CONTROLLER /// /// CONTROLLER ////// CONTROLLER ////// CONTROLLER ////// CONTROLLER ////// CONTROLLER ////// CONTROLLER ////// CONTROLLER ////// CONTROLLER ////// CONTROLLER ////// CONTROLLER ///
function Controller(ControlName, ActionName) {

    const NavigationBarAreaObject  = document.querySelector('.NavigationBarArea');
    const LabelCenterTopObject = document.querySelector('.LabelCenterTop');
    const HamburgerControl = document.querySelector('.Hamburger');
    const MenuLabelObject = document.querySelector('.MenuLabel');
    const PasswInputObject = document.querySelector('.PasswInput');
    const MiddleOfPageObject = document.querySelector('.MiddleOfPage');

    // const DemoLabelBottomObject = document.getElementsByClassName('DemoLabelBottom')[0];
    // const NavigationBarObject = document.getElementsByClassName('NavigationBar')[0];

    const MsgBoxObject = document.getElementById('MsgBox');

    if (ControlName == 'login.html' && ActionName == 'FirstLoad') {
        // ShowMsg(GetTranslationsArrayByCurrentLanguage()['MsgTexts']['AlreadyOnLoginPage'], ColorRed);
        LoadPartToPage('login.html', 'FirstLoad');
        ChangeNavBarElementColorWhenClicked('LoginControl');

    } else if (ControlName == 'bottom.html' && ActionName == 'FirstLoad') {
        // ShowMsg(GetTranslationsArrayByCurrentLanguage()['MsgTexts']['AlreadyOnLoginPage'], ColorRed);
        LoadPartToPage('bottom.html', 'FirstLoad');
        // ChangeNavBarElementColorWhenClicked('LoginControl');



    } else if (ControlName == 'AboutUsControl' && ActionName == 'OpenPage') {
        // ShowMsg(GetTranslationsArrayByCurrentLanguage()['MsgTexts']['ForDevelopment'], ColorRed);
        LoadPartToPage('aboutus.html');
        ChangeNavBarElementColorWhenClicked(ControlName);

    } else if (ControlName == 'LoginControl' && ActionName == 'OpenPage') {
        // ShowMsg(GetTranslationsArrayByCurrentLanguage()['MsgTexts']['AlreadyOnLoginPage'], ColorRed);
        LoadPartToPage('login.html');
        ChangeNavBarElementColorWhenClicked(ControlName);
        
    } else if (ControlName == 'OurTeamControl' && ActionName == 'OpenPage') {
        // ShowMsg(GetTranslationsArrayByCurrentLanguage()['MsgTexts']['AlreadyOnLoginPage'], ColorRed);
        LoadPartToPage('ourteam.html');
        ChangeNavBarElementColorWhenClicked(ControlName);

    } else if (ControlName == 'ContactsControl' && ActionName == 'OpenPage') {
        // ShowMsg(GetTranslationsArrayByCurrentLanguage()['MsgTexts']['AlreadyOnLoginPage'], ColorRed);
        LoadPartToPage('contacts.html');
        ChangeNavBarElementColorWhenClicked(ControlName);
        // alert('W: ' + window.innerWidth + ' /// H: ' + window.innerHeight );
        
    } else if (ControlName == 'ServicesControl' && ActionName == 'OpenPage') {
        // ShowMsg(GetTranslationsArrayByCurrentLanguage()['MsgTexts']['AlreadyOnLoginPage'], ColorRed);
        LoadPartToPage('services.html');
        ChangeNavBarElementColorWhenClicked(ControlName);

    } else if (ControlName != 'LoginControl' && ActionName == 'ShowMsg') {
        ShowMsg(GetTranslationsArrayByCurrentLanguage()['LoginPage']['MsgTexts']['ForDevelopment'], ColorRed);

    } else if (ControlName == 'SubmitButton' && ActionName == 'LoginAction') {
        LoginAction('LoginPage');

    } else if (ControlName == 'PasswInput' && ActionName == 'ShowPass') {
            PasswInputObject.type = 'text';

    } else if (ControlName == 'PasswInput' && ActionName == 'HidePass') {
            PasswInputObject.type = 'password';

    } else if (ControlName == 'login.html' && ActionName == 'GenerateStars') {
        const StarsQty = 200;
        GenerateStars(StarsQty);

    // CLICK ON EN OR RU CONTROLS EVENTS
    } else if (ControlName == 'LT' && ActionName == 'ChangeLanguage') {
        SwitchLanguageLetters(ControlName);
        ChangeNavBarElementColorWhenClicked();
        ChangeLanguageByCurrent();
        MsgBoxObject.style.display = "none";

    } else if (ControlName == 'RU' && ActionName == 'ChangeLanguage')  {
        SwitchLanguageLetters(ControlName);
        ChangeNavBarElementColorWhenClicked();
        ChangeLanguageByCurrent();
        MsgBoxObject.style.display = "none";

    // COPY TEXT    
    } else if (ActionName == 'CopyTxt') {
        ShowMsg(CopyTxt(ControlName), ColorGreen);

    // SHOW TEL
    } else if (ControlName.includes('ShowTelBtn') && ActionName == 'ShowTelNr') {
        // ShowMsg(CopyTxt(ControlName), ColorGreen);
        ShowDataInElement(GetTelNr('a3ff7k9eoS6rtyw4z#eqr7ufsiwkS7sa35eyk8weyn2riu7kera@ti5f2c1hr4psje76'), ControlName);
        
    }

    
    // AFTER CLICK ON HAMBURGER MENU ITEM WE CLOSE HAMBURGER MENU IF IT WAS OPEN
    if ((NavigationBarAreaObject.className == 'NavigationBarArea active')
        // && (ControlName != 'LT' && ControlName != 'RU' && ControlName != 'EN')
        ) {
        NavigationBarAreaObject.classList.remove('active');
        HamburgerControl.classList.remove('active');
        MenuLabelObject.classList.remove('active');
        MiddleOfPageObject.classList.remove('active');
        
    }

    //HAMBURGER OPEN MENU
    if ((ControlName == 'Hamburger' && HamburgerControl.className == 'Hamburger') || (ControlName == 'MenuLabel' && MenuLabelObject.className == 'MenuLabel')) {
        OpenHamburgerMenu();
    } else if ((HamburgerControl.className == 'Hamburger active' || MenuLabelObject.className == 'MenuLabel active') && (ControlName != 'LT' && ControlName != 'RU' && ControlName != 'EN')) {
        HamburgerControl.classList.remove('active');
        MenuLabelObject.classList.remove('active');
        MiddleOfPageObject.classList.remove('active');
        
        // DemoLabelBottomObject.style.filter = 'none';
    }

    if (LabelCenterTopObject != undefined) {
    
        if (LabelCenterTopObject.className == 'LabelCenterTop active') {
            LabelCenterTopObject.classList.remove('active');
        }
    }

    // SHOW HIDE BOTTOM ON SCROLL FOR Services PAGE
    const LabelsBottomRightBoxObject = document.querySelector('.LabelsBottomRightBox');
    const LabelsBottomLeftBoxObject = document.querySelector('.LabelsBottomLeftBox');
    // const MiddleOfPageObject = document.querySelector('.MiddleOfPage');

    // console.log(MiddleOfPageObject ? MiddleOfPageObject.className : 'Nera kolkas');
    

    // if ((ControlName.includes('Services') && ControlName.includes('Control')) || (MiddleOfPageObject ? MiddleOfPageObject.className == 'MiddleOfPage ServicesPage' : null)) {
    if ((ControlName.includes('Services') && ControlName.includes('Control'))) {

        LabelsBottomRightBoxObject.style.display = 'none';
        LabelsBottomLeftBoxObject.style.display = 'none';

        window.addEventListener('scroll', ShowHideBottomPage);
        
    } else if (!ControlName.includes('Services') && ControlName.includes('Control')) {
        
        if (LabelsBottomRightBoxObject && LabelsBottomLeftBoxObject)  {
            
            LabelsBottomRightBoxObject.style.display = 'flex';
            LabelsBottomLeftBoxObject.style.display = 'flex';
        }

        window.removeEventListener('scroll', ShowHideBottomPage);
    }
    
}


function ShowHideBottomPage() {

    const LabelsBottomRightBoxObject = document.querySelector('.LabelsBottomRightBox');
    const LabelsBottomLeftBoxObject = document.querySelector('.LabelsBottomLeftBox');
    
    // Height of the visible window
    const windowHeight = window.innerHeight;
    // How far the user has scrolled from the top
    const scrolledFromTop = window.scrollY;
    // Total height of the entire document
    const totalPageHeight = document.documentElement.scrollHeight;

    // Check if the sum of visible height + scroll distance reaches the total height
    if (windowHeight + scrolledFromTop >= totalPageHeight - 10) {

        LabelsBottomRightBoxObject.style.display = 'flex';
        LabelsBottomLeftBoxObject.style.display = 'flex';
    } else {

        LabelsBottomRightBoxObject.style.display = 'none';
        LabelsBottomLeftBoxObject.style.display = 'none';
    }
}


function AnimateLabelCenterTop() {

    const LabelCenterTop = document.querySelector('.LabelCenterTop');
    if (LabelCenterTop) {
        setTimeout(function() {
            LabelCenterTop.classList.add('hover-simulated');
        }, 300);
        setTimeout(function() { 
            LabelCenterTop.classList.remove('hover-simulated');
        }, 900);
    }
}


// let LoadedMiddlePageName;
function LoadPartToPage(WhatToLoad, Parameters) {
        
    let CurrentdMiddleOfPage = WhatToLoad.replace('.html','');

    // FILE NAME DECODER (DATA IS IN LANGUAGES.JS)
    CurrentdMiddleOfPage = LanguagesFullArray['FileNamesDecoder'][CurrentdMiddleOfPage];
    if (CurrentdMiddleOfPage == undefined) {
        console.log("%cERROR !!! : '" + WhatToLoad.replace('.html','') +
        "' WAS NOT FOUND IN FILES DECODER (in Languages.js file -> in FileNamesDecoder section) !!! ERROR",
        'color: red; font-weight: bold;');
    }

    fetch(WhatToLoad)
        .then(response => response.text())
        .then(data => {

            const MiddleOfPageToReplace = document.querySelector('.MiddleOfPage');

            if (WhatToLoad == 'login.html') {

                if (Parameters == 'FirstLoad') {
                    document.body.insertAdjacentHTML('beforeend', data);
                    // Controller('login.html', 'GenerateStars');

                } else if (Parameters == undefined) {
                    MiddleOfPageToReplace.remove();
                    // document.body.firstElementChild.insertAdjacentHTML('afterend', data);
                    document.getElementById('MsgBox').insertAdjacentHTML('afterend', data);
                    // Controller('login.html', 'GenerateStars');
                }

                Controller('login.html', 'GenerateStars');
                // ChangeNavBarElementColorWhenClicked(ControlName);
                // document.title = "Login to Amiedra";
                AnimateLabelCenterTop();
                document.querySelector('.MiddleOfPage').classList.add(CurrentdMiddleOfPage);

            } else if (WhatToLoad == 'bottom.html' && Parameters == 'FirstLoad') {
                document.body.insertAdjacentHTML('beforeend', data);
                ShowLabelBottomRightCreator();

            } else {
                // const MiddleOfPageToReplace = document.getElementsByClassName('MiddleOfPage')[0];
                // document.body.replaceChild(data, MiddleOfPageToReplace);
                MiddleOfPageToReplace.remove();

                // document.body.firstElementChild.insertAdjacentHTML('afterend', data);
                document.getElementById('MsgBox').insertAdjacentHTML('afterend', data);
                document.querySelector('.MiddleOfPage').classList.add(CurrentdMiddleOfPage);
                // document.querySelector('link[href="style_"' + CurrentdMiddleOfPage + '".css"]').href = "style_" + CurrentdMiddleOfPage + ".css?v=" + Date.now();

                // LoadedMiddlePageName = WhatToLoad;
                // ChangeLanguageByCurrent();
                // AnimateLabelCenterTop();
            }

            if (Parameters != 'FirstLoad') {
                ChangeLanguageByCurrent();
            }
            AnimateLabelCenterTop();

            if (!WhatToLoad.includes('bottom')) {
                document.title = GetPageTitle(WhatToLoad);
            }

            ////////////////////////////////
            // if (CurrentdMiddleOfPage.includes('aboutus')) { ATJUNGIU. JEI NEBEREIKES, TAI GAL IR FUNKCIJA ZEMIAU PANAIKINK
            //     GenerateStarsWithoutInnerHoles(CurrentdMiddleOfPage, '.CenterBottom', 200);
            // }
            ////////////////////////////////

            // if (CurrentdMiddleOfPage.includes('AboutUs')) {

            //     // if (window.innerWidth >= 376) {
            //         // AnimateBlinkWaveAllLetters('.CenterBottomAU');
            //         AnimateBlinkWords('.CenterBottomAU');
            //         // AnimateBlinkOneLetter('.CenterBottom');
            //     // }
            // }

        })
        .catch(error => console.error('Error loading ' + WhatToLoad + ', something is wrong,', error));
}


function GetPageTitle(WhatToLoad) {

    if (WhatToLoad.includes('aboutus')) {
        WhatToLoad = 'About Us';
    } else if (WhatToLoad.includes('ourteam')) {
        WhatToLoad = 'Our Team';
    } else if (WhatToLoad.includes('contacts')) {
        WhatToLoad = 'Contacts';
    } else if (WhatToLoad.includes('login')) {
        WhatToLoad = 'Login';
    } else if (WhatToLoad.includes('services')) {
        WhatToLoad = 'My Applications';
    }

    return 'Amiedra - ' + WhatToLoad;
}


// ANIMATE BLINK ALL LETTERS (NOT USED FOR NOW. USED FOR WORDS ANIMATION INSTEAD TO SAVE CPU LOAD)
function AnimateBlinkWaveAllLetters(OnElement) {

    const ElementForAnimation = document.querySelector(OnElement);
    if (!ElementForAnimation) return;

    const ElementForAnimationText = ElementForAnimation.textContent.trim();
    ElementForAnimation.textContent = '';

    for (let index = 0; index < ElementForAnimationText.length; index++) {
        const Span = document.createElement('span');
        
        Span.textContent = (ElementForAnimationText[index] == ' ' ? '\u00A0' : ElementForAnimationText[index]);
        Span.style.animationDelay = (index * 0.03) + 's';
        ElementForAnimation.appendChild(Span);
        
    }
}


// ANIMATE BLINK WORDS (CURRENTY IN USE)
function AnimateBlinkWords(OnElement) {

    const ElementForAnimation = document.querySelector(OnElement);
    if (!ElementForAnimation) return;

    // let WindowWidth = window.innerWidth;

    let ElementForAnimationText = ElementForAnimation.textContent.trim();
    ElementForAnimationText = ElementForAnimationText.split(' ');
    ElementForAnimation.textContent = '';

    for (let index = 0; index < ElementForAnimationText.length; index++) {
        const Span = document.createElement('span');
        
        Span.textContent = (ElementForAnimationText[index] + '\u00A0');

        // if (WindowWidth >= 376) {
            // Span.style.animationDelay = (index * 0.2) + 's';
        // } else {
            Span.style.animationDelay = (index * 0.1) + 's';
        // }

        ElementForAnimation.appendChild(Span);
        
    }
}


// CURRENTLY SWITCHED OFF (NOT USED)
function AnimateBlinkOneLetter(OnElement) {
    
    const TextElement = document.querySelector(OnElement);
    const OriginalText = TextElement.innerHTML.trim();

    let index = 0;

    setInterval(() => {

        let Result = '';
        let ResultStart = '';
        let ResultEnd = '';
        let AnimationLetter = '';

        for (let i = 0; i < OriginalText.length; i++) {
            if (i == index) {

                ResultStart = OriginalText.substring(0, index);
                ResultEnd = OriginalText.substring(index + 1);

                AnimationLetter = (OriginalText[index] == ' ') ? '\u00A0' : "<span class='bright'>" + OriginalText[index] + "</span>";
            }
        }

        Result = ResultStart + AnimationLetter + ResultEnd;

        TextElement.innerHTML = Result;

        index++;

        if (index >= OriginalText.length) {
            index = 0; // restart
        }

    }, 10);

}


function AnimateElementsAfterPageOrLangChange() {
    let ElementForAnimation = '.CenterBottomAU'; // ABOUT ME (US) PAGE
    let ElementForAnimationByClass = document.querySelector(ElementForAnimation);
    
    if (ElementForAnimationByClass) {
        AnimateBlinkWords(ElementForAnimation);
    }
}


// REFRESH BOTTOM LABEL DATE IF CODE AT THE END IS ACTVATED (OTHERWISE DATE IS NOT DISPLAYED)
function ShowLabelBottomRightCreator() {

    document.querySelector('.LabelBottomRightCreator')
    .innerHTML = "Created by Aidas (amiedra@gmail.com)"; /*+ new Date().getFullYear();*/
}


// STARS GENERATOR
function GenerateStars(StarsQty) {

    const LoginInputObject = document.querySelector(".LoginInput");
    const InputFieldsBoxObject = document.querySelector('.InputFieldsBox');
    const PasswInputObject = document.querySelector(".PasswInput");
    const LoginOuterBoxObject = document.querySelector('.LoginOuterBox');

    const UnitsPx = "px";
    
    for (i = 0; i <= StarsQty; i++) {

        
        let RandX = LoginOuterBoxObject.offsetWidth * Math.random();
        let RandY = LoginOuterBoxObject.offsetHeight * Math.random();

        StarPoints = document.createElement("div");
        StarPoints.className = "StarPoints";
        StarPoints.style.position = "absolute";

        let PointRadius;
        if (window.innerWidth > 500) {
            PointRadius= Math.random() * 3;
        } else {
            PointRadius = Math.random();
        }

        StarPoints.style.height = PointRadius + UnitsPx;
        StarPoints.style.width = PointRadius + UnitsPx;
        StarPoints.style.backgroundColor = "white";

        StarPoints.style.left = RandX + UnitsPx;
        StarPoints.style.top = RandY + UnitsPx;

        if (
        //EXCLUDING LOGIN INPUT FIELD  
        ((RandX < (LoginInputObject.offsetLeft ))
        || (RandY < (LoginInputObject.offsetTop)) 
        || (RandX > (LoginInputObject.offsetLeft + LoginInputObject.offsetWidth))
        || (RandY > (LoginInputObject.offsetTop + LoginInputObject.offsetHeight + InputFieldsBoxObject.offsetTop))
        )
        
        // EXCLUDING PASSW INPUT FIELD
        && ((RandX < (PasswInputObject.offsetLeft ))
        || (RandY < (PasswInputObject.offsetTop)) 
        || (RandX > (PasswInputObject.offsetLeft + PasswInputObject.offsetWidth))
        || (RandY > (PasswInputObject.offsetTop + PasswInputObject.offsetHeight + InputFieldsBoxObject.offsetTop))) 
        )
        {
            LoginOuterBoxObject.appendChild(StarPoints);
        }
    }
}


function GenerateStarsWithoutInnerHoles(MiddleOfPage, OnElement, StarsQty) { //KOLKAS ATJUNGIU (TAIP IR NEAISKU KAIP GAUTA TA SKAICIU 1028)

    const ElementForStars = document.querySelector(OnElement);
    // let ElementForStarsBoxSize = ElementForStars.getBoundingClientRect();
    // console.log(ElementForStarsBoxSize);
    console.log('ElementForStars.offsetLeft: ' + ElementForStars.offsetLeft + ' /// ElementForStars.offsetCW: ' + ElementForStars.clientWidth);
    console.log(getComputedStyle(ElementForStars));
    
    const UnitsPx = "px";
    
    for (i = 0; i <= StarsQty; i++) {

        
        
        let RandX = ElementForStars.offsetWidth * Math.random();
        let RandY = ElementForStars.offsetHeight * Math.random();

        StarPoints = document.createElement("div");
        StarPoints.className = "StarPoints";
        StarPoints.style.position = "absolute";

        let PointRadius;
        if (window.innerWidth > 500) {
            PointRadius= Math.random() * 3;
        } else {
            PointRadius = Math.random();
        }

        StarPoints.style.height = PointRadius + UnitsPx;
        StarPoints.style.width = PointRadius + UnitsPx;
        StarPoints.style.backgroundColor = "white";

        StarPoints.style.left = RandX + UnitsPx;
        StarPoints.style.top = RandY + UnitsPx;

        // console.log('ElementForStars: ' + ElementForStars.className +' /// offsetLeft: ' + ElementForStars.offsetLeft + ' // offsetWidth: ' + ElementForStars.innerWidth);
        
        if 
        ((RandX > ElementForStars.offsetLeft) && (RandX < (1028))
        // &&
        // ((RandY > ElementForStars.offsetTop) && (RandY < (170)))
        )
            {
            ElementForStars.appendChild(StarPoints);
        }
    }
    
} 


//HAMBURGER ON CLICK
function OpenHamburgerMenu() {

    const HamburgerControl = document.querySelector('.Hamburger');
    const NavigationBarAreaObject  = document.querySelector('.NavigationBarArea');
    const LabelCenterTopObject = document.querySelector('.LabelCenterTop');
    const MenuLabelObject = document.querySelector('.MenuLabel');
    const MiddleOfPageObject = document.querySelector('.MiddleOfPage');

    // const DemoLabelBottomObject = document.getElementsByClassName('DemoLabelBottom')[0];

    HamburgerControl.classList.toggle('active');
    NavigationBarAreaObject.classList.toggle('active');
    LabelCenterTopObject.classList.toggle('active');
    MiddleOfPageObject.classList.toggle('active');

    MenuLabelObject.classList.toggle('active');
    // DemoLabelBottomObject.style.filter = 'blur(3px)';
}


function ChangeNavBarElementColorWhenClicked(ControlName) {
    let ClickedElementTempStyle;
    let ActiveNavBarControlName;
    const AdditionalDivForGlowEffect = "<div class='glow'>";
  
    if (!ControlName) {
        ActiveNavBarControlName = GetCurrentMiddleOfPage().replace('Page', 'Control').trim();
        ClickedElement = document.getElementsByClassName(ActiveNavBarControlName)[0];
    } else {

        ClickedElement = document.getElementsByClassName(ControlName)[0];
    }

    if (ClickedElement.style.color != "rgba(117, 117, 182, 0.6)") {
        ClickedElementTempStyle = ClickedElement.style.cssText;

        const NavigationBarLinksBoxChilds = document.getElementsByClassName('NavigationBarLinksBox')[0].children;
        // let ActiveNavBarControlName = GetCurrentMiddleOfPage().replace('Page', 'Control').trim();
        for (let index = 0; index < NavigationBarLinksBoxChilds.length; index++) {

            let OneOfOtherElements = NavigationBarLinksBoxChilds[index];

            // console.log(ClickedElement.className, OneOfOtherElements.className);
            if (ClickedElement.className != OneOfOtherElements.className) {
                if ((OneOfOtherElements.children[0])) {
                    OneOfOtherElements.style = ClickedElementTempStyle;
                    // document.getElementsByClassName(OneOfOtherElements)[0].children[0].classList.add('glow');
                    // OneOfOtherElements.children[0].classList.add('glow');
                   
                    OneOfOtherElements.children[0].classList.add('glow');
                } else {
  
                    OneOfOtherElements.style = ClickedElement.style;
                    OneOfOtherElements.innerHTML += AdditionalDivForGlowEffect; // THAT IS BECAUSE PRIEVIUOS ACTIVE ELEMENT DOES NOT HAVE CHILD. IT WAS REMOVED ON PREVIOUS CLICK
                }
            }
        }

        ClickedElement.style.color = "rgba(117, 117, 182, 0.6)";
        ClickedElement.children[0].classList.remove('glow');
    }
}


function SwitchLanguageLetters(ControlName) {

    const PressedLanguageLetters = document.getElementsByClassName(ControlName)[0];
    
    if (PressedLanguageLetters.innerHTML != 'EN') {
        PressedLanguageLetters.innerHTML = 'EN';
    } else {
        PressedLanguageLetters.innerHTML = ControlName;
    }

    document.getElementsByClassName(ControlName == 'LT' ? 'RU' : 'LT')[0].innerHTML = (ControlName == 'LT' ? 'RU' : 'LT');
}


function GetCurrentMiddleOfPage() {

    // console.log(document.querySelector('.MiddleOfPage').className);
    
    let CurrentMiddleOfPage = document.querySelector('.MiddleOfPage').className;

    if (!CurrentMiddleOfPage) {return}

    MiddleOfPage = CurrentMiddleOfPage
    .replace('MiddleOfPage ', '')
    .replace('active', '').trim();

    return MiddleOfPage;
    
}


// LANGUAGE CHANGE BY CURRENT LANGUAGE
function ChangeLanguageByCurrent() {

    // let MiddleOfPage = 'LoginPage';
    // let MiddleOfPage = GetCurrentMiddleOfPage();
    // let ObjectForLanguageChange;

    // TRANLSATING NAVBAR
    ChangeLanguageByCurrentForNavBar();

    // TRANLSATING TITLES
    TranslateTitles();

    // TRANLSATING PLACEHOLDERS
    TranslatePlaceHolders();

    // TRANLSATING (SWITCHNG) FONTS
    SwitchFontByLanguage();

    // TRANLSATING TEXTS
    TranslateTexts();

    // TRANSLATING DemoLabelBottom
    TranslateDemoLabelBottom();

    // ANIMATE CENTER TOP LABEL
    AnimateLabelCenterTop();
    AnimateElementsAfterPageOrLangChange();
    
}


// TRANLSATING NAVBAR
function ChangeLanguageByCurrentForNavBar() {

    let ObjectForLanguageChange;
    const AdditionalDivForGlowEffect = "<div class='glow'>";
    
    let ElementsPropertyToChange = 'NavBarControls';
    let TitlesArrayByCurrentLanguage = GetTranslationsArrayByCurrentLanguage()['AllPages'][ElementsPropertyToChange];

    if (TitlesArrayByCurrentLanguage) {
        for (const [key, value] of Object.entries(TitlesArrayByCurrentLanguage)) {

            ObjectForLanguageChange = document.getElementsByClassName(key)[0];

            if (ObjectForLanguageChange.parentElement.className == 'NavigationBarLinksBox') {
                // ObjectForLanguageChange.innerHTML = value + AdditionalDivForGlowEffect;
                
                if (ObjectForLanguageChange.className != (GetCurrentMiddleOfPage().replace('Page', 'Control'))) {
                    ObjectForLanguageChange.innerHTML = value + AdditionalDivForGlowEffect;
                } else {
                    ObjectForLanguageChange.innerHTML = value;
                }

            } else {
                ObjectForLanguageChange.innerHTML = value;
            }
        }
    }
}


// TRANLSATING TITLES
function TranslateTitles() {

    ElementsPropertyToChange = 'Titles';
    TitlesArrayByCurrentLanguage = GetTranslationsArrayByCurrentLanguage()[MiddleOfPage][ElementsPropertyToChange];
    // console.log(TitlesArrayByCurrentLanguage);
    
    if (TitlesArrayByCurrentLanguage) {

        for (const [key, value] of Object.entries(TitlesArrayByCurrentLanguage)) {

            if (!key.toLocaleLowerCase().includes('logedin')) { // skipping the line in Languages.js "SubmitButtonLogedIn" : "Prisijungta"

                if (!isNaN(key.charAt(0))) { // IF KEY IN LANGUAGES STARTS WITH A NUMBER, THEN NUMBER MEANS NTH ELEMENT NUMBER ON HTML

                    ObjectForLanguageChange = document.getElementsByClassName(key.substring(2))[0];
                    ObjectForLanguageChange.children[key.charAt(0)].innerHTML = value;

                } else {
                    ObjectForLanguageChange = document.getElementsByClassName(key)[0];
                    ObjectForLanguageChange.innerHTML = value;

                }
                    // ObjectForLanguageChange = document.getElementsByClassName(key)[0];

                    // // if (ObjectForLanguageChange.parentElement.className == 'NavigationBarLinksBox') {
                    //     // ObjectForLanguageChange.innerHTML = value + AdditionalDivForGlowEffect;

                    // // } else {
                    //     ObjectForLanguageChange.innerHTML = value;
                    // // }
                // }
            }
        }
    }
}


// TRANLSATING PLACEHOLDERS
function TranslatePlaceHolders() {

    ElementsPropertyToChange = 'PlaceHolders';
    TitlesArrayByCurrentLanguage = GetTranslationsArrayByCurrentLanguage()[MiddleOfPage][ElementsPropertyToChange];

    
    if (TitlesArrayByCurrentLanguage) {
        for (const [key, value] of Object.entries(TitlesArrayByCurrentLanguage)) {

            ObjectForLanguageChange = document.getElementsByClassName(key)[0];
            ObjectForLanguageChange.placeholder = value;
            
        }
    }
}


// TRANLSATING (SWITCHNG) FONTS
function SwitchFontByLanguage() {
    ElementsPropertyToChange = 'Fonts';
    TitlesArrayByCurrentLanguage = GetTranslationsArrayByCurrentLanguage()['AllPages'][ElementsPropertyToChange];

    if (TitlesArrayByCurrentLanguage) {
        for (const [key, value] of Object.entries(TitlesArrayByCurrentLanguage)) {

            ObjectForLanguageChange = document.getElementsByClassName(key)[0];
            // ObjectForLanguageChange = document.querySelector(key)[0];
            ObjectForLanguageChange.style.fontFamily = value;

        }
    }
}


// TRANLSATING TEXTS
function TranslateTexts() {
    ElementsPropertyToChange = 'Texts';
    TitlesArrayByCurrentLanguage = GetTranslationsArrayByCurrentLanguage()[MiddleOfPage][ElementsPropertyToChange];
     
    if (TitlesArrayByCurrentLanguage) {

        for (const [key, value] of Object.entries(TitlesArrayByCurrentLanguage)) {

            // INFO: IF KEY STARTS WITH A NUMBER AND SPACE, THEN NUMBER MEANS NTH ELEMENT NUMBER ON WHOLE HTML. NUMBER (AND 1 SPACE AFTER) ARE NOT DISPAYED.
            // INFO: IF KEY STARTS WITH A NUMBER AND -, THEN NUMBER MEANS NTH CHILD ELEMENT NUMBER ON HTML ELEMENT. NUMBER (AND 1 SPACE AFTER) ARE NOT DISPAYED.

            if (!isNaN(key.charAt(0))) {

                if (key.charAt(1) == '-') {
                    ObjectForLanguageChange = document.getElementsByClassName(key.substring(2))[0];
                    ObjectForLanguageChange.children[key.charAt(0)].innerHTML = value;

                } else if (key.charAt(1) == ' ') {

                    ObjectForLanguageChange = document.getElementsByClassName(key.substring(2))[key.charAt(0)]
                    if (ObjectForLanguageChange) {
                        ObjectForLanguageChange.innerHTML = value;
                    }
                }
                    
            } else {
                    ObjectForLanguageChange = document.getElementsByClassName(key)[0];
                    ObjectForLanguageChange.innerHTML = value;

            }

            // if (!isNaN(value.charAt(0))) { // IF VALUE IN LANGUAGES STARTS WITH A NUMBER, THEN NUMBER MEANS NTH ELEMENT NUMBER ON HTML

            //     ObjectForLanguageChange = document.getElementsByClassName(key)[0];
            //     ObjectForLanguageChange.children[value.charAt(0)].innerHTML = value.substring(2);
                
            // } else {
            //     ObjectForLanguageChange.innerHTML = value;
            // }
            
        }
    }
}


// TRANSLATING DemoLabelBottom
function TranslateDemoLabelBottom() {
    ElementsPropertyToChange = 'DemoLabelBottom';
    TitlesArrayByCurrentLanguage = GetTranslationsArrayByCurrentLanguage()['AllPages'];
    
    if (!TitlesArrayByCurrentLanguage) {
        console.log("%cERROR !!! : 'AllPages' SECTION FOR THIS LANGUAGE WAS NOT FOUND IN FILES DECODER (in Languages.js file) !!! ERROR",
        'color: red; font-weight: bold;');
        return;
    } else {
        ObjectForLanguageChange = document.querySelector('.' + ElementsPropertyToChange);
        ObjectForLanguageChange.innerHTML = TitlesArrayByCurrentLanguage[ElementsPropertyToChange];
    }
}


function GetTranslationsArrayByCurrentLanguage() {

    const LTMenuControl = document.getElementsByClassName('LT')[0];
    const RUMenuControl = document.getElementsByClassName('RU')[0];

    if (LTMenuControl.innerHTML == "EN") {
        // LT');
        return LanguagesFullArray['StringsForLanguageChangeToLT'];

    } else if (RUMenuControl.innerHTML == "EN") {
        // RU');
        return LanguagesFullArray['StringsForLanguageChangeToRU'];

    } else {
        // EN');
        return LanguagesFullArray['StringsForLanguageChangeToEN'];
        
    }
}


function GetCurrentLanguageShort() {

    const LTMenuControl = document.getElementsByClassName('LT')[0];
    const RUMenuControl = document.getElementsByClassName('RU')[0];

    if (LTMenuControl.innerHTML == "EN") {
        return 'LT';

    } else if (RUMenuControl.innerHTML == "EN") {
        return 'RU';

    } else {
        return 'EN';
    }
}


//LOGIN BUTTONS ACTIONS
function LoginAction(CurrentPage) 
{ 
    let MsgTemp;
    const BtnSubmitObject = document.getElementsByClassName("SubmitButton")[0];

    let MiddleOfPage = CurrentPage;

    if (AreLoginAndPassAccepted() == "yes") {

        MsgTemp = GetTranslationsArrayByCurrentLanguage()[MiddleOfPage]['Titles']['SubmitButtonLogedIn'];
        ShowMsg(MsgTemp, ColorGreen);
        BtnSubmitObject.innerHTML = MsgTemp;

    } else if (AreLoginAndPassAccepted() == "no") {
        MsgTemp = GetTranslationsArrayByCurrentLanguage()[MiddleOfPage]['MsgTexts']['LoginOrPassTooShort'];
        ShowMsg(MsgTemp, ColorRed);
        BtnSubmitObject.innerHTML = GetTranslationsArrayByCurrentLanguage()[MiddleOfPage]['Titles']['SubmitButton'];

    } else {    

        MsgTemp = GetTranslationsArrayByCurrentLanguage()[MiddleOfPage]['MsgTexts']['EnterLoginAndPass'];
        ShowMsg(MsgTemp, ColorRed);
        BtnSubmitObject.innerHTML = GetTranslationsArrayByCurrentLanguage()[MiddleOfPage]['Titles']['SubmitButton'];
    }
}


function AreLoginAndPassAccepted() {

    const LoginInputObject = document.getElementsByClassName("LoginInput")[0];
    const PasswInputObject = document.getElementsByClassName("PasswInput")[0];

    if (LoginInputObject.value != "" && PasswInputObject.value != "") {

        if (LoginInputObject.value.length < 5 || PasswInputObject.value.length < 5) {
            return "no";
        } else {
            return "yes";
        }
    } else {    
        return;
    }
}


function IsNumberOdd(n) {
    return (n & 1 == 1);
}


function ShowMsg(Msg, MsgColor) {

    const MsgBoxObject = document.getElementById('MsgBox');

    // const MsgBoxObject = document.getElementById("MsgBox");
    
    // if (LTMenuControl.innerHTML == "EN") {
    //     // MsgTextArray = MsgTextArrayLT;
    //     MsgTextArray = StringsForLanguageChangeToLT['MsgTexts'];
    // } else if (RUMenuControl.innerHTML == "EN") {
    //     MsgTextArray = MsgTextArrayRU;
    // } else {
    //     MsgTextArray = MsgTextArrayEN;
    // }

    // MsgBoxObject.innerHTML = MsgTextArray[Msg];
    MsgBoxObject.innerHTML = Msg;
    MsgBoxObject.style.display = 'block';

    if (MsgColor) {
        MsgBoxObject.style.color  = MsgColor['FontColor'];
        MsgBoxObject.style.backgroundColor = MsgColor['BackColor'];
    }
    MsgBoxObject.setAttribute("class", "FadeAway");

    setTimeout(function() {
        MsgBoxObject.style.display = 'none';
        MsgBoxObject.removeAttribute("class", "FadeAway");
    }, 5100)
}


function GetTelNr(TelNr) {

    let TelNrDec = '';
    let index = 0;
    TelNr = TelNr.replace('o', '0');

    while (index < TelNr.length) {

        if (TelNr[index] == 'a') {
            TelNrDec = TelNrDec + '+';
        } else if (TelNr[index] == 'S') {
            TelNrDec = TelNrDec + ' ';
        } else {
            TelNrDec = TelNrDec + TelNr[index];
        }
        
        index++;

        if (index == 2 ) {index = 4 }
        if (index == 5 ) {index = 8 }
        if (index == 11) {index = 15}
        if (index == 16) {index = 21}
        if (index == 22) {index = 28}
        if (index == 30) {index = 37}
        if (index == 38) {index = 46}
        if (index == 47) {index = 56}
        if (index == 57) {index = 67}
        
    }
    
    return TelNrDec;

}   


function ShowDataInElement(DataToShow, ShowInClassElement) {

    let ShowInElement; 

    if (!ShowInClassElement.includes('active')) {
        
        ShowInElement = document.querySelector('.' + ShowInClassElement);
        ShowInElement.classList.toggle('active');
        ShowInElement.innerHTML = DataToShow;

    } else {
        
        ShowInClassElement = ShowInClassElement.replace('active', '');
        ShowInElement = document.querySelector('.' + ShowInClassElement);
        ShowInElement.classList.remove('active');

        if (GetCurrentLanguageShort() == 'EN') {
            ShowInElement.innerHTML = 'Show';
        } else if (GetCurrentLanguageShort() == 'LT') {
            ShowInElement.innerHTML = 'Rodyti';
        } else {
            ShowInElement.innerHTML = 'Показать';
        }
    }

}


function CopyTxt(CopyFromElement) {

    let text = '';
    let ElementSequenceNr;
    let StringPositionNr;

    // IF WE HAVE FOR EXAMPLE A CLASS AND WE WANT TO TAKE NTH ELEMENT BY IT THEN WE CAN PROVIDE NTH SEQUENCE NUMBER AFTER '&&&'
    if (CopyFromElement.includes('&&&')) {
        StringPositionNr = CopyFromElement.indexOf('&&&');
        ElementSequenceNr = CopyFromElement.substring(StringPositionNr);
        ElementSequenceNr = ElementSequenceNr.replace('&&&','');
        // console.log(ElementSequenceNr);
        
        CopyFromElement = CopyFromElement.replace(('&&&' + ElementSequenceNr), '');
    }

    if (ElementSequenceNr) {
        text = document.querySelectorAll('.' + CopyFromElement)[ElementSequenceNr].innerText;
    } else {
        text = document.querySelectorAll('.' + CopyFromElement).innerText;
    }
    text = text.replace('Copy', '').trim();
    navigator.clipboard.writeText(text);

    return ("'" + text + "' copied to clipboard");

}


//MESSAGE COLORS
const ColorGreen = {
    FontColor : 'rgb(176, 255, 248)',
    BackColor : 'rgba(77, 109, 144, 0.41)'
}

const ColorRed = {
    FontColor : 'rgb(235, 150, 231)',
    BackColor : 'rgba(250, 134, 196, 0.2)'
}