document.getElementById('bulkForm')?.addEventListener('submit', async function(e){
    e.preventDefault();
    const company = document.getElementById('company').value.trim();
    const items = document.getElementById('items').value.trim();
    const file = document.getElementById('file').files[0];
    const status = document.getElementById('bulkStatus');
    if(!company){
        alert('Please enter company or buyer name.');
        return;
    }
    status.textContent = 'Processing...';
    let lines = [];
    if(items) lines = items.split(/\r?\n/).map(l=>l.trim()).filter(Boolean);
    if(file){
        try{
            const txt = await file.text();
            const csvLines = txt.split(/\r?\n/).map(l=>l.trim()).filter(Boolean);
            lines.push(...csvLines);
        }catch(err){
            status.textContent = 'Failed to read file.';
            return;
        }
    }
    if(lines.length === 0){
        status.textContent = '';
        alert('Please provide items by pasting lines or uploading a CSV.');
        return;
    }
    // demo: summarize and 'submit'
    status.textContent = `Received ${lines.length} line(s). We'll contact you.`;
    this.reset();
});