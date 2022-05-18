import React from "react";

function ToolTipHover() {
  return (
    <div>
      <div id="tooltip" class="top on" style="left: 20px; top: 30px;">
        <div class="tooltip-arrow"></div>
        <div class="tooltip-label">ToolTip Component</div>
      </div>
    </div>
  );
}

export default ToolTipHover;
