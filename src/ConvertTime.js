export default function Convert(props){
    
    return(
        <h1 className="text-4xl text-center p-20">
            {parseInt(props.sec/60)}:{(props.sec%60).toLocaleString("en-US", {minimumIntegerDigits: 2,useGrouping: false,})}

        </h1>
    )
}