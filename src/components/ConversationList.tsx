"use client";

import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

// Définir un type pour MessageStatus pour plus de cohérence
type MessageStatusType = "sent" | "delivered" | "read";

interface Conversation {
	id: string;
	name: string;
	message: string;
	time: string;
	avatar: string;
	isOnline: boolean;
	messageStatus: MessageStatusType;
}

interface ConversationListProps {
	onSelectConversation: (id: string) => void;
	selectedId: string | null;
	isOpen?: boolean;
}

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
 */

const conversations: Conversation[] = [
	{
		id: "1",
		name: "Balbino Tchoutzine",
		message: "On se voit au campus demain ?",
		time: "10:30",
		avatar: "/pic1.jpg",
		isOnline: true,
		messageStatus: "read",
	},
	{
		id: "2",
		name: "Kamga Michel",
		message: "Le projet avance bien, merci",
		time: "10:25",
		avatar: "/pic9.jpeg",
		isOnline: false,
		messageStatus: "delivered",
	},
	// Autres conversations mockées pour le développement
	{
		id: "3",
		name: "Fotso Daniel",
		message: "J'ai terminé la partie backend",
		time: "10:20",
		avatar: "/pic3.jpeg",
		isOnline: true,
		messageStatus: "sent",
	},
	{
		id: "4",
		name: "Nganso Kevin",
		message: "Tu peux m'aider avec React ?",
		time: "10:15",
		avatar: "/pic4.jpg",
		isOnline: false,
		messageStatus: "read",
	},
	{
		id: "5",
		name: "Tchamba Jordan",
		message: "La réunion est à quelle heure ?",
		time: "10:10",
		avatar: "/pic8.jpg",
		isOnline: true,
		messageStatus: "delivered",
	},
	{
		id: "6",
		name: "Nguimfack Sarah",
		message: "Je viens de push les changements",
		time: "10:05",
		avatar: "/pic6.jpg",
		isOnline: false,
		messageStatus: "sent",
	},
	{
		id: "7",
		name: "Dongmo Patrick",
		message: "Les maquettes sont prêtes",
		time: "09:55",
		avatar: "/pic7.png",
		isOnline: true,
		messageStatus: "read",
	},
	{
		id: "8",
		name: "Tcheutchoua Jean",
		message: "Réunion à 14h",
		time: "09:45",
		avatar: "/pic1.jpg",
		isOnline: false,
		messageStatus: "delivered",
	},
	{
		id: "9",
		name: "Kuate Emmanuel",
		message: "Je propose qu'on utilise Firebase",
		time: "09:30",
		avatar: "/pic5.jpg",
		isOnline: true,
		messageStatus: "sent",
	},
	{
		id: "10",
		name: "Sokeng Marie",
		message: "Le design est validé",
		time: "09:15",
		avatar: "/pic8.jpg",
		isOnline: true,
		messageStatus: "read",
	},
];

const MessageStatus = ({ status }: { status: MessageStatusType }) => {
	switch (status) {
		case "sent":
			return (
				<div className="flex justify-end mt-0.5">
					<svg className="w-3 h-3 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
						<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
					</svg>
				</div>
			);
		case "delivered":
			return (
				<div className="flex justify-end mt-0.5">
					<div className="relative flex">
						<svg
							className="w-3 h-3 text-gray-400"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
						</svg>
						<svg
							className="w-3 h-3 text-gray-400 -ml-1"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
						</svg>
					</div>
				</div>
			);
		case "read":
			return (
				<div className="flex justify-end mt-0.5">
					<div className="relative flex">
						<svg
							className="w-3 h-3 text-purple-500"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
						</svg>
						<svg
							className="w-3 h-3 text-purple-500 -ml-1"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
						</svg>
					</div>
				</div>
			);
		default:
			return null;
	}
};

export default function ConversationList({
											 onSelectConversation,
											 selectedId,
											 isOpen = true,
										 }: ConversationListProps) {
	const [searchTerm, setSearchTerm] = useState("");
	const [isMobile, setIsMobile] = useState(false);

	// Détecter si l'affichage est mobile
	useEffect(() => {
		const checkIfMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		// Vérifier au chargement
		checkIfMobile();

		// Ajouter un écouteur de redimensionnement
		window.addEventListener('resize', checkIfMobile);

		// Nettoyer l'écouteur lors du démontage
		return () => {
			window.removeEventListener('resize', checkIfMobile);
		};
	}, []);

	// Filtrer les conversations en fonction du terme de recherche
	const filteredConversations = conversations.filter((convo) =>
		convo.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	// Si la liste n'est pas ouverte, ne rien afficher
	if (!isOpen) return null;

	return (
		// Classes responsive ajoutées
		<div className={`h-full bg-white border-r border-gray-200 flex flex-col overflow-hidden
			${isMobile ? 'w-full absolute z-10 left-0' : 'ml-16 w-80'}`}>
			<div className="p-4 bg-gray-50">
				<h2 className="text-xl font-bold text-gray-800 mb-4 text-snappy-purple">YowTalk</h2>
				<SearchBar onSearch={setSearchTerm} placeholder="Rechercher une conversation..." />
			</div>

			{/* Liste des conversations */}
			<div className="flex-1 overflow-y-auto">
				<style jsx global>{`
					@keyframes slideWhiteBackground {
						from { transform: translateX(-100%); }
						to { transform: translateX(0); }
					}

					@keyframes moveForward {
						0% { transform: translateX(0); }
						100% { transform: translateX(8px); }
					}

					.conversation-item {
						background-color: #f9f9f9;
						transition: all 0.3s ease;
						position: relative;
						overflow: hidden;
					}

					.conversation-item:hover {
						background-color: white;
						box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
						z-index: 1;
						animation: moveForward 0.3s forwards;
					}

					.conversation-item::before {
						content: '';
						position: absolute;
						top: 0;
						left: 0;
						width: 4px;
						height: 100%;
						background-color: transparent;
						transition: background-color 0.3s ease;
					}

					.conversation-item:hover::before {
						background-color: #8b5cf6;
					}

					.conversation-item::after {
						content: '';
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						background-color: white;
						transform: translateX(-100%);
						z-index: -1;
					}

					.conversation-item:hover::after {
						animation: slideWhiteBackground 0.3s ease forwards;
					}

					.conversation-item-content {
						position: relative;
						z-index: 2;
					}
				`}</style>

				{filteredConversations.length > 0 ? (
					filteredConversations.map((conversation) => (
						<div
							key={conversation.id}
							className={`conversation-item flex items-center p-4 cursor-pointer border-b border-gray-100
                            transition duration-300 ease-in-out
                            ${selectedId === conversation.id ? "bg-white before:bg-purple-500 translate-x-2" : ""}`}
							onClick={() => onSelectConversation(conversation.id)}
						>
							<div className="conversation-item-content flex w-full">
								{/* Photo de profil avec indicateur de statut */}
								<div className="relative mr-3 flex-shrink-0">
									<img
										src={conversation.avatar}
										alt={conversation.name}
										className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover transition-all"
									/>
									{conversation.isOnline && (
										<div className="absolute bottom-0 right-0 w-3 h-3 bg-purple-500 rounded-full border-2 border-white"></div>
									)}
								</div>

								{/* Informations de la conversation */}
								<div className="flex-1 min-w-0">
									<div className="flex justify-between items-baseline">
										<h3 className="text-gray-900 font-semibold truncate">
											{conversation.name}
										</h3>
										<span className="text-xs text-gray-500 whitespace-nowrap ml-2">
											{conversation.time}
										</span>
									</div>
									<div className="flex justify-between items-center mt-1">
										<p className="text-sm text-gray-600 truncate mr-2">
											{conversation.message}
										</p>
										<MessageStatus status={conversation.messageStatus} />
									</div>
								</div>
							</div>
						</div>
					))
				) : (
					<div className="p-4 text-gray-500 text-center">
						Aucune conversation ne correspond à votre recherche
					</div>
				)}
			</div>
		</div>
	);
}