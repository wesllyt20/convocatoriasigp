<template>
  <div>
    <panel class="p-3 pl-4 rounded-2xl min-h-[470px] space-y-3 min-w-[440px]">
      <div class="pt-3 pl-4">
        <h4 class="text-igp-blue text-2xl font-medium">
          Mi Perfil Profesional
        </h4>
      </div>
      <div class="w-full h-full text-start px-3">
        <h4 class="text-igp-blue text-lg font-normal">Educación Académica:</h4>
        <p class="text-igp-dark text-sm">
          Ingrese su nivel educativo y/o grado(s)/situación académica y/o
          colegiatura y habilitación profesional. Se contará desde el egreso de
          la formación correspondiente. Presentar constancia de egreso, caso
          contrario se contabilizará desde la fecha indicada en el diploma de
          grado y/o título que adjunte.
        </p>
        <p class="text-[#856404] text-sm">
          <b>Importante: </b>

          Es importante que la información que escanee o adjunte de su
          documentación debe estar clara y legible, porque es un requisito
          indispensable para la evaluación..
        </p>
      </div>
      <div class="px-3">
        <div class="bg-[#F5FAFF]">
          <div class="border-1 sm:rounded-lg">
            <div class="flex flex-nowrap pb-4 bg-[#F5FAFF] py-3 pl-5">
              <label for="table-search" class="sr-only">Search</label>
              <button
                type="button"
                class="bg-igp-white focus:outline-none rounded-lg px-3 py-2 mt-1 mr-2 border-1 border-gray-300 hover:border-igp-blue focus:border-igp-blue active:border-igp-blue"
              >
                <svg
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.79 1.61564C12.3029 0.959102 11.8351 0 11.002 0H1.00186C0.168707 0 -0.299092 0.959101 0.213831 1.61564L5.03983 7.72867C5.1772 7.90449 5.25181 8.1212 5.25181 8.34432V13.7961C5.25181 13.9743 5.46724 14.0635 5.59323 13.9375L6.60536 12.9254C6.69913 12.8316 6.75181 12.7044 6.75181 12.5718V8.34432C6.75181 8.1212 6.82643 7.90449 6.96379 7.72867L11.79 1.61564Z"
                    fill="#0032FF"
                  />
                </svg>
              </button>
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
                  <th scope="col" class="w-4 pl-2 pt-3 pr-2 pb-3">
                    <div class="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-all-search" class="sr-only"
                        >checkbox</label
                      >
                    </div>
                  </th>
                  <th
                    scope="col"
                    class="text-igp-blue text-xs font-medium pr-3 pl-1"
                  >
                    #
                  </th>

                  <th
                    scope="col"
                    class="text-igp-blue text-xs font-medium text-center"
                    data-priority="1"
                  >
                    GRADO ACADÉMICO
                  </th>
                  <th
                    scope="col"
                    class="text-igp-blue text-xs font-medium text-center"
                  >
                    INSTITUCIÓN
                  </th>
                  <th
                    scope="col"
                    class="text-igp-blue text-xs font-medium text-center"
                  >
                    PROFESIÓN
                  </th>
                  <th
                    scope="col"
                    class="text-igp-blue text-xs font-medium text-center"
                  >
                    FECHA DE EMISION
                  </th>
                  <th
                    scope="col"
                    class="text-igp-blue text-xs font-medium text-center"
                  >
                    CIUDAD/PAIS
                  </th>
                  <th
                    scope="col"
                    class="text-igp-blue text-xs font-medium text-center"
                  >
                    ACCIONES
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b hover:bg-gray-50">
                  <td class="w-4 pl-2 pt-3 pr-2 pb-3">
                    <div class="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      <label for="checkbox-table-search-1" class="sr-only"
                        >checkbox</label
                      >
                    </div>
                  </td>
                  <th class="pl-2 font-normal text-sm">1</th>
                  <td class="font-normal text-sm text-center">Bachiller</td>
                  <td class="font-normal text-sm text-center">
                    Universidad mayor de San marcos
                  </td>
                  <td class="font-normal text-sm text-center">
                    Ingenieria de sistemas
                  </td>
                  <td class="font-normal text-sm text-center">2010-12-10</td>
                  <td class="font-normal text-sm text-center">
                    Lima<br />
                    Perú
                  </td>
                  <td class="text-center">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >Edit</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </panel>
  </div>
</template>

<script setup>
import panel from "@components/modals/widgets/widgetspanel.vue";
</script>
