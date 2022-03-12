        <template>
  <div class="row">
    <div class="col-lg-12 mb-2">
      <router-link :to="{ name: 'crearprestamo' }" class="btn btn-success"
        ><i class="fas fa-plus-circle"></i
      ></router-link>
    </div>

    <div class="col-12">
      <div class="table-responsive">
        <table class="table table-border">
          <thead class="bg-primary text-white">
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Monto</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="prestamo in prestamo" :key="prestamo.id">
              <td>{{ prestamo.id }}</td>
              <td>{{ prestamo.nombre }}</td>
              <td>{{ prestamo.monto }}</td>
              <td>
                <router-link :to="{ name: 'editarprestamo', params: { id: prestamo.id } }" class="btn btn-info" ><i class="far fa-edit"></i></router-link>
                <a type="button" @click="borrarPrestamo(prestamo.id)" class="btn btn-danger"><i class="fas fa-trash"></i></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
        <script>
export default {
  name: "prestamo",
  data() {
    return {
      prestamo: [],
    };
  },
  mounted() {
    this.mostrarPrestamo();
  },
  methods: {
    async mostrarPrestamo() {
      await this.axios
        .get("./api/prestamo")
        .then((response) => {
          this.prestamo = response.data;
        })
        .catch((error) => {
          this.prestamo = [];
        });
    },
        borrarPrestamo(id){
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`/api/prestamo/${id}`).then(response=>{
                    this.mostrarPrestamo()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>
