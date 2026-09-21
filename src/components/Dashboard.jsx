import StatCard from "./StatCard";

function Dashboard() {
    return (
        <main className="dashboard">
            <div className="stats">
                <StatCard title="Applications" value="10" />
                <StatCard title="Interviews" value="5" />
                <StatCard title="Offers" value="2" />
            </div>
        </main>
    )
}

export default Dashboard;