import React, { useLayoutEffect } from "react"
import Splitting from 'splitting'
import './style.css'

const Experience = () => {

  useLayoutEffect(() => {
    Splitting()
  })

  return (
    <div>
      <section class="content__item content__item--home content__item--current">
        <p class="content__paragraph" data-splitting="">Cross functional teams enable out of the box brainstorming. Paddle on both sides I'll book a meeting so we can solutionise this before the sprint is over. This is a no-brainer.</p>
      </section>
      <section class="content__item content__item--about">
      </section>
    </div>
  );
}

export default Experience;
