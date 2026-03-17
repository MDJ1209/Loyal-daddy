import "./RetroTV.css";

const RetroTV = () => {
  return (
    <div className="main_wrapper scale-[0.5] md:scale-[0.7] lg:scale-[0.8] mx-auto">
      <div className="main">
        <div className="antenna">
          <div className="a1"></div>
          <div className="a2"></div>
        </div>
        <div className="tv">
          <div className="display_div">
            <div className="screen_container">
              <div className="screen">
                <span className="notfound_text">NOT FOUND</span>
              </div>
            </div>
          </div>
          <div className="buttons_div">
            <div className="knob b1"></div>
            <div className="knob b2"></div>
            <div className="speakers">
              <div className="g"></div>
              <div className="g"></div>
              <div className="g"></div>
              <div className="g"></div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="base1"></div>
          <div className="base2"></div>
        </div>
      </div>
    </div>
  );
};

export default RetroTV;
