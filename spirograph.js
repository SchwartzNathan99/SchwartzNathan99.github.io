let bStart = document.getElementById( 'btnStart' );	
		bStart.addEventListener( "click", processSubmit );
        
function processSubmit() 
{
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    var t = 0;
    var r = 75 * Math.random();
    var R = 75 * Math.random();
    var O = Math.random();
    ctx.moveTo(300, 300);
    ctx.beginPath();
    

    while (t<75)
    {
        x = 300 + (R+r)*Math.cos(t) - (r+O)*Math.cos(((R+r)/r)*t);
	    y = 300 + (R+r)*Math.sin(t) - (r+O)*Math.sin(((R+r)/r)*t);
        ctx.lineTo(x, y);
        ctx.stroke();
        t+=0.1;
    }
      
}