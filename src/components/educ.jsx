import React, { useState } from "react";
import { Dialog } from "@headlessui/react";


const educ = ({ isOpen, onClose, title, children }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50"
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />

      {/* Modal container */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-xl bg-zinc-950 border border-white/10 p-6">
          <Dialog.Title className="text-xl font-Bebas text-white">
            {title}
          </Dialog.Title>

          <div className="mt-4 text-white text-sm">
            {children}
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="rounded-md bg-white px-4 py-2 text-black"
            >
              Close
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default educ;