/* ======================= Menu Switch Elements (meals salads drinks) ======================= */




const MealsBtn = document.getElementById("test1");
const SaladsBtn = document.getElementById("test2");
const DrinksBtn = document.getElementById("test3");

const Meals = document.getElementById("MealItemsDisplay");
const Salads = document.getElementById("SaladItemsDisplay");
const Drinks = document.getElementById("DrinkItemsDisplay");

const MealPic = document.getElementById("mealpic");
const SaladPic = document.getElementById("saladpic");
const DrinkPic = document.getElementById("drinkpic");

const maxWidth = 630;
const minusWidth = 513;

MealsBtn.addEventListener("change", function(){
    const WindowWidth = window.innerWidth;

    if(MealsBtn.checked){
        Meals.style.left = "0px";
        MealPic.style.transform = "scale(1.2)";
        MealPic.style.border = "2px solid #959B82";
        MealPic.style.padding = "4px";
        
        
        Salads.style.left = "100%";
        Drinks.style.left = "200%";
        SaladPic.style.transform = "scale(1.0)";
        DrinkPic.style.transform = "scale(1.0)";
        SaladPic.style.border = "none";
        SaladPic.style.padding = "0px";
        DrinkPic.style.border = "none";
        DrinkPic.style.padding = "0px";
    }
    if(MealsBtn.checked && WindowWidth < maxWidth){
        MealPic.style.padding = "0px";
        MealPic.style.transform = "scale(0.9)";
    }
    if(MealsBtn.checked && WindowWidth < minusWidth){
        MealPic.style.padding = "-3px";
    }
})
SaladsBtn.addEventListener("change", function(){
    const WindowWidth = window.innerWidth;

    if(SaladsBtn.checked){
        Salads.style.left = "0px";
        SaladPic.style.transform = "scale(1.2)";
        SaladPic.style.border = "2px solid #959B82";
        SaladPic.style.padding = "4px";
        

        Meals.style.left = "-100%";
        Drinks.style.left = "100%";
        MealPic.style.transform = "scale(1.0)";
        DrinkPic.style.transform = "scale(1.0)";
        MealPic.style.border = "none";
        MealPic.style.padding = "0px";
        DrinkPic.style.border = "none";
        DrinkPic.style.padding = "0px";
    }
    if(SaladsBtn.checked && WindowWidth < maxWidth){
        SaladPic.style.padding = "0px";
        SaladPic.style.transform = "scale(0.9)";
    }
    if(SaladsBtn.checked && WindowWidth < minusWidth){
        SaladPic.style.padding = "-3px";
    }
})
DrinksBtn.addEventListener("change", function(){
    const WindowWidth = window.innerWidth;

    if(DrinksBtn.checked){
        Drinks.style.left = "0px";
        DrinkPic.style.transform = "scale(1.2)";
        DrinkPic.style.border = "2px solid #959B82";
        DrinkPic.style.padding = "4px";
        
        
        Meals.style.left = "-200%";
        Salads.style.left = "-100%";
        MealPic.style.transform = "scale(1.0)";
        SaladPic.style.transform = "scale(1.0)";
        MealPic.style.border = "none";
        MealPic.style.padding = "0px";
        SaladPic.style.border = "none";
        SaladPic.style.padding = "0px";
    }
    if(DrinksBtn.checked && WindowWidth < maxWidth){
        DrinkPic.style.padding = "0px";
        DrinkPic.style.transform = "scale(0.9)";
    }
    if(DrinksBtn.checked && WindowWidth < minusWidth){
        DrinkPic.style.padding = "-5px";
    }
})



const Dish1Btn = document.getElementById("discountBtn1");
const Dish2Btn = document.getElementById("discountBtn2");
const Dish3Btn = document.getElementById("discountBtn3");

function ShowBtn1(element){
    Dish1Btn.style.bottom = "0px";
}

function HideBtn1(element){
    Dish1Btn.style.bottom = "-20%";
}


function ShowBtn2(element){
    Dish2Btn.style.bottom = "0px";
}

function HideBtn2(element){
    Dish2Btn.style.bottom = "-20%";
}


function ShowBtn3(element){
    Dish3Btn.style.bottom = "0px";
}

function HideBtn3(element){
    Dish3Btn.style.bottom = "-20%";
}

function HoverEffect(element){
    element.style.transform = 'scale(1.1)';
    element.style.boxshadow = '0 5px 10px rgba(0,0,0,0.5);'
    document.querySelectorAll('.discount-option').forEach(item =>{
        if(item !== element){
            item.style.transform = 'scale(0.9)';
            item.style.filter = 'grayscale(100%)';
        }
    })
}

function ResetEffect(element){
    element.style.transform = 'scale(1.0)';
    document.querySelectorAll('.discount-option').forEach(item =>{
        if(item !== element){
            item.style.transform = 'scale(1.0)';
            item.style.filter = 'grayscale(0%)';
        }
    })
}




document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
  });



function ScrollToMenu(){
    var Menu = document.getElementById("scrollMenu");
    var rect = Menu.getBoundingClientRect();
    var scrollHeight = Menu.scrollHeight;
    var height = Menu.clientHeight;
    var toReach = scrollHeight + height + rect.top;

    window.scrollTo({
        top: toReach,
        behavior: "smooth"
    });
}

function ScrollToDiscount(){
    var Discount = document.getElementById("scrollDiscount");
    var rect = Discount.getBoundingClientRect();
    var scrollHeight = Discount.scrollHeight;
    var height = Discount.clientHeight;
    var toReach = scrollHeight + rect.top;

    window.scrollTo({
        top: toReach,
        behavior: "smooth"
    });
}

function ScrollToContact(){
    var Contact = document.getElementById("scrollContact");
    Contact.scrollIntoView({behavior:"smooth"});
}


function ShowLearnMore(){
    var Container = document.getElementById("LearnMore");
    var backdrop = document.getElementById("backdrop");

    backdrop.classList.add("show");
    backdrop.style.display = "block";
    Container.style.opacity = "1";
    Container.style.zIndex = "1";
    window.scrollTo({top : 0, behavior:"smooth"});
    document.body.style.overflow = "hidden";
}



function CloseLearnMore(){
    var Container = document.getElementById("LearnMore");
    var backdrop = document.getElementById("backdrop");

    backdrop.style.display = "none";
    backdrop.classList.remove("show");
    Container.style.opacity = "0";
    Container.style.zIndex = "-2";

    document.body.style.overflow = "";
}


function ShowOrderMenu(){
    var Container = document.getElementById("order_container");
    var backdrop = document.getElementById("backdrop");

    backdrop.classList.add("show");
    backdrop.style.display = "block";
    Container.style.opacity = "1";
    Container.style.zIndex = "1";
    Container.scrollIntoView({behavior:"smooth"});
    document.body.style.overflow = "hidden";
}

function CloseOrderMenu(){
    var Container = document.getElementById("order_container");
    var backdrop = document.getElementById("backdrop");

    backdrop.style.display = "none";
    backdrop.classList.remove("show");
    Container.style.opacity = "0";
    Container.style.zIndex = "-2";

    document.body.style.overflow = "";
}



function ShowOrderDiscount(){
    var Container = document.getElementById("order_discount_container");
    var backdrop = document.getElementById("backdrop");

    backdrop.classList.add("show");
    backdrop.style.display = "block";
    Container.style.opacity = "1";
    Container.style.zIndex = "1";
    Container.scrollIntoView({behavior:"smooth"});
    document.body.style.overflow = "hidden";
}

function CloseOrderDiscount(){
    var Container = document.getElementById("order_discount_container");
    var backdrop = document.getElementById("backdrop");

    backdrop.style.display = "none";
    backdrop.classList.remove("show");
    Container.style.opacity = "0";
    Container.style.zIndex = "-2";

    document.body.style.overflow = "";
}


function ShowMessage(){
    var Container = document.getElementById("ContactMessage");
    var backdrop = document.getElementById("backdrop");

    backdrop.classList.add("show");
    backdrop.style.display = "block";
    Container.style.opacity = "1";
    Container.style.zIndex = "1";
    Container.scrollIntoView({behavior:"smooth"});
    document.body.style.overflow = "hidden";
}

function CloseMessage(){
    var Container = document.getElementById("ContactMessage");
    var backdrop = document.getElementById("backdrop");

    backdrop.style.display = "none";
    backdrop.classList.remove("show");
    Container.style.opacity = "0";
    Container.style.zIndex = "-2";

    document.body.style.overflow = "";
}

window.onload = function() {
    const submitBtn = document.getElementById('submitBtn');
    const form = document.getElementById('myForm');

    function ShowMessage(){
        var Container = document.getElementById("ContactMessage");
        var backdrop = document.getElementById("backdrop");
    
        backdrop.classList.add("show");
        backdrop.style.display = "block";
        Container.style.opacity = "1";
        Container.style.zIndex = "1";
        Container.scrollIntoView({behavior:"smooth"});
        document.body.style.overflow = "hidden";
    }

    function isFormFilled() {
        return form.querySelector('[required]:invalid') === null;
    }

    function handleClick(event) {
        if (isFormFilled()) {
            ShowMessage();
        }
    }

    submitBtn.addEventListener('click', handleClick);
}