<template>
  <div class="space-y-4">
    <panel class="p-3 grid grid-cols-4 w-full">
      <div class="relative col-span-1">
        <div class="relative">
          <img
            :src="preview_img"
            class="h-20 w-20 object-cover rounded-full"
            alt="Current profile photo"
          />
          <label
            for="fileInput"
            class="cursor-pointer absolute bottom-0 p-0.5 left-14 shadow-black shadow-xl rounded-full bg-white"
          >
            <svg
              width="20px"
              height="20px"
              viewBox="-1.68 -1.68 27.36 27.36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.8814 4.5H9.11862L7.46862 7.03125H3.75L3 7.78125V18.75L3.75 19.5H20.25L21 18.75V7.78125L20.25 7.03125H16.5314L14.8814 4.5ZM8.28138 8.53125L9.93138 6H14.0686L15.7186 8.53125H19.5V18H4.5V8.53125H8.28138ZM9.75 12.75C9.75 11.5074 10.7574 10.5 12 10.5C13.2426 10.5 14.25 11.5074 14.25 12.75C14.25 13.9926 13.2426 15 12 15C10.7574 15 9.75 13.9926 9.75 12.75ZM12 9C9.92893 9 8.25 10.6789 8.25 12.75C8.25 14.8211 9.92893 16.5 12 16.5C14.0711 16.5 15.75 14.8211 15.75 12.75C15.75 10.6789 14.0711 9 12 9Z"
                  fill="#0032ff"
                ></path>
              </g>
            </svg>
          </label>
          <input type="file" id="fileInput" @change="loadFile" class="hidden" />
        </div>
      </div>
      <div class="col-span-3 flex flex-col">
        <span class="text-igp-blue text-sm font-normal">Bienvenido </span>
        <span class="text-base font-light">Cesar Contreras Serpa</span>
        <span class="text-base font-normal"
          >DNI: <span class="text-base">70511289</span>
        </span>
        <span class="text-igp-semaforo-50 text-[0.625rem] font-normal"
          >DNI validado por la Reniec</span
        >
      </div>
    </panel>
  </div>
</template>

<script setup>
import panel from "../../../components/modals/widgets/widgetspanel.vue";
import { ref } from "vue";

const preview_img = ref(
  "https://lh3.googleusercontent.com/a-/AFdZucpC_6WFBIfaAbPHBwGM9z8SxyM1oV4wB4Ngwp_UyQ=s96-c"
);

const loadFile = (event) => {
  const input = event.target;
  const file = input.files[0];

  if (file) {
    preview_img.value = URL.createObjectURL(file);

    // Free memory when the image is loaded
    preview_img.onload = () => {
      URL.revokeObjectURL(preview_img.value);
    };
  }
};
</script>
