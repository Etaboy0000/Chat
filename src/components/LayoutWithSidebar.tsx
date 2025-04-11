"use client";

import { useState } from "react";
import React from "react";
import SidebarLeft from "./SidebarLeft";
import ConversationList from "./ConversationList";

// Interface pour les props de ConversationList
interface ConversationListProps {
    isOpen: boolean;
    onSelectConversation: (id: string) => void;
    selectedId: string | null;
}

// Constantes pour les dimensions
const DIMENSIONS = {
    sidebarWidth: {
        mobile: "280px",
        desktop: "320px"
    },
    leftOffset: {
        mobile: "56px",
        desktop: "72px"
    },
    margin: {
        mobile: {
            closed: "ml-14",
            open: "ml-[calc(280px+3.5rem)]"
        },
        desktop: {
            closed: "sm:ml-[72px]",
            open: "sm:ml-[calc(320px+4.5rem)]"
        }
    }
};

// Composant pour l'overlay mobile
const MobileOverlay = ({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) => {
    if (!isVisible) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={onClose}
        />
    );
};

// Composant pour la barre latérale des conversations
const ConversationSidebar = ({ isOpen }: { isOpen: boolean }) => {
    const sidebarClasses = `
    fixed 
    left-[${DIMENSIONS.leftOffset.mobile}] sm:left-[${DIMENSIONS.leftOffset.desktop}]
    top-0 
    h-full
    w-[${DIMENSIONS.sidebarWidth.mobile}] sm:w-[${DIMENSIONS.sidebarWidth.desktop}] 
    bg-white 
    border-r
    transform 
    transition-transform 
    duration-300 
    ease-in-out
    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    z-30
  `;

    return (
        <div className={sidebarClasses}>
            <ConversationList
                isOpen={isOpen}
                onSelectConversation={() => {}}
                selectedId={null}
            ></ConversationList>
        </div>
    );
};

export default function LayoutWithSidebar({ children }: { children: React.ReactNode }) {
    const [isConversationListOpen, setIsConversationListOpen] = useState(false);

    const mainClasses = `
    flex-1 
    transition-all 
    duration-300
    ${isConversationListOpen ? DIMENSIONS.margin.mobile.open : DIMENSIONS.margin.mobile.closed}
    ${isConversationListOpen ? DIMENSIONS.margin.desktop.open : DIMENSIONS.margin.desktop.closed}
  `;

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            {/* Sidebar gauche */}
            <div className="fixed left-0 top-0 h-full z-40">
                <SidebarLeft onToggleConversationList={setIsConversationListOpen} />
            </div>

            <ConversationSidebar isOpen={isConversationListOpen} />

            <MobileOverlay
                isVisible={isConversationListOpen}
                onClose={() => setIsConversationListOpen(false)}
            />

            {/* Contenu principal */}
            <main className={mainClasses}>
                {children}
            </main>
        </div>
    );
}