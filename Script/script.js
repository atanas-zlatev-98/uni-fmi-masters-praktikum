var view = 'list';
let cars = [];

function getData(){
   
$.ajax({
    
    type: "GET",
    url:"Script/JSON/cars_list.json",
    contentType: "application/json",
    dataType: "json",
   
})
.done(response => {

    cars = response.car;
    renderCarsList();
    
})
.fail(response => {
    console.log(response);
    
})
.always(() => {
    console.log('ajax completed');
})
}

function renderCars(car){

    const templateSelector = `#cars-${view}-template`;
    const $template = $($(templateSelector).html());
    const image = car.img_path;

    $template.find('.car-img').attr('src', image);
    $template.find('.car-model').text(car.model);
    $template.find('.car-horsepower').text(car.horsepower);
    $template.find('.car-year').text(car.year);
    $template.find('.car-body').text(car.body);
    $template.find('.car-fuel').text(car.fuel);
    $template.find('.car-description').text(car.description);
    $template.find('.car-description-half').text(car.descriptionHalf);
    $template.find('.car-volume').text(car.volume);
    $template.find('.car-transmission').text(car.transmission);
    $template.find('.car-mileage').text(car.mileage);
    $template.find('.car-price').text(car.price);

    $('#cars-list').append($template);
    return $template;

}

function renderCarsList(){
    
    const year = $('#filter-year').val();
    $carsList = $('#cars-list');
    $carsList.empty();
    cars.forEach(car => {
        if(car.year == year || car.year > year){
            const $template = renderCars(car);
            $carsList.append($template);
        }

    })

}

function renderCarsHP(){   
    const horsepower = $('#hpE').val();
    $carsList = $('#cars-list');
    $carsList.empty();
    cars.forEach(car => {
        if(car.horsepower < horsepower || car.horsepower == horsepower){
            const $template = renderCars(car);
            $carsList.append($template);
        }
    })

}

function renderCarsPrice(){
    const price = $('#budget').val();
    $carsList = $('#cars-list');
    $carsList.empty();
    cars.forEach(car => {
        if(car.price < price || car.price == price){
            const $template = renderCars(car);
            $carsList.append($template);
        }

    })
}

function renderCarsMileage(){
    const mileage = $('#mileage').val();
    $carsList = $('#cars-list');
    $carsList.empty();
    cars.forEach(car => {
        if(car.mileage < mileage || car.mileage == mileage){
            const $template = renderCars(car);
            $carsList.append($template);
        }

    })
}
function renderCarsFuel(){
    
    const carfuel = $('#filter-fuel').val();
    $carsList = $('#cars-list');
    $carsList.empty();
    cars.forEach(car => {
        if(car.fuel == carfuel){
            const $template = renderCars(car);
            $carsList.append($template);
        }

    })

}
function renderCarsBody(){
    
    const carBody = $('#filter-body').val();
    $carsList = $('#cars-list');
    $carsList.empty();
    cars.forEach(car => {
        if(car.body == carBody){
            const $template = renderCars(car);
            $carsList.append($template);
        }

    })

}

$('#filter-body').change((e)=> {
    renderCarsBody(e.target.value);
})
$('#filter-fuel').change((e)=> {
    renderCarsFuel(e.target.value);
})
$('#filter-year').change((e) => {
    renderCarsList(e.target.value);
})
$('#hpE').change((e)=>{
    renderCarsHP(e.target.value);
})
$('#budget').change((e) => {
    renderCarsPrice(e.target.value);
})
$('#mileage').change((e) => {
    renderCarsMileage(e.target.value);
})

$('#filter-year').change((e)=>{
    renderCarsList(e.target.value);
})


$('#grid-view').click(e => {
    view = 'grid';
    $(e.currentTarget).attr("src","Style/Images/grid_active.png");
    $('#list-view').attr("src", "Style/Images/list.svg");
    renderCarsList();
})

$('#list-view').click(e => {
    view = 'list';
    $(e.currentTarget).attr("src","Style/Images/list_active.png");
    $('#grid-view').attr("src", "Style/Images/Grid.svg");
    renderCarsList();
})

getData();




