<template>
  <div class="flex nowrap">
    <div class="pr-2 flex flex-col items-end">
      <label class="text-igp-dark-300 text-sm font-semibold"
        >Cesar Contreras Serpa
      </label>
      <label class="text-base font-semibold">OTIDG</label>
    </div>
    <div>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        class="bg-white rounded-lg border-2 border-igp-dark-100 px-1 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        <svg
          width="34px"
          height="34px"
          viewBox="-1.92 -1.92 27.84 27.84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="rgba(25, 32, 36, 0.67)"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="rgba(25, 32, 36, 0.67)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
      </button>
      <!-- Dropdown menu -->
      <div
        id="dropdown"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Dashboard</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Settings</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Earnings</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Sign out</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
