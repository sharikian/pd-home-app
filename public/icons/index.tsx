export { default as BookOpen } from "./book-open.svg";
export { default as ConnectionPointTwo } from "./connection-point-two.svg";
export { default as FileCollection } from "./file-connection.svg";
export { default as HomeTwo } from "./home-two.svg";
export { default as PeopleSpeak } from "./people-speak.svg";
export { default as MingcuteExitLine } from "./ming-cut.svg";
export { default as Line1 } from "./line-1.svg";
export { default as Subtract } from "./subtract.svg";
export { default as SettingTwo } from "./setting-two.svg";
export { default as Help } from "./help.svg";
export { default as MessageEmoji } from "./message-emoji.svg";
export { default as Remind } from "./remind.svg";
export { default as ArrowLeft } from "./arrow-left.svg";
export { default as ArrowDown } from "./arrow-down.svg";
export { default as Plus } from "./plus.svg";
export { default as FolderUpload } from "./folder-upload.svg";
export { default as TickRing } from "./tick-ring.svg";
export { default as Clock } from "./clock.svg";
export { default as Danger } from "./danger.svg";
export { default as ExerciseWalkingSupport } from "./exercise-walking-support.svg";
export { default as Food } from "./food.svg";
export { default as PersonWalking } from "./person-walking.svg";
export { default as SpeakAI } from "./speak-ai.svg";
export { default as Sport } from "./sport.svg";
export { default as HaveQuestion } from "./have-question.svg";
export { default as GreenDanger } from "./green-danger.svg";
export { default as PlusIcon } from "./plus-white.svg";
export { default as Mark } from "./mark.svg";
export { default as CloseRingLight } from "./close-ring-light.svg";
export { default as MRI } from "./mri.svg";
export { default as Calendar } from "./calendar.svg";
export { default as PersonalIcon } from "./personal-icon.svg";
export { default as FileProtection } from "./file-protection.svg";
export { default as LoveHelp } from "./love-and-help.svg";
export { default as Heart } from "./heart-ballon.svg";
export { default as Writing } from "./writing.svg";
export { default as WorriedFace } from "./worried-face.svg";
export { default as UserPosition } from "./user-position.svg";
export { default as Bone } from "./bone.svg";
export { default as Spoon } from "./spoon.svg";
export { default as GreenBlood } from "./green-blood.svg";
export { default as NordicWalking } from "./nordic-walking.svg";
export { default as Brain } from "./brain.svg";
export { default as Park } from "./park.svg";
export { default as Swimming } from "./swimming.svg";
export { default as Medicine } from "./medicine.svg";
export { default as PlusBox } from "./plus-box.svg";
export { default as ClockArrowDown } from "./clock-arrow-down.svg";
export { default as SearchVisual } from "./search-visual.svg";
export { default as DocumentFolder } from "./document-folder.svg";
export { default as UserDoctor } from "./user-doctor.svg";
export { default as AccountClock } from "./account-clock.svg";
export { default as AccountHeart } from "./account-heart.svg";
export { default as AccountGroup } from "./account-group.svg";
export { default as ClipBoard } from "./clipboard.svg";
export { default as ListHeart } from "./list-heart.svg";
export { default as ClipboardRevert } from "./clipboard-revert.svg";


interface Prop {
  color: string;
  className?:string;
  closeHandler: () => void;
}

export const RadixIconsCrossCircled = ({ color, className, closeHandler }: Prop) => (
  <svg
    width="35"
    height="36"
    viewBox="0 0 35 36"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    onClick={closeHandler}
  >
    <path
      fill={color}
      d="M2.04639 18.0001C2.04639 13.9015 3.67454 9.97079 6.57266 7.07266C9.47079 4.17454 13.4015 2.54639 17.5001 2.54639C21.5986 2.54639 25.5293 4.17454 28.4274 7.07266C31.3256 9.97079 32.9537 13.9015 32.9537 18.0001C32.9537 22.0986 31.3256 26.0293 28.4274 28.9274C25.5293 31.8256 21.5986 33.4537 17.5001 33.4537C13.4015 33.4537 9.47079 31.8256 6.57266 28.9274C3.67454 26.0293 2.04639 22.0986 2.04639 18.0001ZM17.5001 4.76305C13.9894 4.76305 10.6225 6.15766 8.14008 8.64008C5.65766 11.1225 4.26305 14.4894 4.26305 18.0001C4.26305 21.5107 5.65766 24.8776 8.14008 27.36C10.6225 29.8424 13.9894 31.2371 17.5001 31.2371C21.0107 31.2371 24.3776 29.8424 26.86 27.36C29.3424 24.8776 30.7371 21.5107 30.7371 18.0001C30.7371 14.4894 29.3424 11.1225 26.86 8.64008C24.3776 6.15766 21.0107 4.76305 17.5001 4.76305ZM22.9927 12.5097C23.2114 12.7285 23.3343 13.0252 23.3343 13.3346C23.3343 13.6439 23.2114 13.9406 22.9927 14.1594L19.1497 18.0001L22.9927 21.8407C23.2118 22.0598 23.3349 22.3569 23.3349 22.6667C23.3349 22.9765 23.2118 23.2737 22.9927 23.4927C22.7737 23.7118 22.4765 23.8349 22.1667 23.8349C21.8569 23.8349 21.5598 23.7118 21.3407 23.4927L17.5001 19.6497L13.6594 23.4927C13.5509 23.6012 13.4221 23.6872 13.2804 23.7459C13.1387 23.8046 12.9868 23.8349 12.8334 23.8349C12.68 23.8349 12.5281 23.8046 12.3864 23.7459C12.2446 23.6872 12.1159 23.6012 12.0074 23.4927C11.8989 23.3842 11.8129 23.2555 11.7542 23.1137C11.6955 22.972 11.6652 22.8201 11.6652 22.6667C11.6652 22.5133 11.6955 22.3614 11.7542 22.2197C11.8129 22.078 11.8989 21.9492 12.0074 21.8407L15.8504 18.0001L12.0074 14.1594C11.7883 13.9403 11.6652 13.6432 11.6652 13.3334C11.6652 13.0236 11.7883 12.7265 12.0074 12.5074C12.2265 12.2883 12.5236 12.1652 12.8334 12.1652C13.1432 12.1652 13.4403 12.2883 13.6594 12.5074L17.5001 16.3504L21.3407 12.5074C21.4491 12.3987 21.5778 12.3125 21.7196 12.2537C21.8613 12.1949 22.0133 12.1646 22.1667 12.1646C22.3202 12.1646 22.4721 12.1949 22.6139 12.2537C22.7556 12.3125 22.8843 12.4011 22.9927 12.5097Z"
    />
  </svg>
);
