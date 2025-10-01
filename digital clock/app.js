function clock(){
    let Time=new Date();
    let CurTime=Time.toLocaleTimeString();
    document.getElementById('clock id').innerHTML=CurTime;
}

let changeTime=setInterval(clock,1000)