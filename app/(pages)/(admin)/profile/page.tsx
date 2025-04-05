import PersonalInfo from "./PersonalInfo";
import WorkDays from "./WorkDays";

const AdminPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <PersonalInfo />
      <WorkDays />
    </div>
  );
};

export default AdminPage;
