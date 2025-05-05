import { SquareArrowRight } from 'lucide-react'

const Footer = () => {
  const links = [
    { label: 'Quotes lib' },
    { label: 'Summaries lib' },
    { label: 'Browsers authors' },
    { label: 'Contribute' },
    { label: 'Devops' },
  ]

  return (
    <footer className="bg-black text-white pt-12">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto px-6 sm:px-8 md:px-12">
        {links.map((link, index) => (
          <div
            key={index}
            className="relative hover:bg-amber-400 transition-colors duration-300 rounded w-full h-14 flex items-center"
          >
            <span className="pl-4 text-base sm:text-lg font-medium">{link.label}</span>
            <SquareArrowRight className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5" />
          </div>
        ))}
      </div>

      <hr className="my-8 border-red-500 opacity-30 max-w-5xl mx-auto" />

      <div className="text-center text-white text-1x sm:text-sm pb-6 px-4">
        © {new Date().getFullYear()} Envi daniel. Tous droit est reserver
      </div>
    </footer>
  )
}

export default Footer
