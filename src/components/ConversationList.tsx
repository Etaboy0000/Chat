import SearchBar from './SearchBar';

/**
 * Liste des conversations récentes
 * 
 * Fonctionnalités:
 * - Affichage des conversations récentes
 * - Barre de recherche
 * - Photos de profil des contacts
 * - Horodatage des messages
 * - Aperçu du dernier message
 * 
 * Intégration backend nécessaire:
 * - Récupération des conversations en temps réel
 * - Statut en ligne des contacts
 * - Système de recherche
 * - Stockage et récupération des images
 * - Gestion des timestamps
 * 
 * Format des données attendu:
 * {
 *   name: string,
 *   message: string,
 *   time: string,
 *   avatar: string,
 *   isOnline?: boolean,
 *   unreadCount?: number
 * }
 */

const conversations = [
  {
    name: "Balbino Tchoutzine",
    message: "On se voit au campus demain ?",
    time: "10:30",
    avatar: "/pic1.jpg",
    isOnline: true,
    messageStatus: 'read' // 'sent', 'delivered', 'read'
  },
  {
    name: "Kamga Michel",
    message: "Le projet avance bien, merci",
    time: "10:25",
    avatar: "/pic9.jpeg",
    isOnline: false,
    messageStatus: 'delivered'
  },
  {
    name: "Fotso Daniel",
    message: "J'ai terminé la partie backend",
    time: "10:20",
    avatar: "/pic3.jpeg",
    isOnline: true,
    messageStatus: 'sent'
  },
  {
    name: "Nganso Kevin",
    message: "Tu peux m'aider avec React ?",
    time: "10:15",
    avatar: "/pic4.jpg",
    isOnline: false,
    messageStatus: 'read'
  },
  {
    name: "Tchamba Jordan",
    message: "La réunion est à quelle heure ?",
    time: "10:10",
    avatar: "/pic8.jpg",
    isOnline: true,
    messageStatus: 'delivered'
  },
  {
    name: "Nguimfack Sarah",
    message: "Je viens de push les changements",
    time: "10:05",
    avatar: "/pic6.jpg",
    isOnline: false,
    messageStatus: 'sent'
  }
];

const MessageStatus = ({ status }: { status: string }) => {
  switch (status) {
    case 'sent':
      return (
        <div className="flex justify-end mt-0.5">
          <svg className="w-3 h-3 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
          </svg>
        </div>
      );
    case 'delivered':
      return (
        <div className="flex justify-end mt-0.5">
          <div className="relative flex">
            <svg className="w-3 h-3 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
            </svg>
            <svg className="w-3 h-3 text-gray-400 -ml-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
            </svg>
          </div>
        </div>
      );
    case 'read':
      return (
        <div className="flex justify-end mt-0.5">
          <div className="relative flex">
            <svg className="w-3 h-3 text-snappy-first-blue" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
            </svg>
            <svg className="w-3 h-3 text-snappy-first-blue -ml-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
            </svg>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default function ConversationList() {
  return (
    <div className="w-[30%] border-r border-snappy-gray flex flex-col h-full bg-snappy-white">
      <div className="p-4 flex-none">
        <h1 className="text-xl font-bold mb-4">Messages</h1>
        <SearchBar />
      </div>
      
      <div className="overflow-y-auto flex-1">
        <div className="space-y-2 p-4">
          {conversations.map((conv, index) => (
            <div key={index} className="flex items-center p-3 hover:bg-snappy-gray/10 rounded-lg cursor-pointer">
              <div className="relative">
                <div className="w-12 h-12 rounded-full mr-3 overflow-hidden">
                  <img 
                    src={conv.avatar} 
                    alt={conv.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {conv.isOnline && (
                  <div className="absolute bottom-0 right-2 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{conv.name}</h3>
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-gray-500">{conv.time}</span>
                    <MessageStatus status={conv.messageStatus} />
                  </div>
                </div>
                <p className="text-sm text-gray-500 truncate">{conv.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
