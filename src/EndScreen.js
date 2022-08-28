import './App.css'
export function EndScreen(props){
    return(
        <div className="absolute inset-0 bg-red-800 text-center font-sans text-5xl p-28 text-slate-100">
            FUCK YOU
            <h1>
                {props.winner}
            </h1>
        </div>
    )
}