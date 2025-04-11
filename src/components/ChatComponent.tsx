// // components/ChatArea.tsx
// "use client";
//
// export default function ChatArea() {
//   return (
//     <div className="h-screen flex flex-col">
//       {/* En-tête du chat */}
//       <div className="h-16 border-b border-gray-200 flex items-center px-4">
//         <h2 className="text-xl font-semibold text-gray-800">Chat avec John Doe</h2>
//       </div>
//
//       {/* Zone des messages */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-4">
//         {/* Zone qui sera remplie avec les messages */}
//       </div>
//
//       {/* Zone de saisie */}
//       <div className="border-t border-gray-200 p-4">
//         <div className="flex items-center space-x-2">
//           <input
//             type="text"
//             placeholder="Écrivez votre message..."
//             className="flex-1 rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-purple-500"
//           />
//           <button className="bg-purple-600 text-white rounded-full p-2 hover:bg-purple-700">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }