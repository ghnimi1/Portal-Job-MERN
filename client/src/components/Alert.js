import React from 'react';

function Alert({ error }) {
    return (
        <div className="alert alert-danger d-flex align-items-center mt-2" role="alert">
            <svg className="bi flex-shrink-0 me-2"
                width="24" height="24" role="img"
                aria-label="Danger:"></svg>
            <div>
                {error}
            </div>
        </div>
    );
}

export default Alert;