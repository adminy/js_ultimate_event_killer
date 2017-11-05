var all = document.getElementsByTagName("*");
for (var t=0; t < all.length; t++) {
           var eves = getEventListeners(all[t]);
            for (var key in eves) {
                if(eves[key].hasOwnProperty('length')) {
				    for(var i = 0; i < eves[key].length; i++) {
					    all[t].removeEventListener(key, eves[key][i].listener, true);
                        all[t].removeEventListener(key, eves[key][i].listener, { passive: true });     // Succeeds
               		    all[t].removeEventListener(key, eves[key][i].listener, { capture: false });    // Succeeds
                    	all[t].removeEventListener(key, eves[key][i].listener, { capture: true });     // Fails
                    	all[t].removeEventListener(key, eves[key][i].listener, { passive: false });    // Succeeds
                    	all[t].removeEventListener(key, eves[key][i].listener, false);                 // Succeeds
                    	all[t].removeEventListener(key, eves[key][i].listener, true);                  // Fails
                    }
              		if(eves[key].hasOwnProperty('length') && eves[key].length > 0) { console.log(eves[key][0]); }
                }
            }
}
