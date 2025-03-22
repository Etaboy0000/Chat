/**
 * Composant de recherche
 * 
 * Fonctionnalités à implémenter:
 * - Recherche en temps réel
 * - Filtrage des conversations
 * - Suggestions de recherche
 * 
 * Points d'intégration backend:
 * - API de recherche
 * - Indexation des messages
 * - Cache des résultats fréquents
 */
export default function SearchBar() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search messages..."
        className="w-full p-2 pl-8 border border-snappy-gray rounded-lg focus:outline-none focus:border-snappy-first-blue bg-snappy-white"
      />
      <svg
        className="absolute left-2 top-2.5 h-5 w-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}
