import React, { useState } from 'react'
import { UserSearch, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="bg-white dark:bg-black shadow-md">
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold hover:cursor-pointer text-gray-800 dark:text-white hover:text-gray-500">
          Quotis
        </h1>

        {/* Desktop nav */}
        <nav className="hidden sm:flex space-x-6 items-center">
          <a className="text-gray-800 dark:text-white hover:text-gray-500 dark:hover:text-gray-300 hover:cursor-pointer">
            Accueil
          </a>
          <a className="text-gray-800 dark:text-white hover:text-gray-500 dark:hover:text-gray-300 hover:cursor-pointer">
            Catégories
          </a>
          <a className="text-gray-800 dark:text-white hover:text-gray-500 dark:hover:text-gray-300 hover:cursor-pointer">
            Publier une citation
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            className="text-gray-800 dark:text-white hover:text-gray-500 dark:hover:text-gray-300"
            aria-label="Search"
          >
            <UserSearch className="w-5 h-5" />
          </button>

          {/* Mobile menu toggle */}
          <button
            className="sm:hidden text-gray-800 dark:text-white hover:text-gray-500 dark:hover:text-gray-300"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-90 text-white flex flex-col items-center justify-center space-y-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
          >
            <button
              onClick={toggleMobileMenu}
              className="absolute top-5 right-5 text-3xl hover:text-white"
              aria-label="Close menu"
            >
              ✕
            </button>
            <a
              onClick={toggleMobileMenu}
              className="text-xl hover:text-amber-100 hover:cursor-pointer"
            >
              Accueil
            </a>
            <a
              onClick={toggleMobileMenu}
              className="text-xl hover:text-amber-100 hover:cursor-pointer"
            >
              Catégories
            </a>
            <a
              onClick={toggleMobileMenu}
              className="text-xl hover:text-amber-100 hover:cursor-pointer"
            >
              Publier une citation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
