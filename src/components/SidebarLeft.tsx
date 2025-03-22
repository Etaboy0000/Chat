/**
 * Barre de navigation principale
 * 
 * Composants:
 * 1. Profile utilisateur avec statut en ligne
 * 2. Nouvelle discussion
 * 3. Forum (discussions de groupe)
 * 4. Alan Chatbot (IA assistant)
 * 5. Settings et Déconnexion
 * 
 * Points d'intégration backend:
 * - Statut en ligne de l'utilisateur
 * - Photo de profil dynamique
 * - Gestion de la déconnexion
 * - Accès aux paramètres
 */
export default function SidebarLeft() {
  return (
    <aside className="w-[72px] h-full bg-gray-900 flex flex-col items-center justify-between py-4">
      <div className="flex flex-col items-center space-y-8">
        {/* User Profile Picture with label */}
        <div className="flex flex-col items-center">
          <button className="relative w-12 h-12 rounded-full overflow-hidden hover:ring-2 hover:ring-gray-300 transition-all">
            <img
              src="/pic5.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
          </button>
          <span className="text-sm font-itim text-gray-300 mt-1">Profile</span>
        </div>

        {/* Chat icon pour nouvelle discussion */}
        <button className="p-3 text-gray-300 hover:bg-gray-800 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>

        {/* Forum icon - Updated with 3 people */}
        <button className="p-3 text-gray-300 hover:bg-gray-800 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button>

        {/* Alan Chatbot icon with label */}
        <div className="flex flex-col items-center">
          <button className="p-3 text-gray-300 hover:bg-gray-800 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </button>
          <span className="text-sm font-itim text-gray-300 mt-1">Alan</span>
        </div>
      </div>

      {/* Bottom section with settings and logout */}
      <div className="flex flex-col items-center space-y-4">
        {/* Settings icon */}
        <button 
          className="p-3 text-gray-300 hover:bg-gray-800 rounded-full"
          title="Settings"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>

        {/* Sign out icon */}
        <button 
          className="p-3 text-gray-300 hover:bg-gray-800 rounded-full"
          title="Sign out"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
