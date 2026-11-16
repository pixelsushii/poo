import { Product } from './types/product.js';

class Main
{
    constructor()
    {
        this.productHolder = document.getElementById('product-holder');

        this.products = [];
    }


    async Initialize()
    {
        //1. Cargar el json como archivo
        const productsFile = await fetch('./data/products.json');
        //2. Transformamos el archivo en una estructura de datos
        const productsData = await productsFile.json();
        //3. De cada producto del json generamos un Product de nuestra class
        productsData.forEach((productData) =>
        {
            const product = new Product(
                productData.name,
                productData.description,
                productData.price
            );

            //4. Añadimos cada producto a la lista
            this.products.push(product);
        });
        
        this.products.forEach((product) =>
            {
                product.Render(this.productHolder);
            });
    }
}

const app = new Main();
app.Initialize();