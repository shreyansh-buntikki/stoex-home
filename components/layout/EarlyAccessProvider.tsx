"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import EarlyAccessModal from "./EarlyAccessModal";

export type ModalType = "contact" | "early_access" | "newsletter";

interface EarlyAccessContextType {
  isOpen: boolean;
  openModal: (email?: string, type?: ModalType, description?: string, buttonText?: string, header?: string, excludeFields?: string[], successMessage?: string) => void;
  closeModal: () => void;
  prefilledEmail: string | null;
  modalType: ModalType;
  modalDescription: string | null;
  modalButtonText: string | null;
  modalHeader: string | null;
  modalExcludeFields: string[];
  modalSuccessMessage: string | null;
}

const EarlyAccessContext = createContext<EarlyAccessContextType | undefined>(
  undefined,
);

export function useEarlyAccess() {
  const context = useContext(EarlyAccessContext);
  if (!context) {
    throw new Error("useEarlyAccess must be used within EarlyAccessProvider");
  }
  return context;
}

export function EarlyAccessProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefilledEmail, setPrefilledEmail] = useState<string | null>(null);
  const [modalType, setModalType] = useState<ModalType>("early_access");
  const [modalDescription, setModalDescription] = useState<string | null>(null);
  const [modalButtonText, setModalButtonText] = useState<string | null>(null);
  const [modalHeader, setModalHeader] = useState<string | null>(null);
  const [modalExcludeFields, setModalExcludeFields] = useState<string[]>([]);
  const [modalSuccessMessage, setModalSuccessMessage] = useState<string | null>(null);

  const openModal = (email?: string, type: ModalType = "early_access", description?: string, buttonText?: string, header?: string, excludeFields?: string[], successMessage?: string) => {
    if (email) setPrefilledEmail(email);
    setModalType(type);
    setModalDescription(description ?? null);
    setModalButtonText(buttonText ?? null);
    setModalHeader(header ?? null);
    setModalExcludeFields(excludeFields ?? []);
    setModalSuccessMessage(successMessage ?? null);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setPrefilledEmail(null);
    setModalType("early_access");
    setModalDescription(null);
    setModalButtonText(null);
    setModalHeader(null);
    setModalExcludeFields([]);
    setModalSuccessMessage(null);
  };

  return (
    <EarlyAccessContext.Provider
      value={{ isOpen, openModal, closeModal, prefilledEmail, modalType, modalDescription, modalButtonText, modalHeader, modalExcludeFields, modalSuccessMessage }}
    >
      {children}
      <EarlyAccessModal
        open={isOpen}
        setOpen={setIsOpen}
        prefilledEmail={prefilledEmail}
        modalType={modalType}
        description={modalDescription ?? undefined}
        buttonText={modalButtonText ?? undefined}
        header={modalHeader ?? undefined}
        excludeFields={modalExcludeFields}
        successMessage={modalSuccessMessage ?? undefined}
      />
    </EarlyAccessContext.Provider>
  );
}
