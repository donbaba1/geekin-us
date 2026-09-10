import { useState } from "react";
import { Navbar } from "./layout/Navbar";
import Hero from "./sections/Hero";
import WhyGeekin from "./sections/WhyGeekin";
import WhoWeServe from "./sections/WhoWeServe";
import Services from "./sections/Services";
import Footer from "./layout/Footer";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./components/About";
import ServicesPage from "./components/ServicesPage";
import Contact from "./components/Contact";
import Industries from "./components/Industries";
import AppLayout from "./layout/AppLayout";
import Homepage from "./components/Homepage";
import ManagedITServices from "./pages/ManagedITServices";
import NetworkInfrastructureManagement from "./pages/NetworkInfrastructureManagement";
import CloudAndHybridCloudServices from "./pages/CloudAndHybridCloudServices";
import CybersecurityAndComplianceReadiness from "./pages/CybersecurityAndComplianceReadiness";
import BackupDisasterRecoveryAndBusinessContinuity from "./pages/BackupDisasterRecoveryAndBusinessContinuity";
import VoIPTelecomAndCollaboration from "./pages/VoIPTelecomAndCollaboration";
import ITStrategyConsultingAndProjects from "./pages/ITStrategyConsultingAndProjects";
import SpecializedITForMedicalAndHealthcare from "./pages/SpecializedITForMedicalAndHealthcare";

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Homepage />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/services",
          element: <ServicesPage />,
        },
        {
          path: "/industries",
          element: <Industries />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/managed-it-services",
          element: <ManagedITServices />,
        },
        {
          path: "/network-and-infrastructure-management",
          element: <NetworkInfrastructureManagement />,
        },
        {
          path: "/cloud-and-hybrid-cloud-services",
          element: <CloudAndHybridCloudServices />,
        },
        {
          path: "/cybersecurity-and-compliance-readiness",
          element: <CybersecurityAndComplianceReadiness />,
        },
        {
          path: "/backup-disaster-recovery-and-business-continuity",
          element: <BackupDisasterRecoveryAndBusinessContinuity />,
        },
        {
          path: "/voip-telecom-and-Collaboration",
          element: <VoIPTelecomAndCollaboration />,
        },
        {
          path: "/it-strategy-consulting-projects",
          element: <ITStrategyConsultingAndProjects />,
        },
        {
          path: "/specialized-it-for-medical-and-healthcare",
          element: <SpecializedITForMedicalAndHealthcare />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}>
        {/* <div className="min-h-screen overflow-x-hidden "></div> */}
      </RouterProvider>
    </>
  );
}

export default App;
