import TaskModel from '../models/taskSchema.js';

export const getTasks = async (_, res) => {
  try {
    const data = await TaskModel.find({ isActive: true });

    res.json({
      data,
      message: data.length > 0 ? 'Tareas encontradas' : 'Listado vacío',
    });
  } catch (e) {
    res.status(500).json({
      message: `Ocurrió un error en el servidor: ${e}`,
    });
  }
};

export const postTask = async (req, res) => {
  const { body } = req;

  const newTask = new TaskModel({
    title: body.title,
    isActive: true,
  });

  try {
    await newTask.save();

    res.status(201).json({
      message: 'Tarea creada exitosamente!',
    });
  } catch (e) {
    res.status(500).json({
      data: null,
      message: `Ocurrió un error en el servidor: ${e}`,
    });
  }
};

export const putTask = async (req, res) => {
  const {
    params: { id },
    body,
  } = req;

  try {
    const action = await TaskModel.updateOne({ _id: id }, body);

    if (action.modifiedCount === 0) {
      res.status(404).json({
        data: null,
        message: 'Tarea no encontrada',
      });
      return;
    }
    res.json({
      message: 'Tarea actualizada',
    });
  } catch (e) {
    res.status(500).json({
      data: null,
      message: `Ocurrió un error actualizando la tarea. "${e}"`,
    });
  }
};

export const deleteTask = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const action = await TaskModel.updateOne({ _id: id }, { isActive: false });

    if (action.modifiedCount === 0) {
      res.status(404).json({
        data: null,
        message: 'Tarea no encontrada',
      });
      return;
    }

    res.json({
      message: 'Tarea eliminada!',
    });
  } catch (e) {
    res.status(500).json({
      data: null,
      message: `Ocurrió un eliminando la tarea. "${e}"`,
    });
  }
};
