var bilangan = (x) => {
    var bilangan = [];
        if(x>=0 || x<=0){
            bilangan.push('bulat')
        }
        if(x<=0){
            bilangan.push('negative');
        }
        if(x>=0){
            bilangan.push('cacah')
            bilangan.push('asli')
        }
        if(x%2 !==0){
            bilangan.push('ganjil')
        }
        if(x%2==0){
            bilangan.push('genap')
        }
        if(x>=1 && x%x==0){
            bilangan.push('prima')
        }
        if(x>=1 && x%x!==0){
            bilangan.push('komposit')
        }
        if (x=0){
            bilangan.push('nol')      
    }
    return bilangan;

}
console.log(bilangan(13));