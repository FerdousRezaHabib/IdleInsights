import { useParams, Link } from 'react-router-dom';

const ModePage = () => {
    const { modeId } = useParams();

    // Mapping modes to components would go here.
    // For MVP, simple placeholders.

    return (
        <div className="page-container animate-fade-in" style={{ textAlign: 'center', marginTop: '4rem' }}>
            <h1>Mode: {modeId.replace(/_/g, ' ')}</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)' }}>
                This specific intervention tool is being initialized...
            </p>

            <div className="card" style={{ maxWidth: '500px', margin: '2rem auto', textAlign: 'left' }}>
                <h3>Recommended Actions:</h3>
                <ul>
                    <li>Break down your task into 5 minute chunks</li>
                    <li>Set a timer for 10 minutes (just to start)</li>
                    <li>Close all browser tabs except the one you need</li>
                </ul>
            </div>

            <Link to="/dashboard" className="btn btn-primary">Back to Dashboard</Link>
        </div>
    );
};

export default ModePage;
