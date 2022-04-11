var maximages = 5;
var startpath = "pix3/birds";
var extention = ".png"
function showbig(pic){
    document.getElementById("bigpic").src = pic;
}
function changeslide(x){
    //Get file name of image that's showing.
 var currentimage = document.getElementById('bigpic').src; 
 var z = "0" + x; 
 var y = "" + 10; 
 var path = "pix3/birds" + z + ".png"; 
 //Locate file name extension in current image source string.
 var dotat = currentimage.indexOf(extention);
 //Grab two digits to the left of that file name extension.
 var stringnumber = currentimage.substr(dotat - 2, 2);
 //Convert stringnumber string to number and add x.
 var nextnum = parseInt(stringnumber) + x; 
 //If nextnum is less than 1, wrap around to maximages.
 if (nextnum < 1) {
 nextnum = maximages; 
 } 
 //If nextnum is greater than maximages, wrap around to 1.
 if (nextnum > maximages) {
 nextnum = 1; 
 } 
 //Create two-digit string from number (leading zero if less than 10).
 var twodigitnum = ("0" + nextnum).slice(-2);
 //Create new file name from two-digit number string.
 var showimg = startpath + twodigitnum + extention; 
 showbig(showimg)
    
}
