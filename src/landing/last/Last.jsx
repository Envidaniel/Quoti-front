import React from 'react'
import image3 from '../../assets/images/image3.png'
import { MarqueeDemo } from '../../components/shadcn/MarqueeDemo'
import { InteractiveHoverButtonDemo } from '../../components/shadcn/InteractiveHoverButtonDemo'


const Last = () => {
  return (
      <div className='container py-20'>   
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px] md:min-h-[600px]">
          {/* Image section */}
          <div className="flex justify-center items-center">
            <img
              src={image3}
              alt=""
              className="w-[90%] md:w-[550px] xl:w-[600px] md:!scale-110"
            />
          </div>

          {/* Text  section */}
          <div className="space-y-8 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pl-10 md:py-0 md:px-0 md:items-start xl:max-w-[400px] mx-auto">
          <h1  className="text-4xl xl:text-5xl font-bold">
            Fait de la lecture votre passion pour votre amelioration !
            </h1>
            <InteractiveHoverButtonDemo/>
          </div>
          
        </div>
        <MarqueeDemo/>
        
        <div className="card card-side bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Le Vieil homme et la Mer</h2>
        <p>Le Vieil Homme et la Mer d’Ernest Hemingway raconte l’histoire de Santiago, un vieux pêcheur cubain qui, après 84 jours sans prise, part seul en mer déterminé à retrouver sa chance. Il finit par ferrer un gigantesque espadon qu’il lutte à capturer pendant trois jours et trois nuits. Épuisé mais résolu, Santiago réussit enfin à maîtriser le poisson et l’attache à son bateau. Sur le chemin du retour, des requins attirés par le sang dévorent peu à peu l’espadon, malgré les efforts du vieil homme pour les repousser. À son arrivée, il ne reste que le squelette du poisson. Bien que vaincu physiquement, Santiago incarne la dignité, le courage et la persévérance face à l’adversité. Ce récit symbolique explore les thèmes de la lutte, de la solitude, de la nature, et de la condition humaine, dans un style épuré et puissant, typique de Hemingway.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">lire</button>
        </div>
      </div>
    </div>
    <div className="card card-side bg-base-100 shadow-sm">
      
      <div className="card-body">
        <h2 className="card-title">Katia</h2>
        <p>Katia, publié en 1859, est une courte œuvre de Léon Tolstoï qui explore les émotions, les illusions amoureuses et les compromis du mariage. Le récit est présenté du point de vue d’un jeune homme noble, Mikhaïl Dmitritch, qui tombe amoureux de Katia, une jeune femme vive et pleine de charme. Leur relation naît dans une atmosphère insouciante et romanesque. Mikhaïl croit en un amour passionné et sincère, mais une fois mariés, la réalité du quotidien et la banalité de la vie de couple s’installent. Peu à peu, il réalise que son amour n’était qu’une illusion, et qu’ils sont deux étrangers unis par un malentendu sentimental. Tolstoï, à travers ce récit subtil et introspectif, critique les idéalisations de l’amour romantique et met en lumière la dissonance entre passion et réalité. C’est une œuvre précoce mais déjà lucide, annonçant les thèmes majeurs de son œuvre future.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">lire</button>
        </div>
      </div>
    </div>
    <div className="card card-side bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">De parte de la princesa muerta</h2>
        <p>De parte de la princesa muerta, publié en 1987, est un roman autobiographique de Kenizé Mourad qui retrace la vie de sa mère, Selma Rauf Hanim, une princesse ottomane exilée après la chute de l’Empire. Le récit commence avec l’exil de la famille impériale turque, contrainte de fuir à l’étranger. Selma, élevée dans la pauvreté en Inde puis envoyée en Europe, est une femme partagée entre deux cultures, deux identités, et un besoin profond de liberté. Elle épouse un rajah indien pour échapper à sa condition, mais sa vie reste marquée par les conflits intérieurs, les déracinements et la quête d’amour et de dignité. À travers ce destin tragique et romanesque, Kenizé Mourad explore les thèmes de l’exil, de la mémoire, de l’identité et de la condition féminine. Le roman mêle histoire personnelle et Histoire avec une plume sensible et puissante, dressant le portrait d’une femme à la fois fragile et courageuse.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">lire</button>
        </div>
      </div>
    </div>
      </div>
  )
}

export default Last
