
(function(){
  const codeEl = document.getElementById('refcode');
  const copyBtn = document.getElementById('copyBtn');
  const copyOk = document.getElementById('copyOk');

  async function copyText(t){
    try{
      await navigator.clipboard.writeText(t);
      copyOk.style.display='inline';
      setTimeout(()=> copyOk.style.display='none', 1600);
    }catch(e){
      // Fallback
      const area = document.createElement('textarea');
      area.value = t;
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      document.body.removeChild(area);
      copyOk.style.display='inline';
      setTimeout(()=> copyOk.style.display='none', 1600);
    }
  }

  copyBtn?.addEventListener('click', ()=>{
    const val = (codeEl?.textContent || '').trim();
    if(val) copyText(val);
  });
})();
