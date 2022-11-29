var images = ['images/img1.jpg', 'images/img3.jpg', 'images/img3.jpg'];
var i =0;
function slideshow() {
    document.getElementById('images').src=images[i];

    if(i<images.lenth-1){
        i++;
    }
    else {
        i=0;
    }
    setTimeout("slideshow()" , 2000);
}   
Window.onload = slideshow;