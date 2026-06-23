import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesDay } from "../schedules/load.js";
import "dayjs/locale/en";
const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

const today = dayjs().format("YYYY-MM-DD");

selectedDate.value = today;

selectedDate.min = today;

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const name = clientName.value.trim();

    if (!name) {
      return alert("Por favor, preencha o campo nome");
    }

    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Por favor, selecione um horário");
    }

    const [hour] = hourSelected.innerText.split(":");
    const id = new Date().getTime().toString();
    const when = dayjs(selectedDate.value).add(hour, "hour");

    await scheduleNew({ id, name, when });
    await schedulesDay();
    clientName.value = "";
  } catch (error) {
    alert("Não foi possível realizar o agendamento");
    console.error(error);
  }
};
