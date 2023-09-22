<template>
  <div>
    <panel class="p-3 pl-4 rounded-2xl min-h-[470px] space-y-3 min-w-[440px]">
      <div class="pt-3 pl-4">
        <h4 class="text-igp-blue text-2xl font-medium">Mis postulaciones</h4>
      </div>

      <div class="px-3">
        <div class="bg-[#F5FAFF]">
          <div class="border-1 sm:rounded-lg">
            <div class="flex flex-nowrap pb-4 bg-[#F5FAFF] py-3 pl-5">
              <label for="table-search" class="sr-only">Search</label>

              <div class="relative mt-1">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <svg
                    class="w-4 h-4 text-igp-blue"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="table--search"
                  class="focus:outline-none py-2 pl-10 text-sm text-gray-900 border-1 border-gray-300 rounded-lg w-80 bg-igp-white hover:border-igp-blue focus:border-igp-blue active:border-igp-blue"
                  placeholder="Buscar"
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
                    class="text-igp-blue text-xs font-medium text-center"
                    data-priority="1"
                  >
                    NOMBRE DE CONVOCATORIA
                  </th>

                  <th
                    scope="col"
                    class="text-igp-blue text-xs font-medium text-center"
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
                  >
                    ESTADO
                  </th>
                  <th
                    scope="col"
                    class="text-igp-blue text-xs font-medium text-center"
                  ></th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b hover:bg-gray-50">
                  <th class="pl-2 font-normal text-sm ml">
                    CONVOCATORIA CAS <br />N° 027-2022-IGP
                  </th>
                  <td class="font-normal text-sm text-center">
                    CONVOCATORIA PARA LA CONTRATACIÓN ADMINISTRATIVA DE
                    <br />SERVICIOS DE UN (01) VTECNICO INFORMATICO
                  </td>
                  <td class="font-normal text-sm text-center">2023/08/02</td>

                  <td class="font-normal text-sm text-center">
                    <a href="#">accion</a>
                  </td>
                  <td class="font-normal text-sm text-center">vigente</td>

                  <td class="text-center">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >Ver mi proceso</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <br />
    </panel>
  </div>
</template>

<script setup>
import panel from "@components/modals/widgets/widgetspanel.vue";
</script>
