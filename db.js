// db.js - Mini Framework para IndexedDB (Global)

const DB_NAME = "MoodWearDB";
const DB_VERSION = 1;
const STORE_NAME = "favoritos";

/**
 * Inicia o banco de dados e cria a store (tabela) se não existir.
 */
async function iniciarBanco() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                // Criamos a store com um id autoincremento
                db.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
            }
        };

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject("Erro ao abrir o banco de dados.");
    });
}

/**
 * Adiciona um item ao banco de dados.
 */
async function adicionarItem(item) {
    const db = await iniciarBanco();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], "readwrite");
        const store = transaction.objectStore(STORE_NAME);
        const request = store.add(item);

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject("Erro ao adicionar item.");
    });
}

/**
 * Busca todos os itens salvos.
 */
async function buscarItens() {
    const db = await iniciarBanco();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], "readonly");
        const store = transaction.objectStore(STORE_NAME);
        const request = store.getAll();

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject("Erro ao buscar itens.");
    });
}

/**
 * Deleta um item pelo ID.
 */
async function deletarItem(id) {
    const db = await iniciarBanco();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], "readwrite");
        const store = transaction.objectStore(STORE_NAME);
        const request = store.delete(id);

        request.onsuccess = () => resolve(true);
        request.onerror = () => reject("Erro ao deletar item.");
    });
}