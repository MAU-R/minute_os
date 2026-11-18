"use client"
export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Cargando...</h1>
            <p className="text-lg mb-8">Por favor, espera mientras se carga la aplicación.</p>
        </div>
    );
}