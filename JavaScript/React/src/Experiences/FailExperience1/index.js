import React, { useEffect } from "react";

export default function ExperienceO() {
  const name = 'yes'

  /**
  * This cannot work because we are breaking one of the rule of callback
  * Only Call Hooks at the Top Level
  **/
  if (name !== '') {
    /**
    useEffect(function persistForm() {
      localStorage.setItem('formData', name);
    });
    **/
  }

  return (
    <div>

    </div>
  );
}
