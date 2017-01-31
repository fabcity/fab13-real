
float canvasWidth;
float canvasHeight;

float res; //resolution of the grid

float x1,x2;
float y1,y2;
float xCenter;
float yCenter;

PShape icon;
PShape[] icons; 

PShape logo;

int[] randomNums = new int[50]; 



void setup ()
{ 
  frameRate(15);
  size(1280,720);
  background(28,53,87);
  canvasWidth = width;
  canvasHeight = height;
  res= canvasWidth/9;
  
  //load the logo
  logo = loadShape("/processing/script1/data/logo.svg");
  
  //load the icon images
  icons = new PShape[6];
   
  for (int i = 0; i < icons.length; i++)
  {
    icons[i] = loadShape("/processing/script1/data/" + i + ".svg");
  }
 
  //generate random numbers array 
  for (int i=0; i < randomNums.length; i++){
    randomNums[i] = (int)random(0,6);
  } 
  //println(randomNums);
  
  
  
}


void draw()
{
  smooth();
  noStroke();
  
  float distX; //distance from mouseX to activating point
  float distY; //distance from mouseY to activating point  
  

  //loop that creates the grid
  
  for (float x = 0; x < canvasWidth; x+=res)   
    {
      for( float y = 0; y < canvasHeight; y+=res)
        {
           
           x2 = x + res;
           y2= y + res;
           
           //draw activating point
           xCenter = (x+x2)/2; 
           yCenter = (y+y2)/2;
           //fill(255);
           //ellipse(xCenter, yCenter, res/2, res/2);
           
           /*stroke(255);
           strokeWeight(1);
           noFill();
           rect(x,y, res, res);*/

           distX = xCenter - mouseX; 
           distY= yCenter - mouseY; 
           
           
           //if mouse hovers on top of activating point draw a random icon
            if (sqrt(sq(distX) + sq(distY)) < res/2 ) {
               //draw icons 
                 noStroke();
                 fill(28,53,87);
                 rect(x,y,res,res);
                 shape(icons[randomNum()], x, y);
               }  
            
            fill(28,53,87); 
            rect(res*3, res*2, res*3, res);
            shape(logo, res*3, res*2);   
               
         }
     }
     
}

int randomNum(){
  return int(random(5));
}