import {Router} from 'express';
import {createTodo, getTodos, updateTodos, delTodos} from '../controllers/todo'

const router = Router();

router.post('/', createTodo);
router.get('/', getTodos);
router.patch('/:id', updateTodos);
router.delete('/:id', delTodos);

export default router;