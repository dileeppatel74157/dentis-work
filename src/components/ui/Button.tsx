"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type ButtonVariant = "primary" | "whatsapp" | "outline" | "ghost" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  loading?: boolean;
  href?: string;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/20 hover:shadow-primary-600/30",
  whatsapp:
    "bg-whatsapp text-white hover:bg-whatsapp-hover shadow-lg shadow-whatsapp/20 hover:shadow-whatsapp/30",
  outline:
    "bg-transparent text-primary-600 border-2 border-primary-600 hover:bg-primary-50",
  ghost:
    "bg-transparent text-text-secondary hover:text-primary-600 hover:bg-primary-50",
  secondary:
    "bg-primary-50 text-primary-700 hover:bg-primary-100",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-1.5 rounded-lg",
  md: "px-6 py-3 text-base gap-2 rounded-xl",
  lg: "px-8 py-4 text-lg gap-2.5 rounded-xl",
};

export default function Button({
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  loading = false,
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `
    inline-flex items-center justify-center font-semibold
    transition-all duration-300 cursor-pointer
    disabled:opacity-50 disabled:cursor-not-allowed
    font-[family-name:var(--font-display)]
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `.trim();

  const content = (
    <>
      {loading ? (
        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      ) : (
        icon
      )}
      {children}
      {iconRight}
    </>
  );

  if (href) {
    const isWhatsApp = href.includes("wa.me") || href.includes("whatsapp");
    return (
      <motion.a
        href={href}
        target={isWhatsApp ? "_self" : "_blank"}
        rel="noopener noreferrer"
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  );
}
