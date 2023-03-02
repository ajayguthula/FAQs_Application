const FaqItem = props => {
  const {faqListItem, faqValue, onClickButtonItem} = props
  const {id, questionText, answerText} = faqListItem

  const onClickButton = () => {
    onClickButtonItem(id)
  }
  const imgSource = faqValue
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const altValue = faqValue ? 'minus' : 'plus'
  const answerItem = faqValue ? <p>{answerText}</p> : null

  return (
    <li>
      <div>
        <h1>{questionText}</h1>
        <button type="button" onClick={onClickButton}>
          <img src={imgSource} alt={altValue} />
        </button>
      </div>
      {answerItem}
    </li>
  )
}

export default FaqItem
