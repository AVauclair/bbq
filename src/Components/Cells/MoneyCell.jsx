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
        setRowCellID={props.setRowCellID}
        setCellType={props.setCellType}
        setButtonDisable={props.setButtonDisable}
        setRow={props.setRow}
        setCheckbox={props.setCheckbox}
        setDisabledCheckbox={props.setDisabledCheckbox}
        checkboxElement={props.checkboxElement} setCheckboxElement={props.setCheckboxElement}
      />
      <MoneyInput
        rows={props.rows}
        columns={props.columns}
        defaultValue={props.displayedPercent}
        defaultSign={"%"}
        rowCellIndex={props.rowCellIndex}
        columnCellIndex={props.columnCellIndex}
        rowCellName={'displayedPercent'}
        setRowCellID={props.setRowCellID}
        setCellType={props.setCellType}
        setButtonDisable={props.setButtonDisable}
        setRow={props.setRow}
        setCheckbox={props.setCheckbox}
        setDisabledCheckbox={props.setDisabledCheckbox}
        checkboxElement={props.checkboxElement} setCheckboxElement={props.setCheckboxElement}
      />
    </td>
  )
}
