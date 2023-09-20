<template>
  <div>
    <panel class="p-3 pl-4 rounded-2xl min-h-[470px] space-y-3 min-w-[440px]">
      <div class="pt-3 pl-4">
        <h4 class="text-igp-blue text-2xl font-medium">Mis Datos personales</h4>
      </div>
      <div class="w-full h-full text-start">
        <p class="text-[#856404] text-sm px-8">
          <b>Importante: </b>

          Dentro de este formulario encontrará algunos campos previamente
          rellenados directamente desde la RENIEC, por lo tanto no podrán ser
          modificados. Asimismo todos los datos que registre están bajo
          declaración jurada , por lo que podrán ser verificados por la Unidad
          de RRHH según lo considere.
        </p>
      </div>
      <div>
        <span class="pl-4 text-lg font-normal text-igp-blue"
          >Datos Generales:</span
        >
        <div class="grid grid-cols-12 gap-3 px-3 pt-3 space-y-0">
          <div class="col-span-3">
            <Frm id="dni" place="DNI"> DNI</Frm>
          </div>
          <div class="col-span-3">
            <Frm id="nombres" place="Nombres"> Nombres</Frm>
          </div>
          <div class="col-span-3">
            <Frm id="paterno" place="Apellido Paterno"> Apellido Paterno</Frm>
          </div>
          <div class="col-span-3">
            <Frm id="materno" place="Apellido Materno"> Apellido Materno</Frm>
          </div>
          <div class="col-span-3">
            <Frm id="ruc" place="RUC"> RUC</Frm>
          </div>
          <div class="col-span-1">
            <Frm id="bandera" place="+51">Prefix</Frm>
          </div>
          <div class="col-span-2">
            <Frm id="celular" place="celular"> Celular</Frm>
          </div>
          <div class="col-span-6">
            <Frm id="email" place="email"> Email</Frm>
          </div>
          <div class="col-span-3">
            <Frm id="fechanac" place="01/01/2000">Fecha de Nacimiento</Frm>
          </div>
          <div class="col-span-3">
            <FrmSel id="estadoCivil">
              <template v-slot:name> Estado civil </template>
              <option selected>Soltero</option>
              <option>Casado</option>
              <option>Divorciado</option>
            </FrmSel>
          </div>
        </div>
      </div>
      <div>
        <span class="pl-4 text-lg font-normal text-igp-blue"
          >Lugar de nacimiento:</span
        >
        <div class="grid grid-cols-12 gap-3 px-3 pt-3 space-y-0">
          <div class="col-span-3">
            <FrmSel id="departamentoNac">
              <template v-slot:name> Departamento </template>
              <option selected>Lima</option>
              <option>VMT</option>
              <option>SURCO</option>
            </FrmSel>
          </div>
          <div class="col-span-3">
            <FrmSel id="provinciaNac">
              <template v-slot:name> Provincia </template>
              <option selected>Lima</option>
              <option>VMT</option>
              <option>SURCO</option>
            </FrmSel>
          </div>
          <div class="col-span-3">
            <FrmSel id="distritoNac">
              <template v-slot:name> Departamento </template>
              <option selected>Jesus María</option>
              <option>VMT</option>
              <option>SURCO</option>
            </FrmSel>
          </div>
        </div>
      </div>
      <div>
        <span class="pl-4 text-lg font-normal text-igp-blue"
          >Lugar de domicilio:</span
        >
        <div class="grid grid-cols-12 gap-3 px-3 pt-3 space-y-0">
          <div class="col-span-3">
            <FrmSel id="departamentoAct">
              <template v-slot:name> Departamento </template>
              <option selected>Lima</option>
              <option>VMT</option>
              <option>SURCO</option>
            </FrmSel>
          </div>
          <div class="col-span-3">
            <FrmSel id="provinciaAct">
              <template v-slot:name> Provincia </template>
              <option selected>Lima</option>
              <option>VMT</option>
              <option>SURCO</option>
            </FrmSel>
          </div>
          <div class="col-span-3">
            <FrmSel id="distritoAct">
              <template v-slot:name> Departamento </template>
              <option selected>Villa María del Triunfo</option>
              <option>VMT</option>
              <option>SURCO</option>
            </FrmSel>
          </div>
          <div class="col-span-3">
            <FrmSel id="urbanizacionAct">
              <template v-slot:name> Tipo Urb </template>
              <option selected>Jirón</option>
              <option>Calle</option>
              <option>Avenida</option>
              <option>Manzana</option>
            </FrmSel>
          </div>
          <div class="col-span-12">
            <Frm id="direccionAct" place="Dirección actual">
              Dirección (incluir calle/psj/jiron/urb/mz)</Frm
            >
          </div>
        </div>
      </div>
      <div>
        <span class="pl-4 text-lg font-normal text-igp-blue">Otros:</span>
        <div class="grid grid-cols-12 gap-3 px-3 pt-3 space-y-0">
          <div class="col-span-3">
            <FrmSel id="discapacidad">
              <template v-slot:name> Persona con discapacidad </template>
              <option selected>No</option>
              <option>Si</option>
            </FrmSel>
          </div>
          <div class="col-span-3">
            <FrmSel id="tipoDiscapacidad">
              <template v-slot:name> Tipo de discapacidad </template>
              <option selected>[Seleccionar]</option>
              <option>VMT</option>
              <option>SURCO</option>
            </FrmSel>
          </div>
          <div class="col-span-3">
            <FrmSel id="ffaa">
              <template v-slot:name> Licencia FF.AA. </template>
              <option selected>No</option>
              <option>Si</option>
              <option>SURCO</option>
            </FrmSel>
          </div>
          <div class="col-span-3">
            <FrmSel id="tipoffaa">
              <template v-slot:name> Tipo FF.AA. </template>
              <option selected>[Seleccionar]</option>
              <option>VMT</option>
              <option>SURCO</option>
            </FrmSel>
          </div>
        </div>
      </div>
      <div>
        <span class="pl-4 text-lg font-normal text-igp-blue">Fotografía:</span>
        <div class="grid grid-cols-12 px-3 pt-3">
          <div class="col-span-12">
            <div
              class="flex items-center content-center justify-between p-2 pl-4 border-1 rounded-lg border-gray-300 shadow-sm"
            >
              <!-- Botón "Seleccionar archivo" -->
              <label class="pl-3 text-sm font-medium text-igp-dark">
                Adjunto archivo:
                <span class="text-igp-blue ml-5"> {{ archivoInfo }}</span>
                <span class="ml-5 text-igp-semaforo-500">
                  {{ archivoPeso }}
                </span>
              </label>
              <label
                for="fotoDatosP"
                class="cursor-pointer p-2 px-4 hover:bg-igp-dark-50 border-igp-dark border-1 text-sm rounded-lg bg-igp-white-50"
                >Selecciona archivo</label
              >
              <!-- Input de archivo -->
              <input
                type="file"
                id="fotoDatosP"
                @change="handleFileChange"
                accept=".jpg, .jpeg, .png, "
                class="hidden"
              />
            </div>

            <small class="text-igp-blue-500"
              >EL archivo debe estar en formato jpg, png o gif y no debe pesar
              mas de 5 Mb.</small
            >
          </div>
        </div>
        <BtnDefault class="px-5 py-3 ml-3 mt-4 text-sm">
          Guardar cambios</BtnDefault
        >
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
