import React, { useState } from "react";
import {
  Search,
  Send,
  Phone,
  Video,
  MoreVertical,
  Image,
  Smile,
} from "lucide-react";

const users = [
  {
    id: 1,
    name: "Ramesh Patel",
    message: "Tractor available tomorrow 🚜",
    image: "https://i.pravatar.cc/150?img=11",
    active: true,
  },

  {
    id: 2,
    name: "Suresh Yadav",
    message: "Wheat price increased today",
    image: "https://i.pravatar.cc/150?img=12",
    active: false,
  },

  {
    id: 3,
    name: "Kisan Support",
    message: "Your order has been shipped",
    image: "https://i.pravatar.cc/150?img=13",
    active: true,
  },

  {
    id: 4,
    name: "Milk Supplier",
    message: "Fresh milk available",
    image: "https://i.pravatar.cc/150?img=14",
    active: true,
  },
];

const chats = [
  {
    sender: "other",
    text: "Hello 👋",
  },

  {
    sender: "me",
    text: "Namaste bhai 🚜",
  },

  {
    sender: "other",
    text: "Need tractor for tomorrow farming work?",
  },

  {
    sender: "me",
    text: "Yes, what is the rent price?",
  },
];

export default function Messages() {
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 p-6">

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">

        <h1 className="text-5xl font-black text-green-900">
          Smart Messages
        </h1>

        <p className="text-gray-600 mt-3 text-lg">
          Chat with farmers, sellers and buyers instantly.
        </p>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-8">

        {/* Sidebar */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

          {/* Search */}
          <div className="p-5 border-b">

            <div className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-2xl">

              <Search size={20} className="text-gray-500" />

              <input
                type="text"
                placeholder="Search chats..."
                className="bg-transparent outline-none w-full"
              />

            </div>
          </div>

          {/* Users */}
          <div className="space-y-2 p-4">

            {users.map((user) => (

              <div
                key={user.id}
                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-green-50 transition cursor-pointer"
              >

                <div className="relative">

                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  {user.active && (
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                  )}

                </div>

                <div className="flex-1">

                  <h3 className="font-bold text-lg">
                    {user.name}
                  </h3>

                  <p className="text-gray-500 text-sm truncate">
                    {user.message}
                  </p>

                </div>

              </div>

            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="lg:col-span-3 bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden">

          {/* Top Bar */}
          <div className="flex justify-between items-center p-6 border-b">

            <div className="flex items-center gap-4">

              <img
                src="https://i.pravatar.cc/150?img=11"
                alt="User"
                className="w-14 h-14 rounded-full"
              />

              <div>

                <h2 className="text-2xl font-bold">
                  Ramesh Patel
                </h2>

                <p className="text-green-600 font-medium">
                  Online
                </p>

              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-5">

              <button className="bg-green-100 p-3 rounded-full hover:bg-green-200 transition">

                <Phone size={22} className="text-green-700" />

              </button>

              <button className="bg-green-100 p-3 rounded-full hover:bg-green-200 transition">

                <Video size={22} className="text-green-700" />

              </button>

              <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition">

                <MoreVertical size={22} />

              </button>

            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 p-8 space-y-6 overflow-y-auto bg-gradient-to-b from-white to-green-50">

            {chats.map((chat, index) => (

              <div
                key={index}
                className={`flex ${
                  chat.sender === "me"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`max-w-md px-6 py-4 rounded-3xl text-lg shadow-lg ${
                    chat.sender === "me"
                      ? "bg-green-600 text-white rounded-br-md"
                      : "bg-white text-gray-800 rounded-bl-md"
                  }`}
                >

                  {chat.text}

                </div>
              </div>

            ))}
          </div>

          {/* Input */}
          <div className="p-5 border-t bg-white">

            <div className="flex items-center gap-4">

              <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition">

                <Smile size={22} />

              </button>

              <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition">

                <Image size={22} />

              </button>

              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-gray-100 px-6 py-4 rounded-2xl outline-none text-lg"
              />

              <button className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-2xl shadow-xl transition">

                <Send size={24} />

              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}