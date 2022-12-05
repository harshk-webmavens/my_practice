var images = ['./images/img1.jpg', './images/img2.jpg', './images/img3.jpg'];
var i = 0;
// var image = document.getElementsByClassName("slider")
function slideshow() {
    console.log("called",i);
    document.getElementById("image").src=images[i];

    console.log(images.length);
    if(i<images.length-1){
        console.log("inside if");
        i++;
    }
    else {
        console.log("inside else");
        i=0;
    }
    setTimeout(slideshow , 2000);
}   
slideshow();