let id = 0;
let tipo = "";
let descripcion = "";
let solicitante = "";
let email = "";
let estado = "Pendiente";
let fechaCreacion = "";
let fechaActualizacion = "";

export const crearPQRS = (nuevoTipo, nuevaDescripcion, nuevoSolicitante, nuevoEmail) => {
    id = id + 1;
    tipo = nuevoTipo;
    descripcion = nuevaDescripcion;
    solicitante = nuevoSolicitante;
    email = nuevoEmail;
    estado = "Pendiente";
    fechaCreacion = new Date().toISOString();
    fechaActualizacion = new Date().toISOString();
    
    return {
        id: id,
        tipo: tipo,
        descripcion: descripcion,
        solicitante: solicitante,
        email: email,
        estado: estado,
        fechaCreacion: fechaCreacion,
        fechaActualizacion: fechaActualizacion
    };
};

export const obtenerTodasPQRS = () => {
    if (id === 0) {
        return [];
    }
    
    return [{
        id: id,
        tipo: tipo,
        descripcion: descripcion,
        solicitante: solicitante,
        email: email,
        estado: estado,
        fechaCreacion: fechaCreacion,
        fechaActualizacion: fechaActualizacion
    }];
};

export const obtenerPQRSporId = (buscarId) => {
    if (id === parseInt(buscarId)) {
        return {
            id: id,
            tipo: tipo,
            descripcion: descripcion,
            solicitante: solicitante,
            email: email,
            estado: estado,
            fechaCreacion: fechaCreacion,
            fechaActualizacion: fechaActualizacion
        };
    }
    return null;
};

export const actualizarPQRS = (buscarId, datosActualizados) => {
    if (id !== parseInt(buscarId)) {
        return null;
    }
    
    if (datosActualizados.tipo) tipo = datosActualizados.tipo;
    if (datosActualizados.descripcion) descripcion = datosActualizados.descripcion;
    if (datosActualizados.solicitante) solicitante = datosActualizados.solicitante;
    if (datosActualizados.email) email = datosActualizados.email;
    if (datosActualizados.estado) estado = datosActualizados.estado;
    
    fechaActualizacion = new Date().toISOString();
    
    return {
        id: id,
        tipo: tipo,
        descripcion: descripcion,
        solicitante: solicitante,
        email: email,
        estado: estado,
        fechaCreacion: fechaCreacion,
        fechaActualizacion: fechaActualizacion
    };
};

export const eliminarPQRS = (buscarId) => {
    if (id !== parseInt(buscarId)) {
        return false;
    }
    
    id = 0;
    tipo = "";
    descripcion = "";
    solicitante = "";
    email = "";
    estado = "Pendiente";
    fechaCreacion = "";
    fechaActualizacion = "";
    
    return true;
};