import React, { useState } from "react"

const LABELS: string[] = ["Hot", "New", "Rules"]
const Labels = () => {
  const [currLabel, setCurrLabel] = useState(LABELS[0])

  return (
    <div>
      {LABELS.map((label) => (
        <button
          className={`px-4 py-2 text-lg text-dcard-text-2 hover:text-black ${
            currLabel === label ? "border-b-2 border-b-dcard" : null
          }`}
          onClick={() => setCurrLabel(label)}
          key={label}>
          {label}
        </button>
      ))}
    </div>
  )
}

export default Labels
