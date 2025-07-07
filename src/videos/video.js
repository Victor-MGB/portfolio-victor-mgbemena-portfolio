import React from "react";
import {simlab_video} from "../assets/videos/simlab_video.mp4";

export default function ProjectVideoPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-4">Immune Simulation Tech Dashboard</h1>
          <p className="text-lg text-gray-600">
            A biotech-style data science project simulating immune responses, treatments, and ML predictions — powered by Python and Streamlit.
          </p>
        </header>

        {/* Video Section */}
        <section className="mb-10">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-96 rounded-xl shadow-lg"
              src={simlab_video}
              title="Immune Simulation Tech Dashboard Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Description Section */}
        <section className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="mb-4">
            This interactive dashboard showcases the immune response of a synthetic population to various treatments such as vaccines, stress, and sleep deprivation.
            The project mimics real-world experimentation using simulations, and evaluates outcomes using machine learning models.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>🧬 Synthetic data generated via API and enriched with immune attributes</li>
            <li>🔬 Simulated B-cell and T-cell response under different treatments</li>
            <li>🧠 ML model (Random Forest) predicts immune strength outcomes</li>
            <li>📊 Interactive Streamlit dashboard with charts, filters, PCA clusters</li>
            <li>🎯 Designed for portfolio, biotech job readiness, and learning real-world tech practices</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
