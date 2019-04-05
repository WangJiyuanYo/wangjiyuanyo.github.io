
document.body.onselectstart = document.body.ondrag = function(){
		return false;
	}

function stop(){ 
return false; 
} 
document.oncontextmenu=stop; //禁止使用右键功能

window.onload=function(){
            document.onkeydown=function(){
                var e=window.event||arguments[0];
                if(e.keyCode==123){
                    return false;
                }else if(e.ctrlKey||e.keyCode==73){
                    return false;
                }
            };
            document.oncontextmenu=function(){
                return false;
            }
        }	// 禁止使用F12 Ctrl+S 

