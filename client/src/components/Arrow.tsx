import React from 'react'

export enum ArrowDirections {
  rise = 'rise',
  fall = 'fall',
  stable = 'stable',
}

export interface IArrowProps {
  direction?: 'rise' | 'fall' | 'stable'
}

export default function Arrow({ direction }: IArrowProps) {
  let arrowStyle = 'w-0 h-0 border-r-0 border-8 border-transparent transition-transform'

  if (direction === 'rise') {
    arrowStyle += ' border-l-green-500 -rotate-45 translate-y-[-2px]'
  } else if (direction === 'fall') {
    arrowStyle += ' border-l-red-500 rotate-45 translate-y-[3px]'
  } else {
    arrowStyle += ' border-l-gray-500'
  }

  return <div className={arrowStyle}></div>
}
