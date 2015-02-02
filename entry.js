import countdownClass from "./countdown-class"
import registerReact from "reactive-elements"
import React from "react"
countdownClass = React.createFactory(countdownClass);
registerReact('react-countdown', countdownClass);
