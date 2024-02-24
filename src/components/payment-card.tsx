"use client";

import { WalletContext } from "@/providers/WalletContext";
import Link from "next/link";
import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface PaymentCardProps {
  msg: {
    senderAddress: string;
    content: string;
  };
}
const PaymentCard = ({ msg }: PaymentCardProps) => {
  const { walletAddress } = useContext(WalletContext);
  return (
    <>
      {walletAddress === msg.senderAddress ? (
        <AnimatePresence>
          <motion.div
            layout
            initial={{ opacity: 0, scale: 1, y: 50, x: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
            transition={{
              opacity: { duration: 0.1 },
              layout: {
                type: "spring",
                bounce: 0.3,
                duration: 0.2,
              },
            }}
            style={{
              originX: 0.5,
              originY: 0.5,
            }}
            className="flex flex-col gap-2 p-1 whitespace-pre-wrap items-start"
          >
            <div className="flex gap-3 items-center">
              <span className="bg-accent p-3 rounded-md break-all max-w-xs">
                {msg.content && (
                  <>
                    <Link
                      className="text-blue-600 underline text-wrap"
                      href={msg.content.split(" ")[3]}
                      target="_blank"
                    >
                      {msg.content}
                    </Link>
                  </>
                )}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <motion.div
            layout
            initial={{ opacity: 0, scale: 1, y: 50, x: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
            transition={{
              opacity: { duration: 0.1 },
              layout: {
                type: "spring",
                bounce: 0.3,
                duration: 0.2,
              },
            }}
            style={{
              originX: 0.5,
              originY: 0.5,
            }}
            className="flex flex-col gap-2 p-1 whitespace-pre-wrap items-end"
          >
            <div className="flex gap-3 items-center">
              <span className="bg-accent p-3 rounded-md break-all max-w-xs">
                {msg.content && (
                  <>
                    <Link
                      className="text-blue-600 underline"
                      href={msg.content.split(" ")[3]}
                      target="_blank"
                    >
                      {msg.content}
                    </Link>
                  </>
                )}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default PaymentCard;
