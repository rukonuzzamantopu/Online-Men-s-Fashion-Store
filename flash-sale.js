// countdown to a sale end (set next 48 hours by default)
(function(){
    const end = new Date(new Date().getTime() + 48*60*60*1000);
    const el = document.getElementById('countdown');
    function update(){
        const now = new Date();
        const diff = end - now;
        if(diff <= 0){
            el.textContent = 'Sale ended';
            return;
        }
        const hrs = Math.floor(diff / (1000*60*60));
        const mins = Math.floor((diff % (1000*60*60)) / (1000*60));
        const secs = Math.floor((diff % (1000*60)) / 1000);
        el.textContent = `${hrs}h ${mins}m ${secs}s remaining`;
    }
    update();
    setInterval(update, 1000);

    // render flash sale items: show those with badge=true
    const saleItems = products.filter(p => p.badge);
    render(saleItems);
})();