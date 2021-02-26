import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// +!filter.view.list =      0        |  1
const LIST_VIEW_ICONS = ['list', 'border-all' ]

const FilteringMenu = ({ onChange, filter }) => {
    return (
        <div className="filtering-menu mb-2">
            <FontAwesomeIcon 
                className="clickable hoverable"
                size="lg"
                icon={LIST_VIEW_ICONS[filter.view.list]}
                onClick={() => {
                    onChange('view', { list: +!filter.view.list })}}
            > 
                Change view
            </FontAwesomeIcon>
        </div>
    )
}

export default FilteringMenu
