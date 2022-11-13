function Box() {
  return (
    <div class="box">
      <div class="top" style={{'background-image': "url('/images/top.jpg')"}}></div>
      <div>
        {[...Array(4)].map((v, i) => (
          <span style={{'--i': i}}>
            <img src={'/images/' + i + '.jpg'} alt="" />
          </span>
        ))}
      </div>
      <div class="bottom" style={{'background-image': "url('/images/bottom.jpg')"}}></div>
    </div>
  );
}

export default Box;
