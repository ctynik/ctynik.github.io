   $(function () {
            var i = 0;
            
            bricklrOpts = [
			
            {
                target : '#target6',
                brickW : 100,
                brickH : 100,
                brickBg : 'greyscalish',
		repeat : true,
		opacity : 0.6,
		delay: 200,	
		effectDuration : 1200
            }];
        
            var intvl;
                    intvl = setInterval(function () {
                i++;
                if (i >= bricklrOpts.length) {
                    clearInterval(intvl);
                    return;
                }
                bricklr(bricklrOpts[i]);
            }, 1000);
            
            bricklr(bricklrOpts[0]);
        });
