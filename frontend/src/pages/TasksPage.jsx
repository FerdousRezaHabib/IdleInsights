import { useState, useEffect } from 'react';
import API from '../services/api';
import { Plus, Trash2 } from 'lucide-react';

const TasksPage = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: '', difficulty: 3 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const res = await API.get('/tasks?status=active');
            setTasks(res.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post('/tasks', newTask);
            setTasks([res.data, ...tasks]);
            setNewTask({ title: '', difficulty: 3 });
        } catch (error) {
            alert(error.response?.data?.message);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this task?')) return;
        try {
            await API.delete(`/tasks/${id}`);
            setTasks(tasks.filter(t => t._id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    const getDifficultyColor = (d) => {
        if (d <= 2) return 'var(--pvi-green)';
        if (d <= 3) return 'var(--pvi-yellow)';
        return 'var(--pvi-red)';
    };

    return (
        <div className="page-container animate-fade-in">
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>Intended Tasks</h1>
                <p className="text-muted" style={{ color: 'var(--color-text-muted)' }}>What you <i>meant</i> to do</p>
            </header>

            <div className="card">
                <form onSubmit={handleCreate} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'end' }}>
                    <div style={{ flex: 1, minWidth: '200px' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Task Title</label>
                        <input
                            type="text"
                            className="input-field"
                            style={{ marginBottom: 0 }}
                            value={newTask.title}
                            onChange={e => setNewTask({ ...newTask, title: e.target.value })}
                            required
                            placeholder="e.g. Write Report"
                        />
                    </div>
                    <div style={{ width: '150px' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Difficulty (1-5)</label>
                        <input
                            type="number"
                            min="1" max="5"
                            className="input-field"
                            style={{ marginBottom: 0 }}
                            value={newTask.difficulty}
                            onChange={e => setNewTask({ ...newTask, difficulty: parseInt(e.target.value) })}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ height: '42px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Plus size={18} /> Add Task
                    </button>
                </form>
            </div>

            <div className="task-list">
                {loading ? <p>Loading...</p> : tasks.length === 0 ? <p className="text-muted">No active tasks. Add one above!</p> : (
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {tasks.map(task => (
                            <div key={task._id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
                                <div>
                                    <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{task.title}</h3>
                                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                                        <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.5rem', borderRadius: '4px', background: 'rgba(255,255,255,0.1)' }}>
                                            Difficulty: <span style={{ color: getDifficultyColor(task.difficulty) }}>{task.difficulty}</span>
                                        </span>
                                    </div>
                                </div>
                                <button onClick={() => handleDelete(task._id)} className="btn" style={{ background: 'transparent', color: 'var(--color-text-muted)' }}>
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TasksPage;
