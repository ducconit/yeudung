function MP3(props){
    let autoplay=props.autoPlay??true;
    let autoReplay=props.autoReplay??true;
    return (
        <audio src={props.link} autoPlay={autoplay} loop={autoReplay}></audio>
    )
}

export default MP3