const productos=[
    {id:1, nombre:'Pizza americana', precio:25},
    
    {id:2, nombre:'Pizza Italiana', precio:30},
    
    {id:3, nombre:'Pizza Epañola', precio:40}
]

let r=1
let carro=[]

while (r==1) {
    let product=prompt('Seleccione el producto: \n 1=Pizza Americana (S/ 25.00) \n 2=Pizza Italina (S/ 30.00) \n 3=Pizza Española (S/ 40.00)')
    let cantidad=prompt('Ingrese la cantidad')

    agregarProducto(product, cantidad)

    r=prompt('Desea pedir mas\n 1=Sí\n 2=No')
    if (r==2) {
        window.alert("El total es : " + cantidadTotal())    
    }
}

function agregarProducto(productoId, cantidad){
    let producto =productos.find(product=>product.id==productoId)
    carro=[
        ...carro,
        {
            ...producto, 
            cantidad:cantidad
        }
    ]
}2

function cantidadTotal(){
    let total=0
    let num=0   
    do{
        total+=carro[num]["cantidad"]*carro[num]["precio"]
        console.log("prueba")
        num+=1
    }while(num<carro.length)
    return total
}

