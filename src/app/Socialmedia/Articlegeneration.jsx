"use client"


import { useState } from "react";
import { Send, Sparkles, Check, ChevronRight, Image as ImageIcon, Zap,CircleCheck } from "lucide-react";

// Social Media Platform Icons as SVG components
const TwitterIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedInIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FacebookIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const YouTubeIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const TikTokIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const PLATFORM_OPTIONS = [
  { 
    id: "x.com", 
    name: "X", 
    fullName: "X (Twitter)",
    icon: TwitterIcon, 
    color: "hover:bg-gray-900 hover:text-white",
    bgColor: "bg-gray-500",
    description: "Microblogging platform"
  },
  { 
    id: "linkedin", 
    name: "LinkedIn", 
    fullName: "LinkedIn",
    icon: LinkedInIcon, 
    color: "hover:bg-blue-600 hover:text-white",
    bgColor: "bg-blue-600",
    description: "Professional networking"
  },
  { 
    id: "facebook", 
    name: "Facebook", 
    fullName: "Facebook",
    icon: FacebookIcon, 
    color: "hover:bg-blue-500 hover:text-white",
    bgColor: "bg-blue-500",
    description: "Social networking"
  },
  { 
    id: "instagram", 
    name: "Instagram", 
    fullName: "Instagram",
    icon: InstagramIcon, 
    color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white",
    bgColor: "bg-gradient-to-br from-purple-600 to-pink-500",
    description: "Photo & video sharing"
  },
  { 
    id: "youtube", 
    name: "YouTube", 
    fullName: "YouTube",
    icon: YouTubeIcon, 
    color: "hover:bg-red-600 hover:text-white",
    bgColor: "bg-red-500",
    description: "Video platform"
  },
  { 
    id: "tiktok", 
    name: "TikTok", 
    fullName: "TikTok",
    icon: TikTokIcon, 
    color: "hover:bg-pink-400 hover:text-white ",
    bgColor: "bg-yellow-400",
    description: "Short-form videos"
  }
];

export default function SocialMediaContentGenerator() {
  const [formData, setFormData] = useState({
    userPrompt: "",
    platform: [],
    needsImages: null,
    isImageRequired: [],
    compile: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

  const handlePlatformChange = (platformId) => {
    setFormData(prev => {
      const newPlatforms = prev.platform.includes(platformId)
        ? prev.platform.filter(p => p !== platformId)
        : [...prev.platform, platformId];
      
      const newImageRequired = prev.isImageRequired.filter(p => newPlatforms.includes(p));
      
      return {
        ...prev,
        platform: newPlatforms,
        isImageRequired: newImageRequired,
        needsImages: newPlatforms.length > 0 ? prev.needsImages : null
      };
    });
  };

  const handleImagePlatformChange = (platformId) => {
    setFormData(prev => ({
      ...prev,
      isImageRequired: prev.isImageRequired.includes(platformId)
        ? prev.isImageRequired.filter(p => p !== platformId)
        : [...prev.isImageRequired, platformId]
    }));
  };

  const handleSubmit = async () => {
    if (!formData.userPrompt.trim()) {
      alert("Please enter a content prompt");
      return;
    }
    
    if (formData.platform.length === 0) {
      alert("Please select at least one platform");
      return;
    }

    setIsSubmitting(true);
    
    const apiData = {
      userPrompt: formData.userPrompt,
      platform: formData.platform,
      isImageRequired: formData.isImageRequired,
      compile: formData.compile ? "yes" : "no"
    };

    try {
      // Replace with your actual API endpoint
      const response = await fetch('http://localhost:8000/article/generate-article', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API_TOKEN}`
        },
        body: JSON.stringify(apiData),
       
      });
      
      const result = await response.json();
      setResponse(result);
      console.log('API Response:', result);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };


  console.log("token", process.env.NEXT_PUBLIC_BACKEND_API_TOKEN)
  const resetForm = () => {
    setFormData({
      userPrompt: "",
      platform: [],
      needsImages: null,
      isImageRequired: [],
      compile: false
    });
    setResponse(null);
    setCurrentStep(1);
  };

  const canProceedToStep2 = formData.userPrompt.trim() && formData.platform.length > 0;
  const canProceedToStep3 = canProceedToStep2 && formData.needsImages !== null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-2 py-8">
        <div className=" mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mb-6 shadow-xl shadow-blue-300">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
              Social Media Content Generator
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Create engaging, platform-optimized content with AI-powered generation and smart image suggestions
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12 ">
            <div className="flex md:flex-row flex-col gap-5 justify-center space-x-4">
              {[
                { step: 1, label: "Content & Platforms", active: currentStep >= 1 },
                { step: 2, label: "Image Requirements", active: currentStep >= 2 },
                { step: 3, label: "Optimization Settings", active: currentStep >= 3 }
              ].map((item, index) => (
                <div key={item.step} className="flex items-center ">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold text-sm transition-all duration-300 ${
                    item.active 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-300' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {item.step}
                  </div>
                  <span className={`ml-3 text-sm font-medium ${
                    item.active ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {item.label}
                  </span>
                  {index < 2 ? (
                    <ChevronRight className="w-5 h-5 text-gray-400 ml-4" />
                  ):<CircleCheck className="w-5 h-5 text-gray-400 ml-4" /> }
                </div>
              ))}
            </div>
          </div>

          {/* Main Content Card */}
          <div className="bg-white rounded-lg  shadow-2xl border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-12">
              
              {/* Step 1: Content Prompt */}
              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full mr-4"></div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Content Prompt *</h2>
                    <p className="text-gray-600 text-sm">Describe what you want to create</p>
                  </div>
                </div>
                
                <div className="relative">
                  <textarea
                    value={formData.userPrompt}
                    onChange={(e) => setFormData(prev => ({ ...prev, userPrompt: e.target.value }))}
                    placeholder="e.g., 'Create a post about natural language processing and text preprocessing techniques for developers'"
                    className="w-full px-2 py-2 border-2 border-gray-200 rounded-md outline-none focus:border-blue-100 focus:ring-2 focus:ring-blue-100 transition-all duration-300 resize-none text-gray-900 placeholder-gray-400 text-lg leading-relaxed"
                    rows={4}
                  />
                  <div className="absolute bottom-4 right-4 text-sm text-gray-400">
                    {formData.userPrompt.length}/500
                  </div>
                </div>
              </div>

              {/* Step 1: Platform Selection */}
              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full mr-4"></div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Select Platforms</h2>
                    <p className="text-gray-600">Choose where you want to share your content</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {PLATFORM_OPTIONS.map((platform) => {
                    const Icon = platform.icon;
                    const isSelected = formData.platform.includes(platform.id);
                    
                    return (
                      <button
                        key={platform.id}
                        type="button"
                        onClick={() => handlePlatformChange(platform.id)}
                        className={`relative group p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                          isSelected
                            ? 'border-blue-500 bg-blue-50 shadow-lg'
                            : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${
                            isSelected ? platform.bgColor : 'bg-gray-100 group-hover:bg-gray-200'
                          } transition-all duration-300`}>
                            <Icon size={24} className={isSelected ? 'text-white' : 'text-gray-600'} />
                          </div>
                          <div className="flex-1 text-left">
                            <h3 className="font-semibold text-gray-900">{platform.name}</h3>
                            <p className="text-sm text-gray-500">{platform.description}</p>
                          </div>
                          {isSelected && (
                            <div className="absolute top-3 right-3">
                              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                                <Check className="w-4 h-4 text-white" />
                              </div>
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Image Requirements */}
              {canProceedToStep2 && (
                <div className="mb-10 transform transition-all duration-500 ease-out">
                  <div className="flex items-center mb-6">
                    <div className="w-2 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full mr-4"></div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Visual Content</h2>
                      <p className="text-gray-600 text-sm">Do you need images for your posts?</p>
                    </div>
                  </div>

                  {/* <div className="bg-gradient-to-r  from-purple-50 to-pink-50 rounded-2xl p-6 mb-6 ">
                    <div className="flex md:flex-row flex-col gap-4  justify-center  space-x-8">
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, needsImages: true }))}
                        className={`flex items-center space-x-3  px-8 py-4 rounded-xl transition-all duration-300 ${
                          formData.needsImages === true
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105'
                            : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                        }`}
                      >
                        <ImageIcon className="w-5 h-5" />
                        <span className="font-semibold">Yes, I need images</span>
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ 
                          ...prev, 
                          needsImages: false, 
                          isImageRequired: [] 
                        }))}
                        className={`flex items-center space-x-3 px-8 py-4 rounded-xl transition-all duration-300 ${
                          formData.needsImages === false
                            ? 'bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-lg transform scale-105'
                            : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                        }`}
                      >
                        <span className="font-semibold">❌ No images needed</span>
                      </button>
                    </div>
                  </div> */}

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 mb-6">
  <div className="flex md:flex-row flex-col gap-6 justify-center items-stretch">
    <button
      type="button"
      onClick={() => setFormData(prev => ({ ...prev, needsImages: true }))}
      className={`flex flex-1 cursor-pointer min-w-[200px] justify-center items-center space-x-3 px-8 py-4 rounded-xl transition-all duration-300 ${
        formData.needsImages === true
          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105'
          : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
      }`}
    >
      <ImageIcon className="w-5 h-5" />
      <span className="font-semibold">Yes, I need images</span>
    </button>

    <button
      type="button"
      onClick={() =>
        setFormData(prev => ({
          ...prev,
          needsImages: false,
          isImageRequired: [],
        }))
      }
      className={`flex flex-1 cursor-pointer min-w-[200px] justify-center items-center space-x-3 px-8 py-4 rounded-xl transition-all duration-300 ${
        formData.needsImages === false
          ? 'bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-lg transform scale-105'
          : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
      }`}
    >
      <span className="font-semibold">❌ No images needed</span>
    </button>
  </div>
</div>


                  {/* Image Platform Selection */}
                  {formData.needsImages === true && (
                    <div className="transform transition-all duration-500 ease-out">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Select platforms that need images:
                      </h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {formData.platform.map((platformId) => {
                          const platform = PLATFORM_OPTIONS.find(p => p.id === platformId);
                          if (!platform) return null;
                          
                          const Icon = platform.icon;
                          const isSelected = formData.isImageRequired.includes(platformId);
                          
                          return (
                            <button
                              key={platformId}
                              type="button"
                              onClick={() => handleImagePlatformChange(platformId)}
                              className={`flex items-center space-x-4 p-4 rounded-xl border-2 transition-all duration-300 ${
                                isSelected
                                  ? 'border-purple-500 bg-purple-50'
                                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                              }`}
                            >
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${platform.bgColor}`}>
                                <Icon size={16} className="text-white" />
                              </div>
                              <span className="font-medium text-gray-900">{platform.fullName}</span>
                              {isSelected && (
                                <div className="ml-auto">
                                  <Check className="w-5 h-5 text-purple-600" />
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Step 3: Compilation Option */}
              {canProceedToStep3 && (
                <div className="mb-10 transform transition-all duration-500 ease-out">
                  <div className="flex items-center mb-6">
                    <div className="w-2 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full mr-4"></div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Content Optimization</h2>
                      <p className="text-gray-600">Enhance your content with AI optimization</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50  p-6">
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, compile: !prev.compile }))}
                      className={`flex items-center space-x-4 p-4 rounded-sm     transition-all duration-300 w-full ${
                        formData.compile
                          ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg'
                          : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                      }`}
                    >
                      <div className={`w-8 h-8 flex rounded-md items-center justify-center ${
                        formData.compile ? 'bg-white bg-opacity-20' : 'bg-yellow-100'
                      }`}>
                        <Zap className={`w-5 h-5 ${formData.compile ? 'text-red-500' : 'text-yellow-600'}`} />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="font-semibold">Enable Content Compilation</h3>
                        <p className={`text-sm ${formData.compile ? 'text-yellow-100' : 'text-gray-500'}`}>
                          Optimize content for better engagement and reach
                        </p>
                      </div>
                      {formData.compile && (
                        <Check className="w-6 h-6 text-white" />
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
             <div className="flex justify-center items-center">
                 <div className="flex flex-col md:w-[50%] sm:flex-row gap-4 pt-8 border-t border-gray-100">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !canProceedToStep3}
                  className="flex-1 flex items-center cursor-pointer justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent"></div>
                  ) : (
                    <>
                      <Send className="mr-3 h-5 w-5" />
                      Generate Content
                    </>
                  )}
                </button>
                
                <button
                  onClick={resetForm}
                  className="px-8 py-4 flex-1 cursor-pointer border-2 border-gray-300 text-gray-700 font-semibold rounded-2xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
                >
                  Reset Form
                </button>
              </div>
             </div>
            </div>

            {/* API Data Preview */}
            <div className="bg-gray-50 px-8 py-6 border-t border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">API Payload Preview</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-xl text-sm overflow-x-auto font-mono">
                {JSON.stringify({
                  userPrompt: formData.userPrompt || "natural language processing and text preprocessing",
                  platform: formData.platform.length > 0 ? formData.platform : ["x.com", "linkedin"],
                  isImageRequired: formData.isImageRequired.length > 0 ? formData.isImageRequired : ["x.com"],
                  compile: formData.compile ? "yes" : "no"
                }, null, 2)}
              </pre>
            </div>

            {/* Response Display */}
            {response && (
              <div className="bg-green-50 px-8 py-6 border-t border-green-200">
                <h3 className="text-lg font-semibold text-green-900 mb-4">API Response</h3>
                <pre className="bg-white border border-green-200 p-4 rounded-xl text-sm overflow-x-auto text-green-800">
                  {JSON.stringify(response, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}