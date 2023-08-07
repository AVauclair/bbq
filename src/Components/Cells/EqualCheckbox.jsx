export default function MoneyCell(props) {
    let newRows = [...props.rows]
    let checkbox = false; //а тут тип мб
    //а тут надо перебрать все цены в строке
    //и если у кого-нибудь есть фиксед
    //значит галочка false
    //а в InputOnChange просто всем ставить фиксед false

    let InputOnChange = () => {
        checkbox = !checkbox
        if (checkbox) {
            props.RecalculatePrices(props.columns, newRows[props.index])
            props.setRow(newRows)
        }
    }

  return (
    <td>
      <input 
      type={"checkbox"}
      onChange={InputOnChange}/>
    </td>
  )
}
