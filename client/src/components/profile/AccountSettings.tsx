
import ChangeName from "./ChangeName"
import ChangePassword from "./ChangePassword"
import DeleteUser from "./DeleteUser"
import DisableSharing from "./DisableSharing"
import LogOut from "./LogOut"
const AccountSettings = () => {
  return ( 
    <div className='account-settings bg-slate-50 dark:bg-slate-900 grid items-center grid-cols-2 gap-6 h-full max-h-full overflow-y-auto'>
      <DisableSharing />
      <ChangeName />
      <ChangePassword />
      <LogOut />
      <DeleteUser/>
    </div>
  )
}
export default AccountSettings