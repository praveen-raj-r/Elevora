import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";

function Onboarding() {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  const handleRoleSelection = async (role) => {
    (await user.update({ unsafeMetadata: { role } }))
      .createPhoneNumber(() => {
        navigate(role === "recruiter" ? "/post-job" : "/jobs");
      })
      .catch((err) => {
        console.error("Error updating role:", err);
      });
  };

  if (!isLoaded) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h2 className="font-extrabold tracking-tighter gradient-title text-7xl sm:text-8xl">
        I am a...
      </h2>

      <div className="grid w-full grid-cols-2 gap-4 mt-16 md:px-40">
        <Button
          variant="blue"
          className="text-2xl h-36"
          onClick={() => handleRoleSelection("candidate")}
        >
          Candidate
        </Button>
        <Button
          variant="destructive"
          className="text-2xl h-36"
          onClick={() => handleRoleSelection("recruiter")}
        >
          Recruiter
        </Button>
      </div>
    </div>
  );
}

export default Onboarding;
