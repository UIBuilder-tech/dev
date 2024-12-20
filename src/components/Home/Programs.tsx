import { useState, useEffect } from 'react'
import { ArrowUpRight, Minus, Plus } from 'lucide-react'
import { useWindowWidth } from '../../hooks/useWindowWidth'

interface VisionCard {
  id: string
  title: string
  description: string
  image: string
}

const visionCards: VisionCard[] = [
  {
    id: 'education',
    title: 'Education & Grants',
    description: 'CHF supports 5 schools in India, impacting 3,000+ students through programs like scholarships, vocational training, infrastructure development, and digital learning, empowering them to break the poverty cycle.',
    image: 'https://images.unsplash.com/photo-1719937206168-f4c829152b91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'women',
    title: 'Women Empowerment',
    description: 'Our women empowerment initiatives focus on providing skills training, education, and economic opportunities to help women become self-reliant and contribute to their communities.',
    image: 'https://images.unsplash.com/photo-1732480509153-b895ce4c1b64?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'heritage',
    title: 'Heritage Preservation',
    description: 'We work to preserve and promote Indian cultural heritage through various programs supporting traditional arts, dance, music, and cultural education initiatives.',
    image: 'https://images.unsplash.com/photo-1731375659532-d3341d0a5b5e?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]

export default function Programs() {
  const [expandedId, setExpandedId] = useState('education')
  const [orderedCards, setOrderedCards] = useState(visionCards)
  const windowWidth = useWindowWidth()
  const isMobile = windowWidth < 768 // md breakpoint

  // Reorder cards when expanded card changes
  useEffect(() => {
    if (!isMobile) {
      setOrderedCards(visionCards)
      return
    }

    const newOrder = [...visionCards]
    const expandedIndex = newOrder.findIndex(card => card.id === expandedId)
    if (expandedIndex > 0) {
      const [expandedCard] = newOrder.splice(expandedIndex, 1)
      newOrder.unshift(expandedCard)
    }
    setOrderedCards(newOrder)
  }, [expandedId, isMobile])

  const expandedCard = orderedCards.find(card => card.id === expandedId)
  const collapsedCards = orderedCards.filter(card => card.id !== expandedId)

  return (
    <div className="p-4 space-y-4 md:p-6 md:space-y-0 md:flex md:gap-6 md:justify-center">
      {/* Expanded Card */}
      {expandedCard && (
        <div
          key={expandedCard.id}
          className="programs-card relative overflow-hidden rounded-3xl transition-all duration-500 ease-in-out w-full md:w-[750px]"
        >
          <div className="relative h-[350px] md:h-[726px]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <img
              src={expandedCard.image}
              alt={expandedCard.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-8">
              <div className="flex items-start justify-between">
                <div className='flex flex-col space-y-2'>
                  <p className="text-xl md:text-2xl font-medium text-white max-w-[50%]">{expandedCard.title}</p>
                  <div className="h-0.5 bg-white w-full" />
                </div>
                <button 
                  onClick={() => setExpandedId('')}
                  className="rounded-full border border-secondary bg-secondary p-2 text-white hover:bg-white/10"
                >
                  <ArrowUpRight className="h-6 w-6 rotate-[175deg]" />
                </button>
              </div>

              <div className='flex flex-col justify-center items-center'>
                <div className="h-2 rounded-xl t-2 bg-[#f97316] relative top-[5px] shadow-md transition-all duration-500 w-[90%] md:w-[30rem]" />
                <div className="space-y-6 bg-white rounded-3xl p-4 md:p-6 w-full">
                  <p className="text-sm md:text-md text-[#516072]">
                    {expandedCard.description}
                  </p>
                  <div className="flex items-center justify-end">
                    <button 
                      onClick={() => setExpandedId('')}
                      className="flex items-center gap-2 text-white hover:text-white/80"
                    >
                      <Minus className="h-8 w-8 border border-secondary rounded-full p-2 text-secondary bg-[#FBF3E8] font-bold" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Collapsed Cards Container */}
      <div className="grid grid-cols-2 gap-4 md:flex md:gap-6">
        {collapsedCards.map((card) => (
          <div
            key={card.id}
            className="programs-card relative overflow-hidden rounded-3xl transition-all duration-500 ease-in-out cursor-pointer w-full md:w-[380px]"
            onClick={() => setExpandedId(card.id)}
          >
            <div className="relative h-[200px] md:h-[726px]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-8">
                <div className="flex items-start justify-between">
                  <div className='flex flex-col space-y-2'>
                    <p className="text-sm md:text-2xl font-medium text-white max-w-[50%]">{card.title}</p>
                    <div className="h-0.5 bg-white w-20" />
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      setExpandedId(card.id)
                    }}
                    className="rounded-full border border-white/50 p-1.5 md:p-2 text-white hover:bg-white/10"
                  >
                    <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                </div>

                <button 
                  className="flex items-center justify-between rounded-full bg-white gap-2 text-[#516072] w-full p-2 pl-4 md:pl-6 text-xs md:text-base"
                  onClick={(e) => {
                    e.stopPropagation()
                    setExpandedId(card.id)
                  }}
                >
                  READ MORE
                  <Plus className="h-6 w-6 md:h-8 md:w-8 border border-secondary rounded-full p-1.5 md:p-2 text-secondary bg-[#FBF3E8] font-bold" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

