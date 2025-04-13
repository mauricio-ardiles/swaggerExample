import { Router, Request, Response } from 'express';
import { getAllUsers, createUser } from '../services/userService';

const router = Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
router.get('/', (req: Request, res: Response) => {
  res.json(getAllUsers());
});

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Crear un nuevo usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Carla
 *     responses:
 *       201:
 *         description: Usuario creado
 */
router.post('/', (req: Request, res: Response) => {
  const user = createUser(req.body.name);
  res.status(201).json(user);
});

export default router;