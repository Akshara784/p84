canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car_image = "car1.png";
car1_x = 10;
car1_y = 10;
background_image = "racing.jpg";
car2_width = 120;
car2_height = 70;
car_image = "car2.png.png";
car2_x = 10;
car2_y = 100;

function add(){
    background_imageTag = new Image();
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;

    
    car1_imageTag.onload = uploadCar1;
    car1_imageTag.src = car1_image;

    car2_imageTag = new Image();
    car2_imageTag.onload = uploadCar2;
    car2_imageTag.src = car2_image;
}
function uploadBackground(){
    ctx.drawImage(background_imageTag, 0,0, canvas.width, canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_imageTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_imageTag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        
        console.log("up arrow key");
    }

    if(keyPressed == '40')
    {
        
        console.log("down arrow key");
    }

    if(keyPressed == '37')
    {
        
        console.log("left arrow key");
    }

    if(keyPressed == '39')
    {
        
        console.log("right arrow key");
    }

    if(keyPressed == '87')
    {
        
        console.log("key w");
    }

    if(keyPressed == '83')
    {
        
        console.log("key s");
    }

    if(keyPressed == '65')
    {
        
        console.log("key a");
    }

    if(keyPressed == '68')
    {
        
        console.log("key d");
    }
}