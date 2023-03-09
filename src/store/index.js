import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    productos: [],
    productosFiltro: [],
    productoCarrito: {},
    productoDetalle: [],
    productoComplemento: []
  },
  mutations: {
    encontrarProductos(state, totalProduct) {
      state.productos = totalProduct
    },
    encontrarProductosFiltrados(state, productoFiltro) {
      state.productosFiltro = productoFiltro
    },
    encontrarProductosComple (state,productoComple){
      state.productoComplemento = productoComple
    },
    encontrarProductoCarrito(state, productoagregado) {
      state.productoCarrito[productoagregado.id] = productoagregado
    },
    encontarProductoDetalle(state, ProdById){
      state.productoDetalle = ProdById      
    },
    aumentarCanti(state, id_product) {
      state.productoCarrito[id_product].cantidad =  state.productoCarrito[id_product].cantidad + 1
    },
    disminuirCanti(state, id_product) {
      state.productoCarrito[id_product].cantidad =  state.productoCarrito[id_product].cantidad - 1
      if(state.productoCarrito[id_product].cantidad === 0){
        delete state.productoCarrito[id_product] //sirve para eliminar un array del objeto
      }
    },
    agregarDetalleProducto(state, idProd){
      const id = idProd-1
      state.productoCarrito.hasOwnProperty(idProd) ? 
      state.productoDetalle = state.productoCarrito[idProd]  :
      state.productoDetalle = state.productos[id]  
    },
    eliminarCarrito(state){
      state.productoCarrito = []
    }
  },
  actions: {
    async traerProductos({commit}) {
      try {
        const resp = await fetch('api_product.json')
        const datos = await resp.json()
        commit('encontrarProductos', datos)
      } catch (error) {
        console.log(error)
      }
    },

    filtrarProductos({commit,state}, tipo) {
      const filtro = state.productos.filter(producFilt => {
        return producFilt.tipo.includes(tipo)
      })
      commit('encontrarProductosFiltrados', filtro)
    },

    filtrarPorInput({commit,state}, valorTexto) {
      const textoInput = valorTexto.toLowerCase()
      const filtrado = state.productos.filter(productoBuscado => {
        const productoEncontrado = productoBuscado.title.toLowerCase()
        if (productoEncontrado.includes(textoInput)) {
          return productoBuscado
        }
      })
      commit('encontrarProductosFiltrados', filtrado)
    },

    agregarCarrito({commit,state},producto) {
      state.productoCarrito.hasOwnProperty(producto.id) ?
        producto.cantidad = state.productoCarrito[producto.id].cantidad + 1 :
        producto.cantidad = 1
      commit('encontrarProductoCarrito', producto)
    },

    agregarComplemento({commit,state},prodTipo){
     const prodCom = state.productos.filter(producComple => {
        return producComple.tipo.includes(prodTipo)
      })
      commit('encontrarProductosComple', prodCom)
    }
  },
  getters: {

    //comprender mejor lo de cantidad & precio
    totalCantidad(state) {
      return Object.values(state.productoCarrito).reduce((accumulador, {
        cantidad
      }) => accumulador + cantidad, 0)
    },
    totalPrecio(state) {
      return Object.values(state.productoCarrito).reduce((accumulador, {
        cantidad,
        precio
      }) => accumulador + cantidad * precio, 0)
    },
    totalDescuento(state){
      return Object.values(state.productoCarrito).reduce((accumulador, {
        cantidad,cmr,precio
      }) => accumulador + ( cantidad * (cmr ? cmr : precio)), 0)
    },
    descuento(state){
      const descuento = state.productos.descuento;
      const precioini = state.productos.precio;
      const preConDesc = precioini - (precioini * descuento)

      return preConDesc;
    }

  },
  modules: {},
})