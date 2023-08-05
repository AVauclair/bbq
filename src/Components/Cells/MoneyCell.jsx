import MoneyInput from './MoneyInput';

export default function MoneyCell (props) {
    return (
        <td>
            <MoneyInput rows={props.rows} columns={props.columns} defaultValue={props.price} rowCellIndex={props.rowCellIndex} 
            columnCellIndex={props.columnCellIndex} rowCellName={"price"}
            setRowCellID={props.setRowCellID} setCellType={props.setCellType} setButtonDisable={props.setButtonDisable} setRow={props.setRow}/>
            <MoneyInput rows={props.rows} columns={props.columns} defaultValue={props.percent} rowCellIndex={props.rowCellIndex} 
            columnCellIndex={props.columnCellIndex} rowCellName={"percent"}
            setRowCellID={props.setRowCellID} setCellType={props.setCellType} setButtonDisable={props.setButtonDisable} setRow={props.setRow}/>
        </td>
    )
  }