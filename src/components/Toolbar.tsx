import cn from "classnames";

const Toolbar = ({ filters, selected, onSelectFilter }: IToolbar) => {
    return (
        <div className="toolbar">
            <ul className="toolbar-list">
                {filters.map((filter, indx) => (
                    <li className="toolbar-list-elem" key={indx}>
                        <button className={cn('btn-category', filter == selected && 'btn-category_selected')} onClick={() => onSelectFilter(filter)}
                        >{filter}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Toolbar;