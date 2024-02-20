import { UserGender } from "../Data/UserData"
import { SlUser } from "react-icons/sl"
import { SlUserFemale } from "react-icons/sl"
import { BiSolidFaceMask } from "react-icons/bi"

export function getProfile(profileURL: string | undefined, gender: UserGender) {
  if (profileURL !== undefined) {
    return (
      <img
        className="aspect-square object-cover rounded-full border border-dcard-text-2"
        src={profileURL}
      />
    )
  }
  switch (gender) {
    case "Male":
      return <SlUser className="fill-dcard " />
    case "Female":
      return <SlUserFemale className="fill-dcard-girl " />
    case "Other":
      return <BiSolidFaceMask className="fill-zinc-800 " />
    default:
      throw Error(`Error occured when reading gender: ${gender}.`)
  }
}
