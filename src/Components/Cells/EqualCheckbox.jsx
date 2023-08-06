export default function MoneyCell(props) {
    let newRows = [...props.rows]
    let checkbox = false;
    let InputOnChange = () => {
        checkbox = !checkbox
        if (checkbox) {
            props.RecalculatePrices(props.columns, newRows[props.index])
            props.setRow(newRows)
        }
    }

  return (
    <td className="checkbox">
      <input 
      type={"checkbox"}
      onChange={InputOnChange}/> Разделить поровну
    </td>
  )
}
