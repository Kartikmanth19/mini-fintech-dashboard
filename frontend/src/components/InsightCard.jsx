function InsightCard({ insight }) {
    return (
        <div className="card insight-card">
            <h2>Financial Insight</h2>

            <p>
                {insight ||
                    "No insights available yet."}
            </p>
        </div>
    );
}

export default InsightCard;