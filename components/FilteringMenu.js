import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// +!filter.view.list =      0        |  1
const LIST_VIEW_ICONS = ['list', 'border-all' ];
const DATE_FILTERING_ICONS = ['sort-numeric-down', 'sort-numeric-up' ];

const FilteringMenu = ({ onChange, filter }) => {
    return (
        <div className="filtering-menu mb-2">
            <FontAwesomeIcon 
                className="clickable hoverable"
                size="lg"
                icon={LIST_VIEW_ICONS[filter.view.list]}
                onClick={() => {
                    onChange('view', { list: +!filter.view.list })}}
            /> &ensp;   
            <FontAwesomeIcon 
                className="clickable hoverable"
                size="lg"
                icon={DATE_FILTERING_ICONS[filter.date.asc]}
                onClick={() => {
                    onChange('date', { asc: +!filter.date.asc })}}
            /> 
        </div>
    )
}

export default FilteringMenu
