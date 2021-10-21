import style from './cardtemp.module.css'

export default function CardTemp({label, value}){
    return(
      <div className={style.cardtemp}>
        <label htmlFor="" className={style.label}>{label}</label>
        <span className={style.value}>{value} °C</span>
      </div>
    )
  }