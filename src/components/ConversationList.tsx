"use client";

import { useState } from "react";
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
							className="w-3 h-3 text-Purple-500"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
						</svg>
						<svg
							className="w-3 h-3 text-Purple-500 -ml-1"
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
	isOpen,
}: ConversationListProps) {
	const [searchQuery, setSearchQuery] = useState("");

	// Définir une fonction wrapper qui correspond au type attendu
	const handleSearch = async (term: string): Promise<void> => {
		setSearchQuery(term);
	};

	// Filtrer les conversations en fonction de la recherche
	const filteredConversations = conversations.filter((conv) =>
		conv.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<div className="flex flex-col h-full">
			<div className="p-4">
				<SearchBar onSearch={handleSearch} />
			</div>

			<div className="overflow-y-auto flex-1">
				{filteredConversations.map((conversation) => (
					<div
						key={conversation.id}
						className={`flex items-center p-4 hover:bg-purple-500 cursor-pointer ${
							selectedId === conversation.id ? "bg-Purple-50" : ""
						}`}
						onClick={() => onSelectConversation(conversation.id)}
					>
						<div className="relative">
							<img
								src={conversation.avatar}
								alt={conversation.name}
								className="w-12 h-12 rounded-full object-cover"
							/>
							{conversation.isOnline && (
								<div className="absolute bottom-0 right-0 w-3 h-3 bg-purple-500 rounded-full border-2 border-purple"></div>
							)}
						</div>

						<div className="ml-3 flex-1">
							<div className="flex justify-between">
								<h3 className="font-semibold text-black ">{conversation.name}</h3>
								<span className="text-xs text-gray-500">{conversation.time}</span>
							</div>

							<div className="flex justify-between mt-1">
								<p className="text-sm text-gray-600 truncate max-w-[170px]">
									{conversation.message}
								</p>
								<MessageStatus status={conversation.messageStatus} />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
