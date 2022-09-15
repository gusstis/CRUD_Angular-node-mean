Vid 22 - Actualizamos producto
Problema: al enviar el put(con Postman)

    http://localhost:4000/api/productos/631f86abc980f06c183d2e75

    json:   {
            "nombre": "Coquita",
            "categoria": "Chupi",
            "ubicacion": "Cordoba",
            "precio": 3.6
            }
    devuelve: Hubo un error.....put
EN productoController.js:
        exports.actualizarProducto = async (req, res) => {

            try {

                const { nombre, categoria, ubicacion, precio } = req.body;
                let producto = await Producto.findById(req.params.id);

                if(!producto) {
                    res.status(404).json({ msg: 'Producto inexistente' })
                }

                producto.nombre = nombre;
                producto.categoria = categoria;
                producto.ubicacion = ubicacion;
                producto.precio = precio;
                
                producto = await Producto,findOneAndUpdate({ _id: req.params.id }, producto, { new:true });
                res.json(producto);

            } catch (error) {
                console.log(error);
                res.status(500).send("Hubo un error.....put");
            }

En terminal:

El server esta corriendo joya!!
DB connected...👻
MongooseError: `Model.findOneAndUpdate()` cannot run without a model as `this`. Make sure you are calling `MyModel.findOneAndUpdate()` where `MyModel` is a Mongoose model.
    at _checkContext (/home/gus/Documentos/Udemy/mean/servidor/node_modules/mongoose/lib/model.js:1264:11)
    at Model.findOneAndUpdate (/home/gus/Documentos/Udemy/mean/servidor/node_modules/mongoose/lib/model.js:2600:3)
    at exports.actualizarProducto (/home/gus/Documentos/Udemy/mean/servidor/controllers/productoController.js:53:35)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)



Vid 23 - Obtenemos un producto

Farian 2 mtd para terminar nuestra api
productoController.js
                    exports.obtenerProducto = async (req, res) => {

    try {
        let producto = await Producto.findById(req.params.id);

        if(!producto) {
            res.status(404).json({ msg: 'Producto inexistente' })
        }

        res.json(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error.....put");
    }

}

prodcuto.js
            router.get('/:id', productoController.obtenerProducto);

Vid 24 - Eliminar producto

Mas o menos lo mismo, vamos a uasr el verbo delette, y el metodo, eliminarProducto


Sección 3 - Integración Front/Back
Vid 25 - Obtener listado de productos

