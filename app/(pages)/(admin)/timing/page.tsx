import MegaCalendar from "./MegaCalendar";
import FreeTime from "./FreeTime";

const AdminPage = () => {
    return (
        <div className="flex flex-col gap-12 mb-6">
            <MegaCalendar/>
            <FreeTime/>
        </div>
    )
}

export default AdminPage;
