export class Sitio {
    public id?:         string;
    public nombre?:     string;
    public tipo?:       string;
    public ciudad?:     string;
    public pais?:       string;
    public direccion?:  string;
    public foto?:       number;

    constructor(    id?:        string,
                    nombre?:    string, 
                    tipo?:      string, 
                    ciudad?:    string, 
                    pais?:      string, 
                    direccion?: string, 
                    foto?:      number  )
    {   
        this.id         = id;
        this.nombre     = nombre;
        this.tipo       = tipo;
        this.ciudad     = ciudad;
        this.pais       = pais;
        this.direccion  = direccion;
        this.foto       = foto;
    }
}
