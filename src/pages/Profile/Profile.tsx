import { useForm } from "react-hook-form"

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset
  } = useForm()

  return(
    <div>
      <h1>
        User Profile
      </h1>
    </div>
  )
}

export default Profile