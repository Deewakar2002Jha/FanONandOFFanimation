
function stopFan(){
    alert('hello1');
}
// function defination
function startfan(speed){// speed formal and parameter
    //fuction body
    //testing
   // alert('hello wolrd')
    if(speed == 0)
    {
    //alert("hello");
    //object.member
    //object.method
    document.getElementById('fan').style.animationPlayState='paused'
    // document.getElementById('fan').style.animationDuration='10s'
    }
    else if(speed == 1){
        //testing
       // alert('jsfbu')
       document.querySelector('.Fanbody').style.animationPlayState='running';
       document.querySelector('#fan').style.animationDuration='0.9'
    }
    else if(speed == 2)
    {   //testing
       // alert('2');
       document.querySelector('[data-dj="myfan"]').style.animationPlayState='running';
       document.querySelector('[data-dj="myfan"]').style.animationDuration='0.5s'
    }
    else
    {
        //alert('3');
        //object.member
        document.getElementById('Fan').style.animationPlayState='running';
        document.getElementById('Fan').style.animationDuration='0.1s';
    }
}
