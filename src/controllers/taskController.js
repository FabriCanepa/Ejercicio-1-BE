export const getTasks = (_, res) => {

    try{
    res.json({
        message: "Tareas Encontradas!"
    })
    } catch(e) {
        console.error(e)
    }
}