const ractangle=document.querySelector("#ractangle");

ractangle.addEventListener("mousemove",function(detail){
    var boxlocation=ractangle.getBoundingClientRect();
    var mouselocation=detail.clientX-boxlocation.x;
    if(mouselocation<(boxlocation.width/2)){
        var redcolor=gsap.utils.mapRange(0,boxlocation.width/2,255,0,mouselocation);
        gsap.to(ractangle,{
            backgroundColor:`rgb(${redcolor},0,0)`,
            ease:Power4,
        });

        
    }else{
        var bluecolor=gsap.utils.mapRange(boxlocation.width/2,boxlocation.width,0,255,mouselocation);
        gsap.to(ractangle,{
            backgroundColor:`rgb(0,0,${bluecolor})`,
            ease:Power4,
        });
    }

})

ractangle.addEventListener("mouseleave", function(){
    gsap.to(ractangle,{
        backgroundColor:`white`
    })
})

// mapRange(inMin, inMax, outMin, outMax)
// inMin : Number - The lower bound of the initial range to map from
// inMax : Number - The upper bound of the initial range to map from
// outMin : Number - The lower bound of the range to map to
// outMax : Number - The upper bound of the range to map to