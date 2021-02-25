

const FilteringMenu = ({ onChange, filter }) => {
    return (
        <div className="filtering-menu mb-2">
            <div onClick={() => onChange('view', { list: +!filter.view.list })}> {/* + => numeric val || +! => numeric val of inverted */}
                Change view
            </div>
        </div>
    )
}

export default FilteringMenu
