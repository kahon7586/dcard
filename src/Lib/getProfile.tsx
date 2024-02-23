import { BiSolidFaceMask } from "react-icons/bi"
import { UserGender } from "../Hooks/useSingleUser"
import { FaUserCircle } from "react-icons/fa"

export function getProfile(profileURL: string | undefined, gender: UserGender) {
  if (Math.random() < 0.3) gender = "other"
  if (Math.random() < 0.2) profileURL = undefined
  // Simulate the condition that the user has no profile and gender is set to "other"

  if (profileURL !== undefined) {
    return (
      <img
        className="aspect-square object-cover rounded-full border border-dcard-text-2"
        src={profileURL}
      />
    )
  }
  switch (gender) {
    case "male":
      return <FaUserCircle className="fill-dcard size-full " />
    case "female":
      return <FaUserCircle className="fill-dcard-girl size-full " />
    case "other":
      return <BiSolidFaceMask className="fill-zinc-800 size-full" />
    default:
      throw Error(`Error occured when reading gender: ${gender}.`)
  }
}
