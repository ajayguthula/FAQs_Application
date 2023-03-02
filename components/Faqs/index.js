import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {faqId: 0, faqValue: false}

  onClickButtonItem = id => {
    const {faqId, faqValue} = this.state
    if (faqId === id) {
      this.setState({faqValue: !faqValue})
    } else {
      this.setState({faqId: id, faqValue: !faqValue})
    }
  }

  render() {
    const {faqsList} = this.props
    const {faqId, faqValue} = this.state
    return (
      <div className="main-container">
        <div className="details-container">
          <h1>FAQs</h1>
          <ul>
            {faqsList.map(eachList => (
              <FaqItem
                faqListItem={eachList}
                faqId={faqId}
                faqValue={faqValue}
                onClickButtonItem={this.onClickButtonItem}
                key={eachList.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
