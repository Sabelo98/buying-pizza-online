document.addEventListener('alpine:init', ()=> {
    Alpine.data('data', ()=> {
        return {
            header: 'Pizza App using AlpineJS, HTML && JS',
             smallPizzaPrice : 49.99,
             mediumPizzaPrice : 89.90,
             largePizzaPrice : 129.90,
             smallCount: 10, mediumCount: 2, largeCount:0,
             total: 0,
            calculateTotal() {
                const overallTotal = (this.smallCount * this.smallPizzaPrice) + (this.mediumCount * this.mediumPizzaPrice) + (this.largeCount * this.largePizzaPrice);
                this.total = overallTotal.toFixed(2);
                return overallTotal.toFixed(2);
            }
        }
    })
})
