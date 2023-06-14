'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function PushAnimation({ children }: { children: React.ReactNode }) {
  return (
    <motion.div whileTap={{ scale: 0.95 }}>
      {children}
    </motion.div>
  );
}