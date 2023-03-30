var i = 1;
var images = [];
var time = 3000;

images[1] = 'image/Blue Dumbell.jpg'
images[2] = 'image/Hand Gripper.jpg'
images[3] = 'image/Power Twister.jpg'
images[4] = 'image/Pull up bar.jpg'
images[5] = 'image/Sit Up bar.jpg'
images[6] = 'image/Resistance Band.jpg'
images[7] = 'image/Push Up Stand.jpg'
images[8] = 'image/Nickel Dumbell.jpg'
images[9] = 'image/Chest Expander.jpg'
images[10] = 'image/Blue Barbell Plate.jpg'
images[11] = 'image/Black Barbell Plate.jpg'
images[12] = 'image/Barbell.jpg'
images[13] = 'image/7.5 Kg Hex Dumbell.jpg'




function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    }
    else{
        i = 1;
    }


setTimeout("changeImg()", time)
}

window.onload = changeImg;



x = 1;
function abc(){
    if(x==1) {
        document.getElementById("awesome").innerHTML="Dumbell Pair (5 KG)";
    }
    if(x==2) {
        document.getElementById("awesome").innerHTML="Hand Gripper";
    }
    if(x==3) {
        document.getElementById("awesome").innerHTML="Power Twister";
    }
    if(x==4) {
        document.getElementById("awesome").innerHTML="Pull Up Bar";
    }
    if(x==5) {
        document.getElementById("awesome").innerHTML="Sit Up Bar";
    }
    if(x==6) {
        document.getElementById("awesome").innerHTML="Resistance Band";
    }
    if(x==7) {
        document.getElementById("awesome").innerHTML="Push Up Stand";
    }
    if(x==8) {
        document.getElementById("awesome").innerHTML="Nickel Dumbell";
    }
    if(x==9) {
        document.getElementById("awesome").innerHTML="Chest Expander";
    }
    if(x==10) {
        document.getElementById("awesome").innerHTML="Blue Barbell Plate";
    }
    if(x==11) {
        document.getElementById("awesome").innerHTML="Black Barbell Plate";
    }
    if(x==12) {
        document.getElementById("awesome").innerHTML="Barbell";
    }
    if(x==13) {
        document.getElementById("awesome").innerHTML="7.5 Kg Hex Dumbell";
    }
    
x++;
if(x>=14) {
    x=1; 
}
setTimeout("abc()", 3000)
}
abc();
