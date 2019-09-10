$(document).ready(function(){

	console.log("main.js loaded");

	$("#secondbox").on("click", function() {
		$("#secondbox").animate({
			// background-color: "#fff",
			height: "20px"
		}, 1000);
	
	});

	$("#thirdbox").on("click", function() {
		$("#plus").animate({
			bottom: "+=30px"
		}, 50)
	});

	// $("#thirdbox").on("click", function() {
	// 	$("#thirdbox").animate({
	// 		transform: "rotate(45deg)"
	// 	}, 1000)
	// });
	$("#reset").on("click", function() {
		$("#secondbox").animate({
			height: "15vw"
		}, 500)
		$("#plus").animate({
			bottom: 0
		}, 250)
	});

	// $("#redecorate").on("click", function() {
	// 	$("#redecorate").animate ({
	// 		transform: "rotate(45deg)"
	// 	}, 1000)
	// });

	$("#poof").mouseover(function() {
		$("#poof").animate ({
			opacity: "0"
		}, 1000)
	});

	$("#resetRowThree").on("click", function() {
		$("#poof").animate ({
			opacity: "1"
		}, 1000)
	});

	$("#blur").on("click", function() {
		$({blurRadius: 0}).animate({blurRadius: 10}, {
	        duration: 500,
	        easing: 'swing',
	        step: function() {
	            console.log(this.blurRadius);
	            $('.box').css({
	                "-webkit-filter": "blur("+this.blurRadius+"px)",
	                "filter": "blur("+this.blurRadius+"px)"
	            });
	        }
	    });
	});

	$("#theglasses").on("click", function() {
		$({blurRadius: 10}).animate({blurRadius: 0}, {
	        duration: 500,
	        easing: 'swing',
	        step: function() {
	            console.log(this.blurRadius);
	            $('.box').css({
	                "-webkit-filter": "blur("+this.blurRadius+"px)",
	                "filter": "blur("+this.blurRadius+"px)"
	            });
	        }
	    });
	});

	$("#sepia").on("click", function() {
		$({sepia: 0}).animate({sepia: 100}, {
	        duration: 500,
	        easing: 'swing',
	        step: function() {
	            console.log(this.sepia);
	            $('.box').css({
	                "-webkit-filter": "sepia("+this.sepia+")",
	                "filter": "sepia("+this.sepia+")"
	            });
	        }
	    });
	});

	$("#sepia_less").on("click", function() {
		$({sepia: 100}).animate({sepia: 0}, {
	        duration: 500,
	        easing: 'swing',
	        step: function() {
	            // console.log(this.blurRadius);
	            $('.box').css({
	                "-webkit-filter": "sepia("+this.sepia+")",
	                "filter": "sepia("+this.sepia+")"
	            });
	        }
	    });
	});

	var action = 1;

	$("#biggerBoxes").on("click", function() {
		if ( action == 1 ) {
	        $(".box").animate ({
				width: "17vw",
				height: "17vw"
			}, 1000)
        	action = 2;
	    } else {
	        $(".box").animate ({
				width: "15vw",
				height: "15vw"
			}, 1000)
	        action = 1;
	    }
	});

	var invertAction = 1;

	$("#radical").on("click", function() {
		if ( invertAction == 1 ) {
	        $({invert: 0}).animate({invert: 100}, {
	        duration: 500,
	        easing: 'swing',
	        step: function() {
	            console.log(this.invert);
	            $('.box').css({
	                "-webkit-filter": "invert("+this.invert+")",
	                "filter": "invert("+this.invert+")"
	            });
	        }
	    });
        	invertAction = 2;
	    } else {
	        $({invert: 100}).animate({invert: 0}, {
	        duration: 500,
	        easing: 'swing',
	        step: function() {
	            console.log(this.invert);
	            $('.box').css({
	                "-webkit-filter": "invert("+this.invert+")",
	                "filter": "invert("+this.invert+")"
	            });
	        invertAction = 1;
			    }
			});
	    }
    });

	var bbA = 1;
	$("#bbContainer").on("click", function() {
		if ( bbA == 1 ) {
	        $("#blackBox").animate ({
				width: "100%",
				height: "100%"
			}, 1000)
        	bbA = 2;
	    } else {
	        $("#blackBox").animate ({
				width: "0%",
				height: "0%"
			}, 1000)
	        bbA = 1;
	    }
	});

	var ccA = 1;
	$("#ccc").on("click", function() {
		if ( ccA == 1 ) {
	        $("#colorcircle").animate ({
				width: "100%",
				height: "100%"
			}, 1000)
        	ccA = 2;
	    } else {
	        $("#colorcircle").animate ({
				width: "0%",
				height: "0%"
			}, 1000)
	        ccA = 1;
	    }
	});


	var grayscaleAction = 1;
	$("#bricky").on("click", function() {
		if ( grayscaleAction == 1 ) {
	        $({grayscale: 0}).animate({grayscale: 100}, {
	        duration: 500,
	        easing: 'swing',
	        step: function() {
	            console.log(this.grayscale);
	            $('#bricky').css({
	                "-webkit-filter": "grayscale("+this.grayscale+")",
	                "filter": "grayscale("+this.grayscale+")"
	            });
	        }
	    });
	    grayscaleAction = 2;
	    } else {
	        $({grayscale: 100}).animate({grayscale: 0}, {
	        duration: 500,
	        easing: 'swing',
	        step: function() {
	            console.log(this.grayscale);
	            $('#bricky').css({
	                "-webkit-filter": "grayscale("+this.grayscale+")",
	                "filter": "grayscale("+this.grayscale+")"
	            });
			    }
			});
		grayscaleAction = 1;
	    }
    });

	var camoA = 1;
	$("#camo").on("click", function() {
		if ( camoA == 1 ) {
	        $("#c").animate ({
				opacity: "100"
			}, {queue: false, duration: 250}),
			$("#a").animate ({
				opacity: "100"
			}, {queue: false, duration: 500}),
			$("#m").animate ({
				opacity: "100"
			}, {queue: false, duration: 1000}),
			$("#o").animate ({
				opacity: "100"
			}, {queue: false, duration: 1000});
        	camoA = 2;
	    } else {
	    	$("#o").animate ({
				opacity: "0"
			}, {queue: false, duration: 250}),
			$("#m").animate ({
				opacity: "0"
			}, {queue: false, duration: 500}),
			$("#a").animate ({
				opacity: "0"
			}, {queue: false, duration: 1000}),
	        $("#c").animate ({
				opacity: "0"
			}, {queue: false, duration: 1000});
	        camoA = 1;
	    }
	});

	$("#thickerbox").on("click", function () {
		$(".box").animate ({
			borderWidth: "5"
		}, {queue: false, duration: 2000}),
		$("#thinbox").animate ({
			borderWidth: "2"
		}, {queue: false, duration: 2000});

	});

	$("#thinbox").on("click", function () {
		$(".box").animate ({
			borderWidth: "2"
		}, {queue: false, duration: 2000}),
		$("#thickerbox").animate ({
			borderWidth: "5"
		}, {queue: false, duration: 2000});
	});

	$("#nobo").on("click", function () {
		$(".box").animate ({
			borderWidth: "0"
		}, {queue: false, duration: 2000}),
		$("#thinbox").animate ({
			borderWidth: "2"
		}, {queue: false, duration: 2000}),
		$("#thickerbox").animate ({
			borderWidth: "5"
		}, {queue: false, duration: 2000});
	});

	$("#ball_pit").on("click", function () {
		$(".box").animate ({
			borderRadius: "15vw"
		}, 1000);
	});

	$("#square_dance").on("click", function() {
		$(".box").animate ({
			borderRadius: "0"
		}, 1000);
	});

	var bigCounter = 1;
	$("#big").on("click", function() {
		if ( bigCounter == 1 ) {
	        $(".box").animate ({
				width: "80vw"
			}, 1000)
        	bigCounter = 2;
	    } else {
	        $(".box").animate ({
				width: "15vw"
			}, 1000)
	        bigCounter = 1;
	    }
	});

	$("#click_once").on("click", function () {
		$("#click_once").text('"Nice"')
	});

	$("#double_click").on("dblclick", function () {
		$("#double_click").text('"Please be more careful"')
	});

	$("#please_go").on("mouseleave", function() {
		$("#please_go").text('"But I love to watch you leave"')
	});

	$("#resetRowNine").on("click", function() {
		$("#click_once").text('"Click once"'),
		$("#double_click").text('"Double click"');
	});

	// $("#aggress").on("click", function () {
	// 	$(".box").animate ({
	// 		textTransform: "uppercase"
	// 	}, 2000);
	// });


});