import StatCard from "./StatCard";

function Dashboard() {
    return (
        <main>
            <div>
                <StatCard title="Applications" value="10" />
                <StatCard title="Interviews" value="5" />
                <StatCard title="Offers" value="2" />
            </div>
        </main>
    )
}

export default Dashboard;