export default function Card({show, info}){
    const [showCard, setShow] = show;
    console.log(info)
    return(
        <div className={`${showCard ? 'flex' : 'hidden'} fixed inset-0 bg-white/10 backdrop-blur-md flex items-center justify-center z-[100]`} onClick={()=>{
            setShow(false)
        }}>
  <div className="card bg-white rounded-2xl p-6 shadow-2xl flex flex-col">
    <img src={info.image} alt="" className="w-36"/>
    <div className="content">
      
    </div>
  </div>
</div>

    )
}