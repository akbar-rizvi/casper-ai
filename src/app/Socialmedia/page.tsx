'use client';

import React, { useState } from 'react';
import SocialMediaForm from './Articlegeneration';
import ImageGeneration from './ImageGeneration';
import VideoGenration from './VideoGenration';

const Page = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'article':
        return <SocialMediaForm />;
      case 'image':
        return <ImageGeneration />;
      case 'video':
        return <VideoGenration />;
      default:
        return null; // Show nothing by default
    }
  };

  return (
    <div className="p-4 w-full">
      {/* Buttons */}
      <div className="flex gap-4 mb-6 w-full justify-center">
        <button
          onClick={() => setActiveComponent('article')}
          className="bg-blue-700  shadow-md text-white shadow-blue-300 font-semibold px-4 py-2 rounded cursor-pointer"
        >
          Article
        </button>
        <button
          onClick={() => setActiveComponent('image')}
          className=" bg-blue-700  shadow-md text-white shadow-blue-300 font-semibold px-4 py-2 rounded cursor-pointer"
        >
          Image
        </button>
        <button
          onClick={() => setActiveComponent('video')}
          className="bg-blue-700  shadow-md text-white shadow-blue-300 font-semibold px-4 py-2 rounded cursor-pointer"
        >
          Video
        </button>
      </div>

      {/* Render Selected Component */}
      {renderComponent()}
    </div>
  );
};

export default Page;
