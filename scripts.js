
// REFRESH PAGE
window.onresize = () => {
    if (screen.width > 412) {
        location.reload();
    }
}

// window.onload = () => {
//     // console.log(LoadedMiddlePageName);
    
//     if (LoadedMiddlePageName == 'login.html') {
//         const LabelCenterTop = document.getElementsByClassName('LabelCenterTop')[0];
//         if (LabelCenterTop != undefined) {
//             setTimeout(function() {
//                 // const LabelCenterTop = document.getElementsByClassName('LabelCenterTop')[0];
//                 LabelCenterTop.classList.add('hover-simulated');
//             }, 300);
//             setTimeout(function() { 
//                 // const LabelCenterTop = document.getElementsByClassName('LabelCenterTop')[0];
//                 LabelCenterTop.classList.remove('hover-simulated');
//             }, 900);
//         }
//     }
// }

function AnimateLabelCenterTop() {
// const LabelCenterTop = document.getElementsByClassName('LabelCenterTop')[0];
const LabelCenterTop = document.querySelector('.LabelCenterTop');
            setTimeout(function() {
                LabelCenterTop.classList.add('hover-simulated');
            }, 300);
            setTimeout(function() { 
                LabelCenterTop.classList.remove('hover-simulated');
            }, 900);
}

// let LoadedMiddlePageName;
function LoadPartToPage(WhatToLoad, Parameters) {
        
    let CurrentdMiddleOfPage = WhatToLoad.replace('.html','');

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
                AnimateLabelCenterTop();
            }

            if (!WhatToLoad.includes('bottom')) {
                document.title = GetPageTitle(WhatToLoad);
            }

            ////////////////////////////////
            // if (CurrentdMiddleOfPage.includes('aboutus')) { ATJUNGIU. JEI NEBEREIKES, TAI GAL IR FUNKCIJA ZEMIAU PANAIKINK
            //     GenerateStarsWithoutInnerHoles(CurrentdMiddleOfPage, '.CenterBottom', 200);
            // }
            ////////////////////////////////

            if (CurrentdMiddleOfPage.includes('aboutus')) {
                AnimateBlinkWaveLetters('.CenterBottom');
                // AnimateBlinkLetter('.CenterBottom');
            }

        })
        .catch(error => console.error('Error loading ' + WhatToLoad + ', something is wrong, GREICIAUISIAI REIKIA LEISTI PER SERVERI:', error));
}


/// CONTROLLER /// /// CONTROLLER ////// CONTROLLER ////// CONTROLLER ////// CONTROLLER ////// CONTROLLER ////// CONTROLLER ////// CONTROLLER ////// CONTROLLER ////// CONTROLLER ////// CONTROLLER ///
function Controller(ControlName, ActionName) {

    const NavigationBarAreaObject  = document.querySelector('.NavigationBarArea');
    const LabelCenterTopObject = document.querySelector('.LabelCenterTop');
    const HamburgerControl = document.querySelector('.Hamburger');
    const MenuLabelObject = document.querySelector('.MenuLabel');
    const PasswInputObject = document.querySelector('.PasswInput');

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

    } else if (ControlName != 'LoginControl' && ActionName == 'ShowMsg') {
        ShowMsg(GetTranslationsArrayByCurrentLanguage()['LoginPage']['MsgTexts']['ForDevelopment'], ColorRed);

    } else if (ControlName == 'SubmitButton' && ActionName == 'LoginAction') {
        LoginAction();

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
        ChangeLanguageByCurrent();
        MsgBoxObject.style.display = "none";

    } else if (ControlName == 'RU' && ActionName == 'ChangeLanguage')  {

        SwitchLanguageLetters(ControlName);
        ChangeLanguageByCurrent();
        MsgBoxObject.style.display = "none";
    }

    
    // AFTER CLICK ON HAMBURGER MENU ITEM WE CLOSE HAMBURGER MENU IF IT WAS OPEN
    if ((NavigationBarAreaObject.className == 'NavigationBarArea active') && (ControlName != 'LT' && ControlName != 'RU' && ControlName != 'EN')) {
        NavigationBarAreaObject.classList.remove('active');
    }

   if (LabelCenterTopObject != undefined) {
    
        if (LabelCenterTopObject.className == 'LabelCenterTop active') {
            LabelCenterTopObject.classList.remove('active');
        }
    }

    //HAMBURGER OPEN MENU
    if ((ControlName == 'Hamburger' && HamburgerControl.className == 'Hamburger') || (ControlName == 'MenuLabel' && MenuLabelObject.className == 'MenuLabel')) {
        OpenHamburgerMenu();
    } else if ((HamburgerControl.className == 'Hamburger active' || MenuLabelObject.className == 'MenuLabel active') && (ControlName != 'LT' && ControlName != 'RU' && ControlName != 'EN')) {
        HamburgerControl.classList.remove('active');
        MenuLabelObject.classList.remove('active');
        // DemoLabelBottomObject.style.filter = 'none';
    }
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
    }

    return 'Amiedra - ' + WhatToLoad;
}


function AnimateBlinkWaveLetters(OnElement) {

    const ElementForAnimation = document.querySelector(OnElement);
    if (!ElementForAnimation) return;

    const ElementForAnimationText = ElementForAnimation.innerHTML.trim();
    ElementForAnimation.innerHTML = '';

    for (let index = 0; index < ElementForAnimationText.length; index++) {
        const Span = document.createElement('span');

        Span.innerHTML = (ElementForAnimationText[index] == ' ' ? '\u00A0' : ElementForAnimationText[index]);
        Span.style.animationDelay = (index * 0.03) + 's';
        ElementForAnimation.appendChild(Span);
    }
}


function AnimateBlinkLetter(OnElement) {
    
    const TextElement = document.querySelector(OnElement);
    const OriginalText = TextElement.innerHTML.trim();

    let index = 0;

    setInterval(() => {

        let Result = '';

    for (let i = 0; i < OriginalText.length; i++) {
        if (i === index) {
            Result = Result + "<span class='bright'>" + (OriginalText[i] == ' ' ? '\u00A0' : OriginalText[i]) + "</span>";
        } else {
            Result = Result + (OriginalText[i] == ' ' ? '\u00A0' : OriginalText[i]);
        }
    }

    TextElement.innerHTML = Result;

    index++;

    if (index >= OriginalText.length) {
        index = 0; // restart
    }

    }, 10);

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
        || (RandY > (PasswInputObject.offsetTop + PasswInputObject.offsetHeight + PasswInputObject.offsetTop))) 
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

    // const DemoLabelBottomObject = document.getElementsByClassName('DemoLabelBottom')[0];

    HamburgerControl.classList.toggle('active');
    NavigationBarAreaObject.classList.toggle('active');
    LabelCenterTopObject.classList.toggle('active');

    MenuLabelObject.classList.toggle('active');
    // DemoLabelBottomObject.style.filter = 'blur(3px)';
}


let ClickedElementTempStyle;
function ChangeNavBarElementColorWhenClicked(ControlName) {

    ClickedElement = document.getElementsByClassName(ControlName)[0];
    
    if (ClickedElement.style.color != "rgba(117, 117, 182, 0.6)") {
        ClickedElementTempStyle = ClickedElement.style.cssText;

        const NavigationBarLinksBoxChilds = document.getElementsByClassName('NavigationBarLinksBox')[0].children;
        for (let index = 0; index < NavigationBarLinksBoxChilds.length; index++) {

            let OneOfOtherElementsClassName = NavigationBarLinksBoxChilds[index].className;
            document.getElementsByClassName(OneOfOtherElementsClassName)[0].style.cssText = ClickedElementTempStyle;
            document.getElementsByClassName(OneOfOtherElementsClassName)[0].children[0].classList.add('glow');
        }

        // ClickedElement.style = "color: rgba(117, 117, 182, 0.6);"
        ClickedElement.style.color = "rgba(117, 117, 182, 0.6)"
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


// LANGUAGE CHANGE BY CURRENT LANGUAGE
function ChangeLanguageByCurrent() {

    let MiddleOfPage = 'LoginPage';
    
    let ObjectForLanguageChange;
    const AdditionalDivForGlowEffect = "<div class='glow'>";

    // TRANLSATING TITLES
    let ElementsPropertyToChange = 'Titles';
    let TitlesArrayByCurrentLanguage = GetTranslationsArrayByCurrentLanguage()[MiddleOfPage][ElementsPropertyToChange];

    for (const [key, value] of Object.entries(TitlesArrayByCurrentLanguage)) {

        if (!key.toLocaleLowerCase().includes('logedin')) { // skipping the line in Languages.js "SubmitButtonLogedIn" : "Prisijungta"
            
            ObjectForLanguageChange = document.getElementsByClassName(key)[0];

            if (ObjectForLanguageChange.parentElement.className == 'NavigationBarLinksBox') {
                ObjectForLanguageChange.innerHTML = value + AdditionalDivForGlowEffect;

            } else {
                ObjectForLanguageChange.innerHTML = value;
            }
        }
    }

    // TRANLSATING PLACEHOLDERS
    ElementsPropertyToChange = 'PlaceHolders';
    TitlesArrayByCurrentLanguage = GetTranslationsArrayByCurrentLanguage()[MiddleOfPage][ElementsPropertyToChange];

    for (const [key, value] of Object.entries(TitlesArrayByCurrentLanguage)) {

        ObjectForLanguageChange = document.getElementsByClassName(key)[0];
        ObjectForLanguageChange.placeholder = value;
        
    }
        
    // TRANLSATING (SWITCHNG) FONTS
    ElementsPropertyToChange = 'Fonts';
    TitlesArrayByCurrentLanguage = GetTranslationsArrayByCurrentLanguage()[MiddleOfPage][ElementsPropertyToChange];

    for (const [key, value] of Object.entries(TitlesArrayByCurrentLanguage)) {

        ObjectForLanguageChange = document.getElementsByClassName(key)[0];
        ObjectForLanguageChange.style.fontFamily = value;

    }

    AnimateLabelCenterTop();
    
}


function GetTranslationsArrayByCurrentLanguage() {

    const LTMenuControl = document.getElementsByClassName('LT')[0];
    const RUMenuControl = document.getElementsByClassName('RU')[0];

    // console.log(LTMenuControl.innerHTML);
    // console.log(RUMenuControl.innerHTML);
    

    if (LTMenuControl.innerHTML == "EN") {
        // return ReadFromJson('StringsForLanguageChangeToLT');
        return LanguagesFullArray['StringsForLanguageChangeToLT'];

    } else if (RUMenuControl.innerHTML == "EN") {
        // return ReadFromJson('StringsForLanguageChangeToRU');
        return LanguagesFullArray['StringsForLanguageChangeToRU'];

    } else {
        // return ReadFromJson('StringsForLanguageChangeToEN');
        return LanguagesFullArray['StringsForLanguageChangeToEN'];
        
    }
}


//LOGIN BUTTONS ACTIONS
function LoginAction() 
{ 
    let MsgTemp;
    const BtnSubmitObject = document.getElementsByClassName("SubmitButton")[0];

    let MiddleOfPage = 'LoginPage';

    if (AreLoginAndPassAccepted() == "yes") {

        MsgTemp = GetTranslationsArrayByCurrentLanguage()['MiddleOfPage']['Titles']['SubmitButtonLogedIn'];
        ShowMsg(MsgTemp, ColorGreen);
        BtnSubmitObject.innerHTML = MsgTemp;

    } else if (AreLoginAndPassAccepted() == "no") {
        MsgTemp = GetTranslationsArrayByCurrentLanguage()['MiddleOfPage']['MsgTexts']['LoginOrPassTooShort'];
        ShowMsg(MsgTemp, ColorRed);
        BtnSubmitObject.innerHTML = GetTranslationsArrayByCurrentLanguage()['MiddleOfPage']['Titles']['SubmitButton'];

    } else {    

        MsgTemp = GetTranslationsArrayByCurrentLanguage()['MiddleOfPage']['MsgTexts']['EnterLoginAndPass'];
        ShowMsg(MsgTemp, ColorRed);
        BtnSubmitObject.innerHTML = GetTranslationsArrayByCurrentLanguage()['MiddleOfPage']['Titles']['SubmitButton'];
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


//MESSAGE COLORS
const ColorGreen = {
    FontColor : 'rgb(176, 255, 248)',
    BackColor : 'rgba(77, 109, 144, 0.41)'
}

const ColorRed = {
    FontColor : 'rgb(235, 150, 231)',
    BackColor : 'rgba(250, 134, 196, 0.2)'
}