<template>
  <div>
    <panel class="p-3 pl-4 rounded-2xl min-h-[470px] space-y-3 min-w-[440px]">
      <div class="pt-3 pl-4">
        <h4 class="text-igp-blue text-2xl font-medium">
          Configuración de mi cuenta
        </h4>
      </div>
      <p class="text-igp-dark text-sm pl-5">
        La contraseña actual y el correo electrónico actual
      </p>
      <div class="pt-2">
        <div class="grid grid-cols-12 gap-3 px-3 space-y-0">
          <div class="col-span-4">
            <Frm id="pass" type="password" place="********">Contraseña</Frm>
          </div>
          <div class="col-span-4">
            <Frm id="correo" type="email" place="Correo electrónico actual"
              >Correo</Frm
            >
          </div>
          <div class="col-span-4"></div>
        </div>
      </div>
      <div class="pt-2">
        <span class="pl-4 text-lg font-normal text-igp-blue"
          >Cambiar contraseña</span
        >
        <p class="text-[#856404] text-sm px-8 pt-3 pb-2">
          <b>Recuerda: </b>

          Si es la primera vez que accedes a nuestro plataforma web , es
          importante establecer una nueva contraseña para mayor seguridad.
        </p>
        <div class="grid grid-cols-12 gap-3 px-3 space-y-0">
          <div class="col-span-4">
            <Frm id="newpass" type="password" place="********"
              >Nueva Contraseña</Frm
            >
          </div>
          <div class="col-span-4">
            <Frm id="renewpass" type="password" place="********"
              >Repite tu nueva Contraseña</Frm
            >
          </div>
          <div class="col-span-3">
            <BtnDefault class="px-5 ml-3 mt-2 text-sm">
              Guardar cambios
            </BtnDefault>
          </div>
        </div>
      </div>
      <div class="pt-2">
        <span class="pl-4 text-lg font-normal text-igp-blue"
          >Cambiar mi correo electrónico</span
        >
        <p class="text-[#856404] text-sm px-8 pt-3 pb-2">
          <b>Importante:</b>

          Cuando cambies el email, te llegará un correo electrónico para que
          actives tu cuenta.
        </p>
        <div class="grid grid-cols-12 gap-3 px-3 space-y-0">
          <div class="col-span-4">
            <Frm id="newCorreo" type="email" place="ejemplo@tudominio.com"
              >Correo</Frm
            >
          </div>
          <div class="col-span-4">
            <Frm id="reNewCorreo" type="email" place="ejemplo@tudominio.com"
              >Correo</Frm
            >
          </div>
          <div class="col-span-3">
            <BtnDefault class="px-5 ml-3 mt-2 text-sm">
              Guardar cambios
            </BtnDefault>
          </div>
        </div>
      </div>
      <div class="pt-2">
        <span class="pl-4 text-lg font-normal text-igp-blue"
          >Eliminar mi cuenta</span
        >
        <div class="bg-red-100 flex items-center content-center mb-3 mt-2 ml-4">
          <p class="text-red-700 text-sm px-3 pt-3">
            <b>Importante: </b>
            Si eliminas tu cuenta , no podrás postularte a más convocatorias ni
            revisar tus postulaciones. Esta acción es irreversible.
          </p>
        </div>
        <div class="grid grid-cols-12 gap-3 px-3 space-y-0">
          <div class="col-span-4">
            <Frm id="delContra" type="password" place="********"
              >Ingresa tu Contraseña</Frm
            >
          </div>
          <div class="col-span-4">
            <Frm id="renewpass" place="Motivos personales"
              >¿Por qué quieres eliminar tu cuenta?</Frm
            >
          </div>
          <div class="col-span-3">
            <BtnDefault class="px-5 ml-3 mt-2 text-sm">
              Guardar cambios
            </BtnDefault>
          </div>
        </div>
      </div>
    </panel>
  </div>
</template>

<script setup>
import panel from "@components/modals/widgets/widgetspanel.vue";
import Frm from "../../../components/modals/imputs/frm.vue";
import FrmSel from "../../../components/modals/imputs/frmSelect.vue";
import { ref } from "vue";
import BtnDefault from "@components/modals/buttons/btnDefault.vue";

const archivoInfo = ref("Ningún archivo seleccionado");
const archivoPeso = ref("");

const handleFileChange = (event) => {
  const fileInput = event.target;
  if (fileInput.files.length > 0) {
    const selectedFile = fileInput.files[0];
    const fileSize = selectedFile.size / (1024 * 1024);
    if (fileSize <= 5) {
      archivoInfo.value = `${selectedFile.name}`;
      archivoPeso.value = `| ${fileSize.toFixed(2)} Mb`;
    } else {
      alert(
        "El archivo es demasiado grande. El tamaño máximo permitido es de 5 MB."
      );
      fileInput.value = "";
      archivoInfo.value = "Ningún archivo seleccionado";
    }
  } else {
    archivoInfo.value = "Ningún archivo seleccionado";
  }
};
</script>
