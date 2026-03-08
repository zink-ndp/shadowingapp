import ContinueWatching from "@/components/dashboard/ContinueWatching";
import PasteInput from "@/components/dashboard/PasteInput";
import Progress from "@/components/dashboard/Progress";
import RecommendedVideos from "@/components/dashboard/RecommendedVideos";
import React from "react";

function DashboardPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">
      <PasteInput />
      <ContinueWatching />
      <RecommendedVideos />
      <Progress />
    </main>
  );
}

export default DashboardPage;
