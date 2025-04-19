import States from "./States";
import Patients from "./Patients";

const AdminPage = () => {
    return (
        <div className="flex flex-col gap-6">
            <States/>
            <Patients/>
        </div>
    )
}

export default AdminPage;
