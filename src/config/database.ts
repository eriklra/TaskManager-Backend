const delay = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export const connectDatabase = async () => {
    console.log("Esperando 10 segundos...");
    await delay(10000); // 10,000 milisegundos = 10 segundos
    console.log("¡Listo!");
}