<template>
  <div>
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th
            v-for="(column, index) in columns"
            :key="index"
            @click="sortBy(column.field)"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
          >
            {{ column.label }}
            <span v-if="sortColumn === column.field">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 inline"
                :class="{ 'rotate-180': sortDirection === 'desc' }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </span>
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="item in sortedData" :key="item.id">
          <td
            v-for="(column, index) in columns"
            :key="index"
            class="px-6 py-4 whitespace-nowrap"
          >
            {{ item[column.field] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const columns = ref([
  { label: "Nombre", field: "name" },
  { label: "Edad", field: "age" },
  { label: "Correo Electrónico", field: "email" },
]);

const data = ref([
  { id: 1, name: "John Doe", age: 30, email: "john@example.com" },
  { id: 2, name: "Jane Smith", age: 25, email: "jane@example.com" },
  { id: 3, name: "Bob Johnson", age: 40, email: "bob@example.com" },
]);

const sortColumn = ref("");
const sortDirection = ref("asc");

const sortedData = computed(() => {
  if (!sortColumn.value) return data.value;

  return [...data.value].sort((a, b) => {
    const fieldA = a[sortColumn.value];
    const fieldB = b[sortColumn.value];

    if (fieldA < fieldB) {
      return sortDirection.value === "asc" ? -1 : 1;
    }
    if (fieldA > fieldB) {
      return sortDirection.value === "asc" ? 1 : -1;
    }
    return 0;
  });
});

function sortBy(column) {
  if (sortColumn.value === column) {
    sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
  } else {
    sortColumn.value = column;
    sortDirection.value = "asc";
  }
}
</script>

<style scoped>
/* Aquí puedes agregar estilos personalizados si es necesario */
</style>
