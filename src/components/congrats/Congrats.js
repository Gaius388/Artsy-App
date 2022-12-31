import React from "react";
import giant_ellipse1 from "../../images/giant_ellipse1.svg";
import giant_ellipse2 from "../../images/giant_ellipse2.svg";
import congrats_woman from "../../images/woman_delivery.png";
import cone_normal from "../../images/cone_normal.png";
import blue_stripe from "../../images/blue_stripe.svg";
import red_stripe from "../../images/red_stripe.svg";
import pink_stripe from "../../images/pink_stripe.svg";
import cut_1 from "../../images/cut_1.svg";
import cut_2 from "../../images/cut_2.svg";
import cut_3 from "../../images/cut_3.svg";
import cut_4 from "../../images/cut_4.svg";
import cut_5 from "../../images/cut_5.svg";
import cut_6 from "../../images/cut_6.svg";
import cut_7 from "../../images/cut_7.svg";
import cut_8 from "../../images/cut_8.svg";
import cut_9 from "../../images/cut_9.svg";
import cut_10 from "../../images/cut_10.svg";
import cut_11 from "../../images/cut_11.svg";

const Congrats = () => {
  return (
    <div class="congrats_section">
      <img src={giant_ellipse1} alt="giant_ellipse1" class="ellipse1" />
      <img src={giant_ellipse2} alt="giant_ellipse2" class="ellipse2" />
      <div class="congrats_section-display">
        <img src={congrats_woman} alt="woman_delivery" class="congrats_woman" />
        <h3>Hey Celestina, thank you for your purchase.</h3>
        <div class="cheers_animation">
          <p>You are amazing. Cheers to being ARTSY!</p>
          <img src={cone_normal} alt="" class="cone1" />
          <div class="cheers_animation-parts">
            <img src={blue_stripe} alt="blue_stripe" class="stripe1" />
            <img src={red_stripe} alt="red_stripe" class="stripe1" />
            <img src={pink_stripe} alt="pink_stripe" class="stripe1" />
            <img src={cut_1} alt="cut_1" class="cut1" />
            <img src={cut_2} alt="cut_1" class="cut1" />
            <img src={cut_3} alt="cut_1" class="cut1" />
            <img src={cut_4} alt="cut_1" class="cut1" />
            <img src={cut_5} alt="cut_1" class="cut1" />
            <img src={cut_6} alt="cut_1" class="cut1" />
            <img src={cut_7} alt="cut_1" class="cut1" />
            <img src={cut_8} alt="cut_1" class="cut1" />
            <img src={cut_9} alt="cut_1" class="cut1" />
            <img src={cut_10} alt="cut_1" class="cut1" />
            <img src={cut_11} alt="cut_1" class="cut1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Congrats;
