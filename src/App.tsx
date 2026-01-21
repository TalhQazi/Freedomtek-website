import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import Index from "./pages/Index";
import Platform from "./pages/Platform";
import Pricing from "./pages/Pricing";
import Security from "./pages/Security";
import Facilities from "./pages/Facilities";
import Families from "./pages/Families";
import Resources from "./pages/Resources";
import Demo from "./pages/Demo";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Press from "./pages/Press";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Accessibility from "./pages/Accessibility";
import FacilityLayout, { FacilityDashboardHome, FacilityDemoRequests, FacilityContactForms, FacilityRfpRequests } from "./pages/facility/Dashboard";
import FamilyPortal from "./pages/FamilyPortal";
import AdminPortal from "./pages/AdminPortal";
import Solutions from "./pages/Solutions";
import Transparency from "./pages/Transparency";
import MessagingModule from "./pages/platform/Messaging";
import VoiceModule from "./pages/platform/Voice";
import VideoModule from "./pages/platform/Video";
import CommissaryModule from "./pages/platform/Commissary";
import MediaModule from "./pages/platform/Media";
import EducationModule from "./pages/platform/Education";
import FormsModule from "./pages/platform/Forms";
import PhotosModule from "./pages/platform/Photos";
import LibraryModule from "./pages/platform/Library";
import AdminModule from "./pages/platform/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/platform/messaging" element={<MessagingModule />} />
          <Route path="/platform/voice" element={<VoiceModule />} />
          <Route path="/platform/video" element={<VideoModule />} />
          <Route path="/platform/commissary" element={<CommissaryModule />} />
          <Route path="/platform/media" element={<MediaModule />} />
          <Route path="/platform/education" element={<EducationModule />} />
          <Route path="/platform/forms" element={<FormsModule />} />
          <Route path="/platform/photos" element={<PhotosModule />} />
          <Route path="/platform/library" element={<LibraryModule />} />
          <Route path="/platform/admin" element={<AdminModule />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/security" element={<Security />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/families" element={<Families />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/press" element={<Press />} />
          <Route path="/portal/facility" element={<FacilityLayout />}>
            <Route index element={<FacilityDashboardHome />} />
            <Route path="demo-requests" element={<FacilityDemoRequests />} />
            <Route path="contact-forms" element={<FacilityContactForms />} />
            <Route path="rfp-requests" element={<FacilityRfpRequests />} />
          </Route>
          <Route path="/portal/family" element={<FamilyPortal />} />
          <Route path="/portal/admin" element={<AdminPortal />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/transparency" element={<Transparency />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/accessibility" element={<Accessibility />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
