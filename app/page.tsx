import Image from "next/image";
import StatCard from "./components/stat-card";

const labels = [
  {
    "label": "Reuniones",
    "detail": "3 esta semana",
    "description": "Todas las reuniones",
    "value": "09"
  },
    {
    "label": "Por Hacer",
    "detail": "5 vencen pronto",
    "description": "Tickets abiertos",
    "value": "12"
    },
    {
    "label": "En Progreso",
    "detail": "Tickets ya siendo trabajados",
    "description": "Tickets que se estan trabajando",
    "value": "16"
  },
  {
    "label": "Completadas",
    "detail": "3 esta semana",
    "description": "Tickets completados totales",
    "value": "56"
  },
]



export default function Home() {
  return (
    <>
    <div className="w-full p-5 flex justify-between flex-wrap ">
      {labels.map((label) => (
        <StatCard
          key={label.label}
          label={label.label}
          detail={label.detail}
          description={label.description}
          value={label.value}
        />
      ))}
    </div>

    </>
  );
}
