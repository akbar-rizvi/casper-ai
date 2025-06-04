import { FaArrowUp } from "react-icons/fa";

import React, { useState } from "react";
import {
  Paperclip,
  ChevronDown,
  Sparkles,
  User,
  Mail,
  MessageCircle,
  Code,
} from "lucide-react";

export default function ClaudeInterface() {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const platforms = ["LinkedIn", "Facebook", "Instagram", "Threads"];

  const togglePlatform = (platform) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  const [inputText, setInputText] = useState("");
  const [citationEnabled, setCitationEnabled] = useState(true);

  const suggestions = [
    {
      icon: <User className="w-5 h-5 text-gray-600" />,
      title: "Write a to-do list for a personal project",
      description: "",
    },
    {
      icon: <Mail className="w-5 h-5 text-gray-600" />,
      title: "Generate an email to reply to a job offer",
      description: "",
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-gray-600" />,
      title: "Summarize this article in one paragraph",
      description: "",
    },
    {
      icon: <Code className="w-5 h-5 text-gray-600" />,
      title: "How does AI work in a technical capacity",
      description: "",
    },
  ];
  const credit = 46;
  return (
    <div className="flex  justify-center max-h-screen gap-1 p-2  bg-gray-200 overflow-hidden">
      {/* user details */}
      <div className="hidden  md:flex md:flex-col flex-1 border-2 border-gray-300 rounded-lg p-2 bg-white shadow-md">
        <div className="flex  items-center  gap-5  max-h-[10vh] w-[100%] pl-2">
          <img
            src="https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg"
            alt="user"
            className="size-10 rounded-md "
          />
          <div className="flex gap-0 flex-col">
            <p className="inline-block text-black font-semibold text-sm">
              John
            </p>
            <p className="inline-block text-gray-600 text-sm">
              credits: {credit}
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-2">
          <p className="font-md pl-3 border-1 border-gray-300 rounded-md py-2 cursor-pointer">
            History
          </p>
          <p className="font-md pl-3 border-1 border-gray-300 rounded-md py-2 cursor-pointer">
            Buy credits
          </p>
          <p className="font-md pl-3 border-1 border-gray-300 rounded-md py-2 cursor-pointer">
            Generate video
          </p>
          <p className="font-md pl-3 border-1 border-gray-300 rounded-md py-2 cursor-pointer">
            Generate image
          </p>
          <p className="font-md pl-3 border-1 border-gray-300 rounded-md py-2 cursor-pointer">
            Generate Audio
          </p>
        </div>
      </div>

      {/* generated article */}

      <div className="flex-4 border-2 w-[100%] border-gray-300 rounded-lg p-1 bg-white">
        <div className="max-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-[1000%] mx-auto">
            {/* Purple Sphere */}
            <div className="flex justify-center mb-2 animate-spin">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg shadow-purple-200"></div>
            </div>

            {/* Greeting */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Good Afternoon, <span className="text-purple-600">John</span>
              </h1>
              <p className="text-xl text-gray-600">
                What's on{" "}
                <span className="text-purple-600 font-medium">your mind?</span>
              </p>
            </div>

            {/* --------------------------  */}
            <div className="flex justify-around gap-4 ">
              {/* Input Area */}
              <div className="bg-white flex-4 ml-4 rounded-2xl shadow-sm border border-gray-200 mb-4 overflow-hidden">
                <div className="p-4">
                  <div className="flex items-start space-x-3">
                    <Sparkles className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                    <textarea
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder="Ask AI a question or make a request..."
                      className="flex-1 resize-none border-none outline-none text-gray-900 placeholder-gray-400  min-h-[60px] bg-transparent"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Bottom Controls */}
                <div className="border-t border-gray-100 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors border-1 border-gray-300 outline-none rounded-md p-1">
                      <Paperclip className="w-4 h-4" />
                      <span className="text-sm font-medium cursor-pointer ">
                        Attach
                      </span>
                    </button>

                    <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
                      {/* <span className="text-sm font-medium">Writing Styles</span>
                <ChevronDown className="w-4 h-4" /> */}

                      <div className="w-auto outline-none cursor-pointer rounded-md p-1 m-2 text-sm font-thin cursor-pointer flex items-center border-1 border-gray-300 outline-none top-1 flex ">
                        <select name="" id="">
                          <option
                            value="Informative"
                            className="text-sm font-thin"
                          >
                            Informative
                          </option>
                          <option value="Intellectual">Intellectual</option>
                          <option value="Creative">creative</option>
                          <option value="Funny" className="outline-none">
                            Funny
                          </option>
                        </select>{" "}
                      </div>
                    </button>
                  </div>

                  <div className="flex items-center space-x-3">
                    {/* <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700">Citation</span>
                <button
                  onClick={() => setCitationEnabled(!citationEnabled)}
                  className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                    citationEnabled ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                      citationEnabled ? 'translate-x-5' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div> */}

                    <button className="w-8 h-8 bg-black text-white cursor-pointer rounded-md flex items-center justify-center">
                      <FaArrowUp />
                    </button>
                  </div>
                </div>
              </div>

              {/* social media selection */}
              {/* Optimized For Dropdown */}
              <div className="relative flex-1  mt-1 w-full max-w-xs">
                <h2 className="text-sm font-semibold text-gray-700 mb-1">
                  Optimized For
                </h2>

                {/* Dropdown Trigger */}
                <div
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="border border-gray-300 rounded-md p-2 bg-white cursor-pointer flex justify-between items-center"
                >
                  <span className="text-sm text-gray-700">
                    {selectedPlatforms.length > 0
                      ? selectedPlatforms.join(", ")
                      : "Select platforms"}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </div>

                {/* Dropdown Menu */}
                {showDropdown && (
                  <div className="absolute z-10 mt-1 w-full border border-gray-300 rounded-md bg-white shadow-md max-h-40 overflow-y-auto">
                    {platforms.map((platform) => (
                      <label
                        key={platform}
                        className="flex items-center p-2 hover:bg-gray-100 text-sm text-gray-700 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="mr-2 accent-purple-600"
                          checked={selectedPlatforms.includes(platform)}
                          onChange={() => togglePlatform(platform)}
                        />
                        {platform}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Suggestions Section */}
            <div className="text-center my-2">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                GET STARTED WITH AN EXAMPLE BELOW
              </p>
            </div>

            {/* Suggestion Cards */}
            <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200 text-left group"
                >
                  <div className="flex items-start space-x-3 cursor-pointer ">
                    <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                      {suggestion.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900 leading-tight">
                        {suggestion.title}
                      </h3>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
