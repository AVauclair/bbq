import MoneyInput from './MoneyInput'

export default function MoneyCell(props) {
  return (
    <td>
      <MoneyInput
        rows={props.rows}
        columns={props.columns}
        defaultValue={props.price}
        defaultSign={"₽"}
        rowCellIndex={props.rowCellIndex}
        columnCellIndex={props.columnCellIndex}
        rowCellName={'price'}
        setRowCellIndex={props.setRowCellIndex}
        setCellType={props.setCellType}
        setButtonDisable={props.setButtonDisable}
        setRow={props.setRow}
        setCheckbox={props.setCheckbox}
        setDisabledCheckbox={props.setDisabledCheckbox}
        checkboxChecked={props.checkboxChecked} 
        setCheckboxChecked={props.setCheckboxChecked}
      />
      <MoneyInput
        rows={props.rows}
        columns={props.columns}
        defaultValue={props.displayedPercent}
        defaultSign={"%"}
        rowCellIndex={props.rowCellIndex}
        columnCellIndex={props.columnCellIndex}
        rowCellName={'displayedPercent'}
        setRowCellIndex={props.setRowCellIndex}
        setCellType={props.setCellType}
        setButtonDisable={props.setButtonDisable}
        setRow={props.setRow}
        setCheckbox={props.setCheckbox}
        setDisabledCheckbox={props.setDisabledCheckbox}
        checkboxChecked={props.checkboxChecked} 
        setCheckboxChecked={props.setCheckboxChecked}
      />
    </td>
  )
}
