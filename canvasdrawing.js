var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");

		var clickX = new Array();
		var clickY = new Array();
		var clickDrag = new Array();
		var paint;

		function addClick(x, y, dragging){
		  clickX.push(x);
		  clickY.push(y);
		  clickDrag.push(dragging);
		}

		$('#canvas').mousedown(function(e){
	  		var mouseX = e.pageX - this.offsetLeft;
	  		var mouseY = e.pageY - this.offsetTop;
			
	  		paint = true;
	  		addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
	  		redraw();
		});

		$('#canvas').mousemove(function(e){
	  		if(paint){
	    		addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
	    		redraw();
	  		}
		});

		$('#canvas').mouseup(function(e){
			paint = false;
		});

		$('#canvas').mouseleave(function(e){
			paint = false;
		});

		function redraw(){
			ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas,height);

			ctx.strokeStyle = "#000000";
			ctx.lineJoin = "round";
			ctx.lineWidth = "5";

			for(var i=0; i < clickX.length; i++) {		
			   context.beginPath();
			   if(clickDrag[i] && i){
			     context.moveTo(clickX[i-1], clickY[i-1]);
			   }
			   else{
			      context.moveTo(clickX[i]-1, clickY[i]);
			   }
			   context.lineTo(clickX[i], clickY[i]);
			   context.closePath();
			   context.stroke();
		  	}
		}