import MoneyInput from './MoneyInput';

export default function MoneyCell (props) {

    // let [priceEditMode, setPriceEditMode] = useState(false)
    // let [percentEditMode, setPercentEditMode] = useState(false)
    // let [isPriceSelected, setPriceSelect] = useState (false)
    // let [isPercentSelected, setPercentSelect] = useState (false)
    // let newRows = [...props.rows]

    // let priceElement = createRef()
    // let percentElement = createRef()
    // let onInputChange = (nameElement) => {
    //     debugger
    //     // let cellValue = nameElement.current.value
    //     // newRows[props.index][props.rowCellName] = cellValue
    //     // props.setRow(newRows)
    // }

    // let SelectCell = (setSelect) => {
    //     props.setCellID(props.index)
    //     props.setCellType("row")
    //     props.setButtonDisable(false);
    //     setSelect(true);
    // }

    // let DeselectCell = (setSelect) => {
    //     props.setButtonDisable(true)
    //     setSelect(false)
    // }

    // let DoubleClickEvent = (setEditMode, deselectCell) => {
    //     setEditMode(true) 
    //     DeselectCell(deselectCell)
    // }

    return (
        <td>
            <MoneyInput rows={props.rows} defaultValue={props.price} index={props.index} rowCellName={props.rowCellName} 
            setCellID={props.setCellID} setCellType={props.setCellType} setButtonDisable={props.setButtonDisable} setRow={props.setRow}/>
            <MoneyInput rows={props.rows} defaultValue={props.percent} index={props.index} rowCellName={props.rowCellName} 
            setCellID={props.setCellID} setCellType={props.setCellType} setButtonDisable={props.setButtonDisable} setRow={props.setRow}/>
        </td>
    )
  }