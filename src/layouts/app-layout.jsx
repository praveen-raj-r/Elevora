import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="container min-h-screen px-10 mx-auto sm:px-0">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 mt-10 text-center bg-gray-800">
        Made with 💗 by Praveen
      </div>
    </div>
  );
};

export default AppLayout;
