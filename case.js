document.getElementById('caseplus').addEventListener('click', function(){
  const casenumberfield = document.getElementById('casenumber');
  const casenumberfieldstring = casenumberfield.value;
  const casenumberfieldint = parseInt(casenumberfieldstring);

  const newcasenumber = casenumberfieldint + 1;
  casenumberfield.value = newcasenumber;

  const priccase = document.getElementById('pricenumber');
  const totalpriceadd = newcasenumber * 59;
  priccase.innerText = totalpriceadd;


  calculatesubtotal();


})


document.getElementById('caseminus').addEventListener('click', function(){
    const casenumberfield = document.getElementById('casenumber');
    const casenumberfieldstring = casenumberfield.value;
    const casenumberfieldint = parseInt(casenumberfieldstring);
  
    const newcasenumber = casenumberfieldint - 1;
    casenumberfield.value = newcasenumber;

    if(newcasenumber < 0){
        casenumberfield.value = '0';
        newcasenumber = 0;
    }else{
        casenumberfield.value = newcasenumber;
    }

    const priccase = document.getElementById('pricenumber');
  const totalpricemin = newcasenumber * 59;
  priccase.innerText = totalpricemin;

  calculatesubtotal();



  
  
  })