document.getElementById('iphoneplus').addEventListener('click', function(){
    const iphonenumberfield = document.getElementById('iphonenumber');
    const iphonenumberfieldstring = iphonenumberfield.value;
    const iphonenumberfieldint = parseInt(iphonenumberfieldstring);
  
    const newcasenumberiphone = iphonenumberfieldint + 1;
    iphonenumberfield.value = newcasenumberiphone;
  
    const priciphone = document.getElementById('iphonenpricenumber');
    const totalpriceiphone = newcasenumberiphone * 1219;
    iphonenpricenumber.innerText = totalpriceiphone;
  
  
    calculatesubtotal();
  
  })
  
  
  document.getElementById('iphoneminus').addEventListener('click', function(){
    const iphonenumberfield = document.getElementById('iphonenumber');
    const iphonenumberfieldstring = iphonenumberfield.value;
    const iphonenumberfieldint = parseInt(iphonenumberfieldstring);
  
    const newcasenumberiphone = iphonenumberfieldint - 1;
    iphonenumberfield.value = newcasenumberiphone;

    if(newcasenumberiphone < 0){
      iphonenumberfield.value = '0';
        newcasenumberiphone = 0;
    }else{
      iphonenumberfield.value = newcasenumberiphone;
    }

    const priciphone = document.getElementById('iphonenpricenumber');
  const totalpriceiphone = newcasenumberiphone * 1219;
  iphonenpricenumber.innerText = totalpriceiphone;
  calculatesubtotal();
  
  })