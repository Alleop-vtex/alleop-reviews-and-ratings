import React, { FunctionComponent, useMemo, useState } from 'react'

import Star from './Star'
import styles from '../styles.css'

const StarPicker: FunctionComponent<StarPickerProps> = ({
  onStarClick,
  rating,
  label,
  additionalClass = ''
}) => {
  // const [rating, setRating] = useState(3)
  const stars = useMemo(
    () =>
      [null, null, null, null, null].map(
        (_, index) => index < Math.floor(rating)
      ),
    [rating]
  )
  const [hoverState, setHoverState] = useState<null | number>(null)
  

  const handleStarClick = (
    event:
      | React.KeyboardEvent<HTMLSpanElement>
      | React.MouseEvent<HTMLSpanElement>,
    index: number
  ) => {
    onStarClick(event, index)
  }
  
  const handleStarHover = (index : number) =>{
    setHoverState(index)
  } 




  const labelClasses = 'vtex-input__label db mb3 w-100 c-on-base ' + additionalClass

  return (
    <label className={`${styles.starpicker} c-action-primary`}>
      {label && <span className={labelClasses}>{label}</span>}
      <span className={`t-heading-4 pointer ${additionalClass}`}>
        {stars.map((value, index) => (
          <Star
            key={index}
            filled={value || (index <= (hoverState || -1))}
            index={index}
            onClick={handleStarClick}
            onMouseEnter={() => handleStarHover(index)}
          />
        ))}
      </span>
      {/* <input
        type="number"
        value={rating}
        style={inputStyles}
        onChange={handleChange}
      ></input> */}
    </label>
  )
}

interface StarPickerProps {
  label?: string
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  additionalClass?: string
  rating: number
  onStarClick: (
    event:
      | React.KeyboardEvent<HTMLSpanElement>
      | React.MouseEvent<HTMLSpanElement>,
    index: number
  ) => void
}

export default StarPicker
