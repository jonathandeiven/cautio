/*TO DO: Make code more compact.*/

$('#wiiu').bind('keydown', function(e){
    // esc key
    if ((e.keyCode || e.which) == 27)
    {   
        document.body.style.overflow='auto';document.getElementById('wiiu').style.display='none';document.getElementById('fade').style.display='none';
    } 
});

$('#wiiubrand').bind('keydown', function(e){
    // esc key
    if ((e.keyCode || e.which) == 27)
    {   
        document.body.style.overflow='auto';document.getElementById('wiiubrand').style.display='none';document.getElementById('fade').style.display='none';
    } 
});

$('#cs246').bind('keydown', function(e){
    // esc key
    if ((e.keyCode || e.which) == 27)
    {   
        document.body.style.overflow='auto';document.getElementById('cs246').style.display='none';document.getElementById('fade').style.display='none';
    } 
});

$('#flood').bind('keydown', function(e){
    // esc key
    if ((e.keyCode || e.which) == 27)
    {   
        document.body.style.overflow='auto';document.getElementById('flood').style.display='none';document.getElementById('fade').style.display='none';
    } 
});

$('#website').bind('keydown', function(e){
    // esc key
    if ((e.keyCode || e.which) == 27)
    {   
        document.body.style.overflow='auto';document.getElementById('website').style.display='none';document.getElementById('fade').style.display='none';
    } 
});

$('#photo').bind('keydown', function(e){
    // esc key
    if ((e.keyCode || e.which) == 27)
    {   
        document.body.style.overflow='auto';document.getElementById('photo').style.display='none';document.getElementById('fade').style.display='none';
    }
    // left arrow
    if ((e.keyCode || e.which) == 37)
    {   
        document.body.style.overflow='auto';document.getElementById('photo').style.display='none';document.getElementById('fade').style.display='none';
        document.body.style.overflow='hidden';document.getElementById('photo4').style.display='block';document.getElementById('fade').style.display='block';
        $('#photo4').focus();
    }
    // right arrow
    if ((e.keyCode || e.which) == 39)
    {
        document.body.style.overflow='auto';document.getElementById('photo').style.display='none';document.getElementById('fade').style.display='none';
        document.body.style.overflow='hidden';document.getElementById('photo2').style.display='block';document.getElementById('fade').style.display='block';
        $('#photo2').focus();
    }   
});

$('#photo2').bind('keydown', function(e){
    // esc key
    if ((e.keyCode || e.which) == 27)
    {   
        document.body.style.overflow='auto';document.getElementById('photo2').style.display='none';document.getElementById('fade').style.display='none';
    }
    // left arrow
    if ((e.keyCode || e.which) == 37)
    {   
        document.body.style.overflow='auto';document.getElementById('photo2').style.display='none';document.getElementById('fade').style.display='none';;
        document.body.style.overflow='hidden';document.getElementById('photo').style.display='block';document.getElementById('fade').style.display='block';
        $('#photo').focus();
    }
    // right arrow
    if ((e.keyCode || e.which) == 39)
    {
        document.body.style.overflow='auto';document.getElementById('photo2').style.display='none';document.getElementById('fade').style.display='none';
        document.body.style.overflow='hidden';document.getElementById('photo3').style.display='block';document.getElementById('fade').style.display='block';
        $('#photo3').focus();
    }   
});

$('#photo3').bind('keydown', function(e){
    // esc key
    if ((e.keyCode || e.which) == 27)
    {   
        document.body.style.overflow='auto';document.getElementById('photo3').style.display='none';document.getElementById('fade').style.display='none';
    }
    // left arrow
    if ((e.keyCode || e.which) == 37)
    {   
        document.body.style.overflow='auto';document.getElementById('photo3').style.display='none';document.getElementById('fade').style.display='none';
        document.body.style.overflow='hidden';document.getElementById('photo2').style.display='block';document.getElementById('fade').style.display='block';
        $('#photo2').focus();
    }
    // right arrow
    if ((e.keyCode || e.which) == 39)
    {
        document.body.style.overflow='auto';document.getElementById('photo3').style.display='none';document.getElementById('fade').style.display='none';
        document.body.style.overflow='hidden';document.getElementById('photo4').style.display='block';document.getElementById('fade').style.display='block';
        $('#photo4').focus();
    }   
});

$('#photo4').bind('keydown', function(e){
    // esc key
    if ((e.keyCode || e.which) == 27)
    {   
        document.body.style.overflow='auto';document.getElementById('photo4').style.display='none';document.getElementById('fade').style.display='none';
    }
    // left arrow
    if ((e.keyCode || e.which) == 37)
    {   
        document.body.style.overflow='auto';document.getElementById('photo4').style.display='none';document.getElementById('fade').style.display='none';
        document.body.style.overflow='hidden';document.getElementById('photo3').style.display='block';document.getElementById('fade').style.display='block';
        $('#photo3').focus();
    }
    // right arrow
    if ((e.keyCode || e.which) == 39)
    {
        document.body.style.overflow='auto';document.getElementById('photo4').style.display='none';document.getElementById('fade').style.display='none';
        document.body.style.overflow='hidden';document.getElementById('photo').style.display='block';document.getElementById('fade').style.display='block';
        $('#photo').focus();
    }   
});