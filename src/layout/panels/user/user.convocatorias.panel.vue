<template>
  <div>
    <panel class="p-3 pl-4 rounded-2xl min-h-[470px] space-y-3 min-w-[440px]">
      <div class="pt-3 pl-4">
        <h4 class="text-igp-blue text-2xl font-medium">Convocatorias IGP</h4>
      </div>
      <div class="w-full h-full text-start px-3">
        <p class="text-[#856404] text-sm ml-7">
          <b>Importante: </b>
          Solo puede postular a una convocatoria.
        </p>
      </div>

      <div class="px-3 pt-4">
        <div class="bg-[#F5FAFF]">
          <div class="border-1 sm:rounded-lg">
            <div class="flex flex-nowrap pb-4 bg-[#F5FAFF] py-3 pl-3">
              <label for="table-search" class="sr-only">Search</label>

              <div class="relative mt-1">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                ></div>
                <input
                  type="text"
                  id="table--search"
                  class="focus:outline-none py-2 pl-3 text-sm text-gray-900 border-1 border-gray-300 rounded-lg w-80 bg-igp-white hover:border-igp-blue focus:border-igp-blue active:border-igp-blue"
                  placeholder="Buscar N° Proceso"
                />
              </div>
            </div>
            <table class="w-full text-sm text-left text-gray-500">
              <thead class="text-xs text-gray-700 uppercase bg-[#F5FAFF]">
                <tr>
                  <th
                    scope="col"
                    class="text-igp-blue text-xs font-medium pr-3 pl-3"
                  >
                    PROCESO
                  </th>
                  <th
                    scope="col"
                    class="text-igp-blue text-xs font-medium pr-3 pl-1"
                  >
                    NOMBRE DE CONVOCATORIA
                  </th>

                  <th
                    scope="col"
                    class="text-igp-blue text-xs font-medium text-center max-w-[50px]"
                    data-priority="1"
                  >
                    ESTADO
                  </th>
                  <th
                    scope="col"
                    class="text-igp-blue text-xs font-medium text-center max-w-[200px]"
                  >
                    FECHA DE POSTULACIÓN
                  </th>
                  <th
                    scope="col"
                    class="text-igp-blue text-xs font-medium text-center"
                  >
                    REQUISITOS
                  </th>
                  <th
                    scope="col"
                    class="text-igp-blue text-xs font-medium text-center"
                  ></th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b hover:bg-gray-50">
                  <th class="pl-2 font-normal text-sm">
                    CONVOCATORIA CAS N° 027-2023-IGP
                  </th>
                  <td class="font-normal text-sm text-start">
                    CONVOCATORIA PARA LA CONTRATACIÓN ADMINISTRATIVA DE
                    SERVICIOS DE UN (01) VTECNICO INFORMATICO
                  </td>
                  <td class="font-normal text-sm text-center">Vigente</td>
                  <td class="font-normal text-sm text-center">2023/12/10</td>
                  <td class="font-normal text-sm text-center">
                    <button>ho</button>
                  </td>

                  <td class="text-center">
                    <btnDefault class="px-2 text-xs mt-2"
                      >Postularme</btnDefault
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <br />
      <br />
    </panel>
  </div>
</template>

<script setup>
import panel from "@components/modals/widgets/widgetspanel.vue";
import btnDefault from "@components/modals/buttons/btnDefault.vue";
</script>
<!-- 

<template>
  <div>
    <div class="mb-4">
      <input v-model="filtroProceso" placeholder="Filtrar por Proceso" />
      <select v-model="filtroEstado">
        <option value="">Todos los Estados</option>
        <option value="CAS">CAS</option>
        <option value="Practicante">Practicante</option>
        <option value="otros">Otros</option>
      </select>
      <select v-model="filtroEstado">
        <option value="">Todos los Estados</option>
        <option value="vigente">Vigente</option>
        <option value="finalizado">Finalizado</option>
        <option value="cancelado">Cancelado</option>
      </select>
    </div>
    <table class="w-full">
      <thead>
        <tr>
          <th>nanoLink</th>
          <th>publicador</th>
          <th>subvencion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="convocatoria in convocatorias" :key="convocatoria._id">
          <td>{{ convocatoria.nanoLink }}</td>
          <td>{{ convocatoria.publicador }}</td>
          <td>{{ convocatoria.subvencion }}</td>
        </tr>
      </tbody>
    </table>
    <div class="mt-4">
      <span>{{ paginaActual }} / {{ totalPaginas }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
import axios from "axios";

const filtroProceso = ref("");
const filtroEstado = ref("");
const convocatorias = ref([]);
const paginaActual = ref(1);
const totalPaginas = ref(1);

const cargarConvocatorias = async () => {
  try {
    const response = await axios.get(
      "http://10.10.150.44:5001/api/v1/convocatorias"
    );

    // Supongamos que response.data.convocatoria es un arreglo de convocatorias
    const convocatorias = response.data.convocatoria;

    // Luego, puedes recorrer el arreglo y acceder a las propiedades que necesitas
    convocatorias.forEach((convocatoria) => {
      const _id = convocatoria._id;
      const nanoLink = convocatoria.nanoLink;
      const publicador = convocatoria.publicador;
      const subvencion = convocatoria.subvencion;
    });
    console.log(convocatorias);
  } catch (error) {
    console.error("Error al cargar las convocatorias:", error);
  }
};

onMounted(() => {
  cargarConvocatorias();
});

watchEffect(() => {
  cargarConvocatorias();
});
</script>



 -->
