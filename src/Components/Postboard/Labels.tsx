import { usePostboardContext } from "../../Context/Postboard/usePostboardContext"

const Labels = () => {
  const { labelList, currLabel, setCurrLabel } = usePostboardContext()

  return (
    <div className="flex-shrink-0">
      {labelList.map((label) => (
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
