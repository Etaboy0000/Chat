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
"use client";

import { useState, useEffect, useRef } from "react";

interface SearchProps {
	onSearch: (term: string) => Promise<void>;
	placeholder?: string;
}

export default function SearchBar({
									  onSearch,
									  placeholder = "Rechercher des messages ou contacts...",
								  }: SearchProps) {
	const [searchTerm, setSearchTerm] = useState("");
	const [isSearching, setIsSearching] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const debounceRef = useRef<NodeJS.Timeout>();

	// Gestionnaire de recherche debounced
	const handleSearch = async (term: string) => {
		try {
			if (term.trim()) {
				setIsSearching(true);
				await onSearch(term);
			} else {
				await onSearch("");
			}
		} catch (error) {
			console.error("Erreur durant la recherche:", error);
		} finally {
			setIsSearching(false);
		}
	};

	// Effect pour le debounce
	useEffect(() => {
		if (debounceRef.current) {
			clearTimeout(debounceRef.current);
		}

		if (searchTerm === "") {
			handleSearch("");
			return;
		}

		debounceRef.current = setTimeout(() => {
			handleSearch(searchTerm);
		}, 300);

		return () => {
			if (debounceRef.current) {
				clearTimeout(debounceRef.current);
			}
		};
	}, [searchTerm]);

	// Gestionnaire de nettoyage
	const clearSearch = () => {
		setSearchTerm("");
		setIsSearching(false);
		handleSearch("");
		if (inputRef.current) {
			inputRef.current.focus();
		}
	};

	return (
		<div className="relative">
			<div className="relative">
				<input
					ref={inputRef}
					type="text"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					placeholder={placeholder}
					className="w-full p-2 pl-10 pr-10 text-gray-900 placeholder-gray-500
            border border-gray-200 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-purple-500
            transition-all bg-white"
				/>

				{/* Icône de recherche/chargement */}
				<div className="absolute left-3 top-2.5">
					{isSearching ? (
						<svg
							className="animate-spin h-5 w-5 text-gray-400"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								className="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								strokeWidth="4"
							/>
							<path
								className="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
							/>
						</svg>
					) : (
						<svg
							className="h-5 w-5 text-gray-400"
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
					)}
				</div>

				{/* Bouton de nettoyage */}
				{searchTerm && (
					<button
						onClick={clearSearch}
						className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
						type="button"
					>
						<svg
							className="h-5 w-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				)}
			</div>
		</div>
	);
}