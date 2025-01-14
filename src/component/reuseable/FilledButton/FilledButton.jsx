
import style from "./index.module.css"
const FilledButton = ({color,text ,textColor})=>{
    return(
        <div className={style.filledBtn}>
            <button style={{background:color,color:textColor}} className={style.filledButton}>{text}</button>
        </div>
    )
}
export default FilledButton;