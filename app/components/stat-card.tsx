import React from "react";
import {
    Card, 
    CardContent, 
    CardDescription,
    CardTitle,
    CardHeader

} from "@/components/ui/card"

type stateCardProps = {
    label: string;
    value: string;
    description?: string;
    detail?: string;
}

const labelColors: Record<string, string> = {
    "En Progreso": "text-sky-500",
    "Por Hacer": "text-yellow-500",
    "Reuniones": "text-purple-500",
    "Completadas": "text-green-500"
};

export default function StatCard({label, value, description, detail}: stateCardProps){
const textColor = labelColors[label] ?? "text-gray-500";
    return <Card className="border border-solid border-(#25334A) max-w-1/5 w-full h-full mx-3">
        <CardHeader>
            <CardTitle className="font-semibold">
                {label}
            </CardTitle>
            <CardDescription>
                {description}
            </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-between align-bottom">
            <h3 className="text-5xl font-bold">{value}</h3>
            <p className={`${textColor} mt-auto`} >{detail}</p>
        </CardContent>
    </Card>
}

