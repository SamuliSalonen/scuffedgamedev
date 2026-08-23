import React, { useEffect, useState } from 'react';
import "./Support.scss";
const Support = (props) => {
return (<div class="support-panel">
  <div class="support-content game-margin-left">
    <h3>Support the Development</h3>
    <p>If you enjoy this project, consider supporting its development on Ko-fi!</p>
    <a href={props.link} target="_blank" class="support-btn">
      ☕ Support on Ko-fi
    </a>
  </div>
</div>)
}

export default Support;