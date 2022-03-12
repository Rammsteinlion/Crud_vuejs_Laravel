<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header"><h4>Editar Prestamo</h4></div>
                <div class="card-body">
                    <form @submit.prevent="actualizar">
                         <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Nombre</label>
                                    <input type="text" class="form-control" v-model="prestamo.nombre">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Monto</label>
                                    <input type="text" class="form-control" v-model="prestamo.monto">
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Guardar</button>
                            </div>
                        </div>                          
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"editar-prestamo",
    data(){
        return {
            prestamo:{
                nombre:"",
                monto:""
            }
        }
    },
    mounted(){
        this.mostrarPrestamo()
    },
    methods:{
        async mostrarPrestamo(){
            await this.axios.get(`/api/prestamo/${this.$route.params.id}`).then(response=>{
                const { nombre, monto } = response.data
                this.prestamo.nombre = nombre
                this.prestamo.monto = monto
            }).catch(error=>{
                console.log(error)
            })
        },
        async actualizar(){
            await this.axios.put(`/api/prestamo/${this.$route.params.id}`,this.prestamo).then(response=>{
                this.$router.push({name:"mostrarprestamo"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>