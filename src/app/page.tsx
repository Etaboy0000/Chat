/**
 * Page d'accueil / Zone de chat principale
 * 
 * À intégrer:
 * - Zone de chat active
 * - Système de messages
 * - Intégration avec Alan AI
 * - Gestion des médias
 * - Indicateurs de frappe
 * 
 * Points d'attention pour l'intégration:
 * - WebSocket pour les messages en temps réel
 * - Gestion de l'état de lecture
 * - Stockage des médias
 * - API Alan pour le chatbot
 */
export default function Home() {
  return (
    <div className="flex-1 h-full flex items-center justify-center bg-gray-50">
      <p className="text-gray-500">Select a conversation to start messaging</p>
    </div>
  );
}
