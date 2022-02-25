// const precioOriginal = 12+00
// const descunto = 15

function calcularPrecioDescunto(precio , descuento){
    const porsentsjePrecioDescunto = 100 -  descuento
    const precioDescunto = (precio * porsentsjePrecioDescunto) / 100
    return precioDescunto;
}

function calcularDescuntoProductos(){
    const inputPrice = parseInt(document.getElementById("inputPricioPoducto").value);
    const inputCupon = document.getElementById("inputCuponDescuento").value;
    
    
    const isCouponValueValid = function (coupon) {
        return coupon.name === inputCupon;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    console.log(userCoupon);
    
    if (!userCoupon) {
        alert("El cupón " + inputCupon + "no es válido");
    }else{
        const descuento = userCoupon.discount;
        const precioConDescunto = calcularPrecioDescunto(inputPrice, descuento); 
        const priceP = document.getElementById("priceParrafo");
        priceP.innerText = "El precio con descunto son : $" + precioConDescunto;

    }
    
}
const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];

// console.log({
//     precioOriginal,
//     descunto,
//     porsentsjePrecioDescunto,
//     precioDescunto,
// })