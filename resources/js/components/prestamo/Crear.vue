<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                 <div class="card">
                     <br>
                     <div class="card-header"><h4>Crear Prestamo</h4></div>
                 </div>
                 <div class="card-body">
                     <form @submit.prevent="crear">
                         <div class="row">
                             <div class="col-12 mb-2">
                                 <div class="form-group">
                                     <label for="">Nombre</label>
                                     <input type="text" class="form-control" v-model="prestamo.nombre" >
                                 </div>
                             </div>
                             <div class="col-12 mb-2">
                                 <div class="form-floating">
                                     <label for="">Monto</label>
                                     <input type="text" class="form-control" v-model="prestamo.monto" >
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


export default({
 name:"crear-prestamo",
 data(){
     return{
         prestamo:{
             nombre:"",
             monto:""
         }
     }
 },
 methods:{
    async crear(){
       await  this.axios.post('/api/prestamo',this.prestamo)
         .then(responsive=>{
             this.$router.push({name:"mostrarPrestamo"})
         })
         .catch(error =>{
             console.log(error)
         })
     }
 }
})
</script>
