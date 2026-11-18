'use client'
export default function Error() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Error</h1>
            <p className="text-lg mb-8">Ha ocurrido un error inesperado.</p>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => window.location.reload()}
            >
                Recargar página
            </button>
        </div>
    );
}