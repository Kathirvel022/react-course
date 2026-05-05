import React from "react";

function StatusMessage({status}) {

    const renderMessage = () => {
        switch (status) {
            case "loading":
                return <p>loading...</p>;
            
            case "success":
                return <p>Data loaded successfully</p>;

            case "error":
                return <p>Something went wrong</p>;

            default:
                return <p>Unknown status</p>;
        }
    };
    return(
        <div>
            <h2>Status Check</h2>
            {renderMessage()}
        </div>
    );
}
export default StatusMessage;