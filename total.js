function gettextelementbyId(elementid){

    
  const pricenumbers = document.getElementById(elementid);
  const pricenumberstring = pricenumbers.innerText;
  const pricenumbersint = parseInt(pricenumberstring);
  return pricenumbersint;
  
  
  
  
}

function calculatesubtotal()
{
    const cct = gettextelementbyId('pricenumber');
    const cpt = gettextelementbyId('iphonenpricenumber');
   

    const sub = document.getElementById('subtotal');
    const cst = cct + cpt ;
 
  sub.innerText = cst;

  
  const taxs = document.getElementById('tax');
  const taxcal = parseFloat(cst * 0.10).toFixed(2);
  taxs.innerText = taxcal;


  const totals = document.getElementById('total');
  const totalcal =  parseFloat(taxcal + cst).toFixed(2);
  totals.innerText = totalcal;


}