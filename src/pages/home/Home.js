import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { topbarEg } from "../../dummyData";
import "./home.css";
export default function Home() {
	return (
		<>
			{/* Topbar */}
			<Topbar
			notificationCount= {topbarEg[0].notificationCount}
			imageUrl={topbarEg[0].imageUrl}
			/>
			<div className="homeContainer">
				<Sidebar />
				<Feed />
				<Rightbar />
			</div>
		</>
	);
}
