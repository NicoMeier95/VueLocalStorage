const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Rutina de Gym',
        tareas: [],
        nuevaTarea: '',
    },
    methods: {
        agregarTarea() {
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea = '';
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        editarTarea(index) {
            this.tareas[index].estado = true;
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        eliminarTarea(index) {
            this.tareas.splice(index, 1);
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        }
    },
    created() {
        let datosLS = JSON.parse(localStorage.getItem('gym-vue'));
        if (datosLS == null) {
            this.tareas = []
        } else {
            this.tareas = datosLS
        }
    },

})