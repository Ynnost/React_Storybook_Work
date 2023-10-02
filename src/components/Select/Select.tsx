type ItemType = {
    title: string
    value: any
}

type  SelectPropsType = {
    value: any,
    onChange?: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {

const valueSelect = props.items.find(el=>el.title === props.value);

    return (
        <div>
            <div>{valueSelect && valueSelect.title}</div>
            {props.items.map(el => <div>{el.title}</div>)}
        </div>
    )
}
