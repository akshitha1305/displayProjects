import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const tabIdUpdation = () => {
    updateActiveTabId(tabId)
  }
  const activeTabItem = isActive ? 'active-tab-btn' : null
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        onClick={tabIdUpdation}
        className={`tab-btn ${activeTabItem}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
