import MoneyInput from './MoneyInput';

export default function MoneyCell (props) {
    return (
        <td>
            <MoneyInput rows={props.rows} defaultValue={props.price} index={props.index} rowCellName={"price"} 
            setRowCellID={props.setRowCellID} setCellType={props.setCellType} setButtonDisable={props.setButtonDisable} setRow={props.setRow}/>
            <MoneyInput rows={props.rows} defaultValue={props.percent} index={props.index} rowCellName={"percent"} 
            setRowCellID={props.setRowCellID} setCellType={props.setCellType} setButtonDisable={props.setButtonDisable} setRow={props.setRow}/>
        </td>
    )
  }