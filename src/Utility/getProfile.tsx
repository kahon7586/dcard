import { BiSolidFaceMask } from "react-icons/bi"
import { UserGender } from "../Hooks/useSingleUser"
import { FaUserCircle } from "react-icons/fa"

const TEST_PROFILE = {
  otherProbability: 0.3,
  noProfileProbability: 0.5,
}

export function getProfile(profileURL: string | undefined, gender: UserGender) {
  if (Math.random() < TEST_PROFILE.otherProbability) gender = "other"
  if (Math.random() < TEST_PROFILE.noProfileProbability) profileURL = undefined
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
